// **************************************************************************
// Generator: Instance of 'Compiler'
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'common_tools.dart';
export 'common_tools.dart';
import 'dart:html';
import 'package:angular/src/core/application_ref.dart' show ApplicationRef;
import 'package:angular/src/core/linker/component_factory.dart' show ComponentRef;
import 'package:angular/src/core/application_ref.template.dart' as _ref0;
import 'package:angular/src/core/linker/component_factory.template.dart' as _ref1;

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ref0.initReflector();
  _ref1.initReflector();
}
