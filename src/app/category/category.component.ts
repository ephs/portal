import { Component, OnInit, Input } from '@angular/core';
import { Link } from '../link';
import { Category } from '../category';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTooltipModule} from '@angular/material/tooltip';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

	@Input() category: Category;
	@Input() compact;

  constructor() { }

  ngOnInit() {
  }

}
