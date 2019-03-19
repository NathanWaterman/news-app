import { Component } from '@angular/core';
import { NewsApiService } from './news-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  mArticles:Array<any>;
  mSources:Array<any>;

  constructor(private newsapi:NewsApiService){
    console.log('app component constructor called');
  }

  ngOnInit(){
    //load articles
    this.newsapi.initArticles().subscribe(data => {
      this.mArticles = data['articles'];
      // console.log(this.mArticles);
    });

    //load news sources
    this.newsapi.initSources().subscribe(data => {
      this.mSources = data['sources'];
      console.log(this.mSources);
    });
  }

  searchArticles(source){
    this.newsapi.getArticlesByID(source).subscribe(data => this.mArticles = data['articles']);
    console.log('selected source is :' + source);
  }

}
