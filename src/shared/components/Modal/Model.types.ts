import { PropsWithChildren } from "react";

export interface IModalProps extends PropsWithChildren {
	isOpen: boolean;
	handleHiddenModal: () => void;
}
