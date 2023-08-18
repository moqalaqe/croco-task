import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/userService/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent {
  user: any;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    const userId = this.route.snapshot.params['id'];
    this.fetchSingleUser(userId);
  }

  fetchSingleUser = (userId: number) => {
    this.userService.getUserById(userId).subscribe(
      (user) => {
        this.user = user;
      },
      (error) => {
        console.error('An error occurred:', error);
      }
    );
  };

  handleClick = (id: number) => {
    this.router.navigate(['/posts', id]);
  };
}
