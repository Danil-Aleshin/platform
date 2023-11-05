export const sidebarWidth = 70;

export const sidebarStyle = (theme: TTheme) =>
	({
		gridArea: "sidebar",
		height: "100%",
		backgroundColor: theme.whiteColor,
		borderRadius: 15,
		padding: "30px 13px",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		rowGap: 30,
	}) as const;
