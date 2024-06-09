/**
 * 
 * @returns {Promise<Object> } quote 
 */
const fetchQuote = async() => {

    const res = await fetch ('https://api.breakingbadquotes.xyz/v1/quotes/5');
    // console.log(res);
    const data = await res.json();
    console.log(data[0]);

    return data[0];
}



/**
 * 
 * @param {HTMLDivElement} element 
 */
export const BreakingbadApp = async (element) => {

    document.querySelector('#app-title').innerHTML = 'Breakingbad App'
    element.innerText = 'Loading...'  
    // const quote = await fetchQuote();

    const quoteLabel = document.createElement('blockquote');
    const authoLabel = document.createElement('h3');
    const nextQuoteButton = document.createElement('button');

    nextQuoteButton.innerText = 'Next Quote';

    const renderQuote = () => {
        
    }

};