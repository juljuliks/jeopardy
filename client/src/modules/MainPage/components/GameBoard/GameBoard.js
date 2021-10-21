/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-array-index-key */
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import axios from 'axios';
import BoardRow from './components/BoardRow';
import QuestionModal from './components/QuestionModal';
import { endGame, updateGame } from '../../../../redux/actions/game';

export default function GameBoard() {
  const history = useHistory()
  const arrOfPoints = useSelector((state) => state.game);
  const dispatch = useDispatch();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [categories, setCategories] = useState(null);
  const [question, setQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(0);

  useEffect(() => {
    axios.get('/api/questions')
      .then((res) => res.data)
      .then((categoriesFromBack) => setCategories(categoriesFromBack));
  }, []);

  useEffect(() => {
    if (arrOfPoints.length === 6) {
      gameOver();
    }
  }, [arrOfPoints.length]);

  const showModal = (chosenQuestion) => {
    setIsModalVisible(true);
    setQuestion(chosenQuestion);
  };

  async function gameOver() {
    const filteredState = arrOfPoints.filter((points) => points.pricePoint > 0);
    await axios.post('/api/questions/game', ({
      totalScore: filteredState.reduce((acc, cv) => acc + cv.pricePoint, 0),
      correctAnswers: filteredState.length,
      arrOfPoints,
    }))
    dispatch(endGame())
    history.push('/profile')
  }

  const handleOk = () => {
    if (question.id) {
      setIsModalVisible(false);
      if (selectedAnswer.isCorrect) {
        setQuestion((prev) => {
          prev.isCorrect = true;
          return prev;
        });
        dispatch(updateGame({ category: question.categoryId, pricePoint: question.pricePoint }));
      } else {
        setQuestion((prev) => {
          prev.isCorrect = false;
          return prev;
        });
        dispatch(updateGame({ category: question.categoryId, pricePoint: 0 }));
      }
    } else {
      setIsModalVisible(true);
    }
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <div style={{ width: 800 }}>
        {categories ? categories.map((category, index) => (
          <BoardRow
            key={index}
            category={category}
            onCardClick={showModal}
          />
        )) : 'no data, yet'}
      </div>
      <QuestionModal
        isModalVisible={isModalVisible}
        handleOk={handleOk}
        handleCancel={handleCancel}
        question={question}
        setSelectedAnswer={setSelectedAnswer}
      />
    </>
  );
}
