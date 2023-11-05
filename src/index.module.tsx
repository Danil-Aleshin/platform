import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./app/App";
import { getRoutesConfig } from "./shared/configs";
import { IModule, Module, registerModule } from "../../../libs/module-expander";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);

export class Platform extends Module implements IModule {}

registerModule({
	name: "platform",
	routesConfig: getRoutesConfig,
})(Platform);
