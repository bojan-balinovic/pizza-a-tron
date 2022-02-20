import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Order from '../../models/order';

@Component({
  selector: 'app-configurator',
  templateUrl: './configurator.component.html',
  styleUrls: ['./configurator.component.css']
})
export class ConfiguratorComponent implements OnInit {
  order:Order=new Order();
  
  constructor(
    private router:Router
    ) { }

  ngOnInit(): void {
  }
  async logout(){
    await this.router.navigate(['/login'])
  }
}
