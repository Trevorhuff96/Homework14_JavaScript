// from data.js
var tableData = data;

// YOUR CODE HERE!

var tablBody = d3.select("tbody");

console.log(tableData)

tableData.forEach(function(d) {
    console.log(d);
    var row = tablBody.append("tr");
    Object.entries(d).forEach(function([key, value]) {
        console.log(key,value);
        var cell = row.append("td");
        cell.text(value);
    });

});

var submit = d3.select("#filter-btn");

submit.on("click", function(){

    d3.event.preventDefault();

    var inputElement = d3.select("#datetime");

    var inputData = inputElement.property("value");

    console.log(inputData);
    // this might be unneccesary
    console.log(tableData);

    d3.select("#table-body").html("");

    var filteredResponse = tableData.filter(test => test.datetime === inputData);
    console.log(filteredResponse);

    

    filteredResponse.forEach(function(test2){
        console.log(test2);
        var row = tablBody.append("tr");
        Object.entries(test2).forEach(function([key, value]) {
        console.log(key,value);
        var cell = row.append("td");
        cell.text(value);
        });
    });
});