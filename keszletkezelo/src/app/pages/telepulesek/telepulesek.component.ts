import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-telepulesek',
  templateUrl: './telepulesek.component.html',
  styleUrls: ['./telepulesek.component.css']
})
export class TelepulesekComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  listOfData: any = [
    
    {
      key: '1',
      felhasznalonev: 'dev',
      utolsoaktiv: '2022-06-03 10:28:28',
      gazdev:'2018/2019',
      telepules:'Sajókaza',
      fekves:'Belterület',
      hrsz:'123456',
  
    },  {
      key: '1',
      felhasznalonev: 'dev',
      utolsoaktiv: '2022-06-03 10:28:28',
      gazdev:'2018/2019',
      telepules:'Sajókaza',
      fekves:'Belterület',
      hrsz:'123456',
  
    },  {
      key: '1',
      felhasznalonev: 'dev',
      utolsoaktiv: '2022-06-03 10:28:28',
      gazdev:'2018/2019',
      telepules:'Sajókaza',
      fekves:'Belterület',
      hrsz:'123456',
  
    },  {
      key: '1',
      felhasznalonev: 'dev',
      utolsoaktiv: '2022-06-03 10:28:28',
      gazdev:'2018/2019',
      telepules:'Sajókaza',
      fekves:'Belterület',
      hrsz:'123456',
  
    }
    
   
  ];
}
