import express from 'express';
import routes from './routes/index.js';

const app = express();

const port = 3000;

routes(app);

// app.use(express.json())

/* app.get('/test', (req, res) => res
    .status(200)
    .send({ message:'Welcome to BQs API'}))
 */
app.listen(port, () => console.log(`Server running up the hill beyond ${port}`));

export default app;