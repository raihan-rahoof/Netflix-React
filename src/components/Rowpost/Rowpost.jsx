import React,{useEffect,useState} from 'react'
import './Rawpost.scss'
import axios from '../../axios'
import { imageUrl,API_KEY } from '../../constants/constants'
import YouTube from 'react-youtube'

function Rowpost(props) {
  const [Trendings,setTrendings] = useState([])
  const [urlId , setUrlId] = useState('')
  useEffect(() => {
    axios.get(props.url).then((response)=>{
      console.log(response.data)
      setTrendings(response.data.results)
    })
    
  }, [])
  
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 0,
    },
  };

  const handleMovie = (id)=>{
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response =>{
      if (response.data.results.length !== 0){
         setUrlId((prevUrlId) => (prevUrlId === response.data.results[0].key ? null : response.data.results[0].key));
      }else{
        alert("not available")
      }
    }))
  }

  return (
    <div className='Row' >
        <h5>{props.title}</h5>
        <div className="posters">
          {Trendings.map((movie,index)=>
          <img key={index}onClick={()=> handleMovie(movie.id)} className={props.isSmall ? 'small-poster':'poster'} src={`${imageUrl+movie.backdrop_path}`} alt="" />
          )}
        </div>
        { urlId && <YouTube opts={opts} videoId={urlId} />}

    </div>
  )
}

export default Rowpost