// **************************************************************************
// Generator: Instance of 'Compiler'
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'andiqu.dart';
export 'andiqu.dart';
import 'package:angular/angular.dart';
import 'package:angular_components/angular_components.dart';
import 'src/experience/experience.dart';
import 'src/about/about.dart';
import 'src/home/home.dart';
import 'src/signature/signature.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/angular_components.template.dart' as _ref1;
import 'src/about/about.template.dart' as _ref2;
import 'src/experience/experience.template.dart' as _ref3;
import 'src/home/home.template.dart' as _ref4;
import 'src/signature/signature.template.dart' as _ref5;
import 'package:andiqu/andiqu.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'andiqu.dart' as import2;
import 'dart:html' as import3;
import 'src/home/home.template.dart' as import4;
import 'src/home/home.dart' as import5;
import 'src/about/about.template.dart' as import6;
import 'src/about/about.dart' as import7;
import 'src/signature/signature.template.dart' as import8;
import 'src/signature/signature.dart' as import9;
import 'src/experience/experience.template.dart' as import10;
import 'src/experience/experience.dart' as import11;
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import13;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import15;
import 'package:angular/src/runtime.dart' as import16;
import 'package:angular/angular.dart';
import 'package:angular_components/utils/angular/imperative_view/imperative_view.dart' as import18;
import 'package:angular_components/laminate/ruler/dom_ruler.dart' as import19;
import 'package:angular_components/utils/angular/managed_zone/angular_2.dart' as import20;
import 'package:angular_components/src/laminate/overlay/render/overlay_style_config.dart' as import21;
import 'package:angular_components/laminate/overlay/zindexer.dart' as import22;
import 'package:angular_components/src/laminate/overlay/render/overlay_dom_render_service.dart' as import23;
import 'package:angular_components/src/laminate/overlay/overlay_service.dart' as import24;
import 'dart:core';
import 'package:angular_components/laminate/enums/alignment.dart' as import26;
import 'package:angular_components/src/laminate/popup/dom_popup_source.dart' as import27;
import 'package:quiver/time.dart' as import28;
import 'package:angular_components/utils/browser/window/module.dart' as import29;
import 'package:angular_components/utils/browser/dom_service/angular_2.dart' as import30;
import 'package:angular_components/utils/browser/dom_service/dom_service.dart' as import31;
import 'package:angular_components/utils/disposer/disposer.dart' as import32;
import 'package:angular/src/core/zone/ng_zone.dart' as import33;
import 'package:angular/src/core/linker/component_loader.dart' as import34;
import 'package:angular_components/laminate/overlay/module.dart' as import35;
import 'package:angular/src/core/di/opaque_token.dart' as import36;
import 'package:angular_components/src/utils/angular/managed_zone/managed_zone.dart' as import37;
import 'package:angular_components/laminate/enums/alignment.dart' as import38;

final List<dynamic> styles$AppComponent = [import0.styles];

