import { Component } from '@angular/core';
import { AppRoutes } from '../../core/data/routes.data';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.sass',
})
export class HomePageComponent {
  cosntructor() {}

  get productsPageLink(): string {
    return AppRoutes.productsPage;
  }
}
