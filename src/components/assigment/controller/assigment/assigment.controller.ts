import { Controller, Param, Post } from '@nestjs/common';
import { APIResponse } from 'src/interface/apiResponse/apiresponse.interface';
import { Assigment } from '../../entity/assigment.entity';
import { AssigmentService } from '../../service/assigment/assigment.service';

@Controller('assigment')
export class AssigmentController {
    constructor(private assigmentService:AssigmentService){
    }

    @Post('getAssigmentData/:id')
    async getDataByID(@Param('id') id:number): Promise<APIResponse|null> {
     const data=await this.assigmentService.getDataByID(id);

     if(!data){
        return {
            status_code:200,
            erorr:false,
            message:" Assigment data not found #${id}",
            data:null,
        }
     }
     return {
         status_code:200,
         erorr:false,
         message:"success",
         data:data,
     }
    }
}
