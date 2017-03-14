import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class MediaService {

  private url: string = 'http://media.mw.metropolia.fi/wbma';
  private limit: number = 10;

  constructor(private http: Http) {
  }

  getMedia = () => {
    return this.http.get(this.url + '/media?limit=' + this.limit)
      .map(
        res =>
          res.json()
      );
  }



}
