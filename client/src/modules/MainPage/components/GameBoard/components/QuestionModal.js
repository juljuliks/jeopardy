/* eslint-disable no-unused-vars */
import {
  Modal, Button, Radio, Card,
} from 'antd';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import CustomCountdown from '../../Countdown';
import { endGame, updateGame } from '../../../../../redux/actions/game';

const gridStyle = {
  maxWwidth: '10%',
  textAlign: 'center',
  cursor: 'pointer',
};

const RadioWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export default function QuestionModal({ title, question }) {
  const arrOfPoints = useSelector((state) => state.game);
  const dispatch = useDispatch();
  const [choices, setChoices] = useState(null);
  let score;
  let numOfCorrAnswers;

  useEffect(() => {
    axios.get(`/api/questions/${question.id}/choice`)
      .then((res) => res.data)
      .then((choicesFromBack) => setChoices(choicesFromBack));
  }, []);
  console.log(choices);
  const [value, setValue] = useState(0);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isGameOn, setGameOn] = useState(true);

  const showModal = () => {
    setIsModalVisible(true);
  };

  function gameOver() {
    setGameOn(false);
    score = arrOfPoints.reduce((acc, cv) => acc + cv, 0);
    numOfCorrAnswers = arrOfPoints.filter((points) => points > 0).length;
  }

  const handleOk = () => {
    setIsModalVisible(false);
    const choiceMade = choices.find((choice) => choice.id === value);
    if (choiceMade.isCorrect) {
      dispatch(updateGame(title));
    } else {
      dispatch(updateGame(0));
    }
    if (arrOfPoints.length === 6) {
      gameOver();
    }
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  // TODO по id вопроса получить варианты ответов

  // const mockAnswers = [
  //   { answerId: 1, answerBody: 'bla bla 1', isCorrect: false },
  //   { answerId: 2, answerBody: 'bla bla 2', isCorrect: true },
  //   { answerId: 3, answerBody: 'bla bla 3', isCorrect: false },
  //   { answerId: 4, answerBody: 'bla bla 4', isCorrect: false },
  // ];

  function changeHandler(e) {
    setValue(e.target.value);
    // TODO отправить ответ на б
  }

  if (!choices) {
    return <div>no data, yet</div>;
  }

  if (!isGameOn) {
    return (
      <>
        <h3>Game is Over</h3>
        <div>
          Your score is
          {score}
        </div>
        <div>
          Your gave
          {numOfCorrAnswers}
          {' '}
          correct answers out of 6
        </div>
      </>
    );
  }

  return (
    <>
      <Card.Grid style={gridStyle} onClick={showModal}>
        {question.pricePoint}
      </Card.Grid>
      <Modal
        title={<CustomCountdown />}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>
          Question:
          {question.questionBody}
        </p>

        <RadioWrapper>
          <Radio.Group buttonStyle="solid">
            {choices.map((answer) => (
              <Radio.Button
                key={answer.id}
                style={{ display: 'block', minWidth: 300 }}
                value={answer.id}
                onChange={changeHandler}
              >
                {answer.choiceBody}
              </Radio.Button>
            ))}
          </Radio.Group>
        </RadioWrapper>
      </Modal>
    </>
  );
}
