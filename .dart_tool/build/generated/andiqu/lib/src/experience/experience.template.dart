// **************************************************************************
// Generator: Instance of 'Compiler'
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'experience.dart';
export 'experience.dart';
import 'package:angular/angular.dart';
import 'package:angular_components/angular_components.dart';
import 'achievement.dart';
import 'cs.dart';
import 'maths.dart';
import 'music.dart';
import 'misc.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'achievement.template.dart' as _ref0;
import 'cs.template.dart' as _ref1;
import 'maths.template.dart' as _ref2;
import 'misc.template.dart' as _ref3;
import 'music.template.dart' as _ref4;
import 'package:angular/angular.template.dart' as _ref5;
import 'package:angular_components/angular_components.template.dart' as _ref6;
import 'package:andiqu/src/experience/experience.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'experience.dart' as import2;
import 'dart:html' as import3;
import 'package:angular_components/material_slider/material_slider.template.dart' as import4;
import 'package:angular_components/material_slider/material_slider.dart' as import5;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_for.dart' as import7;
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import9;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import11;
import 'package:angular/src/runtime.dart' as import12;
import 'package:angular/angular.dart';
import 'package:angular_components/utils/browser/dom_service/dom_service.dart' as import14;
import 'package:angular/src/core/linker/template_ref.dart';
import 'package:angular_components/interfaces/has_disabled.dart' as import16;
import 'package:angular/src/common/directives/ng_if.dart';
import 'achievement.dart' as import18;

final List<dynamic> styles$ExperienceComponent = [import0.styles];

