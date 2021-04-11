import React, { useState, useEffect } from "react";
import {
  ProgressBar,
  Image,
  ButtonGroup,
  Navbar,
  Dropdown,
  Modal,
  Button,
  Form,
} from "react-bootstrap";
import AppBar from "./appbar";
// Start AppBar
const now = 56;
const numOfChoice = 4;
function Progress() {
  const [show, setShow] = useState(false);
  const [choiceShow, setChoiceShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleChoiceShow = () => setChoiceShow(true);
  const handleChoiceClose = () => setChoiceShow(false);

  const [selectedRegion, setSelectedRegion] = useState("Europe");
  const [selectedChoice, setSelectedChoice] = useState(4);

  const regions = [
    "Africa",
    "Asia",
    "Europe",
    "North America",
    "Ocenia",
    "South America",
  ];

  const choices = [2, 4, 8];

  const flagName = "FlagQuiz";

  const handleRegion = (event) => {
    const target = event.target.value;
    setSelectedRegion(target);
    alert(target + " region is selected");
    handleClose();
  };

  const onValueChange = (event) => {
    const target = event.target.value;
    setSelectedChoice(target);
    setSelectedChoice(event.target.value);
    alert(target + " options choices is selected");
    handleChoiceClose();
  };
  // End AppBar
  const [loading, setLoading] = useState(false);
  //const [error, setError] = useState(false)
  const [countries, setCountries] = useState([]);
  const [name, setName] = useState();
  const [pagination, setPagination] = useState(4);
  const [count, setCount] = useState(0);
  const [error, setError] = useState("");
  const [flag, setFlag] = useState();
  const [answer, setAnswer] = useState("");

  function randomFlag() {
    return Math.floor(Math.random() * 250 + 1);
  }
  const randomNumb = randomFlag();

  const endpoint = "https://restcountries.eu/rest/v2/all";

  const fetchAPI = async () => {
    try {
      const countries = await fetch(endpoint);

      const dataJSON = await countries.json();
      setCountries(dataJSON);
      setFlag(dataJSON[randomNumb].flag);
      setAnswer(dataJSON[randomNumb].name);
      console.log("name " + dataJSON[randomNumb].name);
      console.log(randomNumb);
      console.log(dataJSON.slice(count, pagination));
      console.log(dataJSON.name);

      console.log(dataJSON);
      setError(false);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  function randomFlagName() {
    var countryList = [];
    var randomNumber = Math.floor(Math.random() * countries.length);
    //alert(randomNumber + "hello")
    var randomFlagName = countries[randomNumber];
    //alert(randomFlagName)
    const objectArray = Object.entries(countries);
    objectArray.forEach(([key, value]) => {
      countryList.push(value.name);
      console.log(countryList);
      console.log(value.name); // 'one'
      //console.log(value); // 1
    });
    // Shuffle array
    const shuffled = countryList.sort(() => 0.5 - Math.random());

    // Get sub-array of first n elements after shuffled
    let selected = shuffled.slice(0, selectedChoice);
    selected.splice(Math.floor(Math.random() * selectedChoice + 1), 0, answer);
    console.log(selected);
    console.log(answer);
    return selected;
  }
  randomFlagName();
  function randomFlag() {
    return Math.floor(Math.random() * 250 + 1);
  }
  console.log(randomFlag());
  return (
    <div>
      {/* Start AppBar */}
      <Navbar bg="primary" variant="dark" className="dropdown">
        <Navbar.Brand href="#home">{flagName}</Navbar.Brand>
        <Dropdown
          className="configIcon"
          id="dropdown-button-drop-left"
          drop="left"
        >
          <Dropdown.Toggle
            variant="primary"
            id="dropdown-basic"
            className="display-1"
          >
            <i className="fa fa-cog" aria-hidden="true"></i>
          </Dropdown.Toggle>

          <Dropdown.Menu menuAlign="left">
            <Dropdown.Item
              href="#/action-1"
              menuAlign="left"
              onClick={handleChoiceShow}
            >
              No of Choices
            </Dropdown.Item>
            <Dropdown.Item onClick={handleShow}>Regions</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        {/* <Navbar className="configIcon float-right dropdown-toggle" 
         id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> 
           <i class="fa fa-cog" aria-hidden="true"></i>
          </Navbar>
          <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
    <button class="dropdown-item" type="button">Action</button>
    <button class="dropdown-item" type="button">Another action</button>
    <button class="dropdown-item" type="button">Something else here</button>
  </div> */}
      </Navbar>
      <Modal show={choiceShow} onHide={handleChoiceClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Choices</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <div>
              <div className="radio">
                <input
                  type="radio"
                  value={2}
                  checked={selectedChoice == 2}
                  onChange={onValueChange}
                />
                <label className="box">2</label>
              </div>
              <div className="radio">
                <input
                  type="radio"
                  value={4}
                  checked={selectedChoice == 4}
                  onChange={onValueChange}
                />
                <label className="box">4</label>
              </div>
              <div className="radio">
                <input
                  type="radio"
                  value={8}
                  checked={selectedChoice == 8}
                  onChange={onValueChange}
                />
                <label className="box">8</label>
              </div>
            </div>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleChoiceClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleChoiceClose}>
            Ok
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Regions Modal */}
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Regions</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <div>
              <div className="radio">
                <input
                  type="radio"
                  value="Africa"
                  checked={selectedRegion == "Africa"}
                  onChange={handleRegion}
                />
                <label className="box">Africa</label>
              </div>
              <div className="radio">
                <input
                  type="radio"
                  value="Asia"
                  checked={selectedRegion == "Asia"}
                  onChange={handleRegion}
                />
                <label className="box">Asia</label>
              </div>
              <div className="radio">
                <input
                  type="radio"
                  value={"Europe"}
                  checked={selectedRegion == "Europe"}
                  onChange={handleRegion}
                />
                <label className="box">Europe</label>
              </div>
              <div className="radio">
                <input
                  type="radio"
                  value={"North America"}
                  checked={selectedRegion == "North America"}
                  onChange={handleRegion}
                />
                <label className="box">North America</label>
              </div>
              <div className="radio">
                <input
                  type="radio"
                  value={"Ocenia"}
                  checked={selectedRegion == "Ocenia"}
                  onChange={handleRegion}
                />
                <label className="box">Ocenia</label>
              </div>
              <div className="radio">
                <input
                  type="radio"
                  value={"South America"}
                  checked={selectedRegion == "South America"}
                  onChange={handleRegion}
                />
                <label className="box">South America</label>
              </div>
            </div>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Ok
          </Button>
        </Modal.Footer>
      </Modal>

      {/* End AppBar */}

      <br />
      <ProgressBar now={now} label={`${now}%`} />
      <br />
      <div className="text-center">
        <Image src={`${flag}`} className="flagImage" alt="flag" fluid rounded />
      </div>
      <h1>{answer}</h1>
      <h2 className="text-center mt-4">Quess the country?</h2>
      <div className="btnGroup text-center">
        {randomFlagName().map((country) => (
          <ButtonGroup className="mt-4 text-center" aria-label="First group">
            <Button className="mr-2">{country}</Button>
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
      <footer className="mt-5  bg-primary text-center text-white footer">
        <a href="http://surdy-a.github.io/" className="text-white dispaly-1">
          Designed by Surdy_A
        </a>
      </footer>
    </div>
  );
}

export default Progress;
