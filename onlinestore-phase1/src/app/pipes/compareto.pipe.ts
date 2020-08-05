import {Pipe, PipeTransform} from "@angular/core"

@Pipe({name: 'compareto'})

export class CompareToPipe implements PipeTransform {
    transform(this: number, that: number, direction: number, checkequals?: boolean) {
        switch(direction) {
            case -1: return (checkequals && this==that) ? true : this<that;
            case 1:  return (checkequals && this==that) ? true : this>that;
        }
    }
}