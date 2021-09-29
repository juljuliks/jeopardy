/* eslint-disable no-unused-vars */
import styled from 'styled-components';
import { Card } from 'antd';
import CustomCard from './Card';

const Row = styled.div`
display: flex;
`;

const gridStyle = {
  minWidth: '35%',
  textAlign: 'center',
};

export default function BoardRow({
  category, onCardClick,
}) {
  return (
    <Row>
      <Card.Grid hoverable={false} style={gridStyle}>
        {category.categoryName}
      </Card.Grid>
      {category.questions.map((question) => (
        <CustomCard
          key={question.id}
          question={question}
          onCardClick={onCardClick}
        />
      ))}
    </Row>
  );
}
