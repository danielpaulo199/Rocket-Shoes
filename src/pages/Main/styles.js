import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  background-color: #7d40e7;
`;

export const Content = styled.div`
  background: #fff;
  height: 425px;
  width: 360px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  img {
    height: 44px;
    width: 181px;
  }
  form {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-left: 15%;

    input {
      margin: 5px 0;
      height: 45px;
      width: 300px;
    }
  }
`;
