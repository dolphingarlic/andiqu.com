// **************************************************************************
// Generator: Instance of 'Compiler'
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'material_tab.dart';
export 'material_tab.dart';
import 'dart:async';
import 'dart:html';
import 'package:angular/angular.dart';
import 'package:angular_components/content/deferred_content_aware.dart';
import 'package:angular_components/focus/focus.dart';
import 'package:angular_components/utils/id_generator/id_generator.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/content/deferred_content_aware.template.dart' as _ref1;
import 'package:angular_components/focus/focus.template.dart' as _ref2;
import 'package:angular_components/utils/id_generator/id_generator.template.dart' as _ref3;
import 'package:angular_components/material_tab/material_tab.scss.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'material_tab.dart' as import2;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_if.dart';
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import6;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'dart:html' as import8;
import 'package:angular/src/core/linker/app_view_utils.dart' as import9;
import 'package:angular/src/runtime.dart' as import10;
import 'package:angular/angular.dart';
import 'package:angular/src/core/linker/template_ref.dart';
import '../utils/id_generator/id_generator.dart' as import13;
import '../content/deferred_content_aware.dart' as import14;

final List<dynamic> styles$MaterialTabComponent = [import0.styles];

class ViewMaterialTabComponent0 extends AppView<import2.MaterialTabComponent> {
  ViewContainer _appEl_0;
  NgIf _NgIf_0_9;
  bool _expr_1;
  var _expr_2;
  var _expr_3;
  static RenderComponentType _renderType;
  ViewMaterialTabComponent0(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.component, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import8.document.createElement('material-tab');
    createAttr(rootEl, 'role', import2.MaterialTabComponent.hostRole);
    _renderType ??= import9.appViewUtils.createRenderType((import10.isDevMode ? 'asset:angular_components/lib/material_tab/material_tab.dart' : null), ViewEncapsulation.Emulated, styles$MaterialTabComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import2.MaterialTabComponent> build() {
    final _rootEl = rootEl;
    final import8.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    final _anchor_0 = createViewContainerAnchor();
    parentRenderNode.append(_anchor_0);
    _appEl_0 = ViewContainer(0, null, this, _anchor_0);
    TemplateRef _TemplateRef_0_8 = TemplateRef(_appEl_0, viewFactory_MaterialTabComponent1);
    _NgIf_0_9 = NgIf(_appEl_0, _TemplateRef_0_8);
    init(const [], null);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import2.MaterialTabComponent _ctx = ctx;
    _NgIf_0_9.ngIf = _ctx.active;
    _appEl_0.detectChangesInNestedViews();
  }

  @override
  void destroyInternal() {
    _appEl_0?.destroyNestedViews();
  }

  void detectHostChanges(bool firstCheck) {
    final currVal_1 = ctx.active;
    if (import9.checkBinding(_expr_1, currVal_1)) {
      updateElemClass(rootEl, 'material-tab', currVal_1);
      _expr_1 = currVal_1;
    }
    final currVal_2 = ctx.panelId;
    if (import9.checkBinding(_expr_2, currVal_2)) {
      setAttr(rootEl, 'id', currVal_2?.toString());
      _expr_2 = currVal_2;
    }
    final currVal_3 = ctx.tabId;
    if (import9.checkBinding(_expr_3, currVal_3)) {
      setAttr(rootEl, 'aria-labelledby', currVal_3?.toString());
      _expr_3 = currVal_3;
    }
  }
}

AppView<import2.MaterialTabComponent> viewFactory_MaterialTabComponent0(AppView<dynamic> parentView, int parentIndex) {
  return ViewMaterialTabComponent0(parentView, parentIndex);
}

class _ViewMaterialTabComponent1 extends AppView<import2.MaterialTabComponent> {
  import8.DivElement _el_0;
  _ViewMaterialTabComponent1(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.embedded, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialTabComponent0._renderType;
  }
  @override
  ComponentRef<import2.MaterialTabComponent> build() {
    var doc = import8.document;
    _el_0 = doc.createElement('div');
    _el_0.className = 'tab-content';
    addShimC(_el_0);
    project(_el_0, 0);
    init0(_el_0);
    return null;
  }
}

AppView<import2.MaterialTabComponent> viewFactory_MaterialTabComponent1(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialTabComponent1(parentView, parentIndex);
}

final List<dynamic> styles$MaterialTabComponentHost = const [];

class _ViewMaterialTabComponentHost0 extends AppView<import2.MaterialTabComponent> {
  ViewMaterialTabComponent0 _compView_0;
  import2.MaterialTabComponent _MaterialTabComponent_0_5;
  _ViewMaterialTabComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.host, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef<import2.MaterialTabComponent> build() {
    _compView_0 = ViewMaterialTabComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _MaterialTabComponent_0_5 = import2.MaterialTabComponent(rootEl, this.injectorGet(import13.IdGenerator, viewData.parentIndex, null));
    _compView_0.create(_MaterialTabComponent_0_5, projectableNodes);
    init0(rootEl);
    return ComponentRef(0, this, rootEl, _MaterialTabComponent_0_5);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if (((identical(token, import2.Tab) || identical(token, import14.DeferredContentAware)) && (0 == nodeIndex))) {
      return _MaterialTabComponent_0_5;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    bool firstCheck = (this.cdState == 0);
    _compView_0.detectHostChanges(firstCheck);
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
  }
}

AppView<import2.MaterialTabComponent> viewFactory_MaterialTabComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialTabComponentHost0(parentView, parentIndex);
}

const ComponentFactory<import2.MaterialTabComponent> _MaterialTabComponentNgFactory = const ComponentFactory('material-tab', viewFactory_MaterialTabComponentHost0);
ComponentFactory<import2.MaterialTabComponent> get MaterialTabComponentNgFactory {
  return _MaterialTabComponentNgFactory;
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(MaterialTabComponent, MaterialTabComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
}
