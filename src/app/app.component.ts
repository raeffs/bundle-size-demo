import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import * as lodash from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  public title = 'bundle-size-demo';

  public counter = 0;

  constructor() {
    Observable.interval(1000).subscribe(() => {
      const current = lodash.get(this, 'counter');
      lodash.set(this, 'counter', current + 1);
    });
  }
}
