

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { APIResponse } from 'src/interface/apiResponse/apiresponse.interface';
import { Assigment } from '../../entity/assigment.entity';
import { AssigmentRepository } from '../../repository/assigment.repository';

@Injectable()
export class AssigmentService {
  constructor(
    @InjectRepository(AssigmentRepository)
    private readonly assigmentRepository: AssigmentRepository,
  ) {}

  async getDataByID(id: number): Promise<APIResponse | null> {
    return await this.assigmentRepository.getDataByID(id);
  }
  
}