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

  console.log(user);

  useEffect(() => {
    if (!user.id) return;
    fetch(`/api/stats/${user.id}`)
      .then((res) => res.json())
      .then(setData);
  }, [user.id]);

  return (
    <Container>
      <Table columns={columns} dataSource={data} />
    </Container>
  );
}
