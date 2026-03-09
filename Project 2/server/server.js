import express from 'express';
import businessesRouter from './routes/businesses.js';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

app.use('/businesses', businessesRouter);
app.use('/public', express.static('./public'));
app.use('/scripts', express.static('./public/scripts'));
app.use('/picocss', express.static(path.join(__dirname, 'node_modules/@picocss/pico/css')));

app.get('/', (req, res) => {
    res.status(200).send('<h1 style="text-align: center; margin-top: 50px;">Businesses API</h1>')
});

const PORT = process.env.PORT || 3001;
    
app.listen(PORT, () => {
  console.log(`🚀 Server listening on http://localhost:${PORT}`)
})