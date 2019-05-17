// **************************************************************************
// Generator: Instance of 'Compiler'
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'app_view.dart';
export 'app_view.dart';
import 'dart:async';
import 'dart:html';
import 'dart:js_util' as js_util;
import 'package:angular/src/core/change_detection/change_detection.dart' show ChangeDetectorRef, ChangeDetectionStrategy, ChangeDetectorState;
import 'package:angular/src/core/change_detection/host.dart';
import 'package:angular/src/di/errors.dart' as di_errors;
import 'package:angular/src/di/injector/element.dart';
import 'package:angular/src/di/injector/injector.dart' show throwIfNotFound, Injector;
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/runtime.dart';
import 'package:meta/meta.dart';
import 'package:meta/dart2js.dart' as dart2js;
import 'app_view_utils.dart';
import 'component_factory.dart';
import 'template_ref.dart';
import 'view_container.dart';
import 'view_ref.dart' show ViewRefImpl;
import 'view_type.dart' show ViewType;
import 'app_view_utils.template.dart' as _ref0;
import 'component_factory.template.dart' as _ref1;
import 'package:angular/src/core/change_detection/change_detection.template.dart' as _ref2;
import 'package:angular/src/core/change_detection/component_state.template.dart' as _ref3;
import 'package:angular/src/core/change_detection/host.template.dart' as _ref4;
import 'package:angular/src/core/render/api.template.dart' as _ref5;
import 'package:angular/src/di/errors.template.dart' as _ref6;
import 'package:angular/src/di/injector/element.template.dart' as _ref7;
import 'package:angular/src/di/injector/injector.template.dart' as _ref8;
import 'package:angular/src/runtime.template.dart' as _ref9;
import 'template_ref.template.dart' as _ref10;
import 'view_container.template.dart' as _ref11;
import 'view_ref.template.dart' as _ref12;
import 'view_type.template.dart' as _ref13;

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

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
  _ref11.initReflector();
  _ref12.initReflector();
  _ref13.initReflector();
}
