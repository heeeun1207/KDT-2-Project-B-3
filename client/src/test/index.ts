import console from 'console';
import express, { Request, Response } from 'express';
import path from 'path';

const app = express();
const root = path.join(__dirname, '..', '..');
const rootPublic = path.join(root, '/public');

app.use(express.static(rootPublic));

// 서비스 워커 파일을 별도의 경로로 제공
app.get('/service-worker.js', (req: Request, res: Response) => {
  res.sendFile(path.join(rootPublic, 'service-worker.js'));
});
// API 요청 처리 추가
// ! 나중에 hot server로 작업할 때, 요청에 대한 응답 작성 +  webpackconfig에 proxy 등록
// app.get('/api', (req: Request, res: Response) => {
//   res.json({ message: 'Hello from API' });
// });
// 나머지 요청은 index.html 파일로 응답
app.get('*', (req: Request, res: Response) => {
  res.sendFile(path.join(rootPublic, 'index.html'));
});

app.listen(3030, () => {
  console.log('Server is running on port 3030');
});
