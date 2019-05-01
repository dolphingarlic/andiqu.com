define(['dart_sdk', 'packages/angular_components/utils/angular/managed_zone/angular_2', 'packages/angular/src/core/zone/ng_zone', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular/di.template', 'packages/angular_components/src/utils/angular/managed_zone/managed_zone.template'], function(dart_sdk, angular_2, ng_zone, change_detection, di, managed_zone) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const utils__angular__managed_zone__angular_2 = angular_2.utils__angular__managed_zone__angular_2;
  const src__core__zone__ng_zone = ng_zone.src__core__zone__ng_zone;
  const src__di__reflector = change_detection.src__di__reflector;
  const di$46template = di.di$46template;
  const src__utils__angular__managed_zone__managed_zone$46template = managed_zone.src__utils__angular__managed_zone__managed_zone$46template;
  const _root = Object.create(null);
  const utils__angular__managed_zone__angular_2$46template = Object.create(_root);
  let NgZoneToAngular2ManagedZone = () => (NgZoneToAngular2ManagedZone = dart.constFn(dart.fnType(utils__angular__managed_zone__angular_2.Angular2ManagedZone, [src__core__zone__ng_zone.NgZone])))();
  let ListOfObject = () => (ListOfObject = dart.constFn(core.List$(core.Object)))();
  dart.defineLazy(utils__angular__managed_zone__angular_2$46template, {
    /*utils__angular__managed_zone__angular_2$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  let const$;
  let const$0;
  utils__angular__managed_zone__angular_2$46template.initReflector = function() {
    if (dart.test(utils__angular__managed_zone__angular_2$46template._visited)) {
      return;
    }
    utils__angular__managed_zone__angular_2$46template._visited = true;
    src__di__reflector.registerFactory(dart.wrapType(utils__angular__managed_zone__angular_2.Angular2ManagedZone), dart.fn(p0 => new utils__angular__managed_zone__angular_2.Angular2ManagedZone.new(p0), NgZoneToAngular2ManagedZone()));
    src__di__reflector.registerDependencies(dart.wrapType(utils__angular__managed_zone__angular_2.Angular2ManagedZone), const$0 || (const$0 = dart.constList([const$ || (const$ = dart.constList([dart.wrapType(src__core__zone__ng_zone.NgZone)], core.Object))], ListOfObject())));
    di$46template.initReflector();
    src__utils__angular__managed_zone__managed_zone$46template.initReflector();
    src__utils__angular__managed_zone__managed_zone$46template.initReflector();
  };
  dart.trackLibraries("packages/angular_components/utils/angular/managed_zone/angular_2.template.ddc", {
    "package:angular_components/utils/angular/managed_zone/angular_2.template.dart": utils__angular__managed_zone__angular_2$46template
  }, '{"version":3,"sourceRoot":"","sources":["angular_2.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;MAgBI,2DAAQ;YAAG;;;;;;;AAEb,kBAAI,2DAAQ,GAAE;AACZ;;AAEF,kEAAW;AAEX,IAAO,kCAAe,CAAC,0EAAmB,EAAE,QAAC,EAAa,QAAK,+DAAmB,CAAC,EAAE;AACrF,IAAO,uCAAoB,CAAC,0EAAmB,EAAE,sCAC/C,oCAAK,8CAAM;AAEb,IAAM,2BAAa;AACnB,IAAM,wEAAa;AACnB,IAAM,wEAAa;EACrB","file":"angular_2.template.ddc.js"}');
  // Exports:
  return {
    utils__angular__managed_zone__angular_2$46template: utils__angular__managed_zone__angular_2$46template
  };
});

//# sourceMappingURL=angular_2.template.ddc.js.map
