class HashTable{
    constructor(size){
        this.data = new Array(size)

    }

    get(key){
        let currentBucket = this.data[this._hash(key)]
        if(!currentBucket){
            return undefined
        }
        return currentBucket[1]
    }

    set(key, value){
        let address = this._hash(key)
        if(!this.data[address]){
            this.data[address] = [];
        }
        this.data[address].push(key, value)
    }

    _hash(key){
        let hash = 0
        for (let i=0; i<key.length; i++){
            hash = (hash + key.charCodeAt(i)*i) % this.data.length
        }
        return hash;
    }

    keys(){
        const keysArray = [];
        for(let i=0; i< this.data.length; i++){
            if(this.data[i] !== undefined){
                keysArray.push(this.data[i][0])
            }
        }
        return keysArray
    }

    values(){
        const vaaluesArray = [];
        for(let i=0; i< this.data.length; i++){
            if(this.data[i] !== undefined){
                vaaluesArray.push(this.data[i][1])
            }
        }
        return vaaluesArray
    }
}

let myHash = new HashTable(50)
myHash.set('grapes', 1000)
myHash.set('appless', 100)
myHash.set('oranges', 100)
console.log(myHash.get('grapes'))
console.log(myHash.get('graps'))
console.log(myHash.keys())
console.log(myHash)