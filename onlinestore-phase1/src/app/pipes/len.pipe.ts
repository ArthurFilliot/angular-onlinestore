import {Pipe, PipeTransform} from "@angular/core"

@Pipe({name: 'len'})

export class LenPipe implements PipeTransform {
    transform(arr: Array<any>) {
        return arr ? arr.length : '0'
    }
}