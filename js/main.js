'use strict';

const D6_1 = '---------\n|       |\n|   *   |\n|       |\n---------\n';
const D6_2 = '---------\n| *     |\n|       |\n|     * |\n---------\n';
const D6_3 = '---------\n| *     |\n|   *   |\n|     * |\n---------\n';
const D6_4 = '---------\n| *   * |\n|       |\n| *   * |\n---------\n';
const D6_5 = '---------\n| *   * |\n|   *   |\n| *   * |\n---------\n';
const D6_6 = '---------\n| *   * |\n| *   * |\n| *   * |\n---------\n';

function throwDicesD6( number ) {
    console.clear();
    for(let i = 0; i < number; i++){
        let n= Math.ceil( Math.random() * 6);
        switch(n) {
            case 1 : console.log(D6_1); break;
            case 2 : console.log(D6_2); break;
            case 3 : console.log(D6_3); break;
            case 4 : console.log(D6_4); break;
            case 5 : console.log(D6_5); break;
            case 6 : console.log(D6_6); break;
        }
    }
}

let number = +prompt('Введите число кубиков для броска (0-выход)');
while (number >0) {
    throwDicesD6( number );
    number = +prompt('Введите число кубиков для броска (0-выход)');
}