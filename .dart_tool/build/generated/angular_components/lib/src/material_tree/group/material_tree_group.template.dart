// **************************************************************************
// Generator: Instance of 'Compiler'
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'material_tree_group.dart';
export 'material_tree_group.dart';
import 'dart:html';
import 'package:angular/angular.dart';
import 'package:intl/intl.dart';
import 'package:angular_components/button_decorator/button_decorator.dart';
import 'package:angular_components/dynamic_component/dynamic_component.dart';
import 'package:angular_components/focus/keyboard_only_focus_indicator.dart';
import 'package:angular_components/material_checkbox/material_checkbox.dart';
import 'package:angular_components/material_icon/material_icon.dart';
import 'package:angular_components/src/material_tree/material_tree_node.dart';
import 'package:angular_components/src/material_tree/material_tree_root.dart';
import 'package:angular_components/mixins/material_dropdown_base.dart';
import 'package:angular_components/model/selection/selection_options.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/button_decorator/button_decorator.template.dart' as _ref1;
import 'package:angular_components/dynamic_component/dynamic_component.template.dart' as _ref2;
import 'package:angular_components/focus/keyboard_only_focus_indicator.template.dart' as _ref3;
import 'package:angular_components/material_checkbox/material_checkbox.template.dart' as _ref4;
import 'package:angular_components/material_icon/material_icon.template.dart' as _ref5;
import 'package:angular_components/mixins/material_dropdown_base.template.dart' as _ref6;
import 'package:angular_components/model/selection/selection_options.template.dart' as _ref7;
import 'package:angular_components/src/material_tree/material_tree_node.template.dart' as _ref8;
import 'package:angular_components/src/material_tree/material_tree_root.template.dart' as _ref9;
import 'package:angular_components/src/material_tree/group/material_tree_group.scss.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'material_tree_group.dart' as import2;
import 'dart:html' as import3;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_for.dart' as import5;
import 'package:angular/src/common/directives/ng_if.dart';
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import8;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import10;
import 'package:angular/src/runtime.dart' as import11;
import 'package:angular/angular.dart';
import 'package:angular/src/core/linker/template_ref.dart';
import '../../../button_decorator/button_decorator.template.dart' as import14;
import '../../../focus/keyboard_only_focus_indicator.dart' as import15;
import '../../../button_decorator/button_decorator.dart' as import16;
import '../../../utils/browser/dom_service/dom_service.dart' as import17;
import '../../../material_checkbox/material_checkbox.template.dart' as import18;
import '../../../material_checkbox/material_checkbox.dart' as import19;
import '../../../interfaces/has_disabled.dart' as import20;
import '../../../material_icon/material_icon.template.dart' as import21;
import '../../../material_icon/material_icon.dart' as import22;
import '../../../dynamic_component/dynamic_component.template.dart' as import23;
import '../../../dynamic_component/dynamic_component.dart' as import24;
import 'package:angular/src/core/linker/dynamic_component_loader.dart' as import25;
import '../material_tree_root.dart' as import26;
import '../../../mixins/material_dropdown_base.dart' as import27;
import 'package:angular/src/core/di/opaque_token.dart' as import28;
import '../../../model/selection/selection_options.dart' as import29;

final List<dynamic> styles$MaterialTreeGroupComponent = [import0.styles];

