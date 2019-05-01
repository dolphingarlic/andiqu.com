// **************************************************************************
// Generator: Instance of 'Compiler'
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'component_resolver.dart';
export 'component_resolver.dart';
import 'package:angular/src/runtime.dart';
import 'package:angular/src/di/reflector.dart' as reflector;
import 'package:meta/meta.dart';
import 'component_factory.dart' show ComponentFactory;
import 'component_factory.template.dart' as _ref0;
import 'package:angular/src/di/reflector.template.dart' as _ref1;
import 'package:angular/src/runtime.template.dart' as _ref2;

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
}
