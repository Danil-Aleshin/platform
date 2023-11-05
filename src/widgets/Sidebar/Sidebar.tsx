import { type FC } from "react";
import { sidebarStyle } from "./Sidebar.styles";
import { LogoSVG } from "platform/src/shared";
import { Navigation } from "./components/Navigation/Navigation";
import { Link } from "react-router-dom";
import { homePath } from "platform/src/shared/configs";

const SidebarComponent: FC = () => {
	return (
		<aside css={sidebarStyle}>
			<Link to={homePath}>
				<LogoSVG width={36} height={36} />
			</Link>
			<Navigation />
		</aside>
	);
};

export const Sidebar = SidebarComponent;
