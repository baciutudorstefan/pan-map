var panZoomMap = svgPanZoom('#map', {
    controlIconsEnabled: true
  });
//   or
   var svgElement = document.querySelector('#map')
  var panZoomMap = svgPanZoom('#map', {
    viewportSelector: '.panzoom'
  , panEnabled: true
  , controlIconsEnabled: true
  , zoomEnabled: true
  , dblClickZoomEnabled: true
  , mouseWheelZoomEnabled: false
  , preventMouseEventsDefault: true
  , zoomScaleSensitivity: 0.2
  , minZoom: 0.5
  , maxZoom: 6
  , fit: true
  , contain: false
  , center: true
  , refreshRate: 'auto'
  , beforeZoom: function(){}
  , onZoom: function(){}
  , beforePan: function(){}
  , onPan: function(){}
  , customEventsHandler: {}
  , eventsListenerElement: null
  });
  
  
  // $( "#GL" ).click(function() {
  //   alert( "You clicked on Greenland" );
  // });
  
  $('#RU').magnificPopup({
    items: {
        src: '#test-popup',
        type: 'inline'
    },
     closeBtnInside: true,
    mainClass: 'mfp-fade'
  });


  document.querySelectorAll("path").forEach(function(path, i) {
    path.innerHTML = '<span>' + (i + 'tooltip') + '</span>' + path.innerHTML
  })