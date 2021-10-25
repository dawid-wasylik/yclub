import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Logger, UntilDestroy, untilDestroyed } from '@shared';
import { Credentials, CredentialsService } from './credentials.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PermService } from './perm.service';
import { MessageService } from 'primeng/api';
export interface LoginContext {
  email: string;
  password: string;
  remember?: boolean;
}

/**
 * Provides a base for authentication workflow.
 * The login/logout methods should be replaced with proper implementation.
 */
@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  userId: number = 0;
  log = new Logger('Login');
  isUserLoggedIn$ = new BehaviorSubject<boolean>(false);
  error: string | undefined;
  private url = 'http://localhost:3000/auth';

  httpOptions: { headers: HttpHeaders } = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(
    private credentialsService: CredentialsService,
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
    private messageService: MessageService,
    private permSerivce: PermService
  ) {}

  /**
   * Authenticates the user.
   * @param context The login parameters.
   * @return The user credentials.
   */
  login(email: string, password: string, remember?: boolean): Observable<Credentials> {
    let data = {
      userId: 0,
      username: email,
      token: '',
    };
    // Replace by proper authentication call
    this.http.post(`${this.url}/login`, { email, password }, this.httpOptions).subscribe(
      (resp: any) => {
        this.permSerivce.setUser(resp.userId);
        this.messageService.add({ severity: 'success', summary: 'Service Message', detail: 'Via MessageService' });
        this.isUserLoggedIn$.next(true);
        data = {
          userId: resp.userId,
          username: email,
          token: resp.token,
        };
        this.log.debug(`${resp.username} successfully logged in`);
        this.router.navigate([this.route.snapshot.queryParams.redirect || '/'], { replaceUrl: true });

        this.credentialsService.setCredentials(data, remember);
      },
      (error) => {
        this.log.debug(`Login error: ${error}`);
        this.error = error;
      }
    );
    return of(data);
  }

  /**
   * Logs out the user and clear credentials.
   * @return True if the user was logged out successfully.
   */
  logout(): Observable<boolean> {
    // Customize credentials invalidation here
    this.credentialsService.setCredentials();
    return of(true);
  }
}
