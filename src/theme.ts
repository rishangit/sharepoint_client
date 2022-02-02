import themeJson from "./theme.json";

export const getTheme = () => {
  const theme: { [key: string]: any } = {};
  const variables: any = themeJson.groups[0].variables;

  Object.keys(variables).map((keyval: string) => {
    theme[keyval] = variables[keyval].value;
  });

  return theme;
};
