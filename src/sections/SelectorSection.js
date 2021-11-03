import React from 'react';
import styled from 'styled-components';

const StyledSelectorSection = styled.div`
  position: relative;
  z-index: 3;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 2.5em;
  margin-top: 1em;
  margin-bottom: 2em;
`;

const SelectorSection = ({ children }) => {
  return <StyledSelectorSection>{children}</StyledSelectorSection>;
};

export default SelectorSection;
