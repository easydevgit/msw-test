import { useQuery } from '@tanstack/react-query'

function App () {

  const { isLoading, error, data } = useQuery(['todos'],
    () => fetch('/todos').then(res => res.json()))

  if (isLoading) {
    return 'Loading...'
  }

  if (error) {
    return 'An error has occurred: ' + error.message
  }

  return (
    <div className="App">
      {data.todo}
    </div>
  )
}

export default App
