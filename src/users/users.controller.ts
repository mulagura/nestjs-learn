import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateUsersDto } from './dto/create-users.dto';
import { UpdateUsersDto } from './dto/update-users.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    constructor(private readonly usersService:UsersService) {}

    // get all
    @Get()
    getAllUsers() {
        // const service = new UsersService();
        return this.usersService.getUserDetails();
    }

    // get by id
    @Get(':id')
    getUsersById(@Param('id') id: number) {
        return `the get by id is: ${id}`;
    }

    // post
    @Post()
    createAll(@Body() createUsersDto: CreateUsersDto) {
        return {
            name: createUsersDto.userName,
            userId: createUsersDto.id
        };
    }

    // put by id
    @Put(':id')
    updateById(@Param('id') id: number, updateUsersDto: UpdateUsersDto) {
        return { 
            putId: `the put id is: ${id}`,
            uname:  updateUsersDto.userName
        };
    }

    // delete by id
    @Delete(':id')
    deleteById(@Param('id') id: number) {
        return [{deleteID: id}];
    }

}
