import { nanoid } from 'nanoid';

import katara from './assets/img/characters/katara.jpg';
import zuko from './assets/img/characters/zuko.webp';
import iroh from './assets/img/characters/iroh.webp';
import aang from './assets/img/characters/aang.jpg';
import sokka from './assets/img/characters/sokka.png';
import toph from './assets/img/characters/toph.webp';
import suki from './assets/img/characters/suki.webp';
import appa from './assets/img/characters/appa.webp';
import momo from './assets/img/characters/momo.jpg';
import azula from './assets/img/characters/azula.jpg';
import piandao from './assets/img/characters/piandao.webp';
import pakku from './assets/img/characters/pakku.webp';

const characters = [
  {
    id: nanoid(),
    name: 'Katara',
    img: katara,
  },
  {
    id: nanoid(),
    name: 'Zuko',
    img: zuko,
  },
  {
    id: nanoid(),
    name: 'Uncle Iroh',
    img: iroh,
  },
  {
    id: nanoid(),
    name: 'Aang',
    img: aang,
  },
  {
    id: nanoid(),
    name: 'Sokka',
    img: sokka,
  },
  {
    id: nanoid(),
    name: 'Toph',
    img: toph,
  },
  {
    id: nanoid(),
    name: 'Suki',
    img: suki,
  },
  {
    id: nanoid(),
    name: 'Piandao',
    img: piandao,
  },
  {
    id: nanoid(),
    name: 'Pakku',
    img: pakku,
  },
  {
    id: nanoid(),
    name: 'Appa',
    img: appa,
  },
  {
    id: nanoid(),
    name: 'Momo',
    img: momo,
  },
  {
    id: nanoid(),
    name: 'Azula',
    img: azula,
  },
];

export default characters;
