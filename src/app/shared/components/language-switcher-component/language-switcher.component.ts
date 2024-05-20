import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { environment } from '../../../core/environments/environment';

@Component({
  selector: 'app-language-switcher',
  templateUrl: './language-switcher.component.html',
  styleUrl: './language-switcher.component.sass',
})
export class LanguageSwitcherComponent {
  constructor(private _translateService: TranslateService) {}

  get availableLanguages(): string[] {
    return environment.availableLanguages;
  }

  get currentLanguage(): string {
    return this._translateService.currentLang;
  }

  setLanguage(code: string): void {
    this._translateService.use(code);
  }
}
