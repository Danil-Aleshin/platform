import { type FC } from "react";
import AppProvider from "./providers/AppProvider";
import { IntermediaryModules } from "../../../../libs/module-expander";

const AppComponent: FC = () => {
	const expanderInstance = IntermediaryModules.getInstance();
	const routesConfig = expanderInstance.getRoutes();

	return <AppProvider routes={routesConfig} />;
};

export const App = AppComponent;
