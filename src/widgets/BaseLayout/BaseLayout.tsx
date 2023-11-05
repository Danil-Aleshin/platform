import { FC } from "react";
import { baseLayoutStyle, mainWrapperStyle } from "./BaseLayout.styles";
import { Header } from "../Header/Header";
import { Sidebar } from "../Sidebar/Sidebar";

interface IBaseLayout extends React.PropsWithChildren {}

const BaseLayoutComponent: FC<IBaseLayout> = ({ children }) => {
	return (
		<div css={baseLayoutStyle}>
			<Sidebar />
			<Header />
			<main css={mainWrapperStyle}>{children}</main>
		</div>
	);
};

export const BaseLayout = BaseLayoutComponent;
