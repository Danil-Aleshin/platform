import { useMemo, type FC } from "react";
import { useRoutes } from "react-router";
import { NCore } from "../../../../../libs/module-expander";
import { RoutesContext } from "../contexts/RoutesContext";
import { BaseLayout } from "platform/src/widgets";
import { getRoutes, sortRoutes } from "platform/src/shared/lib";

interface IRouterProviderProps {
	routesConfig: NCore.IRoute[];
}

const RouterProviderComponent: FC<IRouterProviderProps> = (props) => {
	const { routesConfig } = props;

	const routes = useMemo(() => sortRoutes(routesConfig), [routesConfig]);
	const renderRoutes = useRoutes(getRoutes(routesConfig));

	return (
		<RoutesContext.Provider value={routes}>
			<BaseLayout>{renderRoutes}</BaseLayout>
		</RoutesContext.Provider>
	);
};

export const RouterProvider = RouterProviderComponent;
