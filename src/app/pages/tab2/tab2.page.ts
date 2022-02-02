import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { episode } from 'src/app/interfaces/interfaces';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  episodes: episode[]= [];

  constructor(public data: DataService) {
  }

  loadEpisode(event?)
  {
    this.data.getEpisodes().subscribe(
      resp=> {
        console.log('Episodes', resp);
        this.episodes.push(...resp.results);
      });
  }
  loadData(event){
    this.loadEpisode(event);
  }
  ngOnInit():void {
    this.loadEpisode();
  }
}
