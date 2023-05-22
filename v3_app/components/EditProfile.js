import React from 'react';
import styled from 'styled-components/native';
import { Dimensions, ScrollView } from 'react-native';

const Container = styled.View`
  padding: 15px;
  background-color: #ffffff;
`;

const ImageContainer = styled.View`
  width: 100%;
  height: ${Dimensions.get('window').height / 4}px;
  align-items: center;
  justify-content: center;
  background-color: red;
`;
const Image = styled.View`
  width: 40%;
  height: 80%;
  border-radius: 90px;
  background-color: blue;
`;

const Title = styled.Text`
  margin: 20px 0px;
  padding: 10px;
  font-size: 18px;
  font-weight: bold;
  border-bottom-width: 2px;
  border-bottom-color: #838383;
`;

const InfoContainer = styled.View`
  padding: 10px;
`;
const InfoSection = styled.View``;
const InfoTitle = styled.Text`
  margin: 10px 0px;
`;
const InfoInput = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 50px;
  border: solid 1px #5e6f64;
  border-radius: 10px;
`;
const InputText = styled.Text`
  width: 70%;
  font-size: 16px;
  font-weight: bold;
  opacity: 0.5;
  padding: 0px 20px;
`;
const TouchableOpacity = styled.TouchableOpacity`
  width: 20%;
  margin-right: 10px;
`;
const EditBtn = styled.View`
  align-items: center;
  justify-content: center;
  background-color: #ebd6ff;
  border-radius: 5px;
`;
const BtnText = styled.Text`
  font-size: 15px;
  font-weight: bold;
`;

const EditProfile = () => {
  return (
    <ScrollView>
      <Container>
        <ImageContainer>
          <Image></Image>
        </ImageContainer>
        <Title>기본 정보</Title>
        <InfoContainer>
          <InfoSection>
            <InfoTitle>ID</InfoTitle>
            <InfoInput>
              <InputText>* 회원 ID *</InputText>
            </InfoInput>
          </InfoSection>
          <InfoSection>
            <InfoTitle>이름</InfoTitle>
            <InfoInput>
              <InputText>* 회원 이름 *</InputText>
            </InfoInput>
          </InfoSection>
          <InfoSection>
            <InfoTitle>닉네임</InfoTitle>
            <InfoInput>
              <InputText>* 회원 닉네임 *</InputText>
              <TouchableOpacity>
                <EditBtn>
                  <BtnText>수정</BtnText>
                </EditBtn>
              </TouchableOpacity>
            </InfoInput>
          </InfoSection>
          <InfoSection>
            <InfoTitle>비밀번호</InfoTitle>
            <InfoInput>
              <InputText>******</InputText>
              <TouchableOpacity>
                <EditBtn>
                  <BtnText>수정</BtnText>
                </EditBtn>
              </TouchableOpacity>
            </InfoInput>
          </InfoSection>
          <InfoSection>
            <InfoTitle>E-Mail</InfoTitle>
            <InfoInput>
              <InputText>* 회원 E-Mail *</InputText>
              <TouchableOpacity>
                <EditBtn>
                  <BtnText>수정</BtnText>
                </EditBtn>
              </TouchableOpacity>
            </InfoInput>
          </InfoSection>
        </InfoContainer>
      </Container>
    </ScrollView>
  );
};

export default EditProfile;
