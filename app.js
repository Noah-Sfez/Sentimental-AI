import express from 'express';
import bodyParser from 'body-parser';
import Sentiment from 'sentiment';

const app = express();
const port = 3000;
const sentiment = new Sentiment();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

// Route pour la page d'accueil
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// Route pour l'analyse de sentiment
app.post('/analyze', (req, res) => {
  const { text } = req.body;
  const result = sentiment.analyze(text);
  res.json(result);
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
