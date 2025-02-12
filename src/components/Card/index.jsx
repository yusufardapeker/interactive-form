import React from "react";
import "./card.scss";

import cardBackImg from "../../images/bg-card-back.png";
import cardFrontImg from "../../images/bg-card-front.png";

function Card() {
	return (
		<div>
			<div className="card-back-wrapper">
				<img src={cardBackImg} />
			</div>
			<div className="card-front-wrapper">
				<img src={cardFrontImg} />
			</div>
		</div>
	);
}

export { Card };
