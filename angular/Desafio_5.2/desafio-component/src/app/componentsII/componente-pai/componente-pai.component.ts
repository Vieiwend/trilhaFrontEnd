import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-componente-pai',
  template:""
})

export class ComponentePaiComponent {

  @Input() numeroComponent: number = 0;

  isPar(valor:number):string{
  return valor %2===0?"par":"impar";
  }

} 
