import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: 'server.component.html',
    styles: [`
        .online {
            color: white;
        }
    `]
    // template: `
    //     <h1> Hello Server </h1>
    // `
})
export class ServerComponent {

    serverId: number = 10;
    serverStatus: string = 'offline';

    constructor(){
        this.serverStatus = Math.random() > 0.5? 'offline': 'online';
    }

    getServerStatus(){
        return this.serverStatus;
    }

    getColor(){

        return this.serverStatus === 'online' ? 'green':'red';
    }


}