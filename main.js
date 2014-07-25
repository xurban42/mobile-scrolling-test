goog.provide('mobile.scrolling.main');

goog.require('goog.dom');
goog.require('goog.dom.iframe');
goog.require('goog.events');


mobile.scrolling.main = function() {
  goog.dom.iframe.createWithContent(
        /* parent*/goog.dom.getElement('iframe-scroll-horizontal'),
        /* head */ mobile.scrolling.iframeHead('horizontal'),
        /* body */ mobile.scrolling.HTML('horizontal'),
        /* style */'position:absolute; width: 100%; height: 100%;');
  goog.dom.getElement('scroll-auto-horizontal').innerHTML = mobile.scrolling.HTML('horizontal');
  goog.dom.getElement('touch-scroll-horizontal').innerHTML = mobile.scrolling.HTML('horizontal');
  goog.dom.getElement('overthrow-horizontal').innerHTML = mobile.scrolling.HTML('horizontal');

  goog.dom.iframe.createWithContent(
        /* parent*/goog.dom.getElement('iframe-scroll-vertical'),
        /* head */ mobile.scrolling.iframeHead('vertical'),
        /* body */ mobile.scrolling.HTML('vertical'),
        /* style */'position:absolute; width: 100%; height: 100%;');
  goog.dom.getElement('scroll-auto-vertical').innerHTML = mobile.scrolling.HTML('vertical');
  goog.dom.getElement('touch-scroll-vertical').innerHTML = mobile.scrolling.HTML('vertical');
  goog.dom.getElement('overthrow-vertical').innerHTML = mobile.scrolling.HTML('vertical');

  goog.events.listen(goog.dom.getElement('switch'), 'click' ,function(e) {
    goog.dom.classes.toggle(goog.dom.getElement('horizontal'),'hidden');
    goog.dom.classes.toggle(goog.dom.getElement('vertical'),'hidden');
  });
}

mobile.scrolling.iframeHead = function(direction) { return '<link href="www/main.css" media="all" rel="stylesheet" type="text/css">'+
  '<link href="main.css" media="all" rel="stylesheet" type="text/css">'+
  '<style>body {overflow'+(direction=='horizontal'?'-y':'-x')+':hidden;margin:0; padding:0;}</style>'
};

