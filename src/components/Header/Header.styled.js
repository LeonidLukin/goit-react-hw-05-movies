import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { FaFilm } from 'react-icons/fa';
import {
  headerBg,
  mainHoverEfect,
  headerText,
  secondTextColor,
} from 'utilities/variables/css';

export const HeaderWrapper = styled.header`
  background: ${headerBg};
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const CustomIcon = styled(FaFilm)`
  width: 20px;
  height: 20px;
  margin-right: 15px;
  color: ${secondTextColor};
`;

export const Title = styled.h1`
  font-size: 15px;
  color: ${secondTextColor};

  @media (min-width: 768px) {
    font-size: 20px;
  }

  @media (min-width: 1000px) {
    font-size: 30px;
  }
`;

export const NavigationList = styled.ul`
  display: flex;
`;

export const Item = styled.li`
  margin-right: 20px;

  :last-child {
    margin-right: 0;
  }
`;

export const CustomLink = styled(NavLink)`
  font-size: 15px;
  font-weight: 700;
  color: ${headerText};
  transition: color ${mainHoverEfect};

  &.active {
    text-decoration: underline;
  }

  :hover {
    color: ${secondTextColor};
  }

  @media (min-width: 768px) {
    font-size: 20px;
  }
`;
