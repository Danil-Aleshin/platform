import { type FC } from "react";
import { INavigationItemProps, INavLinkRenderProps } from "./NavigationItem.types";
import { NavLink } from "react-router-dom";
import "./NavigationItem.css";

const getClassName = ({ isActive }: INavLinkRenderProps) => {
	const baseClassName = "nav__link";

	return isActive ? `${baseClassName} nav__link--active` : baseClassName;
};

const NavigationItemComponent: FC<INavigationItemProps> = (props) => {
	const { route } = props;

	const Icon = route.icon;

	return (
		<NavLink className={getClassName} to={route.path}>
			<Icon width={24} height={24} />
		</NavLink>
	);
};

export const NavigationItem = NavigationItemComponent;
