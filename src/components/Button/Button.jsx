import { Btn } from './button.styled';

const Button = ({ text, width, height, type }) => {
  return (
    <Btn type={type} width={width} height={height}>
      {text}
    </Btn>
  );
};

export default Button;
