export const navItemStyle = (theme: TTheme) => ({
	lineHeight: 0,
	"&:hover": { svg: { fill: theme.primaryColor } },
	"&:last-child": { marginTop: "auto" },
});
