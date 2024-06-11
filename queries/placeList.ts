// queries/placeList.js
import { gql } from '@apollo/client';

//TODO: ADD more relevant data for more artistic card 

export const GET_PLACE_LIST = gql`
  query PlaceList {
  placeList {
    id
    description
    mainPhoto
    photos
    priceByNight
    owner {
      name
    }
  }
}
`;
