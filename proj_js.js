//for url,access token and attribute (for multipurpose use)
var mbAttr = '© <a href="https://www.mapbox.com/feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>';
var	mbUrl = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYW5pcmJhbjIiLCJhIjoiY2t0c2JlZzk5MTI5dTJ1bnFtbzlhMGQ1bSJ9.BTK7hzj6maA_Qud3O7RxjA';

//for creating the tile view of the map
var	streets = L.tileLayer(mbUrl, {
    id: 'mapbox/streets-v11', 
    tileSize: 512, 
    zoomOffset: -1, 
    attribution: mbAttr
});

//For creating different clusters of markers of college

var dept= L.layerGroup();//department buildings and labs
var canteen = L.layerGroup();//canteens 
var admin = L.layerGroup();//administrative buildings
var landmark =L.layerGroup();//landmarks
var vaccine = L.layerGroup(); //vaccine centres 
var misc= L.layerGroup();//miscellaneous
var gates=L.layerGroup();//gates

//icons for departments and laboratories 

const icon_dept = L.icon({
    iconUrl: 'https://agnish13.github.io/HackNPitch_PentaNoobs_Uni-Nav/icons/Dept.svg',
    iconSize: [70,70],
});

const icon_lab = L.icon({
    iconUrl: 'https://agnish13.github.io/HackNPitch_PentaNoobs_Uni-Nav/icons/Labs.svg',
    iconSize: [40,40],
});

const icon_Workshop = L.icon({
    iconUrl : 'https://agnish13.github.io/HackNPitch_PentaNoobs_Uni-Nav/icons/Workshops.svg',
    iconSize: [30,30],
});

//icons for canteens
const icon_canteen = L.icon({
    iconUrl: 'https://agnish13.github.io/HackNPitch_PentaNoobs_Uni-Nav/icons/Canteen.svg',
    iconSize: [30,30],
});

//icons for administrative buildings
const icon_admin = L.icon({
    iconUrl: 'https://agnish13.github.io/HackNPitch_PentaNoobs_Uni-Nav/icons/Admin.svg',
    iconSize: [30,30],
});

const icon_library = L.icon({
    iconUrl : 'https://agnish13.github.io/HackNPitch_PentaNoobs_Uni-Nav/icons/Library.svg',
    iconSize: [30,30],
});

//icons for landmarks
const icon_park = L.icon({
    iconUrl : 'https://agnish13.github.io/HackNPitch_PentaNoobs_Uni-Nav/icons/Parks and Rec.svg',
    iconSize: [30,30],
});

const icon_special = L.icon({
    iconUrl: 'https://agnish13.github.io/HackNPitch_PentaNoobs_Uni-Nav/icons/Special Buildings.svg',
    iconSize: [30,30],
});

const icon_playground = L.icon({
    iconUrl : 'https://agnish13.github.io/HackNPitch_PentaNoobs_Uni-Nav/icons/Playground.svg',
    iconSize: [30,30],
});


//icons for vaccine centres
const icon_vaccine = L.icon({
    iconUrl: 'https://agnish13.github.io/HackNPitch_PentaNoobs_Uni-Nav/icons/Medicine.svg',
    iconSize: [30,30],
});

//icons for miscellaneous
const icon_shops = L.icon({
    iconUrl : 'https://agnish13.github.io/HackNPitch_PentaNoobs_Uni-Nav/icons/Shops.svg',
    iconSize: [30,30],
});

const icon_gym = L.icon({
    iconUrl : 'https://agnish13.github.io/HackNPitch_PentaNoobs_Uni-Nav/icons/Gym.svg',
    iconSize: [30,30],
});

const icon_postoffice = L.icon({
    iconUrl : 'https://agnish13.github.io/HackNPitch_PentaNoobs_Uni-Nav/icons/Post Office.svg',
    iconSize: [30,30],
});

const icon_gate = L.icon({
    iconUrl : 'https://agnish13.github.io/HackNPitch_PentaNoobs_Uni-Nav/icons/Gates.svg',
    iconSize: [20,20],
});

const icon_misc = L.icon({
    iconUrl : 'https://agnish13.github.io/HackNPitch_PentaNoobs_Uni-Nav/icons/Misc.svg',
    iconSize: [30,30],
});


