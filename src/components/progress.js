import React from 'react'
import { ProgressBar, Image, Button, ButtonGroup } from 'react-bootstrap';
const now = 56;
    
function Progress() {

    return (
        <div>
            <br/>
          <ProgressBar now={now} label={`${now}%`} />
          <br/>
          <div className="text-center">
              <Image src="images/download.svg" fluid rounded/>
        </div>
          <h2 className="text-center mt-4">Quess the country?</h2>
          <div className="btnGroup text-center">
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
              </ButtonGroup>

                         
              <ButtonGroup className="mt-4 text-center" aria-label="First group">
              <Button className="mr-2">Country 1hhhhh</Button>
              <Button className="mr-2">Country 1hhhhh</Button>
              </ButtonGroup>
          </div>
          <footer className="mt-4 bg-primary text-center text-white"><a href="http://surdy-a.github.io/" className="text-white dispaly-1">Designed by Surdy_A</a></footer>
        </div>
    )
}

export default Progress;
