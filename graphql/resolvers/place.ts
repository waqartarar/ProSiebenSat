import { resolverType } from 'fast-graphql';
import { places } from '@/data';

import * as schema from '@/graphql/generated/schemaType';

const Query = {
  placeList: (parent: any, args: any, ctx: any): schema.Query['placeList'] => {
    console.log('ddd');
    return places;
  },

  place: (parent: any, args: any, ctx: any) => {
    console.log('hhh');
    return places.find((x) => x.id == args.id);
  },
};

const Mutation = {
  addPlace: (parent: any, args: any, ctx: any) => {
    return { title: 'this is addPlace mutuation' };
  },
};

const resolver: resolverType = { Query, Mutation };

export default resolver;
