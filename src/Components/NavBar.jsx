import React, { useState, useEffect } from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import '../CSS/NavBar.css';

export default function NavBar() {
  const [isSticky, setIsSticky] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [scrollTimer, setScrollTimer] = useState(null);
  const path = window.location.pathname;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isScrollingUp = currentScrollPos < prevScrollPos;

      setIsSticky(isScrollingUp && currentScrollPos > 0);
      clearTimeout(scrollTimer);
      setScrollTimer(
        setTimeout(() => {
          setIsSticky(false);
        }, 500)
      );

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimer);
    };
  }, [prevScrollPos, scrollTimer]);

  return (
    <nav className={`navBar ${isSticky ? 'sticky' : ''}`}>
      <Link to="/" className="HomePage">
        Home Page
      </Link>
      <ul>
        <CustomLink to="/AboutMe">About Me</CustomLink>
        <CustomLink to="/Resume">Resume</CustomLink>
        <CustomLink to="/Projects">Projects</CustomLink>
      </ul>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? 'active' : ''}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
