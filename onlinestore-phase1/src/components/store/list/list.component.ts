import { Component, OnInit, Input, AfterContentInit, OnChanges, SimpleChanges } from '@angular/core';
import { CategoriesService, Category } from '../../componentsservices.module';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnChanges {

  @Input('categoryid') categoryid;

  category: Category

  nbperpage: number = 5

  currentpage: number = 1

  unid = Math.random()

  constructor(private categoriesService:CategoriesService) { 
    this.category = categoriesService.nullCategory()
    console.log("construct : ")
    console.log(this.category)
  }

  load() {
    this.categoriesService.getData(this.categoryid).subscribe(data => {
      console.log("load")
      console.log(data)
      this.category=data
      console.log(this.category)
    })
  }

  ngOnInit(): void {
    console.log("oninit")
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("changes from list:" + this.unid)
    this.load();
    console.log(this.category)
  }

}
