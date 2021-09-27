import styled from 'styled-components';
import { Card } from 'antd';
import QuestionCard from './QuestionCard';

const Row = styled.div`
display: flex;
`;

const gridStyle = {
  minWidth: '35%',
  textAlign: 'center',
};

export default function BoardRow({ rowData }) {
  return (
    <Row>
      <Card.Grid hoverable={false} style={gridStyle}>{rowData.categoryTitle}</Card.Grid>
      {rowData.questions.map((question) => (
        <QuestionCard key={question.id} question={question} />
      ))}
    </Row>
  );
}
