import React, {useState, useEffect} from 'react'
import { ProgressBar, Image, Button, ButtonGroup } from 'react-bootstrap';
const now = 56;
const numOfChoice = 4;
function Progress() {
    const [loading, setLoading] = useState(false);
  //const [error, setError] = useState(false)
  const [countries, setCountries] = useState([]);
  const [name, setName] = useState();
  const [pagination, setPagination] = useState(4)
  const [count, setCount] = useState(0)
  const [error, setError] = useState("");
  const [flag, setFlag] = useState();
  const [answer, setAnswer] = useState('');

  
  function randomFlag() {
    return Math.floor((Math.random() * 250) + 1);
   }
const randomNumb = randomFlag();

  const endpoint = "https://restcountries.eu/rest/v2/all";


  const fetchAPI = async () => {
    try {
      const countries = await fetch(endpoint);

      const dataJSON = await countries.json();
      setCountries(dataJSON);
      setFlag(dataJSON[randomNumb].flag)
      setAnswer(dataJSON[randomNumb].name)
      console.log("name "+ dataJSON[randomNumb].name)
      console.log(randomNumb)
       console.log((dataJSON).slice(count, pagination))
        console.log(dataJSON.name);

        console.log(dataJSON);
        setError(false);
      }

     catch (error) {
      setLoading(false);
      setError(error);
    }
  };

  useEffect(() => {
    fetchAPI();
  }, []);

function randomFlag() {
 return Math.floor((Math.random() * 250) + 1);
}
console.log(randomFlag())
    return (
        <div>
            <br/>
          <ProgressBar now={now} label={`${now}%`} />
          <br/>
          <div className="text-center">
              <Image src={`${flag}`} className="flagImage" alt="flag" fluid rounded/>
        </div>
        <h1>{answer}</h1>
          <h2 className="text-center mt-4">Quess the country?</h2>
          <div className="btnGroup text-center">
             {countries.map((country)=>(
               <ButtonGroup className="mt-4 text-center" aria-label="First group">
               <Button className="mr-2">{answer}</Button>
               </ButtonGroup>
             ))}
              
{/*               
              <ButtonGroup className="mt-4 text-center" aria-label="First group">
              <Button className="mr-2">Country 1hhhhh</Button>
              <Button className="mr-2">Country 1hhhhh</Button>
              </ButtonGroup>

              <ButtonGroup className="mt-4 text-center" aria-label="First group">
              <Button className="mr-2">Country 1hhhhh</Button>
              <Button className="mr-2">Country 1hhhhh</Button>
              </ButtonGroup>

                         
              <ButtonGroup className="mt-4 text-center" aria-label="First group">
              <Button className="mr-2">Country 1hhhhh</Button>
              <Button className="mr-2">Country 1hhhhh</Button>
              </ButtonGroup> */}
          </div>
          <footer className="mt-4 bg-primary text-center text-white footer"><a href="http://surdy-a.github.io/" className="text-white dispaly-1">Designed by Surdy_A</a></footer>
        </div>
    )
}

export default Progress;
