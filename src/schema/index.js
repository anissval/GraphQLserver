import { SchemaComposer } from 'graphql-compose';

import db from '../utils/db'; // eslint-disable-line no-unused-vars

const schemaComposer = new SchemaComposer();

import { RestaurantMutation, RestaurantQuery } from './restaurant';

schemaComposer.Query.addFields({
  ...RestaurantQuery
});

schemaComposer.Mutation.addFields({
  ...RestaurantMutation
});

export default schemaComposer.buildSchema();
