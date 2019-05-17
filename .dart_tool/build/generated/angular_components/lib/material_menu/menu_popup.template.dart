// **************************************************************************
// Generator: Instance of 'Compiler'
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'menu_popup.dart';
export 'menu_popup.dart';
import 'package:angular/angular.dart';
import 'package:angular_components/content/deferred_content.dart';
import 'package:angular_components/focus/focus.dart';
import 'package:angular_components/laminate/popup/popup.dart';
import 'package:angular_components/material_list/material_list.dart';
import 'package:angular_components/material_menu/menu_item_groups.dart';
import 'package:angular_components/material_menu/menu_popup_wrapper.dart';
import 'package:angular_components/material_menu/menu_root.dart';
import 'package:angular_components/material_popup/material_popup.dart';
import 'package:angular_components/mixins/focusable_mixin.dart';
import 'package:angular_components/model/menu/menu.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/content/deferred_content.template.dart' as _ref1;
import 'package:angular_components/focus/focus.template.dart' as _ref2;
import 'package:angular_components/laminate/popup/popup.template.dart' as _ref3;
import 'package:angular_components/material_list/material_list.template.dart' as _ref4;
import 'package:angular_components/material_menu/menu_item_groups.template.dart' as _ref5;
import 'package:angular_components/material_menu/menu_popup_wrapper.template.dart' as _ref6;
import 'package:angular_components/material_menu/menu_root.template.dart' as _ref7;
import 'package:angular_components/material_popup/material_popup.template.dart' as _ref8;
import 'package:angular_components/mixins/focusable_mixin.template.dart' as _ref9;
import 'package:angular_components/model/menu/menu.template.dart' as _ref10;
import 'package:angular_components/material_menu/menu_popup.scss.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'menu_popup.dart' as import2;
import 'dart:html' as import3;
import '../material_popup/material_popup.template.dart' as import4;
import 'package:angular/src/core/linker/view_container.dart';
import '../material_popup/material_popup.dart' as import6;
import '../content/deferred_content.dart' as import7;
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import9;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import11;
import 'package:angular/src/runtime.dart' as import12;
import 'package:angular/angular.dart';
import '../src/laminate/popup/popup_hierarchy.dart' as import14;
import 'package:angular/src/core/zone/ng_zone.dart' as import15;
import '../src/laminate/overlay/overlay_service.dart' as import16;
import '../laminate/overlay/zindexer.dart' as import17;
import 'package:angular/src/core/di/opaque_token.dart' as import18;
import 'dart:core';
import 'package:angular_components/laminate/enums/alignment.dart' as import20;
import '../src/laminate/popup/popup_size_provider.dart' as import21;
import 'package:angular/src/core/linker/element_ref.dart';
import 'package:angular/src/core/linker/template_ref.dart';
import '../content/deferred_content_aware.dart' as import24;
import '../mixins/material_dropdown_base.dart' as import25;
import '../src/laminate/popup/popup_ref.dart' as import26;
import '../material_list/material_list.template.dart' as import27;
import '../material_list/material_list.dart' as import28;
import 'menu_item_groups.template.dart' as import29;
import '../focus/focus.dart' as import30;
import 'menu_root.dart' as import31;
import 'menu_item_groups.dart' as import32;
import '../utils/browser/dom_service/dom_service.dart' as import33;
import '../laminate/components/modal/modal.dart' as import34;
import '../utils/id_generator/id_generator.dart' as import35;

final List<dynamic> styles$MenuPopupComponent = [import0.styles];

class ViewMenuPopupComponent0 extends AppView<import2.MenuPopupComponent> {
  import3.Element _el_0;
  import4.ViewMaterialPopupComponent0 _compView_0;
  ViewContainer _appEl_0;
  import6.MaterialPopupComponent _MaterialPopupComponent_0_8;
  dynamic __PopupRef_0_10;
  dynamic __PopupHierarchy_0_12;
  ViewContainer _appEl_1;
  bool _query_MenuItemGroupsComponent_1_0_isDirty = true;
  import7.DeferredContentDirective _DeferredContentDirective_1_9;
  String _expr_0;
  var _expr_2;
  var _expr_3;
  bool _expr_4;
  static RenderComponentType _renderType;
  ViewMenuPopupComponent0(AppView<dynamic> parentView, int parentIndex) : super(import9.ViewType.component, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckOnce) {
    rootEl = import3.document.createElement('menu-popup');
    _renderType ??= import11.appViewUtils.createRenderType((import12.isDevMode ? 'asset:angular_components/lib/material_menu/menu_popup.dart' : null), ViewEncapsulation.Emulated, styles$MenuPopupComponent);
    setupComponentType(_renderType);
  }
  dynamic get _PopupRef_0_10 {
    if ((this.__PopupRef_0_10 == null)) {
      (__PopupRef_0_10 = import6.getResolvedPopupRef(this._MaterialPopupComponent_0_8));
    }
    return this.__PopupRef_0_10;
  }

