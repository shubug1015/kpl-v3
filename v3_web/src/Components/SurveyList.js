import React from 'react';
import styled from 'styled-components';
import MultipleChoice from 'Components/MultipleChoice';
import ShortAnswer from 'Components/ShortAnswer';
import LongAnswer from 'Components/LongAnswer';
import Switch from 'react-switch';
import { VscTrash } from 'react-icons/vsc';
import SectionList from 'Components/SectionList';

const Question = styled.div`
  background-color: ${(props) => props.theme.mainColor};
  border-radius: 4px;
  padding-bottom: 20px;
  width: 100%;
  :not(:last-child) {
    margin-bottom: 20px;
  }
`;

const QuestionContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const QuestionTitle = styled.input`
  background-color: transparent;
  border: none;
  /* :focus {
    border-bottom: 2px solid #d2a5ff;
    transition: border-bottom 0.3s linear;
  } */
  outline: none;
  width: 90%;
  margin: 2%;
  padding-bottom: 10px;
  font-size: 20px;
`;

const Select = styled.select`
  background-color: transparent;
  /* border: ${(props) => props.theme.contentBorder}; */
  border-radius: 4px;
  outline: none;
  width: 8%;
  height: 30px;
  margin: 2%;
  cursor: pointer;
`;
const Option = styled.option`
  width: 100%;
  border: none;
`;

const BottomContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

const DeleteSectionBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  cursor: pointer;
  margin: 0px 5px;
`;

const EssentialContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  margin: 0px 5px;
`;

const EssentialText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 700;
`;
const EssentialSwitch = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 3px;
`;

const SurveyList = ({
  id,
  section,
  type,
  title,
  options,
  etc,
  essential,
  orderNum,
  focusOrderNum,
  deleteQuestion,
  getType,
  getTitle,
  toggleEssential,
  optionFunc,
  toggleFocus,
}) => {
  return (
    <Question
      onClick={() => {
        toggleFocus(id, orderNum);
      }}
      style={{
        borderLeft: focusOrderNum === orderNum ? '7px solid #c489ff' : '',
        transition: 'border-left 0.2s linear ',
      }}
    >
      <QuestionContent>
        <QuestionTitle
          type='text'
          placeholder={`질문${id + 1} 제목`}
          value={title}
          onChange={(e) => getTitle(e, id)}
          style={{
            borderBottom:
              focusOrderNum === orderNum ? '2px solid #777777' : 'none',
            transition:
              focusOrderNum === orderNum ? 'border-bottom 0.3s linear' : 'none',
          }}
        />
        <Select
          value={type}
          onChange={(e) => getType(e, id)}
          style={{
            border: focusOrderNum === orderNum ? '2px solid #BCBCBC' : 'none',
          }}
        >
          <Option value='객관식'>객관식</Option>
          <Option value='단답형'>단답형</Option>
          <Option value='장문형'>장문형</Option>
        </Select>
      </QuestionContent>
      {type === '객관식' ? (
        <MultipleChoice
          id={id}
          options={options}
          etc={etc}
          orderNum={orderNum}
          focusOrderNum={focusOrderNum}
          {...optionFunc}
        />
      ) : type === '단답형' ? (
        <ShortAnswer />
      ) : (
        <LongAnswer />
      )}
      {focusOrderNum === orderNum ? (
        <BottomContainer>
          <DeleteSectionBtn onClick={(e) => deleteQuestion(e, id, section)}>
            <VscTrash size={25} />
          </DeleteSectionBtn>
          <EssentialContainer>
            <EssentialText>필수</EssentialText>
            <EssentialSwitch onClick={(e) => toggleEssential(e, id)}>
              <Switch
                onChange={() => {
                  return;
                }}
                checked={essential}
                checkedIcon={false}
                uncheckedIcon={false}
                height={20}
                width={40}
              />
            </EssentialSwitch>
          </EssentialContainer>
        </BottomContainer>
      ) : null}
    </Question>
  );
};

export default SurveyList;
