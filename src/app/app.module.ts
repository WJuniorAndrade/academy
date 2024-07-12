import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { TrainingModule } from '../@codeMaster/training/src/lib/training.module';
import { TrainingRoutingModule } from '../@codeMaster/training/src/lib/training-routing.module';
import { LayoutModule } from '../@codeMaster/layout/src/lib/layout.module';
import { LayoutRoutingModule } from '../@codeMaster/layout/src/lib/layout-routing.module';
import { UiModules } from '../@codeMaster/ui/src/lib/ui-modules';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    
    TrainingModule,
    TrainingRoutingModule,

    LayoutModule,
    LayoutRoutingModule,

    UiModules,

    HttpClientModule
  ],
  
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
