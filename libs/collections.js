import {Mongo} from 'meteor/mongo';

export default {
  Posts: new Mongo.Collection('posts'),
  Colors: new Mongo.Collection('colors')
};
