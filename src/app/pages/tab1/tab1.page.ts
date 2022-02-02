import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { character } from 'src/app/interfaces/interfaces';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  characters: character[]= [];

  constructor(public data: DataService) {
  }

  loadCharacters(event?)
  {
    this.data.getCharacters().subscribe(
      resp=> {
        console.log('Characters', resp);
        this.characters.push(...resp.results);
      });
  }
  loadData(event){
    this.loadCharacters(event);
  }
  ngOnInit():void {
    this.loadCharacters();
  }
}

