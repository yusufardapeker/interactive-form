import React, { createContext, useState } from "react";

export const FormContext = createContext();

function FormProvider({ children }) {
	const [name, setName] = useState("");
	const [cardNumber, setCardNumber] = useState("");
	const [expMonth, setExpMonth] = useState("");
	const [expYear, setExpYear] = useState("");
	const [cvc, setCvc] = useState("");
	const [confirmed, setConfirmed] = useState(false);

	const cardNumberPattern = /^\d{0,16}$/;
	const expDatePattern = /^\d{0,2}$/;
	const cvcPattern = /^\d{0,3}$/;

	const handleCardNumber = (e) => {
		const inputValue = e.target.value.replace(/\s+/g, "");

		if (cardNumberPattern.test(inputValue)) {
			const formattedValue = inputValue.match(/.{1,4}/g)?.join(" ") || "";
			setCardNumber(formattedValue);
		}
	};

	const handleExpMonth = (e) => {
		const inputValue = e.target.value;

		if (expDatePattern.test(inputValue)) {
			setExpMonth(inputValue);
		}
	};

	const handleExpYear = (e) => {
		const inputValue = e.target.value;

		if (expDatePattern.test(inputValue)) {
			setExpYear(inputValue);
		}
	};

	const handleCvc = (e) => {
		const inputValue = e.target.value;

		if (cvcPattern.test(inputValue)) {
			setCvc(inputValue);
		}
	};

	const isValid = () => {
		if (
			name &&
			cardNumber.length === 19 &&
			expMonth.length === 2 &&
			expYear.length === 2 &&
			cvc.length === 3
		) {
			return false;
		}

		return true;
	};

	return (
		<FormContext.Provider
			value={{
				handleCardNumber,
				cardNumber,
				name,
				setName,
				handleExpMonth,
				handleExpYear,
				handleCvc,
				expMonth,
				expYear,
				cvc,
				isValid,
			}}
		>
			{children}
		</FormContext.Provider>
	);
}

export { FormProvider };
