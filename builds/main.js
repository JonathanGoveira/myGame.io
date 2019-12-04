/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./source/main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./source/attacker.ts":
/*!****************************!*\
  !*** ./source/attacker.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];\r\n    result[\"default\"] = mod;\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst math = __importStar(__webpack_require__(/*! ./utils/math */ \"./source/utils/math.ts\"));\r\nconst instance_1 = __importDefault(__webpack_require__(/*! ./instance */ \"./source/instance.ts\"));\r\nclass Attacker extends instance_1.default {\r\n    constructor(p_position, p_w, p_h, p_ctx) {\r\n        super(p_position, p_w, p_h);\r\n        this.ctx = p_ctx;\r\n    }\r\n    ;\r\n    HandleEvent() { }\r\n    ;\r\n    Input() {\r\n        switch (this.key) {\r\n            case 37:\r\n                this.position.x -= 5;\r\n                break;\r\n            case 39:\r\n                this.position.x += 5;\r\n                break;\r\n            case 38:\r\n                this.position.y -= 5;\r\n                break;\r\n            case 40:\r\n                this.position.y += 5;\r\n                break;\r\n            case 65:\r\n                this.angle += 5;\r\n                break;\r\n            case 83:\r\n                this.angle -= 5;\r\n                break;\r\n        }\r\n    }\r\n    ;\r\n    Update() { }\r\n    ;\r\n    Render() {\r\n        this.ctx.fillStyle = \"red\";\r\n        this.ctx.save();\r\n        this.ctx.translate(this.position.x, this.position.y);\r\n        this.ctx.rotate(math.RadToDegree(this.angle));\r\n        this.ctx.fillRect(this.width / -2, this.height / -2, this.width, this.height);\r\n        this.ctx.restore();\r\n    }\r\n    ;\r\n}\r\nexports.default = Attacker;\r\n\n\n//# sourceURL=webpack:///./source/attacker.ts?");

/***/ }),

/***/ "./source/backgroud.ts":
/*!*****************************!*\
  !*** ./source/backgroud.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nclass BackGround {\r\n    constructor(p_x, p_y, p_width, p_height) {\r\n        this._x = p_x;\r\n        this._y = p_y;\r\n        this._width = p_width;\r\n        this._height = p_height;\r\n    }\r\n    createBackGround(canvas, ctx) {\r\n        // faz as linhas no eixo y\r\n        for (let y = 0; y <= this._width; y += 40) {\r\n            ctx.beginPath();\r\n            ctx.moveTo(y, 0);\r\n            ctx.lineTo(y, this._height);\r\n            ctx.strokeStyle = \"LightGrey\";\r\n            ctx.stroke();\r\n            ctx.closePath();\r\n        }\r\n        // faz as linhas no eixo x\r\n        for (let x = 0; x <= this._height; x += 40) {\r\n            ctx.beginPath();\r\n            ctx.moveTo(0, x);\r\n            ctx.lineTo(this._width, x);\r\n            ctx.strokeStyle = \"Silver\";\r\n            ctx.stroke();\r\n            ctx.closePath();\r\n        }\r\n    }\r\n    get width() {\r\n        return this._width;\r\n    }\r\n    get height() {\r\n        return this._height;\r\n    }\r\n}\r\nexports.default = BackGround;\r\n\n\n//# sourceURL=webpack:///./source/backgroud.ts?");

/***/ }),

/***/ "./source/camera.ts":
/*!**************************!*\
  !*** ./source/camera.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nclass Camera {\r\n    constructor(p_width, p_height) {\r\n        this._x = 0;\r\n        this._y = 0;\r\n        this._width = p_width;\r\n        this._height = p_height;\r\n    }\r\n    centerCamera(background) {\r\n        this._x = (background.width - Number(this._width)) / 2;\r\n        this._y = (background.height - Number(this._height)) / 2;\r\n    }\r\n    get width() {\r\n        return this._width;\r\n    }\r\n    get height() {\r\n        return this._height;\r\n    }\r\n    get x() {\r\n        return this._x;\r\n    }\r\n    get y() {\r\n        return this._y;\r\n    }\r\n    set x(p_x) {\r\n        this._x = p_x;\r\n    }\r\n    set y(p_y) {\r\n        this._y = p_y;\r\n    }\r\n}\r\nexports.default = Camera;\r\n\n\n//# sourceURL=webpack:///./source/camera.ts?");

/***/ }),

