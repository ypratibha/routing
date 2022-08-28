import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit, OnDestroy {
  user: { id: number; name: string };
  private pramsSubsc$: Subscription;

  constructor(private actRtr: ActivatedRoute) {}

  ngOnInit() {
    this.user = {
      id: this.actRtr.snapshot.params['id'],
      name: this.actRtr.snapshot.params['name'],
    };
    this.pramsSubsc$ = this.actRtr.params.subscribe((parm: Params) => {
      this.user.id = parm['id'];
      this.user.name = parm['name'];
    });
  }

  ngOnDestroy() {
    this.pramsSubsc$.unsubscribe();
  }
}
