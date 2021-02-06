import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {
  @Output() selectCategory = new EventEmitter();

  categoryList = [
    'WordPress',
    'HTML5',
    'SASS',
    'CSS3',
    'Angular',
    'JavaScript'
  ];

  constructor() {}

  onClick(value) {
    this.selectCategory.emit(value);
  }

  ngOnInit() {

  }

}
