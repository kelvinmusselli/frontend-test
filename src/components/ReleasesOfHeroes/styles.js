import styled from 'styled-components';

export const BodyList = styled.div`
  margin-top: 120px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-content: center;

  h1 {
    margin-top: 40px;
  }
`;
export const HeroItem = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: end;
  flex-direction: column;
  flex-flow: wrap;
  div {
    display: flex;
    justify-content: center;
    flex-direction: column;
    flex-wrap: wrap;
  }
`;

export const ImgHero = styled.div`
  img {
    width: 100px;
    height: 150px;
    border-bottom: 6px solid red;
  }
  padding: 25px;
`;

export const InfosHero = styled.div`
  cursor: pointer;
  white-space: nowrap;
  width: 120px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: flex;
  justify-content: space-between;
  margin-top: -25px;
  padding: 25px;
  font-size: 15px;
  color: #404040;
  button {
    border: none;
  }
`;
