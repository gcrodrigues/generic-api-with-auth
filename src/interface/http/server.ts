import 'reflect-metadata'
import '../../config/container'
import express from 'express';

import { router } from './routes/user.routes';

const app = express();

app.use(express.json());
app.use(router);

app.listen(3333, () => {
  console.log('Server listening on port 3000');
});
