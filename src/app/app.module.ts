import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllPokemonsComponent } from './pages/all-pokemons/all-pokemons.component';
import { MainComponent } from './pages/main/main.component';
import {MDCCheckbox} from '@material/checkbox';
import { HeaderComponent } from './pages/header/header.component';
import { FooterComponent } from './pages/footer/footer.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
 
 
@NgModule({
  declarations: [
    AppComponent,
    AllPokemonsComponent,
    MainComponent,
    HeaderComponent,
    FooterComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
