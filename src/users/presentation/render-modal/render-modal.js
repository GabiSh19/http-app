import modalHtml from './render-modal.html?raw';
import './render-modal.css';
import { User } from '../../models/user';

let modal, form;
let loadedUser;

/**
 * 
 * @param {String|Number} id 
 * @returns 
 */
export const showModal = async ( id ) => {

    modal?.classList.remove('hide-modal');

    if ( !id ) return;
    const user = await getUserById( id );

}

export const hideModal = () => {

    modal?.classList.add('hide-modal');
    form?.reset();

}
 
/**
 * 
 * @param {User} user 
 */
const setFormValues = ( user ) => {

}


/**
 * 
 * @param {HTMLDivElement} element 
 * @param {(userLike) => Promise<void>} callback
 */
export const renderModal = ( element, callback ) => {

    if ( modal ) return;

    modal = document.createElement( 'div' );
    modal.innerHTML = modalHtml;
    modal.className = 'modal-container hide-modal'
    form = modal.querySelector( 'form');


    
    modal.addEventListener('click', (event) => {
        // console.log(event.target);
        if (event.target.className === 'modal-container') hideModal() ;
    });
        
    form.addEventListener('submit', async (event) => {
        event.preventDefault();

        console.log('Formulario enviado');
        
        const formData = new FormData( form );
        const userLike = {};

        for (const [key, value] of formData){
            
            if (key === 'balance') {
                userLike[key] = +value;
                continue; //Estoy convirtiendolo en un valor numérico es como Number(value);
            }
            if (key === 'isActive') { 
                userLike[key] = ( value === 'on') ? true: false;
                continue; 
            }
            userLike[key] = value;
        }

        // console.log(userLike);

        await callback( userLike );

        hideModal();

    });

    element.append( modal );
}