"use strict";
(globalThis["webpackChunkfrontend"] = globalThis["webpackChunkfrontend"] || []).push([["src_components_three_HeroCanvas_jsx"],{

/***/ "./src/components/three/Diya.jsx"
/*!***************************************!*\
  !*** ./src/components/three/Diya.jsx ***!
  \***************************************/
(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Diya)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @react-three/fiber */ "./node_modules/@react-three/fiber/dist/events-e51d7528.esm.js");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.core.js");
/* harmony import */ var _textures__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./textures */ "./src/components/three/textures.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _jsxFileName = "/app/frontend/src/components/three/Diya.jsx",
  _s = __webpack_require__.$Refresh$.signature();





function Diya({
  position = [0, 0, 0],
  scale = 1
}) {
  _s();
  const flameRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const lightRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const flameTex = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(_textures__WEBPACK_IMPORTED_MODULE_3__.makeFlameTexture, []);
  const glowTex = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(_textures__WEBPACK_IMPORTED_MODULE_3__.makeRadialTexture, []);
  const profile = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    const pts = [];
    for (let i = 0; i <= 24; i++) {
      const t = i / 24;
      pts.push(new three__WEBPACK_IMPORTED_MODULE_2__.Vector2(0.05 + 1.15 * Math.pow(t, 0.65), 0.55 * Math.pow(t, 1.5)));
    }
    return pts;
  }, []);
  (0,_react_three_fiber__WEBPACK_IMPORTED_MODULE_1__.F)(({
    clock
  }) => {
    const t = clock.elapsedTime;
    const f = 1 + 0.1 * Math.sin(t * 11.3) + 0.05 * Math.sin(t * 27.7);
    if (flameRef.current) {
      flameRef.current.scale.set(f, 1 + (f - 1) * 1.7, f);
    }
    if (lightRef.current) {
      lightRef.current.intensity = 2.4 + 0.5 * Math.sin(t * 13.1) + 0.3 * Math.sin(t * 31);
    }
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("group", {
    position: position,
    scale: scale,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("mesh", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("latheGeometry", {
        args: [profile, 48]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("meshStandardMaterial", {
        color: "#C99A45",
        metalness: 0.85,
        roughness: 0.28
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("mesh", {
      rotation: [-Math.PI / 2, 0, 0],
      position: [0, 0.48, 0],
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("circleGeometry", {
        args: [0.95, 32]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("meshStandardMaterial", {
        color: "#1b1008",
        metalness: 0.3,
        roughness: 0.35
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("mesh", {
      position: [0, 0.55, 0],
      rotation: [Math.PI / 2, 0, 0],
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("torusGeometry", {
        args: [1.17, 0.03, 8, 48]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("meshStandardMaterial", {
        color: "#D9A441",
        metalness: 0.9,
        roughness: 0.25
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("mesh", {
      position: [0, 0.52, 0],
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("cylinderGeometry", {
        args: [0.03, 0.04, 0.14, 8]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("meshStandardMaterial", {
        color: "#2a1808",
        roughness: 0.9
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("group", {
      ref: flameRef,
      position: [0, 0.56, 0],
      children: [0, Math.PI / 2].map((r, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("mesh", {
        rotation: [0, r, 0],
        position: [0, 0.4, 0],
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("planeGeometry", {
          args: [0.36, 0.82]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 25
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("meshBasicMaterial", {
          map: flameTex,
          transparent: true,
          depthWrite: false,
          blending: three__WEBPACK_IMPORTED_MODULE_2__.AdditiveBlending,
          side: three__WEBPACK_IMPORTED_MODULE_2__.DoubleSide
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 25
        }, this)]
      }, i, true, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 21
      }, this))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("sprite", {
      position: [0, 0.8, 0],
      scale: [2.8, 2.8, 1],
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("spriteMaterial", {
        map: glowTex,
        transparent: true,
        opacity: 0.5,
        depthWrite: false,
        blending: three__WEBPACK_IMPORTED_MODULE_2__.AdditiveBlending
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("pointLight", {
      ref: lightRef,
      position: [0, 0.95, 0],
      color: "#D9A441",
      intensity: 2.4,
      distance: 15,
      decay: 2
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 39,
    columnNumber: 9
  }, this);
}
_s(Diya, "ZSU8/zC3fzNazTYpdARLFq3iKPA=", false, function () {
  return [_react_three_fiber__WEBPACK_IMPORTED_MODULE_1__.F];
});
_c = Diya;
var _c;
__webpack_require__.$Refresh$.register(_c, "Diya");

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

/***/ "./src/components/three/HeroCanvas.jsx"
/*!*********************************************!*\
  !*** ./src/components/three/HeroCanvas.jsx ***!
  \*********************************************/
(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HeroCanvas)
/* harmony export */ });
/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @react-three/fiber */ "./node_modules/@react-three/fiber/dist/react-three-fiber.esm.js");
/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @react-three/fiber */ "./node_modules/@react-three/fiber/dist/events-e51d7528.esm.js");
/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react-three/drei */ "./node_modules/@react-three/drei/core/Environment.js");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.core.js");
/* harmony import */ var _Diya__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Diya */ "./src/components/three/Diya.jsx");
/* harmony import */ var _Petals__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Petals */ "./src/components/three/Petals.jsx");
/* harmony import */ var _Dust__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Dust */ "./src/components/three/Dust.jsx");
/* harmony import */ var _textures__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./textures */ "./src/components/three/textures.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _jsxFileName = "/app/frontend/src/components/three/HeroCanvas.jsx",
  _s = __webpack_require__.$Refresh$.signature();








function CameraRig() {
  _s();
  (0,_react_three_fiber__WEBPACK_IMPORTED_MODULE_1__.F)(({
    camera,
    clock
  }) => {
    const t = clock.elapsedTime;
    camera.position.x = Math.sin(t * 0.07) * 0.4;
    camera.position.y = 0.5 + Math.sin(t * 0.05) * 0.12;
    camera.lookAt(0, -0.1, 0);
  });
  return null;
}
_s(CameraRig, "xC67171NPRcCAzsbrenetil66NI=", false, function () {
  return [_react_three_fiber__WEBPACK_IMPORTED_MODULE_1__.F];
});
_c = CameraRig;
function Pillar({
  x
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("group", {
    position: [x, -2.1, -0.6],
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("mesh", {
      position: [0, 1.9, 0],
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("cylinderGeometry", {
        args: [0.1, 0.13, 3.8, 12]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("meshStandardMaterial", {
        color: "#3a2a16",
        metalness: 0.85,
        roughness: 0.42
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("mesh", {
      position: [0, 3.9, 0],
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("boxGeometry", {
        args: [0.55, 0.2, 0.55]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("meshStandardMaterial", {
        color: "#C99A45",
        metalness: 0.9,
        roughness: 0.3
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("mesh", {
      position: [0, 0.1, 0],
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("boxGeometry", {
        args: [0.5, 0.24, 0.5]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("meshStandardMaterial", {
        color: "#C99A45",
        metalness: 0.9,
        roughness: 0.3
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 9
  }, this);
}
_c2 = Pillar;
function HeroCanvas() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
    className: "absolute inset-0",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_react_three_fiber__WEBPACK_IMPORTED_MODULE_0__.Canvas, {
      camera: {
        position: [0, 0.5, 7],
        fov: 42
      },
      dpr: [1, _textures__WEBPACK_IMPORTED_MODULE_7__.isMobile ? 1.5 : 1.8],
      gl: {
        antialias: true,
        alpha: true,
        powerPreference: "high-performance"
      },
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("ambientLight", {
        intensity: 0.18
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("hemisphereLight", {
        args: ["#F5E6C8", "#24180F", 0.4]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("directionalLight", {
        position: [4, 6, 3],
        intensity: 0.5,
        color: "#F5E6C8"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_react_three_drei__WEBPACK_IMPORTED_MODULE_2__.Environment, {
        resolution: 64,
        frames: 1,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("mesh", {
          scale: 80,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("sphereGeometry", {
            args: [1, 16, 16]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("meshBasicMaterial", {
            color: "#241505",
            side: three__WEBPACK_IMPORTED_MODULE_3__.BackSide
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("mesh", {
          position: [0, 6, 0],
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("sphereGeometry", {
            args: [3, 16, 16]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("meshBasicMaterial", {
            color: "#D9A441"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("mesh", {
          position: [-6, 2, -4],
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("sphereGeometry", {
            args: [2, 16, 16]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("meshBasicMaterial", {
            color: "#7B251F"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(CameraRig, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_Diya__WEBPACK_IMPORTED_MODULE_4__["default"], {
        position: [0, -2.15, 0.4],
        scale: 1.0
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(Pillar, {
        x: -3.4
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(Pillar, {
        x: 3.4
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("mesh", {
        position: [0, 2.1, -0.6],
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("boxGeometry", {
          args: [7.6, 0.35, 0.4]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("meshStandardMaterial", {
          color: "#3a2a16",
          metalness: 0.85,
          roughness: 0.42
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_Petals__WEBPACK_IMPORTED_MODULE_5__["default"], {
        count: _textures__WEBPACK_IMPORTED_MODULE_7__.isMobile ? 45 : 110
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_Dust__WEBPACK_IMPORTED_MODULE_6__["default"], {
        count: _textures__WEBPACK_IMPORTED_MODULE_7__.isMobile ? 100 : 260
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 52,
    columnNumber: 9
  }, this);
}
_c3 = HeroCanvas;
var _c, _c2, _c3;
__webpack_require__.$Refresh$.register(_c, "CameraRig");
__webpack_require__.$Refresh$.register(_c2, "Pillar");
__webpack_require__.$Refresh$.register(_c3, "HeroCanvas");

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

/***/ "./src/components/three/Petals.jsx"
/*!*****************************************!*\
  !*** ./src/components/three/Petals.jsx ***!
  \*****************************************/
(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Petals)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @react-three/fiber */ "./node_modules/@react-three/fiber/dist/events-e51d7528.esm.js");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.core.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _jsxFileName = "/app/frontend/src/components/three/Petals.jsx",
  _s = __webpack_require__.$Refresh$.signature();




function Petals({
  count = 110,
  area = [12, 8, 6]
}) {
  _s();
  const ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const dummy = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => new three__WEBPACK_IMPORTED_MODULE_2__.Object3D(), []);
  const colored = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  const data = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => Array.from({
    length: count
  }, () => ({
    x: (Math.random() - 0.5) * area[0],
    y: Math.random() * area[1] - 4,
    z: (Math.random() - 0.5) * area[2],
    speed: 0.25 + Math.random() * 0.45,
    sway: 0.3 + Math.random() * 0.7,
    phase: Math.random() * Math.PI * 2,
    rot: Math.random() * Math.PI,
    spin: (Math.random() - 0.5) * 1.2,
    scale: 0.5 + Math.random() * 0.9,
    color: Math.random() > 0.5 ? "#E8891C" : "#D9A441"
  })), [count]);
  (0,_react_three_fiber__WEBPACK_IMPORTED_MODULE_1__.F)((state, dt) => {
    const m = ref.current;
    if (!m) return;
    if (!colored.current) {
      const c = new three__WEBPACK_IMPORTED_MODULE_2__.Color();
      data.forEach((d, i) => m.setColorAt(i, c.set(d.color)));
      colored.current = true;
    }
    const t = state.clock.elapsedTime;
    data.forEach((d, i) => {
      d.y -= d.speed * dt;
      if (d.y < -4.2) {
        d.y = 4.2;
        d.x = (Math.random() - 0.5) * area[0];
      }
      dummy.position.set(d.x + Math.sin(t * d.sway + d.phase) * 0.5, d.y, d.z + Math.cos(t * d.sway * 0.8 + d.phase) * 0.3);
      dummy.rotation.set(t * d.spin * 0.6 + d.phase, d.rot + t * d.spin, Math.sin(t + d.phase) * 0.5);
      dummy.scale.setScalar(d.scale);
      dummy.updateMatrix();
      m.setMatrixAt(i, dummy.matrix);
    });
    m.instanceMatrix.needsUpdate = true;
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("instancedMesh", {
    ref: ref,
    args: [null, null, count],
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("circleGeometry", {
      args: [0.075, 6]
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("meshStandardMaterial", {
      side: three__WEBPACK_IMPORTED_MODULE_2__.DoubleSide,
      roughness: 0.55,
      metalness: 0.15
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 60,
    columnNumber: 9
  }, this);
}
_s(Petals, "IfkF9FKJ1oXJVHGUJ1Oni+0T8Ac=", false, function () {
  return [_react_three_fiber__WEBPACK_IMPORTED_MODULE_1__.F];
});
_c = Petals;
var _c;
__webpack_require__.$Refresh$.register(_c, "Petals");

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
//# sourceMappingURL=src_components_three_HeroCanvas_jsx.chunk.js.map