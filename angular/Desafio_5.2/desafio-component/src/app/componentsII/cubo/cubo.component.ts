import { Template } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cubo',
  templateUrl: './cubo.component.html',
  styleUrls: ['./cubo.component.css']
  

})
export class CuboComponent implements OnInit {

  valor: number = 0;


  constructor(private router:Router) { }
    
    

  ngOnInit(): void {
   
  } 

  valorcubo(){
    this.router.navigate(['/componente-filho']), { queryParams: { 'valorcubo':this.valorcubo } };  
  }

}
