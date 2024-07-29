const capitalize = (text: string) => {
  return `${text.charAt(0).toUpperCase()}${text.slice(1)}`;
};

const capitalizeEach = (texts: string) => {
  return texts
    .split(" ")
    .map((text) => capitalize(text))
    .join(" ");
};

export { capitalize, capitalizeEach };
