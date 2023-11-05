const htmlAndBodyStyle = (theme: TTheme) =>
	({
		"html,body": {
			height: "100%",
			minHeight: "100%",
			margin: 0,
			padding: 0,
			boxSizing: "border-box",
			overflow: "hidden",
			backgroundColor: theme.grey4Color,
			fontFamily: "'Poppins',sans-serif",
		},
	}) as const;

const allAttributesStyles = (theme: TTheme) =>
	({
		"*": {
			margin: 0,
			padding: 0,
			boxSizing: "border-box",
			color: theme.blackColor,
			fontWeight: "500",
		},
	}) as const;

const iconStyles = (theme: TTheme) =>
	({
		svg: { transition: `fill ${theme.transition}` },
	}) as const;

export const globalStyles = (theme: TTheme) =>
	({
		...htmlAndBodyStyle(theme),
		...allAttributesStyles(theme),
		...iconStyles(theme),
	}) as const;
