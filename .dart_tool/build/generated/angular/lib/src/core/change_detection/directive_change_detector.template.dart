// **************************************************************************
// Generator: Instance of 'Compiler'
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'directive_change_detector.dart';
export 'directive_change_detector.dart';
import 'dart:html';
import 'dart:js_util' as js_util;
import 'package:angular/src/core/change_detection/host.dart';
import 'package:angular/src/core/linker/app_view.dart';
import 'package:angular/src/core/change_detection/host.template.dart' as _ref0;
import 'package:angular/src/core/linker/app_view.template.dart' as _ref1;

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ref0.initReflector();
  _ref1.initReflector();
}
