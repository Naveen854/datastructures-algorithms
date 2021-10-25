class myArray{
    constructor(){
        this.length = 0
        this.data = {}
    }

    get(index){
        return this.data[index]
    }

    push(item){
        this.data[this.length] = item
        this.length = this.length+1
        return this.length
    }

    pop(){
        let lastItem = this.data[this.length-1]
        delete this.data[this.length-1]
        this.length = this.length - 1
        return lastItem
    }

    delete(index){
        if(this.length==0){
            return undefined
        }
        const item = this.data[index]
        this.shiftItems(index)
        return item
    }

    shiftItems(index){
        for(let i=index; i < this.length-1; i++ ){
            this.data[i]=this.data[i+1]
        }
        delete this.data[this.length-1]
        this.length = this.length -1
    }
}

let sampleArray = new myArray()
console.log(sampleArray)
console.log(sampleArray[1])
console.log(sampleArray.push('hi,'))
console.log(sampleArray.push('How '))
console.log(sampleArray.push('are '))
console.log(sampleArray.push('you?'))
console.log(sampleArray.pop())
console.log(sampleArray.delete(0))
console.log(sampleArray)
