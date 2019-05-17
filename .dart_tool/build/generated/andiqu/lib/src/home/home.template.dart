// **************************************************************************
// Generator: Instance of 'Compiler'
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'home.dart';
export 'home.dart';
import 'package:angular/angular.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:andiqu/src/home/home.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'home.dart' as import2;
import 'dart:html' as import3;
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import5;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import7;
import 'package:angular/src/runtime.dart' as import8;
import 'package:angular/angular.dart';

final List<dynamic> styles$HomeComponent = [import0.styles];

class ViewHomeComponent0 extends AppView<import2.HomeComponent> {
  import3.Element _el_0;
  import3.DivElement _el_1;
  import3.Element _el_2;
  import3.Element _el_4;
  import3.Element _el_5;
  import3.Element _el_7;
  import3.DivElement _el_9;
  import3.Element _el_10;
  import3.Element _el_13;
  import3.Element _el_15;
  static RenderComponentType _renderType;
  ViewHomeComponent0(AppView<dynamic> parentView, int parentIndex) : super(import5.ViewType.component, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import3.document.createElement('home-component');
    _renderType ??= import7.appViewUtils.createRenderType((import8.isDevMode ? 'asset:andiqu/lib/src/home/home.dart' : null), ViewEncapsulation.Emulated, styles$HomeComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import2.HomeComponent> build() {
    final _rootEl = rootEl;
    final import3.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    var doc = import3.document;
    _el_0 = createAndAppend(doc, 'section', parentRenderNode);
    createAttr(_el_0, 'id', 'home');
    addShimE(_el_0);
    _el_1 = createDivAndAppend(doc, _el_0);
    createAttr(_el_1, 'style', 'text-align: center;');
    addShimC(_el_1);
    _el_2 = createAndAppend(doc, 'h1', _el_1);
    _el_2.className = 'section-heading';
    addShimE(_el_2);
    import3.Text _text_3 = import3.Text('ANDI QU - THE WEBSITE');
    _el_2.append(_text_3);
    _el_4 = createAndAppend(doc, 'hr', _el_1);
    addShimE(_el_4);
    _el_5 = createAndAppend(doc, 'p', _el_0);
    addShimE(_el_5);
    import3.Text _text_6 = import3.Text('I am a dynamic figure, often seen creating fake emails to get more free trials and preaching Communism to Icelandic sheep herders. Sometimes, if you\'re lucky, you\'ll even see me erecting massive 500 story skyscrapers in my backyard. When I am bored, I charm cats with my godlike yodelling skills and my transcendental clarinet squeaks.');
    _el_5.append(_text_6);
    _el_7 = createAndAppend(doc, 'p', _el_0);
    addShimE(_el_7);
    import3.Text _text_8 = import3.Text('I am motivated to take risks. Sometimes, because I like to live dangerously, I play chess with one less pawn and do geometry in pen. Sometimes I even play on the Wii without the safety strap! I know - I\'m a real daredevil. Sometimes I\'m even amazed myself that I\'ve managed to survive this long in the first place, what with all these totally dangerous and not at all normal feats! But nothing quite beats the adrenaline rush that I get from participating in a class discussion.');
    _el_7.append(_text_8);
    _el_9 = createDivAndAppend(doc, _el_0);
    createAttr(_el_9, 'style', 'text-align: center;');
    addShimC(_el_9);
    _el_10 = createAndAppend(doc, 'p', _el_9);
    addShimE(_el_10);
    import3.Text _text_11 = import3.Text('Who am I? Of course, I am...');
    _el_10.append(_text_11);
    import3.Text _text_12 = import3.Text('The One');
    _el_9.append(_text_12);
    _el_13 = createAndAppend(doc, 'br', _el_9);
    addShimE(_el_13);
    import3.Text _text_14 = import3.Text(' The Only');
    _el_9.append(_text_14);
    _el_15 = createAndAppend(doc, 'br', _el_9);
    addShimE(_el_15);
    import3.Text _text_16 = import3.Text(' Andi Qu');
    _el_9.append(_text_16);
    init(const [], null);
    return null;
  }
}

AppView<import2.HomeComponent> viewFactory_HomeComponent0(AppView<dynamic> parentView, int parentIndex) {
  return ViewHomeComponent0(parentView, parentIndex);
}

final List<dynamic> styles$HomeComponentHost = const [];

class _ViewHomeComponentHost0 extends AppView<import2.HomeComponent> {
  ViewHomeComponent0 _compView_0;
  import2.HomeComponent _HomeComponent_0_5;
  _ViewHomeComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import5.ViewType.host, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef<import2.HomeComponent> build() {
    _compView_0 = ViewHomeComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _HomeComponent_0_5 = import2.HomeComponent();
    _compView_0.create(_HomeComponent_0_5, projectableNodes);
    init0(rootEl);
    return ComponentRef(0, this, rootEl, _HomeComponent_0_5);
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

AppView<import2.HomeComponent> viewFactory_HomeComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return _ViewHomeComponentHost0(parentView, parentIndex);
}

const ComponentFactory<import2.HomeComponent> _HomeComponentNgFactory = const ComponentFactory('home-component', viewFactory_HomeComponentHost0);
ComponentFactory<import2.HomeComponent> get HomeComponentNgFactory {
  return _HomeComponentNgFactory;
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(HomeComponent, HomeComponentNgFactory);
  _ref0.initReflector();
}
