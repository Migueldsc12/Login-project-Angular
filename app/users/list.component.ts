import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { first } from 'rxjs/operators';

import { AccountService } from '@app/_services';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({ templateUrl: 'list.component.html' })
export class ListComponent implements OnInit, AfterViewInit {
    public users: any[] = [];
    public pageSlice = this.users.slice(0, 3);
    pagedUsers: any[] = [];
    dataSource!: MatTableDataSource<any>;
    displayedColumns: string[] = ['firstName', 'lastName', 'email', 'accountType', 'actions'];

    @ViewChild(MatPaginator)
    paginator!: MatPaginator;

    ngAfterViewInit() {

    }

    constructor(private accountService: AccountService) { }

    ngOnInit() {
        this.accountService.getAll()
            .pipe(first())
            .subscribe(users => {
                this.users = users; this.dataSource = new MatTableDataSource<any>(this.users);
                this.dataSource.paginator = this.paginator;
            });
    }

    deleteUser(id: string) {
        const user = this.users!.find(x => x.id === id);
        user.isDeleting = true;
        this.accountService.delete(id)
            .pipe(first())
            .subscribe(() => this.users = this.users!.filter(x => x.id !== id));
    }
    
}