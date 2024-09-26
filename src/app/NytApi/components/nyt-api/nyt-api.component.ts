import { Component, OnInit } from '@angular/core';
import { NytApiService } from '../../../../service/services/nyt-api.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nyt-api',
  standalone: true,
  imports: [ FormsModule,  
    HttpClientModule,
    CommonModule ],
  templateUrl: './nyt-api.component.html',
  styleUrl: './nyt-api.component.scss',
  providers:[NytApiService]
})
export class NytApiComponent implements OnInit {
  apiKey: string = '';
  stories: any[] = [];
  errorMessage: string = '';
  successMessage: string = '';

  constructor(private nytApiService: NytApiService) { }

  ngOnInit(): void {
    this.loadStoredStories();
  }


  async  submitApiKey() {
    if (this.apiKey) {
      try {
        const response = await this.nytApiService.fetchStories(this.apiKey);
        this.successMessage = 'Data fetched successfully!';
        await this.loadStoredStories(); 
      } catch (error) {
        this.errorMessage = 'Failed to fetch data. Please check the API key or try again later.';
      }
    } else {
      this.errorMessage = 'API key is required!';
    }
  }

 
  async  loadStoredStories() {
    try {
      const response = await this.nytApiService.getStoredStories();
      this.stories = response;  
    } catch (error) {
      this.errorMessage = 'Failed to load stories from the database.';
    }
  }
}
