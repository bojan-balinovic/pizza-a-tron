import { ValueConverter } from "@angular/compiler/src/render3/view/template";
import Discount from "../../configurator/models/discount";
import PizzaSize from "../../configurator/models/pizza-size";
import Topping from "../../configurator/models/topping";
import ShippingInformation from "./shippingInformation";

export default class Order{
    toppings:Topping[]=new Array<Topping>();
    size:PizzaSize=new PizzaSize();
    get total():number{
        let total=0;
        if(!this.toppings || this.toppings.length==0) return 0;

        this.toppings.forEach(topping=>{
          total+=topping.price;
        })
        if(this.discount && this.discount.value<0){
          total+=this.discount.value;
        }
        return total;
    }
    quantity:number=1;
    shippingInformation:ShippingInformation;
    discount:Discount;
}