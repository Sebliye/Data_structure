/* eslint-disable require-jsdoc */
"use strict";

// eslint-disable-next-line no-unused-vars
function binarySearch(value, array) {
    let begin = 0;
    let end = array.length;
    while (end - begin > 1) {
        let middle = Math.floor( (begin+end)/2 );
        if (array[middle] > value) {
            end = middle;
        } else {
            begin = middle;
        }
    }
    if (value === array[begin]) {
        return begin;
    } else {
        return -1;
    }
}
class Employee {
    /**
     * 
     * @param {String} name name of employee
     * @param {Number} salary monthly salary
     * @param {Number} year hired on year
     * @param {Number} month hired on month
     * @param {Number} day hired on day
     */
    constructor(name, salary, year, month, day) {
        this.name = name;
        this.salary = salary;
        this.hireDate = new Date(year, month - 1, day);
    }
}

let employees = [
    new Employee("George", 40000, 1996, 11, 5),
    new Employee("Dave", 50000, 2000, 1, 3),
    new Employee("Richard", 45000, 2001, 2, 7)
];


function nameComparator(empA, empB) {
    if (empA.name > empB.name) {
        return 1;
    }
    else if (empA.name < empB.name) {
        return -1;
    }
    else{
    return 0;
}
}

console.log(employees.sort(nameComparator));
function salaryComparator(empA,empB){
    if(empA.salary>empB.salary){
        return 1;
    }
    if(empA.salary<empB.salary){
        return -1;
    }
    return 0;
}
console.log(employees.sort(salaryComparator));
function hireDate(empA,empB){
    if(empA.year>empB.year){
        return 1;
    }
    if(empA.year<empB.year){
        return -1;
    }
    return 0;
}
console.log(employees.sort(hireDate));
class LinkedList {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }
    add(element) {
        let newNode = new Node(element);
        if (this.first === null) {
            this.first = newNode;
        }
        if (this.last !== null) {
            this.last.next = newNode;
        }
        this.last = newNode;
        this.length++;
    }
    insert(index, element) {
        if (index < 0 || index > this.length) {
            throw "index out of bounds";
        }
        if (index === this.length) {
            this.add(element);
            return;
        }
        let newNode = new Node(element);
        if (index === 0) {
            newNode.next = this.first;
            this.first = newNode;
        }
        else {
            // go to the node before index
            let node = this.first;
            for (let i = 0; i < index - 1; i++) {
                node = node.next;
            }
            newNode.next = node.next;
            node.next = newNode;
        }
        this.length++;
    }
    remove(index) {
        if (index < 0 || index >= this.length) {
            throw "index out of bounds";
        }
        if (index === 0) {
            this.first = this.first.next;
        }
        else {
            let node = this.first;
            for (let i = 0; i < index - 1; i++) {
                node = node.next;
            }
            if (node.next === this.last) {
                this.last = node;
            }
            // remove the node at the given index
            node.next = node.next.next;
        }
        this.length--;
    }
    get(index) {
        if (index < 0 || index >= this.length) {
            throw "index out of bounds";
        }
        let node = this.first;
        for (let i = 0; i < index; i++) {
            node = node.next;
        }
        return node.element;
    }
    set(index, element) {
        if (index < 0 || index >= this.length) {
            throw "index out of bounds";
        }
        let node = this.first;
        for (let i = 0; i < index; i++) {
            node = node.next;
        }
        node.element = element;
    }
    size() {
        return this.length;
    }
    [Symbol.iterator]() {
        let node = null; // is what next() 'has' returned
        let prev = null;
        let start = true;
        const myLinkedList = this;
        const iterator = {
            next: function () {
                const done = (node === null || node.next === null);
                let result = { "done": done };
                if (start) {
                    if (myLinkedList.first !== null) {
                        node = myLinkedList.first;
                        result = { "done": false, "value": node.element };
                    }
                    start = false;
                } else if (!done) {
                    result.value = node.next.element;
                    prev = node;
                    node = node.next;
                }
                return result;
            },
            insert: function (element) {
                let newNode = new Node(element);
                if (start) {
                    newNode.next = myLinkedList.first;
                    myLinkedList.first = newNode;
                    node = newNode;
                } else {
                    newNode.next = node.next;
                    node.next = newNode;
                }
                myLinkedList.length++;
            },
            remove: function () {
                if (start) {
                    throw "no node to remove before beginning of list!";
                }
                if (node === myLinkedList.first) {
                    myLinkedList.first = node.next;
                } else {
                    prev.next = node.next;
                }
                node = node.next;
                myLinkedList.length--;
            }
        };
        return iterator;
    }