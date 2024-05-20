import { NgModule } from '@angular/core';
import { HomePageComponent } from './home-page.component';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { LanguageSwitcherComponentModule } from '../../shared/components/language-switcher-component/language-switcher.module';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
];

@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TranslateModule.forChild(),
    LanguageSwitcherComponentModule,
  ],
})
export class HomePageModule {}
