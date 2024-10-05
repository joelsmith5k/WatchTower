import {
  AfterViewInit,
  Component,
  EventEmitter,
  Injectable,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatTableDataSource } from '@angular/material/table';
import { NgModule } from '@angular/core';
import { NgFor, CommonModule } from '@angular/common';
import { CustomColumn } from '../../models/custom-column.model';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule, MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-data-table',
  standalone: true,
  imports: [
    MatTableModule,
    NgFor,
    CommonModule,
    MatPaginatorModule,
    MatSortModule,
  ],
  templateUrl: './data-table.component.html',
  styleUrl: './data-table.component.scss',
})
@Injectable({ providedIn: 'root' })
export class DataTableComponent {
  @Input() entities: any[] = [];
  @Input() tableDetails: CustomColumn[] = [];
  @Output() rowClickEvent = new EventEmitter<any>();
  public tableProperties: string[] = [];
  public tableHeaders: string[] = [];
  public dataSource = new MatTableDataSource<any>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    if (this.entities.length > 0) {
      this.dataSource.paginator = this.paginator;
    }
  }

  ngOnInit(): void {
    this.tableProperties = this.tableDetails.map((td) => td.columnRef);
    this.tableHeaders = this.tableDetails.map((td) => td.columnHeader);
    this.dataSource.sort = this.sort;
  }

  ngOnChanges() {
    // Update MatTableDataSource whenever the input data changes
    if (this.entities && this.entities.length > 0) {
      this.dataSource.data = this.entities;
      this.dataSource.sort = this.sort;
    }

    // Assign paginator if it has been initialized
    if (this.paginator) {
      this.dataSource.paginator = this.paginator;
    }
  }

  public onRowClick(row: any): void {
    this.rowClickEvent.emit(row);
  }
}
