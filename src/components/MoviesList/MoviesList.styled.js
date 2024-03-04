import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const List = styled.ul`
  list-style: none;
`;

export const Item = styled.li`
  text-decoration: none;
`;

export const MovieLink = styled(Link)`
  font-size: 700;
  color: #384248;
  text-decoration: none;

  &:hover {
    color: gray;
  }
`;
