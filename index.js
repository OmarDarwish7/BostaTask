// index.js
import express from 'express';
import BookRoutes from './routes/BookRoutes.js'

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/books', BookRoutes);



app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
