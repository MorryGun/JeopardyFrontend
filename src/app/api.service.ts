import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { lastValueFrom, Subject } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable()
export class ApiService {
    constructor(private http: HttpClient, private router: Router) { }
    url = environment.url;

    private selectedPlayer = new Subject<any>();
    playerSelected = this.selectedPlayer.asObservable();

    get isAuthenticated() {
        return !!localStorage.getItem('token');
    }

    register(credentials) {
        this.http.post<any>(`${this.url}user`, credentials).subscribe(res => {
            this.authenticate(res);
        });
    }

    login(credentials) {
        this.http.post<any>(`${this.url}user/login`, credentials).subscribe(res => {
            this.authenticate(res);
        });
    }

    authenticate(res) {
        localStorage.setItem('token', res);

        if (localStorage.getItem('token')) {
            this.router.navigate(['/']);
        }
    }

    logout() {
        localStorage.removeItem('token');
    }

    getPlayers() {
        return this.http.get<[]>(`${this.url}player`);
    }

    selectPlayer(player) {
        this.selectedPlayer.next(player);
    }

    addPlayer(player) {
        this.http.post(`${this.url}player`, player).subscribe(res => {
            console.log(res);
        });
    }

    async deletePlayer(player) {
        await lastValueFrom(this.http.delete<[]>(`${this.url}player/${player.id}`, player));
    }
}