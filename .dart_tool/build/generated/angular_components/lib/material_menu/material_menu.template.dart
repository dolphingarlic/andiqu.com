// **************************************************************************
// Generator: Instance of 'Compiler'
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'material_menu.dart';
export 'material_menu.dart';
import 'dart:async';
import 'package:angular/angular.dart';
import 'package:angular_components/interfaces/has_disabled.dart';
import 'package:angular_components/focus/focus.dart';
import 'package:angular_components/material_button/material_button.dart';
import 'package:angular_components/material_icon/material_icon.dart';
import 'package:angular_components/material_menu/menu_popup.dart';
import 'package:angular_components/material_menu/menu_popup_wrapper.dart';
import 'package:angular_components/material_popup/material_popup.dart';
import 'package:angular_components/material_tooltip/material_tooltip.dart';
import 'package:angular_components/mixins/focusable_mixin.dart';
import 'package:angular_components/model/menu/menu.dart';
import 'package:angular_components/utils/disposer/disposer.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/focus/focus.template.dart' as _ref1;
import 'package:angular_components/interfaces/has_disabled.template.dart' as _ref2;
import 'package:angular_components/material_button/material_button.template.dart' as _ref3;
import 'package:angular_components/material_icon/material_icon.template.dart' as _ref4;
import 'package:angular_components/material_menu/menu_popup.template.dart' as _ref5;
import 'package:angular_components/material_menu/menu_popup_wrapper.template.dart' as _ref6;
import 'package:angular_components/material_popup/material_popup.template.dart' as _ref7;
import 'package:angular_components/material_tooltip/material_tooltip.template.dart' as _ref8;
import 'package:angular_components/mixins/focusable_mixin.template.dart' as _ref9;
import 'package:angular_components/model/menu/menu.template.dart' as _ref10;
import 'package:angular_components/utils/disposer/disposer.template.dart' as _ref11;
import 'package:angular/src/core/linker/app_view.dart';
import 'material_menu.dart' as import1;
import 'dart:html' as import2;
import '../material_button/material_button.template.dart' as import3;
import 'package:angular/src/core/linker/view_container.dart';
import '../theme/dark_theme.dart' as import5;
import '../material_button/material_button.dart' as import6;
import '../src/material_tooltip/tooltip.dart' as import7;
import '../src/laminate/popup/popup_source_directive.dart' as import8;
import 'package:angular/src/common/directives/ng_if.dart';
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import11;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import13;
import 'package:angular/src/runtime.dart' as import14;
import 'package:angular/angular.dart';
import '../material_tooltip/module.dart' as import16;
import '../src/material_tooltip/tooltip_controller.dart' as import17;
import '../utils/disposer/disposer.dart' as import18;
import 'package:angular/src/core/di/opaque_token.dart' as import19;
import '../src/laminate/popup/dom_popup_source.dart' as import20;
import '../utils/angular/reference/reference.dart' as import21;
import '../focus/focus_interface.dart' as import22;
import 'package:angular/src/core/linker/template_ref.dart';
import '../button_decorator/button_decorator.dart' as import24;
import '../interfaces/has_disabled.dart' as import25;
import '../material_icon/material_icon.template.dart' as import26;
import '../material_icon/material_icon.dart' as import27;
import 'menu_popup.template.dart' as import28;
import 'menu_popup.dart' as import29;

final List<dynamic> styles$MaterialMenuComponent = const [];

