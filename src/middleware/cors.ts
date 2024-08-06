import cors from 'cors'

const corsOptions: cors.CorsOptions = {
  origin: (origin, callback) => {
    // Lista blanca de orígenes permitidos
    const whitelist = ['http://localhost:3000']

    if (!origin) {
      callback(new Error('CORS policy error: Missing or undefined origin'));
    } else if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
};

export default cors(corsOptions);