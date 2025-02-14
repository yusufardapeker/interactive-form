import { createRoot } from "react-dom/client";
import App from "./App";

import { FormProvider } from "./context/FormContext";

createRoot(document.getElementById("root")).render(
	<FormProvider>
		<App />
	</FormProvider>
);
