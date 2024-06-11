import { ApolloProvider } from '@apollo/client';
import { GetServerSideProps } from 'next';
import client from '../lib/apolloClient';
import { GET_PLACE_LIST } from '../queries/placeList';
import PlaceCard from '../components/PlaceCard';
import { PlaceCardProps } from '../components/PlaceCard/types';
// TODO: ADD Asolute Import
// TODO: Create Separate folder/files for types
//TODO: ADD prettier, Eslint, husky hooks

interface PlaceListProps {
  places: PlaceCardProps[];
}

const PlaceList: React.FC<PlaceListProps> = ({ places }) => {
  //TODO: Add sekeleton instead of just text
  if (!places) return <p>Loading...</p>;

//TODO: Use Styled component OR Tailwind
  return (
    <div className="place-list">
      {places.map((place) => (
        <PlaceCard key={place.id} place={place}/>
      ))}
    </div>
  );
};

const HomePage: React.FC<PlaceListProps> = ({ places }) => (
  <ApolloProvider client={client}>
    <PlaceList places={places} />
  </ApolloProvider>
);


// TODO: Change it to static Redering and interval redering
export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await client.query({
    query: GET_PLACE_LIST,
  });
  return {
    props: {
      places: data.placeList,
    },
  };
};

export default HomePage;
