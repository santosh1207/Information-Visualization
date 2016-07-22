function generateBarChart(id,data){

    var margin = {top: 0, right: 80, bottom: 30, left: 30},
        width = $(id).width() - margin.left - margin.right,
        height =  $(id).height() - margin.top - margin.bottom;

    var chart = d3.select(".chart")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    var x = d3.scale.ordinal()
        .rangeRoundBands([0, width], .1);

    var y = d3.scale.linear()
        .range([height, 0]);

    var xAxis = d3.svg.axis()
        .scale(x)
        .orient("bottom");

    var yAxis = d3.svg.axis()
        .scale(y)
        .orient("left")
        .ticks(5);

    var yGrid = d3.svg.axis()
        .scale(y)
        .orient("left")
        .tickSize(-width, 0, 0)
        .tickFormat("")
        .ticks(5);

    var svg = d3.select(id).append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    
    var max = d3.max(data, function(d) { return d.newDeaths; });
    
    x.domain(data.map(function(d) {return formatDate(d.Date); }));
    y.domain([0, max]);
    xAxis.tickValues(["31 Mar", "28 Apr", "26 May","23 Jun","21 Jul","18 Aug","15 Sep","13 Oct","10 Nov","08 Dec","05 Jan","02 Feb","02 Mar"]);
    
    svg.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis);

    svg.append("g")
        .attr("class", "y axis")
        .call(yAxis);
       
    svg.append("g")
        .attr("class", "grid")
        .call(yGrid);       

  
    svg.selectAll(".deathbar")
        .data(data)
    .enter().append("rect")
        .attr("class", "deathbar")
        .attr("x", function(d) { return x(formatDate(d.Date))+x.rangeBand()/2; })
        .attr("width", x.rangeBand())
        .attr("y", function(d) { return y(d.newDeaths); })
        .attr("height", function(d) {
           return height - y(d.newDeaths);});
          
    svg.selectAll(".current")
        .data(data)
    .enter().append("rect")
        .attr("class", "current")
        .attr("x", function(d) { return x(formatDate(d.Date)); })
        .attr("width", x.rangeBand())
        .attr("y", function(d) { return y(max); })
        .attr("height", function(d) {
           return height - y(max);})
        .attr("opacity",0)
        .attr("id",function(d,i){return "barSelect"+i;})
        .on("click",function(d,i){
            d3.select("#barSelect"+currentWeek).attr("opacity",0);
            currentWeek=i;
            d3.select("#barSelect"+currentWeek).attr("opacity",0);
            transitionMap();
        });
        
    var g = svg.append("g");
        
   

    g.append("rect")
        .attr("x", width+10)
        .attr("y", 30)
        .attr("width", 10)
        .attr("height", 10)
        .attr("fill","#DB4918");

    g.append("text")
        .attr("x",width+25)
        .attr("y",38)
        .text("Deaths")
        .attr("font-size","10px");


}

function generateMap(){
    var margin = {top: 10, right: 10, bottom: 10, left: 10},
    width = $('#map').width() - margin.left - margin.right,
    height = 425;
   
    var projection = d3.geo.mercator()
        .center([124.5,12])
        .scale(1500);

    var svg = d3.select('#map').append("svg")
        .attr("width", width)
        .attr("height", height);

    var path = d3.geo.path()
        .projection(projection);

    var g = svg.append("g");    

    g.selectAll("path")
        .data(regions.features)
        .enter()
        .append("path")
        .attr("d", path)
        .attr("stroke",'#cccccc')
        .attr("fill",'#ffffff')
        .attr("opacity",1)
        .attr("id",function(d){
            return d.properties.PCODE_REF;
        })
        .attr("class","region");


    var g = svg.append("g");
    
    g.selectAll("path")
        .data(westafrica.features)
        .enter()
        .append("path")
        .attr("d", path)
        .attr("stroke",'#cccccc')
        .attr("fill",'none')
        .attr("class","country");    
    
    var g = svg.append("g"); 
  
    var g = svg.append("g");
 
    
    var mapLabels = svg.append("g");    

    mapLabels.selectAll('text')
      .data(westafrica.features)
         .enter()
         .append("text")
         .attr("x", function(d,i){
                     return path.centroid(d)[0]-20;})
         .attr("y", function(d,i){
                     return path.centroid(d)[1];})
         .attr("dy", ".55em")
         .attr("class","maplabel")
         .style("font-size","20px")
         .attr("opacity",0.4)
         .text(function(d,i){
                      return d.properties.NAME;
                  });

}

