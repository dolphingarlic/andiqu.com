define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const src__experience__experience = Object.create(_root);
  src__experience__experience.ExperienceComponent = class ExperienceComponent extends core.Object {
    get value() {
      return this[value$];
    }
    set value(value) {
      this[value$] = value;
    }
  };
  (src__experience__experience.ExperienceComponent.new = function() {
    this[value$] = 2;
  }).prototype = src__experience__experience.ExperienceComponent.prototype;
  dart.addTypeTests(src__experience__experience.ExperienceComponent);
  const value$ = Symbol("ExperienceComponent.value");
  dart.setFieldSignature(src__experience__experience.ExperienceComponent, () => ({
    __proto__: dart.getFields(src__experience__experience.ExperienceComponent.__proto__),
    value: dart.fieldType(core.int)
  }));
  dart.trackLibraries("packages/andiqu/src/experience/experience.ddc", {
    "package:andiqu/src/experience/experience.dart": src__experience__experience
  }, '{"version":3,"sourceRoot":"","sources":["experience.dart"],"names":[],"mappings":";;;;;;;;IAYM;;;;;;;;gBAAK,GAAG;EACd","file":"experience.ddc.js"}');
  // Exports:
  return {
    src__experience__experience: src__experience__experience
  };
});

//# sourceMappingURL=experience.ddc.js.map