class ViewMaterialMenuComponent0 extends AppView<import1.MaterialMenuComponent> {
  import2.Element _el_0;
  import3.ViewMaterialButtonComponent0 _compView_0;
  ViewContainer _appEl_0;
  import5.AcxDarkTheme _AcxDarkTheme_0_8;
  import6.MaterialButtonComponent _MaterialButtonComponent_0_9;
  import7.MaterialTooltipDirective _MaterialTooltipDirective_0_10;
  import8.PopupSourceDirective _PopupSourceDirective_0_11;
  dynamic __TooltipController_0_14;
  ViewContainer _appEl_1;
  NgIf _NgIf_1_9;
  ViewContainer _appEl_2;
  NgIf _NgIf_2_9;
  ViewContainer _appEl_4;
  bool _query_MenuPopupComponent_1_1_isDirty = true;
  NgIf _NgIf_4_9;
  var _expr_0;
  var _expr_1;
  bool _expr_2;
  String _expr_3;
  bool _expr_4;
  static RenderComponentType _renderType;
  ViewMaterialMenuComponent0(AppView<dynamic> parentView, int parentIndex) : super(import11.ViewType.component, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckOnce) {
    rootEl = import2.document.createElement('material-menu');
    _renderType ??= import13.appViewUtils.createRenderType((import14.isDevMode ? 'asset:angular_components/lib/material_menu/material_menu.dart' : null), ViewEncapsulation.None, styles$MaterialMenuComponent);
    setupComponentType(_renderType);
  }
  dynamic get _TooltipController_0_14 {
    if ((this.__TooltipController_0_14 == null)) {
      (__TooltipController_0_14 = import16.createTooltipController(this.parentView.injectorGet(import17.TooltipController, this.viewData.parentIndex, null), this.parentView.injectorGet(import18.Disposer, this.viewData.parentIndex, null)));
    }
    return this.__TooltipController_0_14;
  }

