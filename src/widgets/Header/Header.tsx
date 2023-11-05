import { type FC } from "react";
import { IHeaderProps } from "./Header.types";
import { headerLeftStyle, headerWrapperStyle } from "./Header.styles";
import { Search } from "platform/src/shared";

const HeaderComponent: FC<IHeaderProps> = () => {
	return (
		<header css={headerWrapperStyle}>
			<div css={headerLeftStyle}>
				<Search placeholder="Explore" />
			</div>
		</header>
	);
};

export const Header = HeaderComponent;
