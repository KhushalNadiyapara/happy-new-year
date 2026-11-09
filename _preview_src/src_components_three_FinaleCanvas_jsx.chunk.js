"use strict";
(globalThis["webpackChunkfrontend"] = globalThis["webpackChunkfrontend"] || []).push([["src_components_three_FinaleCanvas_jsx"],{

/***/ "./src/components/three/Dust.jsx"
/*!***************************************!*\
  !*** ./src/components/three/Dust.jsx ***!
  \***************************************/
(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Dust)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @react-three/fiber */ "./node_modules/@react-three/fiber/dist/events-e51d7528.esm.js");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.core.js");
/* harmony import */ var _textures__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./textures */ "./src/components/three/textures.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _jsxFileName = "/app/frontend/src/components/three/Dust.jsx",
  _s = __webpack_require__.$Refresh$.signature();





function Dust({
  count = 260,
  area = [14, 9, 8]
}) {
  _s();
  const ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const tex = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => (0,_textures__WEBPACK_IMPORTED_MODULE_3__.makeRadialTexture)("rgba(255,236,190,1)", "rgba(217,164,65,0)"), []);
  const {
    positions,
    speeds
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    const positions = new Float32Array(count * 3);
    const speeds = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * area[0];
      positions[i * 3 + 1] = (Math.random() - 0.5) * area[1];
      positions[i * 3 + 2] = (Math.random() - 0.5) * area[2];
      speeds[i] = 0.08 + Math.random() * 0.22;
    }
    return {
      positions,
      speeds
    };
  }, [count]);
  (0,_react_three_fiber__WEBPACK_IMPORTED_MODULE_1__.F)((state, dt) => {
    const pts = ref.current;
    if (!pts) return;
    const arr = pts.geometry.attributes.position.array;
    const t = state.clock.elapsedTime;
    for (let i = 0; i < count; i++) {
      arr[i * 3 + 1] += speeds[i] * dt;
      arr[i * 3] += Math.sin(t * 0.4 + i) * 0.0012;
      if (arr[i * 3 + 1] > area[1] / 2) arr[i * 3 + 1] = -area[1] / 2;
    }
    pts.geometry.attributes.position.needsUpdate = true;
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("points", {
    ref: ref,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("bufferGeometry", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("bufferAttribute", {
        attach: "attributes-position",
        args: [positions, 3]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("pointsMaterial", {
      size: 0.055,
      map: tex,
      color: "#E8C27A",
      transparent: true,
      opacity: 0.55,
      depthWrite: false,
      blending: three__WEBPACK_IMPORTED_MODULE_2__.AdditiveBlending,
      sizeAttenuation: true
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 43,
    columnNumber: 9
  }, this);
}
_s(Dust, "HVsyqFkDlbnAV+QDRAuPz1TRM14=", false, function () {
  return [_react_three_fiber__WEBPACK_IMPORTED_MODULE_1__.F];
});
_c = Dust;
var _c;
__webpack_require__.$Refresh$.register(_c, "Dust");

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (true) {
			errorOverlay = false;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ },

/***/ "./src/components/three/FinaleCanvas.jsx"
/*!***********************************************!*\
  !*** ./src/components/three/FinaleCanvas.jsx ***!
  \***********************************************/
(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FinaleCanvas)
/* harmony export */ });
/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @react-three/fiber */ "./node_modules/@react-three/fiber/dist/react-three-fiber.esm.js");
/* harmony import */ var _Fireworks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Fireworks */ "./src/components/three/Fireworks.jsx");
/* harmony import */ var _Dust__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Dust */ "./src/components/three/Dust.jsx");
/* harmony import */ var _textures__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./textures */ "./src/components/three/textures.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _jsxFileName = "/app/frontend/src/components/three/FinaleCanvas.jsx";





function FinaleCanvas() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_react_three_fiber__WEBPACK_IMPORTED_MODULE_0__.Canvas, {
    camera: {
      position: [0, 0.5, 8.5],
      fov: 45
    },
    dpr: [1, _textures__WEBPACK_IMPORTED_MODULE_3__.isMobile ? 1.4 : 1.7],
    gl: {
      antialias: true,
      alpha: true,
      powerPreference: "high-performance"
    },
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("ambientLight", {
      intensity: 0.25
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("hemisphereLight", {
      args: ["#F5E6C8", "#24180F", 0.3]
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_Fireworks__WEBPACK_IMPORTED_MODULE_1__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_Dust__WEBPACK_IMPORTED_MODULE_2__["default"], {
      count: _textures__WEBPACK_IMPORTED_MODULE_3__.isMobile ? 80 : 200,
      area: [14, 9, 6]
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 9
  }, this);
}
_c = FinaleCanvas;
var _c;
__webpack_require__.$Refresh$.register(_c, "FinaleCanvas");

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (true) {
			errorOverlay = false;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ },

/***/ "./src/components/three/Fireworks.jsx"
/*!********************************************!*\
  !*** ./src/components/three/Fireworks.jsx ***!
  \********************************************/
(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Fireworks)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @react-three/fiber */ "./node_modules/@react-three/fiber/dist/events-e51d7528.esm.js");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.core.js");
/* harmony import */ var _textures__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./textures */ "./src/components/three/textures.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _jsxFileName = "/app/frontend/src/components/three/Fireworks.jsx",
  _s = __webpack_require__.$Refresh$.signature(),
  _s2 = __webpack_require__.$Refresh$.signature();





const LIFE = 2.8;
const PAUSE = 1.6;
function Burst({
  origin,
  color,
  delay,
  count = 140,
  speed = 2.3
}) {
  _s();
  const ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const matRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const tex = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => (0,_textures__WEBPACK_IMPORTED_MODULE_3__.makeRadialTexture)("rgba(255,245,215,1)", "rgba(255,200,90,0)"), []);
  const t0 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const positions = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = origin[0];
      arr[i * 3 + 1] = origin[1];
      arr[i * 3 + 2] = origin[2];
    }
    return arr;
  }, [count, origin]);
  const velocities = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const s = speed * (0.45 + Math.random() * 0.65);
      arr[i * 3] = Math.sin(phi) * Math.cos(theta) * s;
      arr[i * 3 + 1] = Math.cos(phi) * s;
      arr[i * 3 + 2] = Math.sin(phi) * Math.sin(theta) * s * 0.5;
    }
    return arr;
  }, [count, speed]);
  (0,_react_three_fiber__WEBPACK_IMPORTED_MODULE_1__.F)(({
    clock
  }) => {
    const pts = ref.current;
    if (!pts) return;
    const t = clock.elapsedTime;
    if (t0.current === null) t0.current = t + delay;
    let lt = (t - t0.current) % (LIFE + PAUSE);
    const active = lt >= 0 && lt < LIFE;
    pts.visible = active;
    if (!active) return;
    const geo = pts.geometry;
    const arr = geo.attributes.position.array;
    for (let i = 0; i < count; i++) {
      const damp = Math.max(0, 1 - lt * 0.32);
      arr[i * 3] = origin[0] + velocities[i * 3] * lt * damp;
      arr[i * 3 + 1] = origin[1] + velocities[i * 3 + 1] * lt * damp - 0.55 * lt * lt;
      arr[i * 3 + 2] = origin[2] + velocities[i * 3 + 2] * lt * damp;
    }
    geo.attributes.position.needsUpdate = true;
    if (matRef.current) {
      matRef.current.opacity = Math.max(0, 1 - lt / LIFE) * 0.95;
    }
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("points", {
    ref: ref,
    visible: false,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("bufferGeometry", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("bufferAttribute", {
        attach: "attributes-position",
        args: [positions, 3]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("pointsMaterial", {
      ref: matRef,
      size: 0.1,
      map: tex,
      color: color,
      transparent: true,
      depthWrite: false,
      blending: three__WEBPACK_IMPORTED_MODULE_2__.AdditiveBlending,
      sizeAttenuation: true
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 66,
    columnNumber: 9
  }, this);
}
_s(Burst, "H7T1yMahKMZpRnD8ifcsmHb4QnI=", false, function () {
  return [_react_three_fiber__WEBPACK_IMPORTED_MODULE_1__.F];
});
_c = Burst;
const COLORS = ["#F5E6C8", "#D9A441", "#FFB84D", "#E8894A", "#C99A45", "#FFF3C4"];
function Fireworks() {
  _s2();
  const bursts = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => Array.from({
    length: _textures__WEBPACK_IMPORTED_MODULE_3__.isMobile ? 4 : 6
  }, (_, i) => ({
    origin: [(Math.random() - 0.5) * 7.5, 0.6 + Math.random() * 2.4, -1.5 - Math.random() * 2],
    color: COLORS[i % COLORS.length],
    delay: i * 1.05,
    count: _textures__WEBPACK_IMPORTED_MODULE_3__.isMobile ? 90 : 140
  })), []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: bursts.map((b, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(Burst, {
      ...b
    }, i, false, {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 17
    }, this))
  }, void 0, false);
}
_s2(Fireworks, "IuEpdKBX2RWnwpm1F8wsfyuG6M0=");
_c2 = Fireworks;
var _c, _c2;
__webpack_require__.$Refresh$.register(_c, "Burst");
__webpack_require__.$Refresh$.register(_c2, "Fireworks");

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (true) {
			errorOverlay = false;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ },

/***/ "./src/components/three/textures.js"
/*!******************************************!*\
  !*** ./src/components/three/textures.js ***!
  \******************************************/
(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isMobile: () => (/* binding */ isMobile),
/* harmony export */   makeFlameTexture: () => (/* binding */ makeFlameTexture),
/* harmony export */   makeRadialTexture: () => (/* binding */ makeRadialTexture)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.core.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");


function makeRadialTexture(inner = "rgba(255,214,130,0.9)", outer = "rgba(255,150,40,0)") {
  const c = document.createElement("canvas");
  c.width = c.height = 128;
  const g = c.getContext("2d");
  const grad = g.createRadialGradient(64, 64, 0, 64, 64, 64);
  grad.addColorStop(0, inner);
  grad.addColorStop(0.35, inner);
  grad.addColorStop(1, outer);
  g.fillStyle = grad;
  g.fillRect(0, 0, 128, 128);
  return new three__WEBPACK_IMPORTED_MODULE_0__.CanvasTexture(c);
}
function makeFlameTexture() {
  const c = document.createElement("canvas");
  c.width = 64;
  c.height = 128;
  const g = c.getContext("2d");
  const grad = g.createLinearGradient(0, 128, 0, 0);
  grad.addColorStop(0, "rgba(255,250,220,0.95)");
  grad.addColorStop(0.25, "rgba(255,200,80,0.9)");
  grad.addColorStop(0.6, "rgba(220,120,30,0.55)");
  grad.addColorStop(1, "rgba(120,40,10,0)");
  g.fillStyle = grad;
  g.beginPath();
  g.moveTo(32, 124);
  g.bezierCurveTo(6, 92, 14, 48, 32, 6);
  g.bezierCurveTo(50, 48, 58, 92, 32, 124);
  g.closePath();
  g.fill();
  return new three__WEBPACK_IMPORTED_MODULE_0__.CanvasTexture(c);
}
const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (true) {
			errorOverlay = false;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }

}]);
//# sourceMappingURL=src_components_three_FinaleCanvas_jsx.chunk.js.map