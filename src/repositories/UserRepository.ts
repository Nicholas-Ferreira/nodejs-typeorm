
import { EntityRepository, Repository } from 'typeorm';
import User from '@entity/User';

@EntityRepository(User)
class UsersRepository extends Repository<User> {
  public async getAniversariantes(): Promise<any> {
    // TODO
  }
}

export default new UsersRepository();