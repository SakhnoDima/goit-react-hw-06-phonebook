import { useEffect } from 'react';
import { Button } from './ThemeButton.styles';
import { useDispatch } from 'react-redux';
import { themeToggle } from 'redux/theme';
import { useSelector } from 'react-redux';
import { getTheme } from 'redux/selectors';

import { setTheme } from 'components/helpers/themtoggle';

export const ThemeButton = () => {
  const dispatch = useDispatch();
  const theme = useSelector(getTheme);

  useEffect(() => {
    if (theme) {
      setTheme('theme-dark');
    } else {
      setTheme('theme-light');
    }
    setTheme(theme);
  });

  return (
    <div className="App" style={{ transition: `all 300ms ease` }}>
      <Button checked={theme}>
        <input
          type="checkbox"
          checked={theme}
          onChange={() => dispatch(themeToggle())}
        />
        <span />
      </Button>
    </div>
  );
};
