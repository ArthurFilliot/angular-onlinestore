import { Component, OnInit, AfterViewInit, OnChanges, SimpleChanges, AfterContentInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements AfterContentInit  {

  id = 0

  constructor(private route: ActivatedRoute) { }

  ngAfterContentInit(): void {
    this.route.queryParamMap.subscribe(params => this.id = Number.parseInt(params.get('id')))
  }

}
