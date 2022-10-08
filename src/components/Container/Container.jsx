import propTypes from 'prop-types';
import { ContainerWrapper } from './Container.styled';

export default function Container({ children, isPadding }) {
  return <ContainerWrapper isPadding={isPadding}>{children}</ContainerWrapper>;
}

Container.propTypes = {
  children: propTypes.node,
  isPadding: propTypes.bool,
};
