import { useState } from 'react'
import './App.css'

const quotes: Quote[] = [
  {
    text: 'The greatest glory in living lies not in never falling, but in rising every time we fall.',
    author: 'Nelson Mandela'
  },
  {
    text: 'The way to get started is to quit talking and begin doing.',
    author: 'Walt Disney'
  },
  {
    text: 'Your time is limited, so don\'t waste it living someone else\'s life. Don\'t be trapped by dogma – which is living with the results of other people\'s thinking.',
    author: 'Steve Jobs'
  }
]
function App() {
  const getRandomQuote = () => quotes[Math.floor(Math.random() * quotes.length)]

  const [quote, setQuote] = useState<Quote>(getRandomQuote())


  return (
    <div id='wrapper'>
      <div id='quote-box'>
        <p id='text'>{quote.text}</p>
        <p id='author'>{quote.author}</p>
        <button id='new-quote' onClick={() => setQuote(getRandomQuote())}>New Quote</button>
        <a
          id='tweet-quote'
          href='https://twitter.com/intent/tweet'
          target='_blank'
          rel='noreferrer'
        >
          Tweet
        </a>
      </div>      
    </div>
  )
}

export default App
