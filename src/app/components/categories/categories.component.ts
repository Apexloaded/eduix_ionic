import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {

  public categories = [
    {
      id: '1',
      cat: 'Development',
      icons: 'code-slash-outline'
    },
    {
      id: '2',
      cat: 'Finance & Accounting',
      icons: 'cash-outline'
    },
    {
      id: '3',
      cat: 'Office Productivity',
      icons: 'newspaper-outline'
    },
    {
      id: '4',
      cat: 'Design',
      icons: 'eyedrop-outline'
    },
    {
      id: '5',
      cat: 'Lifestyle',
      icons: 'bowling-ball-outline'
    },
    {
      id: '6',
      cat: 'Health & Fitness',
      icons: 'medkit-outline'
    },
    {
      id: '7',
      cat: 'Teaching & Academics',
      icons: 'reader-outline'
    },
    {
      id: '8',
      cat: 'IT & Software',
      icons: 'laptop-outline'
    },
    {
      id: '9',
      cat: 'Business',
      icons: 'bar-chart-outline'
    },
    {
      id: '10',
      cat: 'Personal Development',
      icons: 'hand-right-outline'
    },
    {
      id: '11',
      cat: 'Marketing',
      icons: 'color-filter-outline'
    },
  ];
  
  constructor(private ModalCtrl: ModalController) { }

  ngOnInit() {}

  public closeModal() {
    this.ModalCtrl.dismiss();
  }
}
