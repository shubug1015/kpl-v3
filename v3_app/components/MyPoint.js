import React from 'react';
import styled from 'styled-components/native';
import { Dimensions, ScrollView } from 'react-native';

const Container = styled.View`
  padding: 15px;
  background-color: #ffffff;
`;

const Title = styled.Text`
  margin: 10px 0px;
  padding: 0px 10px;
  font-size: 18px;
  font-weight: bold;
`;

const TotalPoint = styled.View`
  align-items: center;
  padding: 10px;
  flex-direction: row;
`;
const TotalPointNum = styled.Text`
  font-size: 30px;
  font-weight: bold;
  margin: 10px;
`;
const TotalPointP = styled.Text`
  font-size: 38px;
  font-weight: bold;
  color: #a241fd;
`;

const ButtonContainer = styled.View`
  flex-direction: row;
  margin: 10px;
`;
const BtnTouchableOpacity = styled.TouchableOpacity`
  width: 25%;
  margin-right: 18px;
`;
const CashBackBtn = styled.View`
  width: 100%;
  height: 40px;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  background-color: #ebd6ff;
`;
const ShopBtn = styled.View`
  width: 100%;
  height: 40px;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  border: solid 1px #a241fd;
`;
const BtnText = styled.Text`
  font-size: 15px;
  font-weight: bold;
`;

const ListContainer = styled.View`
  margin-top: 50px;
`;

const ListTitle = styled.Text`
  margin: 10px 10px;
  padding: 10px 0px;
  font-size: 18px;
  font-weight: bold;
  border-bottom-width: 2px;
  border-bottom-color: #838383;
`;

const Lists = styled.View``;
const EditProfile = () => {
  return (
    <ScrollView>
      <Container>
        <Title>총 적립 포인트</Title>
        <TotalPoint>
          <TotalPointNum>○○○</TotalPointNum>
          <TotalPointP>P</TotalPointP>
        </TotalPoint>
        <ButtonContainer>
          <BtnTouchableOpacity>
            <CashBackBtn>
              <BtnText>환급받기</BtnText>
            </CashBackBtn>
          </BtnTouchableOpacity>
          <BtnTouchableOpacity>
            <ShopBtn>
              <BtnText>앤서미샵</BtnText>
            </ShopBtn>
          </BtnTouchableOpacity>
        </ButtonContainer>
        <ListContainer>
          <ListTitle>적립 내역</ListTitle>
          <Lists></Lists>
        </ListContainer>
      </Container>
    </ScrollView>
  );
};

export default EditProfile;
