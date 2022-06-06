import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eszkoz-beszerzes',
  templateUrl: './eszkoz-beszerzes.component.html',
  styleUrls: ['./eszkoz-beszerzes.component.css']
})
export class EszkozBeszerzesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  widthConfig = ['100px','100px','100px','100px','100px','100px','100px','100px','100px','100px','100px','100px','100px'];

  listOfData: any = [
    
    {
      key: '1',
      felhasznalonev: 'dev',
      utolsoaktiv: '2022-06-03 10:28:28',
      gazdev:'2018/2019',
      telepules:'Sajókaza',
      fekves:'Belterület',
      hrsz:'123456',
      nagysag:'1',
      muveletszemely:'Balogh',
      muvelet:'permetezés',
      bermunka:'nem',
      munkadij:'1000Ft',
      munkadijafa:'0%',
      munkadijbrutto:'1000Ft'
    },{
      key: '1',
      felhasznalonev: 'dev',
      utolsoaktiv: '2022-06-03 10:28:28',
      gazdev:'2018/2019',
      telepules:'Sajókaza',
      fekves:'Belterület',
      hrsz:'123456',
      nagysag:'1',
      muveletszemely:'Balogh',
      muvelet:'permetezés',
      bermunka:'nem',
      munkadij:'1000Ft',
      munkadijafa:'0%',
      munkadijbrutto:'1000Ft'
    },
   
  ];
}
