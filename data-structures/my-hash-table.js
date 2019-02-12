class HashTable {
    constructor(size) {
        this.data = new Array(size);
    }

    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }
        return hash;
    }

    set(key, value) {
        // Where we want to store our data.
        let address = this._hash(key);
        // If the data at the hashed address isn't available,
        // let's define it by setting it to an empty array.
        if (!this.data[address]) {
            this.data[address] = [];
        }
        // Always push the newly added data to the hashed address.
        this.data[address].push([key, value]);
        // Return the data in case.
        return this.data;
    }

    get(key) {
        // Where do we want to go looking for the requested key?
        let address = this._hash(key);
        // Find the bucket where we need to look for the key...
        const bucket = this.data[address];
        // If the bucket has values in it...
        if (bucket) {
            // Loop over the bucket, since it is an array of arrays.
            for (let item of bucket) {
                // If the first item of the array matches the key...
                if (item[0] === key) {
                    // Return the value for the item.
                    return item[1];
                }
            }
        }
        return undefined;
    }

    getKeysOrValues(type = 'keys') {
        // Create an empty list of keys.
        const keysList = [];
        // Loop through the data, and for each item, if it exists,
        // add the first element to the list of keys.
        for (let item of this.data) {
            if (item) {
                // We have to do this weird [0][0],
                // since each item is an array of arrays, [['grapes', 1000]]
                // thus we need to access the first element, and get the 'grapes' out of it.
                // keysList.push(item[0][0]);
                //
                // If we want to get keys or values...instead of writing a new function.
                if (type === 'keys') {
                    keysList.push(item[0][0]);
                } else {
                    keysList.push(item[0][1]);
                }
            }
        }
        return keysList;
    }

    keys() {
        return this.getKeysOrValues('keys');
    }

    values() {
        return this.getKeysOrValues('values');
    }
}

const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000);
myHashTable.set('apples', 55);
myHashTable.set('oranges', 4);
myHashTable.set('nectarines', 9);
myHashTable.keys();
