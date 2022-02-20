import PizzaSize from "./pizza-size";
import Topping from "./topping";

export default class Order{
    toppings:Topping[];
    size:PizzaSize;
    total:number=0;
}