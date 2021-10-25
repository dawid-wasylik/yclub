import { Component, OnInit } from '@angular/core';
import { Logger } from '@app/@shared';
import { OrdersService } from './orders.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent implements OnInit {
  log = new Logger('[Orders]');
  data: any;
  form!: FormGroup;
  loading = true;
  display = false;
  formLink = 'localhost:4200/submitYourapplication';
  order: any;
  constructor(private service: OrdersService, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.service.setUrl('contactplayer');
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
  showDialog(order: any) {
    this.display = true;
    this.order = order;
  }

  getOneOrder(id: number): void {
    this.service.getOneOrders(id).subscribe(() => {});
  }
}
