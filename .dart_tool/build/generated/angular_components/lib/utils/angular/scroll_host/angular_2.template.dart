// **************************************************************************
// Generator: Instance of 'Compiler'
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'angular_2.dart';
export 'angular_2.dart';
import 'dart:async';
import 'dart:html';
import 'package:angular/angular.dart';
import 'package:quiver/time.dart';
import 'package:angular_components/utils/angular/properties/properties.dart';
import 'package:angular_components/utils/angular/scroll_host/interface.dart';
import 'package:angular_components/src/utils/angular/scroll_host/gestures.dart';
import 'package:angular_components/src/utils/angular/scroll_host/scroll_host_base.dart';
import 'package:angular_components/src/utils/angular/scroll_host/scroll_host_interface.dart';
import 'package:angular_components/utils/browser/dom_service/angular_2.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/src/utils/angular/scroll_host/gestures.template.dart' as _ref1;
import 'package:angular_components/src/utils/angular/scroll_host/scroll_host_base.template.dart' as _ref2;
import 'package:angular_components/src/utils/angular/scroll_host/scroll_host_interface.template.dart' as _ref3;
import 'package:angular_components/src/utils/angular/scroll_host/scroll_host_interface.template.dart' as _ref4;
import 'package:angular_components/utils/angular/properties/properties.template.dart' as _ref5;
import 'package:angular_components/utils/angular/scroll_host/interface.template.dart' as _ref6;
import 'package:angular_components/utils/browser/dom_service/angular_2.template.dart' as _ref7;
import 'package:angular_components/utils/browser/dom_service/dom_service.dart' as _i1;
import 'package:angular/src/core/zone/ng_zone.dart' as _i2;
import 'package:angular_components/src/utils/angular/scroll_host/gestures.dart' as _i3;
import 'dart:html' as _i4;

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerFactory(WindowScrollHost, (_i1.DomService p0, _i2.NgZone p1, _i3.GestureListenerFactory p2, _i4.Window p3) => WindowScrollHost(p0, p1, p2, p3));
  _ngRef.registerDependencies(WindowScrollHost, const [
    [_i1.DomService],
    [_i2.NgZone],
    [_i3.GestureListenerFactory],
    [_i4.Window]
  ]);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
  _ref4.initReflector();
  _ref5.initReflector();
  _ref6.initReflector();
  _ref7.initReflector();
}
