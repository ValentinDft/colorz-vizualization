export const calculateTextColor = (hexColor: string) => {
  const rgbColor = hexToRgb(hexColor);
  const textColor = getTextColor(rgbColor);
  return textColor;
};

const hexToRgb = (hex: string) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return { r, g, b };
};

const getTextColor = (color: { r: number; g: number; b: number }) => {
  const luma = color.r * 0.299 + color.g * 0.587 + color.b * 0.114;
  return luma > 150 ? 'black' : 'white';
};
