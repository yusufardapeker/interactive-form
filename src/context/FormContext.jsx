import React, { createContext, useState } from "react";

export const FormContext = createContext();

function FormProvider({ children }) {
	const [name, setName] = useState("Jane Appleseed");
	const [cardNumber, setCardNumber] = useState("0000 0000 0000 0000");
	const [expMonth, setExpMonth] = useState("00");
	const [expYear, setExpYear] = useState("00");
	const [cvc, setCvc] = useState("000");
	const [showConfirmed, setShowConfirmed] = useState(false);

	return <FormContext.Provider value={{}}>{children}</FormContext.Provider>;
}

export { FormProvider };
