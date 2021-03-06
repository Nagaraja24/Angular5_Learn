import { Component, OnInit } from '@angular/core';
import { ServersService } from '../servers.service';
import { Router, ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};
  serverId: number;
  constructor(private serversService: ServersService, private router: Router,
  private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    // + to convert string to number
    const id = +this.activatedRoute.snapshot.params['id'];
    this.server = this.serversService.getServer(id);
    this.activatedRoute.params.subscribe(
      (params)=>{
        this.server = this.serversService.getServer(+params['id']);
      }
    )
    
  }

  onEdit(){
    //queryParamsHandling: 'preserve' this will keep the old query params in the url when you navigate
    //queryParamsHandling: 'merge' this will override with new one query params in the url when you navigate
    this.router.navigate(['edit'], {relativeTo: this.activatedRoute, queryParamsHandling: 'preserve'});
  }

 }
