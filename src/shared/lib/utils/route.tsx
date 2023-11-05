import { NCore } from "../../../../../../libs/module-expander";

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
		if (a.priority === undefined) {
			return 1;
		}
		if (b.priority === undefined) {
			return 1;
		}

		return a.priority > b.priority ? -1 : 1;
	});

	return routesConfig;
};
