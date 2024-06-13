import Cors from 'cors';
import initMiddleware from './init-middleware';

// Initialize the cors middleware
const cors = initMiddleware(
  Cors({
    // Allow requests from all origins
    origin: '*',
    // Only allow requests with GET, POST and OPTIONS
    methods: ['GET', 'POST', 'OPTIONS'],
  })
);

export default cors;