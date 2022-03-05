import { Header } from './components/header';
import { Container } from './common/container';
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
