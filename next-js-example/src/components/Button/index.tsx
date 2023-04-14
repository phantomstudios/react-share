import { ButtonWrapper } from "./styles";

interface Props {
  children: React.ReactNode;
  onClick?: () => void;
}

const Button = ({ onClick, children }: Props) => (
  <ButtonWrapper onClick={onClick}>{children}</ButtonWrapper>
);

export default Button;
