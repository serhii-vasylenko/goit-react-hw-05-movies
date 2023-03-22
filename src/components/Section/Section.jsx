import {SectionEl, Title} from 'components/Section/Section.styled'

const Section = ({ title, children }) => {
  return (
    <SectionEl>
      {title && <Title>{title}</Title>}
      {children}
    </SectionEl>
  );
};

export default Section;
