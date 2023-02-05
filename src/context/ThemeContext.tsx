import { createContext } from 'react';

export interface IThemeContext {
  isDark: boolean;
  setThemeDark?: () => void;
}

const defaultState = {
  isDark: false,
};


const ThemeContext = createContext<IThemeContext>(defaultState);

export default ThemeContext;