import { ApiService } from './api.service';
import { Component } from '@angular/core';

@Component({
    selector: 'player',
    templateUrl: '/player.component.html'
})
export class PlayerComponent {
    constructor(private api: ApiService) { }

    player = {} as any;
    playerId;

    add(player) {
        this.api.addPlayer(player);
    }
}