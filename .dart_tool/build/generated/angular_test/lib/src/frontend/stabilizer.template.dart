// **************************************************************************
// Generator: Instance of 'Compiler'
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'stabilizer.dart';
export 'stabilizer.dart';
import 'dart:async';
import 'package:meta/meta.dart';
import 'package:angular/di.dart';
import 'package:angular/experimental.dart';
import '../errors.dart';
import '../errors.template.dart' as _ref0;
import 'package:angular/di.template.dart' as _ref1;
import 'package:angular/experimental.template.dart' as _ref2;

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
