import { Modal } from 'antd';

export default function GameOverModal({ showGameOver, setShowGameOver }) {
  const handleOk = () => {
    setShowGameOver(false);
  };

  const handleCancel = () => {
    setShowGameOver(false);
  };

  return (
    <Modal
      title="Basic Modal"
      visible={showGameOver}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <p>
        Игра окончена
      </p>

    </Modal>
  );
}
