import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AssigmentController } from './controller/assigment/assigment.controller';
import { AssigmentRepository } from './repository/assigment.repository';
import { AssigmentService } from './service/assigment/assigment.service';

@Module({
    imports: [ 
    ],
    controllers: [AssigmentController],
    providers: [AssigmentService,AssigmentRepository],
})

export class AssigmentModule {}

