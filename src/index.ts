import app from './app.js';
import { config } from './config/index.js';

const port = config.port || 4000;

app.listen(port, () => {
  console.log(`UCPL backend listening at http://localhost:${port}`);
});
