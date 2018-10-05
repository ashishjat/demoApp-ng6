import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {
  constructor() { }

  @Input() hero;
  @Input() display;

  showField = false;
  selectedHero = '';

  ngOnInit() {
  }

  showFiledFunc(): void {
    this.showField = true;
  }

  addToList(name): void {
    debugger
    this.showField = false;
    this.hero.push({ id: this.hero.length + 1, name: name });
  }

  selectedHerofunc(val): void {
    debugger
    this.selectedHero = val;
    this.display.val = val.name;
  }
}
