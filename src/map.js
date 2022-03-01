import logo from './logo.svg';
import './App.css';
import './Spots.css'


const suA = [['a1','Closed'],['a2','Open'],['a3','Closed'],['a4','Open'],['a5','Closed'],['a6','Closed'],['a7','Closed'],['a8','Closed'],['a9','Closed'],['a10','Closed'],['a11','Closed'],['a12','Closed'],['a13','Closed'],['a14','Closed'],['a15','Closed'],['a16','Closed'],['a17','Closed'],['a18','Closed']]
const suB = [['b1','Closed'],['b2','Closed'],['b3','Closed'],['b4','Closed'],['b5','Closed'],['b6','Closed'],['b7','Closed'],['b8','Closed'],['b9','Open'],['b10','Closed'],['b11','Closed'],['b12','Closed'],['b13','Closed'],['b14','Closed'],['b15','Closed'],['b16','Closed'],['b17','Closed'],['b18','Closed']]
const suC = [['c1','Open'],['c2','Closed'],['c3','Open'],['c4','Open'],['c5','Open'],['c6','Open'],['c7','Closed'],['c8','Closed'],['c9','Closed'],['c10','Closed'],['c11','Closed'],['c12','Closed'],['c13','Closed'],['c14','Closed'],['c15','Closed']]
export function App() {
  return (
    <div className="App">
      <h1 class = "Header">Student Union Parking</h1>
 
      <Spots />
      <Map />
    </div>
  );
}

function Spots(){
  return(
  	<div>   
		<div class="lot1Image"></div>
		
		<div class="compass">
		<div class="N"> &#8593; </div>
		<div class="N"> N </div>
		<div class="WE"> &#8592; W &nbsp; &nbsp; &nbsp; E &#8594; </div>
		<div class="S"> &#8595; </div>
		<div class="S"> S </div>
		<h1 class="Header">Parking Lot Grid View</h1>
    </div>   
    
    <span class="normal">Open Spots: 8</span>
    <div class="grid">
    	<div class = "Row3">
          {suC.map((suC, index) => (
            <div class = {suC[1]} key={index}>
              {suC[0]}
            </div>
          ))}
        </div>
    <div class = "Break"></div>
       <div>
          {suA.map((suA, index) => (
            <div class = {suA[1]} key={index}>
              {suA[0]}
            </div>
          ))}
        </div>


        <div>
          {suB.map((suB, index) => (
            <div class = {suB[1]} key={index}>
              {suB[0]}
            </div>
          ))}
        </div>
		

        


       
    </div>
    <div class = "Break"></div>
    </div>
   
  )
}



function Map(){
  return(
    <div class = "Google">
      <iframe
          width="300"
          height="300"
          // style="border:0"
          loading="lazy"
          allowfullscreen
          src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBhEaYbrwNtOSf9Ohdjx2bsPALGLv7Efm4
            &q=3135+E+5th+Pl+Parking">
        </iframe>
      </div>
  )
  }
//export App;