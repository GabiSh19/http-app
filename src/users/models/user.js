//este User va a ser nuestro objeto del usuario que vamos a manejar en la aplicación
//También esto podría ser una representación de un usuario en la bases de datos.

/**
 * 
 * @param {Like<User>} userDataLike
 */
export class User {


    constructor ({id, isActive, balance, avatar, firstName, lastName, gender}) {
        this.id         = id,
        this.isActive   = isActive
        this.balance    = balance,
        this.avatar     = avatar,
        this.firstName  = firstName,
        this.lastName   = lastName,
        this.gender     = gender
    }


}