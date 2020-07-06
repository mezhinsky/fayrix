import { Component, OnInit } from '@angular/core';
import { LayoutStoreFacade } from '../../../../root-store/facades/layout.facade';

@Component({
  selector: 'app-basic-layout',
  templateUrl: './basic-layout.component.html',
  styleUrls: ['./basic-layout.component.scss']
})
export class BasicLayoutComponent implements OnInit {

  constructor(private layoutStoreFacade: LayoutStoreFacade) { }

  ngOnInit(): void {
  }

}
