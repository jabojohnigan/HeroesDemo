import { Component, OnInit } from '@angular/core';
import {Hero} from 'src/app/hero';
// import {HEROES} from 'src/app/mock-heroes'
import {HeroService} from 'src/app/hero.service'
import {MessagesService} from 'src/app/messages.service'
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
  constructor(private heroService: HeroService,
              private messagesService: MessagesService) { }

  heroes : Hero[]
  selectedHero: Hero
  ngOnInit(): void {
  this.getHeroes()
  }

  onSelect(clickedHero: Hero){
  this.selectedHero = clickedHero;
  this.messagesService.add(`HeroesComponent: Selected hero id=${clickedHero.id}`);
  console.log(clickedHero)
  }

  getHeroes(): void{
  this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes)
  }

}
