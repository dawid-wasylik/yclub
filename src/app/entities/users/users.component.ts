import { Component, OnInit } from '@angular/core';
import { Logger } from '@app/@shared';
import { UsersService } from './users.service';
import { ConfirmationService } from 'primeng/api';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  log = new Logger('[Article]');
  data: any;
  loading = true;

  constructor(
    private route: ActivatedRoute,
    private service: UsersService,
    private router: Router,
    private confirmationService: ConfirmationService
  ) {}

  ngOnInit(): void {
    this.service.setUrl('auth');
    this.getUsers();
  }
  getUsers(): void {
    this.loading = true;
    this.service.getUsers().subscribe((resp) => {
      this.data = resp.body;
      this.loading = false;
    });
  }
  confirm(event: any, idUser: number, active: number) {
    this.confirmationService.confirm({
      target: event.target,
      acceptLabel: 'Tak',
      rejectLabel: 'Nie',
      message: 'Czy napewno chcesz archiwizować użytkownika?',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.service.updateUser({ active: !active }, idUser).subscribe(() => {
          this.getUsers();
        });
      },
      reject: () => {
        //reject action
      },
    });
  }

  openDialog(): void {
    this.router.navigate(['new'], { relativeTo: this.route });
  }
}
