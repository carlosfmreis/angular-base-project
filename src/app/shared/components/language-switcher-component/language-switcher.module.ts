import { NgModule } from '@angular/core';
import { LanguageSwitcherComponent } from './language-switcher.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [LanguageSwitcherComponent],
  imports: [CommonModule],
  exports: [LanguageSwitcherComponent],
})
export class LanguageSwitcherComponentModule {}
