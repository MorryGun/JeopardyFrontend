import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSliderModule } from '@angular/material/slider';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router'
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTableModule } from '@angular/material/table';

import { AppComponent } from './app.component';
import { ApiService } from './api.service';
import { AuthInterceptor } from './auth.interceptor';
import { HomeComponent } from './home.component';
import { NavComponent } from './nav.component';
import { RegisterComponent } from './register.component';
import { LoginComponent } from './login.component';
import { PlayerComponent } from './player.component';
import { PlayersComponent } from './players.component';

const routes = [
  { path: '', component: HomeComponent },
  { path: 'player', component: PlayerComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    RegisterComponent,
    LoginComponent,
    PlayerComponent,
    PlayersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    FormsModule,
    HttpClientModule,
    MatListModule,
    RouterModule.forRoot(routes),
    MatToolbarModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatExpansionModule,
    MatTableModule
  ],
  providers: [
    ApiService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
