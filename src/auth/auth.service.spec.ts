import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { getRepositoryToken } from '@nestjs/typeorm';

describe('AuthService', () => {
  let service: AuthService;

  const mockUsersRepository = {};

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        //   , {
        //   // provide: getRepositoryToken(Auth),
        //   useValue: {mockAuthService()}
        // }
      ],
    }).compile();

    service = module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
