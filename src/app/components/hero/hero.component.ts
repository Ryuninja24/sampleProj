import { Component, OnInit } from '@angular/core';
import { Hero } from '../../Classes/Hero/hero';
import { HeroServiceService } from '../../services/hero-service.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  constructor(private heroService: HeroServiceService) { }

  ngOnInit() {
    this.getHeroes();
  }

  heroes: Hero[];
  selectedHero: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroService.getHeroesSlowly().then(heros => this.heroes = heros);
  }

}
