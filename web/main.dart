import 'package:angular/angular.dart';
import 'package:andiqu/andiqu.template.dart' as ng;
import 'package:pwa/client.dart' as pwa;

import 'main.template.dart' as self;

@GenerateInjector([
  ClassProvider(pwa.Client)
])
final InjectorFactory rootInjector = self.rootInjector$Injector;

void main() {
  runApp(ng.AppComponentNgFactory, createInjector: rootInjector);
}
