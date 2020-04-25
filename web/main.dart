import 'package:angular/angular.dart';
import 'package:andiqu/andiqu.template.dart' as ng;
import 'package:pwa/client.dart' as pwa;

void main() {
  new pwa.Client();
  runApp(ng.AppComponentNgFactory);
}
