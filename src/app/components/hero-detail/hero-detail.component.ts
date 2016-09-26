import { Component, OnInit } from '@angular/core';
import { Hero } from '../../Classes/Hero/hero';
import {Input} from "@angular/core/src/metadata/directives";

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input()
  hero: Hero;
}
