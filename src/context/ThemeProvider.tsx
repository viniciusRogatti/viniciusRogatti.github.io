import { useState } from 'react';
import ThemeContext from './ThemeContext';

interface Props {
  children: JSX.Element[] | JSX.Element
}

function ThemaProvider ({ children } :Props) {
  const [isDark, setIsDark] = useState(true);

  const setThemeDark = (): void => {
    setIsDark(!isDark)
  }

  const contextValue = {
    setThemeDark,
    isDark
  }

  return (
    <ThemeContext.Provider value={ contextValue }>
      { children }
    </ThemeContext.Provider>
  )
}

export default ThemaProvider;

