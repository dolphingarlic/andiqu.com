define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const andiqu = Object.create(_root);
  andiqu.AppComponent = class AppComponent extends core.Object {};
  (andiqu.AppComponent.new = function() {
  }).prototype = andiqu.AppComponent.prototype;
  dart.addTypeTests(andiqu.AppComponent);
  dart.trackLibraries("packages/andiqu/andiqu.ddc", {
    "package:andiqu/andiqu.dart": andiqu
  }, '{"version":3,"sourceRoot":"","sources":["andiqu.dart"],"names":[],"mappings":";;;;;;;;;EAuBoB","file":"andiqu.ddc.js"}');
  // Exports:
  return {
    andiqu: andiqu
  };
});

//# sourceMappingURL=andiqu.ddc.js.map
