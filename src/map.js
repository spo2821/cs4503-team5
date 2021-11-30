import logo from './logo.svg';
import './App.css';
import './Spots.css'


const suA = [['a1','Closed'],['a2','Closed'],['a3','Closed'],['a4','Open'],['a5','Open'],['a6','Open'],['a7','Closed'],['a8','Closed'],['a9','Closed'],['a10','Closed'],['a11','Closed'],['a12','Closed'],['a13','Closed'],['a14','Closed'],['a15','Open'],['a16','Open'],['a17','Open'],['a18','Open']]
const suB = [['b1','Open'],['b2','Closed'],['b3','Closed'],['b4','Closed'],['b5','Closed'],['b6','Open'],['b7','Open'],['b8','Open'],['b9','Closed'],['b10','Closed'],['b11','Closed'],['b12','Closed'],['b13','Closed'],['b14','Open'],['b15','Open'],['b16','Open'],['b17','Closed'],['b18','Closed']]
const suC = [['c1','Closed'],['c2','Closed'],['c3','Open'],['c4','Open'],['c5','Open'],['c6','Closed'],['c7','Closed'],['c8','Closed'],['c9','Closed'],['c10','Closed'],['c11','Closed'],['c12','Open'],['c13','Open'],['c14','Closed'],['c15','Closed']]
function App() {
  return (
    <div className="App">
      <h1 class = "Header">Student Union</h1>

      <Spots />
      <Map />
    </div>
  );
}

function Spots(){
  return(
    <div>
    <div>
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


        <div class = "Break"></div>


        <div class = "Row3">
          {suC.map((suC, index) => (
            <div class = {suC[1]} key={index}>
              {suC[0]}
            </div>
          ))}
        </div>
    </div>
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
export default App;