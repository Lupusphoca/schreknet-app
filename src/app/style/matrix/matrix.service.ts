import { Injectable } from "@angular/core";

export type MatrixColumn = {
    left: number;
    glitchingSymbols: GlitchingSymbols[];
    fallingSpeed: number;
}

export type GlitchingSymbols = {
    symbol: string;
    glitchingSpeed: number;
}

@Injectable({ providedIn: 'root' })
export class MatrixService {
    // screenHeight : number;
    // constructor (screenHeight : number) {
    //     this.screenHeight = screenHeight;
    // }
    generateMatrixEffect() {
        var matrixColumns: MatrixColumn[] = [];
        var symbols = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+";
        var columnCount = 50;
        var symbolCount = 30;
        var emptySpaceProbability = 0.85;

        for (let i = 0; i < columnCount; i++) {
            var columnSymbols: GlitchingSymbols[] = [];
            for (let j = 0; j < symbolCount; j++) {
                if (Math.random() < emptySpaceProbability) {
                    columnSymbols.push({symbol : '\u00A0', glitchingSpeed : 0});
                }
                else {
                    columnSymbols.push({symbol : symbols[Math.floor(Math.random() * symbols.length)], glitchingSpeed : Math.random() * 7 + 3});
                }
            }
            var fallingSpeed = Math.random() * 5 + 5;
            matrixColumns.push({
                left: i * 2,
                glitchingSymbols : columnSymbols,
                fallingSpeed,
            });
        }
        return matrixColumns;
    }
}