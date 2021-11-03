import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.span`
  @property --offset {
    syntax: '<length>';
    inherits: false;
    initial-value: 6px;
  }
  font-family: 'pokemon-solid';
  color: var(--pokemon-yellow);
  -webkit-text-stroke: 1px var(--pokemon-blue);
  text-shadow: var(--pokemon-blue-shadow) -0.75px 1px,
    var(--pokemon-blue-shadow) -1.5px 2px,
    var(--pokemon-blue-shadow) -2.25px 3px, var(--pokemon-blue-shadow) -3px 4px;
  min-width: 150px;
  font-size: 2em;
  letter-spacing: 0.12em;
  cursor: pointer;
  text-decoration: underline;
  text-decoration-skip-ink: none;
  text-decoration-color: var(--pokemon-blue);
  text-underline-offset: var(--offset, 6px);
  transition: transform 0.3s, --offset 0.3s, text-decoration-color 0.3s;
  @media screen and (min-width: 768px) {
    font-size: 3em;
    -webkit-text-stroke: 2px var(--pokemon-blue);
  }
  &:hover, &:active, &:focus {
    transform: translateY(-5px);
    --offset: 16px;
    text-decoration-color: var(--pokemon-yellow);
  }
`;

const Button = ({ onClick, children, ...props }) => {
  return (
    <StyledButton onClick={onClick} {...props}>
      {children}
    </StyledButton>
  );
};

export default Button;
