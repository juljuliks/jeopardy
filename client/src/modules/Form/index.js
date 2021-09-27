/* eslint-disable react/no-array-index-key */
import { Form, Input, Button } from 'antd';

import styled from 'styled-components';

const Container = styled.div`
  margin: 50px auto;
`;

const defaultFormItems = [
  {
    name: 'email',
    label: 'Your email',
    defaultValue: '',
    rules: [
      {
        required: true,
        message: 'Please input valid email',
        type: 'email',
      },
    ],
  },
  {
    name: 'password',
    label: 'Password',
    isPassword: true,
    defaultValue: '',
    rules: [
      {
        required: true,
        min: 6,
        message: 'Password must be at least 6 characters',
      },
    ],
  },
];

const defaultSubmitHanller = () => {
  console.log('Plase add submit handler in props');
};

export default function CustomForm({
  formItems = defaultFormItems,
  submitHandler = defaultSubmitHanller,
}) {
  const onFinish = (values) => {
    submitHandler(values);
  };

  return (
    <Container>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 8,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        autoComplete="off"
      >
        {formItems.map((el, index) => (
          <Form.Item
            key={index}
            label={el.label}
            name={el.name}
            rules={el.rules}
            initialValue={el.defaultValue}
          >
            {el.isPassword ? <Input.Password /> : <Input />}
          </Form.Item>
        ))}

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Container>
  );
}
