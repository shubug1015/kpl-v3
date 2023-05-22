import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { GrDocument } from 'react-icons/gr';

const Container = styled.div``;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: ${(props) => props.theme.mainBorder};
  border-radius: 5px;
  width: 50%;
  height: 550px;
  margin: 4%;
`;

const LeftContent = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  :not(:last-child) {
    margin-bottom: 16%;
  }
`;

const LeftText = styled.div`
  margin-left: 5%;
  font-size: 30px;
`;

const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.mainColor};
  border-radius: 5px;
  width: 50%;
  height: 500px;
  margin: 4%;
`;

const RightTitle = styled.div`
  text-align: center;
  margin: 5% 0;
  font-size: 24px;
`;

const RightContent = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  width: 90%;
  height: 100%;
`;

const PriceRule = styled.div`
  background-color: #ffffff;
  border-radius: 4px;
  width: 80%;
  height: 20%;
  margin-bottom: 10%;
`;

const InputTags = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20%;
`;

const QuestionNum = styled.input`
  border: none;
  border-bottom: 2px solid white;
  background-color: transparent;
  width: 30%;
  outline: none;
  margin-right: 10%;
  font-size: 18px;
`;

const UserNum = styled.input`
  border: none;
  border-bottom: 2px solid white;
  background-color: transparent;
  width: 30%;
  outline: none;
  font-size: 18px;
`;

const Price = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PriceNum = styled.div`
  margin-right: 3%;
  font-size: 40px;
`;

const PriceText = styled.div`
  margin-top: 10px;
  font-size: 14px;
`;

const GoToSurveyContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;
`;

const GoToSurveyBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10%;
  height: 60%;
  background-color: ${(props) => props.theme.mainColor};
  font-size: 16px;
  font-weight: 700;
  border-radius: 4px;
`;

const SLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const Home = () => {
  const [questionNum, setQuestionNum] = useState('');
  const [userNum, setUserNum] = useState('');

  const getQuestionNum = (e) => {
    const {
      target: { value },
    } = e;
    setQuestionNum(value);
  };

  const getUserNum = (e) => {
    const {
      target: { value },
    } = e;
    setUserNum(value);
  };

  const price = questionNum * userNum * 10;

  return (
    <Container>
      <Content>
        <LeftContainer>
          <LeftContent>
            <GrDocument size={50} />
            <LeftText>우리</LeftText>
          </LeftContent>
          <LeftContent>
            <GrDocument size={50} />
            <LeftText>홍보하는</LeftText>
          </LeftContent>
          <LeftContent>
            <GrDocument size={50} />
            <LeftText>문구</LeftText>
          </LeftContent>
          <LeftContent>
            <GrDocument size={50} />
            <LeftText>쓰기</LeftText>
          </LeftContent>
        </LeftContainer>
        <RightContainer>
          <RightTitle>가격 계산기</RightTitle>
          <RightContent>
            <PriceRule>가격 산출 방법: 문항수 x 응답자수 x 10 (원)</PriceRule>
            <InputTags>
              <QuestionNum
                placeholder='희망 문항수'
                value={questionNum}
                onChange={getQuestionNum}
              />
              <UserNum
                placeholder='희망 응답자수'
                value={userNum}
                onChange={getUserNum}
              />
            </InputTags>
            <Price>
              <PriceNum>{price}</PriceNum>
              <PriceText>원</PriceText>
            </Price>
          </RightContent>
        </RightContainer>
      </Content>
      <GoToSurveyContainer>
        <GoToSurveyBtn>
          <SLink to='/survey'>설문 작성하기</SLink>
        </GoToSurveyBtn>
      </GoToSurveyContainer>
    </Container>
  );
};

export default Home;
