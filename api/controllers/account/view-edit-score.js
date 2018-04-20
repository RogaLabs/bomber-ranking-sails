module.exports = {
  friendlyName: 'View edit score',

  description: 'Display "Edit score" page.',

  exits: {
    success: {
      viewTemplatePath: 'pages/account/edit-score'
    }
  },

  fn: async function(inputs, exits) {
    return exits.success();
  }
};
