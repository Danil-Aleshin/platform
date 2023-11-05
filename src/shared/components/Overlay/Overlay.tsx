import { useMemo, type FC } from "react";
import { overlayStyle } from "./Overlay.styles";
import { IOverlayProps } from "./Overlay.types";

const OverlayComponent: FC<IOverlayProps> = ({
	handleHiddenModal,
	isOpen,
	children,
	additionalStyles,
}) => {
	if (!isOpen) {
		return null;
	}

	const styles = useMemo(() => [overlayStyle, additionalStyles], [additionalStyles]);

	return (
		<div onClick={handleHiddenModal} css={styles}>
			{children}
		</div>
	);
};

export const Overlay = OverlayComponent;
