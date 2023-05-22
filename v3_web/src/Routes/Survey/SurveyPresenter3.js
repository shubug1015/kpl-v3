import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import SurveyList from 'Components/SurveyList';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  padding-bottom: 30px;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: ${(props) => props.theme.mainBorder};
  border-radius: 4px;
  width: 80vw;
  height: 200px;
  margin: 3%;
`;

const Title = styled.input`
  background-color: transparent;
  border: none;
  :focus {
    border-bottom: 2px solid #d2a5ff;
    transition: border-bottom 0.3s linear;
  }
  outline: none;
  width: 90%;
  margin-bottom: 20px;
  padding-bottom: 10px;
  font-size: 30px;
`;

const Summury = styled.textarea`
  background-color: transparent;
  border: none;
  :focus {
    border-bottom: 2px solid #d2a5ff;
    transition: border-bottom 0.3s linear;
  }
  outline: none;
  width: 90%;
  font-size: 16px;
`;

const Content = styled.div`
  width: 80vw;
  display: flex;
  justify-content: space-between;
`;

const Questions = styled.div`
  width: 90%;
`;

const QuestionController = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 5%;
  height: 330px;
  border: ${(props) => props.theme.mainBorder};
  border-radius: 10px;
  position: fixed;
  left: 85vw;
`;

const AddQBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 10%;
  background-color: red;
`;

const AddSectionBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 10%;
  background-color: red;
`;

