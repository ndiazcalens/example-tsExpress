import { NewDiaryEntry, Weather, Visibility } from "./types";

// Valida si un valor es un string
const isString = (string : string) : boolean =>{
    return typeof string == 'string'                    //va a retornar un true o false, si es string es true sino da false
}

// Valida si un string representa una fecha válida
const isDate = (date : string) : boolean =>{
    return Boolean(Date.parse(date))                    //Date.parse convierte un string(en este caso el parametro date) a milisegundos para calcular que fecha es, si es NaN(not a number) no puede convertirlo y da false
}

// Verifica si el valor pasado corresponde a uno de los valores del enum Weather
const isWeather = (param : any) : boolean =>{
    return Object.values(Weather).includes(param)       //convierte el enum en un array de valores y verifica si el param existe en él
}

// Verifica si el valor pasado corresponde a uno de los valores del enum Visibility
const isVisibility = (param : any) : boolean =>{
    return Object.values(Visibility).includes(param)    //misma lógica que isWeather, pero con el enum Visibility
}

// Parsea y valida el campo 'comment'
const parseComment = (commentFromRequest : any) : string =>{
    if (!isString(commentFromRequest)){                             //si es false, tira el error
        throw new Error('Incorrect or missing comment')
    }
    return commentFromRequest
}

// Parsea y valida el campo 'date'
const parseDate = (dateFromRequest : any) : string =>{
    if( !isString(dateFromRequest) || !isDate(dateFromRequest) ){   //valida que sea string y que represente una fecha válida
        throw new Error('Incorrect or missing date')
    }
    return dateFromRequest
}

// Parsea y valida el campo 'weather'
const parseWeather = (weatherFromRequest : any) : Weather =>{
    if( !isString(weatherFromRequest) || !isWeather(weatherFromRequest)){  //valida tipo string y que esté dentro del enum Weather
        throw new Error('Incorrect or missing weather')
    }
    return weatherFromRequest
}

// Parsea y valida el campo 'visibility'
const parseVisibility = (visibilityFromRequest : any) : Visibility =>{
    if( !isString(visibilityFromRequest) || !isVisibility(visibilityFromRequest)){  //valida tipo string y que esté dentro del enum Visibility
        throw new Error('Incorrect or missing visibility')
    }
    return visibilityFromRequest
}

// Recibe un objeto genérico y construye un objeto del tipo NewDiaryEntry validando cada campo individualmente
const toNewDiaryEntry = (object : any) : NewDiaryEntry =>{
    const newEntry : NewDiaryEntry = {
        date: parseDate(object.date),
        weather: parseWeather(object.weather),
        visibility: parseVisibility(object.visibility),
        comment: parseComment(object.comment)
    }
    return newEntry
}

export default toNewDiaryEntry 

//al validar cada cosa de esta manera me aseguro que me pase el tipo de dato que necesita ser pasado, obligo al usuario a pasar datos validos

//"parsear" (o "parsing") significa analizar una secuencia de caracteres, como código fuente o datos, para identificar
//su estructura sintáctica y extraer información significativa. Es como "desempaquetar" la información para que un programa
//pueda entenderla y utilizarla
