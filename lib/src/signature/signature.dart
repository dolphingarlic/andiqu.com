import 'dart:html';
import 'dart:async';
import 'dart:math';

import 'package:angular/angular.dart';

const _pulse = const Duration(milliseconds: 30);
const _pause = const Duration(milliseconds: 250);

@Component(
  selector: 'signature-component',
  templateUrl: 'signature.html',
  styleUrls: ['signature.css'],
)
class SignatureComponent implements OnInit {
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

  void updateSticky() {
    Element introduction = querySelector('#introduction'), signature = querySelector('signature-component');
    signature.style.top = '${min(0, introduction.clientHeight - signature.clientHeight - window.pageYOffset)}px';
  }

  @override
  void ngOnInit() => reset();

  void reset() {
    _deleting = false;
    _list_index = 0;
    _string_index = 0;
    active = querySelector('.typing');

    _typist = Timer.periodic(_pulse, (_) => type());
    window.onScroll.listen((Event event) => updateSticky());
  }
}