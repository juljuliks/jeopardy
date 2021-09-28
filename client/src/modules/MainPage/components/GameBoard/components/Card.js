/* eslint-disable no-unused-vars */
import {
  Modal, Radio, Card,
} from 'antd';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import CustomCountdown from '../../Countdown';
import { endGame, updateGame } from '../../../../../redux/actions/game';
// import GameOverModal from './GameOverModal';

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

export default function CustomCard({
  question, isButtonClicked, onCardClick,
}) {
  console.log(question);
  return (
    <Card.Grid
      onClick={() => onCardClick(question)}
      style={isButtonClicked ? gridStyle : { ...gridStyle, backgroundColor: 'red', color: 'white' }}
    >
      {question.pricePoint}
    </Card.Grid>
  );
}
