define(['dart_sdk', 'packages/angular_components/src/laminate/enums/base'], function(dart_sdk, base) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__laminate__enums__base = base.src__laminate__enums__base;
  const _root = Object.create(null);
  const laminate__enums__visibility = Object.create(_root);
  const _propertyName = Symbol('_propertyName');
  const _propertyValue = Symbol('_propertyValue');
  laminate__enums__visibility.Visibility = class Visibility extends core.Object {
    get displayName() {
      return this[displayName$];
    }
    set displayName(value) {
      super.displayName = value;
    }
    static fromBoolean(visible) {
      return dart.test(visible) ? laminate__enums__visibility.Visibility.Visible : laminate__enums__visibility.Visibility.None;
    }
    apply(setProperty) {
      if (this[_propertyName] != null) {
        setProperty(this[_propertyName], this[_propertyValue]);
      }
    }
    toString() {
      return "Visibility {" + dart.str(this.displayName) + "}";
    }
  };
  (laminate__enums__visibility.Visibility.__ = function(displayName, propertyName, propertyValue) {
    if (propertyName === void 0) propertyName = null;
    if (propertyValue === void 0) propertyValue = null;
    this[displayName$] = displayName;
    this[_propertyName] = propertyName;
    this[_propertyValue] = propertyValue;
  }).prototype = laminate__enums__visibility.Visibility.prototype;
  dart.addTypeTests(laminate__enums__visibility.Visibility);
  const displayName$ = Symbol("Visibility.displayName");
  laminate__enums__visibility.Visibility[dart.implements] = () => [src__laminate__enums__base.ElementStyleEnum];
  dart.setMethodSignature(laminate__enums__visibility.Visibility, () => ({
    __proto__: dart.getMethods(laminate__enums__visibility.Visibility.__proto__),
    apply: dart.fnType(dart.void, [dart.fnType(dart.void, [core.String, dart.dynamic])])
  }));
  dart.setFieldSignature(laminate__enums__visibility.Visibility, () => ({
    __proto__: dart.getFields(laminate__enums__visibility.Visibility.__proto__),
    displayName: dart.finalFieldType(core.String),
    [_propertyName]: dart.finalFieldType(core.String),
    [_propertyValue]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(laminate__enums__visibility.Visibility, ['toString']);
  dart.defineLazy(laminate__enums__visibility.Visibility, {
    /*laminate__enums__visibility.Visibility.None*/get None() {
      return dart.const(new laminate__enums__visibility.Visibility.__("None", "display", "none"));
    },
    /*laminate__enums__visibility.Visibility.Hidden*/get Hidden() {
      return dart.const(new laminate__enums__visibility.Visibility.__("Hidden", "visibility", "hidden"));
    },
    /*laminate__enums__visibility.Visibility.Visible*/get Visible() {
      return dart.const(new laminate__enums__visibility.Visibility.__("Visible"));
    }
  });
  dart.trackLibraries("packages/angular_components/laminate/enums/visibility.ddc", {
    "package:angular_components/laminate/enums/visibility.dart": laminate__enums__visibility
  }, '{"version":3,"sourceRoot":"","sources":["visibility.dart"],"names":[],"mappings":";;;;;;;;;;;IAoBe;;;;;;uBAKkB,OAAY;AAAE,AAC3C,uBAAO,OAAO,IAAG,8CAAO,GAAG,2CAAI;IACjC;UAMW,WAAyB;AAClC,UAAI,mBAAa,IAAI,MAAM;AACzB,mBAAW,CAAC,mBAAa,EAAE,oBAAc;;IAE7C;;YAGqB,2BAAc,gBAAW;IAAE;;wDAX7B,WAAgB;;;IAAX,kBAAW,GAAX,WAAW;IACzB,mBAAa;IAAO,oBAAc;EAAE;;;;;;;;;;;;;;;;MAnBjC,2CAAI;4BAAG,yCAAY,CAAC,QAAQ,WAAW;;MAGvC,6CAAM;4BAAG,yCAAY,CAAC,UAAU,cAAc;;MAG9C,8CAAO;4BAAG,yCAAY,CAAC","file":"visibility.ddc.js"}');
  // Exports:
  return {
    laminate__enums__visibility: laminate__enums__visibility
  };
});

//# sourceMappingURL=visibility.ddc.js.map
