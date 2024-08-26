import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private isDarkMode = false;
  constructor() {
    const savedTheme = localStorage.getItem('dark-mode');
    if (savedTheme === 'true') {
      this.isDarkMode = true;
      document.body.classList.add('dark-theme');
    }
   }
   toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    if (this.isDarkMode) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
    localStorage.setItem('dark-mode', this.isDarkMode.toString());
  }

  getDarkModeStatus() {
    return this.isDarkMode;
  }
}
