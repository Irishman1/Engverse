export default function sortStatistics() {
    document.querySelector('thead').querySelector('tr').addEventListener('click', (event) => {
        // initialize an array of tr in DOM
        const words = [...document.querySelector('tbody').querySelectorAll('tr')];

        // initialize column number for sorting
        let colNumber;

        // sort text columns
        const alphabetSort = (colNumb) => {
            document.querySelectorAll('.sort-button').forEach((button) => {
                button.classList.remove('active');
            });

            event.target.classList.add('active');

            if (event.target.classList.contains('alphabet-sort')) {
                words.sort((rowA, rowB) => (rowA.cells[colNumb].textContent
                    > rowB.cells[colNumb].textContent ? 1 : -1));
            } else if (event.target.classList.contains('alphabet-sort-reverse')) {
                words.sort((rowA, rowB) => (rowA.cells[colNumb].textContent
                    < rowB.cells[colNumb].textContent ? 1 : -1));
            }
            document.querySelector('.statistics').querySelector('table').querySelector('tbody').append(...words);
        };

        // sort numerical columns
        const numericalValueSort = (colNumb) => {
            document.querySelector('.active').classList.remove('active');

            event.target.classList.add('active');

            if (event.target.classList.contains('numerical-sort-reverse')) {
                words.sort((rowA, rowB) => rowA.cells[colNumb].textContent
                    - rowB.cells[colNumb].textContent);
            } else if (event.target.classList.contains('numerical-sort')) {
                words.sort((rowA, rowB) => rowB.cells[colNumb].textContent
                    - rowA.cells[colNumb].textContent);
            }
            document.querySelector('.statistics').querySelector('table').querySelector('tbody').append(...words);
        };

        // check which column was chosen for sorting
        if (event.target.closest('.sort-by-name')) {
            colNumber = 0;
            alphabetSort(colNumber);
        } else if (event.target.closest('.sort-by-category')) {
            colNumber = 1;
            alphabetSort(colNumber);
        } else if (event.target.closest('.sort-by-translation')) {
            colNumber = 2;
            alphabetSort(colNumber);
        } else if (event.target.closest('.sort-by-train')) {
            colNumber = 3;
            numericalValueSort(colNumber);
        } else if (event.target.closest('.sort-by-correct')) {
            colNumber = 4;
            numericalValueSort(colNumber);
        } else if (event.target.closest('.sort-by-wrong')) {
            colNumber = 5;
            numericalValueSort(colNumber);
        } else if (event.target.closest('.sort-by-percent')) {
            colNumber = 6;
            numericalValueSort(colNumber);
        }
    });
}