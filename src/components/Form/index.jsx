import React, { useContext, useRef, useEffect } from "react";
import "./form.scss";
import { FormContext } from "../../context/FormContext";

function Form() {
	const {
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
		handleConfirm,
	} = useContext(FormContext);

	const expMonthInput = useRef();
	const expYearInput = useRef();
	const cvcInput = useRef();

	useEffect(() => {
		if (expMonthInput.current.value.length === 2) {
			expYearInput.current.focus();

			if (expYearInput.current.value.length === 2) {
				cvcInput.current.focus();
			}
		}
	}, [expMonth, expYear]);

	return (
		<form>
			<div className="cardholder-name">
				<label htmlFor="name">Cardholder Name</label>
				<input
					type="text"
					id="name"
					name="name"
					placeholder="e.g. Jane Appleseed"
					onChange={(e) => setName(e.target.value)}
					value={name}
				/>
			</div>

			<div className="card-number">
				<label htmlFor="card-number">Card Number</label>
				<input
					type="text"
					id="card-number"
					name="card-number"
					placeholder="e.g. 1234 5678 9123 0000"
					onChange={(e) => handleCardNumber(e)}
					value={cardNumber}
				/>
			</div>

			<div className="date-cvc-wrapper">
				<div className="expire-date">
					<label htmlFor="exp-month">Exp. Date (mm/yy)</label>

					<div className="inputs-wrapper">
						<input
							type="number"
							id="exp-month"
							name="exp-month"
							placeholder="mm"
							onChange={(e) => handleExpMonth(e)}
							value={expMonth}
							ref={expMonthInput}
						/>
						<input
							type="number"
							id="exp-year"
							name="exp-year"
							placeholder="yy"
							onChange={(e) => handleExpYear(e)}
							value={expYear}
							ref={expYearInput}
						/>
					</div>
				</div>
				<div className="cvc">
					<label htmlFor="cvc">Cvc</label>
					<input
						type="number"
						id="cvc"
						name="cvc"
						placeholder="e.g. 123"
						onChange={(e) => handleCvc(e)}
						value={cvc}
						ref={cvcInput}
					/>
				</div>
			</div>

			<button type="submit" className="btn" disabled={!isValid()} onClick={(e) => handleConfirm(e)}>
				Confirm
			</button>
		</form>
	);
}

export { Form };
