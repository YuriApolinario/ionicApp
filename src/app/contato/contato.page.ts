import { Component, OnInit } from '@angular/core';
import { Contato } from './entidade/contato'
import { AngularFireDatabase } from '@angular/fire/database';
@Component({
  selector: 'app-contato',
  templateUrl: './contato.page.html',
  styleUrls: ['./contato.page.scss'],
})
export class ContatoPage implements OnInit {
  contato: Contato = new Contato();

  constructor(private fire: AngularFireDatabase) { }

  
  ngOnInit() {
  }

  salvar(){
    this.fire.list('contato').push(this.contato);
    this.contato = new Contato();
    alert('salvo Com sucesso');
  }
}
