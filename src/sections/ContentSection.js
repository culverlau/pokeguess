import React from 'react';
import styled from 'styled-components';

const StyledContentSection = styled.div`
  text-align: center;
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-evenly;
  align-items: center;
  margin: 0 auto;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 4em;
  }
  > div {
    position: relative;
    z-index: 2;
  }
`;

const ContentSection = ({children}) => {
  return <StyledContentSection>{children}</StyledContentSection>
};

export default ContentSection;
