import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const currentTheme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
    setTheme(currentTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', newTheme);
  };

  return (
    <button 
      onClick={toggleTheme} 
      className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:text-emerald-500 transition-all border border-slate-200 dark:border-slate-700"
      aria-label="Alternar tema"
    >
      {theme === 'light' ? <Moon size={18} /> : <Sun size={18} className="text-amber-400" />}
    </button>
  );
}