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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/export.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/artgl.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__webgl_webgl_renderer__ = __webpack_require__("./src/webgl/webgl-renderer.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "GLRenderer", function() { return __WEBPACK_IMPORTED_MODULE_0__webgl_webgl_renderer__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__webgl_program__ = __webpack_require__("./src/webgl/program.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "GLProgram", function() { return __WEBPACK_IMPORTED_MODULE_1__webgl_program__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__engine_render_engine__ = __webpack_require__("./src/engine/render-engine.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ARTEngine", function() { return __WEBPACK_IMPORTED_MODULE_2__engine_render_engine__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__object_mesh__ = __webpack_require__("./src/object/mesh.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Mesh", function() { return __WEBPACK_IMPORTED_MODULE_3__object_mesh__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_geometry__ = __webpack_require__("./src/core/geometry.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Geometry", function() { return __WEBPACK_IMPORTED_MODULE_4__core_geometry__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_material__ = __webpack_require__("./src/core/material.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Material", function() { return __WEBPACK_IMPORTED_MODULE_5__core_material__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_buffer_data__ = __webpack_require__("./src/core/buffer-data.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "BufferData", function() { return __WEBPACK_IMPORTED_MODULE_6__core_buffer_data__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__geometry_geo_lib_sphere_geometry__ = __webpack_require__("./src/geometry/geo-lib/sphere-geometry.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SphereGeometry", function() { return __WEBPACK_IMPORTED_MODULE_7__geometry_geo_lib_sphere_geometry__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__geometry_test_geometery__ = __webpack_require__("./src/geometry/test-geometery.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "TestGeometry", function() { return __WEBPACK_IMPORTED_MODULE_8__geometry_test_geometery__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__material_test_material__ = __webpack_require__("./src/material/test-material.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "TestMaterial", function() { return __WEBPACK_IMPORTED_MODULE_9__material_test_material__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__math_index__ = __webpack_require__("./src/math/index.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Matrix4", function() { return __WEBPACK_IMPORTED_MODULE_10__math_index__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Quaternion", function() { return __WEBPACK_IMPORTED_MODULE_10__math_index__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Vector3", function() { return __WEBPACK_IMPORTED_MODULE_10__math_index__["d"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__camera_perspective_camera__ = __webpack_require__("./src/camera/perspective-camera.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "PerspectiveCamera", function() { return __WEBPACK_IMPORTED_MODULE_11__camera_perspective_camera__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__interact_interactor__ = __webpack_require__("./src/interact/interactor.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Interactor", function() { return __WEBPACK_IMPORTED_MODULE_12__interact_interactor__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__interact_orbit_controler__ = __webpack_require__("./src/interact/orbit-controler.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "OrbitController", function() { return __WEBPACK_IMPORTED_MODULE_13__interact_orbit_controler__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__loader_obj_loader__ = __webpack_require__("./src/loader/obj-loader.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "OBJLoader", function() { return __WEBPACK_IMPORTED_MODULE_14__loader_obj_loader__["a"]; });
// lowlevel gl layer


// artgl engine layer





// geometry lib


// material lib

// math

// camera

//interaction


//loader



/***/ }),

/***/ "./src/camera/perspective-camera.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math_index__ = __webpack_require__("./src/math/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_camera__ = __webpack_require__("./src/core/camera.ts");


const tempMatrix = new __WEBPACK_IMPORTED_MODULE_0__math_index__["b" /* Matrix4 */]();
class PerspectiveCamera extends __WEBPACK_IMPORTED_MODULE_1__core_camera__["a" /* Camera */] {
    constructor(near, far, fov, aspect, zoom) {
        super();
        this.up = new __WEBPACK_IMPORTED_MODULE_0__math_index__["d" /* Vector3 */](0, 1, 0);
        this.fov = fov !== undefined ? fov : 50;
        this.zoom = 1;
        this.near = near !== undefined ? near : 0.1;
        this.far = far !== undefined ? far : 2000;
        this.aspect = aspect !== undefined ? aspect : 1;
        this.updateProjectionMatrix();
    }
    get width() {
        return this.aspect * this.height;
    }
    get height() {
        return 2 * this.near * Math.tan(__WEBPACK_IMPORTED_MODULE_0__math_index__["a" /* MathUtil */].DEG2RAD * 0.5 * this.fov) / this.zoom;
    }
    updateProjectionMatrix() {
        const top = this.near * Math.tan(__WEBPACK_IMPORTED_MODULE_0__math_index__["a" /* MathUtil */].DEG2RAD * 0.5 * this.fov) / this.zoom;
        const height = 2 * top;
        const width = this.aspect * height;
        const left = -0.5 * width;
        this.projectionMatrix.makePerspective(left, left + width, top, top - height, this.near, this.far);
    }
    lookAt(targetPosition) {
        tempMatrix.lookAt(this.position, targetPosition, this.up);
        this.quaternion.setFromRotationMatrix(tempMatrix);
        this.updateLocalMatrix();
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = PerspectiveCamera;



/***/ }),

/***/ "./src/core/buffer-data.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * bufferdata is webglbuffer container
 *
 * @export
 * @class BufferData
 */
class BufferData {
    constructor(data) {
        this.shouldUpdate = true;
        this.data = data;
    }
    setIndex(index, value) {
        this.shouldUpdate = true;
        this.data[index] = value;
    }
    setData(data) {
        this.shouldUpdate = true;
        this.data = data;
    }
    getGLAttribute(engine) {
        return engine.getGLAttributeBuffer(this);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = BufferData;

class Float32BufferData extends BufferData {
    constructor(data) {
        super(data);
    }
}
/* harmony export (immutable) */ __webpack_exports__["b"] = Float32BufferData;

class Uint16BufferData extends BufferData {
    constructor(data) {
        super(data);
    }
}
/* harmony export (immutable) */ __webpack_exports__["c"] = Uint16BufferData;



/***/ }),

/***/ "./src/core/camera.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scene_scene_node__ = __webpack_require__("./src/scene/scene-node.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math_index__ = __webpack_require__("./src/math/index.ts");


/**
 * camera is abstration of a MVP matrix.
 * extender can support more usefull interface
 * to make the projection relation more easy to
 * understand and modified;
 *
 * @export
 * @class Camera
 * @extends {SceneNode}
 */
class Camera extends __WEBPACK_IMPORTED_MODULE_0__scene_scene_node__["a" /* SceneNode */] {
    constructor() {
        super();
        this.projectionMatrix = new __WEBPACK_IMPORTED_MODULE_1__math_index__["b" /* Matrix4 */]();
    }
    updateProjectionMatrix() {
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Camera;



/***/ }),

/***/ "./src/core/geometry.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * geometry define what to draw
 * by defined data layout and data content
 * also handle gl buffer updatation
 * @export
 * @class Geometry
 */
class Geometry {
    constructor() {
        this.bufferDatas = {};
        this.needUpdate = true;
    }
    /**
     * creat or update the geometry's data in bufferdatas
     *
     * @memberof Geometry
     */
    populate() {
        throw 'geometry not implemented';
    }
    dispose() {
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Geometry;

const defaultGeometryLayoutDataInfo = {
    position: {
        usage: 1 /* position */,
        stride: 3
    },
    normal: {
        usage: 2 /* normal */,
        stride: 3
    },
    index: {
        usage: 0 /* index */,
        stride: 1
    },
};
/* harmony export (immutable) */ __webpack_exports__["b"] = defaultGeometryLayoutDataInfo;



/***/ }),

/***/ "./src/core/material.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math_index__ = __webpack_require__("./src/math/index.ts");

const standradMeshAttributeLayout = [
    { name: 'position', type: 2 /* floatVec3 */, usage: 1 /* position */, stride: 3 },
    { name: 'normal', type: 2 /* floatVec3 */, usage: 2 /* normal */, stride: 3 },
    { name: 'uv', type: 1 /* floatVec2 */, usage: 4 /* uv */, stride: 2 },
];
/* unused harmony export standradMeshAttributeLayout */

/**
 * mateiral defined how to draw a things
 * typically, one mateiral is corespondent to a gl program
 *  program's shader and infos are defined in material config
 * material config is wrap a program condig
 * that the engine will use this to tell underlayer gl renderer
 * to create and compiled shader.
 * @export
 * @class Material
 */
class Material {
    constructor(config) {
        this.uuid = Object(__WEBPACK_IMPORTED_MODULE_0__math_index__["e" /* generateUUID */])();
        this.needUpdate = true;
        this.isTransparent = false;
        this.uniformValues = {};
        // setup default uniform value
        this.config = config;
        this.config.programConfig.uniforms.forEach(uniform => {
            // TODO distinguish matrix unifrom ...
            this.uniformValues[uniform.name] = uniform.default;
        });
    }
    getProgram(engine) {
        if (this.needUpdate) {
            engine.createProgram(this);
        }
        return engine.getProgram(this);
    }
    dispose(engine) {
        const program = this.getProgram(engine);
        if (program) {
            program.dispose();
        }
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Material;



/***/ }),

/***/ "./src/core/render-object.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scene_scene_node__ = __webpack_require__("./src/scene/scene-node.ts");

/**
 * render drawcall decription
 * which is decribe all drawable things
 * a drawable thing should have a geomemtry to define what to draw
 * and a material to defined how to draw
 * and many other draw config such as blending depth behaviour
 * engine will understand these infomantion and organize things properly
 * @export
 * @class RenderObject
 * @extends {SceneNode}
 */
class RenderObject extends __WEBPACK_IMPORTED_MODULE_0__scene_scene_node__["a" /* SceneNode */] {
    constructor(geometry, material) {
        super();
        this.geometry = geometry;
        this.material = material;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = RenderObject;



/***/ }),

/***/ "./src/engine/render-engine.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__render_list__ = __webpack_require__("./src/engine/render-list.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math_matrix4__ = __webpack_require__("./src/math/matrix4.ts");


class ARTEngineAdaptor {
    constructor(engine) {
        this.engine = engine;
    }
    update() {
    }
}
/* unused harmony export ARTEngineAdaptor */

class ARTEngine {
    constructor(renderer) {
        this.renderList = new __WEBPACK_IMPORTED_MODULE_0__render_list__["a" /* RenderList */]();
        this.activeCameraMatrixRerverse = new __WEBPACK_IMPORTED_MODULE_1__math_matrix4__["a" /* Matrix4 */]();
        this.VPMatrix = new __WEBPACK_IMPORTED_MODULE_1__math_matrix4__["a" /* Matrix4 */]();
        this.renderer = renderer;
    }
    useAdaptor(adaptor) {
        this.adaptor = adaptor;
    }
    updateViewProjection(camera) {
        this.activeCameraMatrixRerverse.getInverse(camera.worldMatrix, true);
        camera.updateProjectionMatrix(); // TODO projectmatrix may not need update
        this.VPMatrix.multiplyMatrices(camera.projectionMatrix, this.activeCameraMatrixRerverse);
        this.activeCamera = camera;
    }
    // render renderList
    render() {
        const opaqueList = this.renderList.opaqueList;
        const transparentList = this.renderList.transparentList;
        for (let i = 0; i < opaqueList.length; i++) {
            const obj = opaqueList[i];
            this.renderObject(obj);
        }
        for (let i = 0; i < transparentList.length; i++) {
            const obj = transparentList[i];
            this.renderObject(obj);
        }
    }
    renderObjects(objects) {
        for (let i = 0; i < objects.length; i++) {
            this.renderObject(objects[i]);
        }
    }
    renderObject(object) {
        // prepare material
        const material = object.material;
        const program = material.getProgram(this);
        this.renderer.useProgram(program);
        program.setUniform('MMatrix', object.worldMatrix);
        program.setUniform('VPMatrix', this.VPMatrix);
        // prepare geometry
        this.connectGeometryData(object.geometry, program);
        // render
        this.renderer.render(4 /* TRIANGLES */, program.useIndexDraw);
    }
    connectGeometryData(geometry, program) {
        let indexBuffer;
        for (const infoKey in geometry.layout.dataInfo) {
            const usage = geometry.layout.dataInfo[infoKey].usage;
            if (usage !== undefined && usage !== 0 /* index */) {
                const bufferData = geometry.bufferDatas[infoKey];
                let glBuffer = this.getGLAttributeBuffer(bufferData);
                if (glBuffer === undefined) {
                    glBuffer = this.createAttributeBuffer(bufferData, false);
                }
                program.getAttributeByUsage(usage).useBuffer(glBuffer);
            }
            if (usage === 0 /* index */) {
                if (indexBuffer !== undefined) {
                    throw 'only can set one index buffer';
                }
                indexBuffer = geometry.bufferDatas[infoKey];
            }
        }
        if (indexBuffer !== undefined && geometry.layout.indexDraw) {
            program.useIndexDraw = true;
            let glIndexBuffer = this.getGLAttributeBuffer(indexBuffer);
            if (glIndexBuffer === undefined) {
                glIndexBuffer = this.createAttributeBuffer(indexBuffer, true);
            }
            program.useIndexBuffer(glIndexBuffer);
        }
        else {
            program.useIndexDraw = false;
        }
        program.drawFrom = geometry.layout.drawFrom;
        program.drawCount = geometry.layout.drawCount;
    }
    getGLTexture(texture) {
        const id = texture.gltextureId;
        return this.renderer.getGLTexture(id);
    }
    getProgram(material) {
        const id = material.programId;
        const program = this.renderer.getProgram(id);
        return program;
    }
    createProgram(material) {
        const program = this.renderer.createProgram(material.config.programConfig);
        material.programId = program.id;
        material.needUpdate = false;
        return program;
    }
    getGLAttributeBuffer(bufferData) {
        return this.renderer.getBuffer(bufferData.storeId);
    }
    createAttributeBuffer(bufferData, useforIndex) {
        const id = this.renderer.createBuffer(bufferData.data.buffer, useforIndex);
        bufferData.storeId = id;
        return this.renderer.getBuffer(id);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ARTEngine;



/***/ }),

/***/ "./src/engine/render-list.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class RenderList {
    constructor() {
        this.opaqueList = [];
        this.transparentList = [];
        this.opaqueCount = 0;
        this.transparentCount = 0;
    }
    addRenderItem(object, transform) {
        // if (object.material.isTransparent) {
        //   this.transparentList.push({ object, transform});
        //   this.transparentCount++;
        // } else {
        //   if (this.opaqueCount < this.opaqueList.length) {
        //     this.opaqueList[this.opaqueCount]({ object, transform });
        //   } else {
        //     this.opaqueList.push({ object, transformation });
        //   }
        //   this.opaqueCount++;
        // }
    }
    clear() {
        this.opaqueCount = 0;
        this.transparentCount = 0;
    }
    sort() {
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = RenderList;



/***/ }),

/***/ "./src/export.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__artgl__ = __webpack_require__("./src/artgl.ts");

window.ARTGL = __WEBPACK_IMPORTED_MODULE_0__artgl__;
/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__artgl__);


/***/ }),

/***/ "./src/geometry/geo-lib/sphere-geometry.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_geometry__ = __webpack_require__("./src/core/geometry.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math_index__ = __webpack_require__("./src/math/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_buffer_data__ = __webpack_require__("./src/core/buffer-data.ts");



class SphereGeometry extends __WEBPACK_IMPORTED_MODULE_0__core_geometry__["a" /* Geometry */] {
    constructor(radius, widthSegments, heightSegments, phiStart, phiLength, thetaStart, thetaLength) {
        super();
        this.radius = 1;
        this.widthSegments = 10;
        this.heightSegments = 10;
        this.phiStart = 0;
        this.phiLength = Math.PI * 2;
        this.thetaStart = 0;
        this.thetaLength = Math.PI * 2;
        this.radius = radius !== undefined ? radius : 1;
        this.widthSegments = Math.max(3, Math.floor(widthSegments) || 8);
        this.heightSegments = Math.max(2, Math.floor(heightSegments) || 6);
        this.phiStart = phiStart !== undefined ? phiStart : 0;
        this.phiLength = phiLength !== undefined ? phiLength : Math.PI * 2;
        this.thetaStart = thetaStart !== undefined ? thetaStart : 0;
        this.thetaLength = thetaLength !== undefined ? thetaLength : Math.PI;
        this.thetaEnd = this.thetaStart + this.thetaLength;
        this.layout = {
            dataInfo: {
                index: {
                    usage: 0 /* index */,
                    stride: 1
                },
                position: {
                    usage: 1 /* position */,
                    stride: 3
                },
                normal: {
                    usage: 2 /* normal */,
                    stride: 3
                }
            },
            drawFrom: 0,
            drawCount: 36,
            indexDraw: true
        };
        this.populate();
    }
    populate() {
        let ix, iy;
        let index = 0;
        let grid = [];
        let vertex = new __WEBPACK_IMPORTED_MODULE_1__math_index__["d" /* Vector3 */](0, 0, 0);
        let normal = new __WEBPACK_IMPORTED_MODULE_1__math_index__["d" /* Vector3 */](0, 0, 0);
        // buffers
        let indices = [];
        let vertices = [];
        let normals = [];
        let uvs = [];
        for (iy = 0; iy <= this.heightSegments; iy++) {
            let verticesRow = [];
            let v = iy / this.heightSegments;
            for (ix = 0; ix <= this.widthSegments; ix++) {
                let u = ix / this.widthSegments;
                // vertex
                vertex.x = -this.radius * Math.cos(this.phiStart + u * this.phiLength) * Math.sin(this.thetaStart + v * this.thetaLength);
                vertex.y = this.radius * Math.cos(this.thetaStart + v * this.thetaLength);
                vertex.z = this.radius * Math.sin(this.phiStart + u * this.phiLength) * Math.sin(this.thetaStart + v * this.thetaLength);
                vertices.push(vertex.x, vertex.y, vertex.z);
                // normal
                normal.set(vertex.x, vertex.y, vertex.z).normalize();
                normals.push(normal.x, normal.y, normal.z);
                // uv
                uvs.push(u, 1 - v);
                verticesRow.push(index++);
            }
            grid.push(verticesRow);
        }
        // indices
        for (iy = 0; iy < this.heightSegments; iy++) {
            for (ix = 0; ix < this.widthSegments; ix++) {
                let a = grid[iy][ix + 1];
                let b = grid[iy][ix];
                let c = grid[iy + 1][ix];
                let d = grid[iy + 1][ix + 1];
                if (iy !== 0 || this.thetaStart > 0)
                    indices.push(a, b, d);
                if (iy !== this.heightSegments - 1 || this.thetaEnd < Math.PI)
                    indices.push(b, c, d);
            }
        }
        const positionBuffer = new __WEBPACK_IMPORTED_MODULE_2__core_buffer_data__["b" /* Float32BufferData */](new Float32Array(vertices));
        this.bufferDatas.position = positionBuffer;
        const normalBuffer = new __WEBPACK_IMPORTED_MODULE_2__core_buffer_data__["b" /* Float32BufferData */](new Float32Array(normals));
        this.bufferDatas.normal = normalBuffer;
        const indexBuffer = new __WEBPACK_IMPORTED_MODULE_2__core_buffer_data__["c" /* Uint16BufferData */](new Uint16Array(indices));
        this.bufferDatas.index = indexBuffer;
        this.layout.drawCount = indices.length;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = SphereGeometry;

//   let ix, iy;
//   let index = 0;
//   let grid = [];
//   let vertex = new Vector3();
//   let normal = new Vector3();
//   // buffers
//   let indices = [];
//   let vertices = [];
//   let normals = [];
//   let uvs = [];
//   // generate vertices, normals and uvs
//   for (iy = 0; iy <= heightSegments; iy++) {
//     let verticesRow = [];
//     let v = iy / heightSegments;
//     for (ix = 0; ix <= widthSegments; ix++) {
//       let u = ix / widthSegments;
//       // vertex
//       vertex.x = - radius * Math.cos(phiStart + u * phiLength) * Math.sin(thetaStart + v * thetaLength);
//       vertex.y = radius * Math.cos(thetaStart + v * thetaLength);
//       vertex.z = radius * Math.sin(phiStart + u * phiLength) * Math.sin(thetaStart + v * thetaLength);
//       vertices.push(vertex.x, vertex.y, vertex.z);
//       // normal
//       normal.set(vertex.x, vertex.y, vertex.z).normalize();
//       normals.push(normal.x, normal.y, normal.z);
//       // uv
//       uvs.push(u, 1 - v);
//       verticesRow.push(index++);
//     }
//     grid.push(verticesRow);
//   }
//   // indices
//   for (iy = 0; iy < heightSegments; iy++) {
//     for (ix = 0; ix < widthSegments; ix++) {
//       let a = grid[iy][ix + 1];
//       let b = grid[iy][ix];
//       let c = grid[iy + 1][ix];
//       let d = grid[iy + 1][ix + 1];
//       if (iy !== 0 || thetaStart > 0) indices.push(a, b, d);
//       if (iy !== heightSegments - 1 || thetaEnd < Math.PI) indices.push(b, c, d);
//     }
//   }
//   // build geometry
//   this.setIndex(indices);
//   this.addAttribute('position', new Float32BufferAttribute(vertices, 3));
//   this.addAttribute('normal', new Float32BufferAttribute(normals, 3));
//   this.addAttribute('uv', new Float32BufferAttribute(uvs, 2));
// }


/***/ }),

/***/ "./src/geometry/test-geometery.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_geometry__ = __webpack_require__("./src/core/geometry.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_buffer_data__ = __webpack_require__("./src/core/buffer-data.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_normal_generation__ = __webpack_require__("./src/util/normal-generation.ts");



class TestGeometry extends __WEBPACK_IMPORTED_MODULE_0__core_geometry__["a" /* Geometry */] {
    constructor() {
        super();
        this.layout = {
            dataInfo: {
                position: {
                    usage: 1 /* position */,
                    stride: 3
                },
                normal: {
                    usage: 2 /* normal */,
                    stride: 3
                }
            },
            drawFrom: 0,
            drawCount: 36,
        };
        this.populate();
    }
    populate() {
        const positionBuffer = new Float32Array([
            -1.0, -1.0, -1.0,
            -1.0, 1.0, 1.0,
            -1.0, -1.0, 1.0,
            1.0, 1.0, -1.0,
            -1.0, 1.0, -1.0,
            -1.0, -1.0, -1.0,
            1.0, -1.0, 1.0,
            1.0, -1.0, -1.0,
            -1.0, -1.0, -1.0,
            1.0, 1.0, -1.0,
            -1.0, -1.0, -1.0,
            1.0, -1.0, -1.0,
            -1.0, -1.0, -1.0,
            -1.0, 1.0, -1.0,
            -1.0, 1.0, 1.0,
            1.0, -1.0, 1.0,
            -1.0, -1.0, -1.0,
            -1.0, -1.0, 1.0,
            -1.0, 1.0, 1.0,
            1.0, -1.0, 1.0,
            -1.0, -1.0, 1.0,
            1.0, 1.0, 1.0,
            1.0, 1.0, -1.0,
            1.0, -1.0, -1.0,
            1.0, -1.0, -1.0,
            1.0, -1.0, 1.0,
            1.0, 1.0, 1.0,
            1.0, 1.0, 1.0,
            -1.0, 1.0, -1.0,
            1.0, 1.0, -1.0,
            1.0, 1.0, 1.0,
            -1.0, 1.0, 1.0,
            -1.0, 1.0, -1.0,
            1.0, -1.0, 1.0,
            -1.0, 1.0, 1.0,
            1.0, 1.0, 1.0,
        ]);
        const position = new __WEBPACK_IMPORTED_MODULE_1__core_buffer_data__["b" /* Float32BufferData */](positionBuffer);
        this.bufferDatas.position = position;
        const normal = new __WEBPACK_IMPORTED_MODULE_1__core_buffer_data__["b" /* Float32BufferData */](Object(__WEBPACK_IMPORTED_MODULE_2__util_normal_generation__["a" /* generateNormalFromPostion */])(position.data));
        this.bufferDatas.normal = normal;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = TestGeometry;



/***/ }),

/***/ "./src/interact/controler.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// controler is about how to minupulate camera easliy
class Controler {
    constructor() {
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Controler;



/***/ }),

/***/ "./src/interact/interactor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math_vector2__ = __webpack_require__("./src/math/vector2.ts");

const prev = new __WEBPACK_IMPORTED_MODULE_0__math_vector2__["a" /* Vector2 */]();
const mousePosition = new __WEBPACK_IMPORTED_MODULE_0__math_vector2__["a" /* Vector2 */]();
const v1 = new __WEBPACK_IMPORTED_MODULE_0__math_vector2__["a" /* Vector2 */]();
// interactor resposible for handle web event from an element
// and dispatch control event to controlers
class Interactor {
    constructor(inputElement) {
        this.controlers = [];
        this.onMouseMove = (event) => {
            mousePosition.set(event.clientX, event.clientY);
            v1.copy(prev).sub(mousePosition);
            if (this.mouseButton === 0) {
                this.groupEmit(this.leftMouseMoveCallBacks, v1);
            }
            if (this.mouseButton === 2) {
                this.groupEmit(this.rightMouseMoveCallBacks, v1);
            }
            prev.copy(mousePosition);
        };
        this.onMouseDown = (event) => {
            prev.set(event.clientX, event.clientY);
            this.mouseButton = event.button;
            event.preventDefault();
        };
        this.onMouseUp = (event) => {
            this.groupEmit(this.mouseUpCallBacks);
            this.mouseButton = -1;
        };
        this.onMouseWheel = (event) => {
            let delta = 0;
            if (event.wheelDelta !== void 0) {
                // WebKit / Opera / Explorer 9
                delta = event.wheelDelta;
            }
            else if (event.deltaY !== void 0) {
                // Firefox
                delta = -event.deltaY;
            }
            delta = delta > 0 ? 1.1 : 0.9;
            this.groupEmit(this.mouseWheelCallBacks, delta);
        };
        this.leftMouseMoveCallBacks = [];
        this.rightMouseMoveCallBacks = [];
        this.mouseWheelCallBacks = [];
        this.mouseDownCallBacks = [];
        this.mouseUpCallBacks = [];
        this.inputElement = inputElement;
        this.bind();
    }
    bind() {
        const el = this.inputElement;
        this.mouseButton = -1;
        el.addEventListener('mousemove', this.onMouseMove, false);
        el.addEventListener('mousedown', this.onMouseDown, false);
        el.addEventListener('mouseup', this.onMouseUp, false);
        el.addEventListener('mousewheel', this.onMouseWheel, false);
        // el.addEventListener('keydown', this.eventLoop, false);
        // el.addEventListener('keyup', this.cancelLoop, false);
        el.addEventListener('contextmenu', this.preventContentMenu, false);
    }
    unbind() {
        const el = this.inputElement;
        this.mouseButton = -1;
        el.removeEventListener('mousemove', this.onMouseMove);
        el.removeEventListener('mousedown', this.onMouseDown);
        el.removeEventListener('mouseup', this.onMouseUp);
        el.removeEventListener('mousewheel', this.onMouseWheel);
        // el.removeEventListener('keydown', this.eventLoop);
        // el.removeEventListener('keyup', this.cancelLoop);
        el.removeEventListener('contextmenu', this.preventContentMenu, false);
    }
    preventContentMenu(event) {
        event.preventDefault();
        event.stopPropagation();
    }
    groupEmit(callBackList, ...param) {
        callBackList.forEach(callback => {
            callback.callback(...param);
        });
    }
    removeControler(controler, callBackList) {
        callBackList = callBackList.filter(callback => { return callback.controler === controler; });
    }
    bindLeftMouseMove(controler, callback) {
        this.leftMouseMoveCallBacks.push({ controler, callback });
    }
    bindRightMouseMove(controler, callback) {
        this.rightMouseMoveCallBacks.push({ controler, callback });
    }
    bindMouseWheel(controler, callback) {
        this.mouseWheelCallBacks.push({ controler, callback });
    }
    bindMouseDown(controler, callback) {
        this.mouseDownCallBacks.push({ controler, callback });
    }
    bindMouseUp(controler, callback) {
        this.mouseUpCallBacks.push({ controler, callback });
    }
    unbindControlerAllListener(controler) {
        this.removeControler(this.mouseUpCallBacks, controler);
        this.removeControler(this.rightMouseMoveCallBacks, controler);
        this.removeControler(this.mouseWheelCallBacks, controler);
        this.removeControler(this.mouseDownCallBacks, controler);
        this.removeControler(this.mouseUpCallBacks, controler);
    }
    dispose() {
        this.unbind();
        this.leftMouseMoveCallBacks = [];
        this.rightMouseMoveCallBacks = [];
        this.mouseWheelCallBacks = [];
        this.mouseDownCallBacks = [];
        this.mouseUpCallBacks = [];
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Interactor;



/***/ }),

/***/ "./src/interact/orbit-controler.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__controler__ = __webpack_require__("./src/interact/controler.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math_spherical__ = __webpack_require__("./src/math/spherical.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__math_index__ = __webpack_require__("./src/math/index.ts");



const MaxPolarAngle = 179 / 180 * Math.PI;
const MinPolarAngle = 0.1;
const RotateAngleFactor = 2.5;
const tempVec = new __WEBPACK_IMPORTED_MODULE_2__math_index__["d" /* Vector3 */]();
class OrbitController extends __WEBPACK_IMPORTED_MODULE_0__controler__["a" /* Controler */] {
    constructor(camera) {
        super();
        this.camera = camera;
        this.rotate = (offset) => {
            const viewWidth = this.camera.width * 5000;
            const viewHeight = this.camera.height * 5000;
            this.spherical.azim += offset.x / viewWidth * Math.PI * RotateAngleFactor;
            this.spherical.polar = __WEBPACK_IMPORTED_MODULE_2__math_index__["a" /* MathUtil */].clamp(this.spherical.polar + offset.y / viewHeight * Math.PI * RotateAngleFactor, MinPolarAngle, MaxPolarAngle);
        };
        this.zoom = (factor) => {
            this.spherical.radius *= factor;
        };
        this.move = (offset) => {
            offset.rotate(-this.spherical.azim).multiplyScalar(this.spherical.radius * 0.002);
            this.spherical.center.x += offset.x;
            this.spherical.center.z += offset.y;
        };
        this.camera = camera;
        this.spherical = new __WEBPACK_IMPORTED_MODULE_1__math_spherical__["a" /* Spherical */]();
        const v = new __WEBPACK_IMPORTED_MODULE_2__math_index__["d" /* Vector3 */]();
        v.copy(camera.position).sub(this.spherical.center);
        this.spherical.setFromVector(v);
    }
    registerInteractor(interactor) {
        if (this.interactor !== undefined) {
            this.interactor.unbindControlerAllListener(this);
        }
        this.interactor = interactor;
        this.interactor.bindLeftMouseMove(this, this.rotate);
        this.interactor.bindRightMouseMove(this, this.move);
        this.interactor.bindMouseWheel(this, this.zoom);
    }
    update() {
        tempVec.setFromSpherical(this.spherical).add(this.spherical.center);
        this.camera.position.copy(tempVec);
        this.camera.lookAt(this.spherical.center);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = OrbitController;



/***/ }),

/***/ "./src/loader/obj-loader.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export loadObjFile */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_geometry__ = __webpack_require__("./src/core/geometry.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math_vector3__ = __webpack_require__("./src/math/vector3.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__math_vector2__ = __webpack_require__("./src/math/vector2.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_file_io__ = __webpack_require__("./src/util/file-io.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_buffer_data__ = __webpack_require__("./src/core/buffer-data.ts");
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};





function loadObjFile() {
    return __awaiter(this, void 0, void 0, function* () {
        const loader = new OBJLoader();
        const str = yield Object(__WEBPACK_IMPORTED_MODULE_3__util_file_io__["a" /* loadStringFromFile */])();
        return loader.parse(str);
    });
}
class OBJLoader {
    constructor() {
        this.vertexPattern = /v( +[\d|\.|\+|\-|e|E]+)( +[\d|\.|\+|\-|e|E]+)( +[\d|\.|\+|\-|e|E]+)/;
        // vn float float float
        this.normalPattern = /vn( +[\d|\.|\+|\-|e|E]+)( +[\d|\.|\+|\-|e|E]+)( +[\d|\.|\+|\-|e|E]+)/;
        // vt float float
        this.uvPattern = /vt( +[\d|\.|\+|\-|e|E]+)( +[\d|\.|\+|\-|e|E]+)/;
        // f vertex vertex vertex ...
        this.facePattern1 = /f\s+(([\d]{1,}[\s]?){3,})+/;
        // f vertex/uvs vertex/uvs vertex/uvs ...
        this.facePattern2 = /f\s+((([\d]{1,}\/[\d]{1,}[\s]?){3,})+)/;
        // f vertex/uvs/normal vertex/uvs/normal vertex/uvs/normal ...
        this.facePattern3 = /f\s+((([\d]{1,}\/[\d]{1,}\/[\d]{1,}[\s]?){3,})+)/;
        // f vertex//normal vertex//normal vertex//normal ...
        this.facePattern4 = /f\s+((([\d]{1,}\/\/[\d]{1,}[\s]?){3,})+)/;
        this.positions = [];
        this.normals = [];
        this.uvs = [];
        this.indicesForBabylon = []; //The list of indices for VertexData
        this.wrappedPositionForBabylon = []; //The list of position in vectors
        this.wrappedUvsForBabylon = []; //Array with all value of uvs to match with the indices
        this.wrappedNormalsForBabylon = []; //Array with all value of normals to match with the indices
        //Create a tuple with indice of Position, Normal, UV  [pos, norm, uvs]
        this.tuplePosNorm = [];
        this.curPositionInIndices = 0;
        this.setDataForCurrentFaceWithPattern4 = (face) => {
            const triangleStrs = this.collectTriangle(face);
            for (var k = 0; k < triangleStrs.length; k++) {
                //triangle[k] = "1//1"
                //Split the data for getting position and normals
                var point = triangleStrs[k].split("//"); // ["1", "1"]
                // We check indices, and normals
                var indicePositionFromObj = parseInt(point[0]) - 1;
                var indiceNormalFromObj = parseInt(point[1]) - 1;
                this.setData(indicePositionFromObj, 1, //Default value for uv
                indiceNormalFromObj, this.positions[indicePositionFromObj], //Get each vector of data
                new __WEBPACK_IMPORTED_MODULE_2__math_vector2__["a" /* Vector2 */](0, 0), this.normals[indiceNormalFromObj]);
            }
        };
    }
    collectTriangle(faces) {
        const triangles = [];
        this.getTriangles(faces, 1, triangles);
        return triangles;
    }
    getTriangles(face, v, triangleList) {
        //Work for each element of the array
        //Result obtained after 2 iterations:
        //Pattern1 => triangle = ["1","2","3","1","3","4"];
        //Pattern2 => triangle = ["1/1","2/2","3/3","1/1","3/3","4/4"];
        //Pattern3 => triangle = ["1/1/1","2/2/2","3/3/3","1/1/1","3/3/3","4/4/4"];
        //Pattern4 => triangle = ["1//1","2//2","3//3","1//1","3//3","4//4"];
        if (v + 1 < face.length) {
            //Add on the triangle variable the indexes to obtain triangles
            triangleList.push(face[0], face[v], face[v + 1]);
            //Incrementation for recursion
            v += 1;
            //Recursion
            this.getTriangles(face, v, triangleList);
        }
    }
    isInArray(obj) {
        const arr = this.tuplePosNorm;
        if (!arr[obj[0]]) {
            arr[obj[0]] = { normals: [], idx: [] };
        }
        const idx = arr[obj[0]].normals.indexOf(obj[1]);
        return idx === -1 ? -1 : arr[obj[0]].idx[idx];
        ``;
    }
    ;
    setData(indicePositionFromObj, indiceUvsFromObj, indiceNormalFromObj, positionVectorFromOBJ, textureVectorFromOBJ, normalsVectorFromOBJ) {
        //Check if this tuple already exists in the list of tuples
        const index = this.isInArray([indicePositionFromObj, indiceNormalFromObj]);
        //If it not exists
        if (index == -1) {
            //Add an new indice.
            //The array of indices is only an array with his length equal to the number of triangles - 1.
            //We add vertices data in this order
            this.indicesForBabylon.push(this.wrappedPositionForBabylon.length);
            //Push the position of vertice for Babylon
            //Each element is a BABYLON.Vector3(x,y,z)
            this.wrappedPositionForBabylon.push(positionVectorFromOBJ);
            //Push the uvs for Babylon
            //Each element is a BABYLON.Vector3(u,v)
            this.wrappedUvsForBabylon.push(textureVectorFromOBJ);
            //Push the normals for Babylon
            //Each element is a BABYLON.Vector3(x,y,z)
            this.wrappedNormalsForBabylon.push(normalsVectorFromOBJ);
            //Add the tuple in the comparison list
            this.tuplePosNorm[indicePositionFromObj].normals.push(indiceNormalFromObj);
            this.tuplePosNorm[indicePositionFromObj].idx.push(this.curPositionInIndices++);
        }
        else {
            //The tuple already exists
            //Add the index of the already existing tuple
            //At this index we can get the value of position, normal and uvs of vertex
            this.indicesForBabylon.push(index);
        }
    }
    ;
    setDataForCurrentFaceWithPattern1(face) {
        const triangleStrs = this.collectTriangle(face);
        //For each element in the triangles array.
        //This var could contains 1 to an infinity of triangles
        for (var k = 0; k < triangleStrs.length; k++) {
            // Set position indice
            var indicePositionFromObj = parseInt(triangleStrs[k]) - 1;
            this.setData(indicePositionFromObj, 0, 0, //In the pattern 1, normals and uvs are not defined
            this.positions[indicePositionFromObj], //Get the vectors data
            new __WEBPACK_IMPORTED_MODULE_2__math_vector2__["a" /* Vector2 */](), new __WEBPACK_IMPORTED_MODULE_1__math_vector3__["a" /* Vector3 */](0, 1, 0) //Create default vectors
            );
        }
    }
    ;
    setDataForCurrentFaceWithPattern2(face) {
        const triangleStrs = this.collectTriangle(face);
        for (var k = 0; k < triangleStrs.length; k++) {
            //triangle[k] = "1/1"
            //Split the data for getting position and uv
            var point = triangleStrs[k].split("/"); // ["1", "1"]
            //Set position indice
            var indicePositionFromObj = parseInt(point[0]) - 1;
            //Set uv indice
            var indiceUvsFromObj = parseInt(point[1]) - 1;
            this.setData(indicePositionFromObj, indiceUvsFromObj, 0, //Default value for normals
            this.positions[indicePositionFromObj], //Get the values for each element
            this.uvs[indiceUvsFromObj], new __WEBPACK_IMPORTED_MODULE_1__math_vector3__["a" /* Vector3 */](0, 1, 0) //Default value for normals
            );
        }
    }
    setDataForCurrentFaceWithPattern3(face) {
        const triangleStrs = this.collectTriangle(face);
        for (var k = 0; k < triangleStrs.length; k++) {
            //triangle[k] = "1/1/1"
            //Split the data for getting position, uv, and normals
            var point = triangleStrs[k].split("/"); // ["1", "1", "1"]
            // Set position indice
            var indicePositionFromObj = parseInt(point[0]) - 1;
            // Set uv indice
            var indiceUvsFromObj = parseInt(point[1]) - 1;
            // Set normal indice
            var indiceNormalFromObj = parseInt(point[2]) - 1;
            this.setData(indicePositionFromObj, indiceUvsFromObj, indiceNormalFromObj, this.positions[indicePositionFromObj], this.uvs[indiceUvsFromObj], this.normals[indiceNormalFromObj] //Set the vector for each component
            );
        }
    }
    ;
    parse(objStr) {
        //Split the file into lines
        const lines = objStr.split('\n');
        for (let i = 0; i < lines.length; i++) {
            const line = lines[i].trim();
            let result;
            //Comment or newLine
            if (line.length === 0 || line.charAt(0) === '#') {
                continue;
            }
            else if ((result = this.vertexPattern.exec(line)) !== null) {
                this.positions.push(new __WEBPACK_IMPORTED_MODULE_1__math_vector3__["a" /* Vector3 */](parseFloat(result[1]), parseFloat(result[2]), parseFloat(result[3])));
            }
            else if ((result = this.normalPattern.exec(line)) !== null) {
                this.normals.push(new __WEBPACK_IMPORTED_MODULE_1__math_vector3__["a" /* Vector3 */](parseFloat(result[1]), parseFloat(result[2]), parseFloat(result[3])));
            }
            else if ((result = this.uvPattern.exec(line)) !== null) {
                this.uvs.push(new __WEBPACK_IMPORTED_MODULE_2__math_vector2__["a" /* Vector2 */](parseFloat(result[1]), parseFloat(result[2])));
            }
            else if ((result = this.facePattern3.exec(line)) !== null) {
                //Value of result:
                //["f 1/1/1 2/2/2 3/3/3", "1/1/1 2/2/2 3/3/3"...]
                //Set the data for this face
                this.setDataForCurrentFaceWithPattern3(result[1].trim().split(" "));
            }
            else if ((result = this.facePattern4.exec(line)) !== null) {
                //Value of result:
                //["f 1//1 2//2 3//3", "1//1 2//2 3//3"...]
                //Set the data for this face
                this.setDataForCurrentFaceWithPattern4(result[1].trim().split(" "));
            }
            else if ((result = this.facePattern2.exec(line)) !== null) {
                //Value of result:
                //["f 1/1 2/2 3/3", "1/1 2/2 3/3"...]
                //Set the data for this face
                this.setDataForCurrentFaceWithPattern2(result[1].trim().split(" "));
            }
            else if ((result = this.facePattern1.exec(line)) !== null) {
                //Value of result
                //["f 1 2 3", "1 2 3"...]
                //Set the data for this face
                this.setDataForCurrentFaceWithPattern1(result[1].trim().split(" "));
                //Define a mesh or an object
                //Each time this keyword is analysed, create a new Object with all data for creating a babylonMesh
            }
            else {
                //If there is another possibility
                console.log("Unhandled expression at line : " + line);
            }
        }
        const geometry = new __WEBPACK_IMPORTED_MODULE_0__core_geometry__["a" /* Geometry */]();
        const position = [];
        this.wrappedPositionForBabylon.forEach(po => {
            position.push(po.x);
            position.push(po.y);
            position.push(po.z);
        });
        const normal = [];
        this.wrappedNormalsForBabylon.forEach(po => {
            normal.push(po.x);
            normal.push(po.y);
            normal.push(po.z);
        });
        const positionBuffer = new Float32Array(position);
        const normalBuffer = new Float32Array(normal);
        const indexBuffer = new Uint16Array(this.indicesForBabylon);
        geometry.bufferDatas.position = new __WEBPACK_IMPORTED_MODULE_4__core_buffer_data__["b" /* Float32BufferData */](positionBuffer);
        geometry.bufferDatas.normal = new __WEBPACK_IMPORTED_MODULE_4__core_buffer_data__["b" /* Float32BufferData */](normalBuffer);
        // geometry.bufferDatas.normal = new Float32BufferData(generateNormalFromPostion(positionBuffer));
        geometry.bufferDatas.index = new __WEBPACK_IMPORTED_MODULE_4__core_buffer_data__["c" /* Uint16BufferData */](indexBuffer);
        geometry.layout = {
            dataInfo: __WEBPACK_IMPORTED_MODULE_0__core_geometry__["b" /* defaultGeometryLayoutDataInfo */],
            drawCount: indexBuffer.length,
            drawFrom: 0,
            indexDraw: true,
        };
        return geometry;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = OBJLoader;



/***/ }),

/***/ "./src/material/test-material.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_material__ = __webpack_require__("./src/core/material.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math_index__ = __webpack_require__("./src/math/index.ts");


const vertexShaderSource = `
    void main() {
      vec4 worldPosition = VPMatrix * MMatrix * vec4(position, 1.0);
      color = vec3(normal.xyz);
      gl_Position = worldPosition;
      gl_PointSize = 10.0;
    }
    `;
const fragmentShaderSource = `
    void main() {
      gl_FragColor = vec4(color * 0.5 + 0.5, 1.0);
    }
    `;
class TestMaterial extends __WEBPACK_IMPORTED_MODULE_0__core_material__["a" /* Material */] {
    constructor() {
        const config = {
            programConfig: {
                attributes: [
                    { name: 'position', type: 2 /* floatVec3 */, usage: 1 /* position */, stride: 3 },
                    { name: 'normal', type: 2 /* floatVec3 */, usage: 2 /* normal */, stride: 3 },
                ],
                uniforms: [
                    { name: 'MMatrix', type: 10 /* Mat4 */, default: new __WEBPACK_IMPORTED_MODULE_1__math_index__["b" /* Matrix4 */]() },
                    { name: 'VPMatrix', type: 10 /* Mat4 */, default: new __WEBPACK_IMPORTED_MODULE_1__math_index__["b" /* Matrix4 */]() },
                ],
                varyings: [
                    { name: 'color', type: 2 /* floatVec3 */ }
                ],
                vertexShaderString: vertexShaderSource,
                fragmentShaderString: fragmentShaderSource,
                autoInjectHeader: true,
            }
        };
        super(config);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = TestMaterial;



/***/ }),

/***/ "./src/math/euler.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vector3__ = __webpack_require__("./src/math/vector3.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__matrix4__ = __webpack_require__("./src/math/matrix4.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util__ = __webpack_require__("./src/math/util.ts");



var EulerOrder;
(function (EulerOrder) {
    EulerOrder[EulerOrder["XYZ"] = 0] = "XYZ";
    EulerOrder[EulerOrder["YZX"] = 1] = "YZX";
    EulerOrder[EulerOrder["ZXY"] = 2] = "ZXY";
    EulerOrder[EulerOrder["XZY"] = 3] = "XZY";
    EulerOrder[EulerOrder["YXZ"] = 4] = "YXZ";
    EulerOrder[EulerOrder["ZYX"] = 5] = "ZYX";
})(EulerOrder || (EulerOrder = {}));
const tempMatirx = new __WEBPACK_IMPORTED_MODULE_1__matrix4__["a" /* Matrix4 */]();
class Euler {
    constructor(x, y, z, order) {
        this._order = Euler.defaultOrder;
        this.onChangeCallback = () => { };
        this._x = x || 0;
        this._y = y || 0;
        this._z = z || 0;
        this._order = order || Euler.defaultOrder;
    }
    get x() { return this._x; }
    ;
    get y() { return this._y; }
    ;
    get z() { return this._z; }
    ;
    set x(value) { this._x = value; }
    ;
    set y(value) { this._y = value; }
    ;
    set z(value) { this._z = value; }
    ;
    get order() { return this._order; }
    ;
    set order(value) { this._order = value; }
    ;
    clone() {
        return new Euler(this._x, this._y, this._z, this._order);
    }
    copy(euler) {
        this._x = euler._x;
        this._y = euler._y;
        this._z = euler._z;
        this._order = euler._order;
        this.onChangeCallback();
        return this;
    }
    equals(euler) {
        return (euler._x === this._x) &&
            (euler._y === this._y) &&
            (euler._z === this._z) &&
            (euler._order === this._order);
    }
    setFromRotationMatrix(m, order, update) {
        var clamp = __WEBPACK_IMPORTED_MODULE_2__util__["a" /* MathUtil */].clamp;
        // assumes the upper 3x3 of m is a pure rotation matrix (i.e, unscaled)
        var te = m.elements;
        var m11 = te[0], m12 = te[4], m13 = te[8];
        var m21 = te[1], m22 = te[5], m23 = te[9];
        var m31 = te[2], m32 = te[6], m33 = te[10];
        order = order || this._order;
        if (order === EulerOrder.XYZ) {
            this._y = Math.asin(clamp(m13, -1, 1));
            if (Math.abs(m13) < 0.99999) {
                this._x = Math.atan2(-m23, m33);
                this._z = Math.atan2(-m12, m11);
            }
            else {
                this._x = Math.atan2(m32, m22);
                this._z = 0;
            }
        }
        else if (order === EulerOrder.YXZ) {
            this._x = Math.asin(-clamp(m23, -1, 1));
            if (Math.abs(m23) < 0.99999) {
                this._y = Math.atan2(m13, m33);
                this._z = Math.atan2(m21, m22);
            }
            else {
                this._y = Math.atan2(-m31, m11);
                this._z = 0;
            }
        }
        else if (order === EulerOrder.ZXY) {
            this._x = Math.asin(clamp(m32, -1, 1));
            if (Math.abs(m32) < 0.99999) {
                this._y = Math.atan2(-m31, m33);
                this._z = Math.atan2(-m12, m22);
            }
            else {
                this._y = 0;
                this._z = Math.atan2(m21, m11);
            }
        }
        else if (order === EulerOrder.ZYX) {
            this._y = Math.asin(-clamp(m31, -1, 1));
            if (Math.abs(m31) < 0.99999) {
                this._x = Math.atan2(m32, m33);
                this._z = Math.atan2(m21, m11);
            }
            else {
                this._x = 0;
                this._z = Math.atan2(-m12, m22);
            }
        }
        else if (order === EulerOrder.YZX) {
            this._z = Math.asin(clamp(m21, -1, 1));
            if (Math.abs(m21) < 0.99999) {
                this._x = Math.atan2(-m23, m22);
                this._y = Math.atan2(-m31, m11);
            }
            else {
                this._x = 0;
                this._y = Math.atan2(m13, m33);
            }
        }
        else if (order === EulerOrder.XZY) {
            this._z = Math.asin(-clamp(m12, -1, 1));
            if (Math.abs(m12) < 0.99999) {
                this._x = Math.atan2(m32, m22);
                this._y = Math.atan2(m13, m11);
            }
            else {
                this._x = Math.atan2(-m23, m33);
                this._y = 0;
            }
        }
        this._order = order;
        if (update !== false)
            this.onChangeCallback();
        return this;
    }
    setFromQuaternion(q, order, update) {
        tempMatirx.makeRotationFromQuaternion(q);
        return this.setFromRotationMatrix(tempMatirx, order, update);
    }
    ;
    set(x, y, z, order) {
        this._x = x;
        this._y = y;
        this._z = z;
        this._order = order || this._order;
        this.onChangeCallback();
        return this;
    }
    setFromVector3(v, order) {
        return this.set(v.x, v.y, v.z, order || this._order);
    }
    fromArray(array) {
        this._x = array[0];
        this._y = array[1];
        this._z = array[2];
        if (array[3] !== undefined)
            this._order = array[3];
        this.onChangeCallback();
        return this;
    }
    toArray(array, offset) {
        if (array === undefined)
            array = [];
        if (offset === undefined)
            offset = 0;
        array[offset] = this._x;
        array[offset + 1] = this._y;
        array[offset + 2] = this._z;
        array[offset + 3] = this._order;
        return array;
    }
    toVector3(optionalTarget) {
        if (optionalTarget) {
            return optionalTarget.set(this._x, this._y, this._z);
        }
        else {
            return new __WEBPACK_IMPORTED_MODULE_0__vector3__["a" /* Vector3 */](this._x, this._y, this._z);
        }
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Euler;

Euler.defaultOrder = EulerOrder.XYZ;


/***/ }),

/***/ "./src/math/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vector3__ = __webpack_require__("./src/math/vector3.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_0__vector3__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__matrix4__ = __webpack_require__("./src/math/matrix4.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__matrix4__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__euler__ = __webpack_require__("./src/math/euler.ts");
/* unused harmony reexport Euler */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__quaternion__ = __webpack_require__("./src/math/quaternion.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_3__quaternion__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__uuid__ = __webpack_require__("./src/math/uuid.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_4__uuid__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__util__ = __webpack_require__("./src/math/util.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_5__util__["a"]; });








/***/ }),

/***/ "./src/math/matrix4.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vector3__ = __webpack_require__("./src/math/vector3.ts");

const tempx = new __WEBPACK_IMPORTED_MODULE_0__vector3__["a" /* Vector3 */];
const tempy = new __WEBPACK_IMPORTED_MODULE_0__vector3__["a" /* Vector3 */];
const tempz = new __WEBPACK_IMPORTED_MODULE_0__vector3__["a" /* Vector3 */];
class Matrix4 {
    constructor() {
        this.elements = [
            1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            0, 0, 0, 1
        ];
    }
    copy(m) {
        var te = this.elements;
        var me = m.elements;
        te[0] = me[0];
        te[1] = me[1];
        te[2] = me[2];
        te[3] = me[3];
        te[4] = me[4];
        te[5] = me[5];
        te[6] = me[6];
        te[7] = me[7];
        te[8] = me[8];
        te[9] = me[9];
        te[10] = me[10];
        te[11] = me[11];
        te[12] = me[12];
        te[13] = me[13];
        te[14] = me[14];
        te[15] = me[15];
        return this;
    }
    clone() {
        return new Matrix4().fromArray(this.elements);
    }
    equals(matrix) {
        var te = this.elements;
        var me = matrix.elements;
        for (var i = 0; i < 16; i++) {
            if (te[i] !== me[i])
                return false;
        }
        return true;
    }
    set(n11, n12, n13, n14, n21, n22, n23, n24, n31, n32, n33, n34, n41, n42, n43, n44) {
        const te = this.elements;
        te[0] = n11;
        te[4] = n12;
        te[8] = n13;
        te[12] = n14;
        te[1] = n21;
        te[5] = n22;
        te[9] = n23;
        te[13] = n24;
        te[2] = n31;
        te[6] = n32;
        te[10] = n33;
        te[14] = n34;
        te[3] = n41;
        te[7] = n42;
        te[11] = n43;
        te[15] = n44;
        return this;
    }
    compose(position, quaternion, scale) {
        this.makeRotationFromQuaternion(quaternion);
        this.scale(scale.x, scale.y, scale.z);
        this.setPostion(position.x, position.y, position.z);
        return this;
    }
    identity() {
        this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        return this;
    }
    makePerspective(left, right, top, bottom, near, far) {
        const te = this.elements;
        const x = 2 * near / (right - left);
        const y = 2 * near / (top - bottom);
        const a = (right + left) / (right - left);
        const b = (top + bottom) / (top - bottom);
        const c = -(far + near) / (far - near);
        const d = -2 * far * near / (far - near);
        te[0] = x;
        te[4] = 0;
        te[8] = a;
        te[12] = 0;
        te[1] = 0;
        te[5] = y;
        te[9] = b;
        te[13] = 0;
        te[2] = 0;
        te[6] = 0;
        te[10] = c;
        te[14] = d;
        te[3] = 0;
        te[7] = 0;
        te[11] = -1;
        te[15] = 0;
        return this;
    }
    multiplyMatrices(a, b) {
        var ae = a.elements;
        var be = b.elements;
        var te = this.elements;
        var a11 = ae[0], a12 = ae[4], a13 = ae[8], a14 = ae[12];
        var a21 = ae[1], a22 = ae[5], a23 = ae[9], a24 = ae[13];
        var a31 = ae[2], a32 = ae[6], a33 = ae[10], a34 = ae[14];
        var a41 = ae[3], a42 = ae[7], a43 = ae[11], a44 = ae[15];
        var b11 = be[0], b12 = be[4], b13 = be[8], b14 = be[12];
        var b21 = be[1], b22 = be[5], b23 = be[9], b24 = be[13];
        var b31 = be[2], b32 = be[6], b33 = be[10], b34 = be[14];
        var b41 = be[3], b42 = be[7], b43 = be[11], b44 = be[15];
        te[0] = a11 * b11 + a12 * b21 + a13 * b31 + a14 * b41;
        te[4] = a11 * b12 + a12 * b22 + a13 * b32 + a14 * b42;
        te[8] = a11 * b13 + a12 * b23 + a13 * b33 + a14 * b43;
        te[12] = a11 * b14 + a12 * b24 + a13 * b34 + a14 * b44;
        te[1] = a21 * b11 + a22 * b21 + a23 * b31 + a24 * b41;
        te[5] = a21 * b12 + a22 * b22 + a23 * b32 + a24 * b42;
        te[9] = a21 * b13 + a22 * b23 + a23 * b33 + a24 * b43;
        te[13] = a21 * b14 + a22 * b24 + a23 * b34 + a24 * b44;
        te[2] = a31 * b11 + a32 * b21 + a33 * b31 + a34 * b41;
        te[6] = a31 * b12 + a32 * b22 + a33 * b32 + a34 * b42;
        te[10] = a31 * b13 + a32 * b23 + a33 * b33 + a34 * b43;
        te[14] = a31 * b14 + a32 * b24 + a33 * b34 + a34 * b44;
        te[3] = a41 * b11 + a42 * b21 + a43 * b31 + a44 * b41;
        te[7] = a41 * b12 + a42 * b22 + a43 * b32 + a44 * b42;
        te[11] = a41 * b13 + a42 * b23 + a43 * b33 + a44 * b43;
        te[15] = a41 * b14 + a42 * b24 + a43 * b34 + a44 * b44;
        return this;
    }
    getInverse(m, throwOnDegenerate) {
        // based on http://www.euclideanspace.com/maths/algebra/matrix/functions/inverse/fourD/index.htm
        var te = this.elements, me = m.elements, n11 = me[0], n21 = me[1], n31 = me[2], n41 = me[3], n12 = me[4], n22 = me[5], n32 = me[6], n42 = me[7], n13 = me[8], n23 = me[9], n33 = me[10], n43 = me[11], n14 = me[12], n24 = me[13], n34 = me[14], n44 = me[15], t11 = n23 * n34 * n42 - n24 * n33 * n42 + n24 * n32 * n43 - n22 * n34 * n43 - n23 * n32 * n44 + n22 * n33 * n44, t12 = n14 * n33 * n42 - n13 * n34 * n42 - n14 * n32 * n43 + n12 * n34 * n43 + n13 * n32 * n44 - n12 * n33 * n44, t13 = n13 * n24 * n42 - n14 * n23 * n42 + n14 * n22 * n43 - n12 * n24 * n43 - n13 * n22 * n44 + n12 * n23 * n44, t14 = n14 * n23 * n32 - n13 * n24 * n32 - n14 * n22 * n33 + n12 * n24 * n33 + n13 * n22 * n34 - n12 * n23 * n34;
        var det = n11 * t11 + n21 * t12 + n31 * t13 + n41 * t14;
        if (det === 0) {
            var msg = "Matrix4.getInverse(): can't invert matrix, determinant is 0";
            if (throwOnDegenerate === true) {
                throw new Error(msg);
            }
            else {
                console.warn(msg);
            }
            return this.identity();
        }
        var detInv = 1 / det;
        te[0] = t11 * detInv;
        te[1] = (n24 * n33 * n41 - n23 * n34 * n41 - n24 * n31 * n43 + n21 * n34 * n43 + n23 * n31 * n44 - n21 * n33 * n44) * detInv;
        te[2] = (n22 * n34 * n41 - n24 * n32 * n41 + n24 * n31 * n42 - n21 * n34 * n42 - n22 * n31 * n44 + n21 * n32 * n44) * detInv;
        te[3] = (n23 * n32 * n41 - n22 * n33 * n41 - n23 * n31 * n42 + n21 * n33 * n42 + n22 * n31 * n43 - n21 * n32 * n43) * detInv;
        te[4] = t12 * detInv;
        te[5] = (n13 * n34 * n41 - n14 * n33 * n41 + n14 * n31 * n43 - n11 * n34 * n43 - n13 * n31 * n44 + n11 * n33 * n44) * detInv;
        te[6] = (n14 * n32 * n41 - n12 * n34 * n41 - n14 * n31 * n42 + n11 * n34 * n42 + n12 * n31 * n44 - n11 * n32 * n44) * detInv;
        te[7] = (n12 * n33 * n41 - n13 * n32 * n41 + n13 * n31 * n42 - n11 * n33 * n42 - n12 * n31 * n43 + n11 * n32 * n43) * detInv;
        te[8] = t13 * detInv;
        te[9] = (n14 * n23 * n41 - n13 * n24 * n41 - n14 * n21 * n43 + n11 * n24 * n43 + n13 * n21 * n44 - n11 * n23 * n44) * detInv;
        te[10] = (n12 * n24 * n41 - n14 * n22 * n41 + n14 * n21 * n42 - n11 * n24 * n42 - n12 * n21 * n44 + n11 * n22 * n44) * detInv;
        te[11] = (n13 * n22 * n41 - n12 * n23 * n41 - n13 * n21 * n42 + n11 * n23 * n42 + n12 * n21 * n43 - n11 * n22 * n43) * detInv;
        te[12] = t14 * detInv;
        te[13] = (n13 * n24 * n31 - n14 * n23 * n31 + n14 * n21 * n33 - n11 * n24 * n33 - n13 * n21 * n34 + n11 * n23 * n34) * detInv;
        te[14] = (n14 * n22 * n31 - n12 * n24 * n31 - n14 * n21 * n32 + n11 * n24 * n32 + n12 * n21 * n34 - n11 * n22 * n34) * detInv;
        te[15] = (n12 * n23 * n31 - n13 * n22 * n31 + n13 * n21 * n32 - n11 * n23 * n32 - n12 * n21 * n33 + n11 * n22 * n33) * detInv;
        return this;
    }
    lookAt(origin, target, up) {
        const te = this.elements;
        tempz.copy(origin).sub(target);
        if (tempz.mag() === 0) {
            tempz.z = 1;
        }
        tempz.normalize();
        tempx.crossVectors(up, tempz);
        if (tempx.mag() === 0) {
            if (Math.abs(up.z) === 1) {
                tempz.x += 0.0001;
            }
            else {
                tempz.z += 0.0001;
            }
            tempz.normalize();
            tempx.crossVectors(up, tempz);
        }
        tempx.normalize();
        tempy.crossVectors(tempz, tempx);
        te[0] = tempx.x;
        te[4] = tempy.x;
        te[8] = tempz.x;
        te[1] = tempx.y;
        te[5] = tempy.y;
        te[9] = tempz.y;
        te[2] = tempx.z;
        te[6] = tempy.z;
        te[10] = tempz.z;
        return this;
    }
    ;
    scale(x, y, z) {
        const te = this.elements;
        te[0] *= x;
        te[4] *= y;
        te[8] *= z;
        te[1] *= x;
        te[5] *= y;
        te[9] *= z;
        te[2] *= x;
        te[6] *= y;
        te[10] *= z;
        te[3] *= x;
        te[7] *= y;
        te[11] *= z;
        return this;
    }
    setPostion(x, y, z) {
        var te = this.elements;
        te[12] = x;
        te[13] = y;
        te[14] = z;
        return this;
    }
    makeRotationFromQuaternion(q) {
        var te = this.elements;
        var x = q.x, y = q.y, z = q.z, w = q.w;
        var x2 = x + x, y2 = y + y, z2 = z + z;
        var xx = x * x2, xy = x * y2, xz = x * z2;
        var yy = y * y2, yz = y * z2, zz = z * z2;
        var wx = w * x2, wy = w * y2, wz = w * z2;
        te[0] = 1 - (yy + zz);
        te[4] = xy - wz;
        te[8] = xz + wy;
        te[1] = xy + wz;
        te[5] = 1 - (xx + zz);
        te[9] = yz - wx;
        te[2] = xz - wy;
        te[6] = yz + wx;
        te[10] = 1 - (xx + yy);
        // last column
        te[3] = 0;
        te[7] = 0;
        te[11] = 0;
        // bottom row
        te[12] = 0;
        te[13] = 0;
        te[14] = 0;
        te[15] = 1;
        return this;
    }
    makeTranslation(x, y, z) {
        this.set(1, 0, 0, x, 0, 1, 0, y, 0, 0, 1, z, 0, 0, 0, 1);
        return this;
    }
    makeRotationX(theta) {
        var c = Math.cos(theta), s = Math.sin(theta);
        this.set(1, 0, 0, 0, 0, c, -s, 0, 0, s, c, 0, 0, 0, 0, 1);
        return this;
    }
    makeRotationY(theta) {
        var c = Math.cos(theta), s = Math.sin(theta);
        this.set(c, 0, s, 0, 0, 1, 0, 0, -s, 0, c, 0, 0, 0, 0, 1);
        return this;
    }
    makeRotationZ(theta) {
        var c = Math.cos(theta), s = Math.sin(theta);
        this.set(c, -s, 0, 0, s, c, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        return this;
    }
    toArray(array, offset) {
        if (array === undefined)
            array = [];
        if (offset === undefined)
            offset = 0;
        var te = this.elements;
        array[offset] = te[0];
        array[offset + 1] = te[1];
        array[offset + 2] = te[2];
        array[offset + 3] = te[3];
        array[offset + 4] = te[4];
        array[offset + 5] = te[5];
        array[offset + 6] = te[6];
        array[offset + 7] = te[7];
        array[offset + 8] = te[8];
        array[offset + 9] = te[9];
        array[offset + 10] = te[10];
        array[offset + 11] = te[11];
        array[offset + 12] = te[12];
        array[offset + 13] = te[13];
        array[offset + 14] = te[14];
        array[offset + 15] = te[15];
        return array;
    }
    fromArray(array, offset) {
        if (offset === undefined)
            offset = 0;
        for (var i = 0; i < 16; i++) {
            this.elements[i] = array[i + offset];
        }
        return this;
    }
    static flatten(v, array) {
        return v.toArray(array, 0);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Matrix4;



/***/ }),

/***/ "./src/math/quaternion.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vector3__ = __webpack_require__("./src/math/vector3.ts");

const v1 = new __WEBPACK_IMPORTED_MODULE_0__vector3__["a" /* Vector3 */];
let r = 0;
const EPS = 0.000001;
class Quaternion {
    constructor(x, y, z, w) {
        this.x = x || 0;
        this.y = x || 0;
        this.z = z || 0;
        this.w = w || 1;
    }
    set(x, y, z, w) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.w = w;
        return this;
    }
    copy(q) {
        this.x = q.x;
        this.y = q.y;
        this.z = q.z;
        this.w = q.w;
        return this;
    }
    clone() {
        return new Quaternion(this.x, this.y, this.z, this.w);
    }
    inverse() {
        this.x *= -1;
        this.y *= -1;
        this.z *= -1;
        return this;
    }
    length() {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
    }
    normalize() {
        let l = this.length();
        if (l === 0) {
            this.x = 0;
            this.y = 0;
            this.z = 0;
            this.w = 1;
        }
        else {
            l = 1 / l;
            this.x = this.x * l;
            this.y = this.y * l;
            this.z = this.z * l;
            this.w = this.w * l;
        }
        return this;
    }
    // assumes axis is normalized
    setFromAxisAngle(axis, angle) {
        const halfAngle = angle / 2;
        const s = Math.sin(halfAngle);
        this.x = axis.x * s;
        this.y = axis.y * s;
        this.z = axis.z * s;
        this.w = Math.cos(halfAngle);
        return this;
    }
    setFromUnitVectors(vFrom, vTo) {
        r = vFrom.dot(vTo) + 1;
        if (r < EPS) {
            r = 0;
            if (Math.abs(vFrom.x) > Math.abs(vFrom.z)) {
                v1.set(-vFrom.y, vFrom.x, 0);
            }
            else {
                v1.set(0, -vFrom.z, vFrom.y);
            }
        }
        else {
            v1.crossVectors(vFrom, vTo);
        }
        this.x = v1.x;
        this.y = v1.y;
        this.z = v1.z;
        this.w = r;
        return this.normalize();
    }
    setFromRotationMatrix(m) {
        // http://www.euclideanspace.com/maths/geometry/rotations/conversions/matrixToQuaternion/index.htm
        // assumes the upper 3x3 of m is a pure rotation matrix (i.e, unscaled)
        const te = m.elements;
        const m11 = te[0], m12 = te[4], m13 = te[8];
        const m21 = te[1], m22 = te[5], m23 = te[9];
        const m31 = te[2], m32 = te[6], m33 = te[10];
        const trace = m11 + m22 + m33;
        let s;
        if (trace > 0) {
            s = 0.5 / Math.sqrt(trace + 1.0);
            this.w = 0.25 / s;
            this.x = (m32 - m23) * s;
            this.y = (m13 - m31) * s;
            this.z = (m21 - m12) * s;
        }
        else if (m11 > m22 && m11 > m33) {
            s = 2.0 * Math.sqrt(1.0 + m11 - m22 - m33);
            this.w = (m32 - m23) / s;
            this.x = 0.25 * s;
            this.y = (m12 + m21) / s;
            this.z = (m13 + m31) / s;
        }
        else if (m22 > m33) {
            s = 2.0 * Math.sqrt(1.0 + m22 - m11 - m33);
            this.w = (m13 - m31) / s;
            this.x = (m12 + m21) / s;
            this.y = 0.25 * s;
            this.z = (m23 + m32) / s;
        }
        else {
            s = 2.0 * Math.sqrt(1.0 + m33 - m11 - m22);
            this.w = (m21 - m12) / s;
            this.x = (m13 + m31) / s;
            this.y = (m23 + m32) / s;
            this.z = 0.25 * s;
        }
        return this;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Quaternion;



/***/ }),

/***/ "./src/math/spherical.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vector3__ = __webpack_require__("./src/math/vector3.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__("./src/math/util.ts");


class Spherical {
    constructor(radius, polar, azim) {
        this.center = new __WEBPACK_IMPORTED_MODULE_0__vector3__["a" /* Vector3 */]();
        this.radius = radius || 1;
        this.polar = polar || 0;
        this.azim = azim || 0;
    }
    set(radius, polar, azim) {
        this.radius = radius;
        this.polar = polar;
        this.azim = azim;
        return this;
    }
    copy(s) {
        return this.set(s.radius, s.polar, s.azim);
    }
    clone() {
        return new Spherical(this.radius, this.polar, this.azim);
    }
    setFromVector(v) {
        this.radius = v.length();
        if (this.radius === 0) {
            this.polar = 0;
            this.azim = 0;
        }
        else {
            this.polar = Math.acos(__WEBPACK_IMPORTED_MODULE_1__util__["a" /* MathUtil */].clamp((v.y / this.radius), -1, 1));
            this.azim = Math.atan2(v.x, v.z);
        }
        return this;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Spherical;



/***/ }),

/***/ "./src/math/util.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const MathUtil = {
    DEG2RAD: Math.PI / 180,
    RAD2DEG: 180 / Math.PI,
    clamp: function (value, min, max) {
        return Math.max(min, Math.min(max, value));
    },
    // compute euclidian modulo of m % n
    // https://en.wikipedia.org/wiki/Modulo_operation
    euclideanModulo: function (n, m) {
        return ((n % m) + m) % m;
    },
    // Linear mapping from range <a1, a2> to range <b1, b2>
    mapLinear: function (x, a1, a2, b1, b2) {
        return b1 + (x - a1) * (b2 - b1) / (a2 - a1);
    },
    // https://en.wikipedia.org/wiki/Linear_interpolation
    lerp: function (x, y, t) {
        return (1 - t) * x + t * y;
    },
    // http://en.wikipedia.org/wiki/Smoothstep
    smoothstep: function (x, min, max) {
        if (x <= min)
            return 0;
        if (x >= max)
            return 1;
        x = (x - min) / (max - min);
        return x * x * (3 - 2 * x);
    },
    smootherstep: function (x, min, max) {
        if (x <= min)
            return 0;
        if (x >= max)
            return 1;
        x = (x - min) / (max - min);
        return x * x * x * (x * (x * 6 - 15) + 10);
    },
    // Random integer from <low, high> interval
    randInt: function (low, high) {
        return low + Math.floor(Math.random() * (high - low + 1));
    },
    // Random float from <low, high> interval
    randFloat: function (low, high) {
        return low + Math.random() * (high - low);
    },
    // Random float from <-range/2, range/2> interval
    randFloatSpread: function (range) {
        return range * (0.5 - Math.random());
    },
    degToRad: function (degrees) {
        return degrees * MathUtil.DEG2RAD;
    },
    radToDeg: function (radians) {
        return radians * MathUtil.RAD2DEG;
    },
    isPowerOfTwo: function (value) {
        return (value & (value - 1)) === 0 && value !== 0;
    },
    nearestPowerOfTwo: function (value) {
        return Math.pow(2, Math.round(Math.log(value) / Math.LN2));
    },
    nextPowerOfTwo: function (value) {
        value--;
        value |= value >> 1;
        value |= value >> 2;
        value |= value >> 4;
        value |= value >> 8;
        value |= value >> 16;
        value++;
        return value;
    }
};
/* harmony export (immutable) */ __webpack_exports__["a"] = MathUtil;



/***/ }),

/***/ "./src/math/uuid.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = generateUUID;
var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
var uuid = new Array(36);
var rnd = 0, r;
// http://www.broofa.com/Tools/Math.uuid.htm
function generateUUID() {
    for (var i = 0; i < 36; i++) {
        if (i === 8 || i === 13 || i === 18 || i === 23) {
            uuid[i] = '-';
        }
        else if (i === 14) {
            uuid[i] = '4';
        }
        else {
            if (rnd <= 0x02)
                rnd = 0x2000000 + (Math.random() * 0x1000000) | 0;
            r = rnd & 0xf;
            rnd = rnd >> 4;
            uuid[i] = chars[(i === 19) ? (r & 0x3) | 0x8 : r];
        }
    }
    return uuid.join('');
}


/***/ }),

/***/ "./src/math/vector2.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Vector2 {
    constructor(x, y) {
        this.x = x || 0;
        this.y = y || 0;
    }
    get width() { return this.x; }
    set width(value) { this.x = value; }
    get height() { return this.y; }
    set height(value) { this.y = value; }
    set(x, y) {
        this.x = x;
        this.y = y;
        return this;
    }
    setScalar(scalar) {
        this.x = scalar;
        this.y = scalar;
        return this;
    }
    clone() {
        return new Vector2(this.x, this.y);
    }
    copy(v) {
        this.x = v.x;
        this.y = v.y;
        return this;
    }
    equals(v) {
        return ((v.x === this.x) && (v.y === this.y));
    }
    add(v) {
        this.x += v.x;
        this.y += v.y;
        return this;
    }
    addScalar(s) {
        this.x += s;
        this.y += s;
        return this;
    }
    addVectors(a, b) {
        this.x = a.x + b.x;
        this.y = a.y + b.y;
        return this;
    }
    addScaledVector(v, s) {
        this.x += v.x * s;
        this.y += v.y * s;
        return this;
    }
    subScalar(s) {
        this.x -= s;
        this.y -= s;
        return this;
    }
    subVectors(a, b) {
        this.x = a.x - b.x;
        this.y = a.y - b.y;
        return this;
    }
    multiply(v) {
        this.x *= v.x;
        this.y *= v.y;
        return this;
    }
    multiplyScalar(scalar) {
        this.x *= scalar;
        this.y *= scalar;
        return this;
    }
    divide(v) {
        this.x /= v.x;
        this.y /= v.y;
        return this;
    }
    divideScalar(scalar) {
        return this.multiplyScalar(1 / scalar);
    }
    sub(v) {
        this.x -= v.x;
        this.y -= v.y;
        return this;
    }
    min(v) {
        this.x = Math.min(this.x, v.x);
        this.y = Math.min(this.y, v.y);
        return this;
    }
    max(v) {
        this.x = Math.max(this.x, v.x);
        this.y = Math.max(this.y, v.y);
        return this;
    }
    length() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
    lengthManhattan() {
        return Math.abs(this.x) + Math.abs(this.y);
    }
    normalize() {
        return this.divideScalar(this.length() || 1);
    }
    clamp(min, max) {
        // assumes min < max, componentwise
        this.x = Math.max(min.x, Math.min(max.x, this.x));
        this.y = Math.max(min.y, Math.min(max.y, this.y));
        return this;
    }
    clampScalar(minVal, maxVal) {
        tempMin.set(minVal, minVal);
        tempMax.set(maxVal, maxVal);
        return this.clamp(tempMin, tempMax);
    }
    clampLength(min, max) {
        var length = this.length();
        return this.divideScalar(length || 1).multiplyScalar(Math.max(min, Math.min(max, length)));
    }
    rotate(radians, anchor) {
        anchor = anchor || new Vector2();
        const v = anchor.sub(this).multiplyScalar(-1);
        const x = v.x;
        const y = v.y;
        const c = Math.cos(radians);
        const s = Math.sin(radians);
        this.x = x * c - y * s;
        this.y = x * s + y * c;
        return this;
    }
    floor() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this;
    }
    ceil() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this;
    }
    round() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this;
    }
    roundToZero() {
        this.x = (this.x < 0) ? Math.ceil(this.x) : Math.floor(this.x);
        this.y = (this.y < 0) ? Math.ceil(this.y) : Math.floor(this.y);
        return this;
    }
    negate() {
        this.x = -this.x;
        this.y = -this.y;
        return this;
    }
    dot(v) {
        return this.x * v.x + this.y * v.y;
    }
    lengthSq() {
        return this.x * this.x + this.y * this.y;
    }
    angle() {
        // computes the angle in radians with respect to the positive x-axis
        var angle = Math.atan2(this.y, this.x);
        if (angle < 0)
            angle += 2 * Math.PI;
        return angle;
    }
    distanceTo(v) {
        return Math.sqrt(this.distanceToSquared(v));
    }
    distanceToSquared(v) {
        var dx = this.x - v.x, dy = this.y - v.y;
        return dx * dx + dy * dy;
    }
    distanceToManhattan(v) {
        return Math.abs(this.x - v.x) + Math.abs(this.y - v.y);
    }
    setLength(length) {
        return this.normalize().multiplyScalar(length);
    }
    lerp(v, alpha) {
        this.x += (v.x - this.x) * alpha;
        this.y += (v.y - this.y) * alpha;
        return this;
    }
    lerpVectors(v1, v2, alpha) {
        return this.subVectors(v2, v1).multiplyScalar(alpha).add(v1);
    }
    rotateAround(center, angle) {
        var c = Math.cos(angle), s = Math.sin(angle);
        var x = this.x - center.x;
        var y = this.y - center.y;
        this.x = x * c - y * s + center.x;
        this.y = x * s + y * c + center.y;
        return this;
    }
    fromArray(array, offset) {
        if (offset === undefined)
            offset = 0;
        this.x = array[offset];
        this.y = array[offset + 1];
        return this;
    }
    toArray(array, offset) {
        if (array === undefined)
            array = [];
        if (offset === undefined)
            offset = 0;
        array[offset] = this.x;
        array[offset + 1] = this.y;
        return array;
    }
    static flatten(v, array) {
        return v.toArray(array, 0);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Vector2;

const tempMin = new Vector2();
const tempMax = new Vector2();


/***/ }),

/***/ "./src/math/vector3.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Vector3 {
    constructor(x, y, z) {
        this.buffer = new Float32Array(3);
        this.x = x || 0;
        this.y = y || 0;
        this.z = z || 0;
    }
    set(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
        return this;
    }
    copy(v) {
        this.x = v.x;
        this.y = v.y;
        this.z = v.z;
        return this;
    }
    equals(v) {
        return ((v.x === this.x) && (v.y === this.y)) && (v.z === this.z);
    }
    clone() {
        return new Vector3(this.x, this.y, this.z);
    }
    add(v) {
        this.x += v.x;
        this.y += v.y;
        this.z += v.z;
        return this;
    }
    sub(v) {
        this.x -= v.x;
        this.y -= v.y;
        this.z -= v.z;
        return this;
    }
    mag() {
        return this.x * this.x + this.y * this.y + this.z * this.z;
    }
    length() {
        return Math.sqrt(this.mag());
    }
    multiply(v) {
        this.x *= v.x;
        this.y *= v.y;
        this.z *= v.z;
        return this;
    }
    multiplyScalar(scalar) {
        this.x *= scalar;
        this.y *= scalar;
        this.z *= scalar;
        return this;
    }
    normalize() {
        const inv_length = 1.0 / this.length();
        return this.multiplyScalar(inv_length);
    }
    lengthManhattan() {
        return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
    }
    min(v) {
        this.x = Math.min(this.x, v.x);
        this.y = Math.min(this.y, v.y);
        this.z = Math.min(this.z, v.z);
        return this;
    }
    max(v) {
        this.x = Math.max(this.x, v.x);
        this.y = Math.max(this.y, v.y);
        this.z = Math.max(this.z, v.z);
        return this;
    }
    clamp(min, max) {
        this.x = Math.max(min.x, Math.min(max.x, this.x));
        this.y = Math.max(min.y, Math.min(max.y, this.y));
        this.z = Math.max(min.z, Math.min(max.z, this.z));
        return this;
    }
    dot(v) {
        return this.x * v.x + this.y * v.y + this.z * v.z;
    }
    crossVectors(a, b) {
        const ax = a.x, ay = a.y, az = a.z;
        const bx = b.x, by = b.y, bz = b.z;
        this.x = ay * bz - az * by;
        this.y = az * bx - ax * bz;
        this.z = ax * by - ay * bx;
        return this;
    }
    cross(v) {
        return this.crossVectors(this, v);
    }
    setFromQuaternion(q) {
        const x = this.x, y = this.y, z = this.z;
        const qx = q.x, qy = q.y, qz = q.z, qw = q.w;
        // calculate quat * vector
        const ix = qw * x + qy * z - qz * y;
        const iy = qw * y + qz * x - qx * z;
        const iz = qw * z + qx * y - qy * x;
        const iw = -qx * x - qy * y - qz * z;
        // calculate result * inverse quat
        this.x = ix * qw + iw * -qx + iy * -qz - iz * -qy;
        this.y = iy * qw + iw * -qy + iz * -qx - ix * -qz;
        this.z = iz * qw + iw * -qz + ix * -qy - iy * -qx;
        return this;
    }
    setFromSpherical(s) {
        const sinRadius = Math.sin(s.polar) * s.radius;
        this.x = sinRadius * Math.sin(s.azim);
        this.y = Math.cos(s.polar) * s.radius;
        this.z = sinRadius * Math.cos(s.azim);
        return this;
    }
    applyMatrix4(m) {
        const x = this.x;
        const y = this.y;
        const z = this.z;
        const e = m.elements;
        const w = 1 / (e[3] * x + e[7] * y + e[11] * z + e[15]);
        this.x = (e[0] * x + e[4] * y + e[8] * z + e[12]) * w;
        this.y = (e[1] * x + e[5] * y + e[9] * z + e[13]) * w;
        this.z = (e[2] * x + e[6] * y + e[10] * z + e[14]) * w;
        return this;
    }
    getBuffer() {
        if (this.buffer === undefined) {
            this.buffer = new Float32Array([this.x, this.y, this.z]);
        }
        else {
            this.buffer[0] = this.x;
            this.buffer[1] = this.y;
            this.buffer[2] = this.z;
        }
        return this.buffer;
    }
    fromArray(array, offset) {
        if (offset === undefined)
            offset = 0;
        this.x = array[offset];
        this.y = array[offset + 1];
        this.z = array[offset + 2];
        return this;
    }
    toArray(array, offset) {
        if (array === undefined)
            array = [];
        if (offset === undefined)
            offset = 0;
        array[offset] = this.x;
        array[offset + 1] = this.y;
        array[offset + 2] = this.z;
        return array;
    }
    static flatten(v, array) {
        return v.toArray(array, 0);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Vector3;



/***/ }),

/***/ "./src/math/vector4.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Vector4 {
    constructor(x, y, z, w) {
        this.isVector4 = true;
        this.x = x || 0;
        this.y = y || 0;
        this.z = z || 0;
        this.w = (w !== undefined) ? w : 1;
    }
    clone() {
        return new Vector4(this.x, this.y, this.z, this.w);
    }
    copy(v) {
        this.x = v.x;
        this.y = v.y;
        this.z = v.z;
        this.w = (v.w !== undefined) ? v.w : 1;
        return this;
    }
    equals(v) {
        return ((v.x === this.x) && (v.y === this.y) && (v.z === this.z) && (v.w === this.w));
    }
    set(x, y, z, w) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.w = w;
        return this;
    }
    setScalar(scalar) {
        this.x = scalar;
        this.y = scalar;
        this.z = scalar;
        this.w = scalar;
        return this;
    }
    setX(x) {
        this.x = x;
        return this;
    }
    setY(y) {
        this.y = y;
        return this;
    }
    setZ(z) {
        this.z = z;
        return this;
    }
    setW(w) {
        this.w = w;
        return this;
    }
    setComponent(index, value) {
        switch (index) {
            case 0:
                this.x = value;
                break;
            case 1:
                this.y = value;
                break;
            case 2:
                this.z = value;
                break;
            case 3:
                this.w = value;
                break;
            default: throw new Error('index is out of range: ' + index);
        }
        return this;
    }
    getComponent(index) {
        switch (index) {
            case 0: return this.x;
            case 1: return this.y;
            case 2: return this.z;
            case 3: return this.w;
            default: throw new Error('index is out of range: ' + index);
        }
    }
    setAxisAngleFromQuaternion(q) {
        // http://www.euclideanspace.com/maths/geometry/rotations/conversions/quaternionToAngle/index.htm
        // q is assumed to be normalized
        this.w = 2 * Math.acos(q.w);
        var s = Math.sqrt(1 - q.w * q.w);
        if (s < 0.0001) {
            this.x = 1;
            this.y = 0;
            this.z = 0;
        }
        else {
            this.x = q.x / s;
            this.y = q.y / s;
            this.z = q.z / s;
        }
        return this;
    }
    add(v) {
        this.x += v.x;
        this.y += v.y;
        this.z += v.z;
        this.w += v.w;
        return this;
    }
    addScalar(s) {
        this.x += s;
        this.y += s;
        this.z += s;
        this.w += s;
        return this;
    }
    addVectors(a, b) {
        this.x = a.x + b.x;
        this.y = a.y + b.y;
        this.z = a.z + b.z;
        this.w = a.w + b.w;
        return this;
    }
    addScaledVector(v, s) {
        this.x += v.x * s;
        this.y += v.y * s;
        this.z += v.z * s;
        this.w += v.w * s;
        return this;
    }
    sub(v) {
        this.x -= v.x;
        this.y -= v.y;
        this.z -= v.z;
        this.w -= v.w;
        return this;
    }
    subScalar(s) {
        this.x -= s;
        this.y -= s;
        this.z -= s;
        this.w -= s;
        return this;
    }
    subVectors(a, b) {
        this.x = a.x - b.x;
        this.y = a.y - b.y;
        this.z = a.z - b.z;
        this.w = a.w - b.w;
        return this;
    }
    multiplyScalar(scalar) {
        this.x *= scalar;
        this.y *= scalar;
        this.z *= scalar;
        this.w *= scalar;
        return this;
    }
    applyMatrix4(m) {
        var x = this.x, y = this.y, z = this.z, w = this.w;
        var e = m.elements;
        this.x = e[0] * x + e[4] * y + e[8] * z + e[12] * w;
        this.y = e[1] * x + e[5] * y + e[9] * z + e[13] * w;
        this.z = e[2] * x + e[6] * y + e[10] * z + e[14] * w;
        this.w = e[3] * x + e[7] * y + e[11] * z + e[15] * w;
        return this;
    }
    divideScalar(scalar) {
        return this.multiplyScalar(1 / scalar);
    }
    min(v) {
        this.x = Math.min(this.x, v.x);
        this.y = Math.min(this.y, v.y);
        this.z = Math.min(this.z, v.z);
        this.w = Math.min(this.w, v.w);
        return this;
    }
    max(v) {
        this.x = Math.max(this.x, v.x);
        this.y = Math.max(this.y, v.y);
        this.z = Math.max(this.z, v.z);
        this.w = Math.max(this.w, v.w);
        return this;
    }
    clamp(min, max) {
        // assumes min < max, componentwise
        this.x = Math.max(min.x, Math.min(max.x, this.x));
        this.y = Math.max(min.y, Math.min(max.y, this.y));
        this.z = Math.max(min.z, Math.min(max.z, this.z));
        this.w = Math.max(min.w, Math.min(max.w, this.w));
        return this;
    }
    clampScalar(minVal, maxVal) {
        tempMin.set(minVal, minVal, minVal, minVal);
        tempMax.set(maxVal, maxVal, maxVal, maxVal);
        return this.clamp(tempMin, tempMax);
    }
    ;
    clampLength(min, max) {
        var length = this.length();
        return this.divideScalar(length || 1).multiplyScalar(Math.max(min, Math.min(max, length)));
    }
    floor() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        this.z = Math.floor(this.z);
        this.w = Math.floor(this.w);
        return this;
    }
    ceil() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        this.z = Math.ceil(this.z);
        this.w = Math.ceil(this.w);
        return this;
    }
    round() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        this.z = Math.round(this.z);
        this.w = Math.round(this.w);
        return this;
    }
    roundToZero() {
        this.x = (this.x < 0) ? Math.ceil(this.x) : Math.floor(this.x);
        this.y = (this.y < 0) ? Math.ceil(this.y) : Math.floor(this.y);
        this.z = (this.z < 0) ? Math.ceil(this.z) : Math.floor(this.z);
        this.w = (this.w < 0) ? Math.ceil(this.w) : Math.floor(this.w);
        return this;
    }
    negate() {
        this.x = -this.x;
        this.y = -this.y;
        this.z = -this.z;
        this.w = -this.w;
        return this;
    }
    dot(v) {
        return this.x * v.x + this.y * v.y + this.z * v.z + this.w * v.w;
    }
    lengthSq() {
        return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
    }
    length() {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
    }
    lengthManhattan() {
        return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w);
    }
    normalize() {
        return this.divideScalar(this.length() || 1);
    }
    setLength(length) {
        return this.normalize().multiplyScalar(length);
    }
    lerp(v, alpha) {
        this.x += (v.x - this.x) * alpha;
        this.y += (v.y - this.y) * alpha;
        this.z += (v.z - this.z) * alpha;
        this.w += (v.w - this.w) * alpha;
        return this;
    }
    lerpVectors(v1, v2, alpha) {
        return this.subVectors(v2, v1).multiplyScalar(alpha).add(v1);
    }
    setAxisAngleFromRotationMatrix(m) {
        // http://www.euclideanspace.com/maths/geometry/rotations/conversions/matrixToAngle/index.htm
        // assumes the upper 3x3 of m is a pure rotation matrix (i.e, unscaled)
        var angle, x, y, z, // variables for result
        epsilon = 0.01, // margin to allow for rounding errors
        epsilon2 = 0.1, // margin to distinguish between 0 and 180 degrees
        te = m.elements, m11 = te[0], m12 = te[4], m13 = te[8], m21 = te[1], m22 = te[5], m23 = te[9], m31 = te[2], m32 = te[6], m33 = te[10];
        if ((Math.abs(m12 - m21) < epsilon) &&
            (Math.abs(m13 - m31) < epsilon) &&
            (Math.abs(m23 - m32) < epsilon)) {
            // singularity found
            // first check for identity matrix which must have +1 for all terms
            // in leading diagonal and zero in other terms
            if ((Math.abs(m12 + m21) < epsilon2) &&
                (Math.abs(m13 + m31) < epsilon2) &&
                (Math.abs(m23 + m32) < epsilon2) &&
                (Math.abs(m11 + m22 + m33 - 3) < epsilon2)) {
                // this singularity is identity matrix so angle = 0
                this.set(1, 0, 0, 0);
                return this; // zero angle, arbitrary axis
            }
            // otherwise this singularity is angle = 180
            angle = Math.PI;
            var xx = (m11 + 1) / 2;
            var yy = (m22 + 1) / 2;
            var zz = (m33 + 1) / 2;
            var xy = (m12 + m21) / 4;
            var xz = (m13 + m31) / 4;
            var yz = (m23 + m32) / 4;
            if ((xx > yy) && (xx > zz)) {
                // m11 is the largest diagonal term
                if (xx < epsilon) {
                    x = 0;
                    y = 0.707106781;
                    z = 0.707106781;
                }
                else {
                    x = Math.sqrt(xx);
                    y = xy / x;
                    z = xz / x;
                }
            }
            else if (yy > zz) {
                // m22 is the largest diagonal term
                if (yy < epsilon) {
                    x = 0.707106781;
                    y = 0;
                    z = 0.707106781;
                }
                else {
                    y = Math.sqrt(yy);
                    x = xy / y;
                    z = yz / y;
                }
            }
            else {
                // m33 is the largest diagonal term so base result on this
                if (zz < epsilon) {
                    x = 0.707106781;
                    y = 0.707106781;
                    z = 0;
                }
                else {
                    z = Math.sqrt(zz);
                    x = xz / z;
                    y = yz / z;
                }
            }
            this.set(x, y, z, angle);
            return this; // return 180 deg rotation
        }
        // as we have reached here there are no singularities so we can handle normally
        var s = Math.sqrt((m32 - m23) * (m32 - m23) +
            (m13 - m31) * (m13 - m31) +
            (m21 - m12) * (m21 - m12)); // used to normalize
        if (Math.abs(s) < 0.001)
            s = 1;
        // prevent divide by zero, should not happen if matrix is orthogonal and should be
        // caught by singularity test above, but I've left it in just in case
        this.x = (m32 - m23) / s;
        this.y = (m13 - m31) / s;
        this.z = (m21 - m12) / s;
        this.w = Math.acos((m11 + m22 + m33 - 1) / 2);
        return this;
    }
    fromArray(array, offset) {
        if (offset === undefined)
            offset = 0;
        this.x = array[offset];
        this.y = array[offset + 1];
        this.z = array[offset + 2];
        this.w = array[offset + 3];
        return this;
    }
    toArray(array, offset) {
        if (array === undefined)
            array = [];
        if (offset === undefined)
            offset = 0;
        array[offset] = this.x;
        array[offset + 1] = this.y;
        array[offset + 2] = this.z;
        array[offset + 3] = this.w;
        return array;
    }
    static flatten(v, array) {
        return v.toArray(array, 0);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Vector4;

const tempMin = new Vector4();
const tempMax = new Vector4();


/***/ }),

/***/ "./src/object/mesh.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_render_object__ = __webpack_require__("./src/core/render-object.ts");

class Mesh extends __WEBPACK_IMPORTED_MODULE_0__core_render_object__["a" /* RenderObject */] {
    constructor(geometry, material) {
        super(geometry, material);
        this.checkMaterialisValid(material);
    }
    checkMaterialisValid(material) {
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Mesh;



/***/ }),

/***/ "./src/scene/scene-node.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math_index__ = __webpack_require__("./src/math/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math_euler__ = __webpack_require__("./src/math/euler.ts");


/**
 * a scene node in a scene tree
 * organize the scene hierachy
 *
 * @export
 * @class SceneNode
 */
class SceneNode {
    constructor() {
        this.scene = null;
        this.parent = null;
        this.children = [];
        this.position = new __WEBPACK_IMPORTED_MODULE_0__math_index__["d" /* Vector3 */](0, 0, 0);
        this.rotation = new __WEBPACK_IMPORTED_MODULE_1__math_euler__["a" /* Euler */]();
        this.quaternion = new __WEBPACK_IMPORTED_MODULE_0__math_index__["c" /* Quaternion */]();
        this.scale = new __WEBPACK_IMPORTED_MODULE_0__math_index__["d" /* Vector3 */](1, 1, 1);
        this.matrix = new __WEBPACK_IMPORTED_MODULE_0__math_index__["b" /* Matrix4 */]();
        this.worldMatrix = new __WEBPACK_IMPORTED_MODULE_0__math_index__["b" /* Matrix4 */]();
        this.isTransformDirty = true;
    }
    updateLocalMatrix() {
        this.matrix.compose(this.position, this.quaternion, this.scale);
    }
    addChild(node) {
        if (node === this) {
            throw 'cant add self to self';
        }
        node.parent = this;
        this.children.push(node);
    }
    removeChild(node) {
        let index = this.children.indexOf(node);
        if (index !== -1) {
            node.parent = null;
            this.children.splice(index, 1);
        }
    }
    traverse(fn) {
        fn(this);
        for (let i = 0; i < this.children.length; i++) {
            fn(this.children[i]);
        }
    }
    updateWorldMatrix(force) {
        if (this.isTransformDirty || force) {
            if (this.parent === null) {
                this.worldMatrix.copy(this.matrix);
            }
            else {
                this.worldMatrix.multiplyMatrices(this.parent.worldMatrix, this.matrix);
            }
            this.isTransformDirty = false;
            force = true;
        }
        var children = this.children;
        for (var i = 0, l = children.length; i < l; i++) {
            children[i].updateWorldMatrix(force);
        }
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = SceneNode;



/***/ }),

/***/ "./src/util/file-io.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export downloadStringAsFile */
/* unused harmony export openFile */
/* harmony export (immutable) */ __webpack_exports__["a"] = loadStringFromFile;
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function downloadStringAsFile(content) {
}
function getStringContentFromFile(file) {
    return __awaiter(this, void 0, void 0, function* () {
        const reader = new FileReader();
        return new Promise(function (resolve, _) {
            reader.onload = function (e) {
                const str = reader.result;
                resolve(str);
            };
            reader.readAsText(file);
        });
    });
}
function openFile() {
    return new Promise((resolve) => {
        const input = document.createElement('input');
        input.setAttribute('type', 'file');
        const func = (e) => {
            resolve(e.target.files[0]);
        };
        input.addEventListener('change', func);
        input.click();
    });
}
function loadStringFromFile() {
    return __awaiter(this, void 0, void 0, function* () {
        const file = yield openFile();
        const str = yield getStringContentFromFile(file);
        return str;
    });
}


/***/ }),

