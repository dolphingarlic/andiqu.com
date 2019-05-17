// **************************************************************************
// Generator: Instance of 'Compiler'
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'injector.dart';
export 'injector.dart';
import 'package:meta/meta.dart';
import '../errors.dart' as errors;
import '../module.dart';
import 'empty.dart';
import 'hierarchical.dart';
import 'map.dart';
import 'runtime.dart';
import '../../core/di/opaque_token.template.dart' as _ref0;
import '../errors.template.dart' as _ref1;
import '../module.template.dart' as _ref2;
import 'empty.template.dart' as _ref3;
import 'hierarchical.template.dart' as _ref4;
import 'map.template.dart' as _ref5;
import 'runtime.template.dart' as _ref6;

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
}
