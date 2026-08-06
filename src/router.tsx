import { useEffect, useState, useCallback } from 'react';

export function useRouter() {
  const [path, setPath] = useState(() => window.location.pathname);

  useEffect(() => {
    const onPop = () => setPath(window.location.pathname);
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  const navigate = useCallback((to: string) => {
    if (to === window.location.pathname) return;
    window.history.pushState({}, '', to);
    setPath(to);
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, []);

  return { path, navigate };
}

interface LinkProps {
  to: string;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  ariaLabel?: string;
  style?: React.CSSProperties;
}

export function Link({ to, className, children, onClick, ariaLabel, style }: LinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
    e.preventDefault();
    window.history.pushState({}, '', to);
    window.dispatchEvent(new PopStateEvent('popstate'));
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    onClick?.();
  };

  return (
    <a href={to} className={className} onClick={handleClick} aria-label={ariaLabel} style={style}>
      {children}
    </a>
  );
}
