import React, { useContext } from "react";
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
	} = useContext(FormContext);

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
						/>
						<input
							type="number"
							id="exp-year"
							name="exp-year"
							placeholder="yy"
							onChange={(e) => handleExpYear(e)}
							value={expYear}
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
					/>
				</div>
			</div>

			<button type="submit" className="confirm-btn" disabled={isValid()}>
				Confirm
			</button>
		</form>
	);
}

export { Form };
