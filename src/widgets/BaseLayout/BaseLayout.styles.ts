import { headerHeight } from "../Header/Header.styles";
import { sidebarWidth } from "../Sidebar/Sidebar.styles";

export const baseLayoutStyle = {
	display: "grid",
	gridTemplateAreas: "'sidebar header header' 'sidebar main main' 'sidebar main main'",
	gridTemplateColumns: `${sidebarWidth}px 1fr`,
	gridTemplateRows: `${headerHeight}px calc(100vh - ${headerHeight}px)`,
} as TStyles;

export const mainWrapperStyle = {
	gridArea: "main",
	height: "100%",
	padding: 30,
} as const;
