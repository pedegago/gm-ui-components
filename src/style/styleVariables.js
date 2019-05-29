// COLORS
export const COLOR_BRAND_A = "hsl(135, 100%, 35%)";
export const COLOR_BRAND_B = "hsl(135, 100%, 35%)";
export const COLOR_CONTENT = "#000";

export const COLOR_BACKGROUND_A = "#fff";
export const COLOR_BACKGROUND_B = "#F8F8F8";
export const COLOR_BACKGROUND_C = "#000";

export const COLOR_INTENT_HIGHLIGHT = COLOR_BRAND_A;
export const COLOR_INTENT_SUCCESS = COLOR_BRAND_A;
export const COLOR_INTENT_DANGER = "#D83D22"; // WCAG AA+
export const COLOR_INTENT_WARNING = "#F7CD45"; // WCAG AA+
export const COLOR_INTENT_INFO = "#1E6DF6"; // WCAG AA+

export const COLOR_KEYLINE = "rgba(0,0,0,0.08)";
export const COLOR_KEYLINE_SOLID = "#EBEBEB";

export const OPACITY_100 = "1";
export const OPACITY_70 = "0.7";
export const OPACITY_50 = "0.5";
export const OPACITY_15 = "0.15";

// LAYOUT
export const BORDER_RADIUS_BASE = "3px"; // Will be changed to 4px
export const SPACING_BASE = 8;
export const ICON_VIEWBOX_SIZE = SPACING_BASE * 3; // Move to Icons component?

export const ZINDEX_TOOLTIP = "1070";
export const ZINDEX_STICKY = "1010";

export const RADIUS_05 = "4px"; // spacingScale(0.5);
export const RADIUS_1 = "8px"; // spacingScale(1);
export const RADIUS_2 = "16px"; // spacingScale(2);
export const RADIUS_3 = "24px"; // spacingScale(3);
export const RADIUS_4 = "32px"; // spacingScale(4);
export const RADIUS_5 = "40px"; // spacingScale(5);
export const RADIUS_6 = "48px"; // spacingScale(6);
export const RADIUS_7 = "56px"; // spacingScale(7);
export const RADIUS_8 = "64px"; // spacingScale(8);

// TYPOGRAPHY
export const FONTS_SYSTEM = `-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif`;
export const FONTS_BRAND = `"Avenir Next", "Metropolis", "Helvetica Neue", Arial, sans-serif`;
export const FONTS_CODE = `"SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace`;

export const FONT_STACK_BASE = `${FONTS_SYSTEM}`;
export const FONT_STACK_BRAND = `${FONTS_BRAND}, ${FONTS_SYSTEM}`;
export const FONT_STACK_CODE = `${FONTS_CODE}, ${FONTS_SYSTEM}`;

export const FONT_SIZE_HERO = "40px";
export const FONT_SIZE_TITLE = "36px"; // Will be changed to 32px
export const FONT_SIZE_LG = "18px"; // Will be changed to 24px
export const FONT_SIZE_MD = "16px"; // Will be changed to 18px
export const FONT_SIZE_BASE = "14px";
export const FONT_SIZE_SM = "11px"; // Will be changed to 12px
export const FONT_SIZE_XS = "9px"; // Will be changed to 10px

export const LINE_HEIGHT_BASE = 1.4;
export const FONT_WEIGHT_BASE = 400;
export const FONT_WEIGHT_SEMIBOLD = FONT_WEIGHT_BASE * 1.25; // Will be changed to 600
export const FONT_WEIGHT_BOLD = 800; // Will be changed to 700 or 800

// DEPRECATE
export const DARK_ON_LIGHT_CONTRAST_ENHANCEMENT_RATIO = 2;

