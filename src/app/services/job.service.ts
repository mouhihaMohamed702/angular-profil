import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class JobService {
  private endpoint = 'https://blog.fellyph.com.br/wp-json/wp/v2/portfolio';

  constructor(private http: Http) { }

  getList() {
    return this.http.get(this.endpoint)
      .map(response => response.json());
  }

  get(clientId: string, callback) {
    this.http.get(`${this.endpoint}/${clientId}`)
    .subscribe(response => {
      callback(response.json());
    });
  }
}
