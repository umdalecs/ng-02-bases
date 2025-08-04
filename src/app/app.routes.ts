import { Routes } from '@angular/router';
import { CounterPageComponent } from './pages/counter-page/counter-page.component';
import { HeroPageComponent } from './pages/hero-page/hero-page.component';
import { DragonballPage } from './pages/dragonball-page/dragonball-page';
import { DragonballSuperPage } from './pages/dragonball-super-page/dragonball-super-page';

export const routes: Routes = [
  {
    path: '',
    component: CounterPageComponent,
  },
  {
    path: 'hero',
    component: HeroPageComponent,
  },
  {
    path: 'dragonball',
    component: DragonballPage,
  },
  {
    path: 'dragonballsuper',
    component: DragonballSuperPage,
  },
];
