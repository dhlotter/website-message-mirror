/**
 * Color contrast utilities for ensuring accessibility
 */

/**
 * Converts a hex color to RGB
 * @param hex - Hex color string (e.g., '#ffffff' or 'ffffff')
 * @returns RGB values as { r: number, g: number, b: number } or null if invalid
 */
const hexToRgb = (hex: string) => {
  // Remove # if present
  const hexValue = hex.replace('#', '');
  
  // Parse r, g, b values
  const r = parseInt(hexValue.substring(0, 2), 16);
  const g = parseInt(hexValue.substring(2, 4), 16);
  const b = parseInt(hexValue.substring(4, 6), 16);
  
  // Return null if any value is NaN
  if (isNaN(r) || isNaN(g) || isNaN(b)) {
    return null;
  }
  
  return { r, g, b };
};

/**
 * Calculates the relative luminance of a color
 * @param r - Red value (0-255)
 * @param g - Green value (0-255)
 * @param b - Blue value (0-255)
 * @returns Relative luminance value (0-1)
 */
const getLuminance = (r: number, g: number, b: number): number => {
  // Convert sRGB to linear RGB
  const [rLinear, gLinear, bLinear] = [r, g, b].map(v => {
    v /= 255;
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  });
  
  // Calculate relative luminance
  return 0.2126 * rLinear + 0.7152 * gLinear + 0.0722 * bLinear;
};

/**
 * Calculates the contrast ratio between two colors
 * @param color1 - First color in hex format
 * @param color2 - Second color in hex format
 * @returns Contrast ratio (1-21)
 */
export const getContrastRatio = (color1: string, color2: string): number => {
  const rgb1 = hexToRgb(color1);
  const rgb2 = hexToRgb(color2);
  
  if (!rgb1 || !rgb2) return 1; // Default to minimum contrast if colors are invalid
  
  const lum1 = getLuminance(rgb1.r, rgb1.g, rgb1.b);
  const lum2 = getLuminance(rgb2.r, rgb2.g, rgb2.b);
  
  // Ensure lum1 is the lighter color
  const lighter = Math.max(lum1, lum2);
  const darker = Math.min(lum1, lum2);
  
  // Calculate contrast ratio
  return (lighter + 0.05) / (darker + 0.05);
};

/**
 * Checks if the contrast between two colors meets WCAG AA/AAA standards
 * @param color1 - First color in hex format
 * @param color2 - Second color in hex format
 * @returns Object with contrast information
 */
export const checkContrast = (color1: string, color2: string) => {
  const ratio = getContrastRatio(color1, color2);
  const roundedRatio = Math.round(ratio * 100) / 100;
  
  return {
    ratio: roundedRatio,
    aa: roundedRatio >= 4.5, // WCAG AA standard for normal text
    aaLarge: roundedRatio >= 3, // WCAG AA standard for large text (18pt+ or 14pt bold+)
    aaa: roundedRatio >= 7, // WCAG AAA standard for normal text
    aaaLarge: roundedRatio >= 4.5, // WCAG AAA standard for large text
  };
};

/**
 * Finds an accessible text color for a given background color
 * @param bgColor - Background color in hex format
 * @param lightColor - Light text color (default: white)
 * @param darkColor - Dark text color (default: dark gray)
 * @returns The most accessible text color (light or dark)
 */
export const getAccessibleTextColor = (
  bgColor: string,
  lightColor: string = '#ffffff',
  darkColor: string = '#333333'
): string => {
  const lightContrast = getContrastRatio(bgColor, lightColor);
  const darkContrast = getContrastRatio(bgColor, darkColor);
  
  // Return the color with the highest contrast
  return lightContrast >= darkContrast ? lightColor : darkColor;
};

/**
 * Generates a color palette with accessible text colors
 * @param baseColors - Object with color names and hex values
 * @returns Object with color information including accessible text colors
 */
export const generateAccessiblePalette = <T extends Record<string, string>>(
  baseColors: T
) => {
  return Object.entries(baseColors).reduce((acc, [name, color]) => {
    const textColor = getAccessibleTextColor(color);
    const contrast = checkContrast(color, textColor);
    
    return {
      ...acc,
      [name]: {
        color,
        textColor,
        contrast,
        get textStyle() {
          return { color: this.textColor, backgroundColor: this.color };
        },
      },
    };
  }, {} as Record<keyof T, {
    color: string;
    textColor: string;
    contrast: ReturnType<typeof checkContrast>;
    textStyle: { color: string; backgroundColor: string };
  }>);
};

/**
 * Checks if a color is considered light or dark
 * @param color - Color in hex format
 * @returns 'light' or 'dark'
 */
export const getColorTone = (color: string): 'light' | 'dark' => {
  const rgb = hexToRgb(color);
  if (!rgb) return 'dark'; // Default to dark if color is invalid
  
  // Calculate relative luminance
  const luminance = getLuminance(rgb.r, rgb.g, rgb.b);
  
  // Return 'light' for light colors, 'dark' for dark colors
  return luminance > 0.5 ? 'light' : 'dark';
};

/**
 * Adjusts a color's brightness
 * @param color - Color in hex format
 * @param percent - Percentage to adjust (-100 to 100)
 * @returns Adjusted color in hex format
 */
export const adjustBrightness = (color: string, percent: number): string => {
  const rgb = hexToRgb(color);
  if (!rgb) return color; // Return original if color is invalid
  
  // Calculate adjustment factor
  const factor = 1 + (percent / 100);
  
  // Adjust each RGB component
  const r = Math.min(255, Math.max(0, Math.round(rgb.r * factor)));
  const g = Math.min(255, Math.max(0, Math.round(rgb.g * factor)));
  const b = Math.min(255, Math.max(0, Math.round(rgb.b * factor)));
  
  // Convert back to hex
  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
};
