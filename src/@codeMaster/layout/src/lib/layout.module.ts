import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layout-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HeaderComponent } from './modules/header/view/header.component';
import { HeaderContainer } from './modules/header/header.container';

import { FooterComponent } from './modules/footer/view/footer.component';
import { FooterContainer } from './modules/footer/footer.container';

import { UiModules } from '../../../ui/src/lib/ui-modules';

import { HomeComponent } from './modules/home/view/home.component';
import { HomeContainer } from './modules/home/home.container';
import { HomeRoutingModule } from './modules/home/home-routing.module';


@NgModule({
  declarations: [
    HeaderComponent,
    HeaderContainer,
    
    FooterComponent,
    FooterContainer,

    HomeComponent,
    HomeContainer
  ],

  imports: [
    BrowserModule,
    CommonModule,
    LayoutRoutingModule,
    UiModules,
    HomeRoutingModule,
    
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ],
})
export class LayoutModule { }
