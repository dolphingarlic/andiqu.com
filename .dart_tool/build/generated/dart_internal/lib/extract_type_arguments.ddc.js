define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const _internal = dart_sdk._internal;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const extract_type_arguments = Object.create(_root);
  extract_type_arguments.extractIterableTypeArgument = function(iterable, extract) {
    return _internal.extractTypeArguments(core.Iterable, iterable, extract);
  };
  extract_type_arguments.extractMapTypeArguments = function(map, extract) {
    return _internal.extractTypeArguments(core.Map, map, extract);
  };
  dart.trackLibraries("packages/dart_internal/extract_type_arguments.ddc", {
    "package:dart_internal/extract_type_arguments.dart": extract_type_arguments
  }, '{"version":3,"sourceRoot":"","sources":["extract_type_arguments.dart"],"names":[],"mappings":";;;;;;;;gEAyBQ,QAAiB,EAAE,OAA4B;UACnD,AAAS,+BAAoB,gBAAW,QAAQ,EAAE,OAAO;EAAC;4DAgB/B,GAAO,EAAE,OAA+B;UACnE,AAAS,+BAAoB,WAAM,GAAG,EAAE,OAAO;EAAC","file":"extract_type_arguments.ddc.js"}');
  // Exports:
  return {
    extract_type_arguments: extract_type_arguments
  };
});

//# sourceMappingURL=extract_type_arguments.ddc.js.map
