import { Test, TestingModule } from '@nestjs/testing';
import { InstructorsService } from './InstructorsService';

describe('InstructorsService', () => {
  let service: InstructorsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InstructorsService],
    }).compile();

    service = module.get<InstructorsService>(InstructorsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
