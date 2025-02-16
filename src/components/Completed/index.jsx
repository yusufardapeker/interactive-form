import React from "react";
import "./completed.scss";

import completedIcon from "../../images/icon-complete.svg";

function Completed() {
	return (
		<div className="completed">
			<img src={completedIcon} className="completed-icon" />

			<div className="text-content">
				<p className="message">Thank You!</p>

				<p className="description-text">We've added your card details</p>
			</div>

			<button className="btn">Continue</button>
		</div>
	);
}

export { Completed };
