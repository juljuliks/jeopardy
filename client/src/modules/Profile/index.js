/* eslint-disable no-unused-vars */
import { Table } from 'antd';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

const columns = [
  {
    title: 'Category',
    dataIndex: 'categoryName',
  },
  {
    title: 'Score',
    dataIndex: 'categoryScore',
  },
];

const Container = styled.div`
  width: 600px;
  margin: 50px auto;
`;

export default function RaitingPage() {
  const user = useSelector((state) => state.user);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`/api/stats/${user.id}`)
      .then((res) => res.json())
      .then(setData);
  }, []);

  return (
    <Container>
      <Table columns={columns} dataSource={data} />
    </Container>
  );
}
