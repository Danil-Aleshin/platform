export interface ISearchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "prefix"> {
	label?: React.ReactNode;
	inputStyle?: TStyles;
	wrapperStyle?: TStyles;
}
