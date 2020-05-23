import React from 'react';

import { Container, Content } from './styles';
import Logo from '../../assets/logo.png';

function Main() {
  return (
    <Container>
      <Content>
        <img src={Logo} alt="FastFeet Logo" />
        <form>
          <span>SEU E-MAIL</span>
          <input type="text"></input>
          <span>SUA SENHA</span>
          <input type="password"></input>
          <button type="submit">Entrar no Sistema</button>
        </form>
      </Content>
    </Container>
  );
}

export default Main;
