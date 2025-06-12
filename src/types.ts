//archivo donde voy a tipar los objetos de la app


//estoy creando tipos(types), como existen los tipos primitivos(boolean, string, number, etc)
//export type Weather = 'sunny' | 'rainy' | 'cloudy' | 'windy' | 'stormy'
//export type Visibility = 'great' | 'good' | 'ok' | 'poor'



//los enum son un tipo de dato que lo manejas como un objeto con diferentes propiedades, por ej esto es mucho mas facil para validar
//los valores, asique es un dato que sirve para tipar pero ademass para chequear que sea alguno de estos datos
//  mirar funcion de parse Weather y parse Visibility en utils
export enum Weather {
    Sunny = 'sunny',
    Rainy = 'rainy',
    Cloudy = 'cloudy',
    Windy = 'windy',
    Stormy = 'stormy' 
}

export enum Visibility {
    Great = 'great',
    Good = 'good',
    Ok = 'ok',
    Poor = 'poor'
}




export interface DiaryEntry {
    id: number,
    date: string,
    weather: Weather,
    visibility: Visibility,
    comment: string 
}

//una interfaz esta pensada para ser extendida por ende si es algo que puede llegar a tener mas tipos
//  es mejor usar interfaz, si va a ser algo que se que es 100% fijo, uso type

//interface SpecialDiaryEntry extends DiaryEntry {
//    flightNumber: number
//}


//la idea es crear la menor cantidad de interfaces posibles por ende lo mas recomendado para no tomar datos que no quiero de una
// interfaz (en este caso sensibles)


// export type NonSensitiveInfoDiaryEntry = Pick<DiaryEntry, 'id' | 'date' | 'weather' | 'visibility'> aca creo un type y elijo todo menos lo que no quiero "Pick"

export type NonSensitiveInfoDiaryEntry = Omit<DiaryEntry, 'comment'> //creo un type quedandose con todo menos el comentario

export type NewDiaryEntry = Omit<DiaryEntry, 'id'>