class ViewExperienceComponent0 extends AppView<import2.ExperienceComponent> {
  import3.Element _el_0;
  import3.DivElement _el_1;
  import3.Element _el_2;
  import3.Element _el_4;
  import3.Element _el_5;
  import3.Element _el_6;
  import3.Element _el_9;
  import4.ViewMaterialSliderComponent0 _compView_9;
  import5.MaterialSliderComponent _MaterialSliderComponent_9_5;
  import3.Element _el_10;
  import3.Text _text_11;
  import3.DivElement _el_12;
  import3.DivElement _el_13;
  import3.Element _el_14;
  import3.UListElement _el_16;
  ViewContainer _appEl_17;
  import7.NgFor _NgFor_17_9;
  import3.Element _el_18;
  import3.UListElement _el_20;
  ViewContainer _appEl_21;
  import7.NgFor _NgFor_21_9;
  import3.DivElement _el_22;
  import3.Element _el_23;
  import3.UListElement _el_25;
  ViewContainer _appEl_26;
  import7.NgFor _NgFor_26_9;
  import3.Element _el_27;
  import3.UListElement _el_29;
  ViewContainer _appEl_30;
  import7.NgFor _NgFor_30_9;
  num _expr_0;
  var _expr_2;
  static RenderComponentType _renderType;
  ViewExperienceComponent0(AppView<dynamic> parentView, int parentIndex) : super(import9.ViewType.component, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import3.document.createElement('experience-component');
    _renderType ??= import11.appViewUtils.createRenderType((import12.isDevMode ? 'asset:andiqu/lib/src/experience/experience.dart' : null), ViewEncapsulation.Emulated, styles$ExperienceComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import2.ExperienceComponent> build() {
    final _rootEl = rootEl;
    final import3.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    var doc = import3.document;
    _el_0 = createAndAppend(doc, 'section', parentRenderNode);
    createAttr(_el_0, 'id', 'experience');
    addShimE(_el_0);
    _el_1 = createDivAndAppend(doc, _el_0);
    createAttr(_el_1, 'style', 'text-align: center;');
    addShimC(_el_1);
    _el_2 = createAndAppend(doc, 'h1', _el_1);
    _el_2.className = 'section-heading';
    addShimE(_el_2);
    import3.Text _text_3 = import3.Text('THINGS I\'VE DONE');
    _el_2.append(_text_3);
    _el_4 = createAndAppend(doc, 'hr', _el_1);
    addShimE(_el_4);
    _el_5 = createAndAppend(doc, 'p', _el_1);
    createAttr(_el_5, 'style', 'margin: 0;');
    addShimE(_el_5);
    _el_6 = createAndAppend(doc, 'b', _el_5);
    addShimE(_el_6);
    import3.Text _text_7 = import3.Text('Last update:');
    _el_6.append(_text_7);
    import3.Text _text_8 = import3.Text(' April 14 2019');
    _el_5.append(_text_8);
    _compView_9 = import4.ViewMaterialSliderComponent0(this, 9);
    _el_9 = _compView_9.rootEl;
    _el_1.append(_el_9);
    addShimC(_el_9);
    _MaterialSliderComponent_9_5 = import5.MaterialSliderComponent(_compView_9.ref, parentView.injectorGet(import14.DomService, viewData.parentIndex));
    _compView_9.create(_MaterialSliderComponent_9_5, []);
    _el_10 = createAndAppend(doc, 'p', _el_1);
    createAttr(_el_10, 'style', 'margin-top: 0;');
    addShimE(_el_10);
    _text_11 = import3.Text('');
    _el_10.append(_text_11);
    _el_12 = createDivAndAppend(doc, _el_0);
    _el_12.className = 'flex-container';
    addShimC(_el_12);
    _el_13 = createDivAndAppend(doc, _el_12);
    _el_13.className = 'column';
    addShimC(_el_13);
    _el_14 = createAndAppend(doc, 'h1', _el_13);
    _el_14.className = 'achievement-heading';
    addShimE(_el_14);
    import3.Text _text_15 = import3.Text('Programming / Other CS');
    _el_14.append(_text_15);
    _el_16 = createAndAppend(doc, 'ul', _el_13);
    addShimC(_el_16);
    final _anchor_17 = createViewContainerAnchor();
    _el_16.append(_anchor_17);
    _appEl_17 = ViewContainer(17, 16, this, _anchor_17);
    TemplateRef _TemplateRef_17_8 = TemplateRef(_appEl_17, viewFactory_ExperienceComponent1);
    _NgFor_17_9 = import7.NgFor(_appEl_17, _TemplateRef_17_8);
    _el_18 = createAndAppend(doc, 'h1', _el_13);
    _el_18.className = 'achievement-heading';
    addShimE(_el_18);
    import3.Text _text_19 = import3.Text('Music');
    _el_18.append(_text_19);
    _el_20 = createAndAppend(doc, 'ul', _el_13);
    addShimC(_el_20);
    final _anchor_21 = createViewContainerAnchor();
    _el_20.append(_anchor_21);
    _appEl_21 = ViewContainer(21, 20, this, _anchor_21);
    TemplateRef _TemplateRef_21_8 = TemplateRef(_appEl_21, viewFactory_ExperienceComponent3);
    _NgFor_21_9 = import7.NgFor(_appEl_21, _TemplateRef_21_8);
    _el_22 = createDivAndAppend(doc, _el_12);
    _el_22.className = 'column';
    addShimC(_el_22);
    _el_23 = createAndAppend(doc, 'h1', _el_22);
    _el_23.className = 'achievement-heading';
    addShimE(_el_23);
    import3.Text _text_24 = import3.Text('Maths');
    _el_23.append(_text_24);
    _el_25 = createAndAppend(doc, 'ul', _el_22);
    addShimC(_el_25);
    final _anchor_26 = createViewContainerAnchor();
    _el_25.append(_anchor_26);
    _appEl_26 = ViewContainer(26, 25, this, _anchor_26);
    TemplateRef _TemplateRef_26_8 = TemplateRef(_appEl_26, viewFactory_ExperienceComponent5);
    _NgFor_26_9 = import7.NgFor(_appEl_26, _TemplateRef_26_8);
    _el_27 = createAndAppend(doc, 'h1', _el_22);
    _el_27.className = 'achievement-heading';
    addShimE(_el_27);
    import3.Text _text_28 = import3.Text('Miscellaneous');
    _el_27.append(_text_28);
    _el_29 = createAndAppend(doc, 'ul', _el_22);
    addShimC(_el_29);
    final _anchor_30 = createViewContainerAnchor();
    _el_29.append(_anchor_30);
    _appEl_30 = ViewContainer(30, 29, this, _anchor_30);
    TemplateRef _TemplateRef_30_8 = TemplateRef(_appEl_30, viewFactory_ExperienceComponent7);
    _NgFor_30_9 = import7.NgFor(_appEl_30, _TemplateRef_30_8);
    final subscription_0 = _MaterialSliderComponent_9_5.valueChange.listen(eventHandler1(_handle_valueChange_9_0));
    init(const [], [subscription_0]);
    return null;
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if (((identical(token, import5.MaterialSliderComponent) || identical(token, import16.HasDisabled)) && (9 == nodeIndex))) {
      return _MaterialSliderComponent_9_5;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final import2.ExperienceComponent _ctx = ctx;
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    changed = false;
    if (firstCheck) {
      _MaterialSliderComponent_9_5.max = 4;
      changed = true;
    }
    final currVal_0 = _ctx.value;
    if (import11.checkBinding(_expr_0, currVal_0)) {
      _MaterialSliderComponent_9_5.value = currVal_0;
      changed = true;
      _expr_0 = currVal_0;
    }
    if (changed) {
      _compView_9.markAsCheckOnce();
    }
    if (changed) {
      _MaterialSliderComponent_9_5.ngAfterChanges();
    }
    if (firstCheck) {
      if (!identical(_ctx.cs_achievements, null)) {
        (_NgFor_17_9.ngForOf = _ctx.cs_achievements);
      }
    }
    if (!import11.AppViewUtils.throwOnChanges) {
      _NgFor_17_9.ngDoCheck();
    }
    if (firstCheck) {
      if (!identical(_ctx.music_achievements, null)) {
        (_NgFor_21_9.ngForOf = _ctx.music_achievements);
      }
    }
    if (!import11.AppViewUtils.throwOnChanges) {
      _NgFor_21_9.ngDoCheck();
    }
    if (firstCheck) {
      if (!identical(_ctx.maths_achievements, null)) {
        (_NgFor_26_9.ngForOf = _ctx.maths_achievements);
      }
    }
    if (!import11.AppViewUtils.throwOnChanges) {
      _NgFor_26_9.ngDoCheck();
    }
    if (firstCheck) {
      if (!identical(_ctx.misc_achievements, null)) {
        (_NgFor_30_9.ngForOf = _ctx.misc_achievements);
      }
    }
    if (!import11.AppViewUtils.throwOnChanges) {
      _NgFor_30_9.ngDoCheck();
    }
    _appEl_17.detectChangesInNestedViews();
    _appEl_21.detectChangesInNestedViews();
    _appEl_26.detectChangesInNestedViews();
    _appEl_30.detectChangesInNestedViews();
    _compView_9.detectHostChanges(firstCheck);
    final currVal_2 = (_ctx.current_detail ?? '');
    if (import11.checkBinding(_expr_2, currVal_2)) {
      _text_11.text = currVal_2;
      _expr_2 = currVal_2;
    }
    _compView_9.detectChanges();
  }

  @override
  void destroyInternal() {
    _appEl_17?.destroyNestedViews();
    _appEl_21?.destroyNestedViews();
    _appEl_26?.destroyNestedViews();
    _appEl_30?.destroyNestedViews();
    _compView_9?.destroy();
  }

  void _handle_valueChange_9_0($event) {
    ctx.value = $event;
  }
}

AppView<import2.ExperienceComponent> viewFactory_ExperienceComponent0(AppView<dynamic> parentView, int parentIndex) {
  return ViewExperienceComponent0(parentView, parentIndex);
}

class _ViewExperienceComponent1 extends AppView<import2.ExperienceComponent> {
  import3.Element _el_0;
  ViewContainer _appEl_1;
  NgIf _NgIf_1_9;
  _ViewExperienceComponent1(AppView<dynamic> parentView, int parentIndex) : super(import9.ViewType.embedded, {'\$implicit': null}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewExperienceComponent0._renderType;
  }
  @override
  ComponentRef<import2.ExperienceComponent> build() {
    var doc = import3.document;
    _el_0 = doc.createElement('li');
    addShimE(_el_0);
    final _anchor_1 = createViewContainerAnchor();
    _el_0.append(_anchor_1);
    _appEl_1 = ViewContainer(1, 0, this, _anchor_1);
    TemplateRef _TemplateRef_1_8 = TemplateRef(_appEl_1, viewFactory_ExperienceComponent2);
    _NgIf_1_9 = NgIf(_appEl_1, _TemplateRef_1_8);
    init0(_el_0);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import2.ExperienceComponent _ctx = ctx;
    final import18.Achievement local_achievement = locals['\$implicit'];
    _NgIf_1_9.ngIf = (local_achievement.importance > (4 - _ctx.value));
    _appEl_1.detectChangesInNestedViews();
  }

  @override
  void destroyInternal() {
    _appEl_1?.destroyNestedViews();
  }
}

AppView<import2.ExperienceComponent> viewFactory_ExperienceComponent1(AppView<dynamic> parentView, int parentIndex) {
  return _ViewExperienceComponent1(parentView, parentIndex);
}

class _ViewExperienceComponent2 extends AppView<import2.ExperienceComponent> {
  import3.DivElement _el_0;
  import3.Element _el_1;
  import3.Text _text_2;
  import3.Element _el_3;
  import3.Element _el_4;
  import3.Text _text_5;
  import3.Element _el_7;
  import3.Text _text_8;
  import3.DivElement _el_9;
  var _expr_0;
  var _expr_1;
  var _expr_2;
  var _expr_3;
  _ViewExperienceComponent2(AppView<dynamic> parentView, int parentIndex) : super(import9.ViewType.embedded, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewExperienceComponent0._renderType;
  }
  @override
  ComponentRef<import2.ExperienceComponent> build() {
    var doc = import3.document;
    _el_0 = doc.createElement('div');
    addShimC(_el_0);
    _el_1 = createAndAppend(doc, 'h2', _el_0);
    _el_1.className = 'achievement-title';
    addShimE(_el_1);
    _text_2 = import3.Text('');
    _el_1.append(_text_2);
    _el_3 = createAndAppend(doc, 'h3', _el_0);
    _el_3.className = 'achievement-sub';
    addShimE(_el_3);
    _el_4 = createSpanAndAppend(doc, _el_3);
    addShimE(_el_4);
    _text_5 = import3.Text('');
    _el_4.append(_text_5);
    import3.Text _text_6 = import3.Text(' // ');
    _el_3.append(_text_6);
    _el_7 = createSpanAndAppend(doc, _el_3);
    _el_7.className = 'org-span';
    addShimE(_el_7);
    _text_8 = import3.Text('');
    _el_7.append(_text_8);
    _el_9 = createDivAndAppend(doc, _el_0);
    addShimC(_el_9);
    init0(_el_0);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import18.Achievement local_achievement = parentView.locals['\$implicit'];
    final currVal_0 = import11.interpolate0(local_achievement.title);
    if (import11.checkBinding(_expr_0, currVal_0)) {
      _text_2.text = currVal_0;
      _expr_0 = currVal_0;
    }
    final currVal_1 = import11.interpolate0(local_achievement.date);
    if (import11.checkBinding(_expr_1, currVal_1)) {
      _text_5.text = currVal_1;
      _expr_1 = currVal_1;
    }
    final currVal_2 = import11.interpolate0(local_achievement.organization);
    if (import11.checkBinding(_expr_2, currVal_2)) {
      _text_8.text = currVal_2;
      _expr_2 = currVal_2;
    }
    final currVal_3 = local_achievement.content;
    if (import11.checkBinding(_expr_3, currVal_3)) {
      setProp(_el_9, 'innerHTML', import11.appViewUtils.sanitizer.sanitizeHtml(currVal_3));
      _expr_3 = currVal_3;
    }
  }
}

AppView<import2.ExperienceComponent> viewFactory_ExperienceComponent2(AppView<dynamic> parentView, int parentIndex) {
  return _ViewExperienceComponent2(parentView, parentIndex);
}

class _ViewExperienceComponent3 extends AppView<import2.ExperienceComponent> {
  import3.Element _el_0;
  ViewContainer _appEl_1;
  NgIf _NgIf_1_9;
  _ViewExperienceComponent3(AppView<dynamic> parentView, int parentIndex) : super(import9.ViewType.embedded, {'\$implicit': null}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewExperienceComponent0._renderType;
  }
  @override
  ComponentRef<import2.ExperienceComponent> build() {
    var doc = import3.document;
    _el_0 = doc.createElement('li');
    addShimE(_el_0);
    final _anchor_1 = createViewContainerAnchor();
    _el_0.append(_anchor_1);
    _appEl_1 = ViewContainer(1, 0, this, _anchor_1);
    TemplateRef _TemplateRef_1_8 = TemplateRef(_appEl_1, viewFactory_ExperienceComponent4);
    _NgIf_1_9 = NgIf(_appEl_1, _TemplateRef_1_8);
    init0(_el_0);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import2.ExperienceComponent _ctx = ctx;
    final import18.Achievement local_achievement = locals['\$implicit'];
    _NgIf_1_9.ngIf = (local_achievement.importance > (4 - _ctx.value));
    _appEl_1.detectChangesInNestedViews();
  }

  @override
  void destroyInternal() {
    _appEl_1?.destroyNestedViews();
  }
}

AppView<import2.ExperienceComponent> viewFactory_ExperienceComponent3(AppView<dynamic> parentView, int parentIndex) {
  return _ViewExperienceComponent3(parentView, parentIndex);
}

class _ViewExperienceComponent4 extends AppView<import2.ExperienceComponent> {
  import3.DivElement _el_0;
  import3.Element _el_1;
  import3.Text _text_2;
  import3.Element _el_3;
  import3.Element _el_4;
  import3.Text _text_5;
  import3.Element _el_7;
  import3.Text _text_8;
  import3.DivElement _el_9;
  var _expr_0;
  var _expr_1;
  var _expr_2;
  var _expr_3;
  _ViewExperienceComponent4(AppView<dynamic> parentView, int parentIndex) : super(import9.ViewType.embedded, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewExperienceComponent0._renderType;
  }
  @override
  ComponentRef<import2.ExperienceComponent> build() {
    var doc = import3.document;
    _el_0 = doc.createElement('div');
    addShimC(_el_0);
    _el_1 = createAndAppend(doc, 'h2', _el_0);
    _el_1.className = 'achievement-title';
    addShimE(_el_1);
    _text_2 = import3.Text('');
    _el_1.append(_text_2);
    _el_3 = createAndAppend(doc, 'h3', _el_0);
    _el_3.className = 'achievement-sub';
    addShimE(_el_3);
    _el_4 = createSpanAndAppend(doc, _el_3);
    addShimE(_el_4);
    _text_5 = import3.Text('');
    _el_4.append(_text_5);
    import3.Text _text_6 = import3.Text(' // ');
    _el_3.append(_text_6);
    _el_7 = createSpanAndAppend(doc, _el_3);
    _el_7.className = 'org-span';
    addShimE(_el_7);
    _text_8 = import3.Text('');
    _el_7.append(_text_8);
    _el_9 = createDivAndAppend(doc, _el_0);
    addShimC(_el_9);
    init0(_el_0);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import18.Achievement local_achievement = parentView.locals['\$implicit'];
    final currVal_0 = import11.interpolate0(local_achievement.title);
    if (import11.checkBinding(_expr_0, currVal_0)) {
      _text_2.text = currVal_0;
      _expr_0 = currVal_0;
    }
    final currVal_1 = import11.interpolate0(local_achievement.date);
    if (import11.checkBinding(_expr_1, currVal_1)) {
      _text_5.text = currVal_1;
      _expr_1 = currVal_1;
    }
    final currVal_2 = import11.interpolate0(local_achievement.organization);
    if (import11.checkBinding(_expr_2, currVal_2)) {
      _text_8.text = currVal_2;
      _expr_2 = currVal_2;
    }
    final currVal_3 = local_achievement.content;
    if (import11.checkBinding(_expr_3, currVal_3)) {
      setProp(_el_9, 'innerHTML', import11.appViewUtils.sanitizer.sanitizeHtml(currVal_3));
      _expr_3 = currVal_3;
    }
  }
}

AppView<import2.ExperienceComponent> viewFactory_ExperienceComponent4(AppView<dynamic> parentView, int parentIndex) {
  return _ViewExperienceComponent4(parentView, parentIndex);
}

class _ViewExperienceComponent5 extends AppView<import2.ExperienceComponent> {
  import3.Element _el_0;
  ViewContainer _appEl_1;
  NgIf _NgIf_1_9;
  _ViewExperienceComponent5(AppView<dynamic> parentView, int parentIndex) : super(import9.ViewType.embedded, {'\$implicit': null}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewExperienceComponent0._renderType;
  }
  @override
  ComponentRef<import2.ExperienceComponent> build() {
    var doc = import3.document;
    _el_0 = doc.createElement('li');
    addShimE(_el_0);
    final _anchor_1 = createViewContainerAnchor();
    _el_0.append(_anchor_1);
    _appEl_1 = ViewContainer(1, 0, this, _anchor_1);
    TemplateRef _TemplateRef_1_8 = TemplateRef(_appEl_1, viewFactory_ExperienceComponent6);
    _NgIf_1_9 = NgIf(_appEl_1, _TemplateRef_1_8);
    init0(_el_0);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import2.ExperienceComponent _ctx = ctx;
    final import18.Achievement local_achievement = locals['\$implicit'];
    _NgIf_1_9.ngIf = (local_achievement.importance > (4 - _ctx.value));
    _appEl_1.detectChangesInNestedViews();
  }

  @override
  void destroyInternal() {
    _appEl_1?.destroyNestedViews();
  }
}

AppView<import2.ExperienceComponent> viewFactory_ExperienceComponent5(AppView<dynamic> parentView, int parentIndex) {
  return _ViewExperienceComponent5(parentView, parentIndex);
}

class _ViewExperienceComponent6 extends AppView<import2.ExperienceComponent> {
  import3.DivElement _el_0;
  import3.Element _el_1;
  import3.Text _text_2;
  import3.Element _el_3;
  import3.Element _el_4;
  import3.Text _text_5;
  import3.Element _el_7;
  import3.Text _text_8;
  import3.DivElement _el_9;
  var _expr_0;
  var _expr_1;
  var _expr_2;
  var _expr_3;
  _ViewExperienceComponent6(AppView<dynamic> parentView, int parentIndex) : super(import9.ViewType.embedded, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewExperienceComponent0._renderType;
  }
  @override
  ComponentRef<import2.ExperienceComponent> build() {
    var doc = import3.document;
    _el_0 = doc.createElement('div');
    addShimC(_el_0);
    _el_1 = createAndAppend(doc, 'h2', _el_0);
    _el_1.className = 'achievement-title';
    addShimE(_el_1);
    _text_2 = import3.Text('');
    _el_1.append(_text_2);
    _el_3 = createAndAppend(doc, 'h3', _el_0);
    _el_3.className = 'achievement-sub';
    addShimE(_el_3);
    _el_4 = createSpanAndAppend(doc, _el_3);
    addShimE(_el_4);
    _text_5 = import3.Text('');
    _el_4.append(_text_5);
    import3.Text _text_6 = import3.Text(' // ');
    _el_3.append(_text_6);
    _el_7 = createSpanAndAppend(doc, _el_3);
    _el_7.className = 'org-span';
    addShimE(_el_7);
    _text_8 = import3.Text('');
    _el_7.append(_text_8);
    _el_9 = createDivAndAppend(doc, _el_0);
    addShimC(_el_9);
    init0(_el_0);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import18.Achievement local_achievement = parentView.locals['\$implicit'];
    final currVal_0 = import11.interpolate0(local_achievement.title);
    if (import11.checkBinding(_expr_0, currVal_0)) {
      _text_2.text = currVal_0;
      _expr_0 = currVal_0;
    }
    final currVal_1 = import11.interpolate0(local_achievement.date);
    if (import11.checkBinding(_expr_1, currVal_1)) {
      _text_5.text = currVal_1;
      _expr_1 = currVal_1;
    }
    final currVal_2 = import11.interpolate0(local_achievement.organization);
    if (import11.checkBinding(_expr_2, currVal_2)) {
      _text_8.text = currVal_2;
      _expr_2 = currVal_2;
    }
    final currVal_3 = local_achievement.content;
    if (import11.checkBinding(_expr_3, currVal_3)) {
      setProp(_el_9, 'innerHTML', import11.appViewUtils.sanitizer.sanitizeHtml(currVal_3));
      _expr_3 = currVal_3;
    }
  }
}

AppView<import2.ExperienceComponent> viewFactory_ExperienceComponent6(AppView<dynamic> parentView, int parentIndex) {
  return _ViewExperienceComponent6(parentView, parentIndex);
}

class _ViewExperienceComponent7 extends AppView<import2.ExperienceComponent> {
  import3.Element _el_0;
  ViewContainer _appEl_1;
  NgIf _NgIf_1_9;
  _ViewExperienceComponent7(AppView<dynamic> parentView, int parentIndex) : super(import9.ViewType.embedded, {'\$implicit': null}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewExperienceComponent0._renderType;
  }
  @override
  ComponentRef<import2.ExperienceComponent> build() {
    var doc = import3.document;
    _el_0 = doc.createElement('li');
    addShimE(_el_0);
    final _anchor_1 = createViewContainerAnchor();
    _el_0.append(_anchor_1);
    _appEl_1 = ViewContainer(1, 0, this, _anchor_1);
    TemplateRef _TemplateRef_1_8 = TemplateRef(_appEl_1, viewFactory_ExperienceComponent8);
    _NgIf_1_9 = NgIf(_appEl_1, _TemplateRef_1_8);
    init0(_el_0);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import2.ExperienceComponent _ctx = ctx;
    final import18.Achievement local_achievement = locals['\$implicit'];
    _NgIf_1_9.ngIf = (local_achievement.importance > (4 - _ctx.value));
    _appEl_1.detectChangesInNestedViews();
  }

  @override
  void destroyInternal() {
    _appEl_1?.destroyNestedViews();
  }
}

AppView<import2.ExperienceComponent> viewFactory_ExperienceComponent7(AppView<dynamic> parentView, int parentIndex) {
  return _ViewExperienceComponent7(parentView, parentIndex);
}

class _ViewExperienceComponent8 extends AppView<import2.ExperienceComponent> {
  import3.DivElement _el_0;
  import3.Element _el_1;
  import3.Text _text_2;
  import3.Element _el_3;
  import3.Element _el_4;
  import3.Text _text_5;
  import3.Element _el_7;
  import3.Text _text_8;
  import3.DivElement _el_9;
  var _expr_0;
  var _expr_1;
  var _expr_2;
  var _expr_3;
  _ViewExperienceComponent8(AppView<dynamic> parentView, int parentIndex) : super(import9.ViewType.embedded, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewExperienceComponent0._renderType;
  }
  @override
  ComponentRef<import2.ExperienceComponent> build() {
    var doc = import3.document;
    _el_0 = doc.createElement('div');
    addShimC(_el_0);
    _el_1 = createAndAppend(doc, 'h2', _el_0);
    _el_1.className = 'achievement-title';
    addShimE(_el_1);
    _text_2 = import3.Text('');
    _el_1.append(_text_2);
    _el_3 = createAndAppend(doc, 'h3', _el_0);
    _el_3.className = 'achievement-sub';
    addShimE(_el_3);
    _el_4 = createSpanAndAppend(doc, _el_3);
    addShimE(_el_4);
    _text_5 = import3.Text('');
    _el_4.append(_text_5);
    import3.Text _text_6 = import3.Text(' // ');
    _el_3.append(_text_6);
    _el_7 = createSpanAndAppend(doc, _el_3);
    _el_7.className = 'org-span';
    addShimE(_el_7);
    _text_8 = import3.Text('');
    _el_7.append(_text_8);
    _el_9 = createDivAndAppend(doc, _el_0);
    addShimC(_el_9);
    init0(_el_0);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import18.Achievement local_achievement = parentView.locals['\$implicit'];
    final currVal_0 = import11.interpolate0(local_achievement.title);
    if (import11.checkBinding(_expr_0, currVal_0)) {
      _text_2.text = currVal_0;
      _expr_0 = currVal_0;
    }
    final currVal_1 = import11.interpolate0(local_achievement.date);
    if (import11.checkBinding(_expr_1, currVal_1)) {
      _text_5.text = currVal_1;
      _expr_1 = currVal_1;
    }
    final currVal_2 = import11.interpolate0(local_achievement.organization);
    if (import11.checkBinding(_expr_2, currVal_2)) {
      _text_8.text = currVal_2;
      _expr_2 = currVal_2;
    }
    final currVal_3 = local_achievement.content;
    if (import11.checkBinding(_expr_3, currVal_3)) {
      setProp(_el_9, 'innerHTML', import11.appViewUtils.sanitizer.sanitizeHtml(currVal_3));
      _expr_3 = currVal_3;
    }
  }
}

AppView<import2.ExperienceComponent> viewFactory_ExperienceComponent8(AppView<dynamic> parentView, int parentIndex) {
  return _ViewExperienceComponent8(parentView, parentIndex);
}

final List<dynamic> styles$ExperienceComponentHost = const [];

class _ViewExperienceComponentHost0 extends AppView<import2.ExperienceComponent> {
  ViewExperienceComponent0 _compView_0;
  import2.ExperienceComponent _ExperienceComponent_0_5;
  _ViewExperienceComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import9.ViewType.host, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef<import2.ExperienceComponent> build() {
    _compView_0 = ViewExperienceComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _ExperienceComponent_0_5 = import2.ExperienceComponent();
    _compView_0.create(_ExperienceComponent_0_5, projectableNodes);
    init0(rootEl);
    return ComponentRef(0, this, rootEl, _ExperienceComponent_0_5);
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

AppView<import2.ExperienceComponent> viewFactory_ExperienceComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return _ViewExperienceComponentHost0(parentView, parentIndex);
}

const ComponentFactory<import2.ExperienceComponent> _ExperienceComponentNgFactory = const ComponentFactory('experience-component', viewFactory_ExperienceComponentHost0);
ComponentFactory<import2.ExperienceComponent> get ExperienceComponentNgFactory {
  return _ExperienceComponentNgFactory;
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(ExperienceComponent, ExperienceComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
  _ref4.initReflector();
  _ref5.initReflector();
  _ref6.initReflector();
}
