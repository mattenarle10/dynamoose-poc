import { configure } from './config';
import { User } from './model';

configure();

const run = async (): Promise<void> => {
  console.log('Creating table...');
  
  try {
    // Table will be created automatically when first used
    console.log('Table setup completed');
  } catch (error: any) {
    console.error('Error setting up table:', error);
    throw error;
  }
};

run()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
