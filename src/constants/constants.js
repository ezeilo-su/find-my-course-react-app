import env from 'react-dotenv';

export const REQ_HEADER = {
  header: {
    Authorization: `Bearer ${env.AUTH_TOKEN}`,
  },
};
