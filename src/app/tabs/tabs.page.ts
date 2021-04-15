import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(private Router: Router) {}

  public toggleMore(): void {
    console.log('done');
  }

  public home(): void {
    this.Router.navigateByUrl('/app/home');
  }
}