  dynamic get _PopupHierarchy_0_12 {
    if ((this.__PopupHierarchy_0_12 == null)) {
      (__PopupHierarchy_0_12 = import6.getHierarchy(this._MaterialPopupComponent_0_8));
    }
    return this.__PopupHierarchy_0_12;
  }

  @override
  ComponentRef<import2.MenuPopupComponent> build() {
    final _rootEl = rootEl;
    final import3.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    _compView_0 = import4.ViewMaterialPopupComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    parentRenderNode.append(_el_0);
    createAttr(_el_0, 'enforceSpaceConstraints', '');
    addShimC(_el_0);
    _appEl_0 = ViewContainer(0, null, this, _el_0);
    _MaterialPopupComponent_0_8 = import6.MaterialPopupComponent(parentView.injectorGet(import14.PopupHierarchy, viewData.parentIndex, null), parentView.injectorGet(import6.MaterialPopupComponent, viewData.parentIndex, null), null, parentView.injectorGet(import15.NgZone, viewData.parentIndex), parentView.injectorGet(import16.OverlayService, viewData.parentIndex), parentView.injectorGet(import17.ZIndexer, viewData.parentIndex), parentView.injectorGet(const import18.OpaqueToken<List<import20.RelativePosition>>('defaultPopupPositions'), viewData.parentIndex), parentView.injectorGet(const import18.OpaqueToken('overlayRepositionLoop'), viewData.parentIndex), parentView.injectorGet(import21.PopupSizeProvider, viewData.parentIndex, null), _compView_0.ref, _appEl_0, ElementRef(_el_0));
    final _anchor_1 = createViewContainerAnchor();
    _appEl_1 = ViewContainer(1, 0, this, _anchor_1);
    TemplateRef _TemplateRef_1_8 = TemplateRef(_appEl_1, viewFactory_MenuPopupComponent1);
    _DeferredContentDirective_1_9 = import7.DeferredContentDirective(_appEl_1, _TemplateRef_1_8, _MaterialPopupComponent_0_8);
    _compView_0.create(_MaterialPopupComponent_0_8, [
      const [],
      <dynamic>[projectableNodes[0]]..addAll([_appEl_1]),
      const []
    ]);
    final subscription_0 = _MaterialPopupComponent_0_8.onVisible.listen(eventHandler1(_handle_visibleChange_0_0));
    init(const [], [subscription_0]);
    return null;
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((((identical(token, import6.MaterialPopupComponent) || identical(token, import24.DeferredContentAware)) || identical(token, import25.DropdownHandle)) && ((0 <= nodeIndex) && (nodeIndex <= 1)))) {
      return _MaterialPopupComponent_0_8;
    }
    if ((identical(token, import26.PopupRef) && ((0 <= nodeIndex) && (nodeIndex <= 1)))) {
      return _PopupRef_0_10;
    }
    if ((identical(token, import14.PopupHierarchy) && ((0 <= nodeIndex) && (nodeIndex <= 1)))) {
      return _PopupHierarchy_0_12;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final import2.MenuPopupComponent _ctx = ctx;
    bool firstCheck = (this.cdState == 0);
    if (firstCheck) {
      (_MaterialPopupComponent_0_8.enforceSpaceConstraints = true);
    }
    final currVal_2 = _ctx.preferredPositions;
    if (import11.checkBinding(_expr_2, currVal_2)) {
      _MaterialPopupComponent_0_8.preferredPositions = currVal_2;
      _expr_2 = currVal_2;
    }
    final currVal_3 = _ctx.popupSource;
    if (import11.checkBinding(_expr_3, currVal_3)) {
      _MaterialPopupComponent_0_8.source = currVal_3;
      _expr_3 = currVal_3;
    }
    final currVal_4 = _ctx.isExpanded;
    if (import11.checkBinding(_expr_4, currVal_4)) {
      _MaterialPopupComponent_0_8.visible = currVal_4;
      _expr_4 = currVal_4;
    }
    if (firstCheck) {
      (_DeferredContentDirective_1_9.preserveDimensions = true);
    }
    _appEl_0.detectChangesInNestedViews();
    _appEl_1.detectChangesInNestedViews();
    if (!import11.AppViewUtils.throwOnChanges) {
      if (_query_MenuItemGroupsComponent_1_0_isDirty) {
        ctx.menuItemGroups = import11.firstOrNull(_appEl_1.mapNestedViews((_ViewMenuPopupComponent1 nestedView) {
          return [nestedView._MenuItemGroupsComponent_1_8];
        }));
        _query_MenuItemGroupsComponent_1_0_isDirty = false;
      }
    }
    final currVal_0 = _ctx.popupClass;
    if (import11.checkBinding(_expr_0, currVal_0)) {
      _compView_0.updateChildClass(_el_0, currVal_0);
      _expr_0 = currVal_0;
    }
    _compView_0.detectHostChanges(firstCheck);
    _compView_0.detectChanges();
    if (!import11.AppViewUtils.throwOnChanges) {
      if (firstCheck) {
        _MaterialPopupComponent_0_8.ngAfterViewInit();
      }
    }
  }

  @override
  void destroyInternal() {
    _appEl_0?.destroyNestedViews();
    _appEl_1?.destroyNestedViews();
    _compView_0?.destroy();
    _DeferredContentDirective_1_9.ngOnDestroy();
    _MaterialPopupComponent_0_8.ngOnDestroy();
  }

  void _handle_visibleChange_0_0($event) {
    ctx.isExpanded = $event;
  }
}

AppView<import2.MenuPopupComponent> viewFactory_MenuPopupComponent0(AppView<dynamic> parentView, int parentIndex) {
  return ViewMenuPopupComponent0(parentView, parentIndex);
}

class _ViewMenuPopupComponent1 extends AppView<import2.MenuPopupComponent> {
  import3.Element _el_0;
  import27.ViewMaterialListComponent0 _compView_0;
  import28.MaterialListComponent _MaterialListComponent_0_5;
  import3.Element _el_1;
  import29.ViewMenuItemGroupsComponent0 _compView_1;
  import30.AutoFocusDirective _AutoFocusDirective_1_5;
  import31.MenuRootDirective _MenuRootDirective_1_6;
  import31.MenuRootDirective _MenuRoot_1_7;
  import32.MenuItemGroupsComponent _MenuItemGroupsComponent_1_8;
  var _expr_0;
  var _expr_2;
  String _expr_3;
  _ViewMenuPopupComponent1(AppView<dynamic> parentView, int parentIndex) : super(import9.ViewType.embedded, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMenuPopupComponent0._renderType;
  }
  @override
  ComponentRef<import2.MenuPopupComponent> build() {
    _compView_0 = import27.ViewMaterialListComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    _el_0.className = 'item-group-list';
    addShimC(_el_0);
    _MaterialListComponent_0_5 = import28.MaterialListComponent();
    _compView_1 = import29.ViewMenuItemGroupsComponent0(this, 1);
    _el_1 = _compView_1.rootEl;
    createAttr(_el_1, 'autoFocus', '');
    createAttr(_el_1, 'menu-root', '');
    createAttr(_el_1, 'preventCloseOnPressLeft', '');
    addShimC(_el_1);
    _AutoFocusDirective_1_5 = import30.AutoFocusDirective(_el_1, parentView.parentView.injectorGet(import33.DomService, parentView.viewData.parentIndex), null, parentView.parentView.injectorGet(import34.ModalComponent, parentView.viewData.parentIndex, null), import12.unsafeCast<ViewMenuPopupComponent0>(parentView)._PopupRef_0_10);
    _MenuRootDirective_1_6 = import31.MenuRootDirective(import12.unsafeCast<ViewMenuPopupComponent0>(parentView)._MaterialPopupComponent_0_8);
    _MenuRoot_1_7 = _MenuRootDirective_1_6;
    _MenuItemGroupsComponent_1_8 = import32.MenuItemGroupsComponent(_MenuRoot_1_7, _compView_1.ref, import12.unsafeCast<ViewMenuPopupComponent0>(parentView)._MaterialPopupComponent_0_8, parentView.parentView.injectorGet(import35.IdGenerator, parentView.viewData.parentIndex, null));
    _compView_1.create(_MenuItemGroupsComponent_1_8, []);
    _compView_0.create(_MaterialListComponent_0_5, [
      [_el_1]
    ]);
    init0(_el_0);
    return null;
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import31.MenuRoot) && (1 == nodeIndex))) {
      return _MenuRoot_1_7;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final import2.MenuPopupComponent _ctx = ctx;
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    changed = false;
    final currVal_0 = _ctx.width;
    if (import11.checkBinding(_expr_0, currVal_0)) {
      _MaterialListComponent_0_5.width = currVal_0;
      changed = true;
      _expr_0 = currVal_0;
    }
    if (changed) {
      _compView_0.markAsCheckOnce();
    }
    if (firstCheck) {
      (_AutoFocusDirective_1_5.autoFocus = true);
    }
    if ((!import11.AppViewUtils.throwOnChanges && firstCheck)) {
      _AutoFocusDirective_1_5.ngOnInit();
    }
    changed = false;
    if (firstCheck) {
      _MenuItemGroupsComponent_1_8.preventCloseOnPressLeft = '';
      changed = true;
    }
    final currVal_2 = _ctx.menu;
    if (import11.checkBinding(_expr_2, currVal_2)) {
      _MenuItemGroupsComponent_1_8.menu = currVal_2;
      changed = true;
      _expr_2 = currVal_2;
    }
    final currVal_3 = _ctx.popupClass;
    if (import11.checkBinding(_expr_3, currVal_3)) {
      _MenuItemGroupsComponent_1_8.popupClass = currVal_3;
      changed = true;
      _expr_3 = currVal_3;
    }
    if (changed) {
      _compView_1.markAsCheckOnce();
    }
    if ((!import11.AppViewUtils.throwOnChanges && firstCheck)) {
      _MenuItemGroupsComponent_1_8.ngOnInit();
    }
    _compView_0.detectHostChanges(firstCheck);
    _compView_0.detectChanges();
    _compView_1.detectChanges();
  }

  @override
  void dirtyParentQueriesInternal() {
    import12.unsafeCast<ViewMenuPopupComponent0>(parentView)._query_MenuItemGroupsComponent_1_0_isDirty = true;
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
    _compView_1?.destroy();
    _AutoFocusDirective_1_5.ngOnDestroy();
    _MenuItemGroupsComponent_1_8.ngOnDestroy();
  }
}

