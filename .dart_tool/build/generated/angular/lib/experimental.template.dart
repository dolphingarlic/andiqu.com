// **************************************************************************
// Generator: Instance of 'Compiler'
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'experimental.dart';
export 'experimental.dart';
import 'package:angular/angular.dart';
import 'package:angular/src/runtime.dart';
import 'package:meta/meta.dart';
import 'src/bootstrap/run.dart' show appInjector;
import 'src/core/linker/app_view.dart' as app_view;
import 'src/di/injector/injector.dart';
import 'src/runtime.dart';
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular/src/runtime.template.dart' as _ref1;
import 'src/bootstrap/modules.template.dart' as _ref2;
import 'src/bootstrap/run.template.dart' as _ref3;
import 'src/core/linker/app_view.template.dart' as _ref4;
import 'src/core/linker/component_resolver.template.dart' as _ref5;
import 'src/core/zone/ng_zone.template.dart' as _ref6;
import 'src/di/injector/injector.template.dart' as _ref7;
import 'src/runtime.template.dart' as _ref8;

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
}
