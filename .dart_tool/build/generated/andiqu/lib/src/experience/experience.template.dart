// **************************************************************************
// Generator: Instance of 'Compiler'
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'experience.dart';
export 'experience.dart';
import 'package:angular/angular.dart';
import 'package:angular_components/angular_components.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/angular_components.template.dart' as _ref1;
import 'package:andiqu/src/experience/experience.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'experience.dart' as import2;
import 'dart:html' as import3;
import 'package:angular_components/material_slider/material_slider.template.dart' as import4;
import 'package:angular_components/material_slider/material_slider.dart' as import5;
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import7;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import9;
import 'package:angular/src/runtime.dart' as import10;
import 'package:angular/angular.dart';
import 'package:angular_components/utils/browser/dom_service/dom_service.dart' as import12;
import 'package:angular_components/interfaces/has_disabled.dart' as import13;

final List<dynamic> styles$ExperienceComponent = [import0.styles];

class ViewExperienceComponent0 extends AppView<import2.ExperienceComponent> {
  import3.Element _el_0;
  import3.Element _el_1;
  import3.Element _el_2;
  import3.Element _el_4;
  import3.Element _el_5;
  import4.ViewMaterialSliderComponent0 _compView_5;
  import5.MaterialSliderComponent _MaterialSliderComponent_5_5;
  num _expr_0;
  static RenderComponentType _renderType;
  ViewExperienceComponent0(AppView<dynamic> parentView, int parentIndex) : super(import7.ViewType.component, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import3.document.createElement('experience-component');
    _renderType ??= import9.appViewUtils.createRenderType((import10.isDevMode ? 'asset:andiqu/lib/src/experience/experience.dart' : null), ViewEncapsulation.Emulated, styles$ExperienceComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import2.ExperienceComponent> build() {
    final _rootEl = rootEl;
    final import3.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    var doc = import3.document;
    _el_0 = createAndAppend(doc, 'section', parentRenderNode);
    addShimE(_el_0);
    _el_1 = createAndAppend(doc, 'center', _el_0);
    addShimE(_el_1);
    _el_2 = createAndAppend(doc, 'h1', _el_1);
    _el_2.className = 'section-heading';
    addShimE(_el_2);
    import3.Text _text_3 = import3.Text('THINGS I\'VE DONE');
    _el_2.append(_text_3);
    _el_4 = createAndAppend(doc, 'hr', _el_1);
    addShimE(_el_4);
    _compView_5 = import4.ViewMaterialSliderComponent0(this, 5);
    _el_5 = _compView_5.rootEl;
    _el_1.append(_el_5);
    addShimC(_el_5);
    _MaterialSliderComponent_5_5 = import5.MaterialSliderComponent(_compView_5.ref, parentView.injectorGet(import12.DomService, viewData.parentIndex));
    _compView_5.create(_MaterialSliderComponent_5_5, []);
    final subscription_0 = _MaterialSliderComponent_5_5.valueChange.listen(eventHandler1(_handle_valueChange_5_0));
    init(const [], [subscription_0]);
    return null;
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if (((identical(token, import5.MaterialSliderComponent) || identical(token, import13.HasDisabled)) && (5 == nodeIndex))) {
      return _MaterialSliderComponent_5_5;
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
      _MaterialSliderComponent_5_5.max = 4;
      changed = true;
    }
    final currVal_0 = _ctx.value;
    if (import9.checkBinding(_expr_0, currVal_0)) {
      _MaterialSliderComponent_5_5.value = currVal_0;
      changed = true;
      _expr_0 = currVal_0;
    }
    if (changed) {
      _compView_5.markAsCheckOnce();
    }
    if (changed) {
      _MaterialSliderComponent_5_5.ngAfterChanges();
    }
    _compView_5.detectHostChanges(firstCheck);
    _compView_5.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_5?.destroy();
  }

  void _handle_valueChange_5_0($event) {
    ctx.value = $event;
  }
}

AppView<import2.ExperienceComponent> viewFactory_ExperienceComponent0(AppView<dynamic> parentView, int parentIndex) {
  return ViewExperienceComponent0(parentView, parentIndex);
}

final List<dynamic> styles$ExperienceComponentHost = const [];

class _ViewExperienceComponentHost0 extends AppView<import2.ExperienceComponent> {
  ViewExperienceComponent0 _compView_0;
  import2.ExperienceComponent _ExperienceComponent_0_5;
  _ViewExperienceComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import7.ViewType.host, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
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
}
