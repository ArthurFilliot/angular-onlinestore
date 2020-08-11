import { Component, OnInit, AfterViewInit, OnChanges, SimpleChanges, AfterContentInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {

  @Input("id") public id = 0 

  constructor() { }

  ngAfterContentInit(): void {
    //this.route.queryParamMap.subscribe(params => this.id = Number.parseInt(params.get('id')))
  }

}
