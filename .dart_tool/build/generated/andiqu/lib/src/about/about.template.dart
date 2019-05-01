// **************************************************************************
// Generator: Instance of 'Compiler'
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'about.dart';
export 'about.dart';
import 'package:angular/angular.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:andiqu/src/about/about.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'about.dart' as import2;
import 'dart:html' as import3;
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import5;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import7;
import 'package:angular/src/runtime.dart' as import8;
import 'package:angular/angular.dart';

final List<dynamic> styles$AboutComponent = [import0.styles];

class ViewAboutComponent0 extends AppView<import2.AboutComponent> {
  import3.Element _el_0;
  import3.Element _el_1;
  import3.Element _el_2;
  import3.Element _el_4;
  import3.DivElement _el_5;
  import3.UListElement _el_7;
  import3.Element _el_8;
  import3.AnchorElement _el_9;
  import3.Element _el_10;
  import3.Element _el_11;
  import3.Element _el_12;
  import3.Element _el_13;
  import3.AnchorElement _el_14;
  import3.Element _el_15;
  import3.Element _el_16;
  import3.Element _el_17;
  import3.Element _el_18;
  import3.AnchorElement _el_19;
  import3.Element _el_20;
  import3.Element _el_21;
  import3.Element _el_22;
  import3.DivElement _el_23;
  import3.Element _el_24;
  static RenderComponentType _renderType;
  ViewAboutComponent0(AppView<dynamic> parentView, int parentIndex) : super(import5.ViewType.component, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import3.document.createElement('about-component');
    _renderType ??= import7.appViewUtils.createRenderType((import8.isDevMode ? 'asset:andiqu/lib/src/about/about.dart' : null), ViewEncapsulation.Emulated, styles$AboutComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import2.AboutComponent> build() {
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
    import3.Text _text_3 = import3.Text('ABOUT ME');
    _el_2.append(_text_3);
    _el_4 = createAndAppend(doc, 'hr', _el_1);
    addShimE(_el_4);
    _el_5 = createDivAndAppend(doc, _el_0);
    addShimC(_el_5);
    import3.Text _text_6 = import3.Text('*Insert stuff about me*');
    _el_5.append(_text_6);
    _el_7 = createAndAppend(doc, 'ul', _el_0);
    _el_7.className = 'social-media';
    addShimC(_el_7);
    _el_8 = createAndAppend(doc, 'li', _el_7);
    addShimE(_el_8);
    _el_9 = createAndAppend(doc, 'a', _el_8);
    createAttr(_el_9, 'href', 'https://www.linkedin.com/in/andi-qu-48313a154');
    addShimC(_el_9);
    _el_10 = doc.createElementNS('http://www.w3.org/2000/svg', 'svg');
    _el_9.append(_el_10);
    createAttr(_el_10, 'viewBox', '0 0 40 40');
    addShimE(_el_10);
    _el_11 = doc.createElementNS('http://www.w3.org/2000/svg', 'g');
    _el_10.append(_el_11);
    addShimE(_el_11);
    _el_12 = doc.createElementNS('http://www.w3.org/2000/svg', 'path');
    _el_11.append(_el_12);
    createAttr(_el_12, 'd', 'm10.8 13.9v22.2h-7.4v-22.1h7.4z m0.5-6.8q0 1.7-1.2 2.7t-3 1.1h0q-1.9 0-3-1.1t-1.1-2.7q0-1.6 1.2-2.7t3-1.1 2.9 1.1 1.2 2.7z m26 16.3v12.7h-7.4v-11.9q0-2.3-0.9-3.6t-2.8-1.4q-1.4 0-2.3 0.8t-1.5 1.9q-0.2 0.7-0.2 1.8v12.4h-7.3q0-8.9 0-14.5t0-6.6l0-1h7.3v3.2h-0.1q0.5-0.7 1-1.3t1.2-1.1 2-1 2.5-0.4q3.8 0 6.2 2.6t2.3 7.4z');
    addShimE(_el_12);
    _el_13 = createAndAppend(doc, 'li', _el_7);
    addShimE(_el_13);
    _el_14 = createAndAppend(doc, 'a', _el_13);
    createAttr(_el_14, 'href', 'https://www.github.com/dolphingarlic');
    addShimC(_el_14);
    _el_15 = doc.createElementNS('http://www.w3.org/2000/svg', 'svg');
    _el_14.append(_el_15);
    createAttr(_el_15, 'viewBox', '0 0 40 40');
    addShimE(_el_15);
    _el_16 = doc.createElementNS('http://www.w3.org/2000/svg', 'g');
    _el_15.append(_el_16);
    addShimE(_el_16);
    _el_17 = doc.createElementNS('http://www.w3.org/2000/svg', 'path');
    _el_16.append(_el_17);
    createAttr(_el_17, 'd', 'm20.1 2.9q4.7 0 8.6 2.3t6.3 6.2 2.3 8.6q0 5.6-3.3 10.1t-8.4 6.2q-0.6 0.1-0.9-0.2t-0.3-0.7q0 0 0-1.7t0-3q0-2.1-1.2-3.1 1.3-0.2 2.3-0.4t2.1-0.9 1.8-1.5 1.2-2.3 0.5-3.4q0-2.7-1.8-4.6 0.8-2-0.2-4.5-0.6-0.2-1.8 0.2t-2 1l-0.9 0.5q-2-0.6-4.3-0.6t-4.2 0.6q-0.4-0.2-1-0.6t-1.9-0.8-1.9-0.3q-1 2.5-0.1 4.5-1.8 1.9-1.8 4.6 0 1.9 0.5 3.4t1.1 2.3 1.8 1.5 2.1 0.9 2.3 0.4q-0.9 0.8-1.1 2.3-0.4 0.2-1 0.3t-1.3 0.1-1.4-0.5-1.3-1.4q-0.4-0.7-1-1.1t-1.1-0.6l-0.5 0q-0.5 0-0.6 0.1t-0.1 0.2 0.2 0.3 0.2 0.3l0.2 0.1q0.5 0.2 1 0.9t0.7 1.1l0.2 0.5q0.3 0.9 1 1.4t1.5 0.7 1.5 0.1 1.3-0.1l0.5 0q0 0.8 0 1.9t0 1.2q0 0.5-0.3 0.7t-0.9 0.2q-5.2-1.7-8.4-6.2t-3.3-10.1q0-4.7 2.3-8.6t6.2-6.2 8.6-2.3z m-10.6 24.6q0.1-0.2-0.2-0.3-0.2-0.1-0.2 0.1-0.1 0.1 0.1 0.2 0.2 0.2 0.3 0z m0.7 0.7q0.1-0.1-0.1-0.3-0.2-0.2-0.3-0.1-0.2 0.1 0 0.4 0.3 0.2 0.4 0z m0.7 1q0.2-0.1 0-0.4-0.2-0.3-0.4-0.1-0.2 0.1 0 0.4t0.4 0.1z m0.9 1q0.2-0.2-0.1-0.4-0.3-0.3-0.4-0.1-0.2 0.2 0 0.4 0.3 0.3 0.5 0.1z m1.3 0.5q0-0.2-0.3-0.3-0.4-0.1-0.4 0.1t0.2 0.4q0.4 0.1 0.5-0.2z m1.4 0.1q0-0.2-0.4-0.2-0.4 0-0.4 0.2 0 0.3 0.4 0.3 0.4 0 0.4-0.3z m1.3-0.2q-0.1-0.2-0.4-0.2-0.4 0.1-0.3 0.4t0.4 0.1 0.3-0.3z');
    addShimE(_el_17);
    _el_18 = createAndAppend(doc, 'li', _el_7);
    addShimE(_el_18);
    _el_19 = createAndAppend(doc, 'a', _el_18);
    createAttr(_el_19, 'href', 'mailto:andi@andiqu.com');
    addShimC(_el_19);
    _el_20 = doc.createElementNS('http://www.w3.org/2000/svg', 'svg');
    _el_19.append(_el_20);
    createAttr(_el_20, 'viewBox', '0 0 40 40');
    addShimE(_el_20);
    _el_21 = doc.createElementNS('http://www.w3.org/2000/svg', 'g');
    _el_20.append(_el_21);
    addShimE(_el_21);
    _el_22 = doc.createElementNS('http://www.w3.org/2000/svg', 'path');
    _el_21.append(_el_22);
    createAttr(_el_22, 'd', 'm40 15.8v17.8q0 1.4-1 2.5t-2.6 1h-32.8q-1.5 0-2.6-1t-1-2.5v-17.8q1 1.1 2.3 2 8 5.5 11 7.7 1.3 0.9 2.1 1.5t2.1 1 2.5 0.6h0q1.2 0 2.5-0.6t2.1-1 2.1-1.5q3.7-2.8 11.1-7.7 1.2-0.9 2.2-1.9z m0-6.5q0 1.7-1.1 3.4t-2.7 2.7q-8.4 5.8-10.5 7.3-0.2 0.1-0.9 0.6t-1.2 0.9-1.2 0.7-1.3 0.6-1.1 0.2h0q-0.5 0-1.1-0.2t-1.3-0.6-1.2-0.7-1.2-0.9-0.9-0.6q-2.1-1.5-5.9-4.1t-4.6-3.2q-1.3-0.9-2.6-2.6t-1.2-3q0-1.8 0.9-2.9t2.7-1.2h32.8q1.5 0 2.5 1.1t1.1 2.5z');
    addShimE(_el_22);
    _el_23 = createDivAndAppend(doc, _el_0);
    _el_23.className = 'face';
    addShimC(_el_23);
    _el_24 = createAndAppend(doc, 'img', _el_23);
    createAttr(_el_24, 'alt', 'It\'s a pity that you can\'t see my face');
    createAttr(_el_24, 'src', 'favicon.png');
    addShimE(_el_24);
    init(const [], null);
    return null;
  }
}

AppView<import2.AboutComponent> viewFactory_AboutComponent0(AppView<dynamic> parentView, int parentIndex) {
  return ViewAboutComponent0(parentView, parentIndex);
}

final List<dynamic> styles$AboutComponentHost = const [];

class _ViewAboutComponentHost0 extends AppView<import2.AboutComponent> {
  ViewAboutComponent0 _compView_0;
  import2.AboutComponent _AboutComponent_0_5;
  _ViewAboutComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import5.ViewType.host, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef<import2.AboutComponent> build() {
    _compView_0 = ViewAboutComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _AboutComponent_0_5 = import2.AboutComponent();
    _compView_0.create(_AboutComponent_0_5, projectableNodes);
    init0(rootEl);
    return ComponentRef(0, this, rootEl, _AboutComponent_0_5);
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

AppView<import2.AboutComponent> viewFactory_AboutComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return _ViewAboutComponentHost0(parentView, parentIndex);
}

const ComponentFactory<import2.AboutComponent> _AboutComponentNgFactory = const ComponentFactory('about-component', viewFactory_AboutComponentHost0);
ComponentFactory<import2.AboutComponent> get AboutComponentNgFactory {
  return _AboutComponentNgFactory;
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(AboutComponent, AboutComponentNgFactory);
  _ref0.initReflector();
}
