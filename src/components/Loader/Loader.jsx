import { ThreeDots } from 'react-loader-spinner';
import { Container } from './Loader.styled';

const Loader = () => {
  return (
    <Container>
      <ThreeDots
        height="100"
        width="100"
        color="tomato"
        ariaLabel="loading"
      />
    </Container>
  );
};

export default Loader;

//*#info - Винесений Loader в окремий компонент для зручності управління та оформлення