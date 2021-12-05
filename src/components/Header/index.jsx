import { ReactElement } from "react";
import { Container } from "./styles";
import Switch from "react-switch";

import logoImg from "../../assets/logo.svg";
import { shade } from "polished";

type HeaderProps = {
  toggleTheme: () => void,
  title: string,
  primary: string,
  secundary: string,
};

export function Header({
  toggleTheme,
  title,
  primary,
  secundary,
}: HeaderProps): ReactElement {
  return (
    <Container>
      <img src={logoImg} alt="Github Explorer" />
      <Switch
        onChange={toggleTheme}
        checked={title === "dark"}
        checkedIcon={false}
        uncheckedIcon={false}
        height={10}
        width={40}
        handleDiameter={20}
        offColor={shade(0.15, primary)}
        onColor={secundary}
      />
    </Container>
  );
}
