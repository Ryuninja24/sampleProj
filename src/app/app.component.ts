import {Component, OnInit} from '@angular/core';
import { Hero } from './Classes/Hero/hero';
import { HeroServiceService } from './services/hero-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HeroServiceService]
})
export class AppComponent implements OnInit{

  constructor(private heroService: HeroServiceService) { }

  ngOnInit() {
    this.getHeroes();
  }

  title = 'Tour of Heroes';
  heroes: Hero[];
  selectedHero: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroService.getHeroes().then(heros => this.heroes = heros);
  }

}

