import PizzaSize from "./pizza-size";
import Topping from "./topping";

export default class Order{
    toppings:Topping[]=new Array<Topping>();
    size:PizzaSize=new PizzaSize();
    get total():number{
        let total=0;
        if(!this.toppings || this.toppings.length==0) return 0;

        this.toppings.forEach(topping=>{
          total+=topping.price;
        })
        return total;
    }
    quantity:number=1;
}