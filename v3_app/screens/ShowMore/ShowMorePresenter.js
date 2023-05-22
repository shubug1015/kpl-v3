import React, { useState } from 'react';
import styled from 'styled-components/native';
import { View, Switch, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Container = styled.View``;

const TopContainer = styled.View`
  padding: 30px;
  border: solid 0.5px #838383;
`;

const TopContext = styled.Text`
  font-size: 17px;
  font-weight: 700;
`;

const BottomContainer = styled.View`
  width: 100%;
  padding: 0px 30px;
`;

const BottomMenus = styled.View`
  margin: 30px 0px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const BottomMenuName = styled.Text`
  width: 85%;
  font-size: 15px;
  font-weight: 700;
`;

const BottomArrow = styled.Text`
  width: 15%;
  text-align: center;
`;

export default () => {
  const [noticeOn, setNoticeOn] = useState(true);
  const switchNotice = () => {
    setNoticeOn((previousState) => !previousState);
  };

  return (
    <Container>
      <TopContainer>
        <TopContext>상세 정보</TopContext>
      </TopContainer>
      <BottomContainer>
        <BottomMenus>
          <BottomMenuName>알림</BottomMenuName>
          <View style={{ width: '15%', alignItems: 'center' }}>
            <Switch
              trackColor={{ false: '#767577', true: '#81b0ff' }}
              thumbColor={'white'}
              onValueChange={switchNotice}
              value={noticeOn}
            />
          </View>
        </BottomMenus>
        <TouchableOpacity>
          <BottomMenus>
            <BottomMenuName>이용약관</BottomMenuName>
            <BottomArrow>
              <Ionicons name={'ios-arrow-forward'} size={15} />
            </BottomArrow>
          </BottomMenus>
        </TouchableOpacity>
        <TouchableOpacity>
          <BottomMenus>
            <BottomMenuName>개인정보 보호정책</BottomMenuName>
            <BottomArrow>
              <Ionicons name={'ios-arrow-forward'} size={15} />
            </BottomArrow>
          </BottomMenus>
        </TouchableOpacity>
        <TouchableOpacity>
          <BottomMenus>
            <BottomMenuName>로그아웃</BottomMenuName>
          </BottomMenus>
        </TouchableOpacity>
      </BottomContainer>
    </Container>
  );
};
