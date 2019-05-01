// **************************************************************************
// Generator: Instance of 'Compiler'
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'ng_model.dart';
export 'ng_model.dart';
import 'dart:async';
import 'package:angular/angular.dart';
import 'package:meta/dart2js.dart' as dart2js;
import '../model.dart' show Control;
import '../validators.dart' show NG_VALIDATORS;
import 'control_value_accessor.dart' show ControlValueAccessor, ngValueAccessor;
import 'ng_control.dart' show NgControl;
import 'shared.dart' show setUpControl;
import '../model.template.dart' as _ref0;
import '../validators.template.dart' as _ref1;
import 'control_value_accessor.template.dart' as _ref2;
import 'ng_control.template.dart' as _ref3;
import 'package:angular/angular.template.dart' as _ref4;
import 'shared.template.dart' as _ref5;

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
}
