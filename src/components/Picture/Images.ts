import avitoPictureSmall from '../../assets/img/avito.png';
import avitoPictureBig from '../../assets/img/avito@2x.png';
import avitoPictureSmallWebp from '../../assets/img/avito.webp';
import avitoPictureBigWebp from '../../assets/img/avito@2x.webp';

import vrnasPictureSmall from '../../assets/img/vrnas.png';
import vrnasPictureBig from '../../assets/img/vrnas@2x.png';
import vrnasPictureSmallWebp from '../../assets/img/vrnas.webp';
import vrnasPictureBigWebp from '../../assets/img/vrnas@2x.webp';

import rickPictureSmall from '../../assets/img/rick.png';
import rickPictureBig from '../../assets/img/rick@2x.png';
import rickPictureSmallWebp from '../../assets/img/rick.webp';
import rickPictureBigWebp from '../../assets/img/rick@2x.webp';

import shelterPictureSmall from '../../assets/img/shelter.png';
import shelterPictureBig from '../../assets/img/shelter@2x.png';
import shelterPictureSmallWebp from '../../assets/img/shelter.webp';
import shelterPictureBigWebp from '../../assets/img/shelter@2x.webp';

import catPictureSmall from '../../assets/img/cat.png';
import catPictureBig from '../../assets/img/cat@2x.png';
import catPictureSmallWebp from '../../assets/img/cat.webp';
import catPictureBigWebp from '../../assets/img/cat@2x.webp';

import hangmanPictureSmall from '../../assets/img/hangman.png';
import hangmanPictureBig from '../../assets/img/hangman@2x.png';
import hangmanPictureSmallWebp from '../../assets/img/hangman.webp';
import hangmanPictureBigWebp from '../../assets/img/hangman@2x.webp';

type ImagesType = {
  [key: string]: {
    [key: string]: string;
  };
};
const images: ImagesType = {
  avito: {
    pngSmall: avitoPictureSmall,
    pngBig: avitoPictureBig,
    webpSmall: avitoPictureSmallWebp,
    webpBig: avitoPictureBigWebp,
  },
  vrnas: {
    pngSmall: vrnasPictureSmall,
    pngBig: vrnasPictureBig,
    webpSmall: vrnasPictureSmallWebp,
    webpBig: vrnasPictureBigWebp,
  },
  rick: {
    pngSmall: rickPictureSmall,
    pngBig: rickPictureBig,
    webpSmall: rickPictureSmallWebp,
    webpBig: rickPictureBigWebp,
  },
  shelter: {
    pngSmall: shelterPictureSmall,
    pngBig: shelterPictureBig,
    webpSmall: shelterPictureSmallWebp,
    webpBig: shelterPictureBigWebp,
  },
  cat: {
    pngSmall: catPictureSmall,
    pngBig: catPictureBig,
    webpSmall: catPictureSmallWebp,
    webpBig: catPictureBigWebp,
  },
  hangman: {
    pngSmall: hangmanPictureSmall,
    pngBig: hangmanPictureBig,
    webpSmall: hangmanPictureSmallWebp,
    webpBig: hangmanPictureBigWebp,
  },
};

export default images;
