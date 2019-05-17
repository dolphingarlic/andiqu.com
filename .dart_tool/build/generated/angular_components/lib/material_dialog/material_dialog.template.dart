// **************************************************************************
// Generator: Instance of 'Compiler'
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'material_dialog.dart';
export 'material_dialog.dart';
import 'dart:async';
import 'dart:html';
import 'package:angular/angular.dart';
import 'package:angular_components/focus/focus_trap.dart';
import 'package:angular_components/laminate/components/modal/modal.dart';
import 'package:angular_components/utils/browser/dom_service/dom_service.dart';
import 'package:angular_components/utils/disposer/disposer.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/focus/focus_trap.template.dart' as _ref1;
import 'package:angular_components/laminate/components/modal/modal.template.dart' as _ref2;
import 'package:angular_components/utils/browser/dom_service/dom_service.template.dart' as _ref3;
import 'package:angular_components/utils/disposer/disposer.template.dart' as _ref4;
import 'package:angular_components/material_dialog/material_dialog.scss.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'material_dialog.dart' as import2;
import 'dart:html' as import3;
import '../focus/focus_trap.template.dart' as import4;
import '../focus/focus_trap.dart' as import5;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_if.dart';
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import9;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import11;
import 'package:angular/src/runtime.dart' as import12;
import 'package:angular/angular.dart';
import 'package:angular/src/core/linker/template_ref.dart';
import '../utils/browser/dom_service/dom_service.dart' as import15;
import '../laminate/components/modal/modal.dart' as import16;

final List<dynamic> styles$MaterialDialogComponent = [import0.styles];

