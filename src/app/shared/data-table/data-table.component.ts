import { Component, Injectable, Input } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { NgModule } from '@angular/core';
import { NgFor, CommonModule } from '@angular/common';
import { CustomColumn } from '../../models/hockey-column-def';
import { MatPaginatorModule } from '@angular/material/paginator'; // If you're using pagination
import { MatSortModule } from '@angular/material/sort'; // If you're using sorting

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-data-table',
  standalone: true,
  imports: [MatTableModule, NgFor, CommonModule],
  templateUrl: './data-table.component.html',
  styleUrl: './data-table.component.scss',
})
@Injectable({ providedIn: 'root' })
export class DataTableComponent {
  @Input() dataSource: any[] = [];
  @Input() tableDetails: CustomColumn[] = [];
  public tableProperties: string[] = [];
  public tableHeaders: string[] = [];

  ngOnInit(): void {
    this.tableProperties = this.tableDetails.map((td) => td.columnRef);
    this.tableHeaders = this.tableDetails.map((td) => td.columnHeader);
  }
}
