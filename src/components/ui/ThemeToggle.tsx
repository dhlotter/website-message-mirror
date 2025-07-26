import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { Moon, Sun, Monitor } from 'lucide-react';
import { Button } from './Button';

export const ThemeToggle: React.FC<{ className?: string }> = ({ className = '' }) => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  
  const toggleTheme = () => {
    setTheme(
      theme === 'system' 
        ? 'dark' 
        : theme === 'dark' 
        ? 'light' 
        : 'system'
    );
  };
  
  const getThemeIcon = () => {
    if (theme === 'system') {
      return <Monitor className="h-4 w-4" />;
    }
    return resolvedTheme === 'dark' ? (
      <Moon className="h-4 w-4" />
    ) : (
      <Sun className="h-4 w-4" />
    );
  };
  
  const getAriaLabel = () => {
    if (theme === 'system') {
      return 'Switch to dark mode';
    }
    return theme === 'dark' 
      ? 'Switch to light mode' 
      : 'Switch to dark mode';
  };
  
  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      aria-label={getAriaLabel()}
      className={className}
      title={getAriaLabel()}
    >
      {getThemeIcon()}
      <span className="sr-only">
        {getAriaLabel()}
      </span>
    </Button>
  );
};

export default ThemeToggle;
