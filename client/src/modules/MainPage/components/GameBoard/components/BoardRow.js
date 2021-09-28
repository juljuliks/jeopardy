import styled from 'styled-components';
import { Card } from 'antd';
import QuestionModal from './QuestionModal';

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
      <Card.Grid hoverable={false} style={gridStyle}>{rowData.categoryName}</Card.Grid>
      {rowData.questions.map((question) => (
        <QuestionModal key={question.id} question={question} />
      ))}
    </Row>
  );
}