  @override
  ComponentRef<import1.MaterialMenuComponent> build() {
    final _rootEl = rootEl;
    final import2.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    _compView_0 = import3.ViewMaterialButtonComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    parentRenderNode.append(_el_0);
    _el_0.className = 'trigger-button';
    createAttr(_el_0, 'popupSource', '');
    _appEl_0 = ViewContainer(0, null, this, _el_0);
    _AcxDarkTheme_0_8 = import5.AcxDarkTheme(parentView.injectorGet(const import19.OpaqueToken('acxDarkTheme'), viewData.parentIndex, null));
    _MaterialButtonComponent_0_9 = import6.MaterialButtonComponent(_el_0, _AcxDarkTheme_0_8, _compView_0.ref, null);
    _MaterialTooltipDirective_0_10 = import7.MaterialTooltipDirective(parentView.injectorGet(import20.DomPopupSourceFactory, viewData.parentIndex), _appEl_0, _el_0, _appEl_0, _compView_0.ref, parentView.injectorGet(import2.Window, viewData.parentIndex));
    _PopupSourceDirective_0_11 = import8.PopupSourceDirective(parentView.injectorGet(import20.DomPopupSourceFactory, viewData.parentIndex), _el_0, parentView.injectorGet(import21.ReferenceDirective, viewData.parentIndex, null), parentView.injectorGet(import22.Focusable, viewData.parentIndex, null), null);
    final _anchor_1 = createViewContainerAnchor();
    _appEl_1 = ViewContainer(1, 0, this, _anchor_1);
    TemplateRef _TemplateRef_1_8 = TemplateRef(_appEl_1, viewFactory_MaterialMenuComponent1);
    _NgIf_1_9 = NgIf(_appEl_1, _TemplateRef_1_8);
    final _anchor_2 = createViewContainerAnchor();
    _appEl_2 = ViewContainer(2, 0, this, _anchor_2);
    TemplateRef _TemplateRef_2_8 = TemplateRef(_appEl_2, viewFactory_MaterialMenuComponent2);
    _NgIf_2_9 = NgIf(_appEl_2, _TemplateRef_2_8);
    import2.Text _text_3 = import2.Text(' ');
    _compView_0.create(_MaterialButtonComponent_0_9, [
      <dynamic>[_appEl_1, _appEl_2, _text_3]..addAll(projectableNodes[0])
    ]);
    final _anchor_4 = createViewContainerAnchor();
    parentRenderNode.append(_anchor_4);
    _appEl_4 = ViewContainer(4, null, this, _anchor_4);
    TemplateRef _TemplateRef_4_8 = TemplateRef(_appEl_4, viewFactory_MaterialMenuComponent3);
    _NgIf_4_9 = NgIf(_appEl_4, _TemplateRef_4_8);
    final subscription_0 = _MaterialButtonComponent_0_9.trigger.listen(eventHandler0(ctx.handleButtonClick));
    ctx.button = _MaterialButtonComponent_0_9;
    init(const [], [subscription_0]);
    return null;
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import5.AcxDarkTheme) && ((0 <= nodeIndex) && (nodeIndex <= 3)))) {
      return _AcxDarkTheme_0_8;
    }
    if ((((identical(token, import6.MaterialButtonComponent) || identical(token, import24.ButtonDirective)) || identical(token, import25.HasDisabled)) && ((0 <= nodeIndex) && (nodeIndex <= 3)))) {
      return _MaterialButtonComponent_0_9;
    }
    if ((identical(token, import17.TooltipController) && ((0 <= nodeIndex) && (nodeIndex <= 3)))) {
      return _TooltipController_0_14;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final import1.MaterialMenuComponent _ctx = ctx;
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    changed = false;
    final currVal_2 = _ctx.disabled;
    if (import13.checkBinding(_expr_2, currVal_2)) {
      _MaterialButtonComponent_0_9.disabled = currVal_2;
      changed = true;
      _expr_2 = currVal_2;
    }
    if (changed) {
      _compView_0.markAsCheckOnce();
    }
    if ((!import13.AppViewUtils.throwOnChanges && firstCheck)) {
      _MaterialButtonComponent_0_9.ngOnInit();
    }
    final currVal_3 = _ctx.tooltipText;
    if (import13.checkBinding(_expr_3, currVal_3)) {
      _MaterialTooltipDirective_0_10.text = currVal_3;
      _expr_3 = currVal_3;
    }
    final currVal_4 = _ctx.hasTooltip;
    if (import13.checkBinding(_expr_4, currVal_4)) {
      _MaterialTooltipDirective_0_10.canShow = currVal_4;
      _expr_4 = currVal_4;
    }
    if ((!import13.AppViewUtils.throwOnChanges && firstCheck)) {
      _MaterialTooltipDirective_0_10.ngOnInit();
    }
    _NgIf_1_9.ngIf = (_ctx.menu.uiIcon != null);
    _NgIf_2_9.ngIf = (_ctx.buttonText != null);
    _NgIf_4_9.ngIf = _ctx.hasSubmenu;
    _appEl_0.detectChangesInNestedViews();
    _appEl_1.detectChangesInNestedViews();
    _appEl_2.detectChangesInNestedViews();
    _appEl_4.detectChangesInNestedViews();
    if (!import13.AppViewUtils.throwOnChanges) {
      if (_query_MenuPopupComponent_1_1_isDirty) {
        ctx.menuPopup = import13.firstOrNull(_appEl_4.mapNestedViews((_ViewMaterialMenuComponent3 nestedView) {
          return [nestedView._MenuPopupComponent_0_5];
        }));
        _query_MenuPopupComponent_1_1_isDirty = false;
      }
    }
    final currVal_0 = _ctx.ariaLabel;
    if (import13.checkBinding(_expr_0, currVal_0)) {
      setAttr(_el_0, 'aria-label', currVal_0?.toString());
      _expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.hasIcon;
    if (import13.checkBinding(_expr_1, currVal_1)) {
      setAttr(_el_0, 'icon', currVal_1?.toString());
      _expr_1 = currVal_1;
    }
    _compView_0.detectHostChanges(firstCheck);
    _compView_0.detectChanges();
    if (!import13.AppViewUtils.throwOnChanges) {
      if (firstCheck) {
        _MaterialTooltipDirective_0_10.ngAfterViewInit();
        _PopupSourceDirective_0_11.ngAfterViewInit();
      }
    }
  }

  @override
  void destroyInternal() {
    _appEl_0?.destroyNestedViews();
    _appEl_1?.destroyNestedViews();
    _appEl_2?.destroyNestedViews();
    _appEl_4?.destroyNestedViews();
    _compView_0?.destroy();
    _MaterialTooltipDirective_0_10.ngOnDestroy();
    _PopupSourceDirective_0_11.ngOnDestroy();
  }
}

AppView<import1.MaterialMenuComponent> viewFactory_MaterialMenuComponent0(AppView<dynamic> parentView, int parentIndex) {
  return ViewMaterialMenuComponent0(parentView, parentIndex);
}

