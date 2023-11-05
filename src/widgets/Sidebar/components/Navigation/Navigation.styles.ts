export const navBlockStyle = (theme: TTheme) =>
	({
		width: "100%",
		height: "100%",
		borderTop: `1px solid ${theme.grey5Color}`,
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		rowGap: 35,
		padding: "35px 0px 0px 0px",
	}) as const;
