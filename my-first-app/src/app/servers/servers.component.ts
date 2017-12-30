import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'app-servers',
  //selector: '[app-servers]',   -- Attribute selector
  // selector: '.app-servers',   --> Class selector
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreateStatus = 'No Server Created';
  serverName = '';
  isServerCreated = false;
  servers = ['Test Server', 'Test Server2'];

  constructor() { 
    setInterval(()=>{
      this.allowNewServer = true;
      //console.log(this.allowNewServer);
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer(){
    this.serverCreateStatus = "Server was created!, Name is " + this.serverName;
    this.isServerCreated = true;
    this.servers.push(this.serverCreateStatus);
  }

  onUpdateServerName(event:Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
