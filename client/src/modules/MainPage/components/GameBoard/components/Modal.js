import {
  Modal, Radio,
} from 'antd';
import CustomCountdown from '../../Countdown';

export default function QuestionModal({}) {
  return (
    <Modal
      title={<CustomCountdown closeModal={setIsModalVisible} id={question.categoryId} />}
      visible={isModalVisible}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <p>
        Question:
        {question.questionBody}
      </p>

      <RadioWrapper>
        <Radio.Group buttonStyle="solid">
          {choices.map((answer) => (
            <Radio.Button
              key={answer.id}
              style={{ display: 'block', minWidth: 300 }}
              value={answer.id}
              onChange={changeHandler}
            >
              {answer.choiceBody}
            </Radio.Button>
          ))}
        </Radio.Group>
      </RadioWrapper>
    </Modal>
  );
}
