import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { NytApiService } from '../service/services/nyt-api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,  
    FormsModule,  
    HttpClientModule,
    CommonModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers:[NytApiService]
})
export class AppComponent {
  title = 'NytApiClient';
}
