import { Modal, Button, Radio } from 'antd';
import { useState } from 'react';
import styled from 'styled-components';
import CustomCountdown from '../../Countdown';

const RadioWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export default function QuestionModal({ title, questionId }) {
  const [value, setValue] = useState();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    console.log(questionId);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  // TODO по id вопроса получить вопрос и варианты ответов

  const mockAnswers = [
    { answerId: 1, answerBody: 'bla bla 1' },
    { answerId: 2, answerBody: 'bla bla 2' },
    { answerId: 3, answerBody: 'bla bla 3' },
    { answerId: 4, answerBody: 'bla bla 4' },
  ];

  function changeHandler(e) {
    setValue(e.target.value);
  }

  console.log(value);

  return (
    <>
      <Button type="text" onClick={showModal}>
        {title}
      </Button>
      <Modal
        title={<CustomCountdown />}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Question: blabla bla bla bla?</p>

        <RadioWrapper>
          <Radio.Group buttonStyle="solid">
            {mockAnswers.map((answer) => (
              <Radio.Button
                key={answer.answerId}
                style={{ display: 'block', minWidth: 300 }}
                value={answer.answerId}
                onChange={changeHandler}
              >
                {answer.answerBody}
              </Radio.Button>
            ))}
          </Radio.Group>
        </RadioWrapper>
      </Modal>
    </>
  );
}
