import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 1280px;
`;

export const ContentByHero = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const RightItem = styled.div`
  img {
    height: 500px;
    width: 500px;
  }
  @media (max-width: 700px) {
    padding: 25px;
  }
`;

export const LeftItem = styled.div`
  width: 300px;
  margin-right: 170px;
  @media (max-width: 700px) {
    width: 500px;
    margin-right: 0px;
    padding: 20px;
  }
`;

export const HeroTitle = styled.div`
  width: 300px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  h1 {
    color: #404040;
  }
  img {
    cursor: pointer;
    height: 25px;
    width: 25px;
  }
  @media (max-width: 700px) {
    width: 100%;
  }
`;

export const InfoHero = styled.div`
  p {
    font-size: 18px;
    color: #8c8c8c;
  }
`;

export const BooksAndMovies = styled.div`
  margin-top: 25px;
  display: flex;
  justify-content: space-between;
`;

export const Rating = styled.div`
  margin-top: 40px;
`;

export const Date = styled.div`
  margin-top: 20px;
`;

export const Books = styled.div`
  margin-top: 10px;
  div {
    display: flex;
    align-items: center;
    margin-top: 5px;
    h5 {
      padding-left: 20px;
      font-size: 20px;
      color: #404040;
    }
  }
`;

export const Movies = styled.div`
  margin-top: 10px;
  div {
    display: flex;
    align-items: center;
    margin-top: 5px;
    h5 {
      padding-left: 20px;
      font-size: 20px;
      color: #404040;
    }
  }
`;
