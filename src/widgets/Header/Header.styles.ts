export const headerHeight = 50;

export const headerWrapperStyle = () =>
	({
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		width: "100%",
		gridArea: "header",
		height: "100%",
		padding: "30px 30px 0px 30px",
	}) as const;

export const headerLeftStyle = {
	display: "flex",
	justifyContent: "space-between",
	alignItems: "center",
	gap: 15,
} as const;

export const inputStyle = { maxWidth: 245 };
