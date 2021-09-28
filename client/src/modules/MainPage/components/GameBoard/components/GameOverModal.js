import { Modal } from 'antd';

export default function GameOverModal({ gameOverModalVisible, setGameOverModalVisible }) {
  const handleOk = () => {
    setGameOverModalVisible(false);
  };

  const handleCancel = () => {
    setGameOverModalVisible(false);
  };

  return (
    <>
      <Modal title="Basic Modal" visible={gameOverModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
}
