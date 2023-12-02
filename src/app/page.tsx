'use client'
import { HomePage } from "@/app/components/Home/HomePage"
import { useEffect ,useState} from "react";
import { Legacy } from "./components/LEGACY/Legacy";
import { Nabataeans } from "./components/Nabataeans/Nabataeans";




const Home = () => {
const [data,setData]=useState()

  const fetchData = async () => {
    try {
      const response = await fetch('/api/data');
      const jsonData = await response.json();
      setData(jsonData)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

   useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <HomePage data={data?.cms_documents[4].module_webpage[0]} />
      <Legacy data={data?.cms_documents[1].custom_dynamicarticle}/>
      <Nabataeans data={data?.cms_documents[1].custom_dynamicarticle} />
    </>
  )
}
export default Home

