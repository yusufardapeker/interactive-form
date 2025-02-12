import React from "react";
import "./card.scss";

import cardBackImg from "../../images/bg-card-back.png";
import cardFrontImg from "../../images/bg-card-front.png";

import cardLogo from "../../images/card-logo.svg";

function Card() {
	return (
		<div>
			<div className="card-back-wrapper">
				<img src={cardBackImg} />

				<span className="cvc-number">000</span>
			</div>

			<div className="card-front-wrapper">
				<img src={cardFrontImg} />

				<div className="content">
					<img src={cardLogo} className="card-logo" />

					<div className="card-information">
						<p className="card-number">0000 0000 0000 0000</p>

						<div className="name-date-wrapper">
							<p className="name">Jane Appleseed</p>
							<span className="date">00/00</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export { Card };