/***/ "./src/util/normal-generation.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = generateNormalFromPostion;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math_index__ = __webpack_require__("./src/math/index.ts");

const v1 = new __WEBPACK_IMPORTED_MODULE_0__math_index__["d" /* Vector3 */]();
const v2 = new __WEBPACK_IMPORTED_MODULE_0__math_index__["d" /* Vector3 */]();
const v3 = new __WEBPACK_IMPORTED_MODULE_0__math_index__["d" /* Vector3 */]();
const v12 = new __WEBPACK_IMPORTED_MODULE_0__math_index__["d" /* Vector3 */]();
const v13 = new __WEBPACK_IMPORTED_MODULE_0__math_index__["d" /* Vector3 */]();
const n = new __WEBPACK_IMPORTED_MODULE_0__math_index__["d" /* Vector3 */]();
function generateNormalFromPostion(vertices) {
    const vertices_length = vertices.length;
    const step = 9;
    const normals = new Float32Array(vertices_length);
    for (let i = 0; i < vertices_length; i += step) {
        v1.set(vertices[i + 0], vertices[i + 1], vertices[i + 2]);
        v2.set(vertices[i + 3], vertices[i + 4], vertices[i + 5]);
        v3.set(vertices[i + 6], vertices[i + 7], vertices[i + 8]);
        v12.copy(v2).sub(v1);
        v13.copy(v3).sub(v1);
        n.crossVectors(v13, v12);
        n.normalize();
        normals[i + 0] = n.x;
        normals[i + 1] = n.y;
        normals[i + 2] = n.z;
        normals[i + 3] = n.x;
        normals[i + 4] = n.y;
        normals[i + 5] = n.z;
        normals[i + 6] = n.x;
        normals[i + 7] = n.y;
        normals[i + 8] = n.z;
    }
    return normals;
}


