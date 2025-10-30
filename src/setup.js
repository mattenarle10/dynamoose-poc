const configure = require('./config');
const User = require('./model');

configure();

const run = async () => {
  console.log('Creating table...');
  
  try {
    await User.table.create();
    console.log('Table created');
  } catch (error) {
    if (error.code === 'ResourceInUseException') {
      console.log('Table already exists');
    } else {
      throw error;
    }
  }
};

run()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
