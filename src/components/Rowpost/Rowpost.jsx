import React,{useEffect,useState} from 'react'
import './Rawpost.scss'
import axios from '../../axios'
import { imageUrl } from '../../constants/constants'

function Rowpost(props) {
  const [Trendings,setTrendings] = useState([])
  useEffect(() => {
    axios.get(props.url).then((response)=>{
      console.log(response.data)
      setTrendings(response.data.results)
    })
    
  }, [])
  
  return (
    <div className='Row' >
        <h5>{props.title}</h5>
        <div className="posters">
          {Trendings.map((movie)=>
          <img className={props.isSmall ? 'small-poster':'poster'} src={`${imageUrl+movie.backdrop_path}`} alt="" />
          )}
            
            
        </div>
    </div>
  )
}

export default Rowpost