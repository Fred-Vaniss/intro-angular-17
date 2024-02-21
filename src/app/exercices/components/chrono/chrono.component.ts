import { Component } from '@angular/core';

@Component({
  selector: 'app-chrono',
  templateUrl: './chrono.component.html',
  styleUrl: './chrono.component.scss'
})
export class ChronoComponent {
  milliseconds : number = 0;
  interval? : NodeJS.Timeout;

  isStarted : boolean = false;
  timeStart : number = 0;
  timePause : number = 0;

  start() : void {
    this.isStarted = true;

    this.timeStart = new Date().getTime();
    this.interval = setInterval(() => this.elapse(), 1 )
  }

  stop() : void {
    this.isStarted = false;
    this.timePause = this.milliseconds

    clearInterval(this.interval);
  }

  reset() : void {
    this.milliseconds = 0;
    this.timePause = 0;

    if (this.isStarted) {
      this.isStarted = false;
      clearInterval(this.interval);
    }
  }

  elapse() : void {
    this.milliseconds = new Date().getTime() - this.timeStart + this.timePause
  }
}
