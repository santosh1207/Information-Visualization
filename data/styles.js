var color = ["none","#ffe082","#ffbd13","#ff8053","#ff493d"];

var newCasesStyle = function(feature){
        if(feature.properties.PCODEUSE in newCases) {
            if(newCases[feature.properties.PCODEUSE]<1){
                return {color: color[0],fillColor: color[0],fillOpacity:0.6,opacity:0.7,weight:2};
            } else if(newCases[feature.properties.PCODEUSE]<25){
                return {color: color[1],fillColor: color[1],fillOpacity:0.6,opacity:0.7,weight:2};
            } else if(newCases[feature.properties.PCODEUSE]<50){
                return {color: color[2],fillColor: color[2],fillOpacity:0.6,opacity:0.7,weight:2};
            } else if(newCases[feature.properties.PCODEUSE]<200){
                return {color: color[3],fillColor: color[3],fillOpacity:0.6,opacity:0.7,weight:2};
            } 
            return {color: color[4],fillColor: color[4],fillOpacity:0.6,opacity:0.7,weight:2};

        } else {
            return {"color": "none","opacity":1};
        }
};

var totalDeathsStyle = function(feature){
        if(feature.properties.PCODEUSE in totalDeaths) {
            if(totalDeaths[feature.properties.PCODEUSE]<1){
                return {color: color[0],fillColor: color[0],fillOpacity:0.6,opacity:0.7,weight:2};
            } else if(totalDeaths[feature.properties.PCODEUSE]<50){
                return {color: color[1],fillColor: color[1],fillOpacity:0.6,opacity:0.7,weight:2};
            } else if(totalDeaths[feature.properties.PCODEUSE]<100){
                return {color: color[2],fillColor: color[2],fillOpacity:0.6,opacity:0.7,weight:2};
            } else if(totalDeaths[feature.properties.PCODEUSE]<500){
                return {color: color[3],fillColor: color[3],fillOpacity:0.6,opacity:0.7,weight:2};
            } 
            return {color: color[4],fillColor: color[4],fillOpacity:0.6,opacity:0.7,weight:2};

        } else {
            return {"color": "none","opacity":1};
        }
};

var totalCasesStyle = function(feature){
        if(feature.properties.PCODEUSE in totalCases) {
            if(totalCases[feature.properties.PCODEUSE]<1){
                return {color: color[0],fillColor: color[0],fillOpacity:0.6,opacity:0.7,weight:2};
            } else if(totalCases[feature.properties.PCODEUSE]<100){
                return {color: color[1],fillColor: color[1],fillOpacity:0.6,opacity:0.7,weight:2};
            } else if(totalCases[feature.properties.PCODEUSE]<300){
                return {color: color[2],fillColor: color[2],fillOpacity:0.6,opacity:0.7,weight:2};
            } else if(totalCases[feature.properties.PCODEUSE]<800){
                return {color: color[3],fillColor: color[3],fillOpacity:0.6,opacity:0.7,weight:2};
            } 
            return {color: color[4],fillColor: color[4],fillOpacity:0.6,opacity:0.7,weight:2};

        } else {
            return {"color": "none","opacity":1};
        }
};

var medicalCentresStyle = function(feature){
    if(feature.properties.Status == "Open"){
        return   {radius: 5,
                fillColor: "#A3C990",
                color: "#000",
                weight: 1,
                opacity: 1,
                fillOpacity: 1};
            }
    else {
        return   {radius: 5,
                fillColor: "#738ffe",
                color: "#000",
                weight: 1,
                opacity: 1,
                fillOpacity: 1};
            }
};

var SBTFMedicalCentresStyle = function(){
    return   {radius: 5,
                fillColor: "#91a7ff",
                color: "#000",
                weight: 1,
                opacity: 1,
                fillOpacity: 1};
};

var newCasesPerAreaStyle = function(feature){
        if(feature.properties.PCODEUSE in newCasesPerArea) {
            if(newCasesPerArea[feature.properties.PCODEUSE]<1){
                return {color: color[0],fillColor: color[0],fillOpacity:0.6,opacity:0.7,weight:2};
            } else if(newCasesPerArea[feature.properties.PCODEUSE]<10){
                return {color: color[1],fillColor: color[1],fillOpacity:0.6,opacity:0.7,weight:2};
            } else if(newCasesPerArea[feature.properties.PCODEUSE]<50){
                return {color: color[2],fillColor: color[2],fillOpacity:0.6,opacity:0.7,weight:2};
            } else if(newCasesPerArea[feature.properties.PCODEUSE]<250){
                return {color: color[3],fillColor: color[3],fillOpacity:0.6,opacity:0.7,weight:2};
            } 
            return {color: color[4],fillColor: color[4],fillOpacity:0.6,opacity:0.7,weight:2};

        } else {
            return {"color": "none","opacity":1};
        }
};

