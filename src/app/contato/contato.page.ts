import { Component, OnInit } from '@angular/core';
import { Contato } from './entidade/contato'
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router'
@Component({
  selector: 'app-contato',
  templateUrl: './contato.page.html',
  styleUrls: ['./contato.page.scss'],
})
export class ContatoPage implements OnInit {
  contato: Contato = new Contato();

  constructor(private fire: AngularFireDatabase, private rota:Router ) { }

  
  ngOnInit() {
  }

  salvar(){
    this.fire.list('contato').push(this.contato);
    this.contato = new Contato();
    alert('salvo Com sucesso');
    this.rota.navigate(['contatos']);
  }
}
