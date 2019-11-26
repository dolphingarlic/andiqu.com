import 'package:angular/angular.dart';
import 'package:angular_components/angular_components.dart';

import 'src/experience/experience.dart';
import 'src/projects/projects.dart';
import 'src/about/about.dart';
import 'src/home/home.dart';
import 'src/signature/signature.dart';

@Component(
  selector: 'andiqu',
  directives: [
    ExperienceComponent,
    ProjectsComponent,
    AboutComponent,
    HomeComponent,
    SignatureComponent,
  ],
  providers: [
    materialProviders,
  ],
  styleUrls: ['andiqu.css'],
  templateUrl: 'andiqu.html',
)
class AppComponent {}
