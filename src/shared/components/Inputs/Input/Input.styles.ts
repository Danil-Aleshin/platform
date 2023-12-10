export const inputStyle = (theme: TTheme): TStyles => ({
	border: "none",
	outline: "none",
	padding: "9px",
	borderRadius: theme.defaultBorderRadius,
	backgroundColor: theme.grey3Color,
	"&:placeholder": {
		color: theme.geekBlue2Color,
	},
});

export const inputWrapperStyle = {
	position: "relative",
	display: "flex",
	flexDirection: "column",
} as const;

export const wrapperStyle = { display: "flex", flexDirection: "column", gap: 5 } as const;

export const prefixStyle = {
	position: "absolute",
	top: "55%",
	transform: "translateY(-50%)",
	left: "9.5px",
} as const;

export const isPrefixInputStyle = { paddingLeft: "33px" };

export const labelStyle = {
	fontSize: 14,
	paddingBottom: 5,
};
