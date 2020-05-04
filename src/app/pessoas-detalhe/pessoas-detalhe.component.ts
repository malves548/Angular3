import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { pessoas } from '../pessoas/pessoas.module'

@Component({
  selector: 'app-pessoas-detalhe',
  templateUrl: './pessoas-detalhe.component.html',
  styleUrls: ['./pessoas-detalhe.component.css']
})
export class PessoasDetalheComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() pessoa: pessoas

  @Output() novoHumanoEvento = new EventEmitter()
  novoHumano: pessoas

  atualizarDados() {
    document.querySelector(".style").classList.toggle("none")
  }

  confirmarDados(name, idade, corOlhos, sexo, email) {
    this.novoHumano = { id: this.pessoa.id, name: name, idade: idade, corOlhos: corOlhos, sexo: sexo, email: email }
    this.novoHumanoEvento.emit(this.novoHumano)
  }

}
