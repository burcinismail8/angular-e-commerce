import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'categories-list',
  templateUrl: './categories-list.component.html',
})
export class CategoriesListComponent implements OnInit {
  categories = [
    {
      id: 1,
      name: 'cateory-1',
      icon: 'icon-1',
    },
    {
      id: 2,
      name: 'cateory-2',
      icon: 'icon-2',
    },
    {
      id: 3,
      name: 'cateory-3',
      icon: 'icon-3',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
