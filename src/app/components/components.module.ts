import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersComponent } from './characters/characters.component';
import { IonicModule } from '@ionic/angular';
import { DetalleComponent } from './detalle/detalle.component';



@NgModule({
  declarations: [
    CharactersComponent,
    DetalleComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports:[
    CharactersComponent, 
    DetalleComponent
  ]
})
export class ComponentsModule { }
