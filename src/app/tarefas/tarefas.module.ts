import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { TarefaService } from './shared';
import { ListarTarefaComponent } from './listar/listar-tarefa.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  declarations: [
    ListarTarefaComponent
  ],
  providers: [ 
    TarefaService
  ]
})
export class TarefasModule { }
