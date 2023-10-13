export default function AlienWord({ 
    guessedLetters, 
    wordToGuess, 
    reveal=false }) {
  return (
    <div className="word-container">
      
      { wordToGuess.split('').map((letter, index) => (     
        <span style={{ borderBottom: ".1em solid black" }} key={index}>
         <span
           style={{
             visibility:
               guessedLetters.includes(letter) || reveal
                 ? "visible"
                 : "hidden",
             color:
               !guessedLetters.includes(letter) && reveal ? "purple" : "black",
           }}
         >
           {letter}
         </span>
       </span>
      ))}
        
    </div>
  )
}
