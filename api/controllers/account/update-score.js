module.exports = {
  friendlyName: 'Update score',

  description: 'Update the score for the logged-in user.',

  inputs: {
    victories: {
      type: 'number'
    },

    victoriesAsGolden: {
      type: 'number'
    },

    score: {
      type: 'number'
    }
  },

  fn: async function(inputs, exits) {
    // Calculate the score.
    var score = await sails.helpers.calculateScore.with({
      victories: inputs.victories,
      victoriesAsGolden: inputs.victoriesAsGolden
    });

    // Update the record for the logged-in user.
    await User.update({ id: this.req.me.id }).set({
      victories: inputs.victories,
      victoriesAsGolden: inputs.victoriesAsGolden,
      score: score
    });

    return exits.success();
  }
};
