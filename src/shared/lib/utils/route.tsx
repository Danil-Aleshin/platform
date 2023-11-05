import { NCore } from "../../../../../../libs/module-expander";
import { isUndefined } from "./lodash";

export const getRoutes = (routesConfig: NCore.IRoute[]): NCore.IRoute[] => {
	const routes: NCore.IRoute[] = [];

	routesConfig.forEach((route) => {
		const RouteComponent = route.component;

		if (RouteComponent) {
			routes.push({ ...route, element: <RouteComponent /> });
		}
	});

	return routes;
};

export const sortRoutes = (routesConfig: NCore.IRoute[]): NCore.IRoute[] => {
	routesConfig.sort((a, b) => {
		if (isUndefined(a.priority)) {
			return 1;
		}
		if (isUndefined(b.priority)) {
			return 1;
		}

		return a.priority > b.priority ? -1 : 1;
	});

	return routesConfig;
};