export const keen = {
  name: "Keen",

  COLOR_BRAND_A: "hsl(135,100%,35%)",
  COLOR_BRAND_B: "hsl(135,100%,35%)",
  COLOR_CONTENT: "hsla(0,0%,1%,0.9)",

  COLOR_BACKGROUND_A: "hsl(0,0%,100%)",
  COLOR_BACKGROUND_B: "hsl(0,0%,99%)",
  COLOR_BACKGROUND_C: "hsl(0,0%,97%)",

  COLOR_INTENT_HIGHLIGHT: "hsl(135,100%,35%)",
  COLOR_INTENT_SUCCESS: "hsl(135,100%,35%)",
  COLOR_INTENT_DANGER: "hsl(9,73%,49%)", // WCAG AA+
  COLOR_INTENT_WARNING: "hsl(46,92%,62%)", // WCAG AA+
  COLOR_INTENT_INFO: "hsl(218,92%,54%)", // WCAG AA+

  COLOR_KEYLINE: "hsla(0,0%,0%,0.08)",
  COLOR_KEYLINE_SOLID: "hsl(0,0%,92%)",

  OPACITY_100: "1",
  OPACITY_70: "0.7",
  OPACITY_50: "0.5",
  OPACITY_15: "0.15",

  // LAYOUT
  BORDER_RADIUS_BASE: "4px", // Will be changed to 4px
  SPACING_BASE: 8,
  ICON_VIEWBOX_SIZE: 24, // Move to Icons component?

  ZINDEX_TOOLTIP: "1070",
  ZINDEX_STICKY: "1010",

  RADIUS_05: "4px", // spacingScale(0.5)
  RADIUS_1: "8px", // spacingScale(1)
  RADIUS_2: "16px", // spacingScale(2)
  RADIUS_3: "24px", // spacingScale(3)
  RADIUS_4: "32px", // spacingScale(4)
  RADIUS_5: "40px", // spacingScale(5)
  RADIUS_6: "48px", // spacingScale(6)
  RADIUS_7: "56px", // spacingScale(7)
  RADIUS_8: "64px", // spacingScale(8)

  // TYPOGRAPHY
  FONTS_SYSTEM: `-apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif`,
  FONTS_BRAND: `"Avenir Next","Metropolis","Helvetica Neue",Arial,sans-serif`,
  FONTS_CODE: `"SFMono-Regular",Consolas,"Liberation Mono",Menlo,Courier,monospace`,

  FONT_STACK_BASE: `-apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif`,
  FONT_STACK_BRAND: `"Avenir Next","Metropolis","Helvetica Neue",Arial,sans-serif`,
  FONT_STACK_CODE: `"SFMono-Regular",Consolas,"Liberation Mono",Menlo,Courier,monospace`,

  FONT_SIZE_HERO: "40px",
  FONT_SIZE_TITLE: "32px",
  FONT_SIZE_LG: "24px",
  FONT_SIZE_MD: "18px",
  FONT_SIZE_BASE: "14px",
  FONT_SIZE_SM: "12px",
  FONT_SIZE_XS: "10px",

  LINE_HEIGHT_BASE: 1.4,
  FONT_WEIGHT_BASE: 400,
  FONT_WEIGHT_SEMIBOLD: 600,
  FONT_WEIGHT_BOLD: 800
};

export const keenDark = {
  name: "KeenDark",

  COLOR_BRAND_A: "hsl(135,100%,35%)",
  COLOR_BRAND_B: "hsl(135,100%,35%)",
  COLOR_CONTENT: "hsla(0,0%,100%,0.875)",

  COLOR_BACKGROUND_A: "hsl(0,0%,1%)",
  COLOR_BACKGROUND_B: "hsl(0,0%,10%)",
  COLOR_BACKGROUND_C: "hsl(0,0%,20%)",

  COLOR_INTENT_HIGHLIGHT: "hsl(135,100%,35%)",
  COLOR_INTENT_SUCCESS: "hsl(135,100%,35%)",
  COLOR_INTENT_DANGER: "hsl(9,73%,51%)", // WCAG AA+
  COLOR_INTENT_WARNING: "hsl(46,92%,64%)", // WCAG AA+
  COLOR_INTENT_INFO: "hsl(218,92%,56%)", // WCAG AA+

  COLOR_KEYLINE: "hsla(0,0%,100%,0.16)",
  COLOR_KEYLINE_SOLID: "hsl(0,0%,24%)",

  OPACITY_100: "1",
  OPACITY_70: "0.7",
  OPACITY_50: "0.5",
  OPACITY_15: "0.15",

  // LAYOUT
  BORDER_RADIUS_BASE: "4px", // Will be changed to 4px
  SPACING_BASE: 8,
  ICON_VIEWBOX_SIZE: 24, // Move to Icons component?

  ZINDEX_TOOLTIP: "1070",
  ZINDEX_STICKY: "1010",

  RADIUS_05: "4px", // spacingScale(0.5)
  RADIUS_1: "8px", // spacingScale(1)
  RADIUS_2: "16px", // spacingScale(2)
  RADIUS_3: "24px", // spacingScale(3)
  RADIUS_4: "32px", // spacingScale(4)
  RADIUS_5: "40px", // spacingScale(5)
  RADIUS_6: "48px", // spacingScale(6)
  RADIUS_7: "56px", // spacingScale(7)
  RADIUS_8: "64px", // spacingScale(8)

  // TYPOGRAPHY
  FONTS_SYSTEM: `-apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif`,
  FONTS_BRAND: `"Avenir Next","Metropolis","Helvetica Neue",Arial,sans-serif`,
  FONTS_CODE: `"SFMono-Regular",Consolas,"Liberation Mono",Menlo,Courier,monospace`,

  FONT_STACK_BASE: `-apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif`,
  FONT_STACK_BRAND: `"Avenir Next","Metropolis","Helvetica Neue",Arial,sans-serif`,
  FONT_STACK_CODE: `"SFMono-Regular",Consolas,"Liberation Mono",Menlo,Courier,monospace`,

  FONT_SIZE_HERO: "40px",
  FONT_SIZE_TITLE: "32px",
  FONT_SIZE_LG: "24px",
  FONT_SIZE_MD: "18px",
  FONT_SIZE_BASE: "14px",
  FONT_SIZE_SM: "12px",
  FONT_SIZE_XS: "10px",

  LINE_HEIGHT_BASE: 1.4,
  FONT_WEIGHT_BASE: 400,
  FONT_WEIGHT_SEMIBOLD: 600,
  FONT_WEIGHT_BOLD: 800
};
