export const containerWrapperStyles = (theme: TTheme) =>
	({
		backgroundColor: theme.whiteColor,
		padding: "10px 15px 10px 15px",
		width: "100%",
		borderRadius: theme.defaultBorderRadius,
		// boxShadow: "0px 0px 20px 0px rgba(0, 0, 0, 0.21)",
	}) as const;
