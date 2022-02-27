import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  characterList = [];
  favList     = [];

constructor(
  public navCtrl: NavController,
  private http  : HttpClient,
  public dataService: DataService
 
) {
  
  let fav = localStorage.getItem('FAVLIST');
  if (fav) {
    this.favList = JSON.parse(fav);
  }
}
url = this.dataService.getCharacters();
getcharacter(){
  let url = this.url + '/character';
  this.http.get(url, {observe:'response'}).subscribe((data:any) => {
    this.characterList = data.body;
    console.log('characterList',this.characterList);
  },(err:HttpErrorResponse) => {
    console.log('Something Went Wrong')
  });
}

addFav(character){
  this.favList.push(character);
  localStorage.setItem('FAVLIST', JSON.stringify(this.favList));
}

removeFav(i){
  this.favList.splice(i,1);
  console.log(this.favList);
  
  localStorage.setItem('FAVLIST', JSON.stringify(this.favList));
}

}
