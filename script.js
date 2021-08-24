
var mapbox = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});

var map = new L.Map('map', {
    layers: [mapbox],
    center: [-29.972444, -71.309506],
    zoom: 19,
    zoomControl: true
});


				
	  var style1 = {
                    'color': "green",
                    'weight': 1,
                    'opacity': 5,
					'fillOpacity': 0.1
                };
				
var style2 = {
                    'color': "blue",
                    'weight': 1,
                    'opacity': 5,
					'fillOpacity': 0.1
                };			

				
var style3 = {
                    'color': "yellow",
                    'weight': 1,
                    'opacity': 5,
					'fillOpacity': 0.1
                };	

var style4 = {
                    'color': "purple",
                    'weight': 1,
                    'opacity': 5,
					'fillOpacity': 0.1
                };



				
var	grupo1 = L.geoJson(grupo1, {	
              	style: style1		  
                  
              }).addTo(map);
			  
var	grupo2 = L.geoJson(grupo2, {	
              	style: style2		  
                  
              }).addTo(map);

var	grupo3 = L.geoJson(grupo3, {	
              	style: style3		  
                  
              }).addTo(map);
			  
var	grupo4 = L.geoJson(grupo4, {	
              	style: style4		  
                  
              }).addTo(map);	

var geojsonMarkerOptions = {
    radius: 2.4,
    fillColor: "red",
    color: "red",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8
};
	
 var homepass= L.geoJSON(homepass, {
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, geojsonMarkerOptions);
    }
}).addTo(map);
	
	
	
	
var markers1 = L.markerClusterGroup();	
	
 var cent_g1= L.geoJSON(cent_g1, {
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, geojsonMarkerOptions);
    }
});                /*.addTo(map);	*/	  
			  
markers1.addLayer(cent_g1);
map.addLayer(markers1);
map.fitBounds(markers1.getBounds());		



var markers2 = L.markerClusterGroup();	
	
 var cent_g2= L.geoJSON(cent_g2, {
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, geojsonMarkerOptions);
    }
});                /*.addTo(map);	*/	  
			  
markers2.addLayer(cent_g2);
map.addLayer(markers2);
map.fitBounds(markers2.getBounds());	  



var markers3 = L.markerClusterGroup();	
	
 var cent_g3= L.geoJSON(cent_g3, {
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, geojsonMarkerOptions);
    }
});                /*.addTo(map);	*/	  
			  
markers3.addLayer(cent_g3);
map.addLayer(markers3);
map.fitBounds(markers3.getBounds());



var markers4 = L.markerClusterGroup();	
	
 var cent_g4= L.geoJSON(cent_g4, {
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, geojsonMarkerOptions);
    }
});                /*.addTo(map);	*/	  
			  
markers4.addLayer(cent_g4);
map.addLayer(markers4);
map.fitBounds(markers4.getBounds());
		  
			  
 var baseMaps = [
					 {
						groupName : "Mapas Base",
						layers    : {
							
							"Mapa Base" :mapbox
                            					
                            						
						}
					}							
	            ];	
		 
		var overlays = [
					 {
						groupName : "homepass",
						expanded  : false,
						layers    : { 
							"Homepass" : homepass
						
						}	
					 }, {
						groupName : "Agrupacion",
						expanded  : false,
						layers    : { 
							"Concetraciones 1"     : markers1,
							"Concetraciones 2"     : markers2,
							"Concetraciones 3"     : markers3,
							"Concetraciones 4"     : markers4,		
						}	
					 } 				 
	];
				
         //definir las opciones para el styledlayercontrol
				var options = {
		                 container_width 	: "300px",
		                 container_maxHeight : "350px", 
		                 group_maxHeight     : "80px",
		                 exclusive       	: false
	            };
				
		//crear el styledlayerControl 
				var control = L.Control.styledLayerControl(baseMaps,overlays, options);
	            map.addControl(control);

        //seleccion de capas que van a mostrarse por defecto
         		control.unSelectGroup( "homepass" );
		        control.selectGroup( "Agrupacion" );








// add location control to global name space for testing only
// on a production site, omit the "lc = "!
lc = L.control.locate({
    strings: {
        title: "Show me where I am, yo!"
    }
}).addTo(map);
