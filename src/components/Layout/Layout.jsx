import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Container, Header, Nav, List, Link } from 'components/Layout/Layout.styled';

const Layout = () => {
  return (
    <Container>
      <Header>
        <Nav>
        <List>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/movies">Movies</Link>
          </li>
        </List>
        </Nav>
      </Header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default Layout;
