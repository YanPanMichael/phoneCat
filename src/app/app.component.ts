import { Component } from '@angular/core';
import { Observable, Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  aaa() {
    var count = 0;
    var button = document.querySelector('button');
    button.addEventListener('click', () => console.log(`Clicked ${++count} times`));
  }
}