class _ViewMaterialMenuComponent1 extends AppView<import1.MaterialMenuComponent> {
  import2.Element _el_0;
  import26.ViewMaterialIconComponent0 _compView_0;
  import27.MaterialIconComponent _MaterialIconComponent_0_5;
  var _expr_0;
  _ViewMaterialMenuComponent1(AppView<dynamic> parentView, int parentIndex) : super(import11.ViewType.embedded, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialMenuComponent0._renderType;
  }
  @override
  ComponentRef<import1.MaterialMenuComponent> build() {
    _compView_0 = import26.ViewMaterialIconComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    _MaterialIconComponent_0_5 = import27.MaterialIconComponent(_el_0);
    _compView_0.create(_MaterialIconComponent_0_5, []);
    init0(_el_0);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import1.MaterialMenuComponent _ctx = ctx;
    bool changed = false;
    changed = false;
    final currVal_0 = _ctx.menu.uiIcon;
    if (import13.checkBinding(_expr_0, currVal_0)) {
      _MaterialIconComponent_0_5.icon = currVal_0;
      changed = true;
      _expr_0 = currVal_0;
    }
    if (changed) {
      _compView_0.markAsCheckOnce();
    }
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
  }
}

AppView<import1.MaterialMenuComponent> viewFactory_MaterialMenuComponent1(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialMenuComponent1(parentView, parentIndex);
}

class _ViewMaterialMenuComponent2 extends AppView<import1.MaterialMenuComponent> {
  import2.Element _el_0;
  import2.Text _text_1;
  var _expr_0;
  _ViewMaterialMenuComponent2(AppView<dynamic> parentView, int parentIndex) : super(import11.ViewType.embedded, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialMenuComponent0._renderType;
  }
  @override
  ComponentRef<import1.MaterialMenuComponent> build() {
    var doc = import2.document;
    _el_0 = doc.createElement('span');
    _text_1 = import2.Text('');
    _el_0.append(_text_1);
    init0(_el_0);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import1.MaterialMenuComponent _ctx = ctx;
    final currVal_0 = (_ctx.buttonText ?? '');
    if (import13.checkBinding(_expr_0, currVal_0)) {
      _text_1.text = currVal_0;
      _expr_0 = currVal_0;
    }
  }
}

AppView<import1.MaterialMenuComponent> viewFactory_MaterialMenuComponent2(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialMenuComponent2(parentView, parentIndex);
}

