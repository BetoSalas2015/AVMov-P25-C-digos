import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { HeroesComponent } from "./components/heroes/heroes.component";
import { AboutComponent } from "./components/about/about.component";

const app_routes: Routes = [
   { path: 'home', component: HomeComponent },
   { path: 'heroes', component: HeroesComponent },
   { path: 'about', component: AboutComponent },
   { path: '**', pathMatch: "full", redirectTo: 'home'}
];

export const app_routing = RouterModule.forRoot(app_routes);
