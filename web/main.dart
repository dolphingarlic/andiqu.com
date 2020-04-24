import 'package:angular/angular.dart';
import 'package:andiqu/andiqu.template.dart' as ng;
import 'package:pwa/client.dart' as pwa;

void main() {
  runApp(ng.AppComponentNgFactory);
  new pwa.Client();
}
