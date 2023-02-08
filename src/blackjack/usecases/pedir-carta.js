
/**
 * 
 * @param {Array<String>} deck 
 * @returns {String} retorna un string con un numero y una letra
 */

export const pedirCarta = (deck) => {

    if ( !deck || deck.length === 0 ) {
        throw new Error('No hay cartas en el deck');
    }
    const carta = deck.pop();
    return carta;
}