import React from 'react';
import styled from 'styled-components';
import { BiRadioCircle, BiX } from 'react-icons/bi';

const Container = styled.div`
  width: 100%;
`;

const Options = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 2%;
`;

const Option = styled.div`
  display: flex;
  align-items: center;
  :not(:last-child) {
    margin-bottom: 1%;
  }
`;

const OptionNum = styled.div`
  text-align: center;
  width: 3%;
  margin-right: 1%;
  font-size: 18px;
`;

const OptionName = styled.input`
  background-color: transparent;
  border: none;
  outline: none;
  padding: 0.5%;
`;

const OptionDeleteBtn = styled.div`
  display: flex;
  align-items: center;
  margin-left: 1%;
  cursor: pointer;
`;

// --------------------
const EtcContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 2%;
`;

const Etc = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2%;
`;

const EtcName = styled.input`
  background-color: transparent;
  border: none;
  outline: none;
  padding: 0.5%;
`;

const Btns = styled.div`
  display: flex;
  width: 100%;
  margin-left: 2%;
`;

const AddBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  margin: 15px 10px;
  font-size: 14px;
  cursor: pointer;
  opacity: 0.7;
  :hover {
    opacity: 0.4;
  }
`;

const MultipleChoice = ({
  id,
  options,
  etc,
  orderNum,
  focusOrderNum,
  addOption,
  addEtc,
  deleteOption,
  deleteEtc,
  getOption,
}) => {
  return (
    <Container>
      <Options>
        {options.map((option) => (
          <Option key={option.id} id={option.id}>
            <OptionNum>
              <BiRadioCircle size={26} color='#717070' />
            </OptionNum>
            <OptionName
              type='text'
              placeholder={`옵션${option.id + 1}`}
              value={option.text}
              onChange={(e) => getOption(e, id, option.id)}
              style={{
                borderBottom:
                  focusOrderNum === orderNum ? '2px solid #BCBCBC' : null,
              }}
            />
            {focusOrderNum === orderNum ? (
              <OptionDeleteBtn onClick={(e) => deleteOption(e, id, option.id)}>
                <BiX size={20} />
              </OptionDeleteBtn>
            ) : null}
          </Option>
        ))}
      </Options>
      <EtcContainer>
        {etc === true ? (
          <Etc>
            <OptionNum></OptionNum>
            <EtcName
              placeholder={'기타 답변'}
              style={{
                borderBottom:
                  focusOrderNum === orderNum ? '2px solid #BCBCBC' : null,
              }}
            />
            {focusOrderNum === orderNum ? (
              <OptionDeleteBtn onClick={(e) => deleteEtc(e, id)}>
                <BiX size={20} />
              </OptionDeleteBtn>
            ) : null}
          </Etc>
        ) : null}
      </EtcContainer>
      {focusOrderNum === orderNum ? (
        <Btns>
          <AddBtn onClick={(e) => addOption(e, id)}>옵션 추가</AddBtn>
          {etc === false ? (
            <AddBtn onClick={(e) => addEtc(e, id)}>기타 추가</AddBtn>
          ) : null}
        </Btns>
      ) : null}
    </Container>
  );
};

export default MultipleChoice;
