import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { CategoryComponent } from './category/category.component';
import { LinkPanelComponent } from './link-panel/link-panel.component';
import { Link } from './link';
import { Category } from './category';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';


@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    LinkPanelComponent,
  ],
  imports: [
	  BrowserModule,
	  BrowserAnimationsModule,
	  MatTooltipModule,
	  MatButtonModule,
	  MatSlideToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
