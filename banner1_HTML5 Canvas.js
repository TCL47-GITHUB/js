(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"banner1_HTML5 Canvas_atlas_1", frames: [[0,0,1200,1200],[0,1202,1090,705]]},
		{name:"banner1_HTML5 Canvas_atlas_2", frames: [[1094,0,284,88],[0,259,696,168],[698,259,437,88],[571,429,518,168],[1094,90,215,88],[0,429,569,168],[0,0,1092,257]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_6 = function() {
	this.initialize(ss["banner1_HTML5 Canvas_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_5 = function() {
	this.initialize(ss["banner1_HTML5 Canvas_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(ss["banner1_HTML5 Canvas_atlas_2"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["banner1_HTML5 Canvas_atlas_2"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["banner1_HTML5 Canvas_atlas_2"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["banner1_HTML5 Canvas_atlas_2"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap1 = function() {
	this.initialize(ss["banner1_HTML5 Canvas_atlas_2"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.moto1 = function() {
	this.initialize(img.moto1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,4592,4592);


(lib.moto2 = function() {
	this.initialize(ss["banner1_HTML5 Canvas_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.moto3 = function() {
	this.initialize(ss["banner1_HTML5 Canvas_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.x3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.moto3();
	this.instance.setTransform(0,0,0.2379,0.2379);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.x3, new cjs.Rectangle(0,0,259.4,167.8), null);


(lib.x2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.moto2();
	this.instance.setTransform(0,0,0.2238,0.2238);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.x2, new cjs.Rectangle(0,0,268.6,268.6), null);


(lib.x1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.moto1();
	this.instance.setTransform(0,0,0.0512,0.056);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.x1, new cjs.Rectangle(0,0,235,257.1), null);


(lib.Symbol6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_6();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(0,0,142,44), null);


(lib.Symbol5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_5();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(0,0,348,84), null);


(lib.Symbol4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_4();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,218.5,44), null);


(lib.Symbol3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_3();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,259,84), null);


(lib.Symbol2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_2();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,107.5,44), null);


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_1();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,284.5,84), null);


(lib._03 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF00FF").s().p("A/PPoIAA/PMA+fAAAIAAfPg");
	this.shape.setTransform(200,100);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib._03, new cjs.Rectangle(0,0,400,200), null);


(lib._02 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0000CC").s().p("A/PPoIAA/PMA+fAAAIAAfPg");
	this.shape.setTransform(200,100);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib._02, new cjs.Rectangle(0,0,400,200), null);


(lib._01 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("A/PPoIAA/PMA+fAAAIAAfPg");
	this.shape.setTransform(200,100);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib._01, new cjs.Rectangle(0,0,400,200), null);


// stage content:
(lib.banner1_HTML5Canvas = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// moto3_png
	this.instance = new lib.x3();
	this.instance.setTransform(987.25,297.45,0.2147,0.2147,0,0,0,143.2,143.2);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(38).to({_off:false},0).wait(1).to({regX:129.7,regY:83.9,scaleX:0.3626,scaleY:0.3626,x:982.1,y:278.55,alpha:0.2095},0).wait(1).to({scaleX:0.5043,scaleY:0.5043,x:980,y:272.75,alpha:0.4103},0).wait(1).to({scaleX:0.6262,scaleY:0.6262,x:978.2,y:267.7,alpha:0.5831},0).wait(1).to({scaleX:0.7234,scaleY:0.7234,x:976.75,y:263.7,alpha:0.7208},0).wait(1).to({scaleX:0.797,scaleY:0.797,x:975.65,y:260.65,alpha:0.8252},0).wait(1).to({scaleX:0.8507,scaleY:0.8507,x:974.9,y:258.4,alpha:0.9012},0).wait(1).to({scaleX:0.888,scaleY:0.888,x:974.35,y:256.9,alpha:0.9541},0).wait(1).to({regX:143.3,regY:143.3,scaleX:0.9122,scaleY:0.9122,x:986.3,y:310,alpha:0.9883},0).wait(24));

	// moto2_png
	this.instance_1 = new lib.x2();
	this.instance_1.setTransform(597.3,253.3,0.2293,0.2293,0,0,0,134.3,134.3);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(43).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},9,cjs.Ease.quadOut).wait(18));

	// moto1_png
	this.instance_2 = new lib.x1();
	this.instance_2.setTransform(170.5,271.6,0.3672,0.3672,0,0,0,117.5,128.6);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(47).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},9,cjs.Ease.quadOut).wait(14));

	// TÍNH_NĂNG
	this.instance_3 = new lib.Symbol5();
	this.instance_3.setTransform(958.25,60.75,1,1,0,0,0,174,41.9);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(14).to({_off:false},0).to({x:1005.2,alpha:1},24,cjs.Ease.sineOut).wait(32));

	// ĐỘC_ĐÁO
	this.instance_4 = new lib.Symbol6();
	this.instance_4.setTransform(1093.8,136.3,1,1,0,0,0,71,21.9);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(14).to({_off:false},0).to({x:902.2,alpha:1},24,cjs.Ease.sineOut).wait(32));

	// THIẾT_KẾ
	this.instance_5 = new lib.Symbol3();
	this.instance_5.setTransform(547.6,60.75,1,1,0,0,0,129.4,41.9);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(9).to({_off:false},0).to({x:602.35,alpha:1},24,cjs.Ease.sineOut).wait(37));

	// THỜI_THƯỢNG
	this.instance_6 = new lib.Symbol4();
	this.instance_6.setTransform(666.2,136.3,1,1,0,0,0,109.2,21.9);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(9).to({_off:false},0).to({x:582.15,alpha:1},24,cjs.Ease.sineOut).wait(37));

	// ĐỘNG_CƠ
	this.instance_7 = new lib.Symbol1();
	this.instance_7.setTransform(167.55,60.75,1,1,0,0,0,142.3,41.9);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(4).to({_off:false},0).to({x:194.95,alpha:1},24,cjs.Ease.sineOut).wait(42));

	// TỐI_ƯU
	this.instance_8 = new lib.Symbol2();
	this.instance_8.setTransform(284.4,136.3,1,1,0,0,0,53.8,21.9);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(4).to({_off:false},0).to({x:106.45,alpha:1},24,cjs.Ease.sineOut).wait(42));

	// _3
	this.instance_9 = new lib._03();
	this.instance_9.setTransform(1000,198.75,1,1.9875,0,0,0,200,100);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({scaleY:1.9297,y:192.95},0).wait(1).to({scaleY:1.8773,y:187.7},0).wait(1).to({scaleY:1.8294,y:182.95},0).wait(1).to({scaleY:1.7854,y:178.55},0).wait(1).to({scaleY:1.745,y:174.5},0).wait(1).to({scaleY:1.7074,y:170.75},0).wait(1).to({scaleY:1.6724,y:167.25},0).wait(1).to({scaleY:1.6395,y:163.95},0).wait(1).to({scaleY:1.6082,y:160.8},0).wait(1).to({scaleY:1.5782,y:157.8},0).wait(1).to({scaleY:1.549,y:154.9},0).wait(1).to({scaleY:1.5202,y:152},0).wait(1).to({scaleY:1.4912,y:149.1},0).wait(1).to({scaleY:1.4613,y:146.15},0).wait(1).to({scaleY:1.4299,y:143},0).wait(1).to({scaleY:1.3959,y:139.6},0).wait(1).to({scaleY:1.3575,y:135.75},0).wait(1).to({scaleY:1.3012,y:130.1},0).wait(1).to({scaleY:1.2218,y:122.2},0).wait(1).to({scaleY:1.1355,y:113.55},0).wait(1).to({scaleY:1.0679,y:106.8},0).wait(1).to({scaleY:1.0265,y:102.65},0).wait(1).to({scaleY:1.0058,y:100.6},0).wait(1).to({scaleY:1,y:100},0).wait(46));

	// _2
	this.instance_10 = new lib._02();
	this.instance_10.setTransform(600,200.65,1,2.0067,0,0,0,200,100);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1).to({scaleY:1.9478,y:194.8},0).wait(1).to({scaleY:1.8943,y:189.45},0).wait(1).to({scaleY:1.8455,y:184.55},0).wait(1).to({scaleY:1.8007,y:180.05},0).wait(1).to({scaleY:1.7595,y:175.95},0).wait(1).to({scaleY:1.7212,y:172.1},0).wait(1).to({scaleY:1.6855,y:168.55},0).wait(1).to({scaleY:1.652,y:165.2},0).wait(1).to({scaleY:1.6201,y:162},0).wait(1).to({scaleY:1.5895,y:158.95},0).wait(1).to({scaleY:1.5597,y:155.95},0).wait(1).to({scaleY:1.5303,y:153.05},0).wait(1).to({scaleY:1.5007,y:150.05},0).wait(1).to({scaleY:1.4703,y:147.05},0).wait(1).to({scaleY:1.4383,y:143.85},0).wait(1).to({scaleY:1.4036,y:140.35},0).wait(1).to({scaleY:1.3644,y:136.45},0).wait(1).to({scaleY:1.307,y:130.7},0).wait(1).to({scaleY:1.2262,y:122.6},0).wait(1).to({scaleY:1.1381,y:113.8},0).wait(1).to({scaleY:1.0692,y:106.9},0).wait(1).to({scaleY:1.027,y:102.7},0).wait(1).to({scaleY:1.006,y:100.6},0).wait(1).to({scaleY:1,y:100},0).wait(46));

	// _1
	this.instance_11 = new lib._01();
	this.instance_11.setTransform(200,199.7,1,1.997,0,0,0,200,100);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1).to({scaleY:1.9387,y:193.85},0).wait(1).to({scaleY:1.8857,y:188.55},0).wait(1).to({scaleY:1.8373,y:183.75},0).wait(1).to({scaleY:1.793,y:179.3},0).wait(1).to({scaleY:1.7521,y:175.2},0).wait(1).to({scaleY:1.7143,y:171.4},0).wait(1).to({scaleY:1.6789,y:167.9},0).wait(1).to({scaleY:1.6457,y:164.55},0).wait(1).to({scaleY:1.6141,y:161.4},0).wait(1).to({scaleY:1.5838,y:158.4},0).wait(1).to({scaleY:1.5543,y:155.45},0).wait(1).to({scaleY:1.5252,y:152.5},0).wait(1).to({scaleY:1.4959,y:149.6},0).wait(1).to({scaleY:1.4658,y:146.6},0).wait(1).to({scaleY:1.434,y:143.4},0).wait(1).to({scaleY:1.3997,y:139.95},0).wait(1).to({scaleY:1.3609,y:136.1},0).wait(1).to({scaleY:1.3041,y:130.4},0).wait(1).to({scaleY:1.224,y:122.4},0).wait(1).to({scaleY:1.1368,y:113.7},0).wait(1).to({scaleY:1.0685,y:106.85},0).wait(1).to({scaleY:1.0267,y:102.65},0).wait(1).to({scaleY:1.0059,y:100.6},0).wait(1).to({scaleY:1,y:100},0).wait(46));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(600,175,600,226.39999999999998);
// library properties:
lib.properties = {
	id: 'ED5619849482C8409120507CC828B992',
	width: 1200,
	height: 350,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/moto1.png?1654861386531", id:"moto1"},
		{src:"images/banner1_HTML5 Canvas_atlas_1.png?1654861386493", id:"banner1_HTML5 Canvas_atlas_1"},
		{src:"images/banner1_HTML5 Canvas_atlas_2.png?1654861386493", id:"banner1_HTML5 Canvas_atlas_2"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['ED5619849482C8409120507CC828B992'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;