mobile.scrolling.HTML = function(direction) {return '<ul id="map-list" class='+direction+'>'+
'  <li id="icc/RM.22264F" class="map-item">'+
'    <div class="thumbnail-item">'+
'      <img src="http://www.oldmapsonline.org/img/75/icc/RM.22264F.jpg">'+
'    </div>'+
'  </li>'+
'  <li id="rumsey/3733.045" class="map-item">'+
'    <div class="thumbnail-item">'+
'      <img src="http://www.oldmapsonline.org/img/75/rumsey/3733.045.jpg">'+
'    </div>'+
'  </li>'+
'  <li id="rumsey/5023.048" class="map-item">'+
'    <div class="thumbnail-item">'+
'      <img src="http://www.oldmapsonline.org/img/75/rumsey/5023.048.jpg">'+
'    </div>'+
'  </li>'+
'  <li id="rumsey/1494.070" class="map-item">'+
'    <div class="thumbnail-item">'+
'      <img src="http://www.oldmapsonline.org/img/75/rumsey/1494.070.jpg">'+
'    </div>'+
'  </li>'+
'  <li id="rumsey/0436.040" class="map-item">'+
'    <div class="thumbnail-item">'+
'      <img src="http://www.oldmapsonline.org/img/75/rumsey/0436.040.jpg">'+
'    </div>'+
'  </li>'+
'  <li id="rumsey/2174.040" class="map-item">'+
'    <div class="thumbnail-item">'+
'      <img src="http://www.oldmapsonline.org/img/75/rumsey/2174.040.jpg">'+
'    </div>'+
'  </li>'+
'  <li id="rumsey/1012.062" class="map-item">'+
'    <div class="thumbnail-item">'+
'      <img src="http://www.oldmapsonline.org/img/75/rumsey/1012.062.jpg">'+
'    </div>'+
'  </li>'+
'  <li id="rumsey/0737.182" class="map-item">'+
'    <div class="thumbnail-item">'+
'      <img src="http://www.oldmapsonline.org/img/75/rumsey/0737.182.jpg">'+
'    </div>'+
'  </li>'+
'  <li id="rumsey/2612.063" class="map-item">'+
'    <div class="thumbnail-item">'+
'      <img src="http://www.oldmapsonline.org/img/75/rumsey/2612.063.jpg">'+
'    </div>'+
'  </li>'+
'  <li id="cuni/856696" class="map-item">'+
'    <div class="thumbnail-item">'+
'      <img src="http://www.oldmapsonline.org/img/75/cuni/856696.jpg">'+
'    </div>'+
'  </li>'+
'  <li id="rumsey/0507.056" class="map-item">'+
'    <div class="thumbnail-item">'+
'      <img src="http://www.oldmapsonline.org/img/75/rumsey/0507.056.jpg">'+
'    </div>'+
'  </li>'+
'  <li id="rumsey/0732.058" class="map-item">'+
'    <div class="thumbnail-item">'+
'      <img src="http://www.oldmapsonline.org/img/75/rumsey/0732.058.jpg">'+
'    </div>'+
'  </li>'+
'  <li id="cuni/1050401" class="map-item">'+
'    <div class="thumbnail-item">'+
'      <img src="http://www.oldmapsonline.org/img/75/cuni/1050401.jpg">'+
'    </div>'+
'  </li>'+
'  <li id="rumsey/4224.040" class="map-item">'+
'    <div class="thumbnail-item">'+
'      <img src="http://www.oldmapsonline.org/img/75/rumsey/4224.040.jpg">'+
'    </div>'+
'  </li>'+
'  <li id="cuni/1013187" class="map-item">'+
'    <div class="thumbnail-item">'+
'      <img src="http://www.oldmapsonline.org/img/75/cuni/1013187.jpg">'+
'    </div>'+
'  </li>'+
'  <li id="rumsey/2113.089" class="map-item">'+
'    <div class="thumbnail-item">'+
'      <img src="http://www.oldmapsonline.org/img/75/rumsey/2113.089.jpg">'+
'    </div>'+
'  </li>'+
'  <li id="rumsey/4765.096" class="map-item">'+
'    <div class="thumbnail-item">'+
'      <img src="http://www.oldmapsonline.org/img/75/rumsey/4765.096.jpg">'+
'    </div>'+
'  </li>'+
'  <li id="harvard/11539120" class="map-item">'+
'    <div class="thumbnail-item">'+
'      <img src="http://www.oldmapsonline.org/img/75/harvard/11539120.jpg">'+
'    </div>'+
'  </li>'+
'  <li id="rumsey/0737.175" class="map-item">'+
'    <div class="thumbnail-item">'+
'      <img src="http://www.oldmapsonline.org/img/75/rumsey/0737.175.jpg">'+
'    </div>'+
'  </li>'+
'  <li id="rumsey/4807.117" class="map-item">'+
'    <div class="thumbnail-item">'+
'      <img src="http://www.oldmapsonline.org/img/75/rumsey/4807.117.jpg">'+
'    </div>'+
'  </li>'+
'  <li id="rumsey/4613.025" class="map-item">'+
'    <div class="thumbnail-item">'+
'      <img src="http://www.oldmapsonline.org/img/75/rumsey/4613.025.jpg">'+
'    </div>'+
'  </li>'+
'  <li id="rumsey/2077.053" class="map-item">'+
'    <div class="thumbnail-item">'+
'      <img src="http://www.oldmapsonline.org/img/75/rumsey/2077.053.jpg">'+
'    </div>'+
'  </li>'+
'  <li id="rumsey/0036.025" class="map-item">'+
'    <div class="thumbnail-item">'+
'      <img src="http://www.oldmapsonline.org/img/75/rumsey/0036.025.jpg">'+
'    </div>'+
'  </li>'+
'  <li id="rumsey/2359.014" class="map-item">'+
'    <div class="thumbnail-item">'+
'      <img src="http://www.oldmapsonline.org/img/75/rumsey/2359.014.jpg">'+
'    </div>'+
'  </li>'+
'  <li id="cuni/1039359" class="map-item">'+
'    <div class="thumbnail-item">'+
'      <img src="http://www.oldmapsonline.org/img/75/cuni/1039359.jpg">'+
'    </div>'+
'  </li>'+
'  <li id="rumsey/2486.039" class="map-item">'+
'    <div class="thumbnail-item">'+
'      <img src="http://www.oldmapsonline.org/img/75/rumsey/2486.039.jpg">'+
'    </div>'+
'  </li>'+
'  <li id="rumsey/4757.062" class="map-item">'+
'    <div class="thumbnail-item">'+
'      <img src="http://www.oldmapsonline.org/img/75/rumsey/4757.062.jpg">'+
'    </div>'+
'  </li>'+
'  <li id="cuni/853850" class="map-item">'+
'    <div class="thumbnail-item">'+
'      <img src="http://www.oldmapsonline.org/img/75/cuni/853850.jpg">'+
'    </div>'+
'  </li>'+
'</ul>'};

goog.exportSymbol('main', mobile.scrolling.main);