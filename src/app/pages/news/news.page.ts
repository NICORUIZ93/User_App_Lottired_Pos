import { News } from 'src/models/news.model';
import { NewsService } from './../../../services/news.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
  news: Observable<News[]>;
  constructor(private newsService: NewsService) {}

  ngOnInit() {
    this.getNews();
  }

  getNews() {
    this.news = this.newsService.getNewsData();
  }
}
