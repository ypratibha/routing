import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
})
export class ServerComponent implements OnInit {
  server: { id: number; name: string; status: string };

  constructor(
    private serversService: ServersService,
    private actRtr: ActivatedRoute,
    private rtr: Router
  ) {}

  ngOnInit() {
    const id = +this.actRtr.snapshot.params['id'];
    this.server = this.serversService.getServer(id);
    this.actRtr.params.subscribe((par: Params) => {
      this.server = this.serversService.getServer(+par['id']);
    });
  }

  onEdit() {
    this.rtr.navigate(['edit'], {
      relativeTo: this.actRtr,
      queryParamsHandling: 'preserve',
    });
  }
}
