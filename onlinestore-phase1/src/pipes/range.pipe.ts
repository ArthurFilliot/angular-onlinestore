import {Pipe, PipeTransform} from "@angular/core"

@Pipe({name: 'range'})

export class RangePipe implements PipeTransform {
    transform(value: Array<any>, ...args: any[]) {
        var from = args[0]
        var to =  args[1]
        var step =  args[2]
        return [...Array(~~((to - from) / step) + 1)].map(
            (v, k) => from + k * step
        );
    }
}
