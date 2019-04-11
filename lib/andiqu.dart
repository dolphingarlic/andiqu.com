import 'dart:async';
import 'dart:html';

import 'package:angular/angular.dart';
import 'package:angular_components/angular_components.dart';

import 'src/experience/experience.dart';
import 'src/about/about.dart';

const _pulse = const Duration(milliseconds: 30);
const _pause = const Duration(milliseconds: 250);

@Component(
  selector: 'andiqu',
  directives: [
    ExperienceComponent,
    MaterialSliderComponent,
    AboutComponent,
  ],
  providers: [
    materialProviders,
  ],
  styleUrls: ['andiqu.css'],
  templateUrl: 'andiqu.html',
)
class AppComponent implements OnInit {
  Timer _typist;
  int _list_index, _string_index;
  bool _deleting;
  var active;

  List<String> signatures = [
    'Hello world!',
    'Dart is very cool',
    'I try to program well',
    'Andi Qu',
  ];

  Future sleep() {
    return new Future.delayed(_pause, () => "1");
  }

  void type() async {
    if (_list_index == signatures.length) {
      _list_index = 0;
    } else if (_deleting && _string_index == 0) {
      _list_index++;
      _deleting = false;
    } else if (_deleting) {
      active.text = active.text.substring(0, active.text.length - 1);
      _string_index--;
    } else if (_string_index == signatures[_list_index].length) {
      _deleting = true;
      _typist.cancel();
      await sleep();
      _typist = Timer.periodic(_pulse, (_) => type());
    } else {
        active.appendText(signatures[_list_index][_string_index]);
        _string_index++;
    }
  }

  @override
  void ngOnInit() => reset();

  void reset() {
    _deleting = false;
    _list_index = 0;
    _string_index = 0;
    active = querySelector('.active');

    _typist = Timer.periodic(_pulse, (_) => type());
  }
}
