import express from "express";
import * as diaryServices from '../services/diaryServices';
import toNewDiaryEntry from "../utils";

const router = express.Router();  //crea una instancia del router para definir rutas específicas del recurso "diaries"

router.get('/', (_req, res) => {
    res.send(diaryServices.getEntriesWithoutSensitiveData())  //envía todas las entradas excluyendo los datos sensibles
})

//los ":" hacen que sea una ruta dinamica, ej 1 2 3
router.get('/:id', (req, res) => {
    const diary = diaryServices.findById(Number(req.params.id)) //hay que transformar req a number porque por defecto req es string
    
    diary ? res.send(diary) : res.sendStatus(404) //si no es undefined, devuelve el diary, sino error 404
})

router.post('/', (req, res) => {
    try {
        //const { date, weather, visibility, comment } = req.body 
        //el cliente envia datos y se reciben en el objeto req.body, esto desestructura el obj req body, 
        //agarra las propiedades date, weather, visibility y comment del objeto req.body y las guarda en variables con ese mismo nombre

        const newDiaryEntry = toNewDiaryEntry(req.body)  //valida y transforma la entrada del cliente a un NewDiaryEntry con tipos correctos

        const addedDiaryEntry = diaryServices.addDiary(newDiaryEntry)  //agrega la nueva entrada al array/lista de diaries

        res.json(newDiaryEntry)  //envía al cliente el objeto recién agregado como respuesta en formato JSON
    } catch (e) {
        res.status(400).send((e as Error).message)  //manejo de errores: si algo falla en la validación, responde con status 400 y el mensaje del error
    }
})

export default router;  //exporta el router para que pueda ser usado en el archivo principal de la app
