/* eslint-disable no-unused-vars */
/* eslint-disable react/no-array-index-key */
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import axios from 'axios';
import BoardRow from './components/BoardRow';
import QuestionModal from './components/Card';
import { endGame, updateGame } from '../../../../redux/actions/game';

export default function GameBoard() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [categories, setCategories] = useState(null);
  const arrOfPoints = useSelector((state) => state.game);
  const dispatch = useDispatch();
  const [choices, setChoices] = useState(null);
  const [question, setQuestion] = useState(null);
  const [isGameOver, setGameOver] = useState(false);
  // const [okClicked, setOkClicked] = useState(0);
  // const [isButtonClicked, setButtonClick] = useState(true);

  // const [totalScore, setTotalStore] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);

  useEffect(() => {
    if (!question) return;
    axios.get(`/api/questions/${question.id}/choice`)
      .then((res) => res.data)
      .then((choicesFromBack) => setChoices(choicesFromBack));
  }, [question]);

  useEffect(() => {
    axios.get('/api/questions')
      .then((res) => res.data)
      .then((questions) => setCategories(questions));
  }, []);

  const showModal = (chosenQuestion) => {
    // if (isButtonClicked) {
    setIsModalVisible(true);
    setQuestion(chosenQuestion);
    // setButtonClick(false);
    // }
  };

  function gameOver() {
    setGameOver(true);
    const filteredState = arrOfPoints.filter((points) => points.pricePoint > 0);
    setCorrectAnswers(filteredState.length);
    // setTotalStore();
    axios.post('/api/questions/game', ({
      totalScore: filteredState.reduce((acc, cv) => acc + cv.pricePoint, 0),
      correctAnswers,
      arrOfPoints,
    }))
      .then(() => dispatch(endGame()));
    // setIsModalVisible(false);
  }

  useEffect(() => {
    if (arrOfPoints.length === 6) {
      gameOver();
    }
  }, [arrOfPoints.length]);

  const handleOk = () => {
    if (question.id) {
      // setOkClicked((prev) => prev + 1);
      setIsModalVisible(false);
      const choiceMade = choices.find((choice) => choice.id === question.id);

      if (choiceMade.isCorrect) {
        dispatch(updateGame({ category: question.categoryId, pricePoint: question.pricePoint }));
      } else {
        dispatch(updateGame({ category: question.categoryId, pricePoint: 0 }));
      }
      console.log('choice made=>', choiceMade);
    } else {
      setIsModalVisible(true);
    }
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  // function changeHandler(e) {
  //   setValue(e.target.value);
  // }

  if (isGameOver) {
    console.log(`Your score is --  Your gave ${correctAnswers} correct answers out of 6`);
    // setGameOverModalVisible(true);
  }

  // if (!choices) {
  //   return <div>no data, yet</div>;
  // }
  console.log({ categories });

  return (
    <>
      <div style={{ width: 800 }}>
        {categories ? categories.map((row, index) => (
          <BoardRow
            key={index}
            rowData={row}
            onCardClick={showModal}
          />
        )) : 'no data, yet'}
      </div>
      <QuestionModal
        isModalVisible={isModalVisible}
        question={question}
        handleOk={handleOk}
        handleCancel={handleCancel}
      />
    </>
  );
}
