import React from 'react';
import { ReviewProps } from './types';

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
    maxWidth: '600px',
    margin: 'auto',
    border: '1px solid #ddd',
    borderRadius: '8px',
  },
  reviewCard: {
    borderBottom: '1px solid #ddd',
    padding: '10px 0',
  },
  author: {
    fontWeight: 'bold',
    fontSize: '1.1em',
  },
  feedback: {
    marginTop: '5px',
    marginBottom: '5px',
  },
  rating: {
    color: '#FFD700',
  },
};

const Review: React.FC<{ reviews: ReviewProps[] }> = ({ reviews }) => {
  return (
    <div style={styles.container}>
      <h2>Reviews</h2>
      {reviews.map((review: ReviewProps, index) => (
        <div key={index} style={styles.reviewCard}>
          <div style={styles.author}>{review.author.name}</div>
          <div style={styles.feedback}>{review.feedback}</div>
          <div style={styles.rating}>{'★'.repeat(review.rate)}</div>
        </div>
      ))}
    </div>
  );
};

export default Review;