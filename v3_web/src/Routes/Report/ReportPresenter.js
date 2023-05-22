import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
`;

const TopContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 150px;
  background-color: ${(props) => props.theme.mainColor};
`;

const TopText = styled.div`
  font-size: 30px;
  font-weight: 900;
  color: grey;
`;

const SurveyPresenter = () => {
  return (
    <Container>
      <TopContainer>
        <TopText>오피니언과 함께 조사한 다양한 리포트를 만나보세요.</TopText>
      </TopContainer>
    </Container>
  );
};

export default SurveyPresenter;
