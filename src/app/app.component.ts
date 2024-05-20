import { Component, OnDestroy, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subscription, distinctUntilChanged } from 'rxjs';
import moment from 'moment';
import { environment } from './core/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass',
})
export class AppComponent implements OnInit, OnDestroy {
  private _languagesSubscription?: Subscription;
  private _titleSubscription?: Subscription;

  constructor(private _translateService: TranslateService) {}

  private _updateLanguage(languageCode: string): void {
    document.documentElement.lang = languageCode;
    moment.locale(languageCode);
    this._titleSubscription?.unsubscribe();
    this._titleSubscription = this._translateService
      .get('title')
      .subscribe((value) => {
        document.title = value;
      });
  }

  private _resolveAppLanguage(): void {
    this._translateService.addLangs(environment.availableLanguages);
    this._translateService.setDefaultLang(environment.defaultLanguage);
    this._languagesSubscription = this._translateService.onLangChange
      .asObservable()
      .pipe(distinctUntilChanged())
      .subscribe((value) => {
        this._updateLanguage(value.lang);
      });
    const language: string =
      this._translateService.getBrowserLang() ?? environment.defaultLanguage;
    this._translateService.use(
      environment.availableLanguages.includes(language)
        ? language
        : environment.defaultLanguage
    );
  }

  ngOnInit(): void {
    this._resolveAppLanguage();
  }

  ngOnDestroy(): void {
    this._languagesSubscription?.unsubscribe();
    this._titleSubscription?.unsubscribe();
  }
}
