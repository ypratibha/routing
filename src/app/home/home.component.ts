import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private rtr: Router, private auth: AuthService) {}

  ngOnInit() {}

  onLoadServers() {
    //complex code
    this.rtr.navigate(['/servers']);
  }

  onLoadServer1(id: number) {
    //complex code
    this.rtr.navigate(['/servers', id, 'edit'], {
      queryParams: { alloEdit: '1' },
      fragment: 'loading',
    });
  }

  onLogin() {
    this.auth.login();
  }

  onLogout() {
    this.auth.logout();
  }
}