class ViewMaterialTreeGroupComponent0 extends AppView<import2.MaterialTreeGroupComponent> {
  import3.UListElement _el_0;
  ViewContainer _appEl_1;
  import5.NgFor _NgFor_1_9;
  ViewContainer _appEl_2;
  NgIf _NgIf_2_9;
  var _expr_0;
  static RenderComponentType _renderType;
  ViewMaterialTreeGroupComponent0(AppView<dynamic> parentView, int parentIndex) : super(import8.ViewType.component, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import3.document.createElement('material-tree-group');
    createAttr(rootEl, 'role', import2.MaterialTreeGroupComponent.hostRole);
    _renderType ??= import10.appViewUtils.createRenderType((import11.isDevMode ? 'asset:angular_components/lib/src/material_tree/group/material_tree_group.dart' : null), ViewEncapsulation.Emulated, styles$MaterialTreeGroupComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import2.MaterialTreeGroupComponent> build() {
    final _rootEl = rootEl;
    final import3.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    var doc = import3.document;
    _el_0 = createAndAppend(doc, 'ul', parentRenderNode);
    addShimC(_el_0);
    final _anchor_1 = createViewContainerAnchor();
    _el_0.append(_anchor_1);
    _appEl_1 = ViewContainer(1, 0, this, _anchor_1);
    TemplateRef _TemplateRef_1_8 = TemplateRef(_appEl_1, viewFactory_MaterialTreeGroupComponent1);
    _NgFor_1_9 = import5.NgFor(_appEl_1, _TemplateRef_1_8);
    final _anchor_2 = createViewContainerAnchor();
    _el_0.append(_anchor_2);
    _appEl_2 = ViewContainer(2, 0, this, _anchor_2);
    TemplateRef _TemplateRef_2_8 = TemplateRef(_appEl_2, viewFactory_MaterialTreeGroupComponent9);
    _NgIf_2_9 = NgIf(_appEl_2, _TemplateRef_2_8);
    init(const [], null);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import2.MaterialTreeGroupComponent _ctx = ctx;
    final currVal_0 = _ctx.visibleGroup;
    if (import10.checkBinding(_expr_0, currVal_0)) {
      _NgFor_1_9.ngForOf = currVal_0;
      _expr_0 = currVal_0;
    }
    if (!import10.AppViewUtils.throwOnChanges) {
      _NgFor_1_9.ngDoCheck();
    }
    _NgIf_2_9.ngIf = _ctx.viewMoreLinkVisible;
    _appEl_1.detectChangesInNestedViews();
    _appEl_2.detectChangesInNestedViews();
  }

  @override
  void destroyInternal() {
    _appEl_1?.destroyNestedViews();
    _appEl_2?.destroyNestedViews();
  }

  void detectHostChanges(bool firstCheck) {
    if (firstCheck) {
      if (!identical(ctx.isMaterialTreeGroup, null)) {
        updateElemClass(rootEl, 'material-tree-group', ctx.isMaterialTreeGroup);
      }
    }
  }
}

AppView<import2.MaterialTreeGroupComponent> viewFactory_MaterialTreeGroupComponent0(AppView<dynamic> parentView, int parentIndex) {
  return ViewMaterialTreeGroupComponent0(parentView, parentIndex);
}

class _ViewMaterialTreeGroupComponent1 extends AppView<import2.MaterialTreeGroupComponent> {
  import3.Element _el_0;
  import14.ButtonDirectiveNgCd _ButtonDirective_0_5;
  import15.KeyboardOnlyFocusIndicatorDirective _KeyboardOnlyFocusIndicatorDirective_0_6;
  import3.DivElement _el_1;
  import3.DivElement _el_2;
  ViewContainer _appEl_3;
  NgIf _NgIf_3_9;
  import3.DivElement _el_4;
  ViewContainer _appEl_6;
  NgIf _NgIf_6_9;
  ViewContainer _appEl_7;
  NgIf _NgIf_7_9;
  ViewContainer _appEl_10;
  NgIf _NgIf_10_9;
  ViewContainer _appEl_12;
  import5.NgFor _NgFor_12_9;
  bool _expr_0;
  bool _expr_1;
  var _expr_2;
  var _expr_3;
  bool _expr_6;
  bool _expr_7;
  bool _expr_8;
  var _expr_12;
  _ViewMaterialTreeGroupComponent1(AppView<dynamic> parentView, int parentIndex) : super(import8.ViewType.embedded, {'\$implicit': null}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialTreeGroupComponent0._renderType;
  }
  @override
  ComponentRef<import2.MaterialTreeGroupComponent> build() {
    var doc = import3.document;
    _el_0 = doc.createElement('li');
    createAttr(_el_0, 'buttonDecorator', '');
    _el_0.className = 'material-tree-option';
    createAttr(_el_0, 'keyboardOnlyFocusIndicator', '');
    addShimE(_el_0);
    _ButtonDirective_0_5 = import14.ButtonDirectiveNgCd(import16.ButtonDirective(_el_0, null));
    _KeyboardOnlyFocusIndicatorDirective_0_6 = import15.KeyboardOnlyFocusIndicatorDirective(_el_0, parentView.parentView.injectorGet(import17.DomService, parentView.viewData.parentIndex));
    _el_1 = createDivAndAppend(doc, _el_0);
    _el_1.className = 'material-tree-item';
    createAttr(_el_1, 'role', 'treeitem');
    addShimC(_el_1);
    _el_2 = createDivAndAppend(doc, _el_1);
    _el_2.className = 'material-tree-shift';
    addShimC(_el_2);
    final _anchor_3 = createViewContainerAnchor();
    _el_2.append(_anchor_3);
    _appEl_3 = ViewContainer(3, 2, this, _anchor_3);
    TemplateRef _TemplateRef_3_8 = TemplateRef(_appEl_3, viewFactory_MaterialTreeGroupComponent2);
    _NgIf_3_9 = NgIf(_appEl_3, _TemplateRef_3_8);
    _el_4 = createDivAndAppend(doc, _el_2);
    _el_4.className = 'material-tree-border';
    addShimC(_el_4);
    import3.Text _text_5 = import3.Text(' ');
    _el_2.append(_text_5);
    final _anchor_6 = createViewContainerAnchor();
    _el_2.append(_anchor_6);
    _appEl_6 = ViewContainer(6, 2, this, _anchor_6);
    TemplateRef _TemplateRef_6_8 = TemplateRef(_appEl_6, viewFactory_MaterialTreeGroupComponent5);
    _NgIf_6_9 = NgIf(_appEl_6, _TemplateRef_6_8);
    final _anchor_7 = createViewContainerAnchor();
    _el_2.append(_anchor_7);
    _appEl_7 = ViewContainer(7, 2, this, _anchor_7);
    TemplateRef _TemplateRef_7_8 = TemplateRef(_appEl_7, viewFactory_MaterialTreeGroupComponent6);
    _NgIf_7_9 = NgIf(_appEl_7, _TemplateRef_7_8);
    import3.Text _text_8 = import3.Text(' ');
    _el_2.append(_text_8);
    import3.Text _text_9 = import3.Text(' ');
    _el_2.append(_text_9);
    final _anchor_10 = createViewContainerAnchor();
    _el_2.append(_anchor_10);
    _appEl_10 = ViewContainer(10, 2, this, _anchor_10);
    TemplateRef _TemplateRef_10_8 = TemplateRef(_appEl_10, viewFactory_MaterialTreeGroupComponent7);
    _NgIf_10_9 = NgIf(_appEl_10, _TemplateRef_10_8);
    import3.Text _text_11 = import3.Text(' ');
    _el_0.append(_text_11);
    final _anchor_12 = createViewContainerAnchor();
    _el_0.append(_anchor_12);
    _appEl_12 = ViewContainer(12, 0, this, _anchor_12);
    TemplateRef _TemplateRef_12_8 = TemplateRef(_appEl_12, viewFactory_MaterialTreeGroupComponent8);
    _NgFor_12_9 = import5.NgFor(_appEl_12, _TemplateRef_12_8);
    _el_0.addEventListener('click', eventHandler1(_handle_click_0_1));
    _el_0.addEventListener('keypress', eventHandler1(_ButtonDirective_0_5.instance.handleKeyPress));
    _el_0.addEventListener('keyup', eventHandler0(_KeyboardOnlyFocusIndicatorDirective_0_6.resetOutline));
    _el_0.addEventListener('blur', eventHandler0(_KeyboardOnlyFocusIndicatorDirective_0_6.resetOutline));
    _el_0.addEventListener('mousedown', eventHandler0(_KeyboardOnlyFocusIndicatorDirective_0_6.hideOutline));
    final subscription_0 = _ButtonDirective_0_5.instance.trigger.listen(eventHandler1(_handle_trigger_0_0));
    init([_el_0], [subscription_0]);
    return null;
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import16.ButtonDirective) && ((0 <= nodeIndex) && (nodeIndex <= 12)))) {
      return _ButtonDirective_0_5.instance;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final import2.MaterialTreeGroupComponent _ctx = ctx;
    bool firstCheck = (this.cdState == 0);
    final dynamic local_option = locals['\$implicit'];
    if ((!import10.AppViewUtils.throwOnChanges && firstCheck)) {
      _ButtonDirective_0_5.instance.ngOnInit();
    }
    _NgIf_3_9.ngIf = _ctx.showCheckbox(local_option);
    _NgIf_6_9.ngIf = _ctx.useComponentRenderer;
    _NgIf_7_9.ngIf = !_ctx.useComponentRenderer;
    _NgIf_10_9.ngIf = _ctx.hasChildren(local_option);
    final currVal_12 = _ctx.getChildGroups(local_option);
    if (import10.checkBinding(_expr_12, currVal_12)) {
      _NgFor_12_9.ngForOf = currVal_12;
      _expr_12 = currVal_12;
    }
    if (!import10.AppViewUtils.throwOnChanges) {
      _NgFor_12_9.ngDoCheck();
    }
    _appEl_3.detectChangesInNestedViews();
    _appEl_6.detectChangesInNestedViews();
    _appEl_7.detectChangesInNestedViews();
    _appEl_10.detectChangesInNestedViews();
    _appEl_12.detectChangesInNestedViews();
    final currVal_0 = _ctx.isSelected(local_option);
    if (import10.checkBinding(_expr_0, currVal_0)) {
      updateClass(_el_0, 'selected', currVal_0);
      _expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.isSelectable(local_option);
    if (import10.checkBinding(_expr_1, currVal_1)) {
      updateClass(_el_0, 'selectable', currVal_1);
      _expr_1 = currVal_1;
    }
    _ButtonDirective_0_5.detectHostChanges(this, _el_0);
    final currVal_2 = _ctx.getIndent(local_option);
    if (import10.checkBinding(_expr_2, currVal_2)) {
      _el_1.style.setProperty('padding-left', currVal_2?.toString());
      _expr_2 = currVal_2;
    }
    final currVal_3 = import10.interpolate0(_ctx.isSelected(local_option));
    if (import10.checkBinding(_expr_3, currVal_3)) {
      setAttr(_el_1, 'aria-selected', currVal_3?.toString());
      _expr_3 = currVal_3;
    }
    if (firstCheck) {
      if (!identical(_ctx.fixedPadding, null)) {
        _el_2.style.setProperty('padding-left', _ctx.fixedPadding?.toString());
      }
    }
    final currVal_6 = _ctx.hasChildren(local_option);
    if (import10.checkBinding(_expr_6, currVal_6)) {
      updateClass(_el_4, 'is-parent', currVal_6);
      _expr_6 = currVal_6;
    }
    final currVal_7 = _ctx.isExpanded(local_option);
    if (import10.checkBinding(_expr_7, currVal_7)) {
      updateClass(_el_4, 'is-expanded', currVal_7);
      _expr_7 = currVal_7;
    }
    final currVal_8 = (_ctx.level == 0);
    if (import10.checkBinding(_expr_8, currVal_8)) {
      updateClass(_el_4, 'root-border', currVal_8);
      _expr_8 = currVal_8;
    }
  }

  @override
  void destroyInternal() {
    _appEl_3?.destroyNestedViews();
    _appEl_6?.destroyNestedViews();
    _appEl_7?.destroyNestedViews();
    _appEl_10?.destroyNestedViews();
    _appEl_12?.destroyNestedViews();
  }

  void _handle_trigger_0_0($event) {
    final dynamic local_option = locals['\$implicit'];
    ctx.handleSelectionOrExpansion($event, local_option);
  }

  void _handle_click_0_1($event) {
    _ButtonDirective_0_5.instance.handleClick($event);
    _KeyboardOnlyFocusIndicatorDirective_0_6.hideOutline();
  }
}

AppView<import2.MaterialTreeGroupComponent> viewFactory_MaterialTreeGroupComponent1(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialTreeGroupComponent1(parentView, parentIndex);
}

class _ViewMaterialTreeGroupComponent2 extends AppView<import2.MaterialTreeGroupComponent> {
  import3.DivElement _el_0;
  ViewContainer _appEl_1;
  NgIf _NgIf_1_9;
  ViewContainer _appEl_2;
  NgIf _NgIf_2_9;
  _ViewMaterialTreeGroupComponent2(AppView<dynamic> parentView, int parentIndex) : super(import8.ViewType.embedded, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialTreeGroupComponent0._renderType;
  }
  @override
  ComponentRef<import2.MaterialTreeGroupComponent> build() {
    var doc = import3.document;
    _el_0 = doc.createElement('div');
    _el_0.className = 'tree-selection-state';
    addShimC(_el_0);
    final _anchor_1 = createViewContainerAnchor();
    _el_0.append(_anchor_1);
    _appEl_1 = ViewContainer(1, 0, this, _anchor_1);
    TemplateRef _TemplateRef_1_8 = TemplateRef(_appEl_1, viewFactory_MaterialTreeGroupComponent3);
    _NgIf_1_9 = NgIf(_appEl_1, _TemplateRef_1_8);
    final _anchor_2 = createViewContainerAnchor();
    _el_0.append(_anchor_2);
    _appEl_2 = ViewContainer(2, 0, this, _anchor_2);
    TemplateRef _TemplateRef_2_8 = TemplateRef(_appEl_2, viewFactory_MaterialTreeGroupComponent4);
    _NgIf_2_9 = NgIf(_appEl_2, _TemplateRef_2_8);
    init0(_el_0);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import2.MaterialTreeGroupComponent _ctx = ctx;
    final dynamic local_option = parentView.locals['\$implicit'];
    _NgIf_1_9.ngIf = _ctx.isMultiSelect;
    _NgIf_2_9.ngIf = (!_ctx.isMultiSelect && _ctx.isSelected(local_option));
    _appEl_1.detectChangesInNestedViews();
    _appEl_2.detectChangesInNestedViews();
  }

