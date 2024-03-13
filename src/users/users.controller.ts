import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller('users')
export class UsersController {
    // get all
    @Get()
    getAllUsers() {
        return ['sample all data'];
    }

    // get by id
    @Get(':id')
    getUsersById(@Param('id') id: number) {
        return `the get by id is: ${id}`;
    }

    // post
    @Post()
    createAll() {
        return 'post all';
    }

    // put by id
    @Put(':id')
    updateById(@Param('id') id: number) {
        return { putId: `the put id is: ${id}` };
    }

    // delete by id
    @Delete(':id')
    deleteById(@Param('id') id: number) {
        return [{deleteID: id}];
    }

}
