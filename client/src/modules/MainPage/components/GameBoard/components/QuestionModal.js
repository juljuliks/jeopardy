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
  let totalScore;
  let correctAnswers;

  useEffect(() => {
    axios.get(`/api/questions/${question.id}/choice`)
      .then((res) => res.data)
      .then((choicesFromBack) => setChoices(choicesFromBack));
  }, []);

  const [value, setValue] = useState(0);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isGameOver, setGameOver] = useState(false);
  const [isOkclicked, setOkClicked] = useState(0);
  const showModal = () => {
    setIsModalVisible(true);
  };

  function gameOver() {
    setGameOver(true);
    const filteredState = arrOfPoints.filter((points) => points.pricePoint > 0);
    correctAnswers = filteredState.length;
    totalScore = filteredState.reduce((acc, cv) => acc + cv.pricePoint, 0);
    axios.post('/api/questions/game', ({ totalScore, correctAnswers, arrOfPoints }))
      .then(() => dispatch(endGame()));
  }

  useEffect(() => {
    console.log('current state of the game===>', arrOfPoints);
    if (arrOfPoints.length === 6) {
      gameOver();
    }
  }, [isOkclicked]);

  const handleOk = () => {
    setOkClicked((prev) => prev + 1);
    setIsModalVisible(false);
    const choiceMade = choices.find((choice) => choice.id === value);

    if (choiceMade.isCorrect) {
      dispatch(updateGame({ category: question.categoryId, pricePoint: question.pricePoint }));
    } else {
      dispatch(updateGame({ category: question.categoryId, pricePoint: 0 }));
    }
    console.log('choice made=>', choiceMade);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  function changeHandler(e) {
    setValue(e.target.value);
    // TODO отправить ответ на б
  }

  if (!choices) {
    return <div>no data, yet</div>;
  }

  if (isGameOver) {
    console.log(`Your score is ${totalScore} Your gave ${correctAnswers} correct answers out of 6`);
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
