import { RotatingLines } from 'react-loader-spinner';
import { Container } from './Loader.styled';

const Loader = () => {
  return (
    <Container>
      <RotatingLines
        visible={true}
        height="72"
        width="72"
        color="#0d253f"
        strokeWidth="4"
        animationDuration="1.75"
        ariaLabel="rotating-lines-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </Container>
  );
};

export default Loader;
