import { BtnLink } from './ButtonLink.styled';

const ButtonLink = ({ text }) => {
  return <BtnLink to="/catalog">{text}</BtnLink>;
};

export default ButtonLink;