AppView<import2.MenuPopupComponent> viewFactory_MenuPopupComponent1(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMenuPopupComponent1(parentView, parentIndex);
}

final List<dynamic> styles$MenuPopupComponentHost = const [];

class _ViewMenuPopupComponentHost0 extends AppView<import2.MenuPopupComponent> {
  ViewMenuPopupComponent0 _compView_0;
  import2.MenuPopupComponent _MenuPopupComponent_0_5;
  _ViewMenuPopupComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import9.ViewType.host, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef<import2.MenuPopupComponent> build() {
    _compView_0 = ViewMenuPopupComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _MenuPopupComponent_0_5 = import2.MenuPopupComponent();
    _compView_0.create(_MenuPopupComponent_0_5, projectableNodes);
    init0(rootEl);
    return ComponentRef(0, this, rootEl, _MenuPopupComponent_0_5);
  }

  @override
  void detectChangesInternal() {
    bool changed = false;
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

AppView<import2.MenuPopupComponent> viewFactory_MenuPopupComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMenuPopupComponentHost0(parentView, parentIndex);
}

const ComponentFactory<import2.MenuPopupComponent> _MenuPopupComponentNgFactory = const ComponentFactory('menu-popup', viewFactory_MenuPopupComponentHost0);
ComponentFactory<import2.MenuPopupComponent> get MenuPopupComponentNgFactory {
  return _MenuPopupComponentNgFactory;
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(MenuPopupComponent, MenuPopupComponentNgFactory);
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
}