/***/ }),

/***/ "./src/webgl/attribute-buffer-manager.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math_uuid__ = __webpack_require__("./src/math/uuid.ts");

class GLAttributeBufferDataManager {
    constructor(renderer) {
        this.buffers = {};
        this.renderer = renderer;
    }
    getGLBuffer(storeId) {
        return this, this.buffers[storeId];
    }
    createBuffer(data, useForIndex) {
        const gl = this.renderer.gl;
        const buffer = gl.createBuffer();
        if (buffer === null) {
            throw 'webgl buffer create fail';
        }
        if (useForIndex) {
            gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, buffer);
            gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, data, gl.STATIC_DRAW);
        }
        else {
            gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
            gl.bufferData(gl.ARRAY_BUFFER, data, gl.STATIC_DRAW);
        }
        const id = Object(__WEBPACK_IMPORTED_MODULE_0__math_uuid__["a" /* generateUUID */])();
        this.buffers[id] = buffer;
        return id;
    }
    disposeBuffer(storeId) {
        const bufferToDispose = this.buffers[storeId];
        if (!bufferToDispose) {
            throw 'cant find buffer to dispose';
        }
        const gl = this.renderer.gl;
        gl.deleteBuffer(bufferToDispose);
    }
    dispose() {
        const gl = this.renderer.gl;
        Object.keys(this.buffers).forEach(key => {
            const buffer = this.buffers[key];
            gl.deleteBuffer(buffer);
        });
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = GLAttributeBufferDataManager;



/***/ }),

