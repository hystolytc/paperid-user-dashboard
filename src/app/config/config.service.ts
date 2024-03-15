import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class ConfigService {
  baseUrl = 'https://jsonplaceholder.typicode.com'

  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get<Record<string, any>[]>(`${this.baseUrl}/users`)
  }

  getUsersDetail(userId: number) {
    return this.http.get<Record<string, any>>(`${this.baseUrl}/users/${userId}`)
  }
}