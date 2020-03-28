import 'package:angular/angular.dart';
import 'package:angular_components/angular_components.dart';
import 'package:angular/security.dart';

@Component(
  selector: 'about-component',
  directives: [
    MaterialToggleComponent,
    coreDirectives,
  ],
  templateUrl: 'about.html',
  styleUrls: ['about.css'],
)
class AboutComponent {
  final DomSanitizationService sanitizer;
  SafeHtml fun_about, boring_about;

  AboutComponent(this.sanitizer) {
    fun_about = this.sanitizer.bypassSecurityTrustHtml('''
    <p>
        I am a <b>dynamic figure</b>, often seen <b>creating fake
        emails</b> to get more free trials and <b>preaching
        Communism</b> to Icelandic sheepherders. Sometimes,
        if you're lucky, you'll even see me erecting massive 500-story
        skyscrapers in my backyard. When I am bored, I charm
        cats with my godlike yodelling skills and my
        transcendental clarinet squeaks.
    </p>
  
    <p>
        I am <b>motivated to take risks</b>. Sometimes, because I like
        to live dangerously, I play chess with <b>one less pawn</b>
        and do <b>geometry in pen</b>. Sometimes I even
        play on the Wii without the safety strap! I know
        - I'm a real daredevil. Sometimes I'm even amazed myself
        that I've managed to survive this long in the first
        place, what with all these <b>totally dangerous</b> and not
        at all normal feats! But nothing quite beats the
        adrenaline rush that I get from participating in a class
        discussion.
    </p>

    <p>
        What many may find perplexing is St John's College's (frustrating) <b>inability to
        spell my 4-letter name</b>. However, this is simply one of many testaments to the fact
        that I simply <b>transcend the English language</b>. This is an elusive position
        shared only by <b>literally every other language</b> (except Javascript).
    </p>

    <p>
        Unfortunately, I cannot hack Facebook or fix your washing machine
        using Scratch. However, given enough time, I can <b>solve imaginary problems</b>
        concocted by <b>Polish mathematicians</b> with C++ or create <b>the most perfect but
        disappointing Japanese flag</b> you have ever seen with the HTML canvas.
        Sometimes, I even salute the planet with Python!
    </p>
  
    <div style="text-align: center;">
        <p>Who am I? Of course, I am...</p>
        <b>
          The One<br>
          The Only<br>
          <h2>Andi Qu<h2>
        </b>
    </div>
    ''');

    boring_about = this.sanitizer.bypassSecurityTrustHtml('''
    <p>Hi, everyone! Andi here</p>
    <p>
        I am a high school student from St John's College, Johannesburg. I started programming in grade 9, and since
        then it has <span style="text-decoration: line-through;">taken over my life</span> become one of my passions
        and I have participated in quite a few contests since then.
    </p>
    <p>
        My interests include playing the piano and clarinet, competitive programming, and olympiad maths.
        Sometimes, I also contribute to FOSS initiatives like
        <a style="color: #409de6 !important;text-decoration: none;" href="https://www.apertium.org">Apertium</a>,
        and I also enjoy participating in and mentoring for open-source competitions such as Hacktoberfest, the Google Code-In, and the Google Summer of Code.
    </p>
    <p>
        "But Andi", I hear you cry, "where are all the cool things you've coded up? Surely someone as <b>cool</b>
        and <b>awesome</b> as you would have at least 2 world-changing projects?"
    </p>
    <p>
        To that, I say: Yes, it is quite true - and unfortunate - that I have created a surprisingly small amount
        of actually-useful software. This may or may not be due to my focus on competitive programming over creating
        actually-useful software. But fear not! I have created/contributed towards some fun stuff like
        <a style="color: #409de6 !important;text-decoration: none;" href="https://dolphingarlic.github.io/Apertium-Global-PairViewer">the Apertium Global PairViewer</a> and
        <a style="color: #409de6 !important;text-decoration: none;" href="https://incredibowl.herokuapp.com">an <i>Incredibowl</i> website</a>.
        Other projects can be found in the next section of this website!
        If you want, check out my
        <a style="color: #409de6 !important;text-decoration: none;" href="https://dolphingarlic.github.io/useless_websites">list of useless websites I made</a>.
    </p>
    <p>
        Look! Up in the sky! It's a bird! It's a plane! It's <b>Andi's all-new (semi-functioning) blog</b>, ready to blow your mind!
        Check it out at <a style="color: #409de6 !important;text-decoration: none;" href="http://bits-and-bytes.me/">bits-and-bytes.me</a>
    </p>
    ''');
  }

  bool fun = false;
  SafeHtml get aboutText => fun ? fun_about : boring_about;
}
