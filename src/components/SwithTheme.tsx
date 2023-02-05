import { useContext } from 'react'
import { SwitchSpan, ThemeButton, ThemeContainer } from '../styles/Buttons/ThemeButton';
import ThemeContext from '../context/ThemeContext'
import { MoonIcon, SunIcon } from '../styles/icons';

function SwitchTheme() {
  const { setThemeDark, isDark } = useContext(ThemeContext);  

  return (
    <ThemeContainer onClick={ setThemeDark }>
      <ThemeButton>
        <SwitchSpan/>
      </ThemeButton>
      { isDark ? <MoonIcon /> : <SunIcon />}
    </ThemeContainer>
  )
}

export default SwitchTheme;