// **************************************************************************
// Generator: Instance of 'Compiler'
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'modules.dart';
export 'modules.dart';
import 'dart:html';
import 'dart:math';
import 'package:angular/src/core/application_ref.dart';
import 'package:angular/src/core/application_tokens.dart';
import 'package:angular/src/core/di.dart';
import 'package:angular/src/core/linker/app_view_utils.dart';
import 'package:angular/src/core/linker/component_loader.dart';
import 'package:angular/src/core/linker/dynamic_component_loader.dart';
import 'package:angular/src/core/testability/testability.dart';
import 'package:angular/src/core/zone.dart';
import 'package:angular/src/di/providers.dart';
import 'package:angular/src/facade/exception_handler.dart';
import 'package:angular/src/platform/browser/exceptions.dart';
import 'package:angular/src/platform/dom/events/dom_events.dart';
import 'package:angular/src/platform/dom/events/event_manager.dart';
import 'package:angular/src/platform/dom/events/key_events.dart';
import 'package:angular/src/runtime.dart';
import 'package:angular/src/security/dom_sanitization_service.dart';
import 'package:angular/src/security/dom_sanitization_service_impl.dart';
import 'package:meta/meta.dart';
import 'modules.template.dart' as ng;
import 'modules.template.dart' as _ref0;
import 'package:angular/src/core/application_ref.template.dart' as _ref1;
import 'package:angular/src/core/application_tokens.template.dart' as _ref2;
import 'package:angular/src/core/di.template.dart' as _ref3;
import 'package:angular/src/core/linker/app_view_utils.template.dart' as _ref4;
import 'package:angular/src/core/linker/component_loader.template.dart' as _ref5;
import 'package:angular/src/core/linker/dynamic_component_loader.template.dart' as _ref6;
import 'package:angular/src/core/testability/testability.template.dart' as _ref7;
import 'package:angular/src/core/zone.template.dart' as _ref8;
import 'package:angular/src/di/providers.template.dart' as _ref9;
import 'package:angular/src/facade/exception_handler.template.dart' as _ref10;
import 'package:angular/src/platform/browser/exceptions.template.dart' as _ref11;
import 'package:angular/src/platform/dom/events/dom_events.template.dart' as _ref12;
import 'package:angular/src/platform/dom/events/event_manager.template.dart' as _ref13;
import 'package:angular/src/platform/dom/events/key_events.template.dart' as _ref14;
import 'package:angular/src/runtime.template.dart' as _ref15;
import 'package:angular/src/security/dom_sanitization_service.template.dart' as _ref16;
import 'package:angular/src/security/dom_sanitization_service_impl.template.dart' as _ref17;
import 'package:angular/src/di/injector/injector.dart' as _i1;
import 'package:angular/src/di/injector/hierarchical.dart' as _i2;
import 'package:angular/src/platform/browser/exceptions.dart' as _i3;
import 'package:angular/src/security/dom_sanitization_service_impl.dart' as _i4;
import 'package:angular/src/core/linker/component_loader.dart' as _i5;
import 'package:angular/src/bootstrap/modules.dart' as _i6;
import 'package:angular/src/core/testability/testability.dart' as _i7;
import 'package:angular/src/platform/dom/events/event_manager.dart' as _i8;
import 'package:angular/src/security/dom_sanitization_service.dart' as _i9;
import 'package:angular/src/core/zone/ng_zone.dart' as _i10;
import 'package:angular/src/core/di/opaque_token.dart' as _i11;
import 'package:angular/src/facade/exception_handler.dart' as _i12;
import 'package:angular/src/core/security.dart' as _i13;
import 'package:angular/src/core/linker/dynamic_component_loader.dart' as _i14;

_i1.Injector minimalApp$Injector([_i1.Injector parent]) => _Injector$minimalApp._(parent);

class _Injector$minimalApp extends _i2.HierarchicalInjector {
  _Injector$minimalApp._([_i1.Injector parent]) : super(parent);

  _i3.BrowserExceptionHandler _field0;

  _i4.DomSanitizationServiceImpl _field2;

  dynamic _field3;

  dynamic _field4;

  _i5.ComponentLoader _field5;

  _i6.ThrowingSlowComponentLoader _field6;

  _i7.Testability _field7;

  _i8.EventManager _field8;

  dynamic _field9;

  _i3.BrowserExceptionHandler _getBrowserExceptionHandler$0() => _field0 ??= _i3.BrowserExceptionHandler();
  dynamic _getExisting$1() => inject(_i9.DomSanitizationService);
  _i4.DomSanitizationServiceImpl _getDomSanitizationServiceImpl$2() => _field2 ??= _i4.DomSanitizationServiceImpl();
  dynamic _getdynamic$3() => _field3 ??= _i6.createNgZone();
  dynamic _getdynamic$4() => _field4 ??= _i6.createRandomAppId();
  _i5.ComponentLoader _getComponentLoader$5() => _field5 ??= _i5.ComponentLoader();
  _i6.ThrowingSlowComponentLoader _getThrowingSlowComponentLoader$6() => _field6 ??= _i6.ThrowingSlowComponentLoader();
  _i7.Testability _getTestability$7() => _field7 ??= _i7.Testability(inject(_i10.NgZone));
  _i8.EventManager _getEventManager$8() => _field8 ??= _i8.EventManager(inject(const _i11.OpaqueToken<dynamic>('EventManagerPlugins')), inject(_i10.NgZone));
  dynamic _getdynamic$9() => _field9 ??= _i6.createEventPlugins();
  _i1.Injector _getInjector$10() => this;
  @override
  Object injectFromSelfOptional(Object token, [Object orElse = _i1.throwIfNotFound]) {
    if (identical(token, _i12.ExceptionHandler)) {
      return _getBrowserExceptionHandler$0();
    }
    if (identical(token, _i13.SanitizationService)) {
      return _getExisting$1();
    }
    if (identical(token, _i9.DomSanitizationService)) {
      return _getDomSanitizationServiceImpl$2();
    }
    if (identical(token, _i10.NgZone)) {
      return _getdynamic$3();
    }
    if (identical(token, const _i11.OpaqueToken<String>('APP_ID'))) {
      return _getdynamic$4();
    }
    if (identical(token, _i5.ComponentLoader)) {
      return _getComponentLoader$5();
    }
    if (identical(token, _i14.SlowComponentLoader)) {
      return _getThrowingSlowComponentLoader$6();
    }
    if (identical(token, _i7.Testability)) {
      return _getTestability$7();
    }
    if (identical(token, _i8.EventManager)) {
      return _getEventManager$8();
    }
    if (identical(token, const _i11.OpaqueToken<dynamic>('EventManagerPlugins'))) {
      return _getdynamic$9();
    }
    if (identical(token, _i1.Injector)) {
      return _getInjector$10();
    }
    return orElse;
  }
}

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
  _ref14.initReflector();
  _ref15.initReflector();
  _ref16.initReflector();
  _ref17.initReflector();
}
