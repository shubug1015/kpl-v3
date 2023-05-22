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

const Summary = styled.textarea`
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
  const [survey, setSurvey] = useState({
    mainTitle: '',
    mainSummary: '',
    sections: [
      {
        id: 0,
        sectionNum: 0,
        sectionTitle: '',
        sectionSummary: '',
        contents: [
          {
            id: 0,
            type: '객관식',
            title: '',
            options: [{ id: 0, text: '' }],
            etc: false,
            essential: false,
          },
        ],
      },
    ],
  });

  const mainFunc = {
    getMainTitle: (e) => {
      const {
        target: { value },
      } = e;
      setSurvey({
        mainTitle: value,
        mainSummary: survey.mainSummary,
        sections: [
          {
            id: 0,
            sectionNum: 0,
            sectionTitle: '',
            sectionSummary: '',
            contents: survey.sections.map((section) => section.contents)[0],
          },
        ],
      });
    },
    getMainSummary: (e) => {
      const {
        target: { value },
      } = e;
      setSurvey({
        mainTitle: survey.mainTitle,
        mainSummary: value,
        sections: [
          {
            id: 0,
            sectionNum: 0,
            sectionTitle: '',
            sectionSummary: '',
            contents: survey.sections.map((section) => section.contents)[0],
          },
        ],
      });
    },
  };

  const sectionFunc = {
    addSection: () => {
      setSurvey({
        mainTitle: survey.mainTitle,
        mainSummary: survey.mainSummary,
        sections: [
          ...survey.sections,
          {
            id: survey.sections.length,
            sectionNum: survey.sections.length,
            sectionTitle: '',
            sectionSummary: '',
            contents: [
              {
                id: 0,
                type: '객관식',
                title: '',
                options: [{ id: 0, text: '' }],
                etc: false,
                essential: false,
              },
            ],
          },
        ],
      });
    },
  };

  const questionFunc = {
    addQuestion: () => {
      setSurvey({
        mainTitle: survey.mainTitle,
        mainSummary: survey.mainSummary,
        sections: [
          {
            id: 0,
            sectionNum: 0,
            sectionTitle: '',
            sectionSummary: '',
            contents: [
              ...survey.sections.map((section) => section.contents)[0],
              {
                id: survey.sections.map((section) => section.contents)[0]
                  .length,
                type: '객관식',
                title: '',
                options: [{ id: 0, text: '' }],
                etc: false,
                essential: false,
              },
            ],
          },
        ],
      });
    },
    deleteQuestion: (parentId) => {
      var tmp = {
        mainTitle: survey.mainTitle,
        mainSummary: survey.mainSummary,
        sections: [
          {
            id: 0,
            sectionNum: 0,
            sectionTitle: '',
            sectionSummary: '',
            contents: survey.sections.map((section) =>
              section.contents.filter((content) => content.id !== parentId)
            )[0],
          },
        ],
      };
      setSurvey({
        mainTitle: survey.mainTitle,
        mainSummary: survey.mainSummary,
        sections: [
          {
            id: 0,
            sectionNum: 0,
            sectionTitle: '',
            sectionSummary: '',
            contents: tmp.sections.map((section) =>
              section.contents.map((content) =>
                content.id > parentId
                  ? {
                      id: content.id - 1,
                      type: content.type,
                      title: content.title,
                      options: content.options,
                      etc: content.etc,
                      essential: content.essential,
                    }
                  : content
              )
            )[0],
          },
        ],
      });
    },
    getType: (e, parentId) => {
      const {
        target: { value },
      } = e;
      setSurvey({
        mainTitle: survey.mainTitle,
        mainSummary: survey.mainSummary,
        sections: [
          {
            id: 0,
            sectionNum: 0,
            sectionTitle: '',
            sectionSummary: '',
            contents: survey.sections.map((section) =>
              section.contents.map((content) =>
                content.id === parentId
                  ? {
                      id: content.id,
                      type: value,
                      title: content.title,
                      options: content.options,
                      etc: content.etc,
                      essential: content.essential,
                    }
                  : content
              )
            )[0],
          },
        ],
      });
    },
    getTitle: (e, parentId) => {
      const {
        target: { value },
      } = e;
      setSurvey({
        mainTitle: survey.mainTitle,
        mainSummary: survey.mainSummary,
        sections: [
          {
            id: 0,
            sectionNum: 0,
            sectionTitle: '',
            sectionSummary: '',
            contents: survey.sections.map((section) =>
              section.contents.map((content) =>
                content.id === parentId
                  ? {
                      id: content.id,
                      type: content.type,
                      title: value,
                      options: content.options,
                      etc: content.etc,
                      essential: content.essential,
                    }
                  : content
              )
            )[0],
          },
        ],
      });
    },
    toggleEssential: (parentId) => {
      setSurvey({
        mainTitle: survey.mainTitle,
        mainSummary: survey.mainSummary,
        sections: [
          {
            id: 0,
            sectionNum: 0,
            sectionTitle: '',
            sectionSummary: '',
            contents: survey.sections.map((section) =>
              section.contents.map((content) =>
                content.id === parentId
                  ? {
                      id: content.id,
                      type: content.type,
                      title: content.title,
                      options: content.options,
                      etc: content.etc,
                      essential: !content.essential,
                    }
                  : content
              )
            )[0],
          },
        ],
      });
    },
  };

  const optionFunc = {
    addOption: (parentId) => {
      setSurvey({
        mainTitle: survey.mainTitle,
        mainSummary: survey.mainSummary,
        sections: [
          {
            id: 0,
            sectionNum: 0,
            sectionTitle: '',
            sectionSummary: '',
            contents: survey.sections.map((section) =>
              section.contents.map((content) =>
                content.id === parentId
                  ? {
                      id: content.id,
                      type: content.type,
                      title: content.title,
                      options: [
                        ...content.options,
                        { id: content.options.length, text: '' },
                      ],
                      etc: content.etc,
                      essential: content.essential,
                    }
                  : content
              )
            )[0],
          },
        ],
      });
    },
    deleteOption: (parentId, optionId) => {
      var tmp = {
        mainTitle: survey.mainTitle,
        mainSummary: survey.mainSummary,
        sections: [
          {
            id: 0,
            sectionNum: 0,
            sectionTitle: '',
            sectionSummary: '',
            contents: survey.sections.map((section) =>
              section.contents.map((section) =>
                section.id === parentId
                  ? {
                      id: section.id,
                      type: section.type,
                      title: section.title,
                      options: section.options.filter(
                        (option) => option.id !== optionId
                      ),
                      etc: section.etc,
                      essential: section.essential,
                    }
                  : section
              )
            )[0],
          },
        ],
      };
      setSurvey({
        mainTitle: survey.mainTitle,
        mainSummary: survey.mainSummary,
        sections: [
          {
            id: 0,
            sectionNum: 0,
            sectionTitle: '',
            sectionSummary: '',
            contents: tmp.sections.map((section) =>
              section.contents.map((content) =>
                content.id === parentId
                  ? {
                      id: content.id,
                      type: content.type,
                      title: content.title,
                      options: content.options.map((option) =>
                        option.id > optionId
                          ? { id: option.id - 1, text: option.text }
                          : option
                      ),
                      etc: content.etc,
                      essential: content.essential,
                    }
                  : content
              )
            )[0],
          },
        ],
      });
    },
    getOption: (e, parentId, optionId) => {
      const {
        target: { value },
      } = e;
      setSurvey({
        mainTitle: survey.mainTitle,
        mainSummary: survey.mainSummary,
        sections: [
          {
            id: 0,
            sectionNum: 0,
            sectionTitle: '',
            sectionSummary: '',
            contents: survey.sections.map((section) =>
              section.contents.map((content) =>
                content.id === parentId
                  ? {
                      id: content.id,
                      type: content.type,
                      title: content.title,
                      options: content.options.map((option) =>
                        option.id === optionId
                          ? { id: optionId, text: value }
                          : option
                      ),
                      etc: content.etc,
                      essential: content.essential,
                    }
                  : content
              )
            )[0],
          },
        ],
      });
    },
    addEtc: () => {
      setSurvey({
        mainTitle: survey.mainTitle,
        mainSummary: survey.mainSummary,
        sections: [
          {
            id: 0,
            sectionNum: 0,
            sectionTitle: '',
            sectionSummary: '',
            contents: survey.sections.map((section) =>
              section.contents.map((content) => ({
                id: content.id,
                type: content.type,
                title: content.title,
                options: [...content.options],
                etc: true,
                essential: content.essential,
              }))
            )[0],
          },
        ],
      });
    },
    deleteEtc: () => {
      setSurvey({
        mainTitle: survey.mainTitle,
        mainSummary: survey.mainSummary,
        sections: [
          {
            id: 0,
            sectionNum: 0,
            sectionTitle: '',
            sectionSummary: '',
            contents: survey.sections.map((section) =>
              section.contents.map((content) => ({
                id: content.id,
                type: content.type,
                title: content.title,
                options: [...content.options],
                etc: false,
                essential: content.essential,
              }))
            )[0],
          },
        ],
      });
    },
  };

  const [height, setHeight] = useState(0);

  const ref = useRef(null);

  useEffect(() => {
    setHeight(ref.current.clientHeight);
  }, [survey]);

  console.log(survey);

  return (
    <Container>
      <TitleContainer>
        <Title
          type='text'
          placeholder='설문지 제목'
          value={survey.mainTitle}
          onChange={mainFunc.getMainTitle}
        />
        <Summary
          type='text'
          placeholder='설문지 설명'
          value={survey.mainSummary}
          onChange={mainFunc.getMainSummary}
        />
      </TitleContainer>
      <Content>
        <Questions ref={ref}>
          {survey.sections.map((section) =>
            section.contents.map((content) => (
              <SurveyList
                key={content.id}
                id={content.id}
                type={content.type}
                title={content.title}
                options={content.options}
                etc={content.etc}
                essential={content.essential}
                {...questionFunc}
                optionFunc={optionFunc}
              />
            ))
          )}
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
