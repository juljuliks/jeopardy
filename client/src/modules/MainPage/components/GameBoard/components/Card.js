/* eslint-disable no-unused-vars */
import { Card } from 'antd';
import React, { useState } from 'react';
import styled from 'styled-components';

const gridStyle = {
  maxWwidth: '10%',
  textAlign: 'center',
  cursor: 'pointer',
};

export default function CustomCard({ question, onCardClick }) {
  const [isCardDisabled, setCardDisabled] = useState(false);

  function clickHandler() {
    if (isCardDisabled) return;
    setCardDisabled(true);
    onCardClick(question);
  }

  if (!question) {
    return (
      <span />
    );
  }

  return (
    <Card.Grid
      onClick={clickHandler}
      style={isCardDisabled ? { ...gridStyle, backgroundColor: `${question.isCorrect ? '#73d13d' : '#ff4d4f'}`, color: 'white' } : gridStyle}
    >
      {question.pricePoint}
    </Card.Grid>
  );
}
