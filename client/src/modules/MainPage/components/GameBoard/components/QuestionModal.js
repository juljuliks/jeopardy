import { useEffect, useState } from 'react';
import axios from 'axios';
import { Modal, Radio } from 'antd';
import styled from 'styled-components';
// import CustomCountdown from '../../Countdown';

const RadioWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export default function QuestionModal(props) {
  const {
    question,
    isModalVisible,
    handleOk,
    handleCancel,
    setSelectedAnswer,
  } = props;
  const [choices, setChoices] = useState([]);
  useEffect(() => {
    if (!question) return;
    axios.get(`/api/questions/${question.id}/choice`)
      .then((res) => res.data)
      .then(setChoices);
  }, [question]);

  function changeHandler(e) {
    setSelectedAnswer(e.target.value);
  }

  return (
    <Modal
      title="Basic Modal"
      visible={isModalVisible}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <p>
        {question ? question.questionBody : 'wait'}
      </p>

      <RadioWrapper>
        <Radio.Group buttonStyle="solid">
          {choices.length ? choices.map((answer) => (
            <Radio.Button
              key={answer.id}
              style={{ display: 'block', minWidth: 300 }}
              value={answer}
              onChange={changeHandler}
            >
              {answer.choiceBody}
            </Radio.Button>
          )) : (<p>no data yet</p>)}
          {}
        </Radio.Group>
      </RadioWrapper>
    </Modal>
  );
}
