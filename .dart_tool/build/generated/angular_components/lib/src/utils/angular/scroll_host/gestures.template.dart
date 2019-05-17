// **************************************************************************
// Generator: Instance of 'Compiler'
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'gestures.dart';
export 'gestures.dart';
import 'dart:async';
import 'dart:html';
import 'dart:math' as math;
import 'package:angular_components/src/utils/angular/scroll_host/scroll_host_event_impl.dart';
import 'package:angular_components/src/utils/angular/scroll_host/scroll_host_interface.dart';
import 'package:angular/angular.dart';
import 'package:quiver/time.dart';
import 'package:angular_components/utils/disposer/disposer.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/src/utils/angular/scroll_host/scroll_host_event_impl.template.dart' as _ref1;
import 'package:angular_components/src/utils/angular/scroll_host/scroll_host_interface.template.dart' as _ref2;
import 'package:angular_components/utils/disposer/disposer.template.dart' as _ref3;
import 'package:quiver/time.dart' as _i1;

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerFactory(GestureListenerFactory, (_i1.Clock p0) => GestureListenerFactory(p0));
  _ngRef.registerDependencies(GestureListenerFactory, const [
    [_i1.Clock]
  ]);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
}
