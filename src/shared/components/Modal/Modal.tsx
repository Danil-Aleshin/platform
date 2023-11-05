import { type FC } from "react";
import { IModalProps } from "./Model.types";
import { ContainerBlock } from "../ContainerBlock/ContainerBlock";
import { containerBlockStyle, overlayStyle } from "./Modal.styles";
import { Overlay } from "../Overlay/Overlay";

const ModalComponent: FC<IModalProps> = ({ children, ...rest }) => {
	return (
		<Overlay additionalStyles={overlayStyle} {...rest}>
			<ContainerBlock additionalStyles={containerBlockStyle}>{children}</ContainerBlock>
		</Overlay>
	);
};

export const Modal = ModalComponent;
