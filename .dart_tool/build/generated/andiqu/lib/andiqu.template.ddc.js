define(['dart_sdk', 'packages/andiqu/andiqu.css.shim', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular/src/bootstrap/modules', 'packages/andiqu/src/about/about', 'packages/andiqu/andiqu', 'packages/angular_components/utils/browser/window/module', 'packages/angular_components/utils/browser/dom_service/dom_service', 'packages/angular_components/utils/disposer/disposer', 'packages/angular/src/core/zone/ng_zone', 'packages/angular_components/utils/browser/dom_service/angular_2', 'packages/angular_components/utils/angular/imperative_view/imperative_view', 'packages/angular_components/laminate/ruler/dom_ruler', 'packages/angular_components/utils/angular/managed_zone/angular_2', 'packages/angular_components/laminate/overlay/module', 'packages/angular_components/src/laminate/overlay/overlay_ref', 'packages/angular_components/laminate/overlay/zindexer', 'packages/angular_components/laminate/enums/alignment', 'packages/angular_components/src/laminate/popup/dom_popup_source', 'packages/quiver/time', 'packages/angular_components/src/utils/angular/managed_zone/managed_zone', 'packages/angular/angular.template', 'packages/angular_components/angular_components.template', 'packages/angular_components/material_slider/material_slider.template', 'packages/angular_components/material_slider/material_slider', 'packages/angular_components/interfaces/has_disabled'], function(dart_sdk, andiqu$46css, view_type, change_detection, modules, about, andiqu, module, dom_service, disposer, ng_zone, angular_2, imperative_view, dom_ruler, angular_2$, module$, overlay_ref, zindexer, alignment, dom_popup_source, time, managed_zone, angular, angular_components, material_slider, material_slider$, has_disabled) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const andiqu$46css$46shim = andiqu$46css.andiqu$46css$46shim;
  const src__core__linker__view_type = view_type.src__core__linker__view_type;
  const src__core__change_detection__constants = change_detection.src__core__change_detection__constants;
  const src__runtime__optimizations = change_detection.src__runtime__optimizations;
  const src__core__metadata__view = change_detection.src__core__metadata__view;
  const src__core__di__opaque_token = change_detection.src__core__di__opaque_token;
  const src__di__reflector = change_detection.src__di__reflector;
  const src__core__linker__app_view_utils = modules.src__core__linker__app_view_utils;
  const src__core__linker__app_view = modules.src__core__linker__app_view;
  const src__core__linker__component_factory = modules.src__core__linker__component_factory;
  const src__core__linker__component_loader = modules.src__core__linker__component_loader;
  const src__home__home = about.src__home__home;
  const src__about__about = about.src__about__about;
  const src__signature__signature = about.src__signature__signature;
  const src__experience__experience = about.src__experience__experience;
  const andiqu$ = andiqu.andiqu;
  const utils__browser__window__module = module.utils__browser__window__module;
  const utils__browser__dom_service__dom_service = dom_service.utils__browser__dom_service__dom_service;
  const utils__disposer__disposer = disposer.utils__disposer__disposer;
  const src__core__zone__ng_zone = ng_zone.src__core__zone__ng_zone;
  const utils__browser__dom_service__angular_2 = angular_2.utils__browser__dom_service__angular_2;
  const utils__angular__imperative_view__imperative_view = imperative_view.utils__angular__imperative_view__imperative_view;
  const laminate__ruler__dom_ruler = dom_ruler.laminate__ruler__dom_ruler;
  const utils__angular__managed_zone__angular_2 = angular_2$.utils__angular__managed_zone__angular_2;
  const laminate__overlay__module = module$.laminate__overlay__module;
  const src__laminate__overlay__render__overlay_style_config = overlay_ref.src__laminate__overlay__render__overlay_style_config;
  const src__laminate__overlay__render__overlay_dom_render_service = overlay_ref.src__laminate__overlay__render__overlay_dom_render_service;
  const src__laminate__overlay__overlay_service = overlay_ref.src__laminate__overlay__overlay_service;
  const laminate__overlay__zindexer = zindexer.laminate__overlay__zindexer;
  const laminate__enums__alignment = alignment.laminate__enums__alignment;
  const src__laminate__popup__dom_popup_source = dom_popup_source.src__laminate__popup__dom_popup_source;
  const time$ = time.time;
  const src__utils__angular__managed_zone__managed_zone = managed_zone.src__utils__angular__managed_zone__managed_zone;
  const angular$46template = angular.angular$46template;
  const angular_components$46template = angular_components.angular_components$46template;
  const material_slider__material_slider$46template = material_slider.material_slider__material_slider$46template;
  const material_slider__material_slider = material_slider$.material_slider__material_slider;
  const interfaces__has_disabled = has_disabled.interfaces__has_disabled;
  const _root = Object.create(null);
  const andiqu$46template = Object.create(_root);
  const src__about__about$46css$46shim = Object.create(_root);
  const src__about__about$46template = Object.create(_root);
  const src__experience__experience$46css$46shim = Object.create(_root);
  const src__experience__experience$46template = Object.create(_root);
  const src__home__home$46css$46shim = Object.create(_root);
  const src__home__home$46template = Object.create(_root);
  const src__signature__signature$46css$46shim = Object.create(_root);
  const src__signature__signature$46template = Object.create(_root);
  const $createElement = dartx.createElement;
  const $append = dartx.append;
  const $createElementNS = dartx.createElementNS;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let ComponentRefOfAppComponent = () => (ComponentRefOfAppComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(andiqu$.AppComponent)))();
  let ListOfRelativePosition = () => (ListOfRelativePosition = dart.constFn(core.List$(laminate__enums__alignment.RelativePosition)))();
  let OpaqueTokenOfListOfRelativePosition = () => (OpaqueTokenOfListOfRelativePosition = dart.constFn(src__core__di__opaque_token.OpaqueToken$(ListOfRelativePosition())))();
  let AppViewOfAppComponent = () => (AppViewOfAppComponent = dart.constFn(src__core__linker__app_view.AppView$(andiqu$.AppComponent)))();
  let AppViewAndintToAppViewOfAppComponent = () => (AppViewAndintToAppViewOfAppComponent = dart.constFn(dart.fnType(AppViewOfAppComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfAppComponent = () => (ComponentFactoryOfAppComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(andiqu$.AppComponent)))();
  let ComponentRefOfAboutComponent = () => (ComponentRefOfAboutComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(src__about__about.AboutComponent)))();
  let AppViewOfAboutComponent = () => (AppViewOfAboutComponent = dart.constFn(src__core__linker__app_view.AppView$(src__about__about.AboutComponent)))();
  let AppViewAndintToAppViewOfAboutComponent = () => (AppViewAndintToAppViewOfAboutComponent = dart.constFn(dart.fnType(AppViewOfAboutComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfAboutComponent = () => (ComponentFactoryOfAboutComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(src__about__about.AboutComponent)))();
  let ComponentRefOfExperienceComponent = () => (ComponentRefOfExperienceComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(src__experience__experience.ExperienceComponent)))();
  let AppViewOfExperienceComponent = () => (AppViewOfExperienceComponent = dart.constFn(src__core__linker__app_view.AppView$(src__experience__experience.ExperienceComponent)))();
  let AppViewAndintToAppViewOfExperienceComponent = () => (AppViewAndintToAppViewOfExperienceComponent = dart.constFn(dart.fnType(AppViewOfExperienceComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfExperienceComponent = () => (ComponentFactoryOfExperienceComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(src__experience__experience.ExperienceComponent)))();
  let ComponentRefOfHomeComponent = () => (ComponentRefOfHomeComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(src__home__home.HomeComponent)))();
  let AppViewOfHomeComponent = () => (AppViewOfHomeComponent = dart.constFn(src__core__linker__app_view.AppView$(src__home__home.HomeComponent)))();
  let AppViewAndintToAppViewOfHomeComponent = () => (AppViewAndintToAppViewOfHomeComponent = dart.constFn(dart.fnType(AppViewOfHomeComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfHomeComponent = () => (ComponentFactoryOfHomeComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(src__home__home.HomeComponent)))();
  let ComponentRefOfSignatureComponent = () => (ComponentRefOfSignatureComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(src__signature__signature.SignatureComponent)))();
  let AppViewOfSignatureComponent = () => (AppViewOfSignatureComponent = dart.constFn(src__core__linker__app_view.AppView$(src__signature__signature.SignatureComponent)))();
  let AppViewAndintToAppViewOfSignatureComponent = () => (AppViewAndintToAppViewOfSignatureComponent = dart.constFn(dart.fnType(AppViewOfSignatureComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfSignatureComponent = () => (ComponentFactoryOfSignatureComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(src__signature__signature.SignatureComponent)))();
  dart.defineLazy(andiqu$46template, {
    /*andiqu$46template.styles$AppComponent*/get styles$AppComponent() {
      return [andiqu$46css$46shim.styles];
    }
  });
  const _el_0 = Symbol('_el_0');
  const _el_1 = Symbol('_el_1');
  const _compView_1 = Symbol('_compView_1');
  const _HomeComponent_1_5 = Symbol('_HomeComponent_1_5');
  const _el_2 = Symbol('_el_2');
  const _compView_2 = Symbol('_compView_2');
  const _AboutComponent_2_5 = Symbol('_AboutComponent_2_5');
  const _el_3 = Symbol('_el_3');
  const _compView_3 = Symbol('_compView_3');
  const _SignatureComponent_3_5 = Symbol('_SignatureComponent_3_5');
  const _el_4 = Symbol('_el_4');
  const _el_5 = Symbol('_el_5');
  const _compView_5 = Symbol('_compView_5');
  const _ExperienceComponent_5_5 = Symbol('_ExperienceComponent_5_5');
  let const$;
  andiqu$46template.ViewAppComponent0 = class ViewAppComponent0 extends src__core__linker__app_view.AppView$(andiqu$.AppComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      this[_el_0] = src__core__linker__app_view.createAndAppend(doc, "main", parentRenderNode);
      this.createAttr(this[_el_0], "id", "introduction");
      this.addShimE(this[_el_0]);
      this[_compView_1] = new src__home__home$46template.ViewHomeComponent0.new(this, 1);
      this[_el_1] = this[_compView_1].rootEl;
      this[_el_0][$append](this[_el_1]);
      this.addShimC(html.HtmlElement._check(this[_el_1]));
      this[_HomeComponent_1_5] = new src__home__home.HomeComponent.new();
      this[_compView_1].create(this[_HomeComponent_1_5], []);
      this[_compView_2] = new src__about__about$46template.ViewAboutComponent0.new(this, 2);
      this[_el_2] = this[_compView_2].rootEl;
      this[_el_0][$append](this[_el_2]);
      this.addShimC(html.HtmlElement._check(this[_el_2]));
      this[_AboutComponent_2_5] = new src__about__about.AboutComponent.new();
      this[_compView_2].create(this[_AboutComponent_2_5], []);
      this[_compView_3] = new src__signature__signature$46template.ViewSignatureComponent0.new(this, 3);
      this[_el_3] = this[_compView_3].rootEl;
      this[_el_0][$append](this[_el_3]);
      this.addShimC(html.HtmlElement._check(this[_el_3]));
      this[_SignatureComponent_3_5] = new src__signature__signature.SignatureComponent.new();
      this[_compView_3].create(this[_SignatureComponent_3_5], []);
      this[_el_4] = src__core__linker__app_view.createAndAppend(doc, "main", parentRenderNode);
      this.createAttr(this[_el_4], "id", "experience");
      this.addShimE(this[_el_4]);
      this[_compView_5] = new src__experience__experience$46template.ViewExperienceComponent0.new(this, 5);
      this[_el_5] = this[_compView_5].rootEl;
      this[_el_4][$append](this[_el_5]);
      this.addShimC(html.HtmlElement._check(this[_el_5]));
      this[_ExperienceComponent_5_5] = new src__experience__experience.ExperienceComponent.new();
      this[_compView_5].create(this[_ExperienceComponent_5_5], []);
      this.init(const$ || (const$ = dart.constList([], dart.dynamic)), null);
      return null;
    }
    detectChangesInternal() {
      let firstCheck = this.cdState === 0;
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_SignatureComponent_3_5].ngOnInit();
      }
      this[_compView_1].detectChanges();
      this[_compView_2].detectChanges();
      this[_compView_3].detectChanges();
      this[_compView_5].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_1];
      t == null ? null : t.destroy();
      let t$ = this[_compView_2];
      t$ == null ? null : t$.destroy();
      let t$0 = this[_compView_3];
      t$0 == null ? null : t$0.destroy();
      let t$1 = this[_compView_5];
      t$1 == null ? null : t$1.destroy();
    }
  };
  (andiqu$46template.ViewAppComponent0.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_el_1] = null;
    this[_compView_1] = null;
    this[_HomeComponent_1_5] = null;
    this[_el_2] = null;
    this[_compView_2] = null;
    this[_AboutComponent_2_5] = null;
    this[_el_3] = null;
    this[_compView_3] = null;
    this[_SignatureComponent_3_5] = null;
    this[_el_4] = null;
    this[_el_5] = null;
    this[_compView_5] = null;
    this[_ExperienceComponent_5_5] = null;
    andiqu$46template.ViewAppComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("andiqu"));
    let t = andiqu$46template.ViewAppComponent0._renderType;
    t == null ? andiqu$46template.ViewAppComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType(dart.test(src__runtime__optimizations.isDevMode) ? "asset:andiqu/lib/andiqu.dart" : null, src__core__metadata__view.ViewEncapsulation.Emulated, andiqu$46template.styles$AppComponent) : t;
    this.setupComponentType(andiqu$46template.ViewAppComponent0._renderType);
  }).prototype = andiqu$46template.ViewAppComponent0.prototype;
  dart.addTypeTests(andiqu$46template.ViewAppComponent0);
  dart.setMethodSignature(andiqu$46template.ViewAppComponent0, () => ({
    __proto__: dart.getMethods(andiqu$46template.ViewAppComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(andiqu$.AppComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(andiqu$46template.ViewAppComponent0, () => ({
    __proto__: dart.getFields(andiqu$46template.ViewAppComponent0.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_el_1]: dart.fieldType(html.Element),
    [_compView_1]: dart.fieldType(src__home__home$46template.ViewHomeComponent0),
    [_HomeComponent_1_5]: dart.fieldType(src__home__home.HomeComponent),
    [_el_2]: dart.fieldType(html.Element),
    [_compView_2]: dart.fieldType(src__about__about$46template.ViewAboutComponent0),
    [_AboutComponent_2_5]: dart.fieldType(src__about__about.AboutComponent),
    [_el_3]: dart.fieldType(html.Element),
    [_compView_3]: dart.fieldType(src__signature__signature$46template.ViewSignatureComponent0),
    [_SignatureComponent_3_5]: dart.fieldType(src__signature__signature.SignatureComponent),
    [_el_4]: dart.fieldType(html.Element),
    [_el_5]: dart.fieldType(html.Element),
    [_compView_5]: dart.fieldType(src__experience__experience$46template.ViewExperienceComponent0),
    [_ExperienceComponent_5_5]: dart.fieldType(src__experience__experience.ExperienceComponent)
  }));
  dart.defineLazy(andiqu$46template.ViewAppComponent0, {
    /*andiqu$46template.ViewAppComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  andiqu$46template.viewFactory_AppComponent0 = function(parentView, parentIndex) {
    return new andiqu$46template.ViewAppComponent0.new(parentView, parentIndex);
  };
  dart.defineLazy(andiqu$46template, {
    /*andiqu$46template.styles$AppComponentHost*/get styles$AppComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0 = Symbol('_compView_0');
  const _AppComponent_0_5 = Symbol('_AppComponent_0_5');
  const __Document_0_6 = Symbol('__Document_0_6');
  const __Window_0_7 = Symbol('__Window_0_7');
  const __DomService_0_8 = Symbol('__DomService_0_8');
  const __AcxImperativeViewUtils_0_9 = Symbol('__AcxImperativeViewUtils_0_9');
  const __DomRuler_0_10 = Symbol('__DomRuler_0_10');
  const __ManagedZone_0_11 = Symbol('__ManagedZone_0_11');
  const __overlayContainerName_0_12 = Symbol('__overlayContainerName_0_12');
  const __overlayContainerParent_0_13 = Symbol('__overlayContainerParent_0_13');
  const __overlayContainer_0_14 = Symbol('__overlayContainer_0_14');
  const __overlaySyncDom_0_15 = Symbol('__overlaySyncDom_0_15');
  const __overlayRepositionLoop_0_16 = Symbol('__overlayRepositionLoop_0_16');
  const __OverlayStyleConfig_0_17 = Symbol('__OverlayStyleConfig_0_17');
  const __ZIndexer_0_18 = Symbol('__ZIndexer_0_18');
  const __OverlayDomRenderService_0_19 = Symbol('__OverlayDomRenderService_0_19');
  const __OverlayService_0_20 = Symbol('__OverlayService_0_20');
  const __defaultPopupPositions_0_21 = Symbol('__defaultPopupPositions_0_21');
  const __DomPopupSourceFactory_0_22 = Symbol('__DomPopupSourceFactory_0_22');
  const __Clock_0_23 = Symbol('__Clock_0_23');
  const _Document_0_6 = Symbol('_Document_0_6');
  const _Window_0_7 = Symbol('_Window_0_7');
  const _DomService_0_8 = Symbol('_DomService_0_8');
  const _AcxImperativeViewUtils_0_9 = Symbol('_AcxImperativeViewUtils_0_9');
  const _DomRuler_0_10 = Symbol('_DomRuler_0_10');
  const _ManagedZone_0_11 = Symbol('_ManagedZone_0_11');
  let const$0;
  const _overlayContainerName_0_12 = Symbol('_overlayContainerName_0_12');
  let const$1;
  const _overlayContainerParent_0_13 = Symbol('_overlayContainerParent_0_13');
  let const$2;
  const _overlayContainer_0_14 = Symbol('_overlayContainer_0_14');
  const _overlaySyncDom_0_15 = Symbol('_overlaySyncDom_0_15');
  const _overlayRepositionLoop_0_16 = Symbol('_overlayRepositionLoop_0_16');
  const _OverlayStyleConfig_0_17 = Symbol('_OverlayStyleConfig_0_17');
  const _ZIndexer_0_18 = Symbol('_ZIndexer_0_18');
  const _OverlayDomRenderService_0_19 = Symbol('_OverlayDomRenderService_0_19');
  const _OverlayService_0_20 = Symbol('_OverlayService_0_20');
  let const$3;
  let const$4;
  let const$5;
  let const$6;
  let const$7;
  let const$8;
  let const$9;
  let const$10;
  let const$11;
  let const$12;
  let const$13;
  let const$14;
  let const$15;
  let const$16;
  const _defaultPopupPositions_0_21 = Symbol('_defaultPopupPositions_0_21');
  const _DomPopupSourceFactory_0_22 = Symbol('_DomPopupSourceFactory_0_22');
  let const$17;
  const _Clock_0_23 = Symbol('_Clock_0_23');
  let const$18;
  let const$19;
  let const$20;
  let const$21;
  let const$22;
  let const$23;
  let const$24;
  andiqu$46template._ViewAppComponentHost0 = class _ViewAppComponentHost0 extends src__core__linker__app_view.AppView$(andiqu$.AppComponent) {
    get [_Document_0_6]() {
      if (this[__Document_0_6] == null) {
        this[__Document_0_6] = utils__browser__window__module.getDocument();
      }
      return this[__Document_0_6];
    }
    get [_Window_0_7]() {
      if (this[__Window_0_7] == null) {
        this[__Window_0_7] = utils__browser__window__module.getWindow();
      }
      return this[__Window_0_7];
    }
    get [_DomService_0_8]() {
      if (this[__DomService_0_8] == null) {
        this[__DomService_0_8] = utils__browser__dom_service__angular_2.createDomService(utils__browser__dom_service__dom_service.DomService._check(this.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.viewData.parentIndex, null)), utils__disposer__disposer.Disposer._check(this.injectorGet(dart.wrapType(utils__disposer__disposer.Disposer), this.viewData.parentIndex, null)), src__core__zone__ng_zone.NgZone._check(this.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.viewData.parentIndex)), html.Window._check(this[_Window_0_7]));
      }
      return this[__DomService_0_8];
    }
    get [_AcxImperativeViewUtils_0_9]() {
      if (this[__AcxImperativeViewUtils_0_9] == null) {
        this[__AcxImperativeViewUtils_0_9] = new utils__angular__imperative_view__imperative_view.AcxImperativeViewUtils.new(src__core__linker__component_loader.ComponentLoader._check(this.injectorGet(dart.wrapType(src__core__linker__component_loader.ComponentLoader), this.viewData.parentIndex)), utils__browser__dom_service__dom_service.DomService._check(this[_DomService_0_8]));
      }
      return this[__AcxImperativeViewUtils_0_9];
    }
    get [_DomRuler_0_10]() {
      if (this[__DomRuler_0_10] == null) {
        this[__DomRuler_0_10] = laminate__ruler__dom_ruler.DomRuler.new(html.Document._check(this[_Document_0_6]), utils__browser__dom_service__dom_service.DomService._check(this[_DomService_0_8]));
      }
      return this[__DomRuler_0_10];
    }
    get [_ManagedZone_0_11]() {
      if (this[__ManagedZone_0_11] == null) {
        this[__ManagedZone_0_11] = new utils__angular__managed_zone__angular_2.Angular2ManagedZone.new(src__core__zone__ng_zone.NgZone._check(this.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.viewData.parentIndex)));
      }
      return this[__ManagedZone_0_11];
    }
    get [_overlayContainerName_0_12]() {
      if (this[__overlayContainerName_0_12] == null) {
        this[__overlayContainerName_0_12] = laminate__overlay__module.getDefaultContainerName(this.injectorGet(const$0 || (const$0 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayContainerName"))), this.viewData.parentIndex, null));
      }
      return this[__overlayContainerName_0_12];
    }
    get [_overlayContainerParent_0_13]() {
      if (this[__overlayContainerParent_0_13] == null) {
        this[__overlayContainerParent_0_13] = laminate__overlay__module.getOverlayContainerParent(html.Document._check(this[_Document_0_6]), this.injectorGet(const$1 || (const$1 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayContainerParent"))), this.viewData.parentIndex, null));
      }
      return this[__overlayContainerParent_0_13];
    }
    get [_overlayContainer_0_14]() {
      if (this[__overlayContainer_0_14] == null) {
        this[__overlayContainer_0_14] = laminate__overlay__module.getDefaultContainer(core.String._check(this[_overlayContainerName_0_12]), html.HtmlElement._check(this[_overlayContainerParent_0_13]), this.injectorGet(const$2 || (const$2 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayContainer"))), this.viewData.parentIndex, null));
      }
      return this[__overlayContainer_0_14];
    }
    get [_overlaySyncDom_0_15]() {
      if (this[__overlaySyncDom_0_15] == null) {
        this[__overlaySyncDom_0_15] = true;
      }
      return this[__overlaySyncDom_0_15];
    }
    get [_overlayRepositionLoop_0_16]() {
      if (this[__overlayRepositionLoop_0_16] == null) {
        this[__overlayRepositionLoop_0_16] = true;
      }
      return this[__overlayRepositionLoop_0_16];
    }
    get [_OverlayStyleConfig_0_17]() {
      if (this[__OverlayStyleConfig_0_17] == null) {
        this[__OverlayStyleConfig_0_17] = new src__laminate__overlay__render__overlay_style_config.OverlayStyleConfig.new(html.Document._check(this[_Document_0_6]));
      }
      return this[__OverlayStyleConfig_0_17];
    }
    get [_ZIndexer_0_18]() {
      if (this[__ZIndexer_0_18] == null) {
        this[__ZIndexer_0_18] = laminate__overlay__zindexer.ZIndexer.new();
      }
      return this[__ZIndexer_0_18];
    }
    get [_OverlayDomRenderService_0_19]() {
      if (this[__OverlayDomRenderService_0_19] == null) {
        this[__OverlayDomRenderService_0_19] = new src__laminate__overlay__render__overlay_dom_render_service.OverlayDomRenderService.new(this[_OverlayStyleConfig_0_17], html.HtmlElement._check(this[_overlayContainer_0_14]), core.String._check(this[_overlayContainerName_0_12]), this[_DomRuler_0_10], utils__browser__dom_service__dom_service.DomService._check(this[_DomService_0_8]), this[_AcxImperativeViewUtils_0_9], this[_overlaySyncDom_0_15], this[_overlayRepositionLoop_0_16], this[_ZIndexer_0_18]);
      }
      return this[__OverlayDomRenderService_0_19];
    }
    get [_OverlayService_0_20]() {
      if (this[__OverlayService_0_20] == null) {
        this[__OverlayService_0_20] = new src__laminate__overlay__overlay_service.OverlayService.new(src__core__zone__ng_zone.NgZone._check(this.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.viewData.parentIndex)), this[_overlaySyncDom_0_15], this[_OverlayDomRenderService_0_19], src__laminate__overlay__overlay_service.OverlayService._check(this.injectorGet(dart.wrapType(src__laminate__overlay__overlay_service.OverlayService), this.viewData.parentIndex, null)));
      }
      return this[__OverlayService_0_20];
    }
    get [_defaultPopupPositions_0_21]() {
      if (this[__defaultPopupPositions_0_21] == null) {
        this[__defaultPopupPositions_0_21] = const$16 || (const$16 = dart.constList([const$3 || (const$3 = dart.const(new laminate__enums__alignment.RelativePosition.new({animationOrigin: "top center"}))), const$5 || (const$5 = dart.const(new laminate__enums__alignment.RelativePosition.new({animationOrigin: "top right", originX: const$4 || (const$4 = dart.const(new laminate__enums__alignment.Alignment.new("End", "flex-end")))}))), const$7 || (const$7 = dart.const(new laminate__enums__alignment.RelativePosition.new({animationOrigin: "top left", originX: const$6 || (const$6 = dart.const(new laminate__enums__alignment.Alignment.new("Start", "flex-start")))}))), const$9 || (const$9 = dart.const(new laminate__enums__alignment.RelativePosition.new({animationOrigin: "bottom center", originY: const$8 || (const$8 = dart.const(new laminate__enums__alignment.Alignment.new("End", "flex-end")))}))), const$12 || (const$12 = dart.const(new laminate__enums__alignment.RelativePosition.new({animationOrigin: "bottom right", originX: const$10 || (const$10 = dart.const(new laminate__enums__alignment.Alignment.new("End", "flex-end"))), originY: const$11 || (const$11 = dart.const(new laminate__enums__alignment.Alignment.new("End", "flex-end")))}))), const$15 || (const$15 = dart.const(new laminate__enums__alignment.RelativePosition.new({animationOrigin: "bottom left", originX: const$13 || (const$13 = dart.const(new laminate__enums__alignment.Alignment.new("Start", "flex-start"))), originY: const$14 || (const$14 = dart.const(new laminate__enums__alignment.Alignment.new("End", "flex-end")))})))], laminate__enums__alignment.RelativePosition));
      }
      return this[__defaultPopupPositions_0_21];
    }
    get [_DomPopupSourceFactory_0_22]() {
      if (this[__DomPopupSourceFactory_0_22] == null) {
        this[__DomPopupSourceFactory_0_22] = new src__laminate__popup__dom_popup_source.DomPopupSourceFactory.new(this[_DomRuler_0_10]);
      }
      return this[__DomPopupSourceFactory_0_22];
    }
    get [_Clock_0_23]() {
      if (this[__Clock_0_23] == null) {
        this[__Clock_0_23] = const$17 || (const$17 = dart.const(new time$.Clock.new()));
      }
      return this[__Clock_0_23];
    }
    build() {
      this[_compView_0] = new andiqu$46template.ViewAppComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_AppComponent_0_5] = new andiqu$.AppComponent.new();
      this[_compView_0].create(this[_AppComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfAppComponent()).new(0, this, this.rootEl, this[_AppComponent_0_5]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(html.Document) && 0 === nodeIndex) {
        return this[_Document_0_6];
      }
      if (token === dart.wrapType(html.Window) && 0 === nodeIndex) {
        return this[_Window_0_7];
      }
      if (token === dart.wrapType(utils__browser__dom_service__dom_service.DomService) && 0 === nodeIndex) {
        return this[_DomService_0_8];
      }
      if (token === dart.wrapType(utils__angular__imperative_view__imperative_view.AcxImperativeViewUtils) && 0 === nodeIndex) {
        return this[_AcxImperativeViewUtils_0_9];
      }
      if (token === dart.wrapType(laminate__ruler__dom_ruler.DomRuler) && 0 === nodeIndex) {
        return this[_DomRuler_0_10];
      }
      if (token === dart.wrapType(src__utils__angular__managed_zone__managed_zone.ManagedZone) && 0 === nodeIndex) {
        return this[_ManagedZone_0_11];
      }
      if (token === (const$18 || (const$18 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayContainerName")))) && 0 === nodeIndex) {
        return this[_overlayContainerName_0_12];
      }
      if (token === (const$19 || (const$19 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayContainerParent")))) && 0 === nodeIndex) {
        return this[_overlayContainerParent_0_13];
      }
      if (token === (const$20 || (const$20 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayContainer")))) && 0 === nodeIndex) {
        return this[_overlayContainer_0_14];
      }
      if (token === (const$21 || (const$21 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlaySyncDom")))) && 0 === nodeIndex) {
        return this[_overlaySyncDom_0_15];
      }
      if (token === (const$22 || (const$22 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayRepositionLoop")))) && 0 === nodeIndex) {
        return this[_overlayRepositionLoop_0_16];
      }
      if (token === dart.wrapType(src__laminate__overlay__render__overlay_style_config.OverlayStyleConfig) && 0 === nodeIndex) {
        return this[_OverlayStyleConfig_0_17];
      }
      if (token === dart.wrapType(laminate__overlay__zindexer.ZIndexer) && 0 === nodeIndex) {
        return this[_ZIndexer_0_18];
      }
      if (token === dart.wrapType(src__laminate__overlay__render__overlay_dom_render_service.OverlayDomRenderService) && 0 === nodeIndex) {
        return this[_OverlayDomRenderService_0_19];
      }
      if (token === dart.wrapType(src__laminate__overlay__overlay_service.OverlayService) && 0 === nodeIndex) {
        return this[_OverlayService_0_20];
      }
      if (token === (const$23 || (const$23 = dart.const(new (OpaqueTokenOfListOfRelativePosition()).new("defaultPopupPositions")))) && 0 === nodeIndex) {
        return this[_defaultPopupPositions_0_21];
      }
      if (token === dart.wrapType(src__laminate__popup__dom_popup_source.DomPopupSourceFactory) && 0 === nodeIndex) {
        return this[_DomPopupSourceFactory_0_22];
      }
      if ((token === dart.wrapType(time$.Clock) || token === (const$24 || (const$24 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("third_party.dart_src.acx.material_datepicker.datepickerClock"))))) && 0 === nodeIndex) {
        return this[_Clock_0_23];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
    }
  };
  (andiqu$46template._ViewAppComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_AppComponent_0_5] = null;
    this[__Document_0_6] = null;
    this[__Window_0_7] = null;
    this[__DomService_0_8] = null;
    this[__AcxImperativeViewUtils_0_9] = null;
    this[__DomRuler_0_10] = null;
    this[__ManagedZone_0_11] = null;
    this[__overlayContainerName_0_12] = null;
    this[__overlayContainerParent_0_13] = null;
    this[__overlayContainer_0_14] = null;
    this[__overlaySyncDom_0_15] = null;
    this[__overlayRepositionLoop_0_16] = null;
    this[__OverlayStyleConfig_0_17] = null;
    this[__ZIndexer_0_18] = null;
    this[__OverlayDomRenderService_0_19] = null;
    this[__OverlayService_0_20] = null;
    this[__defaultPopupPositions_0_21] = null;
    this[__DomPopupSourceFactory_0_22] = null;
    this[__Clock_0_23] = null;
    andiqu$46template._ViewAppComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = andiqu$46template._ViewAppComponentHost0.prototype;
  dart.addTypeTests(andiqu$46template._ViewAppComponentHost0);
  dart.setMethodSignature(andiqu$46template._ViewAppComponentHost0, () => ({
    __proto__: dart.getMethods(andiqu$46template._ViewAppComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(andiqu$.AppComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(andiqu$46template._ViewAppComponentHost0, () => ({
    __proto__: dart.getGetters(andiqu$46template._ViewAppComponentHost0.__proto__),
    [_Document_0_6]: dart.dynamic,
    [_Window_0_7]: dart.dynamic,
    [_DomService_0_8]: dart.dynamic,
    [_AcxImperativeViewUtils_0_9]: utils__angular__imperative_view__imperative_view.AcxImperativeViewUtils,
    [_DomRuler_0_10]: laminate__ruler__dom_ruler.DomRuler,
    [_ManagedZone_0_11]: utils__angular__managed_zone__angular_2.Angular2ManagedZone,
    [_overlayContainerName_0_12]: dart.dynamic,
    [_overlayContainerParent_0_13]: dart.dynamic,
    [_overlayContainer_0_14]: dart.dynamic,
    [_overlaySyncDom_0_15]: core.bool,
    [_overlayRepositionLoop_0_16]: core.bool,
    [_OverlayStyleConfig_0_17]: src__laminate__overlay__render__overlay_style_config.OverlayStyleConfig,
    [_ZIndexer_0_18]: laminate__overlay__zindexer.ZIndexer,
    [_OverlayDomRenderService_0_19]: src__laminate__overlay__render__overlay_dom_render_service.OverlayDomRenderService,
    [_OverlayService_0_20]: src__laminate__overlay__overlay_service.OverlayService,
    [_defaultPopupPositions_0_21]: core.List$(laminate__enums__alignment.RelativePosition),
    [_DomPopupSourceFactory_0_22]: src__laminate__popup__dom_popup_source.DomPopupSourceFactory,
    [_Clock_0_23]: time$.Clock
  }));
  dart.setFieldSignature(andiqu$46template._ViewAppComponentHost0, () => ({
    __proto__: dart.getFields(andiqu$46template._ViewAppComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(andiqu$46template.ViewAppComponent0),
    [_AppComponent_0_5]: dart.fieldType(andiqu$.AppComponent),
    [__Document_0_6]: dart.fieldType(dart.dynamic),
    [__Window_0_7]: dart.fieldType(dart.dynamic),
    [__DomService_0_8]: dart.fieldType(dart.dynamic),
    [__AcxImperativeViewUtils_0_9]: dart.fieldType(utils__angular__imperative_view__imperative_view.AcxImperativeViewUtils),
    [__DomRuler_0_10]: dart.fieldType(laminate__ruler__dom_ruler.DomRuler),
    [__ManagedZone_0_11]: dart.fieldType(utils__angular__managed_zone__angular_2.Angular2ManagedZone),
    [__overlayContainerName_0_12]: dart.fieldType(dart.dynamic),
    [__overlayContainerParent_0_13]: dart.fieldType(dart.dynamic),
    [__overlayContainer_0_14]: dart.fieldType(dart.dynamic),
    [__overlaySyncDom_0_15]: dart.fieldType(core.bool),
    [__overlayRepositionLoop_0_16]: dart.fieldType(core.bool),
    [__OverlayStyleConfig_0_17]: dart.fieldType(src__laminate__overlay__render__overlay_style_config.OverlayStyleConfig),
    [__ZIndexer_0_18]: dart.fieldType(laminate__overlay__zindexer.ZIndexer),
    [__OverlayDomRenderService_0_19]: dart.fieldType(src__laminate__overlay__render__overlay_dom_render_service.OverlayDomRenderService),
    [__OverlayService_0_20]: dart.fieldType(src__laminate__overlay__overlay_service.OverlayService),
    [__defaultPopupPositions_0_21]: dart.fieldType(ListOfRelativePosition()),
    [__DomPopupSourceFactory_0_22]: dart.fieldType(src__laminate__popup__dom_popup_source.DomPopupSourceFactory),
    [__Clock_0_23]: dart.fieldType(time$.Clock)
  }));
  andiqu$46template.viewFactory_AppComponentHost0 = function(parentView, parentIndex) {
    return new andiqu$46template._ViewAppComponentHost0.new(parentView, parentIndex);
  };
  dart.defineLazy(andiqu$46template, {
    /*andiqu$46template._AppComponentNgFactory*/get _AppComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfAppComponent()).new("andiqu", dart.fn(andiqu$46template.viewFactory_AppComponentHost0, AppViewAndintToAppViewOfAppComponent())));
    }
  });
  dart.copyProperties(andiqu$46template, {
    get AppComponentNgFactory() {
      return andiqu$46template._AppComponentNgFactory;
    }
  });
  dart.defineLazy(andiqu$46template, {
    /*andiqu$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  andiqu$46template.initReflector = function() {
    if (dart.test(andiqu$46template._visited)) {
      return;
    }
    andiqu$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(andiqu$.AppComponent), andiqu$46template.AppComponentNgFactory);
    angular$46template.initReflector();
    angular_components$46template.initReflector();
    src__about__about$46template.initReflector();
    src__experience__experience$46template.initReflector();
    src__home__home$46template.initReflector();
    src__signature__signature$46template.initReflector();
  };
  dart.defineLazy(src__about__about$46css$46shim, {
    /*src__about__about$46css$46shim.styles*/get styles() {
      return ["section._ngcontent-%ID%{min-height:100vh;padding:10px;color:#04f;background-color:#bde;background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg %3E%3Cpath fill='%23c2e0f1' d='M486 705.8c-109.3-21.8-223.4-32.2-335.3-19.4C99.5 692.1 49 703 0 719.8V800h843.8c-115.9-33.2-230.8-68.1-347.6-92.2C492.8 707.1 489.4 706.5 486 705.8z'/%3E%3Cpath fill='%23c9e4f5' d='M1600 0H0v719.8c49-16.8 99.5-27.8 150.7-33.5c111.9-12.7 226-2.4 335.3 19.4c3.4 0.7 6.8 1.4 10.2 2c116.8 24 231.7 59 347.6 92.2H1600V0z'/%3E%3Cpath fill='%23cfe7f8' d='M478.4 581c3.2 0.8 6.4 1.7 9.5 2.5c196.2 52.5 388.7 133.5 593.5 176.6c174.2 36.6 349.5 29.2 518.6-10.2V0H0v574.9c52.3-17.6 106.5-27.7 161.1-30.9C268.4 537.4 375.7 554.2 478.4 581z'/%3E%3Cpath fill='%23d6ebfc' d='M0 0v429.4c55.6-18.4 113.5-27.3 171.4-27.7c102.8-0.8 203.2 22.7 299.3 54.5c3 1 5.9 2 8.9 3c183.6 62 365.7 146.1 562.4 192.1c186.7 43.7 376.3 34.4 557.9-12.6V0H0z'/%3E%3Cpath fill='%23ddeeff' d='M181.8 259.4c98.2 6 191.9 35.2 281.3 72.1c2.8 1.1 5.5 2.3 8.3 3.4c171 71.6 342.7 158.5 531.3 207.7c198.8 51.8 403.4 40.8 597.3-14.8V0H0v283.2C59 263.6 120.6 255.7 181.8 259.4z'/%3E%3Cpath fill='%23e4f1ff' d='M1600 0H0v136.3c62.3-20.9 127.7-27.5 192.2-19.2c93.6 12.1 180.5 47.7 263.3 89.6c2.6 1.3 5.1 2.6 7.7 3.9c158.4 81.1 319.7 170.9 500.3 223.2c210.5 61 430.8 49 636.6-16.6V0z'/%3E%3Cpath fill='%23ebf5ff' d='M454.9 86.3C600.7 177 751.6 269.3 924.1 325c208.6 67.4 431.3 60.8 637.9-5.3c12.8-4.1 25.4-8.4 38.1-12.9V0H288.1c56 21.3 108.7 50.6 159.7 82C450.2 83.4 452.5 84.9 454.9 86.3z'/%3E%3Cpath fill='%23f1f8ff' d='M1600 0H498c118.1 85.8 243.5 164.5 386.8 216.2c191.8 69.2 400 74.7 595 21.1c40.8-11.2 81.1-25.2 120.3-41.7V0z'/%3E%3Cpath fill='%23f8fcff' d='M1397.5 154.8c47.2-10.6 93.6-25.3 138.6-43.8c21.7-8.9 43-18.8 63.9-29.5V0H643.4c62.9 41.7 129.7 78.2 202.1 107.4C1020.4 178.1 1214.2 196.1 1397.5 154.8z'/%3E%3Cpath fill='%23ffffff' d='M1315.3 72.4c75.3-12.6 148.9-37.1 216.8-72.4h-723C966.8 71 1144.7 101 1315.3 72.4z'/%3E%3C/g%3E%3C/svg%3E\");background-attachment:fixed;background-size:cover}hr._ngcontent-%ID%{width:50px}.section-heading._ngcontent-%ID%{margin:0;color:black;font-size:40px}.social-media._ngcontent-%ID%{float:right;list-style:none}.social-media._ngcontent-%ID% li._ngcontent-%ID%{display:block}svg._ngcontent-%ID%{fill:#04f;width:40px;height:40px}"];
    }
  });
  dart.defineLazy(src__about__about$46template, {
    /*src__about__about$46template.styles$AboutComponent*/get styles$AboutComponent() {
      return [src__about__about$46css$46shim.styles];
    }
  });
  const _el_0$ = Symbol('_el_0');
  const _el_1$ = Symbol('_el_1');
  const _el_2$ = Symbol('_el_2');
  const _el_4$ = Symbol('_el_4');
  const _el_5$ = Symbol('_el_5');
  const _el_7 = Symbol('_el_7');
  const _el_8 = Symbol('_el_8');
  const _el_9 = Symbol('_el_9');
  const _el_10 = Symbol('_el_10');
  const _el_11 = Symbol('_el_11');
  const _el_12 = Symbol('_el_12');
  const _el_13 = Symbol('_el_13');
  const _el_14 = Symbol('_el_14');
  const _el_15 = Symbol('_el_15');
  const _el_16 = Symbol('_el_16');
  const _el_17 = Symbol('_el_17');
  const _el_18 = Symbol('_el_18');
  const _el_19 = Symbol('_el_19');
  const _el_20 = Symbol('_el_20');
  const _el_21 = Symbol('_el_21');
  const _el_22 = Symbol('_el_22');
  const _el_23 = Symbol('_el_23');
  const _el_24 = Symbol('_el_24');
  let const$25;
  src__about__about$46template.ViewAboutComponent0 = class ViewAboutComponent0 extends src__core__linker__app_view.AppView$(src__about__about.AboutComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      this[_el_0$] = src__core__linker__app_view.createAndAppend(doc, "section", parentRenderNode);
      this.addShimE(this[_el_0$]);
      this[_el_1$] = src__core__linker__app_view.createAndAppend(doc, "center", this[_el_0$]);
      this.addShimE(this[_el_1$]);
      this[_el_2$] = src__core__linker__app_view.createAndAppend(doc, "h1", this[_el_1$]);
      this[_el_2$].className = "section-heading";
      this.addShimE(this[_el_2$]);
      let _text_3 = html.Text.new("ABOUT ME");
      this[_el_2$][$append](_text_3);
      this[_el_4$] = src__core__linker__app_view.createAndAppend(doc, "hr", this[_el_1$]);
      this.addShimE(this[_el_4$]);
      this[_el_5$] = src__core__linker__app_view.createDivAndAppend(doc, this[_el_0$]);
      this.addShimC(this[_el_5$]);
      let _text_6 = html.Text.new("*Insert stuff about me*");
      this[_el_5$][$append](_text_6);
      this[_el_7] = html.UListElement._check(src__core__linker__app_view.createAndAppend(doc, "ul", this[_el_0$]));
      this[_el_7].className = "social-media";
      this.addShimC(this[_el_7]);
      this[_el_8] = src__core__linker__app_view.createAndAppend(doc, "li", this[_el_7]);
      this.addShimE(this[_el_8]);
      this[_el_9] = html.AnchorElement._check(src__core__linker__app_view.createAndAppend(doc, "a", this[_el_8]));
      this.createAttr(this[_el_9], "href", "https://www.linkedin.com/in/andi-qu-48313a154");
      this.addShimC(this[_el_9]);
      this[_el_10] = doc[$createElementNS]("http://www.w3.org/2000/svg", "svg");
      this[_el_9][$append](this[_el_10]);
      this.createAttr(this[_el_10], "viewBox", "0 0 40 40");
      this.addShimE(this[_el_10]);
      this[_el_11] = doc[$createElementNS]("http://www.w3.org/2000/svg", "g");
      this[_el_10][$append](this[_el_11]);
      this.addShimE(this[_el_11]);
      this[_el_12] = doc[$createElementNS]("http://www.w3.org/2000/svg", "path");
      this[_el_11][$append](this[_el_12]);
      this.createAttr(this[_el_12], "d", "m10.8 13.9v22.2h-7.4v-22.1h7.4z m0.5-6.8q0 1.7-1.2 2.7t-3 1.1h0q-1.9 0-3-1.1t-1.1-2.7q0-1.6 1.2-2.7t3-1.1 2.9 1.1 1.2 2.7z m26 16.3v12.7h-7.4v-11.9q0-2.3-0.9-3.6t-2.8-1.4q-1.4 0-2.3 0.8t-1.5 1.9q-0.2 0.7-0.2 1.8v12.4h-7.3q0-8.9 0-14.5t0-6.6l0-1h7.3v3.2h-0.1q0.5-0.7 1-1.3t1.2-1.1 2-1 2.5-0.4q3.8 0 6.2 2.6t2.3 7.4z");
      this.addShimE(this[_el_12]);
      this[_el_13] = src__core__linker__app_view.createAndAppend(doc, "li", this[_el_7]);
      this.addShimE(this[_el_13]);
      this[_el_14] = html.AnchorElement._check(src__core__linker__app_view.createAndAppend(doc, "a", this[_el_13]));
      this.createAttr(this[_el_14], "href", "https://www.github.com/dolphingarlic");
      this.addShimC(this[_el_14]);
      this[_el_15] = doc[$createElementNS]("http://www.w3.org/2000/svg", "svg");
      this[_el_14][$append](this[_el_15]);
      this.createAttr(this[_el_15], "viewBox", "0 0 40 40");
      this.addShimE(this[_el_15]);
      this[_el_16] = doc[$createElementNS]("http://www.w3.org/2000/svg", "g");
      this[_el_15][$append](this[_el_16]);
      this.addShimE(this[_el_16]);
      this[_el_17] = doc[$createElementNS]("http://www.w3.org/2000/svg", "path");
      this[_el_16][$append](this[_el_17]);
      this.createAttr(this[_el_17], "d", "m20.1 2.9q4.7 0 8.6 2.3t6.3 6.2 2.3 8.6q0 5.6-3.3 10.1t-8.4 6.2q-0.6 0.1-0.9-0.2t-0.3-0.7q0 0 0-1.7t0-3q0-2.1-1.2-3.1 1.3-0.2 2.3-0.4t2.1-0.9 1.8-1.5 1.2-2.3 0.5-3.4q0-2.7-1.8-4.6 0.8-2-0.2-4.5-0.6-0.2-1.8 0.2t-2 1l-0.9 0.5q-2-0.6-4.3-0.6t-4.2 0.6q-0.4-0.2-1-0.6t-1.9-0.8-1.9-0.3q-1 2.5-0.1 4.5-1.8 1.9-1.8 4.6 0 1.9 0.5 3.4t1.1 2.3 1.8 1.5 2.1 0.9 2.3 0.4q-0.9 0.8-1.1 2.3-0.4 0.2-1 0.3t-1.3 0.1-1.4-0.5-1.3-1.4q-0.4-0.7-1-1.1t-1.1-0.6l-0.5 0q-0.5 0-0.6 0.1t-0.1 0.2 0.2 0.3 0.2 0.3l0.2 0.1q0.5 0.2 1 0.9t0.7 1.1l0.2 0.5q0.3 0.9 1 1.4t1.5 0.7 1.5 0.1 1.3-0.1l0.5 0q0 0.8 0 1.9t0 1.2q0 0.5-0.3 0.7t-0.9 0.2q-5.2-1.7-8.4-6.2t-3.3-10.1q0-4.7 2.3-8.6t6.2-6.2 8.6-2.3z m-10.6 24.6q0.1-0.2-0.2-0.3-0.2-0.1-0.2 0.1-0.1 0.1 0.1 0.2 0.2 0.2 0.3 0z m0.7 0.7q0.1-0.1-0.1-0.3-0.2-0.2-0.3-0.1-0.2 0.1 0 0.4 0.3 0.2 0.4 0z m0.7 1q0.2-0.1 0-0.4-0.2-0.3-0.4-0.1-0.2 0.1 0 0.4t0.4 0.1z m0.9 1q0.2-0.2-0.1-0.4-0.3-0.3-0.4-0.1-0.2 0.2 0 0.4 0.3 0.3 0.5 0.1z m1.3 0.5q0-0.2-0.3-0.3-0.4-0.1-0.4 0.1t0.2 0.4q0.4 0.1 0.5-0.2z m1.4 0.1q0-0.2-0.4-0.2-0.4 0-0.4 0.2 0 0.3 0.4 0.3 0.4 0 0.4-0.3z m1.3-0.2q-0.1-0.2-0.4-0.2-0.4 0.1-0.3 0.4t0.4 0.1 0.3-0.3z");
      this.addShimE(this[_el_17]);
      this[_el_18] = src__core__linker__app_view.createAndAppend(doc, "li", this[_el_7]);
      this.addShimE(this[_el_18]);
      this[_el_19] = html.AnchorElement._check(src__core__linker__app_view.createAndAppend(doc, "a", this[_el_18]));
      this.createAttr(this[_el_19], "href", "mailto:andi@andiqu.com");
      this.addShimC(this[_el_19]);
      this[_el_20] = doc[$createElementNS]("http://www.w3.org/2000/svg", "svg");
      this[_el_19][$append](this[_el_20]);
      this.createAttr(this[_el_20], "viewBox", "0 0 40 40");
      this.addShimE(this[_el_20]);
      this[_el_21] = doc[$createElementNS]("http://www.w3.org/2000/svg", "g");
      this[_el_20][$append](this[_el_21]);
      this.addShimE(this[_el_21]);
      this[_el_22] = doc[$createElementNS]("http://www.w3.org/2000/svg", "path");
      this[_el_21][$append](this[_el_22]);
      this.createAttr(this[_el_22], "d", "m40 15.8v17.8q0 1.4-1 2.5t-2.6 1h-32.8q-1.5 0-2.6-1t-1-2.5v-17.8q1 1.1 2.3 2 8 5.5 11 7.7 1.3 0.9 2.1 1.5t2.1 1 2.5 0.6h0q1.2 0 2.5-0.6t2.1-1 2.1-1.5q3.7-2.8 11.1-7.7 1.2-0.9 2.2-1.9z m0-6.5q0 1.7-1.1 3.4t-2.7 2.7q-8.4 5.8-10.5 7.3-0.2 0.1-0.9 0.6t-1.2 0.9-1.2 0.7-1.3 0.6-1.1 0.2h0q-0.5 0-1.1-0.2t-1.3-0.6-1.2-0.7-1.2-0.9-0.9-0.6q-2.1-1.5-5.9-4.1t-4.6-3.2q-1.3-0.9-2.6-2.6t-1.2-3q0-1.8 0.9-2.9t2.7-1.2h32.8q1.5 0 2.5 1.1t1.1 2.5z");
      this.addShimE(this[_el_22]);
      this[_el_23] = src__core__linker__app_view.createDivAndAppend(doc, this[_el_0$]);
      this[_el_23].className = "face";
      this.addShimC(this[_el_23]);
      this[_el_24] = src__core__linker__app_view.createAndAppend(doc, "img", this[_el_23]);
      this.createAttr(this[_el_24], "alt", "It's a pity that you can't see my face");
      this.createAttr(this[_el_24], "src", "favicon.png");
      this.addShimE(this[_el_24]);
      this.init(const$25 || (const$25 = dart.constList([], dart.dynamic)), null);
      return null;
    }
  };
  (src__about__about$46template.ViewAboutComponent0.new = function(parentView, parentIndex) {
    this[_el_0$] = null;
    this[_el_1$] = null;
    this[_el_2$] = null;
    this[_el_4$] = null;
    this[_el_5$] = null;
    this[_el_7] = null;
    this[_el_8] = null;
    this[_el_9] = null;
    this[_el_10] = null;
    this[_el_11] = null;
    this[_el_12] = null;
    this[_el_13] = null;
    this[_el_14] = null;
    this[_el_15] = null;
    this[_el_16] = null;
    this[_el_17] = null;
    this[_el_18] = null;
    this[_el_19] = null;
    this[_el_20] = null;
    this[_el_21] = null;
    this[_el_22] = null;
    this[_el_23] = null;
    this[_el_24] = null;
    src__about__about$46template.ViewAboutComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("about-component"));
    let t = src__about__about$46template.ViewAboutComponent0._renderType;
    t == null ? src__about__about$46template.ViewAboutComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType(dart.test(src__runtime__optimizations.isDevMode) ? "asset:andiqu/lib/src/about/about.dart" : null, src__core__metadata__view.ViewEncapsulation.Emulated, src__about__about$46template.styles$AboutComponent) : t;
    this.setupComponentType(src__about__about$46template.ViewAboutComponent0._renderType);
  }).prototype = src__about__about$46template.ViewAboutComponent0.prototype;
  dart.addTypeTests(src__about__about$46template.ViewAboutComponent0);
  dart.setMethodSignature(src__about__about$46template.ViewAboutComponent0, () => ({
    __proto__: dart.getMethods(src__about__about$46template.ViewAboutComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__about__about.AboutComponent), [])
  }));
  dart.setFieldSignature(src__about__about$46template.ViewAboutComponent0, () => ({
    __proto__: dart.getFields(src__about__about$46template.ViewAboutComponent0.__proto__),
    [_el_0$]: dart.fieldType(html.Element),
    [_el_1$]: dart.fieldType(html.Element),
    [_el_2$]: dart.fieldType(html.Element),
    [_el_4$]: dart.fieldType(html.Element),
    [_el_5$]: dart.fieldType(html.DivElement),
    [_el_7]: dart.fieldType(html.UListElement),
    [_el_8]: dart.fieldType(html.Element),
    [_el_9]: dart.fieldType(html.AnchorElement),
    [_el_10]: dart.fieldType(html.Element),
    [_el_11]: dart.fieldType(html.Element),
    [_el_12]: dart.fieldType(html.Element),
    [_el_13]: dart.fieldType(html.Element),
    [_el_14]: dart.fieldType(html.AnchorElement),
    [_el_15]: dart.fieldType(html.Element),
    [_el_16]: dart.fieldType(html.Element),
    [_el_17]: dart.fieldType(html.Element),
    [_el_18]: dart.fieldType(html.Element),
    [_el_19]: dart.fieldType(html.AnchorElement),
    [_el_20]: dart.fieldType(html.Element),
    [_el_21]: dart.fieldType(html.Element),
    [_el_22]: dart.fieldType(html.Element),
    [_el_23]: dart.fieldType(html.DivElement),
    [_el_24]: dart.fieldType(html.Element)
  }));
  dart.defineLazy(src__about__about$46template.ViewAboutComponent0, {
    /*src__about__about$46template.ViewAboutComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  src__about__about$46template.viewFactory_AboutComponent0 = function(parentView, parentIndex) {
    return new src__about__about$46template.ViewAboutComponent0.new(parentView, parentIndex);
  };
  dart.defineLazy(src__about__about$46template, {
    /*src__about__about$46template.styles$AboutComponentHost*/get styles$AboutComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0$ = Symbol('_compView_0');
  const _AboutComponent_0_5 = Symbol('_AboutComponent_0_5');
  src__about__about$46template._ViewAboutComponentHost0 = class _ViewAboutComponentHost0 extends src__core__linker__app_view.AppView$(src__about__about.AboutComponent) {
    build() {
      this[_compView_0$] = new src__about__about$46template.ViewAboutComponent0.new(this, 0);
      this.rootEl = this[_compView_0$].rootEl;
      this[_AboutComponent_0_5] = new src__about__about.AboutComponent.new();
      this[_compView_0$].create(this[_AboutComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfAboutComponent()).new(0, this, this.rootEl, this[_AboutComponent_0_5]);
    }
    detectChangesInternal() {
      this[_compView_0$].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0$];
      t == null ? null : t.destroy();
    }
  };
  (src__about__about$46template._ViewAboutComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0$] = null;
    this[_AboutComponent_0_5] = null;
    src__about__about$46template._ViewAboutComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = src__about__about$46template._ViewAboutComponentHost0.prototype;
  dart.addTypeTests(src__about__about$46template._ViewAboutComponentHost0);
  dart.setMethodSignature(src__about__about$46template._ViewAboutComponentHost0, () => ({
    __proto__: dart.getMethods(src__about__about$46template._ViewAboutComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__about__about.AboutComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__about__about$46template._ViewAboutComponentHost0, () => ({
    __proto__: dart.getFields(src__about__about$46template._ViewAboutComponentHost0.__proto__),
    [_compView_0$]: dart.fieldType(src__about__about$46template.ViewAboutComponent0),
    [_AboutComponent_0_5]: dart.fieldType(src__about__about.AboutComponent)
  }));
  src__about__about$46template.viewFactory_AboutComponentHost0 = function(parentView, parentIndex) {
    return new src__about__about$46template._ViewAboutComponentHost0.new(parentView, parentIndex);
  };
  dart.defineLazy(src__about__about$46template, {
    /*src__about__about$46template._AboutComponentNgFactory*/get _AboutComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfAboutComponent()).new("about-component", dart.fn(src__about__about$46template.viewFactory_AboutComponentHost0, AppViewAndintToAppViewOfAboutComponent())));
    }
  });
  dart.copyProperties(src__about__about$46template, {
    get AboutComponentNgFactory() {
      return src__about__about$46template._AboutComponentNgFactory;
    }
  });
  dart.defineLazy(src__about__about$46template, {
    /*src__about__about$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__about__about$46template.initReflector = function() {
    if (dart.test(src__about__about$46template._visited)) {
      return;
    }
    src__about__about$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(src__about__about.AboutComponent), src__about__about$46template.AboutComponentNgFactory);
    angular$46template.initReflector();
  };
  dart.defineLazy(src__experience__experience$46css$46shim, {
    /*src__experience__experience$46css$46shim.styles*/get styles() {
      return ["section._ngcontent-%ID%{min-height:100vh;padding:10px}hr._ngcontent-%ID%{width:50px}.section-heading._ngcontent-%ID%{margin:0}"];
    }
  });
  dart.defineLazy(src__experience__experience$46template, {
    /*src__experience__experience$46template.styles$ExperienceComponent*/get styles$ExperienceComponent() {
      return [src__experience__experience$46css$46shim.styles];
    }
  });
  const _el_0$0 = Symbol('_el_0');
  const _el_1$0 = Symbol('_el_1');
  const _el_2$0 = Symbol('_el_2');
  const _el_4$0 = Symbol('_el_4');
  const _el_5$0 = Symbol('_el_5');
  const _compView_5$ = Symbol('_compView_5');
  const _MaterialSliderComponent_5_5 = Symbol('_MaterialSliderComponent_5_5');
  const _expr_0 = Symbol('_expr_0');
  const _handle_valueChange_5_0 = Symbol('_handle_valueChange_5_0');
  let const$26;
  src__experience__experience$46template.ViewExperienceComponent0 = class ViewExperienceComponent0 extends src__core__linker__app_view.AppView$(src__experience__experience.ExperienceComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      this[_el_0$0] = src__core__linker__app_view.createAndAppend(doc, "section", parentRenderNode);
      this.addShimE(this[_el_0$0]);
      this[_el_1$0] = src__core__linker__app_view.createAndAppend(doc, "center", this[_el_0$0]);
      this.addShimE(this[_el_1$0]);
      this[_el_2$0] = src__core__linker__app_view.createAndAppend(doc, "h1", this[_el_1$0]);
      this[_el_2$0].className = "section-heading";
      this.addShimE(this[_el_2$0]);
      let _text_3 = html.Text.new("THINGS I'VE DONE");
      this[_el_2$0][$append](_text_3);
      this[_el_4$0] = src__core__linker__app_view.createAndAppend(doc, "hr", this[_el_1$0]);
      this.addShimE(this[_el_4$0]);
      this[_compView_5$] = new material_slider__material_slider$46template.ViewMaterialSliderComponent0.new(this, 5);
      this[_el_5$0] = this[_compView_5$].rootEl;
      this[_el_1$0][$append](this[_el_5$0]);
      this.addShimC(html.HtmlElement._check(this[_el_5$0]));
      this[_MaterialSliderComponent_5_5] = new material_slider__material_slider.MaterialSliderComponent.new(this[_compView_5$].ref, utils__browser__dom_service__dom_service.DomService._check(this.parentView.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.viewData.parentIndex)));
      this[_compView_5$].create(this[_MaterialSliderComponent_5_5], []);
      let subscription_0 = this[_MaterialSliderComponent_5_5].valueChange.listen(this.eventHandler1(core.num, core.num, dart.bind(this, _handle_valueChange_5_0)));
      this.init(const$26 || (const$26 = dart.constList([], dart.dynamic)), [subscription_0]);
      return null;
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if ((token === dart.wrapType(material_slider__material_slider.MaterialSliderComponent) || token === dart.wrapType(interfaces__has_disabled.HasDisabled)) && 5 === nodeIndex) {
        return this[_MaterialSliderComponent_5_5];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      changed = false;
      if (firstCheck) {
        this[_MaterialSliderComponent_5_5].max = 4;
        changed = true;
      }
      let currVal_0 = _ctx.value;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this[_MaterialSliderComponent_5_5].value = currVal_0;
        changed = true;
        this[_expr_0] = currVal_0;
      }
      if (changed) {
        this[_compView_5$].markAsCheckOnce();
      }
      if (changed) {
        this[_MaterialSliderComponent_5_5].ngAfterChanges();
      }
      this[_compView_5$].detectHostChanges(firstCheck);
      this[_compView_5$].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_5$];
      t == null ? null : t.destroy();
    }
    [_handle_valueChange_5_0]($event) {
      this.ctx.value = core.int._check($event);
    }
  };
  (src__experience__experience$46template.ViewExperienceComponent0.new = function(parentView, parentIndex) {
    this[_el_0$0] = null;
    this[_el_1$0] = null;
    this[_el_2$0] = null;
    this[_el_4$0] = null;
    this[_el_5$0] = null;
    this[_compView_5$] = null;
    this[_MaterialSliderComponent_5_5] = null;
    this[_expr_0] = null;
    src__experience__experience$46template.ViewExperienceComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("experience-component"));
    let t = src__experience__experience$46template.ViewExperienceComponent0._renderType;
    t == null ? src__experience__experience$46template.ViewExperienceComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType(dart.test(src__runtime__optimizations.isDevMode) ? "asset:andiqu/lib/src/experience/experience.dart" : null, src__core__metadata__view.ViewEncapsulation.Emulated, src__experience__experience$46template.styles$ExperienceComponent) : t;
    this.setupComponentType(src__experience__experience$46template.ViewExperienceComponent0._renderType);
  }).prototype = src__experience__experience$46template.ViewExperienceComponent0.prototype;
  dart.addTypeTests(src__experience__experience$46template.ViewExperienceComponent0);
  dart.setMethodSignature(src__experience__experience$46template.ViewExperienceComponent0, () => ({
    __proto__: dart.getMethods(src__experience__experience$46template.ViewExperienceComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__experience__experience.ExperienceComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, []),
    [_handle_valueChange_5_0]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setFieldSignature(src__experience__experience$46template.ViewExperienceComponent0, () => ({
    __proto__: dart.getFields(src__experience__experience$46template.ViewExperienceComponent0.__proto__),
    [_el_0$0]: dart.fieldType(html.Element),
    [_el_1$0]: dart.fieldType(html.Element),
    [_el_2$0]: dart.fieldType(html.Element),
    [_el_4$0]: dart.fieldType(html.Element),
    [_el_5$0]: dart.fieldType(html.Element),
    [_compView_5$]: dart.fieldType(material_slider__material_slider$46template.ViewMaterialSliderComponent0),
    [_MaterialSliderComponent_5_5]: dart.fieldType(material_slider__material_slider.MaterialSliderComponent),
    [_expr_0]: dart.fieldType(core.num)
  }));
  dart.defineLazy(src__experience__experience$46template.ViewExperienceComponent0, {
    /*src__experience__experience$46template.ViewExperienceComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  src__experience__experience$46template.viewFactory_ExperienceComponent0 = function(parentView, parentIndex) {
    return new src__experience__experience$46template.ViewExperienceComponent0.new(parentView, parentIndex);
  };
  dart.defineLazy(src__experience__experience$46template, {
    /*src__experience__experience$46template.styles$ExperienceComponentHost*/get styles$ExperienceComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0$0 = Symbol('_compView_0');
  const _ExperienceComponent_0_5 = Symbol('_ExperienceComponent_0_5');
  src__experience__experience$46template._ViewExperienceComponentHost0 = class _ViewExperienceComponentHost0 extends src__core__linker__app_view.AppView$(src__experience__experience.ExperienceComponent) {
    build() {
      this[_compView_0$0] = new src__experience__experience$46template.ViewExperienceComponent0.new(this, 0);
      this.rootEl = this[_compView_0$0].rootEl;
      this[_ExperienceComponent_0_5] = new src__experience__experience.ExperienceComponent.new();
      this[_compView_0$0].create(this[_ExperienceComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfExperienceComponent()).new(0, this, this.rootEl, this[_ExperienceComponent_0_5]);
    }
    detectChangesInternal() {
      this[_compView_0$0].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0$0];
      t == null ? null : t.destroy();
    }
  };
  (src__experience__experience$46template._ViewExperienceComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0$0] = null;
    this[_ExperienceComponent_0_5] = null;
    src__experience__experience$46template._ViewExperienceComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = src__experience__experience$46template._ViewExperienceComponentHost0.prototype;
  dart.addTypeTests(src__experience__experience$46template._ViewExperienceComponentHost0);
  dart.setMethodSignature(src__experience__experience$46template._ViewExperienceComponentHost0, () => ({
    __proto__: dart.getMethods(src__experience__experience$46template._ViewExperienceComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__experience__experience.ExperienceComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__experience__experience$46template._ViewExperienceComponentHost0, () => ({
    __proto__: dart.getFields(src__experience__experience$46template._ViewExperienceComponentHost0.__proto__),
    [_compView_0$0]: dart.fieldType(src__experience__experience$46template.ViewExperienceComponent0),
    [_ExperienceComponent_0_5]: dart.fieldType(src__experience__experience.ExperienceComponent)
  }));
  src__experience__experience$46template.viewFactory_ExperienceComponentHost0 = function(parentView, parentIndex) {
    return new src__experience__experience$46template._ViewExperienceComponentHost0.new(parentView, parentIndex);
  };
  dart.defineLazy(src__experience__experience$46template, {
    /*src__experience__experience$46template._ExperienceComponentNgFactory*/get _ExperienceComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfExperienceComponent()).new("experience-component", dart.fn(src__experience__experience$46template.viewFactory_ExperienceComponentHost0, AppViewAndintToAppViewOfExperienceComponent())));
    }
  });
  dart.copyProperties(src__experience__experience$46template, {
    get ExperienceComponentNgFactory() {
      return src__experience__experience$46template._ExperienceComponentNgFactory;
    }
  });
  dart.defineLazy(src__experience__experience$46template, {
    /*src__experience__experience$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__experience__experience$46template.initReflector = function() {
    if (dart.test(src__experience__experience$46template._visited)) {
      return;
    }
    src__experience__experience$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(src__experience__experience.ExperienceComponent), src__experience__experience$46template.ExperienceComponentNgFactory);
    angular$46template.initReflector();
    angular_components$46template.initReflector();
  };
  dart.defineLazy(src__home__home$46css$46shim, {
    /*src__home__home$46css$46shim.styles*/get styles() {
      return ["._nghost-%ID%{color:white}section._ngcontent-%ID%{min-height:60vh;padding:20vh;font-size:20px;background-color:#04f;background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25'%3E%3Cdefs%3E%3ClinearGradient id='a' gradientUnits='userSpaceOnUse' x1='0' x2='0' y1='0' y2='100%25' gradientTransform='rotate(240)'%3E%3Cstop offset='0' stop-color='%230044ff'/%3E%3Cstop offset='1' stop-color='%2322ccff'/%3E%3C/linearGradient%3E%3Cpattern patternUnits='userSpaceOnUse' id='b' width='640' height='533.3' x='0' y='0' viewBox='0 0 1080 900'%3E%3Cg fill-opacity='0.1'%3E%3Cpolygon fill='%23444' points='90 150 0 300 180 300'/%3E%3Cpolygon points='90 150 180 0 0 0'/%3E%3Cpolygon fill='%23AAA' points='270 150 360 0 180 0'/%3E%3Cpolygon fill='%23DDD' points='450 150 360 300 540 300'/%3E%3Cpolygon fill='%23999' points='450 150 540 0 360 0'/%3E%3Cpolygon points='630 150 540 300 720 300'/%3E%3Cpolygon fill='%23DDD' points='630 150 720 0 540 0'/%3E%3Cpolygon fill='%23444' points='810 150 720 300 900 300'/%3E%3Cpolygon fill='%23FFF' points='810 150 900 0 720 0'/%3E%3Cpolygon fill='%23DDD' points='990 150 900 300 1080 300'/%3E%3Cpolygon fill='%23444' points='990 150 1080 0 900 0'/%3E%3Cpolygon fill='%23DDD' points='90 450 0 600 180 600'/%3E%3Cpolygon points='90 450 180 300 0 300'/%3E%3Cpolygon fill='%23666' points='270 450 180 600 360 600'/%3E%3Cpolygon fill='%23AAA' points='270 450 360 300 180 300'/%3E%3Cpolygon fill='%23DDD' points='450 450 360 600 540 600'/%3E%3Cpolygon fill='%23999' points='450 450 540 300 360 300'/%3E%3Cpolygon fill='%23999' points='630 450 540 600 720 600'/%3E%3Cpolygon fill='%23FFF' points='630 450 720 300 540 300'/%3E%3Cpolygon points='810 450 720 600 900 600'/%3E%3Cpolygon fill='%23DDD' points='810 450 900 300 720 300'/%3E%3Cpolygon fill='%23AAA' points='990 450 900 600 1080 600'/%3E%3Cpolygon fill='%23444' points='990 450 1080 300 900 300'/%3E%3Cpolygon fill='%23222' points='90 750 0 900 180 900'/%3E%3Cpolygon points='270 750 180 900 360 900'/%3E%3Cpolygon fill='%23DDD' points='270 750 360 600 180 600'/%3E%3Cpolygon points='450 750 540 600 360 600'/%3E%3Cpolygon points='630 750 540 900 720 900'/%3E%3Cpolygon fill='%23444' points='630 750 720 600 540 600'/%3E%3Cpolygon fill='%23AAA' points='810 750 720 900 900 900'/%3E%3Cpolygon fill='%23666' points='810 750 900 600 720 600'/%3E%3Cpolygon fill='%23999' points='990 750 900 900 1080 900'/%3E%3Cpolygon fill='%23999' points='180 0 90 150 270 150'/%3E%3Cpolygon fill='%23444' points='360 0 270 150 450 150'/%3E%3Cpolygon fill='%23FFF' points='540 0 450 150 630 150'/%3E%3Cpolygon points='900 0 810 150 990 150'/%3E%3Cpolygon fill='%23222' points='0 300 -90 450 90 450'/%3E%3Cpolygon fill='%23FFF' points='0 300 90 150 -90 150'/%3E%3Cpolygon fill='%23FFF' points='180 300 90 450 270 450'/%3E%3Cpolygon fill='%23666' points='180 300 270 150 90 150'/%3E%3Cpolygon fill='%23222' points='360 300 270 450 450 450'/%3E%3Cpolygon fill='%23FFF' points='360 300 450 150 270 150'/%3E%3Cpolygon fill='%23444' points='540 300 450 450 630 450'/%3E%3Cpolygon fill='%23222' points='540 300 630 150 450 150'/%3E%3Cpolygon fill='%23AAA' points='720 300 630 450 810 450'/%3E%3Cpolygon fill='%23666' points='720 300 810 150 630 150'/%3E%3Cpolygon fill='%23FFF' points='900 300 810 450 990 450'/%3E%3Cpolygon fill='%23999' points='900 300 990 150 810 150'/%3E%3Cpolygon points='0 600 -90 750 90 750'/%3E%3Cpolygon fill='%23666' points='0 600 90 450 -90 450'/%3E%3Cpolygon fill='%23AAA' points='180 600 90 750 270 750'/%3E%3Cpolygon fill='%23444' points='180 600 270 450 90 450'/%3E%3Cpolygon fill='%23444' points='360 600 270 750 450 750'/%3E%3Cpolygon fill='%23999' points='360 600 450 450 270 450'/%3E%3Cpolygon fill='%23666' points='540 600 630 450 450 450'/%3E%3Cpolygon fill='%23222' points='720 600 630 750 810 750'/%3E%3Cpolygon fill='%23FFF' points='900 600 810 750 990 750'/%3E%3Cpolygon fill='%23222' points='900 600 990 450 810 450'/%3E%3Cpolygon fill='%23DDD' points='0 900 90 750 -90 750'/%3E%3Cpolygon fill='%23444' points='180 900 270 750 90 750'/%3E%3Cpolygon fill='%23FFF' points='360 900 450 750 270 750'/%3E%3Cpolygon fill='%23AAA' points='540 900 630 750 450 750'/%3E%3Cpolygon fill='%23FFF' points='720 900 810 750 630 750'/%3E%3Cpolygon fill='%23222' points='900 900 990 750 810 750'/%3E%3Cpolygon fill='%23222' points='1080 300 990 450 1170 450'/%3E%3Cpolygon fill='%23FFF' points='1080 300 1170 150 990 150'/%3E%3Cpolygon points='1080 600 990 750 1170 750'/%3E%3Cpolygon fill='%23666' points='1080 600 1170 450 990 450'/%3E%3Cpolygon fill='%23DDD' points='1080 900 1170 750 990 750'/%3E%3C/g%3E%3C/pattern%3E%3C/defs%3E%3Crect x='0' y='0' fill='url(%23a)' width='100%25' height='100%25'/%3E%3Crect x='0' y='0' fill='url(%23b)' width='100%25' height='100%25'/%3E%3C/svg%3E\");background-attachment:fixed;background-size:cover}hr._ngcontent-%ID%{width:50px}.section-heading._ngcontent-%ID%{margin:0;font-size:65px}"];
    }
  });
  dart.defineLazy(src__home__home$46template, {
    /*src__home__home$46template.styles$HomeComponent*/get styles$HomeComponent() {
      return [src__home__home$46css$46shim.styles];
    }
  });
  const _el_0$1 = Symbol('_el_0');
  const _el_1$1 = Symbol('_el_1');
  const _el_2$1 = Symbol('_el_2');
  const _el_4$1 = Symbol('_el_4');
  const _el_5$1 = Symbol('_el_5');
  const _el_7$ = Symbol('_el_7');
  const _el_9$ = Symbol('_el_9');
  const _el_10$ = Symbol('_el_10');
  const _el_13$ = Symbol('_el_13');
  const _el_15$ = Symbol('_el_15');
  let const$27;
  src__home__home$46template.ViewHomeComponent0 = class ViewHomeComponent0 extends src__core__linker__app_view.AppView$(src__home__home.HomeComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      this[_el_0$1] = src__core__linker__app_view.createAndAppend(doc, "section", parentRenderNode);
      this.addShimE(this[_el_0$1]);
      this[_el_1$1] = src__core__linker__app_view.createAndAppend(doc, "center", this[_el_0$1]);
      this.addShimE(this[_el_1$1]);
      this[_el_2$1] = src__core__linker__app_view.createAndAppend(doc, "h1", this[_el_1$1]);
      this[_el_2$1].className = "section-heading";
      this.addShimE(this[_el_2$1]);
      let _text_3 = html.Text.new("ANDI QU - THE WEBSITE");
      this[_el_2$1][$append](_text_3);
      this[_el_4$1] = src__core__linker__app_view.createAndAppend(doc, "hr", this[_el_1$1]);
      this.addShimE(this[_el_4$1]);
      this[_el_5$1] = src__core__linker__app_view.createAndAppend(doc, "p", this[_el_0$1]);
      this.addShimE(this[_el_5$1]);
      let _text_6 = html.Text.new("I am a dynamic figure, often seen creating fake emails to get more free trials and preaching Communism to Icelandic sheep herders. Sometimes, if you're lucky, you'll even see me erecting massive 500 story skyscrapers in my backyard. When I am bored, I charm cats with my godlike yodelling skills and my transcendental clarinet squeaks.");
      this[_el_5$1][$append](_text_6);
      this[_el_7$] = src__core__linker__app_view.createAndAppend(doc, "p", this[_el_0$1]);
      this.addShimE(this[_el_7$]);
      let _text_8 = html.Text.new("I am motivated to take risks. Sometimes, because I like to live dangerously, I play chess with one less pawn and do geometry in pen. Sometimes I even play on the Wii without the safety strap! I know - I'm a real daredevil. Sometimes I'm even amazed myself that I've managed to survive this long in the first place, what with all these totally dangerous and not at all normal feats! But nothing quite beats the adrenaline rush that I get from participating in a class discussion.");
      this[_el_7$][$append](_text_8);
      this[_el_9$] = src__core__linker__app_view.createAndAppend(doc, "center", this[_el_0$1]);
      this.addShimE(this[_el_9$]);
      this[_el_10$] = src__core__linker__app_view.createAndAppend(doc, "p", this[_el_9$]);
      this.addShimE(this[_el_10$]);
      let _text_11 = html.Text.new("Who am I? Of course, I am...");
      this[_el_10$][$append](_text_11);
      let _text_12 = html.Text.new("The One");
      this[_el_9$][$append](_text_12);
      this[_el_13$] = src__core__linker__app_view.createAndAppend(doc, "br", this[_el_9$]);
      this.addShimE(this[_el_13$]);
      let _text_14 = html.Text.new(" The Only");
      this[_el_9$][$append](_text_14);
      this[_el_15$] = src__core__linker__app_view.createAndAppend(doc, "br", this[_el_9$]);
      this.addShimE(this[_el_15$]);
      let _text_16 = html.Text.new(" Andi Qu");
      this[_el_9$][$append](_text_16);
      this.init(const$27 || (const$27 = dart.constList([], dart.dynamic)), null);
      return null;
    }
  };
  (src__home__home$46template.ViewHomeComponent0.new = function(parentView, parentIndex) {
    this[_el_0$1] = null;
    this[_el_1$1] = null;
    this[_el_2$1] = null;
    this[_el_4$1] = null;
    this[_el_5$1] = null;
    this[_el_7$] = null;
    this[_el_9$] = null;
    this[_el_10$] = null;
    this[_el_13$] = null;
    this[_el_15$] = null;
    src__home__home$46template.ViewHomeComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("home-component"));
    let t = src__home__home$46template.ViewHomeComponent0._renderType;
    t == null ? src__home__home$46template.ViewHomeComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType(dart.test(src__runtime__optimizations.isDevMode) ? "asset:andiqu/lib/src/home/home.dart" : null, src__core__metadata__view.ViewEncapsulation.Emulated, src__home__home$46template.styles$HomeComponent) : t;
    this.setupComponentType(src__home__home$46template.ViewHomeComponent0._renderType);
  }).prototype = src__home__home$46template.ViewHomeComponent0.prototype;
  dart.addTypeTests(src__home__home$46template.ViewHomeComponent0);
  dart.setMethodSignature(src__home__home$46template.ViewHomeComponent0, () => ({
    __proto__: dart.getMethods(src__home__home$46template.ViewHomeComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__home__home.HomeComponent), [])
  }));
  dart.setFieldSignature(src__home__home$46template.ViewHomeComponent0, () => ({
    __proto__: dart.getFields(src__home__home$46template.ViewHomeComponent0.__proto__),
    [_el_0$1]: dart.fieldType(html.Element),
    [_el_1$1]: dart.fieldType(html.Element),
    [_el_2$1]: dart.fieldType(html.Element),
    [_el_4$1]: dart.fieldType(html.Element),
    [_el_5$1]: dart.fieldType(html.Element),
    [_el_7$]: dart.fieldType(html.Element),
    [_el_9$]: dart.fieldType(html.Element),
    [_el_10$]: dart.fieldType(html.Element),
    [_el_13$]: dart.fieldType(html.Element),
    [_el_15$]: dart.fieldType(html.Element)
  }));
  dart.defineLazy(src__home__home$46template.ViewHomeComponent0, {
    /*src__home__home$46template.ViewHomeComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  src__home__home$46template.viewFactory_HomeComponent0 = function(parentView, parentIndex) {
    return new src__home__home$46template.ViewHomeComponent0.new(parentView, parentIndex);
  };
  dart.defineLazy(src__home__home$46template, {
    /*src__home__home$46template.styles$HomeComponentHost*/get styles$HomeComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0$1 = Symbol('_compView_0');
  const _HomeComponent_0_5 = Symbol('_HomeComponent_0_5');
  src__home__home$46template._ViewHomeComponentHost0 = class _ViewHomeComponentHost0 extends src__core__linker__app_view.AppView$(src__home__home.HomeComponent) {
    build() {
      this[_compView_0$1] = new src__home__home$46template.ViewHomeComponent0.new(this, 0);
      this.rootEl = this[_compView_0$1].rootEl;
      this[_HomeComponent_0_5] = new src__home__home.HomeComponent.new();
      this[_compView_0$1].create(this[_HomeComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfHomeComponent()).new(0, this, this.rootEl, this[_HomeComponent_0_5]);
    }
    detectChangesInternal() {
      this[_compView_0$1].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0$1];
      t == null ? null : t.destroy();
    }
  };
  (src__home__home$46template._ViewHomeComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0$1] = null;
    this[_HomeComponent_0_5] = null;
    src__home__home$46template._ViewHomeComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = src__home__home$46template._ViewHomeComponentHost0.prototype;
  dart.addTypeTests(src__home__home$46template._ViewHomeComponentHost0);
  dart.setMethodSignature(src__home__home$46template._ViewHomeComponentHost0, () => ({
    __proto__: dart.getMethods(src__home__home$46template._ViewHomeComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__home__home.HomeComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__home__home$46template._ViewHomeComponentHost0, () => ({
    __proto__: dart.getFields(src__home__home$46template._ViewHomeComponentHost0.__proto__),
    [_compView_0$1]: dart.fieldType(src__home__home$46template.ViewHomeComponent0),
    [_HomeComponent_0_5]: dart.fieldType(src__home__home.HomeComponent)
  }));
  src__home__home$46template.viewFactory_HomeComponentHost0 = function(parentView, parentIndex) {
    return new src__home__home$46template._ViewHomeComponentHost0.new(parentView, parentIndex);
  };
  dart.defineLazy(src__home__home$46template, {
    /*src__home__home$46template._HomeComponentNgFactory*/get _HomeComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfHomeComponent()).new("home-component", dart.fn(src__home__home$46template.viewFactory_HomeComponentHost0, AppViewAndintToAppViewOfHomeComponent())));
    }
  });
  dart.copyProperties(src__home__home$46template, {
    get HomeComponentNgFactory() {
      return src__home__home$46template._HomeComponentNgFactory;
    }
  });
  dart.defineLazy(src__home__home$46template, {
    /*src__home__home$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__home__home$46template.initReflector = function() {
    if (dart.test(src__home__home$46template._visited)) {
      return;
    }
    src__home__home$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(src__home__home.HomeComponent), src__home__home$46template.HomeComponentNgFactory);
    angular$46template.initReflector();
  };
  dart.defineLazy(src__signature__signature$46css$46shim, {
    /*src__signature__signature$46css$46shim.styles*/get styles() {
      return ["._nghost-%ID%{position:fixed;top:0;right:0;height:40px;text-align-all:right;background-color:#04f;color:white;opacity:0.9}.signature._ngcontent-%ID%{width:250px;padding:10px}.triangle._ngcontent-%ID%{background-color:#04f;position:absolute;transform:rotate(50deg) translate(-20px,-38px);height:60px;width:80px;right:250px}.blinking._ngcontent-%ID%{position:absolute;top:7px;right:5px;font-size:125%}.text._ngcontent-%ID%{position:absolute;right:10px}"];
    }
  });
  dart.defineLazy(src__signature__signature$46template, {
    /*src__signature__signature$46template.styles$SignatureComponent*/get styles$SignatureComponent() {
      return [src__signature__signature$46css$46shim.styles];
    }
  });
  const _el_0$2 = Symbol('_el_0');
  const _el_1$2 = Symbol('_el_1');
  const _el_2$2 = Symbol('_el_2');
  const _el_4$2 = Symbol('_el_4');
  let const$28;
  src__signature__signature$46template.ViewSignatureComponent0 = class ViewSignatureComponent0 extends src__core__linker__app_view.AppView$(src__signature__signature.SignatureComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      this[_el_0$2] = src__core__linker__app_view.createDivAndAppend(doc, parentRenderNode);
      this[_el_0$2].className = "triangle";
      this.addShimC(this[_el_0$2]);
      this[_el_1$2] = src__core__linker__app_view.createDivAndAppend(doc, parentRenderNode);
      this[_el_1$2].className = "signature";
      this.addShimC(this[_el_1$2]);
      this[_el_2$2] = src__core__linker__app_view.createSpanAndAppend(doc, this[_el_1$2]);
      this[_el_2$2].className = "text";
      this.addShimE(this[_el_2$2]);
      let _text_3 = html.Text.new(" ");
      this[_el_1$2][$append](_text_3);
      this[_el_4$2] = src__core__linker__app_view.createSpanAndAppend(doc, this[_el_1$2]);
      this[_el_4$2].className = "blinking";
      this.addShimE(this[_el_4$2]);
      let _text_5 = html.Text.new("|");
      this[_el_4$2][$append](_text_5);
      this.init(const$28 || (const$28 = dart.constList([], dart.dynamic)), null);
      return null;
    }
  };
  (src__signature__signature$46template.ViewSignatureComponent0.new = function(parentView, parentIndex) {
    this[_el_0$2] = null;
    this[_el_1$2] = null;
    this[_el_2$2] = null;
    this[_el_4$2] = null;
    src__signature__signature$46template.ViewSignatureComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("signature-component"));
    let t = src__signature__signature$46template.ViewSignatureComponent0._renderType;
    t == null ? src__signature__signature$46template.ViewSignatureComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType(dart.test(src__runtime__optimizations.isDevMode) ? "asset:andiqu/lib/src/signature/signature.dart" : null, src__core__metadata__view.ViewEncapsulation.Emulated, src__signature__signature$46template.styles$SignatureComponent) : t;
    this.setupComponentType(src__signature__signature$46template.ViewSignatureComponent0._renderType);
  }).prototype = src__signature__signature$46template.ViewSignatureComponent0.prototype;
  dart.addTypeTests(src__signature__signature$46template.ViewSignatureComponent0);
  dart.setMethodSignature(src__signature__signature$46template.ViewSignatureComponent0, () => ({
    __proto__: dart.getMethods(src__signature__signature$46template.ViewSignatureComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__signature__signature.SignatureComponent), [])
  }));
  dart.setFieldSignature(src__signature__signature$46template.ViewSignatureComponent0, () => ({
    __proto__: dart.getFields(src__signature__signature$46template.ViewSignatureComponent0.__proto__),
    [_el_0$2]: dart.fieldType(html.DivElement),
    [_el_1$2]: dart.fieldType(html.DivElement),
    [_el_2$2]: dart.fieldType(html.Element),
    [_el_4$2]: dart.fieldType(html.Element)
  }));
  dart.defineLazy(src__signature__signature$46template.ViewSignatureComponent0, {
    /*src__signature__signature$46template.ViewSignatureComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  src__signature__signature$46template.viewFactory_SignatureComponent0 = function(parentView, parentIndex) {
    return new src__signature__signature$46template.ViewSignatureComponent0.new(parentView, parentIndex);
  };
  dart.defineLazy(src__signature__signature$46template, {
    /*src__signature__signature$46template.styles$SignatureComponentHost*/get styles$SignatureComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0$2 = Symbol('_compView_0');
  const _SignatureComponent_0_5 = Symbol('_SignatureComponent_0_5');
  src__signature__signature$46template._ViewSignatureComponentHost0 = class _ViewSignatureComponentHost0 extends src__core__linker__app_view.AppView$(src__signature__signature.SignatureComponent) {
    build() {
      this[_compView_0$2] = new src__signature__signature$46template.ViewSignatureComponent0.new(this, 0);
      this.rootEl = this[_compView_0$2].rootEl;
      this[_SignatureComponent_0_5] = new src__signature__signature.SignatureComponent.new();
      this[_compView_0$2].create(this[_SignatureComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfSignatureComponent()).new(0, this, this.rootEl, this[_SignatureComponent_0_5]);
    }
    detectChangesInternal() {
      let firstCheck = this.cdState === 0;
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_SignatureComponent_0_5].ngOnInit();
      }
      this[_compView_0$2].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0$2];
      t == null ? null : t.destroy();
    }
  };
  (src__signature__signature$46template._ViewSignatureComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0$2] = null;
    this[_SignatureComponent_0_5] = null;
    src__signature__signature$46template._ViewSignatureComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = src__signature__signature$46template._ViewSignatureComponentHost0.prototype;
  dart.addTypeTests(src__signature__signature$46template._ViewSignatureComponentHost0);
  dart.setMethodSignature(src__signature__signature$46template._ViewSignatureComponentHost0, () => ({
    __proto__: dart.getMethods(src__signature__signature$46template._ViewSignatureComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__signature__signature.SignatureComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__signature__signature$46template._ViewSignatureComponentHost0, () => ({
    __proto__: dart.getFields(src__signature__signature$46template._ViewSignatureComponentHost0.__proto__),
    [_compView_0$2]: dart.fieldType(src__signature__signature$46template.ViewSignatureComponent0),
    [_SignatureComponent_0_5]: dart.fieldType(src__signature__signature.SignatureComponent)
  }));
  src__signature__signature$46template.viewFactory_SignatureComponentHost0 = function(parentView, parentIndex) {
    return new src__signature__signature$46template._ViewSignatureComponentHost0.new(parentView, parentIndex);
  };
  dart.defineLazy(src__signature__signature$46template, {
    /*src__signature__signature$46template._SignatureComponentNgFactory*/get _SignatureComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfSignatureComponent()).new("signature-component", dart.fn(src__signature__signature$46template.viewFactory_SignatureComponentHost0, AppViewAndintToAppViewOfSignatureComponent())));
    }
  });
  dart.copyProperties(src__signature__signature$46template, {
    get SignatureComponentNgFactory() {
      return src__signature__signature$46template._SignatureComponentNgFactory;
    }
  });
  dart.defineLazy(src__signature__signature$46template, {
    /*src__signature__signature$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__signature__signature$46template.initReflector = function() {
    if (dart.test(src__signature__signature$46template._visited)) {
      return;
    }
    src__signature__signature$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(src__signature__signature.SignatureComponent), src__signature__signature$46template.SignatureComponentNgFactory);
    angular$46template.initReflector();
  };
  dart.trackLibraries("packages/andiqu/andiqu.template.ddc", {
    "package:andiqu/andiqu.template.dart": andiqu$46template,
    "package:andiqu/src/about/about.css.shim.dart": src__about__about$46css$46shim,
    "package:andiqu/src/about/about.template.dart": src__about__about$46template,
    "package:andiqu/src/experience/experience.css.shim.dart": src__experience__experience$46css$46shim,
    "package:andiqu/src/experience/experience.template.dart": src__experience__experience$46template,
    "package:andiqu/src/home/home.css.shim.dart": src__home__home$46css$46shim,
    "package:andiqu/src/home/home.template.dart": src__home__home$46template,
    "package:andiqu/src/signature/signature.css.shim.dart": src__signature__signature$46css$46shim,
    "package:andiqu/src/signature/signature.template.dart": src__signature__signature$46template
  }, '{"version":3,"sourceRoot":"","sources":["andiqu.template.dart","src/about/about.css.shim.dart","src/about/about.template.dart","src/experience/experience.css.shim.dart","src/experience/experience.template.dart","src/home/home.css.shim.dart","src/home/home.template.dart","src/signature/signature.css.shim.dart","src/signature/signature.template.dart"],"names":[],"mappings":"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","file":"andiqu.template.ddc.js"}');
  // Exports:
  return {
    andiqu$46template: andiqu$46template,
    src__about__about$46css$46shim: src__about__about$46css$46shim,
    src__about__about$46template: src__about__about$46template,
    src__experience__experience$46css$46shim: src__experience__experience$46css$46shim,
    src__experience__experience$46template: src__experience__experience$46template,
    src__home__home$46css$46shim: src__home__home$46css$46shim,
    src__home__home$46template: src__home__home$46template,
    src__signature__signature$46css$46shim: src__signature__signature$46css$46shim,
    src__signature__signature$46template: src__signature__signature$46template
  };
});

//# sourceMappingURL=andiqu.template.ddc.js.map
