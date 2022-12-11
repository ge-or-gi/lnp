/** @format */

import {Component, Input, Output, EventEmitter} from '@angular/core';
import {UserEntity} from '../../models/UsersEntity';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent {
  @Input() user: UserEntity | undefined;
  @Output() onUserSelect = new EventEmitter<UserEntity>()
}
