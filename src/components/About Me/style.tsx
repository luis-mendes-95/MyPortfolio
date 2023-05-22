import { styled } from "@/styles/stitches.config";
import { Flex } from "@/styles/Global";
import { Text } from "@/styles/Text";

export const AboutMeStack = styled(Flex, {
  margin: "1.25rem 0 1.25rem 0",
  "@mobileLittle": {
    flexDirection: "column",
    alignItems: "self-start",
  },
});

export const AboutMeStackTech = styled("span", {
  backgroundColor: "$grey1",
  color: "$grey2",
  padding: "0  0.5rem",
  borderRadius: "$2",
});

export const AboutMeLinks = styled(Flex, {
  marginTop: "2.25rem",
});

export const AboutMeLink = styled("a", {
  fontSize: "1rem",
  color: "$grey2",
  fontWeight: "500",
  marginRight: "$2",
  display: "flex",
  alignItems: "center",
  lineHeight: "0",

  "&:hover": {
    color: "$grey5",
  },

  [`& svg`]: {
    marginRight: "$1",
  },
});

export const AboutMeTitle = styled(Text, {
  fontWeight: "bold"
});

export const AboutMe = styled("article", {
  marginTop: "4rem",
  [`&:first-child`]: {
    [`& ${AboutMeTitle}:first-child`]: {
      position: "relative",
      width: "max-content",

      "@mobile": {
        width: "auto",
      },

      "&::before": {
        position: "absolute",
        top: "5px",
        right: "-4rem",
        width: "max-content",
        height: "28px",
        backgroundColor: "$brand1",
        padding: "0px 8px",
        borderRadius: "var(--radii-1)",
        fontSize: "14px",
        color: "var(--colors-whiteFixed)",
        fontWeight: "400",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Inter",

        "@mobile": {
          letf: 0,
          top: "-2.5rem",
          right: "auto",
        },
      },
    },
  },
});