class ViewMaterialDialogComponent0 extends AppView<import2.MaterialDialogComponent> {
  import3.Element _el_0;
  import4.ViewFocusTrapComponent0 _compView_0;
  import5.FocusTrapComponent _FocusTrapComponent_0_5;
  import3.DivElement _el_1;
  ViewContainer _appEl_2;
  NgIf _NgIf_2_9;
  import3.DivElement _el_3;
  import3.Text _text_4;
  import3.Element _el_5;
  ViewContainer _appEl_6;
  NgIf _NgIf_6_9;
  bool _expr_1;
  var _expr_2;
  bool _expr_3;
  bool _expr_4;
  static RenderComponentType _renderType;
  ViewMaterialDialogComponent0(AppView<dynamic> parentView, int parentIndex) : super(import9.ViewType.component, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckOnce) {
    rootEl = import3.document.createElement('material-dialog');
    _renderType ??= import11.appViewUtils.createRenderType((import12.isDevMode ? 'asset:angular_components/lib/material_dialog/material_dialog.dart' : null), ViewEncapsulation.Emulated, styles$MaterialDialogComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import2.MaterialDialogComponent> build() {
    final _rootEl = rootEl;
    final import3.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    _compView_0 = import4.ViewFocusTrapComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    parentRenderNode.append(_el_0);
    addShimC(_el_0);
    _FocusTrapComponent_0_5 = import5.FocusTrapComponent();
    var doc = import3.document;
    _el_1 = doc.createElement('div');
    _el_1.className = 'wrapper';
    addShimC(_el_1);
    final _anchor_2 = createViewContainerAnchor();
    _el_1.append(_anchor_2);
    _appEl_2 = ViewContainer(2, 1, this, _anchor_2);
    TemplateRef _TemplateRef_2_8 = TemplateRef(_appEl_2, viewFactory_MaterialDialogComponent1);
    _NgIf_2_9 = NgIf(_appEl_2, _TemplateRef_2_8);
    _el_3 = createDivAndAppend(doc, _el_1);
    _el_3.className = 'error';
    addShimC(_el_3);
    _text_4 = import3.Text('');
    _el_3.append(_text_4);
    _el_5 = createAndAppend(doc, 'main', _el_1);
    addShimE(_el_5);
    project(_el_5, 1);
    final _anchor_6 = createViewContainerAnchor();
    _el_1.append(_anchor_6);
    _appEl_6 = ViewContainer(6, 1, this, _anchor_6);
    TemplateRef _TemplateRef_6_8 = TemplateRef(_appEl_6, viewFactory_MaterialDialogComponent2);
    _NgIf_6_9 = NgIf(_appEl_6, _TemplateRef_6_8);
    _compView_0.create(_FocusTrapComponent_0_5, [
      [_el_1]
    ]);
    ctx.main = _el_5;
    init(const [], null);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import2.MaterialDialogComponent _ctx = ctx;
    _NgIf_2_9.ngIf = _ctx.shouldShowHeader;
    _NgIf_6_9.ngIf = _ctx.shouldShowFooter;
    _appEl_2.detectChangesInNestedViews();
    _appEl_6.detectChangesInNestedViews();
    final currVal_1 = (_ctx.error != null);
    if (import11.checkBinding(_expr_1, currVal_1)) {
      updateClass(_el_3, 'expanded', currVal_1);
      _expr_1 = currVal_1;
    }
    final currVal_2 = (_ctx.error ?? '');
    if (import11.checkBinding(_expr_2, currVal_2)) {
      _text_4.text = currVal_2;
      _expr_2 = currVal_2;
    }
    final currVal_3 = _ctx.shouldShowTopScrollStroke;
    if (import11.checkBinding(_expr_3, currVal_3)) {
      updateClass(_el_5, 'top-scroll-stroke', currVal_3);
      _expr_3 = currVal_3;
    }
    final currVal_4 = _ctx.shouldShowBottomScrollStroke;
    if (import11.checkBinding(_expr_4, currVal_4)) {
      updateClass(_el_5, 'bottom-scroll-stroke', currVal_4);
      _expr_4 = currVal_4;
    }
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _appEl_2?.destroyNestedViews();
    _appEl_6?.destroyNestedViews();
    _compView_0?.destroy();
    _FocusTrapComponent_0_5.ngOnDestroy();
  }
}

AppView<import2.MaterialDialogComponent> viewFactory_MaterialDialogComponent0(AppView<dynamic> parentView, int parentIndex) {
  return ViewMaterialDialogComponent0(parentView, parentIndex);
}

class _ViewMaterialDialogComponent1 extends AppView<import2.MaterialDialogComponent> {
  import3.Element _el_0;
  _ViewMaterialDialogComponent1(AppView<dynamic> parentView, int parentIndex) : super(import9.ViewType.embedded, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialDialogComponent0._renderType;
  }
  @override
  ComponentRef<import2.MaterialDialogComponent> build() {
    var doc = import3.document;
    _el_0 = doc.createElement('header');
    addShimE(_el_0);
    project(_el_0, 0);
    init0(_el_0);
    return null;
  }
}

AppView<import2.MaterialDialogComponent> viewFactory_MaterialDialogComponent1(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialDialogComponent1(parentView, parentIndex);
}

class _ViewMaterialDialogComponent2 extends AppView<import2.MaterialDialogComponent> {
  import3.Element _el_0;
  _ViewMaterialDialogComponent2(AppView<dynamic> parentView, int parentIndex) : super(import9.ViewType.embedded, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialDialogComponent0._renderType;
  }
  @override
  ComponentRef<import2.MaterialDialogComponent> build() {
    var doc = import3.document;
    _el_0 = doc.createElement('footer');
    addShimE(_el_0);
    project(_el_0, 2);
    init0(_el_0);
    return null;
  }
}

AppView<import2.MaterialDialogComponent> viewFactory_MaterialDialogComponent2(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialDialogComponent2(parentView, parentIndex);
}

final List<dynamic> styles$MaterialDialogComponentHost = const [];

class _ViewMaterialDialogComponentHost0 extends AppView<import2.MaterialDialogComponent> {
  ViewMaterialDialogComponent0 _compView_0;
  import2.MaterialDialogComponent _MaterialDialogComponent_0_5;
  _ViewMaterialDialogComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import9.ViewType.host, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef<import2.MaterialDialogComponent> build() {
    _compView_0 = ViewMaterialDialogComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _MaterialDialogComponent_0_5 = import2.MaterialDialogComponent(rootEl, this.injectorGet(import15.DomService, viewData.parentIndex), _compView_0.ref, this.injectorGet(import16.ModalComponent, viewData.parentIndex, null));
    _compView_0.create(_MaterialDialogComponent_0_5, projectableNodes);
    init0(rootEl);
    return ComponentRef(0, this, rootEl, _MaterialDialogComponent_0_5);
  }

  @override
  void detectChangesInternal() {
    bool changed = false;
    if (changed) {
      _compView_0.markAsCheckOnce();
    }
    if (!import11.AppViewUtils.throwOnChanges) {
      _MaterialDialogComponent_0_5.ngAfterContentChecked();
    }
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
    _MaterialDialogComponent_0_5.ngOnDestroy();
  }
}

AppView<import2.MaterialDialogComponent> viewFactory_MaterialDialogComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialDialogComponentHost0(parentView, parentIndex);
}

const ComponentFactory<import2.MaterialDialogComponent> _MaterialDialogComponentNgFactory = const ComponentFactory('material-dialog', viewFactory_MaterialDialogComponentHost0);
ComponentFactory<import2.MaterialDialogComponent> get MaterialDialogComponentNgFactory {
  return _MaterialDialogComponentNgFactory;
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(MaterialDialogComponent, MaterialDialogComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
  _ref4.initReflector();
}
