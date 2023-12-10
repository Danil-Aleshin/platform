import { HomeSVG, CogwheelSVG } from "platform/src/shared";
import { NCore } from "../../../../../../libs/module-expander";
import { homePath, settingsPath } from "./path";
import { Home, Settings } from "platform/src/pages";

export const getRoutesConfig: NCore.TRoutesFunc = () => [
	{
		component: Home,
		path: homePath,
		priority: 1000,
		icon: HomeSVG,
	},
	{
		component: Settings,
		path: settingsPath,
		priority: 0,
		icon: CogwheelSVG,
	},
];
