import React from 'react';
import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const Container = styled.View``;

const TopContainer = styled.View`
  padding: 30px;
  border: solid 0.5px #838383;
`;
const FirstRow = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 5px;
`;
const SecondRow = styled.View`
  padding: 5px;
`;
const UserName = styled.Text`
  font-size: 25px;
  font-weight: 700;
  color: #a241fd;
  margin-right: 5px;
`;
const TopContext = styled.Text`
  font-size: 17px;
  font-weight: 700;
`;

const BottomContainer = styled.View``;

const BottomMenus = styled.View`
  margin: 30px 40px;
  font-size: 15px;
  font-weight: 700;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const BottomMenuName = styled.Text``;

const { width: WIDTH, height: HEIGHT } = Dimensions.get('window');

export default () => {
  const navigation = useNavigation();
  const goToEditProfile = () => {
    navigation.navigate('회원 정보 수정');
  };
  const goToMyPoint = () => {
    navigation.navigate('내 포인트');
  };

  return (
    <Container>
      <TopContainer>
        <FirstRow>
          <UserName>UserName</UserName>
          <TopContext>님</TopContext>
        </FirstRow>
        <SecondRow>
          <TopContext>회원정보를 확인해 보세요.</TopContext>
        </SecondRow>
      </TopContainer>
      <BottomContainer>
        <TouchableOpacity onPress={goToEditProfile}>
          <BottomMenus>
            <BottomMenuName>회원 정보 수정</BottomMenuName>
            <Ionicons name={'ios-arrow-forward'} size={15} />
          </BottomMenus>
        </TouchableOpacity>
        <TouchableOpacity>
          <BottomMenus>
            <BottomMenuName>등록한 설문</BottomMenuName>
            <Ionicons name={'ios-arrow-forward'} size={15} />
          </BottomMenus>
        </TouchableOpacity>
        <TouchableOpacity>
          <BottomMenus>
            <BottomMenuName>참여한 설문</BottomMenuName>
            <Ionicons name={'ios-arrow-forward'} size={15} />
          </BottomMenus>
        </TouchableOpacity>
        <TouchableOpacity onPress={goToMyPoint}>
          <BottomMenus>
            <BottomMenuName>내 포인트</BottomMenuName>
            <Ionicons name={'ios-arrow-forward'} size={15} />
          </BottomMenus>
        </TouchableOpacity>
      </BottomContainer>
    </Container>
  );
};
