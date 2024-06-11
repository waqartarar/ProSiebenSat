import React from 'react';
import Review from '../Review';
//TODO: Add slides for all images
//TODO: Add font suited for design

const PlaceDetails = ({ place } : any) => {
  return (
    <div style={styles.wrapper}>
        <div style={styles.container}>
        <h2 style={styles.title}>{place.description}</h2>
        <img src={place.mainPhoto} alt="Main view" style={styles.mainPhoto} />
        <div style={styles.infoContainer}>
            <div style={styles.ownerInfo}>
            <img src={place.owner.photo} alt="Owner" style={styles.ownerPhoto} />
            <div>
                <p style={styles.ownerName}>{place.owner.name}</p>
                <p style={styles.ownerEmail}>{place.owner.email}</p>
            </div>
            </div>
            <div style={{}}>
                <p><strong>Price per Night:</strong> ${place.priceByNight}</p>
            </div>
        </div>
        </div>
        <div>
            <Review reviews={place.reviews}/>
        </div>
    </div>
  );
};
//TODO: ADD emotion/ styled component lib with separate files

const styles = {
 wrapper: {
    display: 'flex',
    alignItems: 'center',
    padding: '20px',
 },
  container: {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '16px',
    maxWidth: '80%',
    margin: 'auto',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    fontFamily: 'Arial, sans-serif',
  },
  title: {
    fontSize: '24px',
    marginBottom: '16px',
  },
  mainPhoto: {
    width: '100%',
    borderRadius: '8px',
    marginBottom: '16px',
  },
  infoContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '30px',
    flexDirection : 'column' as any,
  },
  ownerInfo: {
    display: 'flex',
    alignItems: 'center',
  },
  ownerPhoto: {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    marginRight: '16px',
  },
  ownerName: {
    fontSize: '16px',
    margin: '0',
  },
  ownerEmail: {
    fontSize: '14px',
    color: '#555',
    margin: '0',
  },
  details: {
    textAlign: 'right'
  },
};


const PlaceDetail: React.FC<{ place: any }> = ({ place }) => {
  return (
    <div>
      <PlaceDetails place={place} />
    </div>
  );
};

export default PlaceDetail;
