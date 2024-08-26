import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ThemeService } from 'src/app/service/theme.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
 
export class NavbarComponent {
  isDarkMode = false;
  navLinks = [
    { path: 'home', label: 'Home',icon: 'home' },
    { path: 'contact', label: 'Contact',icon:'call' },
    { path: 'about-us', label: 'About Us' },
    {path:'login', label:'Login',icon:'login'},
    {path:'register', label:'Register',icon:'app_registration'},

  ];


  constructor(private themeService: ThemeService, private router: Router) {
    // Set the initial state of dark mode based on the ThemeService
    this.isDarkMode = this.themeService.getDarkModeStatus();
  }

  toggleDarkMode() {
    this.themeService.toggleDarkMode();
    this.isDarkMode = !this.isDarkMode;
  }
  navigateTo(link: string) {
    // Navigate to the selected link
    if (this.router.url !== `/${link}`) {
      this.router.navigate([link]);
    }
  }

  isLinkActive(path: string): boolean {
    // Determine if the current path is active
    return this.router.url.includes(path);
  }
}
