export const BorderClassHelper = (
  borderWidth: string,
  borderColor?: string,
  borderHue?: number,
  isRounded?: boolean
) => {
  return `${borderWidth} ${`border-${borderColor} ${borderHue === undefined ? null : borderHue}`} ${isRounded === true ? 'rounded' : null}`;
};
