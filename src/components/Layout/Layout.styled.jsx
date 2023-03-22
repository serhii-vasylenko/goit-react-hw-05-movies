import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;

export const Header = styled.header`
  color: #6cd591;
  background-color: #1b2626;
`;

export const Nav = styled.nav``;

export const List = styled.ul`
  display: flex;
  gap: 16px;
`;

export const Link = styled(NavLink)`
  display: block;
  padding: 24px;

  &.active {
    color: #1b2626;
    background-color: #6cd591;
  }
`;
