import { Component, OnInit, Output, EventEmitter, ElementRef, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model'
import { ShoppingListService } from '../shopping-list.service'
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
 
  @Output() ingredientAdded = new EventEmitter<Ingredient>();
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  onAddItem(nameInput:HTMLInputElement, amountInput:HTMLInputElement){
    const ingName = nameInput.value;
    const ingAmount = Number(amountInput.value);
    const newIngredient = new Ingredient(ingName, ingAmount);
    this.shoppingListService.addIngredient(newIngredient);
  }

  onAddItemUsingViewChild(){
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmount);
    this.shoppingListService.addIngredient(newIngredient);
  }

}
