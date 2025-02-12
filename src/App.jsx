import "./styles/reset.css";
import "./styles/global.scss";

import { Card } from "./components/Card";
import { Form } from "./components/Form";
import { Completed } from "./components/Completed";

import bgMainMobile from "./images/bg-main-mobile.png";
import bgMainDesktop from "./images/bg-main-desktop.png";

function App() {
	return (
		<>
			<picture>
				<source media="(min-width: 1440px)" srcSet={bgMainDesktop} />
				<img src={bgMainMobile} />
			</picture>

			<Card />

			<div className="actions-wrapper">
				<Form />
				<Completed />
			</div>
		</>
	);
}

export default App;
