import { GetStaticPaths, GetStaticProps } from 'next';
import { PlaceCardProps } from '../../components/PlaceCard/types';
import client from '../../lib/apolloClient';
import { GET_PLACE_LIST } from '../../queries/placeList';
import { GET_PLACE } from '../../queries/placeDetail';
import PlaceDetail from '../../components/PlaceDetail';

interface PlaceProps {
  place: PlaceCardProps;
}

const PlacePage: React.FC<PlaceProps> = ({ place }) => {
  return (
    <div>
      <PlaceDetail place={place} />
    </div>
  );
};

//TODO: ADD Limit for no. of pages prerendered , for large set

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await client.query({
    query: GET_PLACE_LIST,
  });
  const paths = data.placeList.map((place :PlaceCardProps) => ({
    params: { id: place.id },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.id as string;

  // Fetch the place data based on the id
  const { data } = await client.query({
    query: GET_PLACE,
    variables: { placeId: id },
  });
  const place = data.place;

  // Pass place data to the page via props
  return { props: { place } };
};

export default PlacePage;
