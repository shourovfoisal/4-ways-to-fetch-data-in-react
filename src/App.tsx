import { Link } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <Link to="/">Home</Link>
      <Link to="/fetch-api">Fetch API</Link>
      <Link to="/axios">Axios</Link>
      <Link to="/swr">SWR</Link>
      <Link to="/react-query">React Query</Link>
    </div>
  )
}

export default App
