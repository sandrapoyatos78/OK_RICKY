import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersComponent } from './characters/characters.component';
import { IonicModule } from '@ionic/angular';
import { DetalleComponent } from './detalle/detalle.component';
import { EpisodesComponent } from './episodes/episodes.component';

@NgModule({
  declarations: [
    CharactersComponent,
    EpisodesComponent,
    DetalleComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports:[
    CharactersComponent, 
    EpisodesComponent,
    DetalleComponent
  ]
})
export class ComponentsModule { }