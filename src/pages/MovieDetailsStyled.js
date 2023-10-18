import { Link } from 'react-router-dom';
import styled from 'styled-components';
export const StyledMovieInfo = styled.div`
  display: flex;
  gap: 40px;
  .detail-img {
  }
  .detail-data {
  }
`;

export const StyledButtonLink = styled(Link)`
  display: flex;
  padding: 0 20px;
  margin: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  text-decoration: none;
  cursor: pointer;
  width: 72px;
  height: 34px;
  line-height: none;
  &:hover {
    background-color: #0056b3;
  }
`;

export const StyledMenu = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  background-color: #c7c7c7;
  color: #000;
  &::before {
    content: '';
    display: block;
    height: 3px;
    background-color: #000;
  }
`;

export const StyledMenuItem = styled.li`
  margin-right: 20px;
`;

export const StyledMenuLink = styled(Link)`
  text-decoration: none;
  font-size: 24px;
  color: #fff;
  transition: color 0.3s;

  &:hover {
    color: #ff9900;
  }
`;
