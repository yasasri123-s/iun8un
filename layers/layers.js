var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_6tfuyu_1 = new ol.format.GeoJSON();
var features_6tfuyu_1 = format_6tfuyu_1.readFeatures(json_6tfuyu_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_6tfuyu_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_6tfuyu_1.addFeatures(features_6tfuyu_1);
var lyr_6tfuyu_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_6tfuyu_1, 
                style: style_6tfuyu_1,
                popuplayertitle: "6tfuyu",
                interactive: true,
                title: '<img src="styles/legend/6tfuyu_1.png" /> 6tfuyu'
            });

lyr_OSMStandard_0.setVisible(true);lyr_6tfuyu_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_6tfuyu_1];
lyr_6tfuyu_1.set('fieldAliases', {'id': 'id', 'area': 'area', });
lyr_6tfuyu_1.set('fieldImages', {'id': '', 'area': '', });
lyr_6tfuyu_1.set('fieldLabels', {'id': 'no label', 'area': 'no label', });
lyr_6tfuyu_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});