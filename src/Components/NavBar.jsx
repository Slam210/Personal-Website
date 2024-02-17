import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import '../CSS/NavBar.css';

export default function NavBar() {
  return (
    <nav className={`navBar`}>
      <Link to="/HomePage" className="HomePage"> Home Page</Link>
      <ul>
        <CustomLink to="/AboutMe">About Me</CustomLink>
        <CustomLink to="/Projects">Projects</CustomLink>
        <CustomLink to="/Resume">Resume</CustomLink>
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
