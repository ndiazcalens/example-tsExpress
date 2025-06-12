import { DiaryEntry, NewDiaryEntry, NonSensitiveInfoDiaryEntry } from '../types';
import diaryData from './diaries.json';//por defecto typescript no es capaz de importar un json, hay que indicarlo en tsconfig asique descomente el resolveJsonModule: true(si no esta lo agrego manualmente)

//esto puede ser usado para cualquier caso, ahora importo en json de manera local pero puede ser que venga de un fetch
//o venir de una base de datos, la manera de traer los datos que voy a usar aca es replicable con cualquier situacion

const diaries: Array<DiaryEntry> = diaryData as  Array<DiaryEntry> //creo una constante del type DiaryEntry y que viene de diaryData
//diaryData as  Array<DiaryEntry> <=trata a diary data como un Array de DiaryEntry, esto se llama asercion de tipos o 
// afirmacion de tipos porque sino da error, es como decirle a ts "quedate tranquilo, se que esto esta bien"
// porque al venir un json que no se sabe que es, puede venir cualquier cosa, entonces asi se le afirma que esta bien

//metodo que va a devolver todas las entries del diary
export const getEntries = () : DiaryEntry[]  => diaries; //despues de los parametros le indico que tipo de dato me tiene que devolver la funcion
// estructura de funcion en ts: (parametros : type parametro): type retorno => codigo, const sumar = (a : number, b : number) : number => a+b; 

//metodo para agarrar el json sin algun dato en particular ej dato sensible, fijarse en types.d.ts
export const getEntriesWithoutSensitiveData = (): NonSensitiveInfoDiaryEntry[] => {
  //se usa .map() para iterar sobre cada entrada del array "diaries", recorre todos los campos
  return diaries.map(({ id, date, weather, visibility }) => {
    //para cada entrada{id:1, date: ...,etc} {despues la siguiente}, devuelve un nuevo objeto que solo contiene
    //los campos permitidos: id, date, weather y visibility
    return {
      id,
      date,
      weather,
      visibility
    }//satisfies NonSensitiveInfoDiaryEntry;//esto hace que respete el type del objeto, por ende si le pido comment me tira error, pero tambien si falta algo va a tirar error
  });

};

//parametro id y devuelve un obj diaryentry que tenga ese id
export const findById = (id:number) : NonSensitiveInfoDiaryEntry | undefined =>{    
  const entry = diaries.find(d => d.id == id)                     //.find()es un metodo de los arrays que busca el primer elemento que cumpla con la condicion, retorna el elemento completo, no su indice, si no lo encuentra da undefined
  if (entry != null){
    const { comment, ...restOfDiary } = entry  // "propiedad, ...propiedades" desestructuro un objeto, primero lo que voy a almacenar en una variable separada, el resto del objeto despues de los "..."
    return restOfDiary //diary sin comment, porque el comment esta en una variable aparte
  }
  return undefined                                                    //d es la variable que itera sobre el array de objetos(diaries) y compara el id de cada objeto(d.id) con el id que se pasa como parametro
}                                                                 //almacena el resultado en la variable entry y la retorna

//metodo que va a añadir una entry
export const addDiary = (newDiaryEntry : NewDiaryEntry) : DiaryEntry => {
  const newDiary = {
    id: diaries.length + 1,
    ... newDiaryEntry
  }
  diaries.push(newDiary)
  return newDiary
}