//markers of department buildings
L.marker([ 22.49631145776672 , 88.37165772914886 ], {icon : icon_dept})
    .bindPopup("<h1 class='text-center'>Department Of Electrical Engineering</h1><img src='./images/EE Dept.jpg'/ width='280' height='152''/><a href='deptBEE.html' class='btn btn-light mt-3'>Department Digital Map</a>")
    .closePopup()
    .addTo(dept);

L.marker([22.496856639591186 , 88.37314367294312 ], {icon : icon_dept})
    .bindPopup('<h1 class="text-center">Department Of Chemical Engineering</h1>')
    .closePopup()
    .addTo(dept);

L.marker([ 22.49772149180535 , 88.37304174900055 ], {icon : icon_dept})
    .bindPopup('<h1 class="text-center">Department Of Mechanical Engineering</h1>')
    .closePopup()
    .addTo(dept);

L.marker([ 22.497466249450643, 88.37108910083771 ], {icon : icon_dept})
    .bindPopup('<h1 class="text-center">Department Of Production Engineering</h1>')
    .closePopup()
    .addTo(dept);

L.marker([ 22.496792209123875, 88.37100863456726 ], {icon : icon_dept})
    .bindPopup('<h1 class="text-center">Department Of Civil Engineering</h1>')
    .closePopup()
    .addTo(dept);

L.marker([ 22.497130468742476, 88.37345078587532 ], {icon : icon_dept})
    .bindPopup('<h1 class="text-center">Department Of FTBE</h1>')
    .closePopup()
    .addTo(dept);

L.marker([ 22.50116845650837, 88.37060093879698 ], {icon : icon_dept})
    .bindPopup('<h1 class="text-center">Department Of Pharmaceutical Technology</h1>')
    .closePopup()
    .addTo(dept);

L.marker([ 22.50092561062157, 88.36984723806381], {icon : icon_dept})
    .bindPopup('<h1 class="text-center">Department Of History</h1>')
    .closePopup()
    .addTo(dept);

L.marker([ 22.50033769878824, 88.3696648478508 ], {icon : icon_dept})
    .bindPopup('<h1 class="text-center">Department Of English</h1>')
    .closePopup()
    .addTo(dept);

L.marker([ 22.500660462074585,88.3711266517639 ], {icon : icon_dept})
    .bindPopup('<h1 class="text-center">Department of Geological Science</h1>')
    .closePopup()
    .addTo(dept);

L.marker([ 22.49683123912208,88.37121717631815 ], {icon : icon_dept})
    .bindPopup('<h1 class="text-center">Department Of Computer Science Engineering</h1>')
    .closePopup()
    .addTo(dept);

L.marker([  22.499019999016742,88.37210834026337 ], {icon : icon_dept})
    .bindPopup('<h1 class="text-center">Department Of Metallurgical and Materials Engineering</h1>')
    .closePopup()
    .addTo(dept);

L.marker([ 22.500662940100753,88.37037295103073 ], {icon : icon_dept})
    .bindPopup('<h1 class="text-center">Department Of Chemistry</h1>')
    .closePopup()
    .addTo(dept);

L.marker([ 22.500885962273028,88.37176501750946 ], {icon : icon_dept})
    .bindPopup('<h1 class="text-center">Department Of Mathematics</h1>')
    .closePopup()
    .addTo(dept);

//markers of laboratories and workshop
L.marker([ 22.49735721373809,88.37325766682625 ], {icon : icon_lab})
    .bindPopup('<h1 class="text-center">Heat Power House</h1>')
    .closePopup()
    .addTo(dept); 

L.marker([ 22.499711374792128,88.37135195732117 ], {icon : icon_lab})
    .bindPopup('<h1 class="text-center">Nano Device Simulation Laboratory</h1>')
    .closePopup()
    .addTo(dept); 

L.marker([ 22.49722959228354,88.37139219045639 ], {icon : icon_Workshop})
    .bindPopup('<h1 class="text-center">Blue Earth Machine Workshop</h1>')
    .closePopup()
    .addTo(dept);

//markers of canteens
L.marker([ 22.496711670997534,88.37232828140259 ], {icon : icon_canteen})
    .bindPopup('<h1 class="text-center">JU Staff Canteen (Aahar)</h1>')
    .closePopup()
    .addTo(canteen);

L.marker([ 22.50092313260012,88.37033405900002 ], {icon : icon_canteen})
    .bindPopup("<h1 class='text-center'>Milan Da's Canteen (Alapan)</h1><img src='./images/milan da canteen.jpg'/ width='280' height='152''/><a href='canteen.html' class='btn btn-light mt-3'>Explore Canteens</a>")
    .closePopup()
    .addTo(canteen);

