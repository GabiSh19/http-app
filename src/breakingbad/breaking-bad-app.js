/**
 * 
 * @returns {Object} quote 
 */
const fetchQuote = async() => {

    const res = await fetch ('https://api.breakingbadquotes.xyz/v1/quotes/5');
    console.log(res);

}



/**
 * 
 * @param {HTMLDivElement} element 
 */
export const BreakingbadApp = (element) => {

    document.querySelector('#app-title').innerHTML = 'Breakingbad App'
    element.innerText = 'Loading...'  

    fetchQuote();
};