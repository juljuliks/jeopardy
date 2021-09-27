/* eslint-disable no-unused-vars */
import { Modal, Button, Radio } from 'antd';
import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import CustomCountdown from '../../Countdown';

const RadioWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export default function QuestionModal({ title, questionId }) {
  const [value, setValue] = useState(0);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    console.log(value);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  // TODO по id вопроса получить варианты ответов

  const mockAnswers = [
    { answerId: 1, answerBody: 'bla bla 1', isCorrect: false },
    { answerId: 2, answerBody: 'bla bla 2', isCorrect: true },
    { answerId: 3, answerBody: 'bla bla 3', isCorrect: false },
    { answerId: 4, answerBody: 'bla bla 4', isCorrect: false },
  ];

  function changeHandler(e) {
    setValue(e.target.value);
    // TODO отправить ответ на б
  }

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
