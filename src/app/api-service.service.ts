import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(
    private http: HttpClient
  ) { }

  getPost(data: any) {
    return this.http.post('http://localhost:5000/api/post/getPublish', data,)
  }
}