/***/ "./src/webgl/attribute.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class GLAttribute {
    constructor(program, descriptor) {
        this.count = 0;
        this.stride = 1;
        this.descriptor = descriptor;
        this.program = program;
        this.gl = program.getRenderer().gl;
        const prog = this.program.getProgram();
        this.location = this.gl.getAttribLocation(prog, descriptor.name);
        this.type = descriptor.type;
    }
    useBuffer(buffer) {
        const gl = this.gl;
        gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
        gl.vertexAttribPointer(this.location, this.descriptor.stride, gl.FLOAT, false, 0, 0);
        gl.enableVertexAttribArray(this.location);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = GLAttribute;



/***/ }),

/***/ "./src/webgl/const.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TextureFilter; });
/* unused harmony export TextureWrap */
/* unused harmony export FrontFaceDirectionCW */
/* unused harmony export FrontFaceDirectionCCW */
/* unused harmony export BasicShadowMap */
/* unused harmony export PCFShadowMap */
/* unused harmony export PCFSoftShadowMap */
/* unused harmony export FrontSide */
/* unused harmony export BackSide */
/* unused harmony export DoubleSide */
/* unused harmony export FlatShading */
/* unused harmony export SmoothShading */
/* unused harmony export NoColors */
/* unused harmony export FaceColors */
/* unused harmony export VertexColors */
/* unused harmony export AddEquation */
/* unused harmony export SubtractEquation */
/* unused harmony export ReverseSubtractEquation */
/* unused harmony export MinEquation */
/* unused harmony export MaxEquation */
/* unused harmony export ZeroFactor */
/* unused harmony export OneFactor */
/* unused harmony export SrcColorFactor */
/* unused harmony export OneMinusSrcColorFactor */
/* unused harmony export SrcAlphaFactor */
/* unused harmony export OneMinusSrcAlphaFactor */
/* unused harmony export DstAlphaFactor */
/* unused harmony export OneMinusDstAlphaFactor */
/* unused harmony export DstColorFactor */
/* unused harmony export OneMinusDstColorFactor */
/* unused harmony export SrcAlphaSaturateFactor */
/* unused harmony export MultiplyOperation */
/* unused harmony export MixOperation */
/* unused harmony export AddOperation */
/* unused harmony export NoToneMapping */
/* unused harmony export LinearToneMapping */
/* unused harmony export ReinhardToneMapping */
/* unused harmony export Uncharted2ToneMapping */
/* unused harmony export CineonToneMapping */
/* unused harmony export UVMapping */
/* unused harmony export CubeReflectionMapping */
/* unused harmony export CubeRefractionMapping */
/* unused harmony export EquirectangularReflectionMapping */
/* unused harmony export EquirectangularRefractionMapping */
/* unused harmony export SphericalReflectionMapping */
/* unused harmony export CubeUVReflectionMapping */
/* unused harmony export CubeUVRefractionMapping */
/* unused harmony export RepeatWrapping */
/* unused harmony export ClampToEdgeWrapping */
/* unused harmony export MirroredRepeatWrapping */
/* unused harmony export NearestFilter */
/* unused harmony export NearestMipMapNearestFilter */
/* unused harmony export NearestMipMapLinearFilter */
/* unused harmony export LinearFilter */
/* unused harmony export LinearMipMapNearestFilter */
/* unused harmony export LinearMipMapLinearFilter */
/* unused harmony export UnsignedByteType */
/* unused harmony export ByteType */
/* unused harmony export ShortType */
/* unused harmony export UnsignedShortType */
/* unused harmony export IntType */
/* unused harmony export UnsignedIntType */
/* unused harmony export FloatType */
/* unused harmony export HalfFloatType */
/* unused harmony export UnsignedShort4444Type */
/* unused harmony export UnsignedShort5551Type */
/* unused harmony export UnsignedShort565Type */
/* unused harmony export UnsignedInt248Type */
/* unused harmony export AlphaFormat */
/* unused harmony export RGBFormat */
/* unused harmony export RGBAFormat */
/* unused harmony export LuminanceFormat */
/* unused harmony export LuminanceAlphaFormat */
/* unused harmony export RGBEFormat */
/* unused harmony export DepthFormat */
/* unused harmony export DepthStencilFormat */
/* unused harmony export RGB_S3TC_DXT1_Format */
/* unused harmony export RGBA_S3TC_DXT1_Format */
/* unused harmony export RGBA_S3TC_DXT3_Format */
/* unused harmony export RGBA_S3TC_DXT5_Format */
/* unused harmony export RGB_PVRTC_4BPPV1_Format */
/* unused harmony export RGB_PVRTC_2BPPV1_Format */
/* unused harmony export RGBA_PVRTC_4BPPV1_Format */
/* unused harmony export RGBA_PVRTC_2BPPV1_Format */
/* unused harmony export RGB_ETC1_Format */
/* unused harmony export LoopOnce */
/* unused harmony export LoopRepeat */
/* unused harmony export LoopPingPong */
/* unused harmony export InterpolateDiscrete */
/* unused harmony export InterpolateLinear */
/* unused harmony export InterpolateSmooth */
/* unused harmony export ZeroCurvatureEnding */
/* unused harmony export ZeroSlopeEnding */
/* unused harmony export WrapAroundEnding */
/* unused harmony export TrianglesDrawMode */
/* unused harmony export TriangleStripDrawMode */
/* unused harmony export TriangleFanDrawMode */
/* unused harmony export LinearEncoding */
/* unused harmony export sRGBEncoding */
/* unused harmony export GammaEncoding */
/* unused harmony export RGBEEncoding */
/* unused harmony export LogLuvEncoding */
/* unused harmony export RGBM7Encoding */
/* unused harmony export RGBM16Encoding */
/* unused harmony export RGBDEncoding */
/* unused harmony export BasicDepthPacking */
/* unused harmony export RGBADepthPacking */
var TextureFilter;
(function (TextureFilter) {
    TextureFilter[TextureFilter["linear"] = 0] = "linear";
    TextureFilter[TextureFilter["nearest"] = 1] = "nearest";
    TextureFilter[TextureFilter["NEAREST_MIPMAP_NEAREST"] = 2] = "NEAREST_MIPMAP_NEAREST";
    TextureFilter[TextureFilter["LINEAR_MIPMAP_NEAREST"] = 3] = "LINEAR_MIPMAP_NEAREST";
    TextureFilter[TextureFilter["NEAREST_MIPMAP_LINEAR"] = 4] = "NEAREST_MIPMAP_LINEAR";
    TextureFilter[TextureFilter["LINEAR_MIPMAP_LINEAR"] = 5] = "LINEAR_MIPMAP_LINEAR";
})(TextureFilter || (TextureFilter = {}));
var TextureWrap;
(function (TextureWrap) {
    TextureWrap[TextureWrap["repeat"] = 0] = "repeat";
    TextureWrap[TextureWrap["clampToEdge"] = 1] = "clampToEdge";
    TextureWrap[TextureWrap["mirroredRepeat"] = 2] = "mirroredRepeat";
})(TextureWrap || (TextureWrap = {}));
var FrontFaceDirectionCW = 0;
var FrontFaceDirectionCCW = 1;
var BasicShadowMap = 0;
var PCFShadowMap = 1;
var PCFSoftShadowMap = 2;
var FrontSide = 0;
var BackSide = 1;
var DoubleSide = 2;
var FlatShading = 1;
var SmoothShading = 2;
var NoColors = 0;
var FaceColors = 1;
var VertexColors = 2;
var AddEquation = 100;
var SubtractEquation = 101;
var ReverseSubtractEquation = 102;
var MinEquation = 103;
var MaxEquation = 104;
var ZeroFactor = 200;
var OneFactor = 201;
var SrcColorFactor = 202;
var OneMinusSrcColorFactor = 203;
var SrcAlphaFactor = 204;
var OneMinusSrcAlphaFactor = 205;
var DstAlphaFactor = 206;
var OneMinusDstAlphaFactor = 207;
var DstColorFactor = 208;
var OneMinusDstColorFactor = 209;
var SrcAlphaSaturateFactor = 210;
var MultiplyOperation = 0;
var MixOperation = 1;
var AddOperation = 2;
var NoToneMapping = 0;
var LinearToneMapping = 1;
var ReinhardToneMapping = 2;
var Uncharted2ToneMapping = 3;
var CineonToneMapping = 4;
var UVMapping = 300;
var CubeReflectionMapping = 301;
var CubeRefractionMapping = 302;
var EquirectangularReflectionMapping = 303;
var EquirectangularRefractionMapping = 304;
var SphericalReflectionMapping = 305;
var CubeUVReflectionMapping = 306;
var CubeUVRefractionMapping = 307;
var RepeatWrapping = 1000;
var ClampToEdgeWrapping = 1001;
var MirroredRepeatWrapping = 1002;
var NearestFilter = 1003;
var NearestMipMapNearestFilter = 1004;
var NearestMipMapLinearFilter = 1005;
var LinearFilter = 1006;
var LinearMipMapNearestFilter = 1007;
var LinearMipMapLinearFilter = 1008;
var UnsignedByteType = 1009;
var ByteType = 1010;
var ShortType = 1011;
var UnsignedShortType = 1012;
var IntType = 1013;
var UnsignedIntType = 1014;
var FloatType = 1015;
var HalfFloatType = 1016;
var UnsignedShort4444Type = 1017;
var UnsignedShort5551Type = 1018;
var UnsignedShort565Type = 1019;
var UnsignedInt248Type = 1020;
var AlphaFormat = 1021;
var RGBFormat = 1022;
var RGBAFormat = 1023;
var LuminanceFormat = 1024;
var LuminanceAlphaFormat = 1025;
var RGBEFormat = RGBAFormat;
var DepthFormat = 1026;
var DepthStencilFormat = 1027;
var RGB_S3TC_DXT1_Format = 2001;
var RGBA_S3TC_DXT1_Format = 2002;
var RGBA_S3TC_DXT3_Format = 2003;
var RGBA_S3TC_DXT5_Format = 2004;
var RGB_PVRTC_4BPPV1_Format = 2100;
var RGB_PVRTC_2BPPV1_Format = 2101;
var RGBA_PVRTC_4BPPV1_Format = 2102;
var RGBA_PVRTC_2BPPV1_Format = 2103;
var RGB_ETC1_Format = 2151;
var LoopOnce = 2200;
var LoopRepeat = 2201;
var LoopPingPong = 2202;
var InterpolateDiscrete = 2300;
var InterpolateLinear = 2301;
var InterpolateSmooth = 2302;
var ZeroCurvatureEnding = 2400;
var ZeroSlopeEnding = 2401;
var WrapAroundEnding = 2402;
var TrianglesDrawMode = 0;
var TriangleStripDrawMode = 1;
var TriangleFanDrawMode = 2;
var LinearEncoding = 3000;
var sRGBEncoding = 3001;
var GammaEncoding = 3007;
var RGBEEncoding = 3002;
var LogLuvEncoding = 3003;
var RGBM7Encoding = 3004;
var RGBM16Encoding = 3005;
var RGBDEncoding = 3006;
var BasicDepthPacking = 3200;
var RGBADepthPacking = 3201;