  @override
  void destroyInternal() {
    _appEl_1?.destroyNestedViews();
    _appEl_2?.destroyNestedViews();
  }
}

AppView<import2.MaterialTreeGroupComponent> viewFactory_MaterialTreeGroupComponent2(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialTreeGroupComponent2(parentView, parentIndex);
}

class _ViewMaterialTreeGroupComponent3 extends AppView<import2.MaterialTreeGroupComponent> {
  import3.Element _el_0;
  import18.ViewMaterialCheckboxComponent0 _compView_0;
  import19.MaterialCheckboxComponent _MaterialCheckboxComponent_0_5;
  bool _expr_0;
  bool _expr_2;
  _ViewMaterialTreeGroupComponent3(AppView<dynamic> parentView, int parentIndex) : super(import8.ViewType.embedded, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialTreeGroupComponent0._renderType;
  }
  @override
  ComponentRef<import2.MaterialTreeGroupComponent> build() {
    _compView_0 = import18.ViewMaterialCheckboxComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    _el_0.className = import10.interpolate2('', 'tree-selection-state', ' ', import19.MaterialCheckboxComponent.hostClass, '');
    addShimC(_el_0);
    _MaterialCheckboxComponent_0_5 = import19.MaterialCheckboxComponent(_el_0, _compView_0.ref, null, null, null);
    _compView_0.create(_MaterialCheckboxComponent_0_5, [const []]);
    init0(_el_0);
    return null;
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import20.HasDisabled) && (0 == nodeIndex))) {
      return _MaterialCheckboxComponent_0_5;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final import2.MaterialTreeGroupComponent _ctx = ctx;
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    final dynamic local_option = parentView.parentView.locals['\$implicit'];
    changed = false;
    if (firstCheck) {
      _MaterialCheckboxComponent_0_5.readOnly = true;
      changed = true;
    }
    final currVal_0 = (_ctx.isReadOnly || _ctx.showDisabledCheckbox(local_option));
    if (import10.checkBinding(_expr_0, currVal_0)) {
      _MaterialCheckboxComponent_0_5.disabled = currVal_0;
      changed = true;
      _expr_0 = currVal_0;
    }
    final currVal_2 = _ctx.isSelected(local_option);
    if (import10.checkBinding(_expr_2, currVal_2)) {
      _MaterialCheckboxComponent_0_5.checked = currVal_2;
      changed = true;
      _expr_2 = currVal_2;
    }
    if (changed) {
      _compView_0.markAsCheckOnce();
    }
    _compView_0.detectHostChanges(firstCheck);
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
    _MaterialCheckboxComponent_0_5.ngOnDestroy();
  }
}

