import {
  AfterViewInit,
  Component,
  Injectable,
  Input,
  ViewChild,
} from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatTableDataSource } from '@angular/material/table';
import { NgModule } from '@angular/core';
import { NgFor, CommonModule } from '@angular/common';
import { CustomColumn } from '../../models/hockey-column-def';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

@Component({
  selector: 'app-data-table',
  standalone: true,
  imports: [MatTableModule, NgFor, CommonModule, MatPaginatorModule],
  templateUrl: './data-table.component.html',
  styleUrl: './data-table.component.scss',
})
@Injectable({ providedIn: 'root' })
export class DataTableComponent {
  @Input() entities: any[] = [];
  @Input() tableDetails: CustomColumn[] = [];
  public tableProperties: string[] = [];
  public tableHeaders: string[] = [];
  public dataSource = new MatTableDataSource<any>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    if (this.entities.length > 0) {
      this.dataSource.paginator = this.paginator;
    }
  }

  ngOnInit(): void {
    this.tableProperties = this.tableDetails.map((td) => td.columnRef);
    this.tableHeaders = this.tableDetails.map((td) => td.columnHeader);
  }

  ngOnChanges() {
    // Update MatTableDataSource whenever the input data changes
    if (this.entities && this.entities.length > 0) {
      this.dataSource.data = this.entities;
    }

    // Assign paginator if it has been initialized
    if (this.paginator) {
      this.dataSource.paginator = this.paginator;
    }
  }
}
