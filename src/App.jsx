import "./styles/reset.css";
import "./styles/global.scss";

import { Card } from "./components/Card";
import { Form } from "./components/Form";
import { Completed } from "./components/Completed";

import bgMainMobile from "./images/bg-main-mobile.png";
import bgMainDesktop from "./images/bg-main-desktop.png";
import { useContext } from "react";
import { FormContext } from "./context/FormContext";

function App() {
	const { confirmed } = useContext(FormContext);

	return (
		<>
			<picture>
				<source media="(min-width: 1440px)" srcSet={bgMainDesktop} />
				<img src={bgMainMobile} />
			</picture>

			<Card />

			<div className="actions-wrapper">{confirmed ? <Completed /> : <Form />}</div>
		</>
	);
}

export default App;
