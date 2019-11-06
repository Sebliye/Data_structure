"use strict";
/* global describe */
/* global it */
/* global assert */
/* global Employee */
/* global nameComparator */

describe("nameComparator", function() {
    it("Compares Employees by name", function() {
        assert.equal(nameComparator[0].name,"Dave");
        assert.equal(nameComparator[1].name,"George");
        assert.equal(nameComparator[2].name,"Richard");
});
describe("salaryComparator", function() {
    it("Compares Employees by salary", function() {
        assert.equal(salaryComparator[0],"40000");
        assert.equal(salaryComparator[1].name,"45000");
        assert.equal(salaryComparator[2].name,"50000");
});
describe("hireDateComparator", function() {
    it("Compares Employees by hire date", function() {
        assert.equal(hireDateComparator[0].name,"1996";
        assert.equal(hireDateComparator[1].name,"2000");
        assert.equal(hiredateComparator[2].name,"20001");
});