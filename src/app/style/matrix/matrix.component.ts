import { Component, inject, OnInit } from '@angular/core';
import { MatrixColumn, MatrixService } from './matrix.service';

// export type MatrixColumn = {
//   left: number;
//   symbols: string[];
// }

@Component({
  selector: 'app-matrix',
  standalone: true,
  imports: [],
  templateUrl: './matrix.component.html',
  styleUrl: './matrix.component.css'
})
export class MatrixComponent implements OnInit {
  matrixColumns: MatrixColumn[] = [];
  // matrixColumns: string[] = [];
  private matrixService = inject(MatrixService);

  ngOnInit(): void {
    this.matrixColumns = this.matrixService.generateMatrixEffect();
  }

  // generateMatrixEffect() {
  //   const symbols = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

  //   for (let i = 0; i < 50; i++) {
  //     const columnSymbols = Array.from({ length: 30 }, () =>
  //       symbols.charAt(Math.floor(Math.random() * symbols.length))
  //     );

  //     this.matrixColumns.push({
  //       left: i * 2,  // Column position in %
  //       symbols: columnSymbols // Random symbols placement in column
  //     });
  //   }
  // }
}
