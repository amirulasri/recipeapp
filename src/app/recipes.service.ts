import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  public recipesitem: any = [];
  constructor() {
    this.recipesitem = [
      {
        recipename: "burger",
        about: "The best fast food nowadays.",
        ingredients: [
          {item: "item 1"},
          {item: "item 2"},
          {item: "item 3"},
          {item: "item 4"},
        ],
        instruction: [
          {step: "step 1"},
          {step: "step 2"},
          {step: "step 3"},
          {step: "step 4"},
        ],
        video: "assets/",
        images: [
          {item: "assets/"},
          {item: "assets/"},
          {item: "assets/"},
          {item: "assets/"},
        ],
      },
    ]
  }
}
