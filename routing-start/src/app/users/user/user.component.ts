import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy{
  user: {id: number, name: string};
  paramSubscription: Subscription

  constructor(private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.user = {
    id: this.activeRoute.snapshot.params['id'],
    name: this.activeRoute.snapshot.params['name']
    };

    //Below code refresh the page when new router parameters are send
    this.paramSubscription =  this.activeRoute.params.
    subscribe(
      (params: Params)=>{
        this.user.id = params['id'];
        this.user.name = params['name'];
      }
    );

  }

  ngOnDestroy(){
    // Angular does it for us, no need to add the below line
    //If we create our own subscription, we need to perform below action
    this.paramSubscription.unsubscribe();
    console.log("params unsubscribed");
  }

}
