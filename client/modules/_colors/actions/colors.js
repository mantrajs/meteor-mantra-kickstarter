export default {

  // create
  add({Meteor, LocalState, FlowRouter}, data) {
    // console.log ('actions._colors.add data', data);
    const _id = Meteor.uuid();
    Meteor.call('_colors.add', data, _id, (err) => {
      if (err) {
        return LocalState.set('_colors.SAVE_ERROR', err.message);
      }
    });
    FlowRouter.go(`/colors/${_id}`);
  },

  // update
  update({Meteor, LocalState, FlowRouter}, data, _id) {
    // console.log ('actions._colors.update _id', _id);
    // console.log ('actions._colors.update data', data);

    Meteor.call('_colors.update', data, _id, (err) => {
      if (err) {
        return LocalState.set('_colors.SAVE_ERROR', err.message);
      }
    });
  },

  delete({Meteor, LocalState, FlowRouter}, _id) {
    // console.log ('actions._colors.update _id', _id);
    // console.log ('actions._colors.update data', data);

    Meteor.call('_colors.delete', _id, (err) => {
      if (err) {
        return LocalState.set('_colors.DELETE_ERROR', err.message);
      }
      FlowRouter.go(`/colors/`);

    });
  },

  // clearError
  clearErrors({LocalState}) {
    LocalState.set('_colors.DELETE_ERROR', null);
    return LocalState.set('_colors.SAVE_ERROR', null);
  }

};
