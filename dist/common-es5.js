function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
  /***/
  "./src/app/auth/_services/dataCountry.service.ts":
  /*!*******************************************************!*\
    !*** ./src/app/auth/_services/dataCountry.service.ts ***!
    \*******************************************************/

  /*! exports provided: DataCountryService */

  /***/
  function srcAppAuth_servicesDataCountryServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataCountryService", function () {
      return DataCountryService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js"); //const API_URL = 'http://covid-map-2020-back-end.herokuapp.com/api/test/';


    var API_URL = 'http://localhost:8080/api/test/';

    var DataCountryService =
    /*#__PURE__*/
    function () {
      function DataCountryService(http) {
        _classCallCheck(this, DataCountryService);

        this.http = http;
      }

      _createClass(DataCountryService, [{
        key: "getDataCountries",
        value: function getDataCountries() {
          return this.http.get(API_URL + 'dataCountries');
        }
      }, {
        key: "getDataCountrieById",
        value: function getDataCountrieById(id) {
          return this.http.get(API_URL + "dataCountries/".concat(id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return res[0];
          }) // or any other operator
          );
        }
      }, {
        key: "getDataCountriesFormatMap",
        value: function getDataCountriesFormatMap() {
          return this.http.get(API_URL + 'getDataCountriesFormatMap');
        }
      }, {
        key: "getDataCountriesTreeGrid",
        value: function getDataCountriesTreeGrid() {
          return this.http.get(API_URL + 'getDataCountriesTreeGrid');
        }
      }]);

      return DataCountryService;
    }();

    DataCountryService.ɵfac = function DataCountryService_Factory(t) {
      return new (t || DataCountryService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    DataCountryService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: DataCountryService,
      factory: DataCountryService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataCountryService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=common-es5.js.map