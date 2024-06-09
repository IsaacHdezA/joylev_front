import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs';

import { Image } from '../../models/image';
import { HttpResponse } from '../../models/http_response';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  private url: string = "http://localhost:3000/images/";

  constructor(
    private http: HttpClient
  ) {}

  add(activity: Image): Observable<HttpResponse<Image>> {
    return this.http.post(this.url, activity).pipe(map((res) => res as HttpResponse<Image>));
  }
}
