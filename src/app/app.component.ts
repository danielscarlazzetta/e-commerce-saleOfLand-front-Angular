import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'e-commerce-saleOfLand-front-Angular2';

  slideIndex = 0;
  slides!: HTMLCollectionOf<Element>;
  dots!: HTMLCollectionOf<Element>;

  showLinks = false;

  

  ngOnInit() {
    this.slides = document.getElementsByClassName("mySlides");
    this.dots = document.getElementsByClassName("dot");
    this.showSlides();
  }

  showSlides() {
    let i;
    for (i = 0; i < this.slides.length; i++) {
      (this.slides[i] as HTMLElement).style.display = "none";
    }

    this.slideIndex++;

    if (this.slideIndex > this.slides.length) { this.slideIndex = 1; }

    for (i = 0; i < this.dots.length; i++) {
      this.dots[i].className = this.dots[i].className.replace(" active", "");
    }

    (this.slides[this.slideIndex - 1] as HTMLElement).style.display = "block";
    this.dots[this.slideIndex - 1].className += " active";

    setTimeout(() => {
      this.showSlides();
    }, 3000);
  }


  toggleLinks() {
    this.showLinks = !this.showLinks;
  }

}
