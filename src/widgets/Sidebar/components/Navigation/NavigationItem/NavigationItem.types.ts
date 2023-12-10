import { NCore } from "../../../../../../../../libs/module-expander";

export interface INavigationItemProps {
	route: NCore.IRoute;
}

export interface INavLinkRenderProps {
	isActive: boolean;
	isPending: boolean;
	isTransitioning: boolean;
}
