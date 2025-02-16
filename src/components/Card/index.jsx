import React, { useContext } from "react";
import "./card.scss";

import cardBackImg from "../../images/bg-card-back.png";
import cardFrontImg from "../../images/bg-card-front.png";

import cardLogo from "../../images/card-logo.svg";
import { FormContext } from "../../context/FormContext";

function Card() {
	const { cardNumber, name, expMonth, expYear, cvc } = useContext(FormContext);

	return (
		<div>
			<div className="card-back-wrapper">
				<img src={cardBackImg} />

				<span className="cvc-number">{cvc || "000"}</span>
			</div>

			<div className="card-front-wrapper">
				<img src={cardFrontImg} />

				<div className="content">
					<img src={cardLogo} className="card-logo" />

					<div className="card-information">
						<p className="card-number">{cardNumber || "0000 0000 0000 0000"}</p>

						<div className="name-date-wrapper">
							<p className="name">{name || "Jane Appleseed"}</p>
							<span className="date">{`${expMonth || "00"} / ${expYear || "00"}`}</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export { Card };
