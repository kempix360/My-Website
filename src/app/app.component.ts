import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  private onMouseMoveHandler: (event: MouseEvent) => void;

  constructor() {
    this.onMouseMoveHandler = this.onMouseMove.bind(this);
  }

  ngAfterViewInit() {
    document.addEventListener("mousemove", this.onMouseMoveHandler);
  }

  ngOnDestroy() {
    document.removeEventListener("mousemove", this.onMouseMoveHandler);
  }

  private onMouseMove(event: MouseEvent) {
    const gradient = document.querySelector(".gradient") as HTMLElement;
    if (gradient) {
      gradient.style.backgroundImage = 'radial-gradient(at ' + event.clientX + 'px ' + event.clientY + 'px, rgba(159,0,191,.9) 0, #4D4FA7 70%)';
    }
  }
}
