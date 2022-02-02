import { Component, Input, OnInit } from '@angular/core';
import { character } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
})
export class CharactersComponent implements OnInit {

@Input() characters: character[]=[];

  constructor() { }

  ngOnInit() {}

}
