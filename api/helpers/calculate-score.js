module.exports = {
  friendlyName: 'Calculate score',

  description: 'Calculate the score based on the number of victories',

  inputs: {
    victories: {
      type: 'number',
      example: 5,
      description: 'The number of victories as a standard player',
      required: true
    },

    victoriesAsGolden: {
      type: 'number',
      example: 5,
      description: 'The number of victories as a golden player',
      required: true
    }
  },

  exits: {},

  fn: async function(inputs, exits) {
    var SCORE_AS_STANDARD = 1;
    var SCORE_AS_GOLDEN = 2;
    var result =
      inputs.victories * SCORE_AS_STANDARD +
      inputs.victoriesAsGolden * SCORE_AS_GOLDEN;
    return exits.success(result);
  }
};
