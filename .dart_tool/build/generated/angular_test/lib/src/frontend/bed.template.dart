// **************************************************************************
// Generator: Instance of 'Compiler'
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'bed.dart';
export 'bed.dart';
import 'dart:async';
import 'dart:html';
import 'package:meta/meta.dart';
import 'package:angular/angular.dart';
import 'package:angular/experimental.dart';
import '../bootstrap.dart';
import '../errors.dart';
import 'fixture.dart';
import 'stabilizer.dart';
import '../bootstrap.template.dart' as _ref0;
import '../errors.template.dart' as _ref1;
import 'fixture.template.dart' as _ref2;
import 'package:angular/angular.template.dart' as _ref3;
import 'package:angular/experimental.template.dart' as _ref4;
import 'stabilizer.template.dart' as _ref5;

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
