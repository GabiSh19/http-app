import { User } from "../models/user";
//Mapers es un ente intermedio que me sirve a mi para saber como viene la data de mi backed 
// y generar una instancia basado en lo que yo necesito. Esto nos puede servir igual por si el backend cambia las variables u otro podemos tener
// el mapper y este mapper se adapta a la data de como viene en el servidor y lo adapta exactamente a como yo necesito a mi objeto en la aplicación. 

//Mapper: es una función que recibe nuestro objeto o algo que usa nuestro objeto
//y genera una instancia.

/**
 * 
 * @param {Like<User>} localhostUser //Algo que luzca como un usuario
 * @returns {User} //regresa una instancia de un usuario
 */
export const localhostUserToModel = (localhostUser) => {

    const { 
        id,
        isActive,
        balance,
        avatar,
        first_name,
        last_name,
        gender
    } = localhostUser;



    return new User({
        id,
        isActive,
        balance,
        avatar,
        firstName: first_name,
        lastName: last_name,
        gender
    })

}
