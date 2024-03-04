import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  gap: 24px;
  margin: 0px auto;
  padding: 18px;
  border-bottom: 1px solid #384248;
`;
export const NavItem = styled(NavLink)`
  display: block;
  text-decoration: none;
  font-size: 20px;
  font-weight: bold;
  color: #384248;

  &.active {
    color: #01b4e4;
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    color: grey;
  }
`;
