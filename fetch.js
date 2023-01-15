//fetch method pou pairnei titlo & links twn ergwn apo ta json kai ta emfanizei sth main se morfh pinaka
fetch('muth.json')
    .then(response => response.json())
    .then(data => {
        // Diavazei th list me ta erga
        const bookList = document.getElementById('book-list');
        //enw uparxoun muthistorhmata sunexise
        data.books.forEach(book => {
            //dhmiourgei row me kathe ergo
            const bookRow = document.createElement('tr');
            const bookTitle = document.createElement('td');
            //pairnei ton titlo
            bookTitle.textContent = book.title;
            //pairnei to link
            const bookLink = document.createElement('td');
            const link = document.createElement('a');
            link.href = book.link;
            link.textContent = book.link;
            bookLink.appendChild(link);
            //valta sto row
            bookRow.appendChild(bookTitle);
            bookRow.appendChild(bookLink);
            //add to row sth list
            bookList.appendChild(bookRow);
        });
    });

fetch('dihghmata.json')
    .then(response => response.json())
    .then(data => {
        const dihghmataList = document.getElementById('dihg-list');
        data.dihghmata.forEach(dihghmata => {
            const dihghmataRow = document.createElement('tr');
            const dihghmataTitle = document.createElement('td');
            dihghmataTitle.textContent = dihghmata.title;
            const dihghmataLink = document.createElement('td');
            const link = document.createElement('a');
            link.href = dihghmata.link;
            link.textContent = dihghmata.link;
            dihghmataLink.appendChild(link);
            dihghmataRow.appendChild(dihghmataTitle);
            dihghmataRow.appendChild(dihghmataLink);
            dihghmataList.appendChild(dihghmataRow);
        });
    });

    fetch('allhlographia.json')
    .then(response => response.json())
    .then(data => {
        const allhlographiaList = document.getElementById('allhl-list');
        data.allhlographia.forEach(allhlographia => {
            const allhlographiaRow = document.createElement('tr');
            const allhlographiaTitle = document.createElement('td');
            allhlographiaTitle.textContent = allhlographia.title;
            const allhlographiaLink = document.createElement('td');
            const link = document.createElement('a');
            link.href = allhlographia.link;
            link.textContent = allhlographia.link;
            allhlographiaLink.appendChild(link);
            allhlographiaRow.appendChild(allhlographiaTitle);
            allhlographiaRow.appendChild(allhlographiaLink);
            allhlographiaList.appendChild(allhlographiaRow);
        });
    });