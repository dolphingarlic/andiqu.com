// **************************************************************************
// Generator: Instance of 'Compiler'
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'app_view_utils.dart';
export 'app_view_utils.dart';
import 'dart:html' show DocumentFragment, NodeTreeSanitizer;
import 'package:angular/di.dart' show Injectable, Inject;
import 'package:angular/src/core/application_tokens.dart' show APP_ID;
import 'package:angular/src/core/change_detection/change_detection.dart' show devModeEqual;
import 'package:angular/src/core/metadata/view.dart' show ViewEncapsulation;
import 'package:angular/src/core/render/api.dart' show RenderComponentType;
import 'package:angular/src/core/security.dart';
import 'package:angular/src/platform/dom/events/event_manager.dart' show EventManager;
import 'package:angular/src/runtime.dart';
import 'package:meta/dart2js.dart' as dart2js;
import 'exceptions.dart' show ExpressionChangedAfterItHasBeenCheckedException;
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'exceptions.template.dart' as _ref0;
import 'package:angular/di.template.dart' as _ref1;
import 'package:angular/src/core/application_tokens.template.dart' as _ref2;
import 'package:angular/src/core/change_detection/change_detection.template.dart' as _ref3;
import 'package:angular/src/core/metadata/view.template.dart' as _ref4;
import 'package:angular/src/core/render/api.template.dart' as _ref5;
import 'package:angular/src/core/security.template.dart' as _ref6;
import 'package:angular/src/platform/dom/events/event_manager.template.dart' as _ref7;
import 'package:angular/src/runtime.template.dart' as _ref8;
import 'package:angular/src/core/security.dart' as _i1;
import 'package:angular/src/platform/dom/events/event_manager.dart' as _i2;
import 'package:angular/src/core/di/opaque_token.dart' as _i3;

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerFactory(AppViewUtils, (String p0, _i1.SanitizationService p1, _i2.EventManager p2) => AppViewUtils(p0, p1, p2));
  _ngRef.registerDependencies(AppViewUtils, const [
    [_ngRef.Inject(_i3.OpaqueToken<String>('APP_ID'))],
    [_i1.SanitizationService],
    [_i2.EventManager]
  ]);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
  _ref4.initReflector();
  _ref5.initReflector();
  _ref6.initReflector();
  _ref7.initReflector();
  _ref8.initReflector();
}
