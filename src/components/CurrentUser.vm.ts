import * as ioc from './../IoC/IoC-public';
import { iUser } from './../services/types/iUser';
import { UsersService } from './../services/Users.service';
import { action, observable } from 'mobx';

@ioc.bindToSelf
export class CurrentUserVM {
    
    private usersService: UsersService;

    @observable
    public currentUser: iUser;

    constructor(@ioc.inject(UsersService) usersService: UsersService){
        this.usersService = usersService;
        this.loadCurrentUser();
    }

    @action
    private async loadCurrentUser(){
        this.currentUser = await this.usersService.getCurrentUser();
    }

}
