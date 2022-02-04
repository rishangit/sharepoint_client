import themeJson from "./theme.json";
import extended from './extended.json';

export const getTheme = () => {
  const theme: { [key: string]: any } = {};
  const variables: any = themeJson.groups[0].variables;
  const themeVariables: any = {...variables, ...extended };

  Object.keys(themeVariables).map((keyval: string) => {
    theme[keyval] = themeVariables[keyval].value;
  });

  console.log('theme', theme);
  return theme;
};
