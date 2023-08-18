import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from 'src/app/services/postsService/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent {
  posts: any[] = [];
  chosenPost: any;

  constructor(
    private postsService: PostsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const userId = this.route.snapshot.params['userId'];
    this.fetchSingleUserPosts(userId);
  }

  fetchSingleUserPosts = (userId: number) => {
    this.postsService.getAllPosts().subscribe(
      (posts) => {
        this.posts = posts.filter((post) => post.userId == userId);
      },
      (error) => {
        console.error('An error occurred:', error);
      }
    );
  };

  handleChoosePost = (item: any) => {
    this.chosenPost = item;
  };
}