var totalCasesPerAreaStyle = function(feature){
        if(feature.properties.PCODEUSE in totalCasesPerArea) {
            if(totalCasesPerArea[feature.properties.PCODEUSE]<1){
                return {color: color[0],fillColor: color[0],fillOpacity:0.6,opacity:0.7,weight:2};
            } else if(totalCasesPerArea[feature.properties.PCODEUSE]<50){
                return {color: color[1],fillColor: color[1],fillOpacity:0.6,opacity:0.7,weight:2};
            } else if(totalCasesPerArea[feature.properties.PCODEUSE]<100){
                return {color: color[2],fillColor: color[2],fillOpacity:0.6,opacity:0.7,weight:2};
            } else if(totalCasesPerArea[feature.properties.PCODEUSE]<500){
                return {color: color[3],fillColor: color[3],fillOpacity:0.6,opacity:0.7,weight:2};
            } 
            return {color: color[4],fillColor: color[4],fillOpacity:0.6,opacity:0.7,weight:2};

        } else {
            return {"color": "none","opacity":1};
        }
};

var totalDeathsPerAreaStyle = function(feature){
        if(feature.properties.PCODEUSE in totalDeathsPerArea) {
            if(totalDeathsPerArea[feature.properties.PCODEUSE]<1){
                return {color: color[0],fillColor: color[0],fillOpacity:0.6,opacity:0.7,weight:2};
            } else if(totalDeathsPerArea[feature.properties.PCODEUSE]<25){
                return {color: color[1],fillColor: color[1],fillOpacity:0.6,opacity:0.7,weight:2};
            } else if(totalDeathsPerArea[feature.properties.PCODEUSE]<50){
                return {color: color[2],fillColor: color[2],fillOpacity:0.6,opacity:0.7,weight:2};
            } else if(totalDeathsPerArea[feature.properties.PCODEUSE]<200){
                return {color: color[3],fillColor: color[3],fillOpacity:0.6,opacity:0.7,weight:2};
            } 
            return {color: color[4],fillColor: color[4],fillOpacity:0.6,opacity:0.7,weight:2};

        } else {
            return {"color": "none","opacity":1};
        }
};

var newCasesPerPopStyle = function(feature){
        if(feature.properties.PCODEUSE in newCasesPerPop) {
            if(newCasesPerPop[feature.properties.PCODEUSE]<0.1){
                return {color: color[0],fillColor: color[0],fillOpacity:0.6,opacity:0.7,weight:2};
            } else if(newCasesPerPop[feature.properties.PCODEUSEF]<10){
                return {color: color[1],fillColor: color[1],fillOpacity:0.6,opacity:0.7,weight:2};
            } else if(newCasesPerPop[feature.properties.PCODEUSE]<25){
                return {color: color[2],fillColor: color[2],fillOpacity:0.6,opacity:0.7,weight:2};
            } else if(newCasesPerPop[feature.properties.PCODEUSE]<50){
                return {color: color[3],fillColor: color[3],fillOpacity:0.6,opacity:0.7,weight:2};
            } 
            return {color: color[4],fillColor: color[4],fillOpacity:0.6,opacity:0.7,weight:2};

        } else {
            return {"color": "none","opacity":1};
        }
};

var totalCasesPerPopStyle = function(feature){
        if(feature.properties.PCODEUSE in totalCasesPerPop) {
            if(totalCasesPerPop[feature.properties.PCODEUSE]<0.1){
                return {color: color[0],fillColor: color[0],fillOpacity:0.6,opacity:0.7,weight:2};
            } else if(totalCasesPerPop[feature.properties.PCODEUSE]<25){
                return {color: color[1],fillColor: color[1],fillOpacity:0.6,opacity:0.7,weight:2};
            } else if(totalCasesPerPop[feature.properties.PCODEUSE]<50){
                return {color: color[2],fillColor: color[2],fillOpacity:0.6,opacity:0.7,weight:2};
            } else if(totalCasesPerPop[feature.properties.PCODEUSE]<100){
                return {color: color[3],fillColor: color[3],fillOpacity:0.6,opacity:0.7,weight:2};
            } 
            return {color: color[4],fillColor: color[4],fillOpacity:0.6,opacity:0.7,weight:2};

        } else {
            return {"color": "none","opacity":1};
        }
};

var totalDeathsPerPopStyle = function(feature){
        if(feature.properties.PCODEUSE in totalDeathsPerPop) {
            if(totalDeathsPerPop[feature.properties.PCODEUSE]<0.1){
                return {color: color[0],fillColor: color[0],fillOpacity:0.6,opacity:0.7,weight:2};
            } else if(totalDeathsPerPop[feature.properties.PCODEUSE]<20){
                return {color: color[1],fillColor: color[1],fillOpacity:0.6,opacity:0.7,weight:2};
            } else if(totalDeathsPerPop[feature.properties.PCODEUSE]<40){
                return {color: color[2],fillColor: color[2],fillOpacity:0.6,opacity:0.7,weight:2};
            } else if(totalDeathsPerPop[feature.properties.PCODEUSE]<80){
                return {color: color[3],fillColor: color[3],fillOpacity:0.6,opacity:0.7,weight:2};
            } 
            return {color: color[4],fillColor: color[4],fillOpacity:0.6,opacity:0.7,weight:2};

        } else {
            return {"color": "none","opacity":1};
        }
};
