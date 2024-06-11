// queries/placeList.js
import { gql } from '@apollo/client';

//TODO: ADD more relevant data for more relevant data

export const GET_PLACE = gql`
    query Place($placeId: ID) {
    place(id: $placeId) {
        description
        photos
        reviews {
        author {
            email
            name
            id
        }
        feedback
        rate
        }
        priceByNight
        owner {
        email
        name
        id
        photo
        }
        id
        mainPhoto
    }
    }
    `;
