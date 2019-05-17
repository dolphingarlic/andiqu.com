define(['dart_sdk', 'packages/andiqu/andiqu.template', 'packages/andiqu/andiqu', 'packages/angular/src/bootstrap/modules'], function(dart_sdk, andiqu, andiqu$, modules) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const andiqu$46template = andiqu.andiqu$46template;
  const andiqu$0 = andiqu$.andiqu;
  const src__bootstrap__run = modules.src__bootstrap__run;
  const _root = Object.create(null);
  const main = Object.create(_root);
  main.main = function() {
    src__bootstrap__run.runApp(andiqu$0.AppComponent, andiqu$46template.AppComponentNgFactory);
  };
  dart.trackLibraries("web/main.ddc", {
    "main.dart": main
  }, '{"version":3,"sourceRoot":"","sources":["main.dart"],"names":[],"mappings":";;;;;;;;;;;AAIE,8BAAM,wBAAI,uCAAqB;EACjC","file":"main.ddc.js"}');
  // Exports:
  return {
    main: main
  };
});

//# sourceMappingURL=main.ddc.js.map
