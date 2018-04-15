import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Chocolate Cake', 'Very good Chocolate Cake',
    'https://assets.bonappetit.com/photos/59c924dc32e4b84f5a9e437a/16:9/w_2560,c_limit/1017%20WEB%20WEEK1060.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
