import { type FC } from "react";
import { INavigationItemProps } from "./NavigationItem.types";
import { Link } from "react-router-dom";
import { navItemStyle } from "./NavigationItem.styles";

const NavigationItemComponent: FC<INavigationItemProps> = (props) => {
	const { route } = props;

	const Icon = route.icon;

	return (
		<Link css={navItemStyle} to={route.path}>
			<Icon width={24} height={24} />
		</Link>
	);
};

export const NavigationItem = NavigationItemComponent;
