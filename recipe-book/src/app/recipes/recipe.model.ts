export class Recipe {
   /*
    This is a model class to hold the Recipe data
   */
  
    public name: string;
    public description: string;
    public imagePath: string;

    constructor(name:string, desc: string, imaegPath: string){
        this.name = name;
        this.description = desc;
        this.imagePath = imaegPath;
    }
    
}