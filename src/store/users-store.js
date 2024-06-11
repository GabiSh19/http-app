//Es un módulo, pero no quiero exportar el state por que no quiero que nadie fuera del store lo pueda manipular.

const state = {
    currentPage : 0, 
    users: [],
}

const loadNextPage = async () => {
    throw new Error('Not implemented')
    }   
    
    
const loadPreviousPage = async () => {
    throw new Error('Not implemented')
    }   
    
const onUserChanged = () => {
    throw new Error('Not implemented')
        

}
const reloadPage = async () => {
    throw new Error('Not implemented')
        
}

export default {
    loadNextPage, 
    loadPreviousPage, 
    onUserChanged, 
    reloadPage,

    getUser: () => [...state.users],
    getCurrentPage: () => state.currentPage,
}