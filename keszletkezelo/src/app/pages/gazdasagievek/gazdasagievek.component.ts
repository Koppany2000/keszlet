import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gazdasagievek',
  templateUrl: './gazdasagievek.component.html',
  styleUrls: ['./gazdasagievek.component.css']
})
export class GazdasagievekComponent implements OnInit {

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
