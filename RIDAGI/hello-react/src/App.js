import './App.css'
import Counter from './components/Counter'
import EventPractice from './components/EventPractice'
import MyComponent from './components/MyComponent'
import Say from './components/Say'

function App() {
  return (
    <>
      <MyComponent name="React" favoriteNumber={89}>
        리액트
      </MyComponent>

      <Counter />
      <Say />

      <EventPractice />
    </>
  )
}

export default App
