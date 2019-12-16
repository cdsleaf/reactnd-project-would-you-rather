import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  margin: 10rem;
  p {
    text-align: center;
  }
`;

export const NoMatch = () => {
  return (
    <Div>
      <p>404 - Page not found</p>
    </Div>
  );
};
