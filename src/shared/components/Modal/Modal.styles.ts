export const containerBlockStyle = { width: "fit-content" } as const;

export const overlayStyle = (theme: TTheme) =>
	({
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		animation: `${theme.visible} .2s ease-in-out`,
	} as const);
