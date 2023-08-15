import { News } from 'src/models/news.model';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { NotificationService } from 'src/services/notification.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
  news: Observable<News[]>;
  constructor(private notificationService: NotificationService) {}

  ngOnInit() {
    this.getNews();
  }

  getNews() {
    this.news = this.notificationService.getNewsData();
  }

  unread(item){}
}
