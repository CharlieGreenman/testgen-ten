import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from "./home/home.component";
import { HomeRoutingModule } from "./routing/home-routing.module";
import { HomeComponent } from "./home/home.component";

@NgModule({
  imports: [CommonModule, HomeRoutingModule],
  exports: [HomeComponent, HomeComponent],
  declarations: [HomeComponent, HomeComponent]
})
export class HomeModule { }
