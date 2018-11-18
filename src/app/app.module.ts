import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { CategoryComponent } from './category/category.component';
import { LinkPanelComponent } from './link-panel/link-panel.component';
import { Link } from './link';
import { Category } from './category';

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    LinkPanelComponent,
  ],
  imports: [
	  BrowserModule,
	  BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
