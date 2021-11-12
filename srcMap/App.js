import logo from './logo.svg';
import './App.css';
import './Spots.css'


var lotNumber;
const stuff = await fetch('localhost:3000/lot/' + lotNumber);
const data = await stuff.json();

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
    	for (row in data ) {
			<div>
			  {row.map((space, index) => (
				<div class = {space ? 'Open' : 'Closed'} key={index}>
				  {index}
				</div>
			  ))}
			</div>
			<div class = "Break"></div>
    	}
        
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
