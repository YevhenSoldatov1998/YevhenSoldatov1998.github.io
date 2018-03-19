(function(root, factory) {
  if(typeof exports === 'object') {
    module.exports = factory();
  }
  else if(typeof define === 'function' && define.amd) {
    define('GMaps', [], factory);
  }

  root.GMaps = factory();

}(this, function() {

/*!
 * GMaps.js v0.4.16
 * http://hpneo.github.com/gmaps/
 *
 * Copyright 2014, Gustavo Leon
 * Released under the MIT License.
 */



var extend_object = function(obj, new_obj) {
  var name;

  if (obj === new_obj) {
    return obj;
  }

  for (name in new_obj) {
    obj[name] = new_obj[name];
  }

  return obj;
};

var replace_object = function(obj, replace) {
  var name;

  if (obj === replace) {
    return obj;
  }

  for (name in replace) {
    if (obj[name] != undefined) {
      obj[name] = replace[name];
    }
  }

  return obj;
};
var getElementById = function(id, context) {
  var element,
  id = id.replace('#', '');

  if ('jQuery' in this && context) {
    element = $("#" + id, context)[0];
  } else {
    element = document.getElementById(id);
  };

  return element;
};
var GMaps = (function(global) {
  "use strict";



  var GMaps = function(options) {
    if (!this) return new GMaps(options);

    options.zoom = options.zoom || 15;
    options.mapType = options.mapType || 'roadmap';

    var self = this,
        i,
        events_that_hide_context_menu = ['bounds_changed', 'center_changed', 'click', 'dblclick', 'drag', 'dragend', 'dragstart', 'idle', 'maptypeid_changed', 'projection_changed', 'resize', 'tilesloaded', 'zoom_changed'],
        events_that_doesnt_hide_context_menu = ['mousemove', 'mouseout', 'mouseover'],
        options_to_be_deleted = ['el', 'lat', 'lng', 'mapType', 'width', 'height', 'markerClusterer', 'enableNewStyle'],
        container_id = options.el || options.div,
        markerClustererFunction = options.markerClusterer,
        mapType = google.maps.MapTypeId[options.mapType.toUpperCase()],
        map_center = new google.maps.LatLng(options.lat, options.lng),
        zoomControl = options.zoomControl || false,
        zoomControlOpt = options.zoomControlOpt || {
          style: 'DEFAULT',
          position: 'TOP_LEFT'
        },
        zoomControlStyle = zoomControlOpt.style || 'DEFAULT',
        zoomControlPosition = zoomControlOpt.position || 'TOP_LEFT',
        panControl = options.panControl || false,
        mapTypeControl = options.mapTypeControl || false,
        scaleControl = options.scaleControl || true,
        streetViewControl = options.streetViewControl || false,
        overviewMapControl = overviewMapControl || true,
        map_options = {},
        map_base_options = {
          zoom: this.zoom,
          center: map_center,
          mapTypeId: mapType
        },
        map_controls_options = {
          panControl: panControl,
          zoomControl: zoomControl,
          zoomControlOptions: {
            style: google.maps.ZoomControlStyle[zoomControlStyle],
            position: google.maps.ControlPosition[zoomControlPosition]
          },
          mapTypeControl: mapTypeControl,
          scaleControl: scaleControl,
          streetViewControl: streetViewControl,
          overviewMapControl: overviewMapControl
        };

  };


})

    function initialize() {
        var mapOptions = {
            center: new google.maps.LatLng(48.5181176, 32.2119937),
            zoom: 17,
            mapTypeId: google.maps.MapTypeId.HYBRID,
            scrollwheel: true,
            draggable: true,
            panControl: true,
            zoomControl: true,
            mapTypeControl: true,
            scaleControl: true,
            streetViewControl: true,
            overviewMapControl: true,
            rotateControl: true,
        };
        var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
    }
    google.maps.event.addDomListener(window, 'load', initialize);

    $('#testimonial').ready(function () {
        //rotation speed and timer
        var speed = 5000;

        var run = setInterval(rotate, speed);
        var textSlides = $('.textslide');
        var textContainer = $('#textslides ul');
        var elm = textContainer.find(':first-child').prop("tagName");
        var item_width = textContainer.width();
        var textPrevious = 'textprev'; //id of previous button
        var textNext = 'textnext'; //id of next button
        textSlides.width(item_width); //set the slides to the correct pixel width
        textContainer.parent().width(item_width);
        textContainer.width(textSlides.length * item_width); //set the slides container to the correct total width
        textContainer.find(elm + ':first').before(textContainer.find(elm + ':last'));
        resetSlides();


        //if user clicked on prev button

        $('#buttons a').click(function (e) {
            //slide the item

            if (textContainer.is(':animated')) {
                return false;
            }
            if (e.target.id == textPrevious) {
                textContainer.stop().animate({
                    'left': 0
                }, 1500, function () {
                    textContainer.find(elm + ':first').before(textContainer.find(elm + ':last'));
                    resetSlides();
                });
            }

            if (e.target.id == textNext) {
                textContainer.stop().animate({
                    'left': item_width * -2
                }, 1500, function () {
                    textContainer.find(elm + ':last').after(textContainer.find(elm + ':first'));
                    resetSlides();
                });
            }

            //cancel the link behavior
            return false;

        });

        //if mouse hover, pause the auto rotation, otherwise rotate it
        textContainer.parent().mouseenter(function () {
            clearInterval(run);
        }).mouseleave(function () {
            run = setInterval(rotate, speed);
        });


        function resetSlides() {
            //and adjust the container so current is in the frame
            textContainer.css({
                'left': -1 * item_width
            });
        }

    });
//a simple function to click next link
//a timer will call this function, and the rotation will begin





return GMaps;
}));
