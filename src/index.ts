import app from './app.ts';
import { config } from './config/index.ts';

const port = config.port || 4000;

app.listen(port, () => {
  console.log(`UCPL backend listening at http://localhost:${port}`);
});
