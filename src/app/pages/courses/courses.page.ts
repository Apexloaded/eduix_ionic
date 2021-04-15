import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SearchCoursesComponent } from 'src/app/components/search-courses/search-courses.component';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.page.html',
  styleUrls: ['./courses.page.scss'],
})
export class CoursesPage implements OnInit {
  public lessons = [
    {
      id: '1',
      image: 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y',
      post: 'Learn To Create AI Assistant (JARVIS).',
      author: 'Joel Jeffery',
      duration: '4 hours, 20 min',
      date: '2010-08-17 12:09:36'
    },
    {
      id: '2',
      image: 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y',
      post: 'React Native Expo from Beginner to Pro',
      author: 'Joel Jeffery',
      duration: '2 hours, 45 min',
      date: '2010-06-17 01:09:36'
    },
    {
      id: '3',
      image: 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y',
      post: 'The Complete Full-Stack Javascript',
      author: 'Joel Jeffery',
      duration: '1 hour, 20 min',
      date: '2010-06-17 01:09:36'
    }
  ];

  constructor(private ModalCtrl: ModalController) { }

  ngOnInit() {
  }

  public openSearch() {
    this.ModalCtrl.create({
      component: SearchCoursesComponent
    }).then(el => {
      el.present();
    });
  }
}
