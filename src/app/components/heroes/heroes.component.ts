import { Component, OnInit } from '@angular/core';
import {Hero} from 'src/app/hero';
import {HEROES} from 'src/app/mock-heroes'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})



export class HeroesComponent implements OnInit {

  //hero = "Windstorm"
//   hero: Hero = {
//   id: 1,
//   name: "Captain Falcon"}
//   constructor() { }

  heroes = HEROES
  selectedHero: Hero
  ngOnInit(): void {
  }

  onSelect(clickedHero: Hero){
  this.selectedHero = clickedHero;
  console.log(clickedHero)
  }

}