/***/ }),

/***/ "./src/webgl/gl-info.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// https://github.com/pissang/claygl/blob/master/src/core/GLInfo.js
const EXTENSION_LIST = [
    'OES_texture_float',
    'OES_texture_half_float',
    'OES_texture_float_linear',
    'OES_texture_half_float_linear',
    'OES_standard_derivatives',
    'OES_vertex_array_object',
    'OES_element_index_uint',
    'WEBGL_compressed_texture_s3tc',
    'WEBGL_depth_texture',
    'EXT_texture_filter_anisotropic',
    'EXT_shader_texture_lod',
    'WEBGL_draw_buffers',
    'EXT_frag_depth',
    'EXT_sRGB'
];
var PARAMETER_NAMES = [
    'MAX_TEXTURE_SIZE',
    'MAX_CUBE_MAP_TEXTURE_SIZE'
];
class GLInfo {
    constructor(renderer) {
        this.extensions = {};
        this.parameters = {};
        this.renderer = renderer;
    }
    createExtension(name) {
        const gl = this.renderer.gl;
        var ext = gl.getExtension(name);
        if (!ext) {
            ext = gl.getExtension('MOZ_' + name);
        }
        if (!ext) {
            ext = gl.getExtension('WEBKIT_' + name);
        }
        this.extensions[name] = ext;
    }
    getExtension(name) {
        if (!(name in this.extensions)) {
            this.createExtension(name);
        }
        return this.extensions[name];
    }
    ;
    getParameter(name) {
        return this.parameters[name];
    }
    ;
    createAllExtension() {
        for (var i = 0; i < EXTENSION_LIST.length; i++) {
            var extName = EXTENSION_LIST[i];
            this.createExtension(extName);
        }
        for (var i = 0; i < PARAMETER_NAMES.length; i++) {
            var name = PARAMETER_NAMES[i];
            this.parameters[name] = this.renderer.gl.getParameter(this.renderer.gl[name]);
        }
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = GLInfo;



/***/ }),

