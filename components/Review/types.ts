export interface Author {
  name: string;
}

export interface ReviewProps {
  __typename: 'Review';
  author: Author;
  feedback: string;
  rate: number;
}