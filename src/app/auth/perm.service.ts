import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Logger, UntilDestroy, untilDestroyed } from '@shared';
import { Credentials, CredentialsService } from './credentials.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Message } from 'primeng//api';
import { MessageService } from 'primeng/api';

export interface Permissions {
  userId: number;
}
@Injectable({
  providedIn: 'root',
})
export class PermService {
  userId = 0;
  constructor() {}

  setUser(id: number) {
    this.userId = id;
  }
}
