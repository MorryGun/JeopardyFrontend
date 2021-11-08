import { ApiService } from './api.service';
import { MatTableDataSource } from '@angular/material/table';
import { Component} from '@angular/core';

@Component({
    selector: 'players',
    templateUrl: '/players.component.html'
})
export class PlayersComponent {
    displayedColumns: string[] = this.isAuthenticated ?  ['position', 'name', 'rate', 'delete'] : ['position', 'name', 'rate'];
    dataSource;

    constructor(private api: ApiService) { }

    get isAuthenticated()
    {
        return this.api.isAuthenticated
    }

    ngOnInit() {
        this.api.getPlayers().subscribe(res => { this.dataSource = new MatTableDataSource(res) });
    }

    async delete(player)
    {
        await this.api.deletePlayer(player);
        this.ngOnInit()
    }
}