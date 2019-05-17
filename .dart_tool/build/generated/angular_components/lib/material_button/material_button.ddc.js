define(['dart_sdk', 'packages/angular_components/material_button/material_button_base', 'packages/angular/src/core/change_detection/change_detection'], function(dart_sdk, material_button_base, change_detection) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const material_button__material_button_base = material_button_base.material_button__material_button_base;
  const src__core__change_detection__change_detector_ref = change_detection.src__core__change_detection__change_detector_ref;
  const _root = Object.create(null);
  const material_button__material_button = Object.create(_root);
  const _changeDetector = Symbol('_changeDetector');
  material_button__material_button.MaterialButtonComponent = class MaterialButtonComponent extends material_button__material_button_base.MaterialButtonBase {
    focusedStateChanged() {
      this[_changeDetector].markForCheck();
    }
    get hostDisabled() {
      return dart.test(this.disabled) ? "" : null;
    }
    get hostRaised() {
      return dart.test(this.raised) ? "" : null;
    }
    get hostClassIsFocused() {
      return this.visualFocus;
    }
    get hostElevation() {
      return dart.str(this.zElevation);
    }
    get iconButton() {
      return this[iconButton];
    }
    set iconButton(value) {
      super.iconButton = value;
    }
    get ariaLabel() {
      return this[ariaLabel];
    }
    set ariaLabel(value) {
      super.ariaLabel = value;
    }
  };
  (material_button__material_button.MaterialButtonComponent.new = function(element, darktheme, changeDetector, role) {
    this[iconButton] = false;
    this[ariaLabel] = null;
    this[_changeDetector] = changeDetector;
    material_button__material_button.MaterialButtonComponent.__proto__.new.call(this, element, role);
    if (this[_changeDetector] == null) dart.throw(core.Exception.new("Expecting change detector"));
    darktheme.themeElement(element);
  }).prototype = material_button__material_button.MaterialButtonComponent.prototype;
  dart.addTypeTests(material_button__material_button.MaterialButtonComponent);
  const iconButton = Symbol("MaterialButtonComponent.iconButton");
  const ariaLabel = Symbol("MaterialButtonComponent.ariaLabel");
  dart.setGetterSignature(material_button__material_button.MaterialButtonComponent, () => ({
    __proto__: dart.getGetters(material_button__material_button.MaterialButtonComponent.__proto__),
    hostDisabled: core.String,
    hostRaised: core.String,
    hostClassIsFocused: core.bool,
    hostElevation: core.String
  }));
  dart.setFieldSignature(material_button__material_button.MaterialButtonComponent, () => ({
    __proto__: dart.getFields(material_button__material_button.MaterialButtonComponent.__proto__),
    [_changeDetector]: dart.finalFieldType(src__core__change_detection__change_detector_ref.ChangeDetectorRef),
    iconButton: dart.finalFieldType(core.bool),
    ariaLabel: dart.finalFieldType(core.String)
  }));
  dart.defineLazy(material_button__material_button.MaterialButtonComponent, {
    /*material_button__material_button.MaterialButtonComponent.hostAnimated*/get hostAnimated() {
      return "true";
    }
  });
  dart.trackLibraries("packages/angular_components/material_button/material_button.ddc", {
    "package:angular_components/material_button/material_button.dart": material_button__material_button
  }, '{"version":3,"sourceRoot":"","sources":["material_button.dart"],"names":[],"mappings":";;;;;;;;;;;;AA4FI,2BAAe,aAAa;IAC9B;;uBAU2B,aAAQ,IAAG,KAAK;IAAI;;uBAGtB,WAAM,IAAG,KAAK;IAAI;;YAGZ,iBAAW;;;YAGd,UAAE,eAAU;IAAC;IAM9B;;;;;;IACE;;;;;;;2EAxBW,OAAmB,EAAE,SAAsB,kBACzC,IAA8B;IAsB7C,gBAAU,GAAG;IACX,eAAS,GAAG;IAvBhB,qBAAe;AAClB,sFAAM,OAAO,EAAE,IAAI;AACvB,QAAI,qBAAe,IAAI,MAAM,WAAM,kBAAS,CAAC;AAC7C,aAAS,aAAa,CAAC,OAAO;EAChC;;;;;;;;;;;;;;;;;;MAeoB,qEAAY;YAAG","file":"material_button.ddc.js"}');
  // Exports:
  return {
    material_button__material_button: material_button__material_button
  };
});

//# sourceMappingURL=material_button.ddc.js.map
