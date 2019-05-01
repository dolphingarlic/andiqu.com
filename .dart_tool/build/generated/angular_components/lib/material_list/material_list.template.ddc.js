define(['dart_sdk', 'packages/angular_components/material_list/material_list.scss.css.shim', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular/src/bootstrap/modules', 'packages/angular_components/material_list/material_list', 'packages/angular_components/material_list/material_list_size.template', 'packages/angular/angular.template', 'packages/angular_components/model/ui/accepts_width.template', 'packages/angular_components/utils/angular/properties/properties.template'], function(dart_sdk, material_list$46scss$46css, view_type, change_detection, modules, material_list, material_list_size, angular, accepts_width, properties) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const material_list__material_list$46scss$46css$46shim = material_list$46scss$46css.material_list__material_list$46scss$46css$46shim;
  const src__core__linker__view_type = view_type.src__core__linker__view_type;
  const src__core__change_detection__constants = change_detection.src__core__change_detection__constants;
  const src__runtime__optimizations = change_detection.src__runtime__optimizations;
  const src__core__metadata__view = change_detection.src__core__metadata__view;
  const src__di__reflector = change_detection.src__di__reflector;
  const src__core__linker__app_view_utils = modules.src__core__linker__app_view_utils;
  const src__core__linker__app_view = modules.src__core__linker__app_view;
  const src__core__linker__component_factory = modules.src__core__linker__component_factory;
  const material_list__material_list = material_list.material_list__material_list;
  const material_list__material_list_size$46template = material_list_size.material_list__material_list_size$46template;
  const angular$46template = angular.angular$46template;
  const model__ui__accepts_width$46template = accepts_width.model__ui__accepts_width$46template;
  const utils__angular__properties__properties$46template = properties.utils__angular__properties__properties$46template;
  const _root = Object.create(null);
  const material_list__material_list$46template = Object.create(_root);
  const $createElement = dartx.createElement;
  const $toString = dartx.toString;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let ComponentRefOfMaterialListComponent = () => (ComponentRefOfMaterialListComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(material_list__material_list.MaterialListComponent)))();
  let AppViewOfMaterialListComponent = () => (AppViewOfMaterialListComponent = dart.constFn(src__core__linker__app_view.AppView$(material_list__material_list.MaterialListComponent)))();
  let AppViewAndintToAppViewOfMaterialListComponent = () => (AppViewAndintToAppViewOfMaterialListComponent = dart.constFn(dart.fnType(AppViewOfMaterialListComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfMaterialListComponent = () => (ComponentFactoryOfMaterialListComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(material_list__material_list.MaterialListComponent)))();
  dart.defineLazy(material_list__material_list$46template, {
    /*material_list__material_list$46template.styles$MaterialListComponent*/get styles$MaterialListComponent() {
      return [material_list__material_list$46scss$46css$46shim.styles];
    }
  });
  const _expr_0 = Symbol('_expr_0');
  let const$;
  material_list__material_list$46template.ViewMaterialListComponent0 = class ViewMaterialListComponent0 extends src__core__linker__app_view.AppView$(material_list__material_list.MaterialListComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      this.project(parentRenderNode, 0);
      this.init(const$ || (const$ = dart.constList([], dart.dynamic)), null);
      return null;
    }
    detectHostChanges(firstCheck) {
      let currVal_0 = this.ctx.size;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this.setAttr(this.rootEl, "size", currVal_0 == null ? null : dart.toString(currVal_0));
        this[_expr_0] = currVal_0;
      }
    }
  };
  (material_list__material_list$46template.ViewMaterialListComponent0.new = function(parentView, parentIndex) {
    this[_expr_0] = null;
    material_list__material_list$46template.ViewMaterialListComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckOnce);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("material-list"));
    let t = material_list__material_list$46template.ViewMaterialListComponent0._renderType;
    t == null ? material_list__material_list$46template.ViewMaterialListComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType(dart.test(src__runtime__optimizations.isDevMode) ? "asset:angular_components/lib/material_list/material_list.dart" : null, src__core__metadata__view.ViewEncapsulation.Emulated, material_list__material_list$46template.styles$MaterialListComponent) : t;
    this.setupComponentType(material_list__material_list$46template.ViewMaterialListComponent0._renderType);
  }).prototype = material_list__material_list$46template.ViewMaterialListComponent0.prototype;
  dart.addTypeTests(material_list__material_list$46template.ViewMaterialListComponent0);
  dart.setMethodSignature(material_list__material_list$46template.ViewMaterialListComponent0, () => ({
    __proto__: dart.getMethods(material_list__material_list$46template.ViewMaterialListComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_list__material_list.MaterialListComponent), []),
    detectHostChanges: dart.fnType(dart.void, [core.bool])
  }));
  dart.setFieldSignature(material_list__material_list$46template.ViewMaterialListComponent0, () => ({
    __proto__: dart.getFields(material_list__material_list$46template.ViewMaterialListComponent0.__proto__),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  dart.defineLazy(material_list__material_list$46template.ViewMaterialListComponent0, {
    /*material_list__material_list$46template.ViewMaterialListComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  material_list__material_list$46template.viewFactory_MaterialListComponent0 = function(parentView, parentIndex) {
    return new material_list__material_list$46template.ViewMaterialListComponent0.new(parentView, parentIndex);
  };
  dart.defineLazy(material_list__material_list$46template, {
    /*material_list__material_list$46template.styles$MaterialListComponentHost*/get styles$MaterialListComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0 = Symbol('_compView_0');
  const _MaterialListComponent_0_5 = Symbol('_MaterialListComponent_0_5');
  material_list__material_list$46template._ViewMaterialListComponentHost0 = class _ViewMaterialListComponentHost0 extends src__core__linker__app_view.AppView$(material_list__material_list.MaterialListComponent) {
    build() {
      this[_compView_0] = new material_list__material_list$46template.ViewMaterialListComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_MaterialListComponent_0_5] = new material_list__material_list.MaterialListComponent.new();
      this[_compView_0].create(this[_MaterialListComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfMaterialListComponent()).new(0, this, this.rootEl, this[_MaterialListComponent_0_5]);
    }
    detectChangesInternal() {
      let changed = false;
      let firstCheck = this.cdState === 0;
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      this[_compView_0].detectHostChanges(firstCheck);
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
    }
  };
  (material_list__material_list$46template._ViewMaterialListComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_MaterialListComponent_0_5] = null;
    material_list__material_list$46template._ViewMaterialListComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = material_list__material_list$46template._ViewMaterialListComponentHost0.prototype;
  dart.addTypeTests(material_list__material_list$46template._ViewMaterialListComponentHost0);
  dart.setMethodSignature(material_list__material_list$46template._ViewMaterialListComponentHost0, () => ({
    __proto__: dart.getMethods(material_list__material_list$46template._ViewMaterialListComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_list__material_list.MaterialListComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_list__material_list$46template._ViewMaterialListComponentHost0, () => ({
    __proto__: dart.getFields(material_list__material_list$46template._ViewMaterialListComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(material_list__material_list$46template.ViewMaterialListComponent0),
    [_MaterialListComponent_0_5]: dart.fieldType(material_list__material_list.MaterialListComponent)
  }));
  material_list__material_list$46template.viewFactory_MaterialListComponentHost0 = function(parentView, parentIndex) {
    return new material_list__material_list$46template._ViewMaterialListComponentHost0.new(parentView, parentIndex);
  };
  dart.defineLazy(material_list__material_list$46template, {
    /*material_list__material_list$46template._MaterialListComponentNgFactory*/get _MaterialListComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfMaterialListComponent()).new("material-list", dart.fn(material_list__material_list$46template.viewFactory_MaterialListComponentHost0, AppViewAndintToAppViewOfMaterialListComponent())));
    }
  });
  dart.copyProperties(material_list__material_list$46template, {
    get MaterialListComponentNgFactory() {
      return material_list__material_list$46template._MaterialListComponentNgFactory;
    }
  });
  dart.defineLazy(material_list__material_list$46template, {
    /*material_list__material_list$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  material_list__material_list$46template.initReflector = function() {
    if (dart.test(material_list__material_list$46template._visited)) {
      return;
    }
    material_list__material_list$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(material_list__material_list.MaterialListComponent), material_list__material_list$46template.MaterialListComponentNgFactory);
    material_list__material_list_size$46template.initReflector();
    material_list__material_list_size$46template.initReflector();
    angular$46template.initReflector();
    model__ui__accepts_width$46template.initReflector();
    utils__angular__properties__properties$46template.initReflector();
  };
  dart.trackLibraries("packages/angular_components/material_list/material_list.template.ddc", {
    "package:angular_components/material_list/material_list.template.dart": material_list__material_list$46template
  }, '{"version":3,"sourceRoot":"","sources":["material_list.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MA4BoB,oEAA4B;YAAG,EAAS,uDAAM;;;;;;;AAY9D,UAAM,UAAU,WAAM;AACtB,UAA0B,mBAAmB,iBAAY,CAAC,OAAO;AACjE,kBAAO,CAAC,gBAAgB,EAAE;AAC1B,eAAI,CAAC,uDAAU;AACf,YAAO;IACT;sBAEuB,UAAe;AACpC,UAAM,YAAY,QAAG,KAAK;AAC1B,oBAAI,AAAQ,8CAAY,CAAC,aAAO,EAAE,SAAS,IAAG;AAC5C,oBAAO,CAAC,WAAM,EAAE,QAAQ,SAAS,gCAAT,SAAS;AACjC,qBAAO,GAAG,SAAS;;IAEvB;;qFApB2B,UAA2B,EAAE,WAAe;IAFnE,aAAO;AAEgE,gGAAM,qCAAgB,UAAU,EAAE,2CAAI,UAAU,EAAE,WAAW,EAAE,8DAAuB,UAAU;AACzK,eAAM,2BAAG,AAAQ,aAAQ,gBAAc,CAAC;AACxC,0FAAW;gBAAX,8EAAW,GAAK,AAAQ,8CAAY,iBAAiB,CAAE,UAAQ,qCAAS,IAAG,kEAAkE,MAAO,2CAAiB,SAAS,EAAE,oEAA4B;AAC5M,2BAAkB,CAAC,8EAAW;EAChC;;;;;;;;;;;;MAL2B,8EAAW;;;;;wFAwBkC,UAA2B,EAAE,WAAe;AACpH,eAAO,sEAA0B,CAAC,UAAU,EAAE,WAAW;EAC3D;;MAEoB,wEAAgC;YAAG;;;;;;;AAQnD,uBAAW,OAAG,sEAA0B,CAAC,MAAM;AAC/C,iBAAM,GAAG,iBAAW,OAAO;AAC3B,sCAA0B,OAAG,sDAA6B;AAC1D,uBAAW,OAAO,CAAC,gCAA0B,EAAE,qBAAgB;AAC/D,gBAAK,CAAC,WAAM;AACZ,iBAAO,2CAAY,CAAC,GAAG,MAAM,WAAM,EAAE,gCAA0B;IACjE;;AAIE,UAAK,UAAU;AACf,UAAK,aAAc,YAAY,KAAI;AACnC,UAAI,OAAO,EAAE;AACX,yBAAW,gBAAgB;;AAE7B,uBAAW,kBAAkB,CAAC,UAAU;AACxC,uBAAW,cAAc;IAC3B;;AAIE,+BAAW;;IACb;;0FAzBgC,UAA2B,EAAE,WAAe;IAFjD,iBAAW;IACR,gCAA0B;AACwB,qGAAM,qCAAgB,KAAK,EAAE,2CAAI,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;EAAC;;;;;;;;;;;;;4FA4BlG,UAA2B,EAAE,WAAe;AACxH,eAAO,2EAA+B,CAAC,UAAU,EAAE,WAAW;EAChE;;MAEsD,uEAA+B;YAAG,gBAAM,+CAAgB,CAAC,iBAAiB,wIAAsC;;;;;AAEpK,YAAO,wEAA+B;IACxC;;;MAEI,gDAAQ;YAAG;;;;;AAEb,kBAAI,gDAAQ,GAAE;AACZ;;AAEF,uDAAW;AAEX,IAAO,oCAAiB,CAAC,iEAAqB,EAAE,sEAA8B;AAC9E,IAAM,0DAAa;AACnB,IAAM,0DAAa;AACnB,IAAM,gCAAa;AACnB,IAAM,iDAAa;AACnB,IAAM,+DAAa;EACrB","file":"material_list.template.ddc.js"}');
  // Exports:
  return {
    material_list__material_list$46template: material_list__material_list$46template
  };
});

//# sourceMappingURL=material_list.template.ddc.js.map
