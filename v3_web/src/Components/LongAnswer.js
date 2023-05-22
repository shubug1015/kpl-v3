import React from 'react';
import styled from 'styled-components';

const Container = styled.div``;

const Content = styled.input`
  background-color: transparent;
  border: none;
  border-bottom: ${(props) => props.theme.contentBorder};
  width: 50%;
  outline: none;
  margin-left: 2%;
  margin-bottom: 2%;
  padding-bottom: 1%;
  :not(:first-child) {
    width: 90%;
  }
`;

const LongAnswer = () => {
  return (
    <Container>
      <Content type='text' placeholder='장문형 텍스트' readOnly />
      <Content type='text' placeholder='' readOnly />
      <Content type='text' placeholder='' readOnly />
    </Container>
  );
};

export default LongAnswer;
