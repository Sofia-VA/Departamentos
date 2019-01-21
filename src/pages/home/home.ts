import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CarritoPage } from '../carrito/carrito';
import { DepaPage } from '../depa/depa';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  cart=CarritoPage;
  depap=DepaPage;
  depas=[
    {imagen:"../assets/imgs/1.jpg", nombre:"COLOMOS Providencia condominio de lujo",
    u:"Guadalajara, Colomos Providencia", precio:"$ 6,150,000.00", m2:"200 m²", recamaras:"3", banos:"4.5"},
    {imagen:"../assets/imgs/2.jpg",nombre:"Departamento con Alberca dentro de Coto Privado",
    u:"Zapopan, Ejido Copalita", precio:"$ 410,000.00",  m2:"90 m²", recamaras:"2", banos:"1"},
    {imagen:"../assets/imgs/3.jpg",nombre:"DEPARTAMENTO ARBOLEDAS",
    u:"Zapopan, Arboledas", precio:"$ 1,240,000.00",  m2:"62 m²", recamaras:"2", banos:"1"},
    {imagen:"../assets/imgs/4.jpeg",nombre:"Preventa de departamentos",
    u:"Zapopan, Lagos del Country", precio:"$ 2,900,000.00",  m2:"109 m²", recamaras:"2", banos:"2.5"},
    {imagen:"../assets/imgs/5.jpeg",nombre:"VENTA DEPTOS.CONDOMINIO",
    u:"Guadalajara, Jardínes del Country", precio:"$ 3,485,000.00",  m2:"112 m²", recamaras:"3", banos:"3"},
    {imagen:"../assets/imgs/6.jpg",nombre:"Ültimos dos departamentos",
    u:"Guadalajara, Agustín Yañez", precio:"$ 4,063,620.00",  m2:"137 m²", recamaras:"3", banos:"3"},
    {imagen:"../assets/imgs/7.jpg",nombre:"LOMA Bonita residencial, remodelado",
    u:"Zapopan, Loma Bonita", precio:"$ 2,450,000.00",  m2:"132 m²", recamaras:"3", banos:"3"},
    {imagen:"../assets/imgs/8.jpg",nombre:"Departamento Jardines Del Bosque",
    u:"Guadalajara, Jardínes de Bosque", precio:"$ 1,950,000.00",  m2:"104 m²", recamaras:"3", banos:"2"},
    {imagen:"../assets/imgs/9.jpg",nombre:"Últimos departamentos en Chapultepec",
    u:"Guadalajara, Americana", precio:"$ 5,049,470.00",  m2:"174 m²", recamaras:"3", banos:"2"},
    {imagen:"../assets/imgs/10.jpg",nombre:"PROVIDENCIA $4`499,000 Aproveche",
    u:"Guadalajara, Providencia", precio:"$ 4,499,000.00",  m2:"174 m²", recamaras:"3", banos:"3"},
  ]
  carrito=[];
  constructor(public navCtrl: NavController) {

  }
  clickCart()
  {
    this.navCtrl.push(this.cart,{carrito:this.carrito});
  }
  clickD(d)
  {
    this.navCtrl.push(this.depap, {depas:d,carrito:this.carrito});
  }
  
}
