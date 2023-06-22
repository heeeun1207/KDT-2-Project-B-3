import express, { Request, Response } from 'express';
import path from 'path';
const app = express();
const root = path.join(__dirname, '../../')

app.use(express.static(path.join(__dirname, './'), {
  setHeaders: (res, filePath) => {
    if (filePath.endsWith('.js')) {
      res.setHeader('Content-Type', 'application/javascript');
    }
  },
}));

app.get('/', (req: Request, res: Response) => {
  res.sendFile(path.join(root, "./dist/index.html"));
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});