import React from 'react';
import styled from 'styled-components/native';
import { Dimensions, ScrollView } from 'react-native';
import { theme } from '../../Theme';

const { height: HEIGHT } = Dimensions.get('window');

const Container = styled.View`
  position: absolute;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: ${HEIGHT / 2.5}px;
  background-color: ${theme.mainColor};
`;

const Name = styled.Text`
  color: white;
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
`;

const Point = styled.Text`
  color: white;
  font-size: 39px;
  font-weight: 400;
  margin-bottom: 30px;
`;

const Box = styled.View`
  width: 90%;
  justify-content: space-around;
  flex-direction: row;
`;

const BoxContent = styled.View`
  justify-content: center;
  align-items: center;
  border: 1px solid white;
  border-radius: 5px;
  width: 28%;
  height: 70px;
`;

const BoxTitle = styled.Text`
  margin-bottom: 5px;
  color: white;
`;

const BoxText = styled.Text`
  text-align: center;
  color: white;
  font-size: 20px;
  font-weight: 600;
`;

const ScrollContainer = styled.View`
  top: 22%; /* 조정필요 */
  height: 1500px; /* 조정필요 */
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  background-color: white;
`;

const SurveyList = styled.View`
  align-items: center;
  flex-direction: row;
  padding-top: 5%;
  padding-left: 7%;
`;

const SurveyTitle = styled.Text`
  margin-right: 2%;
  font-size: 30px;
  color: black;
`;

const SurveyListNum = styled.Text`
  font-size: 20px;
  font-weight: 300;
`;

export default () => (
  <>
    <Container>
      <Name>고박이님</Name>
      <Point>4,5OO₩</Point>
      <Box>
        <BoxContent>
          <BoxTitle>참여설문</BoxTitle>
          <BoxText>12개</BoxText>
        </BoxContent>
        <BoxContent>
          <BoxTitle>누적적립금</BoxTitle>
          <BoxText>10,000₩</BoxText>
        </BoxContent>
        <BoxContent>
          <BoxTitle>등록한 설문</BoxTitle>
          <BoxText>2개</BoxText>
        </BoxContent>
      </Box>
    </Container>
    <ScrollView>
      <ScrollContainer>
        <SurveyList>
          <SurveyTitle>설문 LIST</SurveyTitle>
          <SurveyListNum>[OO개]</SurveyListNum>
        </SurveyList>
      </ScrollContainer>
    </ScrollView>
  </>
);
