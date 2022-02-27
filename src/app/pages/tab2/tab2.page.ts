import { Component } from '@angular/core';
import { episode } from 'src/app/interfaces/interfaces';
import { DataService } from 'src/app/services/data.service';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  episodes: episode[]=[];
  constructor(public dataService: DataService) {}
  
  loadEpisodes(event?)
  {
    this.dataService.getEpisodes().subscribe(
      resp=> {
        console.log('Episodes', resp);
        this.episodes.push(...resp.results);
      });
  }
  loadData(event){
    this.loadEpisodes(event);
  }
  ngOnInit():void {
    this.loadEpisodes();
   
  }
}
