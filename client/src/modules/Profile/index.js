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
    if (!user.id) return;
    fetch(`/api/stats/${user.id}`)
      .then((res) => res.json())
      .then(setData);
  }, [user.id]);

  let totalScore = data.reduce((acc, cur) => acc + cur.categoryScore, 0)

  return (
    <Container>
      <h2>
        Total of your last game: {totalScore}
      </h2>
      <Table columns={columns} dataSource={data} />
    </Container>
  );
}
