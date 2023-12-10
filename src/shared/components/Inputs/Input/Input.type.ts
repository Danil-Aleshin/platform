export interface IInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "prefix"> {
	inputStyle?: TStyles;
	wrapperStyle?: TStyles;
	prefix?: React.ReactNode;
	label?: React.ReactNode;
}
