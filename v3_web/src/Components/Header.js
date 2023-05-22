import React from 'react';
import styled from 'styled-components';
import { FaFile } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.header`
  position: absolute;
  top: 0;
  align-items: center;
  z-index: 1;
  background-color: ${(props) => props.theme.headerColor};
  /* box-shadow: 1px 4px 12px 1px rgba(0, 0, 0, 0.1); */
  border-bottom: 1px solid #dbdbdb;
  width: 100vw;
  height: 80px;
  display: flex;
`;

const LeftSection = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  font-weight: 900;
  color: #c29de8;
`;

const CenterSection = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Category = styled.div`
  width: 12%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: solid 1px #ebd6ff;
  border-radius: 6px;
  margin: 0px 10px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  &:hover,
  &:focus {
    border: none;
    border-bottom: solid 3px #ebd6ff;
  }
`;

const RightSection = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const UserContainer = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const User = styled.div`
  font-size: 13px;
  font-weight: 700;
  opacity: 0.7;
  cursor: pointer;
  padding: 5px;
  &:hover,
  &:focus {
    opacity: 0.3;
    text-decoration: none;
    color: black;
  }
`;

const Divider = styled.div`
  font-size: 10px;
  padding: 5px;
`;

const SLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <LeftSection>
        <SLink to='/'>
          <FaFile style={{ fontSize: '40px', marginRight: '15px' }} />
          OPINION
        </SLink>
      </LeftSection>
      <CenterSection>
        <Category>
          <SLink to='/survey'>설문작성</SLink>
        </Category>
        <Category>
          <SLink to='/report'>Report</SLink>
        </Category>
        <Category>Why US</Category>
      </CenterSection>
      <RightSection>
        <UserContainer>
          <User>
            <SLink to='/login'>로그인 </SLink>
          </User>
          <Divider> | </Divider>
          <User>
            <SLink to='/signin'>회원가입</SLink>
          </User>
        </UserContainer>
      </RightSection>
    </HeaderContainer>
  );
};

export default Header;
