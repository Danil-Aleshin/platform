import { useMemo, type FC, useCallback } from "react";
import { containerWrapperStyles } from "./ContainerBlock.styles";
import { IContainerBlockProps } from "./ContainerBlock.types";

const ContainerBlockComponent: FC<IContainerBlockProps> = ({ children, additionalStyles }) => {
	const styles = useMemo(() => [containerWrapperStyles, additionalStyles], [additionalStyles]);

	const handleClick = useCallback((e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		e.stopPropagation();
	}, []);

	return (
		<div onClick={handleClick} css={styles}>
			{children}
		</div>
	);
};

export const ContainerBlock = ContainerBlockComponent;