AppView<import2.MaterialTreeGroupComponent> viewFactory_MaterialTreeGroupComponent3(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialTreeGroupComponent3(parentView, parentIndex);
}

class _ViewMaterialTreeGroupComponent4 extends AppView<import2.MaterialTreeGroupComponent> {
  import3.Element _el_0;
  import21.ViewMaterialIconComponent0 _compView_0;
  import22.MaterialIconComponent _MaterialIconComponent_0_5;
  _ViewMaterialTreeGroupComponent4(AppView<dynamic> parentView, int parentIndex) : super(import8.ViewType.embedded, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialTreeGroupComponent0._renderType;
  }
  @override
  ComponentRef<import2.MaterialTreeGroupComponent> build() {
    _compView_0 = import21.ViewMaterialIconComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    _el_0.className = 'tree-selection-state';
    createAttr(_el_0, 'icon', 'check');
    addShimC(_el_0);
    _MaterialIconComponent_0_5 = import22.MaterialIconComponent(_el_0);
    _compView_0.create(_MaterialIconComponent_0_5, []);
    init0(_el_0);
    return null;
  }

  @override
  void detectChangesInternal() {
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    changed = false;
    if (firstCheck) {
      _MaterialIconComponent_0_5.icon = 'check';
      changed = true;
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

AppView<import2.MaterialTreeGroupComponent> viewFactory_MaterialTreeGroupComponent4(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialTreeGroupComponent4(parentView, parentIndex);
}

class _ViewMaterialTreeGroupComponent5 extends AppView<import2.MaterialTreeGroupComponent> {
  import3.Element _el_0;
  import23.ViewDynamicComponent0 _compView_0;
  ViewContainer _appEl_0;
  import24.DynamicComponent _DynamicComponent_0_8;
  var _expr_0;
  var _expr_1;
  var _expr_2;
  _ViewMaterialTreeGroupComponent5(AppView<dynamic> parentView, int parentIndex) : super(import8.ViewType.embedded, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialTreeGroupComponent0._renderType;
  }
  @override
  ComponentRef<import2.MaterialTreeGroupComponent> build() {
    _compView_0 = import23.ViewDynamicComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    _el_0.className = 'item component';
    addShimC(_el_0);
    _appEl_0 = ViewContainer(0, null, this, _el_0);
    _DynamicComponent_0_8 = import24.DynamicComponent(parentView.parentView.parentView.injectorGet(import25.SlowComponentLoader, parentView.parentView.viewData.parentIndex), _compView_0.ref, _appEl_0);
    _compView_0.create(_DynamicComponent_0_8, []);
    init0(_appEl_0);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import2.MaterialTreeGroupComponent _ctx = ctx;
    bool changed = false;
    final dynamic local_option = parentView.locals['\$implicit'];
    changed = false;
    final currVal_0 = _ctx.getComponentType(local_option);
    if (import10.checkBinding(_expr_0, currVal_0)) {
      _DynamicComponent_0_8.componentType = currVal_0;
      changed = true;
      _expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.getComponentFactory(local_option);
    if (import10.checkBinding(_expr_1, currVal_1)) {
      _DynamicComponent_0_8.componentFactory = currVal_1;
      changed = true;
      _expr_1 = currVal_1;
    }
    final currVal_2 = local_option;
    if (import10.checkBinding(_expr_2, currVal_2)) {
      _DynamicComponent_0_8.value = currVal_2;
      changed = true;
      _expr_2 = currVal_2;
    }
    if (changed) {
      _DynamicComponent_0_8.ngAfterChanges();
    }
    _appEl_0.detectChangesInNestedViews();
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _appEl_0?.destroyNestedViews();
    _compView_0?.destroy();
    _DynamicComponent_0_8.ngOnDestroy();
  }
}

AppView<import2.MaterialTreeGroupComponent> viewFactory_MaterialTreeGroupComponent5(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialTreeGroupComponent5(parentView, parentIndex);
}

class _ViewMaterialTreeGroupComponent6 extends AppView<import2.MaterialTreeGroupComponent> {
  import3.Element _el_0;
  import3.Text _text_1;
  bool _expr_0;
  bool _expr_1;
  var _expr_2;
  _ViewMaterialTreeGroupComponent6(AppView<dynamic> parentView, int parentIndex) : super(import8.ViewType.embedded, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialTreeGroupComponent0._renderType;
  }
  @override
  ComponentRef<import2.MaterialTreeGroupComponent> build() {
    var doc = import3.document;
    _el_0 = doc.createElement('span');
    _el_0.className = 'text';
    addShimE(_el_0);
    _text_1 = import3.Text('');
    _el_0.append(_text_1);
    init0(_el_0);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import2.MaterialTreeGroupComponent _ctx = ctx;
    final dynamic local_option = parentView.locals['\$implicit'];
    final bool currVal_0 = !_ctx.showDisabledCheckbox(local_option);
    if (import10.checkBinding(_expr_0, currVal_0)) {
      updateClass(_el_0, 'item', currVal_0);
      _expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.showDisabledCheckbox(local_option);
    if (import10.checkBinding(_expr_1, currVal_1)) {
      updateClass(_el_0, 'disabled-item', currVal_1);
      _expr_1 = currVal_1;
    }
    final currVal_2 = import10.interpolate0(_ctx.getOptionAsText(local_option));
    if (import10.checkBinding(_expr_2, currVal_2)) {
      _text_1.text = currVal_2;
      _expr_2 = currVal_2;
    }
  }
}

AppView<import2.MaterialTreeGroupComponent> viewFactory_MaterialTreeGroupComponent6(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialTreeGroupComponent6(parentView, parentIndex);
}

class _ViewMaterialTreeGroupComponent7 extends AppView<import2.MaterialTreeGroupComponent> {
  import3.Element _el_0;
  import21.ViewMaterialIconComponent0 _compView_0;
  import14.ButtonDirectiveNgCd _ButtonDirective_0_5;
  import22.MaterialIconComponent _MaterialIconComponent_0_6;
  bool _expr_0;
  var _expr_1;
  _ViewMaterialTreeGroupComponent7(AppView<dynamic> parentView, int parentIndex) : super(import8.ViewType.embedded, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialTreeGroupComponent0._renderType;
  }
  @override
  ComponentRef<import2.MaterialTreeGroupComponent> build() {
    _compView_0 = import21.ViewMaterialIconComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    createAttr(_el_0, 'buttonDecorator', '');
    _el_0.className = 'tree-expansion-state';
    addShimC(_el_0);
    _ButtonDirective_0_5 = import14.ButtonDirectiveNgCd(import16.ButtonDirective(_el_0, null));
    _MaterialIconComponent_0_6 = import22.MaterialIconComponent(_el_0);
    _compView_0.create(_MaterialIconComponent_0_6, []);
    _el_0.addEventListener('click', eventHandler1(_ButtonDirective_0_5.instance.handleClick));
    _el_0.addEventListener('keypress', eventHandler1(_ButtonDirective_0_5.instance.handleKeyPress));
    final subscription_0 = _ButtonDirective_0_5.instance.trigger.listen(eventHandler1(_handle_trigger_0_0));
    init([_el_0], [subscription_0]);
    return null;
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import16.ButtonDirective) && (0 == nodeIndex))) {
      return _ButtonDirective_0_5.instance;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final import2.MaterialTreeGroupComponent _ctx = ctx;
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    final dynamic local_option = parentView.locals['\$implicit'];
    if ((!import10.AppViewUtils.throwOnChanges && firstCheck)) {
      _ButtonDirective_0_5.instance.ngOnInit();
    }
    changed = false;
    final currVal_1 = (_ctx.isExpanded(local_option) ? 'expand_less' : 'expand_more');
    if (import10.checkBinding(_expr_1, currVal_1)) {
      _MaterialIconComponent_0_6.icon = currVal_1;
      changed = true;
      _expr_1 = currVal_1;
    }
    if (changed) {
      _compView_0.markAsCheckOnce();
    }
    final currVal_0 = _ctx.isExpanded(local_option);
    if (import10.checkBinding(_expr_0, currVal_0)) {
      updateElemClass(_el_0, 'expanded', currVal_0);
      _expr_0 = currVal_0;
    }
    _ButtonDirective_0_5.detectHostChanges(_compView_0, _el_0);
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
  }

  void _handle_trigger_0_0($event) {
    final dynamic local_option = parentView.locals['\$implicit'];
    ctx.handleExpansion($event, local_option);
  }
}

AppView<import2.MaterialTreeGroupComponent> viewFactory_MaterialTreeGroupComponent7(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialTreeGroupComponent7(parentView, parentIndex);
}

class _ViewMaterialTreeGroupComponent8 extends AppView<import2.MaterialTreeGroupComponent> {
  import3.Element _el_0;
  ViewMaterialTreeGroupComponent0 _compView_0;
  import2.MaterialTreeGroupComponent _MaterialTreeGroupComponent_0_5;
  var _expr_0;
  int _expr_1;
  bool _expr_2;
  bool _expr_3;
  int _expr_4;
  bool _expr_5;
  _ViewMaterialTreeGroupComponent8(AppView<dynamic> parentView, int parentIndex) : super(import8.ViewType.embedded, {'\$implicit': null}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialTreeGroupComponent0._renderType;
  }
  @override
  ComponentRef<import2.MaterialTreeGroupComponent> build() {
    _compView_0 = ViewMaterialTreeGroupComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    _el_0.className = 'child-tree';
    addShimC(_el_0);
    _MaterialTreeGroupComponent_0_5 = import2.MaterialTreeGroupComponent(parentView.parentView.parentView.injectorGet(import26.MaterialTreeRoot, parentView.parentView.viewData.parentIndex), _compView_0.ref, parentView.parentView.parentView.injectorGet(import27.DropdownHandle, parentView.parentView.viewData.parentIndex, null), parentView.parentView.parentView.injectorGet(const import28.OpaqueToken('MaterialTreeGroupComponent_materialTreeLeftPaddingToken'), parentView.parentView.viewData.parentIndex, null));
    _compView_0.create(_MaterialTreeGroupComponent_0_5, []);
    init0(_el_0);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import2.MaterialTreeGroupComponent _ctx = ctx;
    bool firstCheck = (this.cdState == 0);
    final import29.OptionGroup<dynamic> local_subGroup = locals['\$implicit'];
    final dynamic local_option = parentView.locals['\$implicit'];
    final currVal_0 = local_subGroup;
    if (import10.checkBinding(_expr_0, currVal_0)) {
      _MaterialTreeGroupComponent_0_5.group = currVal_0;
      _expr_0 = currVal_0;
    }
    final currVal_1 = (_ctx.level + 1);
    if (import10.checkBinding(_expr_1, currVal_1)) {
      _MaterialTreeGroupComponent_0_5.level = currVal_1;
      _expr_1 = currVal_1;
    }
    final currVal_2 = _ctx.showCheckbox(local_option);
    if (import10.checkBinding(_expr_2, currVal_2)) {
      _MaterialTreeGroupComponent_0_5.parentHasCheckbox = currVal_2;
      _expr_2 = currVal_2;
    }
    final currVal_3 = _ctx.allowParentSingleSelection;
    if (import10.checkBinding(_expr_3, currVal_3)) {
      _MaterialTreeGroupComponent_0_5.allowParentSingleSelection = currVal_3;
      _expr_3 = currVal_3;
    }
    final currVal_4 = _ctx.maxInitialOptionsShown;
    if (import10.checkBinding(_expr_4, currVal_4)) {
      _MaterialTreeGroupComponent_0_5.maxInitialOptionsShown = currVal_4;
      _expr_4 = currVal_4;
    }
    final currVal_5 = _ctx.expandAll;
    if (import10.checkBinding(_expr_5, currVal_5)) {
      _MaterialTreeGroupComponent_0_5.expandAll = currVal_5;
      _expr_5 = currVal_5;
    }
    _compView_0.detectHostChanges(firstCheck);
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
    _MaterialTreeGroupComponent_0_5.ngOnDestroy();
  }
}

AppView<import2.MaterialTreeGroupComponent> viewFactory_MaterialTreeGroupComponent8(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialTreeGroupComponent8(parentView, parentIndex);
}

class _ViewMaterialTreeGroupComponent9 extends AppView<import2.MaterialTreeGroupComponent> {
  import3.Element _el_0;
  import3.DivElement _el_1;
  import3.DivElement _el_2;
  import3.AnchorElement _el_3;
  import14.ButtonDirectiveNgCd _ButtonDirective_3_5;
  import3.Text _text_4;
  var _expr_0;
  _ViewMaterialTreeGroupComponent9(AppView<dynamic> parentView, int parentIndex) : super(import8.ViewType.embedded, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMaterialTreeGroupComponent0._renderType;
  }
  @override
  ComponentRef<import2.MaterialTreeGroupComponent> build() {
    var doc = import3.document;
    _el_0 = doc.createElement('li');
    addShimE(_el_0);
    _el_1 = createDivAndAppend(doc, _el_0);
    _el_1.className = 'view-more-link-item';
    addShimC(_el_1);
    _el_2 = createDivAndAppend(doc, _el_1);
    _el_2.className = 'material-tree-shift';
    addShimC(_el_2);
    _el_3 = createAndAppend(doc, 'a', _el_2);
    createAttr(_el_3, 'buttonDecorator', '');
    _el_3.className = 'view-more-link';
    createAttr(_el_3, 'href', '#');
    addShimC(_el_3);
    _ButtonDirective_3_5 = import14.ButtonDirectiveNgCd(import16.ButtonDirective(_el_3, null));
    _text_4 = import3.Text((import2.MaterialTreeGroupComponent.viewMoreMsg ?? ''));
    _el_3.append(_text_4);
    _el_3.addEventListener('click', eventHandler1(_ButtonDirective_3_5.instance.handleClick));
    _el_3.addEventListener('keypress', eventHandler1(_ButtonDirective_3_5.instance.handleKeyPress));
    final subscription_0 = _ButtonDirective_3_5.instance.trigger.listen(eventHandler1(ctx.viewMoreOptions));
    init([_el_0], [subscription_0]);
    return null;
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import16.ButtonDirective) && ((3 <= nodeIndex) && (nodeIndex <= 4)))) {
      return _ButtonDirective_3_5.instance;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final import2.MaterialTreeGroupComponent _ctx = ctx;
    bool firstCheck = (this.cdState == 0);
    if ((!import10.AppViewUtils.throwOnChanges && firstCheck)) {
      _ButtonDirective_3_5.instance.ngOnInit();
    }
    final currVal_0 = _ctx.getIndent(_ctx.visibleGroup.last);
    if (import10.checkBinding(_expr_0, currVal_0)) {
      _el_1.style.setProperty('padding-left', currVal_0?.toString());
      _expr_0 = currVal_0;
    }
    if (firstCheck) {
      if (!identical(_ctx.fixedPadding, null)) {
        _el_2.style.setProperty('padding-left', _ctx.fixedPadding?.toString());
      }
    }
    _ButtonDirective_3_5.detectHostChanges(this, _el_3);
  }
}

AppView<import2.MaterialTreeGroupComponent> viewFactory_MaterialTreeGroupComponent9(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialTreeGroupComponent9(parentView, parentIndex);
}

final List<dynamic> styles$MaterialTreeGroupComponentHost = const [];

class _ViewMaterialTreeGroupComponentHost0 extends AppView<import2.MaterialTreeGroupComponent> {
  ViewMaterialTreeGroupComponent0 _compView_0;
  import2.MaterialTreeGroupComponent _MaterialTreeGroupComponent_0_5;
  _ViewMaterialTreeGroupComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import8.ViewType.host, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef<import2.MaterialTreeGroupComponent> build() {
    _compView_0 = ViewMaterialTreeGroupComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _MaterialTreeGroupComponent_0_5 = import2.MaterialTreeGroupComponent(this.injectorGet(import26.MaterialTreeRoot, viewData.parentIndex), _compView_0.ref, this.injectorGet(import27.DropdownHandle, viewData.parentIndex, null), this.injectorGet(const import28.OpaqueToken('MaterialTreeGroupComponent_materialTreeLeftPaddingToken'), viewData.parentIndex, null));
    _compView_0.create(_MaterialTreeGroupComponent_0_5, projectableNodes);
    init0(rootEl);
    return ComponentRef(0, this, rootEl, _MaterialTreeGroupComponent_0_5);
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
    _MaterialTreeGroupComponent_0_5.ngOnDestroy();
  }
}

AppView<import2.MaterialTreeGroupComponent> viewFactory_MaterialTreeGroupComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialTreeGroupComponentHost0(parentView, parentIndex);
}

const ComponentFactory<import2.MaterialTreeGroupComponent> _MaterialTreeGroupComponentNgFactory = const ComponentFactory('material-tree-group', viewFactory_MaterialTreeGroupComponentHost0);
ComponentFactory<import2.MaterialTreeGroupComponent> get MaterialTreeGroupComponentNgFactory {
  return _MaterialTreeGroupComponentNgFactory;
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(MaterialTreeGroupComponent, MaterialTreeGroupComponentNgFactory);
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
}
