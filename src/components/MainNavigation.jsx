import { NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';
import classes from './MainNavigation.module.css';

function MainNavigation() {
  return (
    <header className={classes.header}>
      <a href='/' className={classes.logo}><span style={{ color: "var(--color-accent-100)" }}>Janet</span> Karpenske</a>

      <nav className={classes.navbar}>
        <ul className={classes.navBarList}>
          <li>
            <Button variant='text'>
              <NavLink
                to="/"
                className={({ isActive }) => (
                  isActive ? 'active' : undefined
                )}
                end
              >
                Home
              </NavLink>
            </Button>
          </li>
          <li>
            <Button variant='text'>
              <NavLink
                to="/about"
                className={({ isActive }) => (
                  isActive ? 'active' : undefined
                )}
              >
                About & Skills
              </NavLink>
            </Button>
          </li>
          <li>
            <Button variant='text'>
              <NavLink
                to="/projects"
                className={({ isActive }) => (
                  isActive ? 'active' : undefined
                )}
              >
                Portfolio
              </NavLink>
            </Button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;