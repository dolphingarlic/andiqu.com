// **************************************************************************
// Generator: Instance of 'Compiler'
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'fixture.dart';
export 'fixture.dart';
import 'dart:async';
import 'dart:html';
import 'package:angular/angular.dart';
import 'bed.dart';
import 'stabilizer.dart';
import 'bed.template.dart' as _ref0;
import 'package:angular/angular.template.dart' as _ref1;
import 'stabilizer.template.dart' as _ref2;

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
