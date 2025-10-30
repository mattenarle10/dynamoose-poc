const dynamoose = require('dynamoose');
require('dotenv').config();

const configure = () => {
  dynamoose.aws.sdk.config.update({
    region: process.env.AWS_REGION || 'us-east-1',
  });

  dynamoose.model.defaults.set({
    create: false,
    waitForActive: false,
  });
};

module.exports = configure;