/***/ "./source/defender.ts":
/*!****************************!*\
  !*** ./source/defender.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];\r\n    result[\"default\"] = mod;\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst math = __importStar(__webpack_require__(/*! ./utils/math */ \"./source/utils/math.ts\"));\r\nconst instance_1 = __importDefault(__webpack_require__(/*! ./instance */ \"./source/instance.ts\"));\r\nclass Defender extends instance_1.default {\r\n    constructor(p_position, p_w, p_h, p_ctx) {\r\n        super(p_position, p_w, p_h);\r\n        this.ctx = p_ctx;\r\n    }\r\n    ;\r\n    HandleEvent() { }\r\n    ;\r\n    Input() {\r\n        switch (this.key) {\r\n            case 37:\r\n                this.position.x -= 5;\r\n                break;\r\n            case 39:\r\n                this.position.x += 5;\r\n                break;\r\n            case 38:\r\n                this.position.y -= 5;\r\n                break;\r\n            case 40:\r\n                this.position.y += 5;\r\n                break;\r\n            case 65:\r\n                this.angle += 5;\r\n                break;\r\n            case 83:\r\n                this.angle -= 5;\r\n                break;\r\n        }\r\n    }\r\n    ;\r\n    Update() { }\r\n    ;\r\n    Render() {\r\n        this.ctx.fillStyle = \"black\";\r\n        this.ctx.save();\r\n        this.ctx.translate(this.position.x, this.position.y);\r\n        this.ctx.rotate(math.RadToDegree(this.angle));\r\n        this.ctx.fillRect(this.width / -2, this.height / -2, this.width, this.height);\r\n        this.ctx.restore();\r\n    }\r\n    ;\r\n}\r\nexports.default = Defender;\r\n\n\n//# sourceURL=webpack:///./source/defender.ts?");

/***/ }),

/***/ "./source/game.ts":
/*!************************!*\
  !*** ./source/game.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst player_1 = __importDefault(__webpack_require__(/*! ./player */ \"./source/player.ts\"));\r\nconst attacker_1 = __importDefault(__webpack_require__(/*! ./attacker */ \"./source/attacker.ts\"));\r\nconst support_1 = __importDefault(__webpack_require__(/*! ./support */ \"./source/support.ts\"));\r\nconst scene_1 = __importDefault(__webpack_require__(/*! ./scene */ \"./source/scene.ts\"));\r\nconst defender_1 = __importDefault(__webpack_require__(/*! ./defender */ \"./source/defender.ts\"));\r\nconst vectors_1 = __importDefault(__webpack_require__(/*! ./utils/vectors */ \"./source/utils/vectors.ts\"));\r\nconst backgroud_1 = __importDefault(__webpack_require__(/*! ./backgroud */ \"./source/backgroud.ts\"));\r\nconst camera_1 = __importDefault(__webpack_require__(/*! ./camera */ \"./source/camera.ts\"));\r\nclass Game {\r\n    constructor() {\r\n        this.canvas = document.getElementById(\"canvas\");\r\n        this.canvas.width = document.documentElement.clientWidth;\r\n        this.canvas.height = document.documentElement.clientHeight;\r\n        this.ctx = this.canvas.getContext(\"2d\");\r\n        this.backGround = new backgroud_1.default(0, 0, this.canvas.width * 3, this.canvas.height * 3);\r\n        this.camera = new camera_1.default(this.canvas.width, this.canvas.height);\r\n        this.camera.centerCamera(this.backGround);\r\n        this.pl = new player_1.default(new attacker_1.default(new vectors_1.default(this.camera.width * 0.5, this.camera.height * 0.5), 50, 50, this.ctx));\r\n        this.scene = new scene_1.default(this.ctx);\r\n        window.addEventListener(\"keydown\", (ev) => {\r\n            //@ts-ignore\r\n            this.pl.classe.key = ev.keyCode;\r\n        });\r\n        window.addEventListener(\"keydown\", (ev) => {\r\n            //@ts-ignore\r\n            this.scene.key = ev.keyCode;\r\n        });\r\n        window.addEventListener(\"keyup\", (ev) => {\r\n            //@ts-ignore\r\n            this.pl.classe.key = false;\r\n            this.scene.key = false;\r\n        });\r\n    }\r\n    ;\r\n    ProcessInput() {\r\n        this.pl.classe.Input();\r\n        if (this.scene.key === 49) {\r\n            this.pl = new player_1.default(new attacker_1.default(new vectors_1.default(this.canvas.width * 0.5, this.canvas.height * 0.5), 50, 50, this.ctx));\r\n        }\r\n        ;\r\n        if (this.scene.key === 50) {\r\n            this.pl = new player_1.default(new support_1.default(new vectors_1.default(this.canvas.width * 0.5, this.canvas.height * 0.5), 50, 50, this.ctx));\r\n        }\r\n        ;\r\n        if (this.scene.key === 51) {\r\n            this.pl = new player_1.default(new defender_1.default(new vectors_1.default(this.canvas.width * 0.5, this.canvas.height * 0.5), 50, 50, this.ctx));\r\n        }\r\n        ;\r\n    }\r\n    ;\r\n    Update() {\r\n        this.pl.Update();\r\n        // atualiza a posição da camera em relação ao player\r\n        this.camera.x = this.pl.classe.x - (this.camera.width / 2);\r\n        this.camera.y = this.pl.classe.y - (this.camera.height / 2);\r\n    }\r\n    ;\r\n    Render() {\r\n        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);\r\n        this.ctx.save();\r\n        this.ctx.translate(-this.camera.x, -this.camera.y);\r\n        this.backGround.createBackGround(this.canvas, this.ctx);\r\n        this.pl.Draw();\r\n        this.ctx.restore();\r\n    }\r\n    ;\r\n    Loop() {\r\n        this.ProcessInput();\r\n        this.Update();\r\n        this.Render();\r\n        window.requestAnimationFrame(this.Loop.bind(this));\r\n    }\r\n    ;\r\n}\r\nexports.default = Game;\r\n;\r\n\n\n//# sourceURL=webpack:///./source/game.ts?");

