import { HttpClient, HttpHeaders } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';  // Import this if using RxJS 7+ or above
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NytApiService {
  
  private apiUrl = environment.apiURL + '/NYTimes';

  constructor(private http: HttpClient) { }


  async fetchStories(apiKey: string): Promise<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    const body = { apiKey: apiKey };

    try {
      const response = await firstValueFrom(
        this.http.post<any>(`${this.apiUrl}/fetch-stories`, body, { headers: headers })
      );
      return response;  
    } catch (error) {
      throw error;  
    }
  }


  async getStoredStories(): Promise<any> {
    try {
      const response = await firstValueFrom(
        this.http.get<any>(`${this.apiUrl}/get-stories`)
      );
      debugger
      return response; 
    } catch (error) {
      throw error;  
    }
  }
}
