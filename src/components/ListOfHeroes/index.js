import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import iconHeart from '../../assets/icones/heart/Path@1,5x.png';
import iconNoBoardHeart from '../../assets/icones/heart/Path Copy 2.png';
import iconHero from '../../assets/icones/heroi/noun_Superhero_2227044.png';
import {
  List,
  TitleList,
  LeftTitle,
  RightTitle,
  Ordenable,
  SwitchButton,
  Favorites,
  BodyList,
  HeroItem,
  ImgHero,
  InfosHero,
} from './styles';

import {
  getAllHeroes,
  favoriteHeroes,
  selectedHero,
} from '../../store/actions/Heroes';

const ListOfHeroes = ({
  heroes,
  setAllHeroes,
  setOrder,
  order,
  setMyFavorites,
  myFavorites,
}) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { favorites } = useSelector((state) => state.heroes);
  const [heroesSorter, setHeroesSorter] = useState([]);

  useEffect(() => {
    setHeroesSorter(heroes);
  }, [
    heroesSorter,
    setHeroesSorter,
    setAllHeroes,
    myFavorites,
    setMyFavorites,
  ]);

  const changeOrder = (ord) => {
    if (ord) {
      heroes = heroes
        ? heroes.sort((a, b) => b.name - a.name || b.name.localeCompare(a.name))
        : [];
      setHeroesSorter(heroes);
      setOrder(ord);
    } else {
      heroes = heroes
        ? heroes.sort((a, b) => a.name - b.name || a.name.localeCompare(b.name))
        : [];
      setHeroesSorter(heroes);
      setOrder(ord);
    }
  };

  const checkFavorite = (item) => {
    const findHero = heroes.find((p) => p.id === item);
    const findExistInFavorites = favorites.find((p) => p.id === item);
    if (!findExistInFavorites) {
      if (favorites.length < 5) {
        favorites.sort(
          (a, b) => a.name - b.name || a.name.localeCompare(b.name)
        );
        dispatch(favoriteHeroes([...favorites, findHero]));
      } else {
        toast('Você só pode favoritar até 5 heróis');
      }
    } else {
      const newItem = favorites.filter((f) => f.id !== item);
      newItem.sort((a, b) => a.name - b.name || a.name.localeCompare(b.name));
      dispatch(favoriteHeroes([...newItem]));
    }
  };

  const favoritesSelected = () => {
    if (!myFavorites) {
      setMyFavorites(true);
      setAllHeroes(favorites || heroes);
    } else {
      setMyFavorites(false);
      dispatch(getAllHeroes());
      setAllHeroes(heroes);
    }
  };

  const heroSelected = (id) => {
    const findHero = heroes.find((p) => p.id === id);
    dispatch(selectedHero(findHero));
    history.push(`/details/${id}`, { id });
  };

  return (
    <List>
      <TitleList>
        <LeftTitle>
          <h4>
            Encontrado {heroes.length} {heroes.length > 1 ? 'heróis' : 'herói'}
          </h4>
        </LeftTitle>
        <RightTitle>
          <Ordenable>
            <img src={iconHero} alt="" />
            <h4>Ordenar por nome - A/Z</h4>
            <SwitchButton
              onColor={'#ff1510'}
              offHandleColor={'#fff'}
              uncheckedIcon={false}
              checkedIcon={false}
              boxShadow={''}
              activeBoxShadow={''}
              onChange={(e) => changeOrder(e)}
              checked={order}
            />
          </Ordenable>
          <Favorites onClick={() => favoritesSelected()}>
            <img src={myFavorites ? iconHeart : iconNoBoardHeart} alt="heart" />
            <h4>Somente favoritos</h4>
          </Favorites>
        </RightTitle>
      </TitleList>
      <BodyList>
        {heroes.length > 0 ? (
          heroes.map((h) => {
            const { path, extension } = h.thumbnail;
            const favorite = favorites.find((p) => p.id === h.id);
            return (
              <HeroItem key={h.id}>
                <ImgHero>
                  <img
                    src={`${path}.${extension}`}
                    alt={h.name}
                    onClick={() => heroSelected(h.id)}
                  />
                </ImgHero>
                <InfosHero>
                  <h4>{h.name}</h4>
                  <button onClick={() => checkFavorite(h.id)}>
                    <img
                      src={favorite ? iconHeart : iconNoBoardHeart}
                      alt="icons-heart"
                    />
                  </button>
                </InfosHero>
              </HeroItem>
            );
          })
        ) : (
          <h1>
            <b>Nenhum herói encontrado</b>
          </h1>
        )}
      </BodyList>
    </List>
  );
};

export default ListOfHeroes;
