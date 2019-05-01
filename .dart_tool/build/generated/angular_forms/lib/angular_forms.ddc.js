define(['dart_sdk', 'packages/angular_forms/src/directives'], function(dart_sdk, directives) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__directives__radio_control_value_accessor = directives.src__directives__radio_control_value_accessor;
  const _root = Object.create(null);
  const angular_forms = Object.create(_root);
  dart.defineLazy(angular_forms, {
    /*angular_forms.FORM_PROVIDERS*/get FORM_PROVIDERS() {
      return dart.constList([dart.wrapType(src__directives__radio_control_value_accessor.RadioControlRegistry)], core.Type);
    },
    /*angular_forms.FORM_BINDINGS*/get FORM_BINDINGS() {
      return angular_forms.FORM_PROVIDERS;
    }
  });
  dart.trackLibraries("packages/angular_forms/angular_forms.ddc", {
    "package:angular_forms/angular_forms.dart": angular_forms
  }, '{"version":3,"sourceRoot":"","sources":["angular_forms.dart"],"names":[],"mappings":";;;;;;;;;MAkEiB,4BAAc;YAAG,iBAAC,iFAAoB;;MAGjD,2BAAa;YAAG,6BAAc","file":"angular_forms.ddc.js"}');
  // Exports:
  return {
    angular_forms: angular_forms
  };
});

//# sourceMappingURL=angular_forms.ddc.js.map
