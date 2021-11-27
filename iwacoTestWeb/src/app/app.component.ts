import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'iwacoTestWeb';
  values = [
    {title : 'Leadership', description : 'We are the Reference to our customers, our partners and the moroccan market for distribution, to maintain out leading position, it requires motivation, vision, innovation and integrity'},
    {title : 'Commitment', description : 'We are the Reference to our customers, our partners and the moroccan market for distribution, to maintain out leading position, it requires motivation, vision, innovation and integrity'},
    {title : 'Excellence', description : 'We are the Reference to our customers, our partners and the moroccan market for distribution, to maintain out leading position, it requires motivation, vision, innovation and integrity'},
    {title : 'Solidarity', description : 'We are the Reference to our customers, our partners and the moroccan market for distribution, to maintain out leading position, it requires motivation, vision, innovation and integrity'}
  ];
}
