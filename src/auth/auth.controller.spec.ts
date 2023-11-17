import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

describe('AuthController', () => {
  let controller: AuthController;

  //entire mock implementation
  const mockAuthService = {
    create: jest.fn((dto) => {
      return {
        id: Date.now(),
        ...dto,
      };
    }),
    update: jest.fn((id, dto) => ({
      id,
      ...dto,
    })),
  };

  beforeEach(async () => {
    // creating a fake module on the fly
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [AuthService],
    })
      .overrideProvider(AuthService)
      .useValue(mockAuthService)
      .compile();

    controller = module.get<AuthController>(AuthController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should create a user ', async () => {
    const dto = { name: 'adeyemi' };
    const res = await controller.create({ name: 'Adeyemi' });
    expect(res).toBeDefined();
    expect(res).toEqual({
      id: expect.any(Number),
      name: 'Adeyemi',
    });
    // expect(mockAuthService.create).toHaveBeenCalledWith({ name: 'Adeyemi' });
  });

  it('should update a user', () => {
    const dto = { name: 'adeyemi' };

    expect(controller.update('1', dto)).toEqual({
      id: 1,
      ...dto,
    });
    expect(mockAuthService.update).toHaveBeenCalled();
  });
});
