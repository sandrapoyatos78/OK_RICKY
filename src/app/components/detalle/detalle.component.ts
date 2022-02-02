import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
})
export class DetalleComponent implements OnInit {

  regresar () {
    this.modalCtrl.dismiss()
  }

  async verDetalle (id: string) {
    const modal = await this.modalCtrl.create({
      component: DetalleComponent,
      componentProps:{id}
    })
    modal.present()
  }
  constructor(private modalCtrl:ModalController) { }

  ngOnInit() {}

}
