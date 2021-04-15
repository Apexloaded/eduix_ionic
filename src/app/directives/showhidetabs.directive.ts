import { Directive, ElementRef, Renderer2 } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Directive({
  selector: '[appShowhidetabs]'
})
export class ShowhidetabsDirective {
  private hideTabBarPages: string[] = [];
  public routeParamPages: string[] = [
    'courses'
  ];

  constructor(
    private router: Router,
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) {
    this.router.events
    .pipe(
      filter(e => e instanceof NavigationEnd)
    ).subscribe((e: any) => {
      this.showHideTabs(e);
    });
  }

  private showHideTabs(e: NavigationEnd) {
    const urlArray = e.url.split('/');
    const pageUrlParent = urlArray[urlArray.length - 2];
    const pageUrl = urlArray[urlArray.length - 1];
    const page = pageUrl.split('?')[0];
    const hideParamPage = this.routeParamPages.indexOf(pageUrlParent) > -1;
    const shouldHide = this.hideTabBarPages.indexOf(page) > -1 || hideParamPage;
    shouldHide ? this.hideTabs() : this.showTabs();
  }

  private hideTabs() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'display', 'none');
  }

  private showTabs() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'display', 'flex');
  }
}
