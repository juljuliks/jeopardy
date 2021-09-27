import { Statistic, Row, Col } from 'antd';

const { Countdown } = Statistic;

export default function CustomCountdown() {
  const deadline = Date.now() + 1000 * 60;

  function onFinish() {
    console.log('finished!');
  }

  return (
    <Row gutter={16}>
      <Col span={12}>
        <Countdown title="Countdown" value={deadline} onFinish={onFinish} />
      </Col>
    </Row>
  );
}
