export function createTextOverflowStyle(maxLine: number = 1) {
  return {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: maxLine === 1 ? 'nowrap' : 'normal',
    wordBreak: 'break-all',
    ...(maxLine > 1 && {
      display: '-webkit-box',
      '-webkit-line-clamp': `${maxLine}`,
      '-webkit-box-orient': 'vertical',
    }),
  } as const
}
