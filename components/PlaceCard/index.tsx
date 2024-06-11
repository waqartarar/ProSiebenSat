import * as React from 'react';
import Link from 'next/link'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { PlaceCardProps } from './types';

const PlaceCard: React.FC<{ place: PlaceCardProps }> = ({ place }) => {
  return (
    <Link href={`/places/${place.id}`}>
      <Card sx={{ maxWidth: 345, justifyContent: 'space-between', cursor: 'pointer' }} onClick={() => `/place/${place.id}`}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image={place.photos[0]}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{ textTransform: 'upperCase'}}>
            {place.owner.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {place.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Typography sx={{ paddingLeft: "7px", color: 'blue' }} color="text.main">€{place.priceByNight}</Typography>
        </CardActions>
      </Card>
    </Link>
  );
};

export default PlaceCard;