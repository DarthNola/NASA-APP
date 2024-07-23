import { useEffect, useState } from "react"
import Footer from "./components/Footer"
import Main from "./components/Main"
import Sidebar from "./components/Sidebar"


function App() {
  const [data, setData]= useState(null)
  const [showModal , setShowModal] = useState(false)
  function handleToggleModal() {
    // set opposite of the state
    setShowModal(!showModal)
  }
  useEffect(() => {
    async function fetchAPIData() {
      const NASA_KEY = import.meta.env.VITE_NASA_API_KEY;
      const url = `https://api.nasa.gov/planetary/apod?api_key=${NASA_KEY}`;

      const today = new Date().toDateString();
      const localKey = `NASA-${today}`;
      
      // Check local storage first
      if (localStorage.getItem(localKey)) {
        const apiData = JSON.parse(localStorage.getItem(localKey));
        setData(apiData);
        return;
      }

      // Clear old data
      localStorage.clear();

      try {
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const apiData = await res.json();
        localStorage.setItem(localKey, JSON.stringify(apiData));
        setData(apiData);
      } catch (err) {
        console.error('Error fetching data:', err.message);
      }
    }

    fetchAPIData();
  }, []);

  return (
    <>
      {data ? (<Main data={data}/>):
        <div className="loadingState">
          <i className="fa-solid fa-gear"></i>
        </div>
      }
      {showModal && (
        <Sidebar data={data} handleToggleModal={handleToggleModal}/>
      )}
      {data && (
        <Footer data={data} handleToggleModal={handleToggleModal}/>
      )}
      
    </>
  )
}

export default App
