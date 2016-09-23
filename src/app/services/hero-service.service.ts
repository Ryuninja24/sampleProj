import { Injectable } from '@angular/core';

import { Hero } from '../Classes/Hero/hero';
import { HEROES } from '../mockData/mock-heroes';


@Injectable()
export class HeroServiceService {

  constructor() { }

  getHeroes(): Hero[] {
    return HEROES;
  }

}