function transitionMap(){  

    
    var projection = d3.geo.mercator()
        .center([mapSettings[currentWeek].lng,mapSettings[currentWeek].lat])
        .scale(mapSettings[currentWeek].scale);

    var path = d3.geo.path()
        .projection(projection);

    d3.selectAll('.country')
            .attr('d', path);
    
    d3.selectAll('.maplabel')
        .attr("x", function(d,i){
                     return path.centroid(d)[0]-20;})
        .attr("y", function(d,i){
                     return path.centroid(d)[1];});  
         
    d3.selectAll('.region').attr('d', path);
    
    var data = regionCases[currentWeek].Cases;
    data.forEach(function(element){
            d3.select("#"+element.Region.replace(/\s/g, ''))
                        .attr("fill",convertCasesToColor(element.Cases));
            });
  
}

function convertCasesToColor(cases){
    
    var colors = ["#ffffff","#CFD4E8","#91A6EB","#4762D6","#3D22D4"];

    if(cases==0){
        c=0;
    } else if(cases<10){
        c=1;
    } else if(cases<100){
        c=2;
    } else if(cases<200){
        c=3;
    } else {
        c=4;
    };
    return colors[c];
}

function convertMedicalCentresToOpacity(open){
    if(open==1){
        return 0;
    } else {
        return 0;
    }
}

function formatDate(date){
    var month=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    return date.substring(0,2) + " " + month[parseInt((date.substring(3,5))-1)];
}



var currentWeek=0;
generateBarChart('#bar_chart',totalCasesAndDeaths);
d3.select("#barSelect"+currentWeek).attr("opacity",0);
generateMap();
transitionMap();

$(document).keydown(function(e) {
    switch(e.which) {
        case 37:
            d3.select("#barSelect"+currentWeek).attr("opacity",0);    
            currentWeek=currentWeek-1;
            if(currentWeek<0){currentWeek=0;}
            d3.select("#barSelect"+currentWeek).attr("opacity",0.15);
            transitionMap();
            break;

        case 39:
            d3.select("#barSelect"+currentWeek).attr("opacity",0);    
            currentWeek=currentWeek+1;
            if(currentWeek>totalCasesAndDeaths.length-1){
                currentWeek=totalCasesAndDeaths.length-1;
            }
            d3.select("#barSelect"+currentWeek).attr("opacity",0.15); 
            transitionMap();
            break;

        default: return; // exit this handler for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
});


function autoAdvance(){
    d3.select("#barSelect"+currentWeek).attr("opacity",0);
    currentWeek=currentWeek+1;  
    if(currentWeek>totalCasesAndDeaths.length-1){
        currentWeek=0;
     }
    d3.select("#barSelect"+currentWeek).attr("opacity",0.15); 
    transitionMap();
}

var playTimer;

$(".playPause").click(function(){  
    if($(".playPause").hasClass("paused")){
        playTimer = setInterval(function(){autoAdvance()}, 1000);
        $(".playPause").removeClass("paused");
        $(".playPause").addClass("playing");
    } else {
    clearInterval(playTimer);
        $(".playPause").removeClass("playing");
        $(".playPause").addClass("paused");
    }
})

// initiate autoplay on page load
$( document ).ready(function(){
    $(".playPause").trigger("click");
});