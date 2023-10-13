
import { useCallback, useEffect, useState } from "react"
import Gameboard from './Gameboard'
import GameKeyboard from './Keyboard'
import AlienWord from "./AlienWord";
import words from './words.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSync } from '@fortawesome/free-solid-svg-icons';

function getWord() {
  const word = words[Math.floor(Math.random() * words.length)]
  console.log(word)
  return word
}

function Game() {
  const [wordToGuess, setWordToGuess] = useState(getWord)
  const [guessedLetters, setGuessedLetters] = useState([])


const incorrectLetters = guessedLetters.filter(
    letter => !wordToGuess.includes(letter)
  )

const isLoser = incorrectLetters.length >= 7

const isWinner = wordToGuess  
      .split('')
      .every(letter => guessedLetters.includes(letter))
 
const addGuessedLetter = useCallback((letter) => {
    if (!guessedLetters.includes(letter) && !isLoser && !isWinner) {
      setGuessedLetters((currentLetters) => [...currentLetters, letter]);
    }
  }, [guessedLetters, isWinner, isLoser]);
  
const handleButtonClick = (e) => {
    console.log(`Button "${e.target.innerText}" clicked.`);
    setGuessedLetters([])
      setWordToGuess(getWord())
}

const handleDocumentClick = (e) => {
    if(e.target.tagname !== 'BUTTON') {
      console.log('Clicked outside of buttons')
    }
}

// useEffects
useEffect(() => {
    const handler = (e) => {
      const key = e.key
      if (!key.match(/^[a-z]$/)) return
      console.log('click')
      e.preventDefault()
      addGuessedLetter(key)
    }
    document.addEventListener('keypress', handler)
  
    return () => {
      document.removeEventListener('keypress', handler)
    }
}, [guessedLetters])

useEffect(() => {
    const handler = (e) => {
      const key= e.key
      if (key !== "Enter") return

      e.preventDefault()
      setGuessedLetters([])
      setWordToGuess(getWord())
    }
    document.addEventListener('keypress', handler)

    return () => {
      document.removeEventListener('keypress', handler)
    }
}, [])

useEffect(() => {
    document.addEventListener('click', handleDocumentClick);

    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
}, []);
  
  return (
    <div className="game-container">
      <div className="game-components">
        <div className="msg-container">
          <div className="refresh">
            <button onClick={handleButtonClick}>
              <FontAwesomeIcon 
                icon={faSync} 
                className="fa-icon" 
                />
            </button>
          </div>

          <div className="status-msg">       
              {isWinner && "Winner!"}
              {isLoser && "Try Again!"}     
          </div>
        </div>
      
        <Gameboard 
          numberOfGuesses={incorrectLetters.length} />
    </div>

    <div className="word-components">
      <div className="robotword">
        <AlienWord
        reveal={isLoser}
        guessedLetters={guessedLetters}
        wordToGuess={wordToGuess} 
      />
      </div>
      <div className="keypboard-display">
        <GameKeyboard 
          disabled={isWinner || isLoser}
          activeLetters={guessedLetters.filter(letter => 
            wordToGuess.includes(letter))}
          inactiveLetters={incorrectLetters}
          addGuessedLetter={addGuessedLetter}
        />   
      </div>
      
      </div>
    </div>
  )
}

export default Game
