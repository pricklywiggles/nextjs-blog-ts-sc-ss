export const simpleTheme = {
  colors: {
    black: "#000e1a",
    white: "#fff",
    blue: "#007ce0",
    navy: "#004175",
    lightText: "#666",
    inherit: "inherit"
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512]
};

export const shapeVariants = {
  prop: "shape",
  variants: {
    circle: {
      borderRadius: "9999px"
    }
  }
};

export const headingVariants = {
  prop: "size",
  variants: {
    xxl: {
      fontSize: "2.5rem",
      lineHeight: 1.2,
      fontWeight: 800,
      letterSpacing: "-0.05rem",
      margin: "1rem 0"
    },
    xl: {
      fontSize: "2rem",
      lineHeight: 1.3,
      fontWeight: 800,
      letterSpacing: "-0.05rem",
      margin: "1rem 0"
    },
    lg: {
      fontSize: "1.5rem",
      lineHeight: 1.4,
      margin: "1rem 0"
    },
    md: {
      fontSize: "1.2rem",
      lineHeight: 1.5
    },
    sm: {
      fontSize: ".8rem",
      lineHeight: 1
    }
  }
};
export default simpleTheme;
