import { useTheme } from 'next-themes';

import { FiSun, FiMoon } from 'react-icons/fi';

const ThemeButton: any = () => {
  const { theme, setTheme } = useTheme(); // theme: 'light' | 'dark'

  const handleThemeChange = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  return (
    <button
      className={`z-50 rounded-[4px] border p-1 transition-all duration-200 ${
        theme === 'dark'
          ? 'border-transparent bg-indigo-700 text-stone-200 hover:bg-indigo-900'
          : 'border-transparent bg-amber-500 text-red-900 hover:bg-amber-300'
      }`}
      title={
        theme === 'dark'
          ? 'Enable Light Mode'
          : 'Enable Dark Mode'
      }
      onClick={handleThemeChange}
    >
      {theme === 'dark' ? (
        <FiSun className={`hover:animate-pulse`} />
      ) : (
        <FiMoon className={`hover:animate-pulse`} />
      )}
    </button>
  );
};

export default ThemeButton;
