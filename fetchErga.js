//fetch method pou pairnei mono ton titlo twn ergwn apo ta json kai ta emfanizei sth main
fetch('dihghmata.json') //fetch to json file me ta dihghmata
    .then(response => response.json())
    .then(data => {
        const dihghmataList = document.getElementById('dihghmata-list');

        //enw uparxoun ki alla dihghmata sto json
        data.dihghmata.forEach(dihghmata => {
            // dhmiourgei nea seira gia ta dihghmata
            const dihghmataRow = document.createElement('tr');

            // Pairnei ton titlo apo to json
            const dihghmataTitle = document.createElement('td');
            dihghmataTitle.textContent = dihghmata.title;
            dihghmataRow.appendChild(dihghmataTitle);

            // prosthetei to row sth list
            dihghmataList.appendChild(dihghmataRow);
        });
    });

fetch('muth.json')  //muthistorhmata
    .then(response => response.json())
    .then(data => {
        const booksList = document.getElementById('books-list');
        data.books.forEach(books => {
            const booksRow = document.createElement('tr');
            const booksTitle = document.createElement('td');
            booksTitle.textContent = books.title;
            booksRow.appendChild(booksTitle);
            booksList.appendChild(booksRow);
        });
    });

fetch('nouv.json')  //fetch tis nouveles
    .then(response => response.json())
    .then(data => {
        const nouvelesList = document.getElementById('nouveles-list');
        data.nouveles.forEach(nouveles => {
            const nouvelesRow = document.createElement('tr');
            const nouvelesTitle = document.createElement('td');
            nouvelesTitle.textContent = nouveles.title;
            nouvelesRow.appendChild(nouvelesTitle);
            nouvelesList.appendChild(nouvelesRow);
        });
    });

fetch('poih.json')  //poihmata
    .then(response => response.json())
    .then(data => {
        const poihmataList = document.getElementById('poihmata-list');
        data.poihmata.forEach(poihmata => {
            const poihmataRow = document.createElement('tr');
            const poihmataTitle = document.createElement('td');
            poihmataTitle.textContent = poihmata.title;
            poihmataRow.appendChild(poihmataTitle);
            poihmataList.appendChild(poihmataRow);
        });
    });



