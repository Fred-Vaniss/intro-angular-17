import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-routing-params',
  templateUrl: './routing-params.component.html',
  styleUrl: './routing-params.component.scss'
})
export class RoutingParamsComponent implements OnInit{

  curRoute! : any;
  curParam! : any;
  curQueryParam! : any;

  constructor(private _activatedRoute : ActivatedRoute) {}

  ngOnInit() {
    this.curQueryParam = this._activatedRoute.snapshot.queryParams;
    this.curParam = this._activatedRoute.snapshot.params['id'];

    console.log(this.curQueryParam)
    console.log(this.curParam)
  }

}
