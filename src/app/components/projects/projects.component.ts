import { Component } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

  categories = ['All Projects', 'Java Script', 'Angular', 'JQuery', 'Gaming'];

  selectedCategory = 'All Projects';
  render = true;
  fading = false; // new state for fade animation
  loading = false;

  photos = [
    { path: 'https://crepiano.netlify.app/', picUrl: '/images/projects/crepe2.jpg', category: 'Java Script' },
    { path: 'https://social-app-iota-five.vercel.app/login', picUrl: '/images/projects/social.jpg', category: 'Angular' },
    { path: 'https://laser-workshop.vercel.app/', picUrl: '/images/projects/laser.jpg', category: 'Angular' },
    { path: 'https://e-commerce-three-sepia-uosxtn5ely.vercel.app/login', picUrl: '/images/projects/ecommerce.JPG', category: 'Angular' },
    { path: 'https://ahmed-mansy.github.io/DevFolio/', picUrl: '/images/projects/devilo.JPG', category: 'Java Script' },
    { path: 'https://ahmed-mansy.github.io/CRUD-SYSTEM/', picUrl: '/images/projects/CRUD.jpeg', category: 'Java Script' },
    { path: 'https://ahmed-mansy.github.io/bezal/', picUrl: '/images/projects/bezal.JPG', category: 'Java Script' },
    { path: 'https://ahmed-mansy.github.io/Angora/', picUrl: '/images/projects/angora.JPG', category: 'Java Script' },
    { path: 'https://ahmed-mansy.github.io/bookmark/', picUrl: '/images/projects/bookmark.JPG', category: 'Java Script' },
    { path: 'https://ahmed-mansy.github.io/to-do-list/', picUrl: '/images/projects/to-do-list.jpg', category: 'Java Script' },
    { path: 'https://ahmed-mansy.github.io/Movies/', picUrl: '/images/projects/movies.JPG', category: 'JQuery' },
    { path: 'https://karamfund.pythonanywhere.com/', picUrl: '/images/projects/karam-fund.JPG', category: 'JQuery' },

  ];

  // Filtered photos getter
  get filteredPhotos() {
    if (this.selectedCategory === 'All Projects') return this.photos;
    return this.photos.filter(p => p.category === this.selectedCategory);
  }


  ngOnInit() {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: false,
    });
  }

  ngAfterViewInit() {
    // Ensures dynamic content or route changes are recognized
    AOS.refresh();
  }



  selectCategory(category: string) {
    if (category === this.selectedCategory) return;

    this.fading = true;
    this.loading = true;

    // fade out
    setTimeout(() => {
      this.selectedCategory = category;
      this.render = false;

      // re-render new photos
      setTimeout(() => {
        this.render = true;
        this.fading = false;

        // hide spinner after fade-in
        setTimeout(() => {
          this.loading = false;
          AOS.refreshHard();
        }, 400);
      }, 100);
    }, 400);
  }



}
