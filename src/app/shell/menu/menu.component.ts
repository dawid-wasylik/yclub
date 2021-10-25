import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  items: MenuItem[] = [];

  constructor() {}

  ngOnInit(): void {
    this.items = [
      {
        label: 'Dashboard',
        icon: 'pi pi-th-large',
        url: 'home',
      },
      {
        label: 'Artykuły',
        icon: 'pi pi-list',
        url: 'article',
      },
      {
        label: 'Użytkownicy',
        icon: 'pi pi-users',
        url: 'users',
      },
      {
        label: 'Zgłoszenia',
        icon: 'pi pi-inbox',
        url: 'orders',
      },
      {
        label: 'Statystyki',
        icon: 'pi pi-chart-bar',
        url: 'statistics',
      },
      {
        label: 'Obecności',
        icon: 'pi pi-clock',
        url: 'presence',
      },
    ];
  }
}
