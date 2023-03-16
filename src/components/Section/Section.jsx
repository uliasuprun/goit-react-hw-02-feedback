import PropTypes from 'prop-types';
import { SectionName, Title } from './Section.styled';

const Section = ({ title, children }) => {
  return (
    <SectionName>
      <Title>{title}</Title>
      {children}
    </SectionName>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
export default Section;
