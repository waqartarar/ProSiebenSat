// queries/placeList.js
import { gql } from '@apollo/client';

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
