import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-secure-header',
  templateUrl: './secure-header.component.html',
  styleUrls: ['./secure-header.component.scss']
})
export class SecureHeaderComponent {

  currenturl: string = '';

  constructor(private router: Router) {
    // this.currenturl = this.router.url;
    // console.log('Current URL:', this.currenturl);
  }

  ngOnInit() {
    this.currenturl = this.router.url;
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currenturl = event.urlAfterRedirects;
        console.log('Updated URL:', this.currenturl);
      }
    })
  }
}
