import './App.css';
import React, {useState} from 'react'
import Axios from 'axios'



function Giphy() {

const [state, setState] = useState("")
const [getstate, setgetState] = useState("")

const [othergif, setOthergif] = useState("")



  const getGiph = (eve) =>{
   
      if (getstate === ""){
       alert("Giphy input must be filled out")
      return false
  }

    Axios.get(`https://api.giphy.com/v1/gifs/search?q=${getstate}&api_key=dc6zaTOxFJmzC`)
    .then((inf)=>{
      setState(inf.data.data[1].embed_url)

      let alldata = inf.data.data

      var result = alldata.map(person => ({ value: person.embed_url}));
      const linksdata = result.map(ll => ll.value)
     

     setOthergif(linksdata)
     console.log(setOthergif)
    } )

  
  }
 
const handleKeyPress = e =>{
  if (e.key === 'Enter'){
    getGiph()
  }
}

  const inputHandler = (e) =>{
    setgetState(e.target.value)
  }

  return (
    <div className="Giphy">
     
     <style>{'body { background-color: black; }'}</style>
      
      <input type="text" 
      onChange = {inputHandler}
      value = {getstate}
      className="input"
      placeholder="SEARCH ALL GIFS AND MEMEs HERE"
      onKeyPress={handleKeyPress}
      
      />



    <button onClick={getGiph} className="button"> get the gify </button>
    <div className="all">
      <div className="main_gif">
       <iframe src={state} data-alt={state} height="200" width="300" className="main_frame"> </iframe>
      </div>
     

  { /*{othergif[0]} <br /> */}

    <div className="all_gif">
 <div className="alf_gif1">
  {<iframe src={othergif[3] } className="frame" data-alt={othergif}>  </iframe> }
  {<iframe src={othergif[4] } className="frame" data-alt={othergif}>  </iframe> }
  {<iframe src={othergif[6] } className="frame" data-alt={othergif}>  </iframe> }
  
  </div>

  <div className="alf_gif2">
  {<iframe src={othergif[7] } className="frame" data-alt={othergif}>  </iframe> }
  {<iframe src={othergif[8] } className="frame" data-alt={othergif}>  </iframe> }
  {<iframe src={othergif[9] } className="frame" data-alt={othergif}>  </iframe> }
  </div>


          <div className="alf-gif3">
          {<iframe src={othergif[5] } className="frame1" data-alt={othergif}>  </iframe> }
          {<iframe src={othergif[10] } className="frame1" data-alt={othergif}>  </iframe> }

          </div>
  
   </div>
   

   </div>
</div>
  );
}

export default Giphy;
