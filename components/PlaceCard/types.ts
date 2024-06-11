import { Key } from 'react';

export interface PlaceCardProps {
  id: Key;
  mainPhoto: string;
  description: string;
  photos: string[];
  priceByNight: number;
  owner: {
    name: string;
  };
}