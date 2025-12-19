/**
 * 
 * @param {The word which is given as input and is expected to be guessed} originalWord 
 * @param {Letters which are guessed by the user already} guessedLetters 
 * Ex: originalWOrd humble 
 * guessed letters['H','M','E']
 * return "H_M_E"
 */


export function getMaskedString(originalWord,guessedLetters){
guessedLetters=guessedLetters.map(letters=>letters.toUpperCase());
const guessedLetterSet=new Set(guessedLetters);
const result=originalWord.toUpperCase().split('').map(char=>{
    if(guessedLetterSet.has(char)){
        return char;
}
else 
return "_";}
);
return result.join('');

}