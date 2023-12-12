import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  showNavBar: boolean;

  constructor(private route: ActivatedRoute,private router: Router) {
      this.router.events.subscribe(event => {
        if (event instanceof NavigationEnd) {
          console.log('Current Route:', event.url);
      this.showNavBar = ! event.url.includes('login');

        }
      });

    }
  

}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/