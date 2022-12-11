/** @format */

import {Component} from '@angular/core';
import { User } from '../../models/CampaignEntity';
import {generateSampleData, UserEntity} from '../../models/UsersEntity';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent {
  users: UserEntity[] = generateSampleData();
  user!: UserEntity;
  isSelected = 101;
  handleClick(index: number){
    this.isSelected = index;
  }
  handleUserSelect(user: UserEntity) {
    this.user = user;
  }
}
