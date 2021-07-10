import mongoose, { Schema } from 'mongoose';
import timestamps from 'mongoose-timestamp';
import { composeWithMongoose } from 'graphql-compose-mongoose';

export const RestaurantSchema = new Schema(
  {
    "address": {
      "building": {
        "type": "String"
      },
      "coord": {
        "type": ["Number"]
      },
      "street": {
        "type": "String"
      },
      "zipcode": {
        "type": "String"
      }
    },
    "borough": {
      "type": "String"
    },
    "cuisine": {
      "type": "String"
    },
    "grades": {
      "type": ["Mixed"]
    },
    "name": {
      "type": "String"
    },
    "restaurant_id": {
      "type": "String"
    }
  },
  {
    collection: 'restaurants',
  }
);

RestaurantSchema.plugin(timestamps);

RestaurantSchema.index({ createdAt: 1, updatedAt: 1 });

export const Restaurant = mongoose.model('Restaurant', RestaurantSchema);
export const RestaurantTC = composeWithMongoose(Restaurant);
