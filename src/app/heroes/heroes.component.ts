import { Component } from '@angular/core';
import type { Hero } from '../hero';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [
    UpperCasePipe],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent {
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
}
