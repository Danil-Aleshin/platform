import { PropsWithChildren } from "react";

export interface IOverlayProps extends PropsWithChildren {
	isOpen: boolean;
	handleHiddenModal: () => void;
	additionalStyles?: TStyles;
}
