import { ApolloProvider } from '@apollo/client';
import { GetServerSideProps } from 'next';
import client from '../lib/apolloClient';
import { GET_PLACE_LIST } from '../queries/placeList';
import PlaceCard from '../components/PlaceCard';
import { PlaceCardProps } from '../components/PlaceCard/types';

interface PlaceListProps {
  places: PlaceCardProps[];
}

const PlaceList: React.FC<PlaceListProps> = ({ places }) => {
  if (!places) return <p>Loading...</p>;

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
