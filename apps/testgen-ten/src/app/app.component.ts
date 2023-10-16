import { Component } from '@angular/core';

@Component({
  selector: 'testgen-ten-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  sideNavOpen = false;
  title = 'testgen-ten';

  sideNavToggle(): void {
    this.sideNavOpen = !this.sideNavOpen;
  }
}
