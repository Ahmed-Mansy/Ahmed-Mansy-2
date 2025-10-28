import { AfterViewInit, Component, inject, OnInit, Renderer2 } from '@angular/core';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements AfterViewInit, OnInit {

  private readonly renderer = inject(Renderer2)

  ngOnInit(): void {
    initFlowbite();
    document.documentElement.classList.toggle(
      "dark",
      localStorage['theme'] === "dark" ||
      (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches),
    );
  }

  ngAfterViewInit(): void {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.getAttribute('id');

          if (entry.isIntersecting) {
            // Remove active from all links
            navLinks.forEach((link) =>
              this.renderer.removeClass(link, 'active')
            );

            // Add active to the current one
            const currentLink = document.querySelector(`.nav-link[href="#${id}"]`);
            if (currentLink) this.renderer.addClass(currentLink, 'active');
          }
        });
      },
      {
        threshold: 0.5 // triggers when 50% of the section is visible
      }
    );

    sections.forEach((section) => observer.observe(section));
  }

  theme(event: any) {
    let my = document.documentElement.classList.toggle('dark')
    console.log(my)
    if (my) {
      localStorage['theme'] = "dark";
    }
    else {
      localStorage['theme'] = "light";

    }
  }


}
