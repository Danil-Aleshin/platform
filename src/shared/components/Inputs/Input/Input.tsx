import { FC, useMemo } from "react";
import { IInputProps } from "./Input.type";
import {
	inputStyle,
	inputWrapperStyle,
	isPrefixInputStyle,
	prefixStyle,
	wrapperStyle,
} from "./Input.styles";

const InputComponent: FC<IInputProps> = (props) => {
	const {
		inputStyle: inputStyleProps,
		wrapperStyle: wrapperStyleProps,
		label,
		prefix,
		...rest
	} = props;

	const inputStyles = useMemo(() => {
		const returnStyles: TStyles = [inputStyle];

		if (inputStyleProps) {
			returnStyles.push(inputStyleProps);
		}
		if (prefix) {
			returnStyles.push(isPrefixInputStyle);
		}

		return returnStyles;
	}, [inputStyleProps, prefix]);

	const inputWrapperStyles = useMemo(() => {
		const returnStyles: TStyles = [inputWrapperStyle];

		if (wrapperStyleProps) {
			returnStyles.push(wrapperStyleProps);
		}

		return returnStyles;
	}, [wrapperStyleProps]);

	const baseInputComponent = useMemo(
		() => (
			<div css={inputWrapperStyles}>
				{prefix && <span css={prefixStyle}>{prefix}</span>}
				<input css={inputStyles} {...rest} />
			</div>
		),
		[inputStyles, inputWrapperStyles, prefix, rest]
	);

	if (label) {
		return (
			<div css={wrapperStyle}>
				{label && <label>{label}</label>}
				{baseInputComponent}
			</div>
		);
	}

	return baseInputComponent;
};

export const Input = InputComponent;
