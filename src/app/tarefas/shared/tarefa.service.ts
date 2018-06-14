import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { UrlsAirtable } from '../../urls-airtable';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {



  constructor(private http: Http) { }

  listarTodos() {
    let headers = new Headers();
    headers.append('Authorization', 'Bearer keyMlJEtaAm3v3lVj');
    return this.http.get(UrlsAirtable.tarefas, { 
      headers: headers 
    });
  }

  cadastrar(fields) {
    let headers = new Headers();
    headers.append('Authorization', 'Bearer keyMlJEtaAm3v3lVj');
    headers.append('Content-type', 'application/json');

    this.http.post(UrlsAirtable.tarefas, fields, {
      headers: headers
    }).subscribe(data => { 
      console.log(data);
    });
  }

  atualizar(id, fields) {
    let headers = new Headers();
    headers.append('Authorization', 'Bearer keyMlJEtaAm3v3lVj');
    headers.append('Content-type', 'application/json');

    this.http.patch(UrlsAirtable.tarefas + '/' + id, fields, {
      headers: headers
    }).subscribe(data => { 
      console.log(data);
    });
  }

  buscarPorId(id) {
    return this.listarTodos().pipe(
      map(tarefas => (<any>tarefas).find(tarefa => tarefa.id == id)));
  }

  removerTarefa(id) {
    let headers = new Headers();
    headers.append('Authorization', 'Bearer keyMlJEtaAm3v3lVj');

    this.http.delete(UrlsAirtable.tarefas + '/' + id, {
      headers: headers
    }).subscribe(data => {
      console.log(data);
    })
  }

  alterarStatus(id, fields) {
    let headers = new Headers();
    headers.append('Authorization', 'Bearer keyMlJEtaAm3v3lVj');
    headers.append('Content-type', 'application/json');

    this.http.patch(UrlsAirtable.tarefas + '/' + id, fields.concluida, {
      headers: headers
    }).subscribe(data => { 
      console.log(data);
    });
  }
}
