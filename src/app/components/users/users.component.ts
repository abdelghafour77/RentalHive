import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './users.component.html',
  styles: ``
})
export class UsersComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe((data: User[]) => {
      this.users = data;
    }
    );
  }

  deleteUser(id: any) {
    this.userService.deleteUser(id).subscribe(res => {
      this.users = this.users.filter(item => item.id !== id);
      console.log('User deleted successfully!');
    });
  }

  addUser(user: User) {
    this.userService.addUser(user).subscribe((data: any) => {
      this.users.push(data);
    });
  }


}