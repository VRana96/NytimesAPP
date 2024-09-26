import { Routes } from '@angular/router';
import { NytApiComponent } from '../app/NytApi/components/nyt-api/nyt-api.component';

export const routes: Routes = [
    {
        path: "",
        component: NytApiComponent
      },
    { path: 'landing', loadChildren: () => import('../app/NytApi/components/nyt-api/nyt-api.component').then(m => m.NytApiComponent)},
];
