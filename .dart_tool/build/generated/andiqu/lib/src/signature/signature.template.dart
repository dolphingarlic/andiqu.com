// **************************************************************************
// Generator: Instance of 'Compiler'
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'signature.dart';
export 'signature.dart';
import 'dart:html';
import 'dart:async';
import 'dart:math';
import 'package:angular/angular.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:andiqu/src/signature/signature.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'signature.dart' as import2;
import 'dart:html' as import3;
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import5;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import7;
import 'package:angular/src/runtime.dart' as import8;
import 'package:angular/angular.dart';

final List<dynamic> styles$SignatureComponent = [import0.styles];

class ViewSignatureComponent0 extends AppView<import2.SignatureComponent> {
  import3.DivElement _el_0;
  import3.DivElement _el_1;
  import3.Element _el_2;
  import3.Element _el_4;
  static RenderComponentType _renderType;
  ViewSignatureComponent0(AppView<dynamic> parentView, int parentIndex) : super(import5.ViewType.component, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import3.document.createElement('signature-component');
    _renderType ??= import7.appViewUtils.createRenderType((import8.isDevMode ? 'asset:andiqu/lib/src/signature/signature.dart' : null), ViewEncapsulation.Emulated, styles$SignatureComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import2.SignatureComponent> build() {
    final _rootEl = rootEl;
    final import3.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    var doc = import3.document;
    _el_0 = createDivAndAppend(doc, parentRenderNode);
    _el_0.className = 'triangle';
    addShimC(_el_0);
    _el_1 = createDivAndAppend(doc, parentRenderNode);
    _el_1.className = 'signature';
    addShimC(_el_1);
    _el_2 = createSpanAndAppend(doc, _el_1);
    _el_2.className = 'text';
    addShimE(_el_2);
    import3.Text _text_3 = import3.Text(' ');
    _el_1.append(_text_3);
    _el_4 = createSpanAndAppend(doc, _el_1);
    _el_4.className = 'blinking';
    addShimE(_el_4);
    import3.Text _text_5 = import3.Text('|');
    _el_4.append(_text_5);
    init(const [], null);
    return null;
  }
}

AppView<import2.SignatureComponent> viewFactory_SignatureComponent0(AppView<dynamic> parentView, int parentIndex) {
  return ViewSignatureComponent0(parentView, parentIndex);
}

final List<dynamic> styles$SignatureComponentHost = const [];

class _ViewSignatureComponentHost0 extends AppView<import2.SignatureComponent> {
  ViewSignatureComponent0 _compView_0;
  import2.SignatureComponent _SignatureComponent_0_5;
  _ViewSignatureComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import5.ViewType.host, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef<import2.SignatureComponent> build() {
    _compView_0 = ViewSignatureComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _SignatureComponent_0_5 = import2.SignatureComponent();
    _compView_0.create(_SignatureComponent_0_5, projectableNodes);
    init0(rootEl);
    return ComponentRef(0, this, rootEl, _SignatureComponent_0_5);
  }

  @override
  void detectChangesInternal() {
    bool firstCheck = (this.cdState == 0);
    if ((!import7.AppViewUtils.throwOnChanges && firstCheck)) {
      _SignatureComponent_0_5.ngOnInit();
    }
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
  }
}

AppView<import2.SignatureComponent> viewFactory_SignatureComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return _ViewSignatureComponentHost0(parentView, parentIndex);
}

const ComponentFactory<import2.SignatureComponent> _SignatureComponentNgFactory = const ComponentFactory('signature-component', viewFactory_SignatureComponentHost0);
ComponentFactory<import2.SignatureComponent> get SignatureComponentNgFactory {
  return _SignatureComponentNgFactory;
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(SignatureComponent, SignatureComponentNgFactory);
  _ref0.initReflector();
}
