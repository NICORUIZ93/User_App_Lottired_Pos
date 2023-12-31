import { Component } from '@angular/core';

@Component({
  selector: 'app-configurations',
  templateUrl: './configurations.page.html',
  styleUrls: ['./configurations.page.scss'],
})
export class ConfigurationsPage {
  theme = 'dark';

  constructor() {}

  toggleDarkMode() {
    document.body.classList.toggle('dark', this.theme === 'dark');
  }
}