const SurveyPresenter = () => {
  const [questions, setQuestions] = useState([
    {
      id: 0,
      type: '객관식',
      title: '',
      options: [{ id: 0, text: '' }],
      etc: false,
      essential: false,
      focus: true,
    },
  ]);
  const [sections, setSections] = useState([
    {
      id: 0,
      sectionNum: 0,
      sectionTitle: '',
      sectionSummary: '',
      contents: questions,
    },
  ]);
  const [survey, setSurvey] = useState({
    mainTitle: '',
    mainSummary: '',
    sections: sections,
  });

  const mainFunc = {
    getMainTitle: (e, survey) => {
      const {
        target: { value },
      } = e;
      setSurvey({
        mainTitle: value,
        mainSummary: survey.mainSummary,
        sections: sections,
      });
    },
    getMainSummary: (e) => {
      const {
        target: { value },
      } = e;
      setSurvey({
        mainTitle: survey.mainTitle,
        mainSummary: value,
        sections: sections,
      });
    },
  };

  const sectionFunc = {};

  const questionFunc = {
    addQuestion: () => {
      setQuestions([
        ...questions.map((question) => ({
          id: question.id,
          type: question.type,
          title: question.title,
          options: question.options,
          etc: question.etc,
          essential: question.essential,
          focus: false,
        })),
        {
          id: questions.length,
          type: '객관식',
          title: '',
          options: [{ id: 0, text: '' }],
          etc: false,
          essential: false,
          focus: true,
        },
      ]);
    },
    deleteQuestion: (e, parentId) => {
      e.stopPropagation();
      var tmp = questions.filter((question) => question.id !== parentId);
      setQuestions(
        tmp.map((question) => ({
          id: question.id > parentId ? question.id - 1 : question.id,
          type: question.type,
          title: question.title,
          options: question.options,
          etc: question.etc,
          essential: question.essential,
          focus: false,
        }))
      );
    },
    getType: (e, parentId) => {
      const {
        target: { value },
      } = e;
      setQuestions(
        questions.map((question) => ({
          id: question.id,
          type: question.id === parentId ? value : question.type,
          title: question.title,
          options: question.options,
          etc: question.etc,
          essential: question.essential,
          focus: question.id === parentId ? true : false,
        }))
      );
    },
    getTitle: (e, parentId) => {
      e.stopPropagation();
      const {
        target: { value },
      } = e;
      setQuestions(
        questions.map((question) => ({
          id: question.id,
          type: question.type,
          title: question.id === parentId ? value : question.title,
          options: question.options,
          etc: question.etc,
          essential: question.essential,
          focus: question.id === parentId ? true : false,
        }))
      );
    },

    toggleEssential: (e, parentId) => {
      e.stopPropagation();
      setQuestions(
        questions.map((question) => ({
          id: question.id,
          type: question.type,
          title: question.title,
          options: question.options,
          etc: question.etc,
          essential:
            question.id === parentId ? !question.essential : question.essential,
          focus: question.id === parentId ? true : false,
        }))
      );
    },

    toggleFocus: (parentId) => {
      setQuestions(
        questions.map((question) => ({
          id: question.id,
          type: question.type,
          title: question.title,
          options: question.options,
          etc: question.etc,
          essential: question.essential,
          focus: question.id === parentId ? true : false,
        }))
      );
    },
  };

  const optionFunc = {
    addOption: (e, parentId) => {
      e.stopPropagation();
      setQuestions(
        questions.map((question) => ({
          id: question.id,
          type: question.type,
          title: question.title,
          options:
            question.id === parentId
              ? [...question.options, { id: question.options.length, text: '' }]
              : question.options,
          etc: question.etc,
          essential: question.essential,
          focus: question.id === parentId ? true : false,
        }))
      );
    },
    deleteOption: (e, parentId, optionId) => {
      e.stopPropagation();
      var tmp = questions.map((question) => ({
        id: question.id,
        type: question.type,
        title: question.title,
        options:
          question.id === parentId
            ? question.options.filter((option) => option.id !== optionId)
            : question.options,
        etc: question.etc,
        essential: question.essential,
        focus: question.id === parentId ? true : false,
      }));
      setQuestions(
        tmp.map((question) => ({
          id: question.id,
          type: question.type,
          title: question.title,
          options:
            question.id === parentId
              ? question.options.map((option) =>
                  option.id > optionId
                    ? { id: option.id - 1, text: option.text }
                    : option
                )
              : question.options,
          etc: question.etc,
          essential: question.essential,
          focus: question.id === parentId ? true : false,
        }))
      );
    },
    addEtc: (e, parentId) => {
      e.stopPropagation();
      setQuestions(
        questions.map((question) => ({
          id: question.id,
          type: question.type,
          title: question.title,
          options: [...question.options],
          etc: question.id === parentId ? true : question.etc,
          essential: question.essential,
          focus: question.id === parentId ? true : false,
        }))
      );
    },
    deleteEtc: (e, parentId) => {
      e.stopPropagation();
      setQuestions(
        questions.map((question) => ({
          id: question.id,
          type: question.type,
          title: question.title,
          options: [...question.options],
          etc: question.id === parentId ? false : question.etc,
          essential: question.essential,
          focus: question.id === parentId ? true : false,
        }))
      );
    },
    getOption: (e, parentId, optionId) => {
      e.stopPropagation();
      const {
        target: { value },
      } = e;
      setQuestions(
        questions.map((question) => ({
          id: question.id,
          type: question.type,
          title: question.title,
          options:
            question.id === parentId
              ? question.options.map((option) =>
                  option.id === optionId
                    ? { id: optionId, text: value }
                    : option
                )
              : question.options,
          etc: question.etc,
          essential: question.essential,
          focus: question.id === parentId ? true : false,
        }))
      );
    },
  };

  const [height, setHeight] = useState(0);

  const ref = useRef(null);

  useEffect(() => {
    setHeight(ref.current.clientHeight);
  }, [questions]);

  // useEffect(() => {
  //   window.scrollTo(0, document.body.scrollHeight);
  // }, [questions.length]);

  useEffect(() => {
    setSections(
      sections.map((section) => ({
        id: section.id,
        sectionNum: section.sectionNum,
        sectionTitle: section.sectionTitle,
        sectionSummary: section.sectionSummary,
        contents: questions,
      }))
    );
  }, [questions]);

  useEffect(() => {
    setSurvey({
      mainTitle: survey.mainTitle,
      mainSummary: survey.mainSummary,
      sections: sections,
    });
  }, [sections]);

  // console.log(survey.sections.map((s) => s.contents)[0]);
  // console.log(sections.map((s) => s.contents)[0]);
  // console.log(questions);

  return (
    <Container>
      <TitleContainer>
        <Title
          type='text'
          placeholder='설문지 제목'
          value={survey.mainTitle}
          onChange={mainFunc.getMainTitle}
        />
        <Summury
          type='text'
          placeholder='설문지 설명'
          value={survey.mainSummary}
          onChange={mainFunc.getMainSummary}
        />
      </TitleContainer>
      <Content>
        <Questions ref={ref}>
          {questions.map((question) => (
            <SurveyList
              key={question.id}
              id={question.id}
              type={question.type}
              title={question.title}
              options={question.options}
              etc={question.etc}
              essential={question.essential}
              focus={question.focus}
              {...questionFunc}
              optionFunc={optionFunc}
            />
          ))}
        </Questions>
        <QuestionController
          style={{
            bottom: height > 500 ? '30px' : '',
          }}
        >
          <AddQBtn onClick={questionFunc.addQuestion}>+</AddQBtn>
          {/* <AddSectionBtn onClick={sectionFunc.addSection}>=</AddSectionBtn> */}
        </QuestionController>
      </Content>
    </Container>
  );
};

export default SurveyPresenter;
