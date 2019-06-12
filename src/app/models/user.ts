import { Role } from './role';

export class User {
  id: number;
  username: string;
  roles: Array<Role>;
}
