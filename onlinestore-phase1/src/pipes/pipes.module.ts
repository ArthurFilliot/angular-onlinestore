import { RangePipe } from './range.pipe';
import { NgModule } from "@angular/core";
import { LenPipe } from "./len.pipe";
import { CompareToPipe } from "./compareto.pipe";

@NgModule({
  declarations: [
    LenPipe, 
    RangePipe,
    CompareToPipe
  ],
  imports: [],
  exports: [
    LenPipe,
    RangePipe,
    CompareToPipe
  ]
})

export class PipesModule {}