import { useEffect, useState } from 'react';
import './App.css';
import Main from './components/Main'
import vector from './img/vector.jpg'
import axios from 'axios'

function App() {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false)
  const ASALYTICS_QUERY = `{
      asalist {
        results {
          name
          assetId
          available
          logo
          unitname1
        }
      }
  }`

  useEffect(() => {
    setLoading(true)
    const fetchData = async () => {
      const res = await axios.post('https://analytics-api.herokuapp.com/analytics', {
            query: ASALYTICS_QUERY 
          })
          setLoading(false)
          // .then(data => {console.log(data)})
          console.log(res.data.data.asalist.results)
          setResults(res.data.data.asalist.results)
    }
    fetchData()
  }, [])
  
  return (
    <div className="app" id='app'>
      <div className="container">
        <header>
          <div className="first-con">
            <img src={vector} alt="" />SAlytics
          </div>
          <div className="second-con">
            <button>ANALYZE ASAs</button>
          </div>
        </header>

        <div className="sub-header">
          <h1>List of Algorand Standard Assets on ASAlytics</h1>
        </div>

        <div className="asalytics-container">
          {
            loading ? <div className='loading'><div className='lds-dual-ring'></div></div> :  <Main results={results} />
          }
        </div>
        
      </div>
    </div>
  );
}

export default App;
