import { Card } from 'antd';
import QuestionModal from './QuestionModal';

export default function QuestionCard({ question }) {
  const gridStyle = {
    maxWwidth: '10%',
    textAlign: 'center',
    cursor: 'pointer',
  };

  return (
    <Card.Grid
      style={gridStyle}
    >
      <QuestionModal title={question.questionCost} questionId={question.id} />
    </Card.Grid>
  );
}
