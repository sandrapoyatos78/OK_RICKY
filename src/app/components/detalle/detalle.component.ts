import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { Storage } from '@ionic/storage-angular';
import { DataService } from 'src/app/services/data.service';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
})
export class DetalleComponent implements OnInit {

  characterList = [];
  favList     = [];
  http: any;
  
  constructor(private modalCtrl:ModalController, public dataService: DataService, private storage: Storage) { 
    let fav = localStorage.getItem('FAVLIST');
    if (fav) {
      this.favList = JSON.parse(fav);
    }
  }

  ngOnInit() {
    
  }
  async verDetalle (id: number, name:string,  gender:string, species:string,  status:string,type:string,image:string) {
    const modal = await this.modalCtrl.create({
      component: DetalleComponent,
      componentProps:{id, name,  gender, species,  status, type,image}
    })
    modal.present()
  }
  regresar () {
    this.modalCtrl.dismiss()
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