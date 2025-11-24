import React from 'react';
import { 
  Flame, 
  Skull, 
  TriangleAlert, 
  Aperture, 
  Medal, 
  Search, 
  UploadCloud, 
  Vote 
} from 'lucide-react';
import { Nomination, Step } from './types';

export const NOMINATIONS: Nomination[] = [
  {
    id: 'main',
    label: 'Главная номинация',
    title: 'Заезыбный проезд',
    description: 'Лучший чистый проезд года: длина, контроль, стиль — момент, где всё встало как надо.',
    tag: 'Видео 10–40 секунд',
    icon: Flame,
    color: 'text-orange-500',
    gradient: 'from-orange-500/20 to-red-600/20'
  },
  {
    id: 'wipeout',
    label: 'Тёмная слава',
    title: 'Зыбепиздело года',
    description: 'Самый эпичный вайпаут: доска, пена, воздух — полный балтийский комплект.',
    tag: 'Разрешён смех за кадром',
    icon: Skull,
    color: 'text-purple-500',
    gradient: 'from-purple-500/20 to-pink-600/20'
  },
  {
    id: 'danger',
    label: 'Опасный момент',
    title: 'Холодный Пот',
    description: 'Самая опасная ситуация года: доска мимо головы, падение в бездну. Кадр, после которого стало реально не по себе.',
    tag: 'Без позыва на геройство',
    icon: TriangleAlert,
    color: 'text-yellow-400',
    gradient: 'from-yellow-400/20 to-orange-500/20'
  },
  {
    id: 'visual',
    label: 'Картинка',
    title: 'Контент-зыбь',
    description: 'Лучший кадр или видео с атмосферой Балтики: свет, ракурс, эмоция. То, после чего хочется ехать на спот.',
    tag: 'Фото или видео',
    icon: Aperture,
    color: 'text-cyan-400',
    gradient: 'from-cyan-400/20 to-blue-500/20'
  },
  {
    id: 'priority',
    label: 'Приоритет',
    title: 'Медаль Андропова',
    description: 'Дроп-ин без оглядки: берёшь волну перед другим так, будто приоритета не существует как явления.',
    tag: 'Опасно, но исторично',
    icon: Medal,
    color: 'text-emerald-400',
    gradient: 'from-emerald-400/20 to-green-600/20'
  }
];

export const STEPS: Step[] = [
  {
    id: 1,
    title: 'Найди момент',
    description: 'Подними архив за год: лучший проезд, жесткий вайпаут, опасный момент или просто сильный кадр. Можно свой, можно друга.',
    icon: Search
  },
  {
    id: 2,
    title: 'Кинь в тред',
    description: <>В <strong>«Ветровой Зыби»</strong> будет отдельный тред/закреп. Туда кидаешь: номинацию, кто в кадре, локацию, дату и видео.</>,
    icon: UploadCloud
  },
  {
    id: 3,
    title: 'Жди голосование',
    description: 'В конце года запускаем голосование по каждой номинации. Голосуют только участники чата. Дальше — раздача «оскаров».',
    icon: Vote
  }
];