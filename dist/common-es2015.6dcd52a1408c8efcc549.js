(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"07xP":function(t,e,r){"use strict";r.d(e,"a",(function(){return s}));var a=r("lJxs"),n=r("fXoL"),o=r("tk/3");const i="https://covid-map-2020-back-end.herokuapp.com/api/test/";let s=(()=>{class t{constructor(t){this.http=t}getDataCountries(){return this.http.get(i+"dataCountries")}getDataCountrieById(t){return this.http.get(i+`dataCountries/${t}`).pipe(Object(a.a)(t=>t[0]))}getDataCountriesFormatMap(){return this.http.get(i+"getDataCountriesFormatMap")}getDataCountriesTreeGrid(){return this.http.get(i+"getDataCountriesTreeGrid")}}return t.\u0275fac=function(e){return new(e||t)(n["\u0275\u0275inject"](o.a))},t.\u0275prov=n["\u0275\u0275defineInjectable"]({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);