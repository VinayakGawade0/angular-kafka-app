import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Message {
  name: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class KafkaService {
  private readonly apiUrl = 'http://localhost:8080/message'; // Update if backend URL is different

  constructor(private http: HttpClient) {}

  sendMessage(message: Message): Observable<string> {
    return this.http.post(`${this.apiUrl}/produce`, message, { responseType: 'text' });
  }

  publishMessage(message: Message): Observable<string> {
    return this.http.post(`${this.apiUrl}/publish`, message, { responseType: 'text' });
  }
}
