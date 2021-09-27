/* eslint-disable react/no-array-index-key */
import BoardRow from './components/BoardRow';

const mockedData = [
  {
    categoryTitle: 'Blablablabla',
    questions: [
      { questionCost: 200, id: 1 },
      { questionCost: 300, id: 2 },
      { questionCost: 400, id: 3 },
      { questionCost: 500, id: 4 },
      { questionCost: 600, id: 5 },
    ],
  },
  {
    categoryTitle: 'Bla',
    questions: [
      { questionCost: 200, id: 1 },
      { questionCost: 300, id: 2 },
      { questionCost: 400, id: 3 },
      { questionCost: 500, id: 4 },
      { questionCost: 600, id: 5 },
    ],
  },
  {
    categoryTitle: 'Bla',
    questions: [
      { questionCost: 200, id: 1 },
      { questionCost: 300, id: 2 },
      { questionCost: 400, id: 3 },
      { questionCost: 500, id: 4 },
      { questionCost: 600, id: 5 },
    ],
  },
  {
    categoryTitle: 'Bla',
    questions: [
      { questionCost: 200, id: 1 },
      { questionCost: 300, id: 2 },
      { questionCost: 400, id: 3 },
      { questionCost: 500, id: 4 },
      { questionCost: 600, id: 5 },
    ],
  },
  {
    categoryTitle: 'Bla',
    questions: [
      { questionCost: 200, id: 1 },
      { questionCost: 300, id: 2 },
      { questionCost: 400, id: 3 },
      { questionCost: 500, id: 4 },
      { questionCost: 600, id: 5 },
    ],
  },
  {
    categoryTitle: 'Bla',
    questions: [
      { questionCost: 200, id: 1 },
      { questionCost: 300, id: 2 },
      { questionCost: 400, id: 3 },
      { questionCost: 500, id: 4 },
      { questionCost: 600, id: 5 },
    ],
  },
];

export default function GameBoard() {
  return (
    <>
      <div style={{ width: 800 }}>
        {mockedData.map((row, index) => (<BoardRow key={index} rowData={row} />))}
      </div>
    </>
  );
}
