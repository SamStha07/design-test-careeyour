import { Header } from './components/Header';
import Container from './common/container';
import { Routes } from './routes';

function App() {
  return (
    <>
      <Header />
      <Container>
        <Routes />
      </Container>
    </>
  );
}

export default App;
