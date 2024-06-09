import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Activity } from '../../models/activity';
import { HttpResponse } from '../../models/http_response';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {
  private url: string = "http://localhost:3000/activities/";

  constructor(
    private http: HttpClient
  ) {}

  add(activity: Activity): Observable<HttpResponse<Activity>> {
    return this.http.post(this.url, activity).pipe(map((res) => res as HttpResponse<Activity>));
  }
}
