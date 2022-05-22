import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testes-pipe',
  templateUrl: './testes-pipe.component.html',
  styleUrls: ['./testes-pipe.component.css']
})
export class TestesPipeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  evento: any={
    data: '21.10.2021',
    preco: '35.00',
    vendidos: '0.8465',
  }
}
