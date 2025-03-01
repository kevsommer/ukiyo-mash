import styled from '@emotion/styled';

const pages = ['ranking', 'mash', 'about'];

const AppBar = styled('div')`
  position: static;
  top: 0;
  left: 0;
  width: 100%;
  background-color: var(--primary-color);
  color: var(--contrast-text);
`;

const Toolbar = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding: 1rem;
  align-items: center;
`;

const HomeLink = styled('a')`
  text-decoration: none;
  padding: 0 1rem;
  display: flex;
  flex-direction: row;
  width: fit-content;
  font-size: 1.5rem;
  cursor: pointer;
`;

const PageLink = styled('a')`
  color: white;
  text-decoration: none;
  padding: 0 1rem;
  text-transform: uppercase;
  cursor: pointer;
`;

const NavBar = () => (
  <AppBar>
    <Toolbar>
      <HomeLink>
        浮世絵
        Ukiyo Mash
      </HomeLink>
      {pages.map((page) => (<PageLink href={page}>{page}</PageLink>))}
    </Toolbar>
  </AppBar>
);

export default NavBar;
