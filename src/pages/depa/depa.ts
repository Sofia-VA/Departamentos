import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DepaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-depa',
  templateUrl: 'depa.html',
})
export class DepaPage {
  carrito;
  depas;
  imagen="";
  nombre="";
  u="";
  precio="";
  m2="";
  recamaras="";
  banos="";

  
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.carrito=this.navParams.get("carrito");
    this.depas=this.navParams.get("depas");
    this.imagen=this.navParams.get("depas").imagen;
    this.nombre=this.navParams.get("depas").nombre;
    this.u=this.navParams.get("depas").u;
    this.precio=this.navParams.get("depas").precio;
    this.m2=this.navParams.get("depas").m2;
    this.recamaras=this.navParams.get("depas").recamaras;
    this.banos=this.navParams.get("depas").banos;
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DepaPage');
  }

  clickAgregar()
  {
    this.carrito.push(this.depas );
      this.navCtrl.pop();
  }

}
