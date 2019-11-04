import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exercises: Angular Lesson 3';

  color = 'green';
  height = 0;
  width = 0;
  message = 'Space shuttle ready for takeoff!';
  takeOffEnabled = true;
  downEnabled = false;
  upEnabled = false;
  rightEnabled = false;
  leftEnabled = false;
  handleTakeOff(rocketImage, background) {
    let result = window.confirm('Are you sure the shuttle is ready for takeoff?');
    if (result) {
       this.color = 'blue';
       this.moveRocket(rocketImage, 'up', background);
       this.width = 0;
       this.message = 'Shuttle in flight.';
       this.takeOffEnabled = false;
    }
  }
  land(rocketImage) {
    alert("The shuttle is landing. Landing gear engaged.")
    this.height = 0;
    this.width = 0;
    this.color = 'green';
    this.message = 'The shuttle has landed.';
    rocketImage.style.bottom = '0px';
    this.takeOffEnabled = true;
  }
  abort(rocketImage) {
    let result = window.confirm('Are you sure you want to abort the mission?');
    if (result) {
      this.color = 'red';
      this.height = 0;
      this.width = 0;
      this.message = 'Mission aborted.';
      rocketImage.style.bottom = '0px';
      this.takeOffEnabled = true;
    }
  }
  enableAll() {
    this.downEnabled = true;
    this.upEnabled = true;
    this.rightEnabled = true;
    this.leftEnabled = true;
  }
  checkEdge(rocketImage, background) {
    let left = parseInt(rocketImage.style.left)
    let width = background.offsetWidth;
    this.enableAll();
    if (this.height <= 0) {
      this.color = 'orange';
      this.downEnabled = false;
    }
    if (this.height >= 330000) {
      this.color = 'orange';
      this.upEnabled = false;
    } 
    if (width - left > (width + 10)) {
      this.color = 'orange';
      this.leftEnabled = false;
    }
    if (width - left <= 55) {
      this.color = 'orange';
      this.rightEnabled = false;
    }
    if (this.height > 0 && this.height < 330000 && width - left <= (width + 10) && width - left > 55) {
      this.color = 'blue';
      this.enableAll();
    }
  }
  shuttleMouse(shuttle) {
    console.log(shuttle.offsetWidth);
  }
  moveRocket(rocketImage, direction, background) {
    if (direction === 'right') {
      let movement = parseInt(rocketImage.style.left) + 10 + 'px';
      rocketImage.style.left = movement;
      this.width += 10000;
    } else if (direction === 'left') {
      let movement = parseInt(rocketImage.style.left) - 10 + 'px';
      rocketImage.style.left = movement;
      this.width -= 10000;
    } else if (direction === 'up') {
      let movement = parseInt(rocketImage.style.bottom) + 10 + 'px';
      rocketImage.style.bottom = movement;
      this.height += 10000;
    } else if (direction === 'down') {
      let movement = parseInt(rocketImage.style.bottom) - 10 + 'px';
      rocketImage.style.bottom = movement;
      this.height -= 10000;
    }
    this.checkEdge(rocketImage, background);
  }
}
