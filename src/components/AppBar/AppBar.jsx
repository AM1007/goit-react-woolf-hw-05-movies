import { Header, NavItem } from './AppBarStyled';

const navItem = [
  { href: '', text: 'Home' },
  { href: 'movies', text: 'Movies' },
];

const AppBar = () => {
  return (
    <Header>
      {navItem.map(({ href, text }) => (
        <NavItem to={href} key={text}>
          {text}
        </NavItem>
      ))}
    </Header>
  );
};

export default AppBar;
