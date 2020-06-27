import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllPokemonsComponent } from './pages/all-pokemons/all-pokemons.component';
import { MainComponent } from './pages/main/main.component';
import { HeaderComponent } from './pages/header/header.component';
import { FooterComponent } from './pages/footer/footer.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
 
const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
{path: 'home', component:MainComponent},
{path: 'Allpokemons', component:AllPokemonsComponent},
{path: 'NotFound' , component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
