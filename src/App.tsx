import { useState, useEffect } from 'react'

import './App.css'
import { getUser } from './api/test_api'

interface ApiResponse {
  data: any; 
  error: any;
}



function App() {
  const [apiData, setApiData] = useState<ApiResponse>({ 
    data: null, 
    error: null 
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getUser()
        setApiData(response)
      } catch (error) {
        setApiData({ 
          data: null, 
          error: error instanceof Error ? error.message : 'Unknown error' 
        })
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  if (loading) {
    return <p>Loading...</p>
  }

  if (apiData.error) {
    return (
      <div>
        <p>Failed to get data from API. Error: <strong>{apiData.error}</strong></p>
      </div>
    )
  }

  function renderMainContent() {
    return (
      <>
  
          {apiData.data && (
            <div>
              <h3>User Data:</h3>
              <p><strong>Name:</strong> {apiData.data.firstName} {apiData.data.lastName}</p>
              <p><strong>Email:</strong> {apiData.data.email}</p>
              <p><strong>ID:</strong> {apiData.data.id}</p>
            </div>
          )}
  
      </>
    )
  }

  return renderMainContent()
}

export default App