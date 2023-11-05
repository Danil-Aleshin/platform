import { Global, ThemeProvider } from "@emotion/react";
import { FC } from "react";
import { BrowserRouter } from "react-router-dom";
import { theme } from "../styles/theme";
import { globalStyles } from "../styles/global.styles";
import { NCore } from "../../../../../libs/module-expander";
import { RouterProvider } from "./RouterProvider";

interface IAppProviderProps extends React.PropsWithChildren {
	routes: NCore.IRoute[];
}

const AppProvider: FC<IAppProviderProps> = ({ routes }) => {
	return (
		<ThemeProvider theme={theme}>
			<BrowserRouter>
				<Global styles={globalStyles} />
				<RouterProvider routesConfig={routes} />
			</BrowserRouter>
		</ThemeProvider>
	);
};

export default AppProvider;
