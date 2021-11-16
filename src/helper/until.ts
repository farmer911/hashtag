export const breakLine = (text: string) => {
  return text ? text.replace(/(?:\r\n|\r|\n)/g, ' <br />') : text;
}