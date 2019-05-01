define(['dart_sdk', 'packages/angular_components/model/ui/icon'], function(dart_sdk, icon) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const model__ui__icon = icon.model__ui__icon;
  const _root = Object.create(null);
  const material_icon__material_icon = Object.create(_root);
  const $contains = dartx.contains;
  const $setAttribute = dartx.setAttribute;
  dart.defineLazy(material_icon__material_icon, {
    /*material_icon__material_icon._flippedIcons*/get _flippedIcons() {
      return dart.constList(["arrow_back", "arrow_forward", "chevron_left", "chevron_right", "navigate_before", "navigate_next", "last_page", "first_page", "open_in_new", "star_half", "exit_to_app"], core.String);
    }
  });
  const _element = Symbol('_element');
  const _icon = Symbol('_icon');
  material_icon__material_icon.MaterialIconComponent = class MaterialIconComponent extends core.Object {
    set icon(value) {
      this[_icon] = value;
      if (dart.test(material_icon__material_icon._flippedIcons[$contains](this.iconName))) {
        this[_element][$setAttribute]("flip", "");
      }
    }
    get ariaLabel() {
      return this[ariaLabel];
    }
    set ariaLabel(value) {
      this[ariaLabel] = value;
    }
    get iconName() {
      return core.String._check(model__ui__icon.Icon.is(this[_icon]) ? dart.dload(this[_icon], 'name') : this[_icon]);
    }
  };
  (material_icon__material_icon.MaterialIconComponent.new = function(element) {
    this[ariaLabel] = null;
    this[_icon] = null;
    this[_element] = element;
  }).prototype = material_icon__material_icon.MaterialIconComponent.prototype;
  dart.addTypeTests(material_icon__material_icon.MaterialIconComponent);
  const ariaLabel = Symbol("MaterialIconComponent.ariaLabel");
  dart.setGetterSignature(material_icon__material_icon.MaterialIconComponent, () => ({
    __proto__: dart.getGetters(material_icon__material_icon.MaterialIconComponent.__proto__),
    iconName: core.String
  }));
  dart.setSetterSignature(material_icon__material_icon.MaterialIconComponent, () => ({
    __proto__: dart.getSetters(material_icon__material_icon.MaterialIconComponent.__proto__),
    icon: dart.dynamic
  }));
  dart.setFieldSignature(material_icon__material_icon.MaterialIconComponent, () => ({
    __proto__: dart.getFields(material_icon__material_icon.MaterialIconComponent.__proto__),
    ariaLabel: dart.fieldType(core.String),
    [_icon]: dart.fieldType(dart.dynamic),
    [_element]: dart.finalFieldType(html.HtmlElement)
  }));
  material_icon__material_icon.IconSize = class IconSize extends core.Object {};
  (material_icon__material_icon.IconSize.new = function() {
  }).prototype = material_icon__material_icon.IconSize.prototype;
  dart.addTypeTests(material_icon__material_icon.IconSize);
  dart.defineLazy(material_icon__material_icon.IconSize, {
    /*material_icon__material_icon.IconSize.defaultSize*/get defaultSize() {
      return "";
    },
    /*material_icon__material_icon.IconSize.xSmall*/get xSmall() {
      return "x-small";
    },
    /*material_icon__material_icon.IconSize.small*/get small() {
      return "small";
    },
    /*material_icon__material_icon.IconSize.medium*/get medium() {
      return "medium";
    },
    /*material_icon__material_icon.IconSize.large*/get large() {
      return "large";
    },
    /*material_icon__material_icon.IconSize.xLarge*/get xLarge() {
      return "x-large";
    },
    /*material_icon__material_icon.IconSize.values*/get values() {
      return dart.constList(["", "x-small", "small", "medium", "large", "x-large"], core.String);
    }
  });
  dart.trackLibraries("packages/angular_components/material_icon/material_icon.ddc", {
    "package:angular_components/material_icon/material_icon.dart": material_icon__material_icon
  }, '{"version":3,"sourceRoot":"","sources":["material_icon.dart"],"names":[],"mappings":";;;;;;;;;;;;MAYmB,0CAAa;YAAG,iBACjC,cACA,iBACA,gBACA,iBACA,mBACA,iBACA,aACA,cACA,eACA,aACA;;;;;;aA2CS,KAAa;AACpB,iBAAK,GAAG,KAAK;AACb,oBAAI,0CAAa,WAAS,CAAC,aAAQ,IAAG;AACpC,sBAAQ,eAAa,CAAC,QAAQ;;IAElC;IAIO;;;;;;;wDAKgB,WAAK,eAAW,WAAK,YAAQ,WAAK;;;;IALlD,eAAS;IAER,WAAK;IAOc,cAAQ;EAAC;;;;;;;;;;;;;;;;;;;EAatC;;;MARe,iDAAW;YAAG;;MACd,4CAAM;YAAG;;MACT,2CAAK;YAAG;;MACR,4CAAM;YAAG;;MACT,2CAAK;YAAG;;MACR,4CAAM;YAAG;;MAET,4CAAM;YAAG,iBAAC,EAAW,EAAE,SAAM,EAAE,OAAK,EAAE,QAAM,EAAE,OAAK,EAAE,SAAM","file":"material_icon.ddc.js"}');
  // Exports:
  return {
    material_icon__material_icon: material_icon__material_icon
  };
});

//# sourceMappingURL=material_icon.ddc.js.map
