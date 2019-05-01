import 'package:angular/angular.dart';
import 'package:angular_components/angular_components.dart';

@Component(
  selector: 'experience-component',
  directives: [
    MaterialSliderComponent,
  ],
  templateUrl: 'experience.html',
  styleUrls: ['experience.css'],
)
class ExperienceComponent {
  int value = 2;

  void handleSlide() async {
    print(value);
  }
}