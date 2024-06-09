import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs';

import { Emotion } from '../../models/emotion';
import { HttpResponse } from '../../models/http_response';

@Injectable({
  providedIn: 'root'
})
export class EmotionService {
  private url: string = "http://localhost:3000/emotions/";

  constructor(
    private http: HttpClient
  ) {}

  add(activity: Emotion): Observable<HttpResponse<Emotion>> {
    return this.http.post(this.url, activity).pipe(map((res) => res as HttpResponse<Emotion>));
  }
}
