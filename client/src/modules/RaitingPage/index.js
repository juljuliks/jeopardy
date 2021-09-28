/* eslint-disable no-unused-vars */
import { Table } from 'antd';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

const columns = [
  {
    title: 'Name',
    dataIndex: 'username',
  },
  {
    title: 'Score',
    dataIndex: 'totalScore',
  },
];

const Container = styled.div`
  width: 600px;
  margin: 50px auto;
`;

export default function RaitingPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/api/stats')
      .then((res) => res.json())
      .then(setData);
  }, []);

  return (
    <Container>
      <Table columns={columns} dataSource={data} />
    </Container>
  );
}
