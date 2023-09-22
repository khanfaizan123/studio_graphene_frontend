import { Component, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-prdoct',
  templateUrl: './prdoct.component.html',
  styleUrls: ['./prdoct.component.css']
})
export class PrdoctComponent {

  @Input() title: any;
  @Input() desc:any;
  @Input() image:any;
  @Input() price:any;


}