L.marker([  22.49991705222327,88.37098449468611 ], {icon : icon_canteen})
    .bindPopup('<h1 class="text-center">AC Canteen</h1>')
    .closePopup()
    .addTo(canteen);

L.marker([ 22.498660680492886,88.37217271327971 ], {icon : icon_canteen})
    .bindPopup('<h1 class="text-center">Suruchi Canteen</h1>')
    .closePopup()
    .addTo(canteen);

L.marker([ 22.495880266984035,88.37177038192748 ], {icon : icon_canteen})
    .bindPopup('<h1 class="text-center">CET Canteen</h1>')
    .closePopup()
    .addTo(canteen);

//markers of administrative buildings
L.marker([ 22.499111687042337,88.37042659521103 ], {icon : icon_admin})
    .bindPopup('<h1 class="text-center">TEQIP Building</h1>')
    .closePopup()
    .addTo(admin);

L.marker([ 22.49662369852905,88.37247312068939 ], {icon : icon_admin})
    .bindPopup("<h1 class='text-center'>Aurobindo Bhavan</h1><img src='./images/aurobindo bhavan.jpg'/ width='228' height='152''/>")
    .closePopup()
    .addTo(admin);

L.marker([ 22.499560214075466,88.37088793516159 ], {icon : icon_admin})
    .bindPopup('<h1 class="text-center">Gandhi Bhavan</h1>')
    .closePopup()
    .addTo(admin);

L.marker([ 22.49695576332845,88.37149143218994 ], {icon : icon_admin})
    .bindPopup('<h1 class="text-center">DOEACC Society</h1>')
    .closePopup()
    .addTo(admin);

L.marker([ 22.498764759057895,88.37143242359161 ], {icon : icon_library})
    .bindPopup('<h1 class="text-center">Central Library</h1>')
    .closePopup()
    .addTo(admin);

//markers of landmarks
L.marker([ 22.501961419700187,88.37114810943604 ], {icon : icon_special})
    .bindPopup("<h1 class='text-center'>Open Air Theatre</h1><img src='./images/open air theatre.jpg'/ width='228' height='152''/>")
    .closePopup()
    .addTo(landmark);

L.marker([ 22.497881327797398,88.37091878056526 ], {icon : icon_special})
    .bindPopup('<h1 class="text-center">Indoor Stadium</h1>')
    .closePopup()
    .addTo(landmark);

L.marker([ 22.498358356598086,88.37149679660797 ], {icon : icon_special})
    .bindPopup('<h1 class="text-center">Dr. Triguna Sen Auditorium</h1>')
    .closePopup()
    .addTo(landmark);

L.marker([ 22.49752572343945 , 88.37220758199692 ], {icon : icon_playground})
    .bindPopup("<h1 class='text-center'>JU Playground</h1><img src='./images/playground.JPG'/ width='228' height='152''/>")
    .closePopup()
    .addTo(landmark);

L.marker([ 22.498407917937595,88.37039172649384 ], {icon : icon_park})
    .bindPopup('<h1 class="text-center">Green Zone</h1>')
    .closePopup()
    .addTo(landmark);

L.marker([ 22.49881679831102,88.37255358695984 ], {icon : icon_park})
    .bindPopup('<h1 class="text-center">Jheel Par</h1>')
    .closePopup()
    .addTo(landmark);

//markers of vaccination centres
L.marker([ 22.501143676335378, 88.37151691317558 ], {icon : icon_vaccine})
    .bindPopup('<h1 class="text-center">Vaccination Centre 1</h1>')
    .closePopup()
    .addTo(vaccine);

L.marker([ 22.49604258321224, 88.3710877597332 ], {icon : icon_vaccine})
    .bindPopup('<h1 class="text-center">Vaccination Centre 2</h1>')
    .closePopup()
    .addTo(vaccine);

//markers of miscellaneous buildings
L.marker([ 22.501282445246975, 88.36893260478973 ], {icon : icon_misc})
    .bindPopup('<h1 class="text-center">Acharya Prafulla Chandra Roy Polytechnic</h1>')
    .closePopup()
    .addTo(misc);

