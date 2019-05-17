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
  import3.DivElement _el_1;
  import3.Element _el_2;
  import3.Element _el_3;
  import3.UListElement _el_4;
  import3.Element _el_5;
  import3.AnchorElement _el_6;
  import3.Element _el_7;
  import3.Element _el_8;
  import3.Element _el_9;
  import3.AnchorElement _el_10;
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
  import3.DivElement _el_22;
  import3.DivElement _el_23;
  import3.Element _el_24;
  import3.Element _el_26;
  import3.DivElement _el_27;
  import3.Element _el_28;
  import3.Element _el_30;
  import3.Element _el_32;
  import3.Element _el_35;
  import3.AnchorElement _el_37;
  import3.Element _el_40;
  import3.Element _el_42;
  import3.Element _el_45;
  import3.Element _el_48;
  import3.AnchorElement _el_50;
  import3.AnchorElement _el_53;
  import3.Element _el_56;
  import3.Element _el_58;
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
    createAttr(_el_0, 'id', 'about');
    addShimE(_el_0);
    _el_1 = createDivAndAppend(doc, _el_0);
    _el_1.className = 'face';
    addShimC(_el_1);
    _el_2 = createAndAppend(doc, 'img', _el_1);
    createAttr(_el_2, 'alt', 'It\'s a pity that you can\'t see my face');
    createAttr(_el_2, 'src', 'face.jpg');
    addShimE(_el_2);
    _el_3 = createAndAppend(doc, 'br', _el_0);
    addShimE(_el_3);
    _el_4 = createAndAppend(doc, 'ul', _el_0);
    _el_4.className = 'social-media';
    addShimC(_el_4);
    _el_5 = createAndAppend(doc, 'li', _el_4);
    addShimE(_el_5);
    _el_6 = createAndAppend(doc, 'a', _el_5);
    createAttr(_el_6, 'href', 'https://www.linkedin.com/in/andi-qu-48313a154');
    addShimC(_el_6);
    _el_7 = doc.createElementNS('http://www.w3.org/2000/svg', 'svg');
    _el_6.append(_el_7);
    createAttr(_el_7, 'viewBox', '0 0 40 40');
    createAttr(_el_7, 'xmlns', 'http://www.w3.org/2000/svg');
    addShimE(_el_7);
    _el_8 = doc.createElementNS('http://www.w3.org/2000/svg', 'path');
    _el_7.append(_el_8);
    createAttr(_el_8, 'd', 'm10.8 13.9v22.2h-7.4v-22.1h7.4z m0.5-6.8q0 1.7-1.2 2.7t-3 1.1h0q-1.9 0-3-1.1t-1.1-2.7q0-1.6 1.2-2.7t3-1.1 2.9 1.1 1.2 2.7z m26 16.3v12.7h-7.4v-11.9q0-2.3-0.9-3.6t-2.8-1.4q-1.4 0-2.3 0.8t-1.5 1.9q-0.2 0.7-0.2 1.8v12.4h-7.3q0-8.9 0-14.5t0-6.6l0-1h7.3v3.2h-0.1q0.5-0.7 1-1.3t1.2-1.1 2-1 2.5-0.4q3.8 0 6.2 2.6t2.3 7.4z');
    addShimE(_el_8);
    _el_9 = createAndAppend(doc, 'li', _el_4);
    addShimE(_el_9);
    _el_10 = createAndAppend(doc, 'a', _el_9);
    createAttr(_el_10, 'href', 'https://www.github.com/dolphingarlic');
    addShimC(_el_10);
    _el_11 = doc.createElementNS('http://www.w3.org/2000/svg', 'svg');
    _el_10.append(_el_11);
    createAttr(_el_11, 'viewBox', '0 0 40 40');
    createAttr(_el_11, 'xmlns', 'http://www.w3.org/2000/svg');
    addShimE(_el_11);
    _el_12 = doc.createElementNS('http://www.w3.org/2000/svg', 'path');
    _el_11.append(_el_12);
    createAttr(_el_12, 'd', 'm20.1 2.9q4.7 0 8.6 2.3t6.3 6.2 2.3 8.6q0 5.6-3.3 10.1t-8.4 6.2q-0.6 0.1-0.9-0.2t-0.3-0.7q0 0 0-1.7t0-3q0-2.1-1.2-3.1 1.3-0.2 2.3-0.4t2.1-0.9 1.8-1.5 1.2-2.3 0.5-3.4q0-2.7-1.8-4.6 0.8-2-0.2-4.5-0.6-0.2-1.8 0.2t-2 1l-0.9 0.5q-2-0.6-4.3-0.6t-4.2 0.6q-0.4-0.2-1-0.6t-1.9-0.8-1.9-0.3q-1 2.5-0.1 4.5-1.8 1.9-1.8 4.6 0 1.9 0.5 3.4t1.1 2.3 1.8 1.5 2.1 0.9 2.3 0.4q-0.9 0.8-1.1 2.3-0.4 0.2-1 0.3t-1.3 0.1-1.4-0.5-1.3-1.4q-0.4-0.7-1-1.1t-1.1-0.6l-0.5 0q-0.5 0-0.6 0.1t-0.1 0.2 0.2 0.3 0.2 0.3l0.2 0.1q0.5 0.2 1 0.9t0.7 1.1l0.2 0.5q0.3 0.9 1 1.4t1.5 0.7 1.5 0.1 1.3-0.1l0.5 0q0 0.8 0 1.9t0 1.2q0 0.5-0.3 0.7t-0.9 0.2q-5.2-1.7-8.4-6.2t-3.3-10.1q0-4.7 2.3-8.6t6.2-6.2 8.6-2.3z m-10.6 24.6q0.1-0.2-0.2-0.3-0.2-0.1-0.2 0.1-0.1 0.1 0.1 0.2 0.2 0.2 0.3 0z m0.7 0.7q0.1-0.1-0.1-0.3-0.2-0.2-0.3-0.1-0.2 0.1 0 0.4 0.3 0.2 0.4 0z m0.7 1q0.2-0.1 0-0.4-0.2-0.3-0.4-0.1-0.2 0.1 0 0.4t0.4 0.1z m0.9 1q0.2-0.2-0.1-0.4-0.3-0.3-0.4-0.1-0.2 0.2 0 0.4 0.3 0.3 0.5 0.1z m1.3 0.5q0-0.2-0.3-0.3-0.4-0.1-0.4 0.1t0.2 0.4q0.4 0.1 0.5-0.2z m1.4 0.1q0-0.2-0.4-0.2-0.4 0-0.4 0.2 0 0.3 0.4 0.3 0.4 0 0.4-0.3z m1.3-0.2q-0.1-0.2-0.4-0.2-0.4 0.1-0.3 0.4t0.4 0.1 0.3-0.3z');
    addShimE(_el_12);
    _el_13 = createAndAppend(doc, 'li', _el_4);
    addShimE(_el_13);
    _el_14 = createAndAppend(doc, 'a', _el_13);
    createAttr(_el_14, 'href', 'mailto:andi@andiqu.com');
    addShimC(_el_14);
    _el_15 = doc.createElementNS('http://www.w3.org/2000/svg', 'svg');
    _el_14.append(_el_15);
    createAttr(_el_15, 'viewBox', '0 0 24 24');
    createAttr(_el_15, 'xmlns', 'http://www.w3.org/2000/svg');
    addShimE(_el_15);
    _el_16 = doc.createElementNS('http://www.w3.org/2000/svg', 'path');
    _el_15.append(_el_16);
    createAttr(_el_16, 'd', 'M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z');
    addShimE(_el_16);
    _el_17 = doc.createElementNS('http://www.w3.org/2000/svg', 'path');
    _el_15.append(_el_17);
    createAttr(_el_17, 'd', 'M0 0h24v24H0z');
    createAttr(_el_17, 'fill', 'none');
    addShimE(_el_17);
    _el_18 = createAndAppend(doc, 'li', _el_4);
    addShimE(_el_18);
    _el_19 = createAndAppend(doc, 'a', _el_18);
    createAttr(_el_19, 'href', 'https://codeforces.com/profile/dolphingarlic');
    addShimC(_el_19);
    _el_20 = doc.createElementNS('http://www.w3.org/2000/svg', 'svg');
    _el_19.append(_el_20);
    createAttr(_el_20, 'viewBox', '0 0 24 24');
    createAttr(_el_20, 'xmlns', 'http://www.w3.org/2000/svg');
    addShimE(_el_20);
    _el_21 = doc.createElementNS('http://www.w3.org/2000/svg', 'path');
    _el_20.append(_el_21);
    createAttr(_el_21, 'd', 'M4.5 7.5C5.328 7.5 6 8.172 6 9v10.5c0 .828-.672 1.5-1.5 1.5h-3C.673 21 0 20.328 0 19.5V9c0-.828.673-1.5 1.5-1.5h3zm9-4.5c.828 0 1.5.672 1.5 1.5v15c0 .828-.672 1.5-1.5 1.5h-3c-.827 0-1.5-.672-1.5-1.5v-15c0-.828.673-1.5 1.5-1.5h3zm9 7.5c.828 0 1.5.672 1.5 1.5v7.5c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5V12c0-.828.672-1.5 1.5-1.5h3z');
    addShimE(_el_21);
    _el_22 = createDivAndAppend(doc, _el_0);
    _el_22.className = 'about-text';
    addShimC(_el_22);
    _el_23 = createDivAndAppend(doc, _el_22);
    createAttr(_el_23, 'style', 'text-align: center;');
    addShimC(_el_23);
    _el_24 = createAndAppend(doc, 'h1', _el_23);
    _el_24.className = 'section-heading';
    addShimE(_el_24);
    import3.Text _text_25 = import3.Text('ABOUT ME');
    _el_24.append(_text_25);
    _el_26 = createAndAppend(doc, 'hr', _el_23);
    addShimE(_el_26);
    _el_27 = createDivAndAppend(doc, _el_22);
    addShimC(_el_27);
    _el_28 = createAndAppend(doc, 'p', _el_27);
    addShimE(_el_28);
    import3.Text _text_29 = import3.Text('Salutations, everyone. Andi here.');
    _el_28.append(_text_29);
    _el_30 = createAndAppend(doc, 'p', _el_27);
    addShimE(_el_30);
    import3.Text _text_31 = import3.Text('I am a high school student from St John\'s College, Johannesburg. I started programming in grade 9, and since then it has ');
    _el_30.append(_text_31);
    _el_32 = createSpanAndAppend(doc, _el_30);
    createAttr(_el_32, 'style', 'text-decoration: line-through;');
    addShimE(_el_32);
    import3.Text _text_33 = import3.Text('taken over my life');
    _el_32.append(_text_33);
    import3.Text _text_34 = import3.Text(' become one of my passions and I have participated in quite a few contests since then.');
    _el_30.append(_text_34);
    _el_35 = createAndAppend(doc, 'p', _el_27);
    addShimE(_el_35);
    import3.Text _text_36 = import3.Text('My interests include playing the piano and clarinet, competitive programming, and olympiad maths. Sometimes, I also (try to) contribute to FOSS initiatives like ');
    _el_35.append(_text_36);
    _el_37 = createAndAppend(doc, 'a', _el_35);
    createAttr(_el_37, 'href', 'https://www.apertium.org');
    addShimC(_el_37);
    import3.Text _text_38 = import3.Text('Apertium');
    _el_37.append(_text_38);
    import3.Text _text_39 = import3.Text(', but unfortunately this does not happen very often.');
    _el_35.append(_text_39);
    _el_40 = createAndAppend(doc, 'p', _el_27);
    addShimE(_el_40);
    import3.Text _text_41 = import3.Text('"But Andi", I hear you cry, "where are all the cool things you\'ve coded up? Surely someone as ');
    _el_40.append(_text_41);
    _el_42 = createAndAppend(doc, 'b', _el_40);
    addShimE(_el_42);
    import3.Text _text_43 = import3.Text('cool');
    _el_42.append(_text_43);
    import3.Text _text_44 = import3.Text(' and ');
    _el_40.append(_text_44);
    _el_45 = createAndAppend(doc, 'b', _el_40);
    addShimE(_el_45);
    import3.Text _text_46 = import3.Text('awesome');
    _el_45.append(_text_46);
    import3.Text _text_47 = import3.Text(' as you would have at least 2 world-changing projects?"');
    _el_40.append(_text_47);
    _el_48 = createAndAppend(doc, 'p', _el_27);
    addShimE(_el_48);
    import3.Text _text_49 = import3.Text('To that, I say: Yes, it is quite true - and unfortunate - that I have created a surprisingly small amount of actually-useful software. This may or may not be due to my focus on competitive programming over creating actually-useful software. But fear not! I have created/contributed towards some fun stuff like ');
    _el_48.append(_text_49);
    _el_50 = createAndAppend(doc, 'a', _el_48);
    createAttr(_el_50, 'href', 'https://dolphingarlic.github.io/Apertium-Global-PairViewer');
    addShimC(_el_50);
    import3.Text _text_51 = import3.Text('the Apertium Global PairViewer');
    _el_50.append(_text_51);
    import3.Text _text_52 = import3.Text(' and ');
    _el_48.append(_text_52);
    _el_53 = createAndAppend(doc, 'a', _el_48);
    createAttr(_el_53, 'href', 'https://dolphingarlic.github.io/slinky_snake');
    addShimC(_el_53);
    import3.Text _text_54 = import3.Text('whatever this is');
    _el_53.append(_text_54);
    import3.Text _text_55 = import3.Text('.');
    _el_48.append(_text_55);
    _el_56 = createAndAppend(doc, 'p', _el_27);
    addShimE(_el_56);
    import3.Text _text_57 = import3.Text('Unfortunately (or fortunately, depending on how much you despise my writing), I do not have a blog (yet), so you\'ll have to trust that this website accurately conveys who I am.');
    _el_56.append(_text_57);
    _el_58 = createAndAppend(doc, 'br', _el_0);
    addShimE(_el_58);
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
