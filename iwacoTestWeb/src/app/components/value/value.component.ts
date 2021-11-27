import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.css']
})
export class ValueComponent implements OnInit {

  @Input() title = 'Leadership';
  @Input() desc = 'We are the Reference to our customers, our partners and the moroccan market for distribution, to maintain out leading position, it requires motivation, vision, innovation and integrity';
  isShown = false;
  constructor() { }

  ngOnInit(): void {
  }

  changeShownValue() {
    this.isShown = !this.isShown;
  }
}
