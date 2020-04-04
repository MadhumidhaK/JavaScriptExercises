var xmlHttp = new XMLHttpRequest();
var allCountriesData;
var URL = "https://restcountries.eu/rest/v2/all";
var navNames = [];

function loadCountries(){
    xmlHttp.onreadystatechange = function(){
        if(xmlHttp.readyState == 4 && xmlHttp.status == 200){
            allCountriesData = JSON.parse(xmlHttp.responseText);
            // displayCountries(allCountriesData);
            displaySortedCountries(allCountriesData);
        }
        console.log(allCountriesData);
    }
    xmlHttp.open("GET", URL, true);
    xmlHttp.send();
}

function search(){
    var key = document.getElementById("search").value;
    var result = allCountriesData.filter(country => country.name.toLowerCase().trim().includes(key.toLowerCase().trim()));
    var rootElement = document.getElementById('root');
    rootElement.innerHTML = "";
    displaySortedCountries(result);
}

function displayCountries(countries){
    var list = document.createElement('ul');
    countries.forEach(country => {
        var listElement = document.createElement('li');
        listElement.textContent = country.name;
        list.appendChild(listElement);
    });
    var rootElement = document.getElementById('root');
    rootElement.appendChild(list);
}

function displaySortedCountries(countries){
    var rootElement = document.getElementById('root');
    var sortedCountries = countries.sort((a,b) => a.name > b.name ? 1 : -1);
    console.log(sortedCountries[1])
    var list = null;
    var heading;
    var firstLetter = '';
    countries.forEach((country,index) => {
        if(firstLetter === country.name[0]){
            var listElement = document.createElement('li');
            listElement.textContent = country.name;
            list.appendChild(listElement);
        }else{
            firstLetter = country.name[0];
            navNames.push(firstLetter);
            heading = document.createElement('h1');
            heading.innerHTML = firstLetter;
            heading.setAttribute('id', firstLetter);
            heading.style.textAlign = 'center';
            list = document.createElement('ul');
            var listElement = document.createElement('li');
            listElement.textContent = country.name;
            list.appendChild(listElement);
            rootElement.appendChild(heading);
            rootElement.appendChild(list);
        }

        if(index == countries.length-1){
            addNavs();
        }
    })
}


function addNavs(){
    console.log("in addNavs")
    console.log(navNames);
    var navs = document.getElementById('navs');
    navNames.forEach(name =>{
        var div = document.createElement('div');
        var link = document.createElement('a');
        var linkText = document.createTextNode(name);
        link.appendChild(linkText);
        link.title = "Starts with " + name;
        link.href = "#" + name;
        div.appendChild(link);
        navs.appendChild(div);
    })
}