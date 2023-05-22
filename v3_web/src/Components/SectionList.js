import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
  border: ${(props) => props.theme.mainBorder};
  border-radius: 4px;
  width: 100%;
  :not(:last-child) {
    margin-bottom: 20px;
  }
  height: 100%;
`;

const SectionContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const SectionTitle = styled.input`
  background-color: transparent;
  border: none;
  :focus {
    border-bottom: 2px solid #d2a5ff;
    transition: border-bottom 0.3s linear;
  }
  outline: none;
  width: 90%;
  margin: 2%;
  padding-bottom: 10px;
  font-size: 20px;
`;

const SectionSummury = styled.input`
  background-color: transparent;
  border: none;
  :focus {
    border-bottom: 2px solid #d2a5ff;
    transition: border-bottom 0.3s linear;
  }
  outline: none;
  width: 90%;
  margin: 2%;
  padding-bottom: 10px;
  font-size: 15px;
`;

const SectionList = ({
  id,
  title,
  summury,
  getSectionTitle,
  getSectionSummury,
}) => {
  return (
    <Section>
      <SectionContent>
        <SectionTitle
          type='text'
          placeholder='섹션 제목'
          value={title}
          onChange={(e) => getSectionTitle(e, id)}
        />
        <SectionSummury
          type='text'
          placeholder='섹션 설명'
          value={summury}
          onChange={(e) => getSectionSummury(e, id)}
        />
      </SectionContent>
    </Section>
  );
};

export default SectionList;