class ViewAppComponent0 extends AppView<import2.AppComponent> {
  import3.Element _el_0;
  import3.Element _el_1;
  import4.ViewHomeComponent0 _compView_1;
  import5.HomeComponent _HomeComponent_1_5;
  import3.Element _el_2;
  import6.ViewAboutComponent0 _compView_2;
  import7.AboutComponent _AboutComponent_2_5;
  import3.Element _el_3;
  import8.ViewSignatureComponent0 _compView_3;
  import9.SignatureComponent _SignatureComponent_3_5;
  import3.Element _el_4;
  import3.Element _el_5;
  import10.ViewExperienceComponent0 _compView_5;
  import11.ExperienceComponent _ExperienceComponent_5_5;
  static RenderComponentType _renderType;
  ViewAppComponent0(AppView<dynamic> parentView, int parentIndex) : super(import13.ViewType.component, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import3.document.createElement('andiqu');
    _renderType ??= import15.appViewUtils.createRenderType((import16.isDevMode ? 'asset:andiqu/lib/andiqu.dart' : null), ViewEncapsulation.Emulated, styles$AppComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import2.AppComponent> build() {
    final _rootEl = rootEl;
    final import3.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    var doc = import3.document;
    _el_0 = createAndAppend(doc, 'main', parentRenderNode);
    createAttr(_el_0, 'id', 'introduction');
    addShimE(_el_0);
    _compView_1 = import4.ViewHomeComponent0(this, 1);
    _el_1 = _compView_1.rootEl;
    _el_0.append(_el_1);
    addShimC(_el_1);
    _HomeComponent_1_5 = import5.HomeComponent();
    _compView_1.create(_HomeComponent_1_5, []);
    _compView_2 = import6.ViewAboutComponent0(this, 2);
    _el_2 = _compView_2.rootEl;
    _el_0.append(_el_2);
    addShimC(_el_2);
    _AboutComponent_2_5 = import7.AboutComponent();
    _compView_2.create(_AboutComponent_2_5, []);
    _compView_3 = import8.ViewSignatureComponent0(this, 3);
    _el_3 = _compView_3.rootEl;
    _el_0.append(_el_3);
    addShimC(_el_3);
    _SignatureComponent_3_5 = import9.SignatureComponent();
    _compView_3.create(_SignatureComponent_3_5, []);
    _el_4 = createAndAppend(doc, 'main', parentRenderNode);
    createAttr(_el_4, 'id', 'experience');
    addShimE(_el_4);
    _compView_5 = import10.ViewExperienceComponent0(this, 5);
    _el_5 = _compView_5.rootEl;
    _el_4.append(_el_5);
    addShimC(_el_5);
    _ExperienceComponent_5_5 = import11.ExperienceComponent();
    _compView_5.create(_ExperienceComponent_5_5, []);
    init(const [], null);
    return null;
  }

  @override
  void detectChangesInternal() {
    bool firstCheck = (this.cdState == 0);
    if ((!import15.AppViewUtils.throwOnChanges && firstCheck)) {
      _SignatureComponent_3_5.ngOnInit();
    }
    _compView_1.detectChanges();
    _compView_2.detectChanges();
    _compView_3.detectChanges();
    _compView_5.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_1?.destroy();
    _compView_2?.destroy();
    _compView_3?.destroy();
    _compView_5?.destroy();
  }
}

AppView<import2.AppComponent> viewFactory_AppComponent0(AppView<dynamic> parentView, int parentIndex) {
  return ViewAppComponent0(parentView, parentIndex);
}

final List<dynamic> styles$AppComponentHost = const [];

class _ViewAppComponentHost0 extends AppView<import2.AppComponent> {
  ViewAppComponent0 _compView_0;
  import2.AppComponent _AppComponent_0_5;
  dynamic __Document_0_6;
  dynamic __Window_0_7;
  dynamic __DomService_0_8;
  import18.AcxImperativeViewUtils __AcxImperativeViewUtils_0_9;
  import19.DomRuler __DomRuler_0_10;
  import20.Angular2ManagedZone __ManagedZone_0_11;
  dynamic __overlayContainerName_0_12;
  dynamic __overlayContainerParent_0_13;
  dynamic __overlayContainer_0_14;
  bool __overlaySyncDom_0_15;
  bool __overlayRepositionLoop_0_16;
  import21.OverlayStyleConfig __OverlayStyleConfig_0_17;
  import22.ZIndexer __ZIndexer_0_18;
  import23.OverlayDomRenderService __OverlayDomRenderService_0_19;
  import24.OverlayService __OverlayService_0_20;
  List<import26.RelativePosition> __defaultPopupPositions_0_21;
  import27.DomPopupSourceFactory __DomPopupSourceFactory_0_22;
  import28.Clock __Clock_0_23;
  _ViewAppComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import13.ViewType.host, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  dynamic get _Document_0_6 {
    if ((this.__Document_0_6 == null)) {
      (__Document_0_6 = import29.getDocument());
    }
    return this.__Document_0_6;
  }

  dynamic get _Window_0_7 {
    if ((this.__Window_0_7 == null)) {
      (__Window_0_7 = import29.getWindow());
    }
    return this.__Window_0_7;
  }

  dynamic get _DomService_0_8 {
    if ((this.__DomService_0_8 == null)) {
      (__DomService_0_8 = import30.createDomService(this.injectorGet(import31.DomService, this.viewData.parentIndex, null), this.injectorGet(import32.Disposer, this.viewData.parentIndex, null), this.injectorGet(import33.NgZone, this.viewData.parentIndex), this._Window_0_7));
    }
    return this.__DomService_0_8;
  }

  import18.AcxImperativeViewUtils get _AcxImperativeViewUtils_0_9 {
    if ((this.__AcxImperativeViewUtils_0_9 == null)) {
      (__AcxImperativeViewUtils_0_9 = import18.AcxImperativeViewUtils(this.injectorGet(import34.ComponentLoader, this.viewData.parentIndex), this._DomService_0_8));
    }
    return this.__AcxImperativeViewUtils_0_9;
  }

  import19.DomRuler get _DomRuler_0_10 {
    if ((this.__DomRuler_0_10 == null)) {
      (__DomRuler_0_10 = import19.DomRuler(this._Document_0_6, this._DomService_0_8));
    }
    return this.__DomRuler_0_10;
  }

  import20.Angular2ManagedZone get _ManagedZone_0_11 {
    if ((this.__ManagedZone_0_11 == null)) {
      (__ManagedZone_0_11 = import20.Angular2ManagedZone(this.injectorGet(import33.NgZone, this.viewData.parentIndex)));
    }
    return this.__ManagedZone_0_11;
  }

  dynamic get _overlayContainerName_0_12 {
    if ((this.__overlayContainerName_0_12 == null)) {
      (__overlayContainerName_0_12 = import35.getDefaultContainerName(this.injectorGet(const import36.OpaqueToken('overlayContainerName'), this.viewData.parentIndex, null)));
    }
    return this.__overlayContainerName_0_12;
  }

  dynamic get _overlayContainerParent_0_13 {
    if ((this.__overlayContainerParent_0_13 == null)) {
      (__overlayContainerParent_0_13 = import35.getOverlayContainerParent(this._Document_0_6, this.injectorGet(const import36.OpaqueToken('overlayContainerParent'), this.viewData.parentIndex, null)));
    }
    return this.__overlayContainerParent_0_13;
  }

  dynamic get _overlayContainer_0_14 {
    if ((this.__overlayContainer_0_14 == null)) {
      (__overlayContainer_0_14 = import35.getDefaultContainer(this._overlayContainerName_0_12, this._overlayContainerParent_0_13, this.injectorGet(const import36.OpaqueToken('overlayContainer'), this.viewData.parentIndex, null)));
    }
    return this.__overlayContainer_0_14;
  }

  bool get _overlaySyncDom_0_15 {
    if ((this.__overlaySyncDom_0_15 == null)) {
      (__overlaySyncDom_0_15 = true);
    }
    return this.__overlaySyncDom_0_15;
  }

  bool get _overlayRepositionLoop_0_16 {
    if ((this.__overlayRepositionLoop_0_16 == null)) {
      (__overlayRepositionLoop_0_16 = true);
    }
    return this.__overlayRepositionLoop_0_16;
  }

  import21.OverlayStyleConfig get _OverlayStyleConfig_0_17 {
    if ((this.__OverlayStyleConfig_0_17 == null)) {
      (__OverlayStyleConfig_0_17 = import21.OverlayStyleConfig(this._Document_0_6));
    }
    return this.__OverlayStyleConfig_0_17;
  }

  import22.ZIndexer get _ZIndexer_0_18 {
    if ((this.__ZIndexer_0_18 == null)) {
      (__ZIndexer_0_18 = import22.ZIndexer());
    }
    return this.__ZIndexer_0_18;
  }

  import23.OverlayDomRenderService get _OverlayDomRenderService_0_19 {
    if ((this.__OverlayDomRenderService_0_19 == null)) {
      (__OverlayDomRenderService_0_19 = import23.OverlayDomRenderService(this._OverlayStyleConfig_0_17, this._overlayContainer_0_14, this._overlayContainerName_0_12, this._DomRuler_0_10, this._DomService_0_8, this._AcxImperativeViewUtils_0_9, this._overlaySyncDom_0_15, this._overlayRepositionLoop_0_16, this._ZIndexer_0_18));
    }
    return this.__OverlayDomRenderService_0_19;
  }

  import24.OverlayService get _OverlayService_0_20 {
    if ((this.__OverlayService_0_20 == null)) {
      (__OverlayService_0_20 = import24.OverlayService(this.injectorGet(import33.NgZone, this.viewData.parentIndex), this._overlaySyncDom_0_15, this._OverlayDomRenderService_0_19, this.injectorGet(import24.OverlayService, this.viewData.parentIndex, null)));
    }
    return this.__OverlayService_0_20;
  }

  List<import26.RelativePosition> get _defaultPopupPositions_0_21 {
    if ((this.__defaultPopupPositions_0_21 == null)) {
      (__defaultPopupPositions_0_21 = const [import26.RelativePosition(animationOrigin: 'top center'), import26.RelativePosition(animationOrigin: 'top right', originX: import26.Alignment('End', 'flex-end')), import26.RelativePosition(animationOrigin: 'top left', originX: import26.Alignment('Start', 'flex-start')), import26.RelativePosition(animationOrigin: 'bottom center', originY: import26.Alignment('End', 'flex-end')), import26.RelativePosition(animationOrigin: 'bottom right', originX: import26.Alignment('End', 'flex-end'), originY: import26.Alignment('End', 'flex-end')), import26.RelativePosition(animationOrigin: 'bottom left', originX: import26.Alignment('Start', 'flex-start'), originY: import26.Alignment('End', 'flex-end'))]);
    }
    return this.__defaultPopupPositions_0_21;
  }

  import27.DomPopupSourceFactory get _DomPopupSourceFactory_0_22 {
    if ((this.__DomPopupSourceFactory_0_22 == null)) {
      (__DomPopupSourceFactory_0_22 = import27.DomPopupSourceFactory(this._DomRuler_0_10));
    }
    return this.__DomPopupSourceFactory_0_22;
  }

  import28.Clock get _Clock_0_23 {
    if ((this.__Clock_0_23 == null)) {
      (__Clock_0_23 = const import28.Clock());
    }
    return this.__Clock_0_23;
  }

  @override
  ComponentRef<import2.AppComponent> build() {
    _compView_0 = ViewAppComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _AppComponent_0_5 = import2.AppComponent();
    _compView_0.create(_AppComponent_0_5, projectableNodes);
    init0(rootEl);
    return ComponentRef(0, this, rootEl, _AppComponent_0_5);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import3.Document) && (0 == nodeIndex))) {
      return _Document_0_6;
    }
    if ((identical(token, import3.Window) && (0 == nodeIndex))) {
      return _Window_0_7;
    }
    if ((identical(token, import31.DomService) && (0 == nodeIndex))) {
      return _DomService_0_8;
    }
    if ((identical(token, import18.AcxImperativeViewUtils) && (0 == nodeIndex))) {
      return _AcxImperativeViewUtils_0_9;
    }
    if ((identical(token, import19.DomRuler) && (0 == nodeIndex))) {
      return _DomRuler_0_10;
    }
    if ((identical(token, import37.ManagedZone) && (0 == nodeIndex))) {
      return _ManagedZone_0_11;
    }
    if ((identical(token, const import36.OpaqueToken('overlayContainerName')) && (0 == nodeIndex))) {
      return _overlayContainerName_0_12;
    }
    if ((identical(token, const import36.OpaqueToken('overlayContainerParent')) && (0 == nodeIndex))) {
      return _overlayContainerParent_0_13;
    }
    if ((identical(token, const import36.OpaqueToken('overlayContainer')) && (0 == nodeIndex))) {
      return _overlayContainer_0_14;
    }
    if ((identical(token, const import36.OpaqueToken('overlaySyncDom')) && (0 == nodeIndex))) {
      return _overlaySyncDom_0_15;
    }
    if ((identical(token, const import36.OpaqueToken('overlayRepositionLoop')) && (0 == nodeIndex))) {
      return _overlayRepositionLoop_0_16;
    }
    if ((identical(token, import21.OverlayStyleConfig) && (0 == nodeIndex))) {
      return _OverlayStyleConfig_0_17;
    }
    if ((identical(token, import22.ZIndexer) && (0 == nodeIndex))) {
      return _ZIndexer_0_18;
    }
    if ((identical(token, import23.OverlayDomRenderService) && (0 == nodeIndex))) {
      return _OverlayDomRenderService_0_19;
    }
    if ((identical(token, import24.OverlayService) && (0 == nodeIndex))) {
      return _OverlayService_0_20;
    }
    if ((identical(token, const import36.OpaqueToken<List<import38.RelativePosition>>('defaultPopupPositions')) && (0 == nodeIndex))) {
      return _defaultPopupPositions_0_21;
    }
    if ((identical(token, import27.DomPopupSourceFactory) && (0 == nodeIndex))) {
      return _DomPopupSourceFactory_0_22;
    }
    if (((identical(token, import28.Clock) || identical(token, const import36.OpaqueToken('third_party.dart_src.acx.material_datepicker.datepickerClock'))) && (0 == nodeIndex))) {
      return _Clock_0_23;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
  }
}

AppView<import2.AppComponent> viewFactory_AppComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return _ViewAppComponentHost0(parentView, parentIndex);
}

const ComponentFactory<import2.AppComponent> _AppComponentNgFactory = const ComponentFactory('andiqu', viewFactory_AppComponentHost0);
ComponentFactory<import2.AppComponent> get AppComponentNgFactory {
  return _AppComponentNgFactory;
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(AppComponent, AppComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
  _ref4.initReflector();
  _ref5.initReflector();
}
