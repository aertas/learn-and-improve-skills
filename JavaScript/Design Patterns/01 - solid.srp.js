/**
 * Single Responsibility Principle
 * You basically have to have just one responsibility and if you need
 * additional responsibilities then just make other classes they don't really cost you anything.
 * We use quite often is called separation of concerns.
 */
const fs = require('fs');

class Journal {
    constructor() {
        this.entries = {};
    }

    addEntry(text) {
        let c = ++Journal.count;
        let entry = `${c}: ${text}`;
        this.entries[c] = entry;
        return c;
    }

    removeEntry(index) {
        delete this.entries[index];
    }

    toString() {
        return Object.values(this.entries).join('\n');
    }

    // save(filename)
    // {
    //   fs.writeFileSync(filename, this.toString());
    // }
    //
    // load(filename)
    // {
    //   //
    // }
    //
    // loadFromUrl(url)
    // {
    //   //
    // }
}

Journal.count = 0;

class PersistenceManager {
    preprocess(j) {
        //
    }

    saveToFile(journal, filename) {
        fs.writeFileSync(filename, journal.toString());
    }
}

let j = new Journal();
j.addEntry('I cried today.');
j.addEntry('I ate a bug.');
console.log(j.toString());



/* Single Responsibility Principle */
let p = new PersistenceManager();
let filename = './export/journal.txt';
p.saveToFile(j, filename);

// separation of concerns
