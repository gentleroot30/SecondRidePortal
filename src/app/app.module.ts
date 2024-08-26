import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AboutComponent } from './components/about/about.component';
import { CarDetailsComponent } from './components/car-details/car-details.component';
import { ContactComponent } from './components/contact/contact.component';
import { CustomerComponent } from './components/customer/customer.component';
import { AddVehicleComponent } from './components/dealer/add-vehicle/add-vehicle.component';
import { DealerComponent } from './components/dealer/dealer.component';
import { DeleteVehicleComponent } from './components/dealer/delete-vehicle/delete-vehicle.component';
import { EditVehicleComponent } from './components/dealer/edit-vehicle/edit-vehicle.component';
import { RegisterComponent } from './components/register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    CarDetailsComponent,
    ContactComponent,
    AboutComponent,
    CustomerComponent,
    DealerComponent,
    AddVehicleComponent,
    EditVehicleComponent,
    DeleteVehicleComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule
  

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
