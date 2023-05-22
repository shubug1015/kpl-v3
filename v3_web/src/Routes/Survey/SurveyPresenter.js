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

const Sections = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: ${(props) => props.theme.sectionBorder};
  border-radius: 4px;
  width: 100%;
  height: 150px;
  margin: 3%;
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
  margin-bottom: 20px;
  padding-bottom: 10px;
  font-size: 25px;
`;

const SectionSummary = styled.textarea`
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
  border: 2px solid #ebd6ff;
  border-radius: 10px;
  position: fixed;
  left: 85vw;
`;

const AddQBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ebd6ff;
  border-radius: 4px;
  width: 70%;
  height: 10%;
  font-size: 25px;
  margin-bottom: 15%;
  cursor: pointer;
  :hover {
    opacity: 0.5;
  }
`;

const AddSectionBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ebd6ff;
  border-radius: 4px;
  width: 70%;
  height: 10%;
  font-size: 25px;
  cursor: pointer;
  :hover {
    opacity: 0.5;
  }
`;

const SurveyPresenter = () => {
  const [questions, setQuestions] = useState([
    {
      id: 0,
      section: 0,
      type: '객관식',
      title: '',
      options: [{ id: 0, text: '' }],
      etc: false,
      essential: false,
      orderNum: 1,
    },
  ]);
  const [sections, setSections] = useState([
    {
      id: 0,
      sectionTitle: '',
      sectionSummary: '',
      contents: questions,
      orderNum: 0,
    },
  ]);
  const [survey, setSurvey] = useState({
    mainTitle: '',
    mainSummary: '',
    sections: sections,
  });

  const mainFunc = {
    getMainTitle: (e) => {
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

  const [focusId, setFocusId] = useState(0);
  const [focusOrderNum, setFocusOrderNum] = useState(1);
  const [focusType, setFocusType] = useState('question');

  const orderFunc = () => {
    var q = questions.map((question) => ({
      ...question,
      orderNum:
        question.orderNum <= focusOrderNum
          ? question.orderNum
          : question.orderNum + 1,
    }));
    var s = sections.map((section) => ({
      ...section,
      orderNum:
        section.orderNum <= focusOrderNum
          ? section.orderNum
          : section.orderNum + 1,
    }));
    return { q, s };
  };

  const sectionFunc = {
    addSection: () => {
      var { q: tmpQ, s: tmpS } = orderFunc();
      var tmpQ2 = tmpQ.map((question) => ({
        ...question,
        section:
          question.orderNum <= focusOrderNum
            ? question.section
            : question.section + 1,
      }));
      const prevSections = tmpS.filter(
        (section) => section.orderNum <= focusOrderNum
      );
      const nextSections = tmpS.filter(
        (section) => section.orderNum > focusOrderNum
      );
      setFocusId(prevSections.length);
      setSections([
        ...prevSections.map((section) => ({
          ...section,
          contents: tmpQ2.filter((question) => question.section === section.id),
        })),
        {
          id: prevSections.length,
          sectionTitle: '',
          sectionSummary: '',
          contents: tmpQ2.filter(
            (question) => question.section === sections.length
          ),
          orderNum: focusOrderNum + 1,
        },
        ...nextSections.map((section) => ({
          ...section,
          id: section.id + 1,
          contents: tmpQ2.filter((question) => question.section === section.id),
        })),
      ]);
      setFocusOrderNum(focusOrderNum + 1);
      setFocusType('section');
      setQuestions(tmpQ2);
    },
    deleteSection: (e, parentId) => {
      e.stopPropagation();
      var tmp = sections.map((section) => ({
        ...section,
        id: section.id > parentId ? section.id - 1 : section.id,
        contents: section.contents.map((content) => ({
          ...content,
          section:
            section.id >= parentId ? content.section - 1 : content.section,
          orderNum:
            section.id >= parentId ? content.orderNum - 1 : content.orderNum,
        })),
        orderNum:
          section.id > parentId ? section.orderNum - 1 : section.orderNum,
      }));
      console.log(tmp.map((s) => s.contents.map((q) => q.section)));
      var tmp2 = tmp.map((section) => ({
        ...section,
        contents: section.contents.filter(
          (question) => question.section === section.id
        ),
      }));
      console.log(tmp2);
      // setSections(tmp.filter((section) => section.id !== parentId));
      setFocusOrderNum(focusOrderNum - 1);
    },
    getSectionTitle: (e, parentId) => {
      e.stopPropagation();
      const {
        target: { value },
      } = e;
      setSections(
        sections.map((section) => ({
          ...section,
          sectionTitle: section.id === parentId ? value : section.sectionTitle,
        }))
      );
    },
    getSectionSummary: (e, parentId) => {
      e.stopPropagation();
      const {
        target: { value },
      } = e;
      setSections(
        sections.map((section) => ({
          ...section,
          sectionSummary:
            section.id === parentId ? value : section.sectionSummary,
        }))
      );
    },
    getSectionToggle: (id, orderNum) => {
      setFocusId(id);
      setFocusOrderNum(orderNum);
      setFocusType('section');
    },
  };

  const questionFunc = {
    addQuestion: () => {
      var { q: tmpQ, s: tmpS } = orderFunc();
      const prevQuestions = tmpQ.filter(
        (question) => question.orderNum <= focusOrderNum
      );
      const nextQuestions = tmpQ.filter(
        (question) => question.orderNum > focusOrderNum
      );
      setFocusId(prevQuestions.length);
      setQuestions([
        ...prevQuestions,
        {
          id: prevQuestions.length,
          section:
            focusType === 'question'
              ? prevQuestions[prevQuestions.length - 1].section
              : prevQuestions.length === 0
              ? 0
              : focusId,
          type: '객관식',
          title: '',
          options: [{ id: 0, text: '' }],
          etc: false,
          essential: false,
          orderNum: focusOrderNum + 1,
        },
        ...nextQuestions.map((question) => ({
          ...question,
          id: question.id + 1,
        })),
      ]);
      setFocusOrderNum(focusOrderNum + 1);
      setFocusType('question');
      setSections(tmpS);
    },
    deleteQuestion: (e, parentId, section) => {
      e.stopPropagation();
      var tmp = questions.filter((question) => question.id !== parentId);
      setQuestions(
        tmp.map((question) => ({
          ...question,
          id: question.id > parentId ? question.id - 1 : question.id,
          orderNum:
            question.id > parentId ? question.orderNum - 1 : question.orderNum,
        }))
      );
      setFocusId(
        sections[section].contents.length === 1 ? section : focusId - 1
      );
      setFocusOrderNum(focusOrderNum - 1);
      setFocusType(
        sections[section].contents.length === 1 ? 'section' : 'question'
      );
    },
    getType: (e, parentId) => {
      const {
        target: { value },
      } = e;
      setQuestions(
        questions.map((question) => ({
          ...question,
          type: question.id === parentId ? value : question.type,
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
          ...question,
          title: question.id === parentId ? value : question.title,
        }))
      );
    },
    toggleEssential: (e, parentId) => {
      e.stopPropagation();
      setQuestions(
        questions.map((question) => ({
          ...question,
          essential:
            question.id === parentId ? !question.essential : question.essential,
        }))
      );
    },
    toggleFocus: (id, orderNum) => {
      setFocusId(id);
      setFocusOrderNum(orderNum);
      setFocusType('question');
    },
  };

  const optionFunc = {
    addOption: (e, parentId) => {
      e.stopPropagation();
      setQuestions(
        questions.map((question) => ({
          ...question,
          options:
            question.id === parentId
              ? [...question.options, { id: question.options.length, text: '' }]
              : question.options,
          focus: question.id === parentId ? true : false,
        }))
      );
    },
    deleteOption: (e, parentId, optionId) => {
      e.stopPropagation();
      var tmp = questions.map((question) => ({
        ...question,
        options:
          question.id === parentId
            ? question.options.filter((option) => option.id !== optionId)
            : question.options,
        focus: question.id === parentId ? true : false,
      }));
      setQuestions(
        tmp.map((question) => ({
          ...question,
          options:
            question.id === parentId
              ? question.options.map((option) =>
                  option.id > optionId
                    ? { id: option.id - 1, text: option.text }
                    : option
                )
              : question.options,
          focus: question.id === parentId ? true : false,
        }))
      );
    },
    addEtc: (e, parentId) => {
      e.stopPropagation();
      setQuestions(
        questions.map((question) => ({
          ...question,
          etc: question.id === parentId ? true : question.etc,
          focus: question.id === parentId ? true : false,
        }))
      );
    },
    deleteEtc: (e, parentId) => {
      e.stopPropagation();
      setQuestions(
        questions.map((question) => ({
          ...question,
          etc: question.id === parentId ? false : question.etc,
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
          ...question,
          options:
            question.id === parentId
              ? question.options.map((option) =>
                  option.id === optionId
                    ? { id: optionId, text: value }
                    : option
                )
              : question.options,
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
        ...section,
        contents: questions.filter(
          (question) => question.section === section.id
        ),
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

  // console.log(survey);

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
          {sections.length > 1
            ? sections.map((section) => (
                <Sections key={section.id} id={section.id}>
                  <Section
                    style={{
                      borderLeft:
                        section.orderNum === focusOrderNum
                          ? '9px solid #c489ff'
                          : '',
                      transition: 'border-left 0.2s linear ',
                    }}
                    onClick={() =>
                      sectionFunc.getSectionToggle(section.id, section.orderNum)
                    }
                  >
                    <SectionTitle
                      type='text'
                      placeholder={`섹션${section.id + 1} 제목`}
                      value={section.sectionTitle}
                      onChange={(e) =>
                        sectionFunc.getSectionTitle(e, section.id)
                      }
                    />
                    <SectionSummary
                      type='text'
                      placeholder={`섹션${section.id + 1} 내용`}
                      value={section.sectionSummary}
                      onChange={(e) =>
                        sectionFunc.getSectionSummary(e, section.id)
                      }
                    />
                    <div
                      onClick={(e) => sectionFunc.deleteSection(e, section.id)}
                    >
                      -
                    </div>
                  </Section>
                  {section.contents.map((question) => (
                    <SurveyList
                      key={question.id}
                      id={question.id}
                      section={question.section}
                      type={question.type}
                      title={question.title}
                      options={question.options}
                      etc={question.etc}
                      essential={question.essential}
                      orderNum={question.orderNum}
                      focusOrderNum={focusOrderNum}
                      {...questionFunc}
                      optionFunc={optionFunc}
                    />
                  ))}
                </Sections>
              ))
            : questions.map((question) => (
                <SurveyList
                  key={question.id}
                  id={question.id}
                  section={question.section}
                  type={question.type}
                  title={question.title}
                  options={question.options}
                  etc={question.etc}
                  essential={question.essential}
                  orderNum={question.orderNum}
                  focusOrderNum={focusOrderNum}
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
          <AddSectionBtn onClick={sectionFunc.addSection}>=</AddSectionBtn>
        </QuestionController>
      </Content>
    </Container>
  );
};

export default SurveyPresenter;