/***/ "./src/webgl/program-manager.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class GLProgramManager {
    constructor(renderer) {
        this.programs = {};
        this.renderer = renderer;
    }
    addNewProgram(program) {
        this.programs[program.id] = program;
    }
    getProgram(storeId) {
        return this.programs[storeId];
    }
    dispose() {
        Object.keys(this.programs).forEach(programKey => {
            const program = this.programs[programKey];
            program.dispose();
        });
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = GLProgramManager;



/***/ }),

/***/ "./src/webgl/program.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shader__ = __webpack_require__("./src/webgl/shader.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math_uuid__ = __webpack_require__("./src/math/uuid.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shader_util__ = __webpack_require__("./src/webgl/shader-util.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__uniform_uniform__ = __webpack_require__("./src/webgl/uniform/uniform.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__attribute__ = __webpack_require__("./src/webgl/attribute.ts");





class GLProgram {
    constructor(renderer, config) {
        this.program = null;
        this.attributes = {};
        this.attributeUsageMap = {};
        this.uniforms = {};
        this.drawFrom = 0;
        this.drawCount = 0;
        this.useIndexDraw = false;
        this.renderer = renderer;
        this.id = Object(__WEBPACK_IMPORTED_MODULE_1__math_uuid__["a" /* generateUUID */])();
        this.vertexShader = new __WEBPACK_IMPORTED_MODULE_0__shader__["a" /* GLShader */](this.renderer, __WEBPACK_IMPORTED_MODULE_0__shader__["b" /* ShaderType */].vertex);
        this.fragmentShader = new __WEBPACK_IMPORTED_MODULE_0__shader__["a" /* GLShader */](this.renderer, __WEBPACK_IMPORTED_MODULE_0__shader__["b" /* ShaderType */].fragment);
        this.compileShaders(config);
        this.createProgram(this.vertexShader, this.fragmentShader);
        this.createGLResource(config);
        this.config = config;
        renderer.programManager.addNewProgram(this);
        config.attributes.forEach(att => {
            if (att.usage !== undefined) {
                this.attributeUsageMap[att.usage] = this.attributes[att.name];
            }
        });
    }
    getRenderer() { return this.renderer; }
    ;
    getProgram() {
        if (this.program === null) {
            throw 'program is broken';
        }
        return this.program;
    }
    ;
    compileShaders(conf) {
        if (conf.autoInjectHeader) {
            conf.vertexShaderString = Object(__WEBPACK_IMPORTED_MODULE_2__shader_util__["b" /* injectVertexShaderHeaders */])(conf, conf.vertexShaderString);
            conf.fragmentShaderString = Object(__WEBPACK_IMPORTED_MODULE_2__shader_util__["a" /* injectFragmentShaderHeaders */])(conf, conf.fragmentShaderString);
            console.log(conf.vertexShaderString);
            console.log(conf.fragmentShaderString);
        }
        this.vertexShader.compileShader(conf.vertexShaderString, __WEBPACK_IMPORTED_MODULE_0__shader__["b" /* ShaderType */].vertex);
        this.fragmentShader.compileShader(conf.fragmentShaderString, __WEBPACK_IMPORTED_MODULE_0__shader__["b" /* ShaderType */].fragment);
    }
    createProgram(vertexShader, fragmentShader) {
        const gl = this.renderer.gl;
        const program = gl.createProgram();
        if (program === null) {
            throw 'webgl program create failed';
        }
        this.program = program;
        gl.attachShader(this.program, vertexShader.shader);
        gl.attachShader(this.program, fragmentShader.shader);
        gl.linkProgram(this.program);
        if (!gl.getProgramParameter(this.program, gl.LINK_STATUS)) {
            let info = gl.getProgramInfoLog(this.program);
            throw 'Could not compile WebGL program. \n\n' + info;
        }
    }
    createGLResource(config) {
        if (config.attributes !== undefined) {
            config.attributes.forEach(att => {
                this.attributes[att.name] = new __WEBPACK_IMPORTED_MODULE_4__attribute__["a" /* GLAttribute */](this, att);
            });
        }
        if (config.uniforms !== undefined) {
            config.uniforms.forEach(uni => {
                this.uniforms[uni.name] = new __WEBPACK_IMPORTED_MODULE_3__uniform_uniform__["a" /* GLUniform */](this, uni);
            });
        }
    }
    updateAttribute(name, data) {
        const attribute = this.attributes[name];
        if (attribute === undefined) {
            throw 'try to set a none exist attribute';
        }
        attribute.useBuffer(data);
    }
    getAttributeByUsage(usage) {
        return this.attributeUsageMap[usage];
    }
    setDrawRange(start, count) {
        this.drawFrom = start;
        this.drawCount = count;
    }
    setUniform(name, data) {
        this.uniforms[name].set(data);
    }
    useIndexBuffer(buffer) {
        const gl = this.renderer.gl;
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, buffer);
    }
    dispose() {
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = GLProgram;



/***/ }),

/***/ "./src/webgl/shader-util.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = injectVertexShaderHeaders;
/* harmony export (immutable) */ __webpack_exports__["a"] = injectFragmentShaderHeaders;
const shaderStringMap = {
    'float': 0 /* float */,
    'vec2': 1 /* floatVec2 */,
    'vec3': 2 /* floatVec3 */,
    'vec4': 3 /* floatVec4 */,
    'mat2': 8 /* Mat2 */,
    'mat3': 9 /* Mat3 */,
    'mat4': 10 /* Mat4 */,
};
let reverseShaderStringMap = {};
Object.keys(shaderStringMap).forEach(key => {
    reverseShaderStringMap[shaderStringMap[key]] = key;
});
const shaderAttributStringInfo = {
    'float': { type: 0 /* float */, stride: 1 },
    'vec2': { type: 1 /* floatVec2 */, stride: 2 },
    'vec3': { type: 2 /* floatVec3 */, stride: 3 },
    'vec4': { type: 3 /* floatVec4 */, stride: 4 },
};
let reverseShaderAttributStringInfo = {};
Object.keys(shaderAttributStringInfo).forEach(key => {
    reverseShaderAttributStringInfo[shaderAttributStringInfo[key].type] =
        { name: key, stride: shaderAttributStringInfo[key].stride };
});
function GLDataType2ShaderString(type) {
    return reverseShaderStringMap[type];
}
function getAttributeStride(type) {
    return reverseShaderAttributStringInfo[type].stride;
}
function AttrivbuteGLDataType2ShaderString(type) {
    return reverseShaderAttributStringInfo[type].name;
}
function injectVertexShaderHeaders(config, shaderText) {
    let injectText = '';
    injectText += generateAttributeString(config);
    injectText += generateUniformString(config);
    injectText += generateVaryingString(config);
    return injectText + shaderText;
}
function injectFragmentShaderHeaders(config, shaderText) {
    let injectText = '';
    injectText += 'precision highp float;\n';
    injectText = injectText + generateUniformString(config);
    injectText = injectText + generateVaryingString(config);
    return injectText + shaderText;
}
function generateAttributeString(config) {
    let text = '';
    if (config.attributes !== undefined) {
        config.attributes.forEach(att => {
            att.stride = getAttributeStride(att.type);
            const type = AttrivbuteGLDataType2ShaderString(att.type);
            text = text + 'attribute ' + type + ' ' + att.name + ';\n';
        });
    }
    return text;
}
function generateUniformString(config) {
    let text = '';
    if (config.uniforms !== undefined) {
        for (const key in config.uniforms) {
            const uni = config.uniforms[key];
            const type = GLDataType2ShaderString(uni.type);
            text = text + 'uniform ' + type + ' ' + uni.name + ';\n';
        }
    }
    return text;
}
function generateVaryingString(config) {
    let text = '';
    if (config.varyings !== undefined) {
        config.varyings.forEach(vary => {
            const type = GLDataType2ShaderString(vary.type);
            text = text + 'varying ' + type + ' ' + vary.name + ';\n';
        });
    }
    return text;
}


/***/ }),

