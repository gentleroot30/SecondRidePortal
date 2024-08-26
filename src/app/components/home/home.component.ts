import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ThemeService } from 'src/app/service/theme.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  isDarkMode = false;

  constructor(private themeService: ThemeService) {
    // Set the initial state of dark mode based on the ThemeService
    this.isDarkMode = this.themeService.getDarkModeStatus();
  }

  toggleDarkMode() {
    this.themeService.toggleDarkMode();
    this.isDarkMode = !this.isDarkMode;
  }
 
 
}
