import { RoutesContext } from "platform/src/app/contexts/RoutesContext";
import { useContext, type FC } from "react";
import { NavigationItem } from "./NavigationItem/NavigationItem";
import { navBlockStyle } from "./Navigation.styles";

const NavigationComponent: FC = () => {
	const routes = useContext(RoutesContext);

	return (
		<nav css={navBlockStyle}>
			{routes?.map((route) => <NavigationItem key={route.path} route={route} />)}
		</nav>
	);
};

export const Navigation = NavigationComponent;
