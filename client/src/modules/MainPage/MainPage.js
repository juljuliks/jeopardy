import styled from 'styled-components';
import GameBoard from './components/GameBoard/GameBoard';

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 50px 0;
  height: 100vh;
`;

export default function MainPage() {
  return (
    <Container>
      <GameBoard />
    </Container>
  );
}
