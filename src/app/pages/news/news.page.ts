import { News } from 'src/models/news.model';
import { NewsService } from './../../../services/news.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
  news: News[] = [];
  constructor(private newsService: NewsService) {}

  ngOnInit() {
    this.getNews();
  }

  getNews() {
    this.newsService.getNewsData().subscribe((data) => {
      this.news = data;
      console.log(data);
    });
  }
}
