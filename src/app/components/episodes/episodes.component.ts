import { Component, Input,OnInit } from '@angular/core';
import { episode } from 'src/app/interfaces/interfaces';
import { DataService } from 'src/app/services/data.service';
@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.scss'],
})
export class EpisodesComponent implements OnInit {
  
  @Input() episodes: episode[]=[];
  constructor( public dataService: DataService) { }

  ngOnInit() {}

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

}
