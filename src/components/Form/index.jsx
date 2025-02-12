import React from "react";
import "./form.scss";

function Form() {
	return (
		<form>
			<div className="cardholder-name">
				<label htmlFor="name">Cardholder Name</label>
				<input type="text" id="name" name="name" placeholder="e.g. Jane Appleseed" />
			</div>

			<div className="card-number">
				<label htmlFor="card-number">Card Number</label>
				<input
					type="number"
					id="card-number"
					name="card-number"
					placeholder="e.g. 1234 5678 9123 0000"
				/>
			</div>

			<div className="date-cvc-wrapper">
				<div className="expire-date">
					<label htmlFor="exp-month">Exp. Date (mm/yy)</label>

					<div className="inputs-wrapper">
						<input type="number" id="exp-month" name="exp-month" placeholder="mm" />
						<input type="number" id="exp-year" name="exp-year" placeholder="yy" />
					</div>
				</div>
				<div className="cvc">
					<label htmlFor="cvc">Cvc</label>
					<input type="number" id="cvc" name="cvc" placeholder="e.g. 123" />
				</div>
			</div>

			<button type="submit" className="confirm-btn">
				Confirm
			</button>
		</form>
	);
}

export { Form };