/***/ "./src/webgl/shader.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ShaderType; });
var ShaderType;
(function (ShaderType) {
    ShaderType[ShaderType["vertex"] = 0] = "vertex";
    ShaderType[ShaderType["fragment"] = 1] = "fragment";
})(ShaderType || (ShaderType = {}));
class GLShader {
    constructor(renderer, type) {
        this.renderer = renderer;
        const gl = this.renderer.gl;
        this.type = type;
        var shader = gl.createShader(type === ShaderType.vertex ? gl.VERTEX_SHADER : gl.FRAGMENT_SHADER);
        if (shader === null) {
            throw 'webgl shader create failed';
        }
        this.shader = shader;
    }
    compileShader(source, type) {
        const gl = this.renderer.gl;
        gl.shaderSource(this.shader, source);
        gl.compileShader(this.shader);
        if (!gl.getShaderParameter(this.shader, gl.COMPILE_STATUS)) {
            let log = gl.getShaderInfoLog(this.shader);
            if (log) {
                throw new Error(log);
            }
        }
        if (!this.shader) {
            throw "Something went wrong while compile the shader.";
        }
        return this.shader;
    }
    ;
}
/* harmony export (immutable) */ __webpack_exports__["a"] = GLShader;



/***/ }),

/***/ "./src/webgl/states/gl-color-buffer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math_vector4__ = __webpack_require__("./src/math/vector4.ts");

class GLColorBuffer {
    constructor(renderer) {
        this.redMaskEnabled = false;
        this.greenMaskEnabled = false;
        this.blueMaskEnabled = false;
        this.alphaMaskEnabled = false;
        this.currentClearColor = new __WEBPACK_IMPORTED_MODULE_0__math_vector4__["a" /* Vector4 */]();
        this.gl = renderer.gl;
    }
    setColorMask(redMask, greenMask, blueMask, alphaMask) {
        if (this.redMaskEnabled !== redMask ||
            this.greenMaskEnabled !== greenMask ||
            this.blueMaskEnabled !== blueMask ||
            this.alphaMaskEnabled !== alphaMask) {
            this.gl.colorMask(redMask, greenMask, blueMask, alphaMask);
            this.redMaskEnabled = redMask;
            this.greenMaskEnabled = greenMask;
            this.blueMaskEnabled = blueMask;
            this.alphaMaskEnabled = alphaMask;
        }
    }
    setClearColor(newColor, premultipliedAlpha) {
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = GLColorBuffer;



/***/ }),

