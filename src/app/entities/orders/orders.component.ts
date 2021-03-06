import { Component, OnInit } from '@angular/core';
import { Logger } from '@app/@shared';
import { OrdersService } from './orders.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PrimeNGConfig } from 'primeng/api';
import { DialogModule } from 'primeng/dialog';
import { PermService } from '@app/auth/perm.service';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent implements OnInit {
  log = new Logger('[Orders]');
  data: any;
  form!: FormGroup;
  formAnswer!: FormGroup;
  loading = true;
  display = false;
  displayNewApplication = false;
  formLink = 'localhost:4200/submitYourapplication';
  order: any;
  constructor(
    private service: OrdersService,
    private primengConfig: PrimeNGConfig,
    private formBuilder: FormBuilder,
    private permSerivce: PermService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    this.service.setUrl('contactplayer');
    this.createFormAnswer();
    this.createForm();
    this.getOrders();
  }
  getOrders(): void {
    this.loading = true;
    this.service.getOrders().subscribe((resp) => {
      this.data = resp.body;
      this.loading = false;
    });
  }

  sendApplication(): void {
    this.log.debug(this.form.getRawValue());
    this.service.sendApplication(this.form.getRawValue()).subscribe(() => {
      this.getOrders();
      this.createForm();
      this.displayNewApplication = false;
      this.messageService.add({
        severity: 'bg-bluegray-900',
        detail: 'Dodano zgłoszenie',
        contentStyleClass: 'color-toast-message text-center',
        styleClass: 'color-toast-message',
      });
    });
  }

  private createForm() {
    this.form = this.formBuilder.group({
      email: ['', Validators.required],
      name: ['', Validators.required],
      age: ['', Validators.required],
      height: ['', Validators.required],
      weight: ['', Validators.required],
      phone: ['', Validators.required],
    });
  }
  private createFormAnswer() {
    this.formAnswer = this.formBuilder.group({
      body: ['', Validators.required],
    });
  }
  showDialog(order: any) {
    this.display = true;
    this.order = order;
    this.log.debug(this.order);
  }
  showDialogNewApplication(): void {
    this.displayNewApplication = true;
  }

  sendAnswerApplication(playerId: number): void {
    let payload = {
      body: this.formAnswer.getRawValue().body,
      playerId: playerId,
      user: Number(sessionStorage.getItem('user')),
    };
    this.service.setUrl('answercontactplayer');
    this.service.sendAnswer(payload).subscribe(() => {
      this.createFormAnswer();
      this.service.setUrl('contactplayer');
      this.getOrders();
      this.display = false;
      this.messageService.add({
        severity: 'bg-bluegray-900',
        detail: 'Wysłano odpowiedź',
        contentStyleClass: 'color-toast-message text-center',
        styleClass: 'color-toast-message',
      });
    });
  }
}
