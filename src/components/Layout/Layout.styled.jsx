import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  min-width: 320px;
  margin: 0 auto;

  @media screen and (min-width: 480px) {
    width: 480px;
  }

  @media screen and (min-width: 768px){
    width: 768px;
  }

  @media screen and (min-width: 1280px){
    width: 1280px;
  }
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
