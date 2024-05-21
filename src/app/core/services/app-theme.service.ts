import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class AppThemeService {
  public theme$: BehaviorSubject<string> = new BehaviorSubject<string>('light');

  private isLocalStorageAvailable: boolean = typeof localStorage !== 'undefined';

  constructor(@Inject(PLATFORM_ID) private platformId: unknown) {
    if (isPlatformBrowser(this.platformId)) {
      const initialTheme = this.getInitialTheme();
      this.setTheme(initialTheme);
    }
  }

  public toggleTheme(): void {
    const newTheme = this.theme$.value === 'light' ? 'dark' : 'light';
    this.setTheme(newTheme);
  }

  public setTheme(theme: string): void {
    this.theme$.next(theme);
    const body = document.body as HTMLElement;
    body.setAttribute('data-bs-theme', theme);

    if (isPlatformBrowser(this.platformId)) {
      try {
        localStorage.setItem('theme', theme);
      } catch (error) {
        console.error('Error setting theme in local storage:', error);
      }
    }
  }

  private getInitialTheme(): string {
    if (isPlatformBrowser(this.platformId)) {
      const theme = localStorage.getItem('theme');
      return theme || 'light';
    }
    return 'light';
  }
}