L.marker([ 22.502229043751353, 88.36904793977737 ], {icon : icon_misc})
    .bindPopup('<h1 class="text-center">Central Glass and Ceramic Research Institute</h1>')
    .closePopup()
    .addTo(misc);

L.marker([ 22.500615857596177, 88.36941272020339 ], {icon : icon_misc})
    .bindPopup('<h1 class="text-center">Regional Institute Of Printing Technology</h1>')
    .closePopup()
    .addTo(misc);

L.marker([ 22.499899705945708,88.37203592061996 ], {icon : icon_misc})
    .bindPopup('<h1 class="text-center">School Of Cognitive Science</h1>')
    .closePopup()
    .addTo(misc);

L.marker([ 22.49807585662384,88.37042123079299 ], {icon : icon_misc})
    .bindPopup('<h1 class="text-center">Institute Of Chemical Engineers</h1>')
    .closePopup()
    .addTo(misc);

L.marker([ 22.49934958001451,88.37006986141205 ], {icon : icon_misc})
    .bindPopup('<h1 class="text-center">Jadavpur Vidyapith</h1>')
    .closePopup()
    .addTo(misc);

L.marker([ 22.497679364458865,88.37040781974792 ], {icon : icon_postoffice})
    .bindPopup('<h1 class="text-center">Jadavpur University Sub Post Office</h1>')
    .closePopup()
    .addTo(misc);

//markers of shops
L.marker([ 22.500744714939003,88.36995452642441 ], {icon : icon_shops})
    .bindPopup('<h1 class="text-center">Worldview Book Shop</h1>')
    .closePopup()
    .addTo(misc);

//markers of gyms
L.marker([ 22.49939914099889, 88.37139219045639 ], {icon : icon_gym})
    .bindPopup('<h1 class="text-center">Gymnasium, JU</h1>')
    .closePopup()
    .addTo(misc);

//markers of gates
L.marker([ 22.49607386933359, 88.37256699800491 ], {icon : icon_gate})
    .bindPopup('<h1 class="text-center">Gate No. 1</h1>')
    .closePopup()
    .addTo(gates);

L.marker([ 22.4957795936552, 88.37081249803305 ], {icon : icon_gate})
    .bindPopup('<h1 class="text-center">Gate No. 2</h1>')
    .closePopup()
    .addTo(gates);

L.marker([22.498080503009664, 88.37015770375729 ], {icon : icon_gate})
    .bindPopup('<h1 class="text-center">Gate No. 3</h1>')
    .closePopup()
    .addTo(gates);

L.marker([ 22.499759696625723, 88.36937248706816 ], {icon : icon_gate})
    .bindPopup('<h1 class="text-center">Gate No. 4</h1>')
    .closePopup()
    .addTo(gates);

//for creating maps
var map = L.map('map', {
	center: [22.4998, 88.3715],
	zoom: 17,
	layers: [streets,landmark,gates],
    zoomControl : false,
});

//fixing map bounds
var bounds = [[ 22.514301323395372 , 88.39994430541992],[ 22.484009602284136 , 88.34329538047314]];
map.setMaxBounds(bounds);

//for zoom button
L.control.zoom({
    position:'bottomright'
}).addTo(map);

map.options.minZoom = 16;
map.options.maxZoom = 18;

//for the creating filter options
var overlays = {
    "<img src='https://agnish13.github.io/HackNPitch_PentaNoobs_Uni-Nav/icons/Department.svg' width=30 height=30 /> Departments & Labs": dept,
    "<img src='https://agnish13.github.io/HackNPitch_PentaNoobs_Uni-Nav/icons/Canteen.svg' width=30 height=30 /> Canteens": canteen,
    "<img src='https://agnish13.github.io/HackNPitch_PentaNoobs_Uni-Nav/icons/Admin.svg' width=30 height=30 /> Administrative buildings": admin,
    "<img src='https://agnish13.github.io/HackNPitch_PentaNoobs_Uni-Nav/icons/Special Buildings.svg' width=30 height=30 />Landmarks": landmark,
    "<img src='https://agnish13.github.io/HackNPitch_PentaNoobs_Uni-Nav/icons/Medicine.svg' width=30 height=30 />Vaccination Centres": vaccine,
    "<img src='https://agnish13.github.io/HackNPitch_PentaNoobs_Uni-Nav/icons/Misc.svg' width=30 height=30 />Miscelleneous Buildings":misc,
};

L.control.layers(null,overlays,{
    position:'bottomleft'
}).addTo(map);
