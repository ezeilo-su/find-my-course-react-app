import env from 'react-dotenv';

const REQ_HEADER = {
  header: {
    Authorization: `Bearer ${env.AUTH_TOKEN}`,
  },
};

export default REQ_HEADER;
