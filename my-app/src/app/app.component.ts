import { Component } from '@angular/core';
import { HEROE1 } from './mock-heroes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  hero_list = [];
  displayVal = {val: 'hello'};
  values: number[] = [102, 115, 130, 137];

  ngOnInit() {
    debugger
    this.hero_list.push(HEROE1);
  }

  addCol() {
    const hero3 = [];
    this.hero_list.push(hero3);
  }

}
