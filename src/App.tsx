import Header from './components/Cabecalho';
import Hero from './components/Hero';
import ListaVagas from './containers/ListaVagas';
import { GlobalStyle } from './GlobalStyles';
import styled from 'styled-components';

// Componente estilizado para o container (opcional)
const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;

  @media (max-width: 1024px) {
    max-width: 80%;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Hero />
      <Container>
        <ListaVagas />
      </Container>
    </>
  );
}

export default App;
