customConfig = {
    title: 'GéoPicardie - sviewer',

    /**
     * force default language, see etc/i18n.js
     */
    // lang: 'fr',

    /**
     * base url of the geOrchetra SDI. Layers coming from this SDI
     * will have enhanced features.
     */
    geOrchestraBaseUrl: 'https://www.geopicardie.fr/',

    /**
     * projection
     */
    projcode: 'EPSG:2154',

    /**
     * map bounds
     */
    initialExtent: [-357823.2365, 6037008.6939, 1313632.3628, 7230727.3772],
    maxExtent: [-357823.2365, 6037008.6939, 1313632.3628, 7230727.3772],
    restrictedExtent: [-357823.2365, 6037008.6939, 1313632.3628, 7230727.3772],

    /**
     * getFeatureInfo control
     */
    maxFeatures: 10,
    nodata: '<!--nodatadetect-->\n<!--nodatadetect-->',

    /**
     * openLS control
     */
    openLSGeocodeUrl: "http://wxs.ign.fr/c60xlpat0asxa9aqkmkcum80/geoportail/ols?",
    /**
     * background layers (EPSG:2154)
     */
    layersBackground: [
        new ol.layer.Tile({
            source: new ol.source.TileWMS({
                url: 'http://osm.geopicardie.fr/mapproxy/service',
                params: {
                    'LAYERS': 'bright',
                    'VERSION': '1.3.0',
                    'FORMAT': 'image/png'
                },
                extent: [-378305.81, 1212610.74, 6093283.21, 7186901.68],
                attributions: [new ol.Attribution({ html: 'tiles from GéoPicardie, data from <a href="http://www.openstreetmap.org/">OSM</a> contributors'})],
            })
        }),
        new ol.layer.Tile({
            source: new ol.source.TileWMS({
                url: 'http://osm.geopicardie.fr/mapproxy/service',
                params: {
                    'LAYERS': 'faded',
                    'VERSION': '1.3.0',
                    'FORMAT': 'image/png'
                },
                extent: [-378305.81, 1212610.74, 6093283.21, 7186901.68],
                attributions: [new ol.Attribution({ html: 'tiles from GéoPicardie, data from <a href="http://www.openstreetmap.org/">OSM</a> contributors'})],
            })
        }),
        new ol.layer.Tile({
            source: new ol.source.TileWMS({
                url: 'http://osm.geopicardie.fr/mapproxy/service',
                params: {
                    'LAYERS': 'grey',
                    'VERSION': '1.3.0',
                    'FORMAT': 'image/png'
                },
                extent: [-378305.81, 1212610.74, 6093283.21, 7186901.68],
                attributions: [new ol.Attribution({ html: 'tiles from GéoPicardie, data from <a href="http://www.openstreetmap.org/">OSM</a> contributors'})],
            })
        }),
        new ol.layer.Tile({
            source: new ol.source.TileWMS({
                url: 'http://www.geopicardie.fr/geoserver/geopicardie/ows',
                params: {
                    'LAYERS': 'picardie_ortho_ign_2013_vis',
                    'VERSION': '1.3.0',
                    'FORMAT': 'image/png'
                },
                extent: [-378305.81, 1212610.74, 6093283.21, 7186901.68],
                attributions: [new ol.Attribution({ html: 'tiles from GéoPicardie, data from <a href="http://www.openstreetmap.org/">OSM</a> contributors'})],
            })
        })
    ],

    /**
     * social media links (prefixes)
     */
    socialMedia: {
        'Twitter' : 'https://twitter.com/intent/tweet?text=',
        'Google+' : 'https://plus.google.com/share?url=',
        'Facebook': 'http://www.facebook.com/sharer/sharer.php?u='
    }
};
