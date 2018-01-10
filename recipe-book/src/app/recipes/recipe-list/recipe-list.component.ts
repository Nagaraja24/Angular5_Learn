import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model'
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'This is a simply Test', 'http://cdn2.stylecraze.com/wp-content/uploads/2014/11/4.-Butter-Chicken-Recipe-By-Sanjeev-Kapoor.jpg'),
    new Recipe('Test Recipe', 'This is a simply Test', 'http://cdn2.stylecraze.com/wp-content/uploads/2014/11/4.-Butter-Chicken-Recipe-By-Sanjeev-Kapoor.jpg'),
    new Recipe('Test Recipe', 'This is a simply Test', 'http://cdn2.stylecraze.com/wp-content/uploads/2014/11/4.-Butter-Chicken-Recipe-By-Sanjeev-Kapoor.jpg')
  ]

  constructor() { }

  ngOnInit() {
  }

}
