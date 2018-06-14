import { Component, OnInit } from '@angular/core';

import { TarefaService } from '../shared/tarefa.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-listar-tarefa',
  templateUrl: './listar-tarefa.component.html',
  styleUrls: ['./listar-tarefa.component.css']
})
export class ListarTarefaComponent implements OnInit {

  public tarefas: Array<any>;

  constructor(private tarefaService: TarefaService) { 
    this.tarefas = [];
  }

  ngOnInit() {
    this.listarTodos();
  }

  listarTodos() {
    this.tarefaService.listarTodos().subscribe(res => {
      let result = res.json();
      let records = result.records;
      records.forEach(index => {
        this.tarefas.push(index.fields);
      }, this);
    });
  }

  /* remover(id) {
    if (confirm('Deseja remover e'))
  } */
}
