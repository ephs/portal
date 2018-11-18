import { Component, OnInit, Input } from '@angular/core';
import { Link } from '../link';
import { Category } from '../category';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

	@Input() category: Category;

  constructor() { }

  ngOnInit() {
  }

}
