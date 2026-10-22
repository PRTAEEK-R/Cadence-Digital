import React, { createContext, useContext, useState, useEffect, ReactNode, AnchorHTMLAttributes, MouseEvent } from 'react';

interface RouterContextType {
  path: string;
  queryParams: URLSearchParams;
  navigate: (to: string, options?: { replace?: boolean; scroll?: boolean }) => void;
  serviceSlug?: string;
}

const RouterContext = createContext<RouterContextType | null>(null);

export function RouterProvider({ children }: { children: ReactNode }) {
  const [path, setPath] = useState<string>(() => {
    return window.location.pathname || '/';
  });

  const [queryParams, setQueryParams] = useState<URLSearchParams>(() => {
    return new URLSearchParams(window.location.search);
  });

  useEffect(() => {
    const handlePopState = () => {
      setPath(window.location.pathname || '/');
      setQueryParams(new URLSearchParams(window.location.search));
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (to: string, options?: { replace?: boolean; scroll?: boolean }) => {
    // If it's an anchor on the same page e.g. #services while on '/'
    if (to.startsWith('#')) {
      if (path !== '/') {
        window.history.pushState({}, '', '/' + to);
        setPath('/');
      } else {
        window.history.pushState({}, '', to);
      }
      const target = document.querySelector(to);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }

    const [pathname, search] = to.split('?');
    const newSearch = search ? `?${search}` : '';

    if (options?.replace) {
      window.history.replaceState({}, '', pathname + newSearch);
    } else {
      window.history.pushState({}, '', pathname + newSearch);
    }

    setPath(pathname || '/');
    setQueryParams(new URLSearchParams(newSearch));

    if (options?.scroll !== false) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Extract service slug if on /services/:slug
  let serviceSlug: string | undefined = undefined;
  if (path.startsWith('/services/')) {
    serviceSlug = path.replace('/services/', '').replace(/\/$/, '');
  }

  return (
    <RouterContext.Provider value={{ path, queryParams, navigate, serviceSlug }}>
      {children}
    </RouterContext.Provider>
  );
}

export function useRouter() {
  const context = useContext(RouterContext);
  if (!context) {
    throw new Error('useRouter must be used within a RouterProvider');
  }
  return context;
}

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string;
  className?: string;
  children: ReactNode;
  activeClassName?: string;
}

export const Link: React.FC<LinkProps> = ({ to, className = '', activeClassName = '', children, onClick, ...rest }) => {
  const { path, navigate } = useRouter();

  const isExactActive = path === to || (to === '/' && path === '');
  const isParentActive = to !== '/' && path.startsWith(to);
  const isActive = isExactActive || isParentActive;

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    // Allow default for ctrl/cmd click or right click
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) {
      return;
    }

    e.preventDefault();
    if (onClick) {
      onClick(e);
    }
    navigate(to);
  };

  const finalClassName = `${className} ${isActive ? activeClassName : ''}`.trim();

  return (
    <a href={to} onClick={handleClick} className={finalClassName} {...rest}>
      {children}
    </a>
  );
};
