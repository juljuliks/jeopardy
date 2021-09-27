/* eslint-disable react/no-array-index-key */
import { useEffect, useState } from 'react';
import axios from 'axios';
import BoardRow from './components/BoardRow';

// async function fetchBoard() {
//   const response = await axios.get('/api/questions');
//   console.log(response.data);
//   return response.data;
// }

// [
//   {
//     categoryTitle: 'Blablablabla',
//     questions: [
//       { questionCost: 200, id: 1 },
//       { questionCost: 300, id: 2 },
//       { questionCost: 400, id: 3 },
//       { questionCost: 500, id: 4 },
//       { questionCost: 600, id: 5 },
//     ],
//   },
//   {
//     categoryTitle: 'Bla',
//     questions: [
//       { questionCost: 200, id: 1 },
//       { questionCost: 300, id: 2 },
//       { questionCost: 400, id: 3 },
//       { questionCost: 500, id: 4 },
//       { questionCost: 600, id: 5 },
//     ],
//   },
//   {
//     categoryTitle: 'Bla',
//     questions: [
//       { questionCost: 200, id: 1 },
//       { questionCost: 300, id: 2 },
//       { questionCost: 400, id: 3 },
//       { questionCost: 500, id: 4 },
//       { questionCost: 600, id: 5 },
//     ],
//   },
//   {
//     categoryTitle: 'Bla',
//     questions: [
//       { questionCost: 200, id: 1 },
//       { questionCost: 300, id: 2 },
//       { questionCost: 400, id: 3 },
//       { questionCost: 500, id: 4 },
//       { questionCost: 600, id: 5 },
//     ],
//   },
//   {
//     categoryTitle: 'Bla',
//     questions: [
//       { questionCost: 200, id: 1 },
//       { questionCost: 300, id: 2 },
//       { questionCost: 400, id: 3 },
//       { questionCost: 500, id: 4 },
//       { questionCost: 600, id: 5 },
//     ],
//   },
//   {
//     categoryTitle: 'Bla',
//     questions: [
//       { questionCost: 200, id: 1 },
//       { questionCost: 300, id: 2 },
//       { questionCost: 400, id: 3 },
//       { questionCost: 500, id: 4 },
//       { questionCost: 600, id: 5 },
//     ],
//   },
// ];

export default function GameBoard() {
  // const mockedData = fetchBoard();

  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('/api/questions')
      .then((res) => res.data)
      .then((questions) => setData(questions));
  }, []);

  return (
    <>
      <div style={{ width: 800 }}>

        {data ? data.map((row, index) => (<BoardRow key={index} rowData={row} />)) : 'no data, yet'}
      </div>
    </>
  );
}
