
import { Role } from '../role';

export class NewUserRequest {
  username: string;
  password: string;
  roles: Array<Role>;
}
