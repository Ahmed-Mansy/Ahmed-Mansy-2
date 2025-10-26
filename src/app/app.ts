import { AfterViewInit, Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { initFlowbite } from 'flowbite';
import { HomeComponent } from "./components/home/home.component";
import { AboutComponent } from "./components/about/about.component";
import { ContactComponent } from "./components/contact/contact.component";
import AOS from 'aos';
import { FooterComponent } from "./components/footer/footer.component";
import { ProjectsComponent } from "./components/projects/projects.component";

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, HomeComponent, AboutComponent, ContactComponent, FooterComponent, ProjectsComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit, AfterViewInit {
  protected readonly title = signal('my-portfolio');

  ngOnInit(): void {
    initFlowbite();

    AOS.init({
      duration: 1000, // animation duration
      once: true,     // whether animation should happen only once
    });
  }

  ngAfterViewInit() {
    // Ensures dynamic content or route changes are recognized
    AOS.refresh();
  }




}