/***/ "./src/webgl/states/gl-depth-buffer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class GLDepthBuffer {
    constructor(renderer) {
        this.currentDepthMask = null;
        this.currentDepthFunc = null;
        this.currentDepthClear = null;
        this._enableTest = false;
        this.gl = renderer.gl;
        this.resetDefault();
    }
    set enableTest(value) {
        if (this._enableTest !== value) {
            if (value) {
                this.gl.enable(this.gl.DEPTH_TEST);
            }
            else {
                this.gl.disable(this.gl.DEPTH_TEST);
            }
        }
    }
    resetDefault() {
        this.enableTest = true;
    }
    setMask(value) {
        if (this.currentDepthMask !== value) {
            this.gl.depthMask(value);
            this.currentDepthMask = value;
        }
    }
    setFunc(depthFunc) {
        const gl = this.gl;
        if (this.currentDepthFunc !== depthFunc) {
            if (depthFunc) {
                switch (depthFunc) {
                    case 99 /* NeverDepth */:
                        gl.depthFunc(gl.NEVER);
                        break;
                    case 1 /* AlwaysDepth */:
                        gl.depthFunc(gl.ALWAYS);
                        break;
                    case 2 /* LessDepth */:
                        gl.depthFunc(gl.LESS);
                        break;
                    case 3 /* LessEqualDepth */:
                        gl.depthFunc(gl.LEQUAL);
                        break;
                    case 4 /* EqualDepth */:
                        gl.depthFunc(gl.EQUAL);
                        break;
                    case 5 /* GreaterEqualDepth */:
                        gl.depthFunc(gl.GEQUAL);
                        break;
                    case 6 /* GreaterDepth */:
                        gl.depthFunc(gl.GREATER);
                        break;
                    case 7 /* NotEqualDepth */:
                        gl.depthFunc(gl.NOTEQUAL);
                        break;
                    default:
                        gl.depthFunc(gl.LEQUAL);
                }
            }
            else {
                gl.depthFunc(gl.LEQUAL);
            }
            this.currentDepthFunc = depthFunc;
        }
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = GLDepthBuffer;



/***/ }),

/***/ "./src/webgl/states/gl-state.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math_vector4__ = __webpack_require__("./src/math/vector4.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__gl_color_buffer__ = __webpack_require__("./src/webgl/states/gl-color-buffer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gl_depth_buffer__ = __webpack_require__("./src/webgl/states/gl-depth-buffer.ts");



class GLState {
    constructor(renderer) {
        this.currentViewport = new __WEBPACK_IMPORTED_MODULE_0__math_vector4__["a" /* Vector4 */]();
        this.newViewport = new __WEBPACK_IMPORTED_MODULE_0__math_vector4__["a" /* Vector4 */]();
        this.currentScissor = new __WEBPACK_IMPORTED_MODULE_0__math_vector4__["a" /* Vector4 */]();
        this.newScissor = new __WEBPACK_IMPORTED_MODULE_0__math_vector4__["a" /* Vector4 */]();
        this.currentCullFace = 0 /* CullFaceNone */;
        this.renderer = renderer;
        this.gl = renderer.gl;
        this.colorbuffer = new __WEBPACK_IMPORTED_MODULE_1__gl_color_buffer__["a" /* GLColorBuffer */](renderer);
        this.depthbuffer = new __WEBPACK_IMPORTED_MODULE_2__gl_depth_buffer__["a" /* GLDepthBuffer */](renderer);
    }
    // specifies the affine transformation of x and y 
    // from normalized device coordinates to window coordinates.
    setViewport(x, y, width, height) {
        this.newViewport.set(x, y, width, height);
        if (!this.newViewport.equals(this.currentViewport)) {
            this.gl.viewport(x, y, width, height);
            const temp = this.newViewport;
            this.currentViewport = temp;
            this.newViewport = this.currentViewport;
        }
    }
    setScissor(x, y, width, height) {
        this.newScissor.set(x, y, width, height);
        if (!this.newScissor.equals(this.currentScissor)) {
            this.gl.viewport(x, y, width, height);
            const temp = this.newScissor;
            this.currentScissor = temp;
            this.newScissor = this.currentScissor;
        }
    }
    setCullFace(cullFace) {
        const gl = this.gl;
        if (cullFace !== 0 /* CullFaceNone */) {
            gl.enable(gl.CULL_FACE);
            if (cullFace !== this.currentCullFace) {
                if (cullFace === 1 /* CullFaceBack */) {
                    gl.cullFace(gl.BACK);
                }
                else if (cullFace === 2 /* CullFaceFront */) {
                    gl.cullFace(gl.FRONT);
                }
                else {
                    gl.cullFace(gl.FRONT_AND_BACK);
                }
            }
        }
        else {
            gl.disable(gl.CULL_FACE);
        }
        this.currentCullFace = cullFace;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = GLState;



/***/ }),

/***/ "./src/webgl/texture-manager.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math_uuid__ = __webpack_require__("./src/math/uuid.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__const__ = __webpack_require__("./src/webgl/const.ts");


class GLTextureManager {
    constructor(renderer) {
        this.textures = {};
        this.currentTextureSlot = null;
        this.renderer = renderer;
    }
    activeTexture(slot) {
        if (this.currentTextureSlot !== slot) {
            this.gl.activeTexture(slot);
            this.currentTextureSlot = slot;
        }
    }
    bindTexture(webglType, webglTexture) {
        if (this.currentTextureSlot === null) {
            this.activeTexture(0);
        }
        let boundTexture = this.currentBindTextures[this.currentTextureSlot];
        if (boundTexture === undefined) {
            boundTexture = { type: undefined, texture: undefined };
            this.currentBindTextures[this.currentTextureSlot] = boundTexture;
        }
        if (boundTexture.type !== webglType || boundTexture.texture !== webglTexture) {
            this.gl.bindTexture(webglType, webglTexture);
            boundTexture.type = webglType;
            boundTexture.texture = webglTexture;
        }
    }
    getGLTexture(storeId) {
        return this.textures[storeId];
    }
    deleteGLTexture(storeId) {
        const texture = this.getGLTexture(storeId);
        this.gl.deleteTexture(texture);
    }
    createTextureFromImageElement(image) {
        const gl = this.renderer.gl;
        const texture = gl.createTexture();
        if (texture === null) {
            throw 'webgl texture create fail';
        }
        gl.bindTexture(gl.TEXTURE_2D, texture);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
        const id = Object(__WEBPACK_IMPORTED_MODULE_0__math_uuid__["a" /* generateUUID */])();
        this.textures[id] = texture;
        return id;
    }
    createTexture(config) {
        const gl = this.renderer.gl;
        const texture = gl.createTexture();
        switch (config.minFilter) {
            case __WEBPACK_IMPORTED_MODULE_1__const__["a" /* TextureFilter */].linear:
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
                break;
            case __WEBPACK_IMPORTED_MODULE_1__const__["a" /* TextureFilter */].nearest:
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
                break;
            default:
                break;
        }
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = GLTextureManager;



/***/ }),

/***/ "./src/webgl/uniform/uniform-util.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["d"] = findUniformSetter;
/* harmony export (immutable) */ __webpack_exports__["b"] = findUniformDiffer;
/* harmony export (immutable) */ __webpack_exports__["a"] = findUniformCopyer;
/* harmony export (immutable) */ __webpack_exports__["c"] = findUniformFlattener;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math_index__ = __webpack_require__("./src/math/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math_vector2__ = __webpack_require__("./src/math/vector2.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__math_vector4__ = __webpack_require__("./src/math/vector4.ts");



function findUniformSetter(type) {
    switch (type) {
        case 0 /* float */: return setValue1f; // FLOAT
        // case 0x8b50: return setValue2fv; // _VEC2
        // case 0x8b51: return setValue3fv; // _VEC3
        // case 0x8b52: return setValue4fv; // _VEC4
        // case 0x8b5a: return setValue2fm; // _MAT2
        // case 0x8b5b: return setValue3fm; // _MAT3
        case 10 /* Mat4 */: return setValueM4a; // _MAT4
        // case 0x8b5e: case 0x8d66: return setValueT1; // SAMPLER_2D, SAMPLER_EXTERNAL_OES
        // case 0x8b60: return setValueT6; // SAMPLER_CUBE
        case 4 /* int */:
        case 11 /* boolean */: return setValue1i; // INT, BOOL
        // case 0x8b53: case 0x8b57: return setValue2iv; // _VEC2
        // case 0x8b54: case 0x8b58: return setValue3iv; // _VEC3
        // case 0x8b55: case 0x8b59: return setValue4iv; // _VEC4
    }
}
function setValue1f(gl, location, v) { gl.uniform1f(location, v); }
function setValue1i(gl, location, v) { gl.uniform1i(location, v); }
// // Array of vectors 
// function setValueV2a(gl, v) {
//   gl.uniform2fv(this.addr, flatten(v, this.size, 2));
// }
// function setValueV3a(gl, v) {
//   gl.uniform3fv(this.addr, flatten(v, this.size, 3));
// }
// function setValueV4a(gl, v) {
//   gl.uniform4fv(this.addr, flatten(v, this.size, 4));
// }
// function setValueM2a(gl, v) {
//   gl.uniformMatrix2fv(this.addr, false, flatten(v, this.size, 4));
// }
// function setValueM3a(gl, v) {
//   gl.uniformMatrix3fv(this.addr, false, flatten(v, this.size, 9));
// }
function setValueM4a(gl, location, v) { gl.uniformMatrix4fv(location, false, v); }
function differFloat(newVal, oldVal) {
    return newVal === oldVal;
}
function differArray(newVal, oldVal) {
    if (newVal.length !== oldVal.length) {
        return true;
    }
    for (let i = 0; i < newVal.length; i++) {
        if (newVal[i] !== oldVal[i]) {
            return true;
        }
    }
    return false;
}
function copyFloat(newVal, target) {
    return newVal;
}
function copyArray(newVal, target) {
    let targetReal = target;
    if (target === undefined || newVal.length !== target.length) {
        targetReal = [];
    }
    for (let i = 0; i < newVal.length; i++) {
        targetReal[i] = newVal[i];
    }
    return targetReal;
}
function findUniformDiffer(type) {
    switch (type) {
        case 0 /* float */: return differFloat; // FLOAT
        case 10 /* Mat4 */: return differArray; // _MAT4
    }
}
function findUniformCopyer(type) {
    switch (type) {
        case 0 /* float */: return copyFloat; // FLOAT
        case 10 /* Mat4 */: return copyArray; // _MAT4
    }
}
function findUniformFlattener(type) {
    switch (type) {
        case 0 /* float */: return flattenFloat; // FLOAT
        case 1 /* floatVec2 */: return __WEBPACK_IMPORTED_MODULE_1__math_vector2__["a" /* Vector2 */].flatten; // _VEC2
        case 2 /* floatVec3 */: return __WEBPACK_IMPORTED_MODULE_0__math_index__["d" /* Vector3 */].flatten; // _VEC3
        case 3 /* floatVec4 */: return __WEBPACK_IMPORTED_MODULE_2__math_vector4__["a" /* Vector4 */].flatten; // _VEC4
        case 8 /* Mat2 */: throw 'not support yet'; // _MAT2
        case 9 /* Mat3 */: throw 'not support yet'; // _MAT3
        case 10 /* Mat4 */: return __WEBPACK_IMPORTED_MODULE_0__math_index__["b" /* Matrix4 */].flatten; // _MAT4
        // case 0x8b5e: case 0x8d66: return setValueT1; // SAMPLER_2D, SAMPLER_EXTERNAL_OES
        // case 0x8b60: return setValueT6; // SAMPLER_CUBE
        // case 0x1404: case 0x8b56: return setValue1i; // INT, BOOL
        // case 0x8b53: case 0x8b57: return setValue2iv; // _VEC2
        // case 0x8b54: case 0x8b58: return setValue3iv; // _VEC3
        // case 0x8b55: case 0x8b59: return setValue4iv; // _VEC4
    }
    throw 'uniform falttener not found';
}
function flattenFloat(v) {
    return v;
}
function flattenVector2(v) {
}
function flattenVector3(v) {
}
function flattenVector4(v) {
}


/***/ }),

/***/ "./src/webgl/uniform/uniform.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createUniform */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__uniform_util__ = __webpack_require__("./src/webgl/uniform/uniform-util.ts");

function createUniform(program, descriptor) {
    return new GLUniform(program, descriptor);
}
class GLUniform {
    constructor(program, descriptor) {
        this.program = program;
        this.gl = program.getRenderer().gl;
        const glProgram = program.getProgram();
        const location = this.gl.getUniformLocation(glProgram, descriptor.name);
        if (location === null) {
            // if you declare a uniform , but not realy used in shader
            // that will may cause null location
            console.warn('create uniform fail: ', descriptor.name);
        }
        this.location = location;
        this.setter = Object(__WEBPACK_IMPORTED_MODULE_0__uniform_util__["d" /* findUniformSetter */])(descriptor.type);
        this.differ = Object(__WEBPACK_IMPORTED_MODULE_0__uniform_util__["b" /* findUniformDiffer */])(descriptor.type);
        this.copyer = Object(__WEBPACK_IMPORTED_MODULE_0__uniform_util__["a" /* findUniformCopyer */])(descriptor.type);
        if (descriptor.flattener !== undefined) {
            this.flattener = descriptor.flattener;
        }
        else {
            this.flattener = Object(__WEBPACK_IMPORTED_MODULE_0__uniform_util__["c" /* findUniformFlattener */])(descriptor.type);
        }
    }
    set(value) {
        this.receiveData = this.flattener(value, this.receiveData);
        if (this.lastReceiveData === undefined) { // this uniform never uploadever
            this.lastReceiveData = this.flattener(value, this.lastReceiveData);
            this.setter(this.gl, this.location, this.receiveData);
            return;
        }
        const enableDiff = true;
        if (enableDiff) {
            if (this.differ(this.receiveData, this.lastReceiveData)) {
                this.setter(this.gl, this.location, this.receiveData);
                this.lastReceiveData = this.copyer(this.receiveData, this.lastReceiveData);
            }
        }
        else {
            this.setter(this.gl, this.location, this.receiveData);
        }
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = GLUniform;



/***/ }),

/***/ "./src/webgl/webgl-renderer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__gl_info__ = __webpack_require__("./src/webgl/gl-info.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__program__ = __webpack_require__("./src/webgl/program.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__math_index__ = __webpack_require__("./src/math/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__program_manager__ = __webpack_require__("./src/webgl/program-manager.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__attribute_buffer_manager__ = __webpack_require__("./src/webgl/attribute-buffer-manager.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__states_gl_state__ = __webpack_require__("./src/webgl/states/gl-state.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__texture_manager__ = __webpack_require__("./src/webgl/texture-manager.ts");







class GLRenderer {
    constructor(el, options) {
        this.projectionMatrix = new __WEBPACK_IMPORTED_MODULE_2__math_index__["b" /* Matrix4 */]();
        // enable this will cause great performance issue
        // only enable this when debug draw range issue
        this.enableRenderErrorCatch = false;
        this.width = 100;
        this.height = 100;
        this.devicePixelRatio = 1;
        this.activeProgram = null;
        this.programManager = new __WEBPACK_IMPORTED_MODULE_3__program_manager__["a" /* GLProgramManager */](this);
        this.textureManger = new __WEBPACK_IMPORTED_MODULE_6__texture_manager__["a" /* GLTextureManager */](this);
        this.attributeBufferManager = new __WEBPACK_IMPORTED_MODULE_4__attribute_buffer_manager__["a" /* GLAttributeBufferDataManager */](this);
        const ctx = el.getContext('webgl', options);
        if (ctx === null) {
            throw 'webgl context create failed';
        }
        this.gl = ctx;
        this.el = el;
        this.width = this.el.width;
        this.height = this.el.height;
        this.glInfo = new __WEBPACK_IMPORTED_MODULE_0__gl_info__["a" /* GLInfo */](this);
        this.glInfo.createAllExtension();
        this.devicePixelRatio = window.devicePixelRatio;
        this.state = new __WEBPACK_IMPORTED_MODULE_5__states_gl_state__["a" /* GLState */](this);
    }
    setSize(width, height) {
        this.width = width;
        this.height = height;
        this.el.width = this.width * this.devicePixelRatio;
        this.el.height = this.height * this.devicePixelRatio;
        this.el.style.width = width + 'px';
        this.el.style.height = height + 'px';
        this.state.setViewport(0, 0, width * this.devicePixelRatio, height * this.devicePixelRatio);
    }
    createProgram(conf) {
        const program = new __WEBPACK_IMPORTED_MODULE_1__program__["a" /* GLProgram */](this, conf);
        this.programManager.addNewProgram(program);
        return program;
    }
    getProgram(storeId) {
        return this.programManager.getProgram(storeId);
    }
    useProgram(program) {
        if (this.activeProgram !== program) {
            this.activeProgram = program;
            this.gl.useProgram(program.getProgram());
        }
    }
    getGLTexture(storeId) {
        return this.textureManger.getGLTexture(storeId);
    }
    createBuffer(data, useforIndex) {
        return this.attributeBufferManager.createBuffer(data, useforIndex);
    }
    getBuffer(storeId) {
        return this.attributeBufferManager.getGLBuffer(storeId);
    }
    deleteBuffer(storeId) {
        this.attributeBufferManager.disposeBuffer(storeId);
    }
    render(mode, useIndex) {
        if (this.activeProgram === null) {
            throw 'renderer hasnt active program';
        }
        if (useIndex) {
            this.gl.drawElements(mode, this.activeProgram.drawCount, this.gl.UNSIGNED_SHORT, 0);
        }
        else {
            this.gl.drawArrays(mode, this.activeProgram.drawFrom, this.activeProgram.drawCount);
        }
        if (this.enableRenderErrorCatch) {
            const errorCode = this.gl.getError();
            if (errorCode !== this.gl.NO_ERROR) {
                throw `gl draw error: ${errorCode}`;
            }
        }
    }
    clear() {
        this.gl.clear(this.gl.COLOR_BUFFER_BIT);
    }
    dispose() {
        this.attributeBufferManager.dispose();
        this.programManager.dispose();
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = GLRenderer;



/***/ })

/******/ });