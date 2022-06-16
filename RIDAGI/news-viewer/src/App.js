import './App.css'
import axios from 'axios'
import { useState } from 'react'

function App() {
  const [data, setData] = useState(null)
  const onClick = async () => {
    try {
      const response = await axios.get(
        'https://newsapi.org/v2/top-headlines?country=kr&apiKey=9d53eaef21a1426f86e09acfd21bd799',
      )
      setData(response.data)
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <div className="App">
      <h1>News Viewer</h1>
      <div>
        <button onClick={onClick}>불러오기</button>
      </div>

      {data && (
        <textarea
          rows={7}
          value={JSON.stringify(data, null, 2)}
          readOnly={true}
        />
      )}
    </div>
  )
}

export default App
