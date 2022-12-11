/** @format */

import {Component, Input} from '@angular/core';
import { UserEntity } from '../../models/UsersEntity';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.sass'],
})
export class UserDetailsComponent {
  @Input() user!: UserEntity;
}
