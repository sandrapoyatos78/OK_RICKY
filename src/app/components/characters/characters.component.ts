import { Component, Input, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { character } from 'src/app/interfaces/interfaces';
import { DataLocalService } from 'src/app/services/data-local.service';
import { DataService } from 'src/app/services/data.service';
import { DetalleComponent } from '../detalle/detalle.component';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
})
export class CharactersComponent implements OnInit {

@Input() characters: character[]=[];

  constructor(private modalCtrl: ModalController, public dataService: DataService, private local:DataLocalService, private storage: Storage, private toast: ToastController) { }

  ngOnInit() {}
  
  async verDetalle (id: number, name:string,  gender:string, species:string,  status:string,type:string,image:string) {
    const modal = await this.modalCtrl.create({
      component: DetalleComponent,
      componentProps:{id, name,  gender, species,  status, type,image}
    })
    modal.present()
  }
  loadCharacters(event?)
  {
    this.dataService.getCharacters().subscribe(
      resp=> {
        console.log('Characters', resp);
        this.characters.push(...resp.results);
      });
  }
  loadData(event){
    this.loadCharacters(event);
  }

//   async agregar(id: number, name:string,  gender:string, species:string,  status:string,type:string,image:string) {
//     let id = await this.storage.length() +1;
//     await this.storage.set(id.toString(), );
//   }

//   async rescatar (key: string) {
//     return await this.storage.get(key);
//   }

//   async buscar (txtname: HTMLInputElement) {
//     const valor = await this.local.rescatar(txtname.value);
//     this.name = valor [0].name;

//   if (valor != null) {
//     this.name = valor[0].name;
//     txtname.value= ""; 
//    } else {
     
//     this.name ="";
//      const toast = await this.toast.create ( {
//        message: "El personaje no fue encontrado",
//        duration:2000,
//        color: "danger",
//        position: "middle"
//      });
//      toast.present();
//     }

// 
}


