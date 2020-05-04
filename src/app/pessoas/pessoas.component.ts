import { Component, OnInit } from '@angular/core';
import { pessoas } from './pessoas.module';
import { PessoasService } from './pessoas.service';

@Component({
  selector: 'app-pessoas',
  templateUrl: './pessoas.component.html',
  styleUrls: ['./pessoas.component.css']
})
export class PessoasComponent implements OnInit {
  pessoasArray: pessoas[] = []
  detalhePessoa: boolean = false
  humano: pessoas


  constructor(private pessoasService: PessoasService) { }

  ngOnInit(): void {
    this.pessoasArray = this.pessoasService.getPessoas()
    console.log(this.pessoasArray)
  }

  detalheDaPessoa(pessoa) {
    console.log(pessoa)
    this.detalhePessoa = true
    this.humano = pessoa
  }

  alterarPessoa(pessoa) {
    this.pessoasService.alterarPessoa(pessoa)
  }
}