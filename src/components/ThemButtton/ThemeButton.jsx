import { useEffect, useState } from 'react';
import { Button } from './ThemeButton.styles';

import { setTheme } from 'components/helpers/themtoggle';

export const ThemeButton = () => {
  const [togClass, setTogClass] = useState('dark');
  let theme = localStorage.getItem('theme');

  const handleOnClick = () => {
    if (localStorage.getItem('theme') === 'theme-dark') {
      setTheme('theme-light');
      setTogClass('light');
    } else {
      setTheme('theme-dark');
      setTogClass('dark');
    }
  };

  useEffect(() => {
    if (localStorage.getItem('theme') === 'theme-dark') {
      setTogClass('dark');
    } else if (localStorage.getItem('theme') === 'theme-light') {
      setTogClass('light');
    }
  }, [theme]);
  return (
    <div className="App" style={{ transition: `all 300ms ease` }}>
      <Button checked={theme}>
        {togClass === 'light' ? (
          <input
            type="checkbox"
            id="toggle"
            className="toggle--checkbox"
            onClick={handleOnClick}
            checked
          />
        ) : (
          <input
            type="checkbox"
            id="toggle"
            className="toggle--checkbox"
            onClick={handleOnClick}
          />
        )}
        <span />
      </Button>
    </div>
  );
};