class _ViewMaterialMenuComponent3 extends AppView<import1.MaterialMenuComponent> {
  import2.Element _el_0;
  import28.ViewMenuPopupComponent0 _compView_0;
  import29.MenuPopupComponent _MenuPopupComponent_0_5;
  import8.PopupSourceDirective _PopupSourceDirective_0_6;
  var _expr_0;
  var _expr_1;
  var _expr_2;
  var _expr_3;
  var _expr_4;
  String _expr_5;
  _ViewMaterialMenuComponent3(AppView<dynamic> parentView, int parentIndex) : super(import11.ViewType.embedded, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialMenuComponent0._renderType;
  }
  @override
  ComponentRef<import1.MaterialMenuComponent> build() {
    _compView_0 = import28.ViewMenuPopupComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    _MenuPopupComponent_0_5 = import29.MenuPopupComponent();
    _PopupSourceDirective_0_6 = import8.PopupSourceDirective(parentView.injectorGet(import20.DomPopupSourceFactory, viewData.parentIndex), _el_0, parentView.injectorGet(import21.ReferenceDirective, viewData.parentIndex, null), parentView.injectorGet(import22.Focusable, viewData.parentIndex, null), null);
    _compView_0.create(_MenuPopupComponent_0_5, [projectableNodes[1]]);
    final subscription_0 = _MenuPopupComponent_0_5.isExpandedChange.listen(eventHandler1(_handle_isExpandedChange_0_0));
    init([_el_0], [subscription_0]);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import1.MaterialMenuComponent _ctx = ctx;
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    final local_toggle = import14.unsafeCast<ViewMaterialMenuComponent0>(parentView)._PopupSourceDirective_0_11;
    changed = false;
    final currVal_0 = _ctx.menu;
    if (import13.checkBinding(_expr_0, currVal_0)) {
      _MenuPopupComponent_0_5.menu = currVal_0;
      changed = true;
      _expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.preferredPositions;
    if (import13.checkBinding(_expr_1, currVal_1)) {
      _MenuPopupComponent_0_5.preferredPositions = currVal_1;
      changed = true;
      _expr_1 = currVal_1;
    }
    final currVal_2 = _ctx.isExpanded;
    if (import13.checkBinding(_expr_2, currVal_2)) {
      _MenuPopupComponent_0_5.isExpanded = currVal_2;
      changed = true;
      _expr_2 = currVal_2;
    }
    final currVal_3 = _ctx.width;
    if (import13.checkBinding(_expr_3, currVal_3)) {
      _MenuPopupComponent_0_5.width = currVal_3;
      changed = true;
      _expr_3 = currVal_3;
    }
    final currVal_4 = local_toggle;
    if (import13.checkBinding(_expr_4, currVal_4)) {
      _MenuPopupComponent_0_5.popupSource = currVal_4;
      changed = true;
      _expr_4 = currVal_4;
    }
    final currVal_5 = _ctx.popupClass;
    if (import13.checkBinding(_expr_5, currVal_5)) {
      _MenuPopupComponent_0_5.popupClass = currVal_5;
      changed = true;
      _expr_5 = currVal_5;
    }
    if (changed) {
      _compView_0.markAsCheckOnce();
    }
    _compView_0.detectChanges();
    if (!import13.AppViewUtils.throwOnChanges) {
      if (firstCheck) {
        _PopupSourceDirective_0_6.ngAfterViewInit();
      }
    }
  }

  @override
  void dirtyParentQueriesInternal() {
    import14.unsafeCast<ViewMaterialMenuComponent0>(parentView)._query_MenuPopupComponent_1_1_isDirty = true;
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
    _PopupSourceDirective_0_6.ngOnDestroy();
  }

  void _handle_isExpandedChange_0_0($event) {
    ctx.isExpanded = $event;
  }
}

AppView<import1.MaterialMenuComponent> viewFactory_MaterialMenuComponent3(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialMenuComponent3(parentView, parentIndex);
}

final List<dynamic> styles$MaterialMenuComponentHost = const [];

class _ViewMaterialMenuComponentHost0 extends AppView<import1.MaterialMenuComponent> {
  ViewMaterialMenuComponent0 _compView_0;
  import1.MaterialMenuComponent _MaterialMenuComponent_0_5;
  _ViewMaterialMenuComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import11.ViewType.host, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef<import1.MaterialMenuComponent> build() {
    _compView_0 = ViewMaterialMenuComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _MaterialMenuComponent_0_5 = import1.MaterialMenuComponent();
    _compView_0.create(_MaterialMenuComponent_0_5, projectableNodes);
    init0(rootEl);
    return ComponentRef(0, this, rootEl, _MaterialMenuComponent_0_5);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import25.HasDisabled) && (0 == nodeIndex))) {
      return _MaterialMenuComponent_0_5;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    if (changed) {
      _compView_0.markAsCheckOnce();
    }
    _compView_0.detectChanges();
    if (!import13.AppViewUtils.throwOnChanges) {
      if (firstCheck) {
        _MaterialMenuComponent_0_5.ngAfterViewInit();
      }
    }
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
    _MaterialMenuComponent_0_5.ngOnDestroy();
  }
}

AppView<import1.MaterialMenuComponent> viewFactory_MaterialMenuComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialMenuComponentHost0(parentView, parentIndex);
}

const ComponentFactory<import1.MaterialMenuComponent> _MaterialMenuComponentNgFactory = const ComponentFactory('material-menu', viewFactory_MaterialMenuComponentHost0);
ComponentFactory<import1.MaterialMenuComponent> get MaterialMenuComponentNgFactory {
  return _MaterialMenuComponentNgFactory;
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(MaterialMenuComponent, MaterialMenuComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
  _ref4.initReflector();
  _ref5.initReflector();
  _ref6.initReflector();
  _ref7.initReflector();
  _ref8.initReflector();
  _ref9.initReflector();
  _ref10.initReflector();
  _ref11.initReflector();
}
