import { keyframes } from "@emotion/react";

const colors = {
	/*** =========================== Colors  =========================== ***/
	transparentColor: "rgba(0, 0, 0, 0)",

	/** --------------------------------- Default -------------------------------- **/
	whiteColor: "#FFF",
	blackColor: "#000",

	/** --------------------------------- Blue -------------------------------- **/
	blue2Color: "#1b2730",
	blue3Color: "#06141d",
	/** --------------------------------- Azure -------------------------------- **/
	azure1Color: "#1DA2F3",

	/** --------------------------------- Grey -------------------------------- **/
	grey2Color: "#FAFAFA",
	grey3Color: "#F5F5F5",
	grey4Color: "#F0F0F0",
	grey45Color: "#E6E6E6",
	grey5Color: "#D9D9D9",
	grey6Color: "#BFBFBF",
	grey65Color: "#ABABAB",
	grey7Color: "#8C8C8C",
	grey75Color: "#737373",
	grey8Color: "#595959",
	grey9Color: "#434343",
	grey10Color: "#262626",
	grey11Color: "#1f1f1f",
	grey12Color: "#141414",
	grey14Color: "#5F6E78",
	/** --------------------------------- Red -------------------------------- **/
	/** --------------------------------- Volcano -------------------------------- **/
	/** --------------------------------- Yellow -------------------------------- **/
	/** --------------------------------- Orange -------------------------------- **/
	/** --------------------------------- Gold -------------------------------- **/
	/** --------------------------------- Green -------------------------------- **/
	primaryColor: "#34B53A",
	/** --------------------------------- Cyan -------------------------------- **/
	/** --------------------------------- GeekBlue -------------------------------- **/
	geekBlue1Color: "#F0F5FF",
	geekBlue2Color: "#c7d6e5", //main iconColor
	geekBlue4Color: "#85A5FF",
	/** --------------------------------- Lime -------------------------------- **/
};

export const theme = {
	// ----- padding && margin -----//
	containerSpaces: "30px 40px 30px 40px",
	// ----- fontSize -----//
	h0FontSize: 40,
	h1FontSize: 24,
	h2FontSize: 22,
	h3FontSize: 18,
	subtitleFontSize: 16,
	h4FontSize: 14,
	h5FontSize: 12,
	h6FontSize: 10,
	// ----- fontSize -----//

	// ----- lineHeight -----//
	verySmallLineHeight: 20,
	defaultLineHeight: 22,
	smallLineHeight: 24,
	mediumLineHeight: 32,
	largeLineHeight: 40,
	// ----- lineHeight -----//

	// ----- borderRadius -----//
	defaultBorderRadius: 10,
	// ----- borderRadius -----//

	transition: ".3s ease-in-out",
	visible: keyframes`
  	from, 0%, 100%, to {
    	opacity: 0;
  	}
  	100% {
    	opacity:1;
  	}
	`,
	animation2: keyframes`
  	from, 0%, 100%, to {
    	opacity: 1;
  	}
  	100% {
    	opacity:0;
  	}
	`,
	...colors,
} as const;

export const getPlatformThemeConfig = () => theme;