/***/ }),

/***/ "./source/instance.ts":
/*!****************************!*\
  !*** ./source/instance.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nclass Instance {\r\n    constructor(p_position, p_w, p_h) {\r\n        this.angle = 0;\r\n        this.position = p_position;\r\n        this.width = p_w;\r\n        this.height = p_h;\r\n    }\r\n    get x() {\r\n        return this.position.x;\r\n    }\r\n    get y() {\r\n        return this.position.y;\r\n    }\r\n}\r\nexports.default = Instance;\r\n\n\n//# sourceURL=webpack:///./source/instance.ts?");

/***/ }),

/***/ "./source/main.ts":
/*!************************!*\
  !*** ./source/main.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst game_1 = __importDefault(__webpack_require__(/*! ./game */ \"./source/game.ts\"));\r\nfunction main() {\r\n    let game = new game_1.default();\r\n    game.Loop();\r\n}\r\n;\r\nmain();\r\n\n\n//# sourceURL=webpack:///./source/main.ts?");

/***/ }),

/***/ "./source/player.ts":
/*!**************************!*\
  !*** ./source/player.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nclass Player {\r\n    constructor(p_classe) {\r\n        this.classe = p_classe;\r\n    }\r\n    ;\r\n    Draw() {\r\n        this.classe.Render();\r\n    }\r\n    ;\r\n    Update() { }\r\n    ;\r\n}\r\nexports.default = Player;\r\n;\r\n\n\n//# sourceURL=webpack:///./source/player.ts?");

/***/ }),

/***/ "./source/scene.ts":
/*!*************************!*\
  !*** ./source/scene.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nclass Scene {\r\n    constructor(p_ctx) {\r\n        this.ctx = p_ctx;\r\n    }\r\n}\r\nexports.default = Scene;\r\n\n\n//# sourceURL=webpack:///./source/scene.ts?");

/***/ }),

/***/ "./source/support.ts":
/*!***************************!*\
  !*** ./source/support.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];\r\n    result[\"default\"] = mod;\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst math = __importStar(__webpack_require__(/*! ./utils/math */ \"./source/utils/math.ts\"));\r\nconst instance_1 = __importDefault(__webpack_require__(/*! ./instance */ \"./source/instance.ts\"));\r\nclass Support extends instance_1.default {\r\n    constructor(p_position, p_w, p_h, p_ctx) {\r\n        super(p_position, p_w, p_h);\r\n        this.ctx = p_ctx;\r\n    }\r\n    ;\r\n    HandleEvent() { }\r\n    ;\r\n    Input() {\r\n        switch (this.key) {\r\n            case 37:\r\n                this.position.x -= 5;\r\n                break;\r\n            case 39:\r\n                this.position.x += 5;\r\n                break;\r\n            case 38:\r\n                this.position.y -= 5;\r\n                break;\r\n            case 40:\r\n                this.position.y += 5;\r\n                break;\r\n            case 65:\r\n                this.angle += 5;\r\n                break;\r\n            case 83:\r\n                this.angle -= 5;\r\n                break;\r\n        }\r\n    }\r\n    ;\r\n    Update() { }\r\n    ;\r\n    Render() {\r\n        this.ctx.fillStyle = \"green\";\r\n        this.ctx.save();\r\n        this.ctx.translate(this.position.x, this.position.y);\r\n        this.ctx.rotate(math.RadToDegree(this.angle));\r\n        this.ctx.fillRect(this.width / -2, this.height / -2, this.width, this.height);\r\n        this.ctx.restore();\r\n    }\r\n    ;\r\n}\r\nexports.default = Support;\r\n\n\n//# sourceURL=webpack:///./source/support.ts?");

/***/ }),

/***/ "./source/utils/math.ts":
/*!******************************!*\
  !*** ./source/utils/math.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nfunction RadToDegree(num) {\r\n    return (num * Math.PI) / 180;\r\n}\r\nexports.RadToDegree = RadToDegree;\r\n;\r\n\n\n//# sourceURL=webpack:///./source/utils/math.ts?");

/***/ }),

/***/ "./source/utils/vectors.ts":
/*!*********************************!*\
  !*** ./source/utils/vectors.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nclass Vector2D {\r\n    constructor(p_x, p_y) {\r\n        this._x = p_x;\r\n        this._y = p_y;\r\n    }\r\n    ;\r\n    Magnitude() {\r\n        return Math.sqrt(this.x * this.x + this.y * this.y);\r\n    }\r\n    ;\r\n    // Getters\r\n    // -------\r\n    get x() { return this._x; }\r\n    get y() { return this._y; }\r\n    // Setters\r\n    // -------\r\n    set x(p_x) { this._x = p_x; }\r\n    set y(p_y) { this._y = p_y; }\r\n}\r\nexports.default = Vector2D;\r\n;\r\n\n\n//# sourceURL=webpack:///./source/utils/vectors.ts?");

/***/ })

/******/ });