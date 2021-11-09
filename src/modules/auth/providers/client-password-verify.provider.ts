import {Provider} from '@loopback/context';
import {repository} from '@loopback/repository';
import {VerifyFunction} from 'loopback4-authentication';

import {AuthClientRepository} from '../../../repositories';
import {UserRepository} from '../../../repositories';
export class ClientPasswordVerifyProvider
  implements Provider<VerifyFunction.OauthClientPasswordFn>
{
  constructor(
    @repository(AuthClientRepository)
    public authClientRepository: AuthClientRepository,
    @repository(UserRepository)
    public userRepo: UserRepository,
  ) {}

  value(): VerifyFunction.OauthClientPasswordFn {
    return async (clientId: string, clientSecret: string) => {
      return this.authClientRepository.findOne({
        where: {
          clientId,
          clientSecret,
        },
      });
    };
  }
}
