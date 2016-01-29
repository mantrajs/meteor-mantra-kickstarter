// Meteor.users.deny ({
//   insert: (userId, doc, fields, modifier) => true,
//   update: (userId, doc, fields, modifier) => true,
//   remove: (userId, doc, fields, modifier) => true,
// })

import _ from 'lodash';

export const Phone = Astro.Class({
  name: 'Phone',
  fields: {
    name: {
      type: 'string',
      validator: [
        Validators.minLength(3)
      ]
    },
    number: {
      type: 'string',
      validator: [
        Validators.minLength(9)
      ]
    },
    uuid: {
      type: 'string',
    },
  }
});

export const Email = Astro.Class({
  name: 'Email',
  fields: {
    address: {
      type: 'string',
      // validator: [
      //   Validators.minLength(3)
      // ]
    },
    verified: {
      type: 'string',
      // validator: [
      //   Validators.minLength(9)
      // ]
    }
  }
});

export const UserProfile = Astro.Class({
  name: 'UserProfile',
  fields: {
    /* Any fields you want to be published to the client */
    firstName: {
      type: 'string',
    },
    lastName: {
      type: 'string',
    },
    'phones': {
      type: 'array',
      nested: 'Phone',
      default: function() {
        return [];
      }
    },
    // nickname
  }
});



const User = Astro.Class({
  name: 'User',
  collection: Meteor.users,
  fields: {

    // emails: {
    //   type: 'array',
    //   default: function() {
    //     return [];
    //   }
    // },

    'emails': {
      type: 'array',
      nested: 'Email',
      default: function() {
        return [];
      }
    }

    ,createdAt: 'date'

    ,profile: {
      type: 'object',
      nested: 'UserProfile',
      default: function() {
        return {};
      }
    }

    ,roles: {
      type: 'array',
      default: function() {
        return {};
      }
    }

    ,_iss : {
      type: 'boolean'
    }

    ,_isa : {
      type: 'boolean'
    }

  }
  ,methods : {
    firstEmail : function () {
      return _.get(this, 'emails[0].address', null);
    }
    // ,aclIs : function(roleSlug) {
    //   // console.log ('UUser->aclIsInRole role-slug', roleSlug);
    //   // console.log(this.roles)
    //   return _.contains(this.roles, roleSlug);
    // }
  },
});

if (Meteor.isServer) {
  User.extend({
    fields: {
      services: 'object'
    }
  });
}

export default User;
