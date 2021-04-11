import React, { useState } from "react";
import { Navbar, Dropdown, Modal, Button, Form } from "react-bootstrap";

function AppBar() {
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

  return (
    <div>
      <>
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
      </>
    </div>
  );
}

export default AppBar;
