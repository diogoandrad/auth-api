import bcrypt from 'bcrypt';
import { IUserRepository } from '../../user/repositories/IUserRepository';
import { jwtSign } from '../repositories/AuthRepository';
import { LoginDto } from '../dtos/LoginDto';

export class LoginUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(data: LoginDto, response) {
    const email = data.email;
    const user = await this.userRepository.findOne({ email });
    if (user) {
      const validPassword = await bcrypt.compare(data.password, user.password);
      if (validPassword) {
        const token = jwtSign({ userId: user.id });
        return response.status(200).json({ accessToken: token });
      } else {
        return response.status(401).json({ error: 'Invalid password' });
      }
    } else {
      return response.status(401).json({ error: 'User does not exist' });
    }
  }
}
