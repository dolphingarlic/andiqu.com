define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const model__ui__has_renderer = Object.create(_root);
  const $_get = dartx._get;
  const $_set = dartx._set;
  let dynamicToString = () => (dynamicToString = dart.constFn(dart.fnType(core.String, [dart.dynamic])))();
  const _is_HasRenderer_default = Symbol('_is_HasRenderer_default');
  model__ui__has_renderer.HasRenderer$ = dart.generic(T => {
    let TToString = () => (TToString = dart.constFn(dart.fnType(core.String, [T])))();
    class HasRenderer extends core.Object {
      get itemRenderer() {
        return this[itemRenderer];
      }
      set itemRenderer(value) {
        this[itemRenderer] = value;
      }
    }
    (HasRenderer.new = function() {
      this[itemRenderer] = null;
    }).prototype = HasRenderer.prototype;
    dart.addTypeTests(HasRenderer);
    HasRenderer.prototype[_is_HasRenderer_default] = true;
    const itemRenderer = Symbol("HasRenderer.itemRenderer");
    dart.setFieldSignature(HasRenderer, () => ({
      __proto__: dart.getFields(HasRenderer.__proto__),
      itemRenderer: dart.fieldType(TToString())
    }));
    return HasRenderer;
  });
  model__ui__has_renderer.HasRenderer = model__ui__has_renderer.HasRenderer$();
  dart.addTypeTests(model__ui__has_renderer.HasRenderer, _is_HasRenderer_default);
  dart.defineLazy(model__ui__has_renderer, {
    /*model__ui__has_renderer._rendererMarker*/get _rendererMarker() {
      return new core.Expando.new("Renderer marker");
    }
  });
  model__ui__has_renderer.newCachingItemRenderer = function(T, itemRenderer) {
    if (itemRenderer != null && model__ui__has_renderer._rendererMarker._get(itemRenderer) != null) {
      return itemRenderer;
    }
    let _cache = new (_js_helper.LinkedMap$(T, core.String)).new();
    let cachingItemRenderer = item => {
      let value = _cache[$_get](item);
      if (value == null) {
        value = itemRenderer(item);
        _cache[$_set](item, value);
      }
      return value;
    };
    dart.fn(cachingItemRenderer, dart.fnType(core.String, [T]));
    model__ui__has_renderer._rendererMarker._set(cachingItemRenderer, cachingItemRenderer);
    return cachingItemRenderer;
  };
  const _is_RendersValue_default = Symbol('_is_RendersValue_default');
  model__ui__has_renderer.RendersValue$ = dart.generic(T => {
    class RendersValue extends core.Object {}
    (RendersValue.new = function() {
    }).prototype = RendersValue.prototype;
    dart.addTypeTests(RendersValue);
    RendersValue.prototype[_is_RendersValue_default] = true;
    return RendersValue;
  });
  model__ui__has_renderer.RendersValue = model__ui__has_renderer.RendersValue$();
  dart.addTypeTests(model__ui__has_renderer.RendersValue, _is_RendersValue_default);
  const _is_HasComponentRenderer_default = Symbol('_is_HasComponentRenderer_default');
  model__ui__has_renderer.HasComponentRenderer$ = dart.generic((T, I) => {
    let IToType = () => (IToType = dart.constFn(dart.fnType(core.Type, [I])))();
    class HasComponentRenderer extends core.Object {
      get componentRenderer() {
        return this[componentRenderer];
      }
      set componentRenderer(value) {
        this[componentRenderer] = value;
      }
    }
    (HasComponentRenderer.new = function() {
      this[componentRenderer] = null;
    }).prototype = HasComponentRenderer.prototype;
    dart.addTypeTests(HasComponentRenderer);
    HasComponentRenderer.prototype[_is_HasComponentRenderer_default] = true;
    const componentRenderer = Symbol("HasComponentRenderer.componentRenderer");
    dart.setFieldSignature(HasComponentRenderer, () => ({
      __proto__: dart.getFields(HasComponentRenderer.__proto__),
      componentRenderer: dart.fieldType(IToType())
    }));
    return HasComponentRenderer;
  });
  model__ui__has_renderer.HasComponentRenderer = model__ui__has_renderer.HasComponentRenderer$();
  dart.addTypeTests(model__ui__has_renderer.HasComponentRenderer, _is_HasComponentRenderer_default);
  model__ui__has_renderer.defaultItemRenderer = function(value) {
    return dart.str(value);
  };
  dart.defineLazy(model__ui__has_renderer, {
    /*model__ui__has_renderer.nullRenderer*/get nullRenderer() {
      return dart.fn(model__ui__has_renderer._nullRenderer, dynamicToString());
    }
  });
  model__ui__has_renderer._nullRenderer = function(value) {
    return dart.throw(new core.StateError.new("nullRenderer should never be called"));
  };
  dart.trackLibraries("packages/angular_components/model/ui/has_renderer.ddc", {
    "package:angular_components/model/ui/has_renderer.dart": model__ui__has_renderer
  }, '{"version":3,"sourceRoot":"","sources":["has_renderer.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;MASkB;;;;;;;;wBAAY;IAC9B;;;;;;;;;;;;;MAEM,uCAAe;iBAAG,gBAAO,CAAC;;;+DAOU,YAA4B;AACpE,QAAI,YAAY,IAAI,QAAQ,uCAAe,MAAC,YAAY,KAAK,MAAM;AACjE,YAAO,aAAY;;AAErB,QAAI,SAAS;AACb,QAAgB,sBAAuB,IAAM;AAC3C,UAAO,QAAQ,MAAM,QAAC,IAAI;AAC1B,UAAI,KAAK,IAAI,MAAM;AACjB,aAAK,GAAG,YAAY,CAAC,IAAI;AACzB,cAAM,QAAC,IAAI,EAAI,KAAK;;AAEtB,YAAO,MAAK;;YANE;AAQhB,2CAAe,MAAC,mBAAmB,EAAI,mBAAmB;AAE1D,UAAO,oBAAmB;EAC5B;;;;;IASA;;;;;;;;;;;MAW0B;;;;;;;;6BAAiB;IAC3C;;;;;;;;;;;;yDAE2B,KAAa;UAAK,UAAE,KAAK;EAAC;;MAGlC,oCAAY;YAAG,kEAAa;;;mDAE1B,KAAa;UAC9B,gBAAM,mBAAU,CAAC;EAAsC","file":"has_renderer.ddc.js"}');
  // Exports:
  return {
    model__ui__has_renderer: model__ui__has_renderer
  };
});

//# sourceMappingURL=has_renderer.ddc.js.map
