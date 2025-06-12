import express from 'express'; 


import router from './routes/diaries';


const app = express();
const PORT = 3000;


app.use(express.json()); //middleware que transforma el req.body a un json

app.use(router)

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
