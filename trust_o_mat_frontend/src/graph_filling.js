// Canvas Size

let main = $('main');
let body = $('#body');

var canvasSize = computeSize();

function computeSize() {
    return [main.width(), body.height() - navbar.height()];
}

function init(data) {

}

// -1- Create a tooltip div that is hidden by default:
var tooltip = d3.select("svg")
    .append("div")
    .style("opacity", 1)
    .attr("class", "tooltip")
    .style("background-color", "black")
    .style("border-radius", "5px")
    .style("padding", "10px")
    .style("color", "black");