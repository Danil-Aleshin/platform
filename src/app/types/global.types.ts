import { Interpolation } from "@emotion/react";
import { Dispatch, SetStateAction } from "react";
import { theme } from "../styles/theme";

declare global {
	type TTheme = typeof theme;
	type TStyles = Interpolation<TTheme>;
	type TSetState<T> = Dispatch<SetStateAction<T>>;
}

declare module "@emotion/react" {
	// eslint-disable-next-line @typescript-eslint/naming-convention
	export interface Theme extends TTheme {}
}
