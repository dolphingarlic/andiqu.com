define(['dart_sdk', 'packages/angular_components/theme/dark_theme', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular/angular.template', 'packages/angular_components/theme/module.template'], function(dart_sdk, dark_theme, change_detection, angular, module) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const theme__dark_theme = dark_theme.theme__dark_theme;
  const src__di__reflector = change_detection.src__di__reflector;
  const src__core__di__opaque_token = change_detection.src__core__di__opaque_token;
  const src__core__di__decorators = change_detection.src__core__di__decorators;
  const angular$46template = angular.angular$46template;
  const theme__module$46template = module.theme__module$46template;
  const _root = Object.create(null);
  const theme__dark_theme$46template = Object.create(_root);
  let boolToAcxDarkTheme = () => (boolToAcxDarkTheme = dart.constFn(dart.fnType(theme__dark_theme.AcxDarkTheme, [core.bool])))();
  let ListOfObject = () => (ListOfObject = dart.constFn(core.List$(core.Object)))();
  dart.defineLazy(theme__dark_theme$46template, {
    /*theme__dark_theme$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  let const$;
  let const$0;
  let const$1;
  let const$2;
  let const$3;
  theme__dark_theme$46template.initReflector = function() {
    if (dart.test(theme__dark_theme$46template._visited)) {
      return;
    }
    theme__dark_theme$46template._visited = true;
    src__di__reflector.registerFactory(dart.wrapType(theme__dark_theme.AcxDarkTheme), dart.fn(p0 => new theme__dark_theme.AcxDarkTheme.new(p0), boolToAcxDarkTheme()));
    src__di__reflector.registerDependencies(dart.wrapType(theme__dark_theme.AcxDarkTheme), const$3 || (const$3 = dart.constList([const$2 || (const$2 = dart.constList([const$0 || (const$0 = dart.const(new src__core__di__decorators.Inject.new(const$ || (const$ = dart.const(new src__core__di__opaque_token.OpaqueToken.new("acxDarkTheme")))))), const$1 || (const$1 = dart.const(new src__core__di__decorators.Optional.new()))], core.Object))], ListOfObject())));
    angular$46template.initReflector();
    theme__module$46template.initReflector();
  };
  dart.trackLibraries("packages/angular_components/theme/dark_theme.template.ddc", {
    "package:angular_components/theme/dark_theme.template.dart": theme__dark_theme$46template
  }, '{"version":3,"sourceRoot":"","sources":["dark_theme.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;MAeI,qCAAQ;YAAG;;;;;;;;;;AAEb,kBAAI,qCAAQ,GAAE;AACZ;;AAEF,4CAAW;AAEX,IAAO,kCAAe,CAAC,6CAAY,EAAE,QAAC,EAAO,QAAK,kCAAY,CAAC,EAAE;AACjE,IAAO,uCAAoB,CAAC,6CAAY,EAAE,sCACxC,2EAAC,oCAAa,oCAAC,2CAAwB,CAAC,2DAAkB,sCAAe;AAE3E,IAAM,gCAAa;AACnB,IAAM,sCAAa;EACrB","file":"dark_theme.template.ddc.js"}');
  // Exports:
  return {
    theme__dark_theme$46template: theme__dark_theme$46template
  };
});

//# sourceMappingURL=dark_theme.template.ddc.js.map
