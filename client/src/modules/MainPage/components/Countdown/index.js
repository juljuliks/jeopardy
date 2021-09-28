import { Statistic, Row, Col } from 'antd';
import { memo } from 'react';
import { useDispatch } from 'react-redux';
import { updateGame } from '../../../../redux/actions/game';

const { Countdown } = Statistic;

function CustomCountdown(prop) {
  const deadline = Date.now() + 1000 * 60;
  const dispatch = useDispatch();
  function onFinish() {
    console.log('finished!');
    dispatch(updateGame({ category: prop.id, pricePoint: 0 }));
    prop.closeModal(false);
  }

  return (
    <Row gutter={16}>
      <Col span={12}>
        <Countdown title="Countdown" value={deadline} onFinish={(id) => onFinish(id)} />
      </Col>
    </Row>
  );
}

export default memo(CustomCountdown);
