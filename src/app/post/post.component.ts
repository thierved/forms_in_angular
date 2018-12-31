import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {
  posts: any[];
  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {
    http.get(this.url)
        .subscribe(response => {
          this.posts = response as any[];
    });
  }

  createPost(input: HTMLInputElement) {
    const post = { title: input.value };
    this.http.post(this.url, JSON.stringify(post))
        .subscribe(response => {
          post['id'] = response['id'];
          this.posts.splice(0, 0, post);
        });
  }
}
