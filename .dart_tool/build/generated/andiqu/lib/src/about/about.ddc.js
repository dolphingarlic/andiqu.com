define(['dart_sdk', 'packages/angular/src/core/change_detection/change_detection'], function(dart_sdk, change_detection) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const async = dart_sdk.async;
  const html = dart_sdk.html;
  const math = dart_sdk.math;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__core__metadata__lifecycle_hooks = change_detection.src__core__metadata__lifecycle_hooks;
  const _root = Object.create(null);
  const src__experience__achievement = Object.create(_root);
  const src__experience__cs = Object.create(_root);
  const src__experience__maths = Object.create(_root);
  const src__experience__music = Object.create(_root);
  const src__experience__misc = Object.create(_root);
  const src__experience__experience = Object.create(_root);
  const src__about__about = Object.create(_root);
  const src__home__home = Object.create(_root);
  const src__signature__signature = Object.create(_root);
  const $_get = dartx._get;
  const $length = dartx.length;
  const $top = dartx.top;
  const $pageYOffset = dartx.pageYOffset;
  const $onScroll = dartx.onScroll;
  let JSArrayOfAchievement = () => (JSArrayOfAchievement = dart.constFn(_interceptors.JSArray$(src__experience__achievement.Achievement)))();
  let JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  let ListOfString = () => (ListOfString = dart.constFn(core.List$(core.String)))();
  let ListOfAchievement = () => (ListOfAchievement = dart.constFn(core.List$(src__experience__achievement.Achievement)))();
  let VoidToString = () => (VoidToString = dart.constFn(dart.fnType(core.String, [])))();
  let TimerTovoid = () => (TimerTovoid = dart.constFn(dart.fnType(dart.void, [async.Timer])))();
  let EventTovoid = () => (EventTovoid = dart.constFn(dart.fnType(dart.void, [html.Event])))();
  src__experience__achievement.Achievement = class Achievement extends core.Object {
    get title() {
      return this[title$];
    }
    set title(value) {
      super.title = value;
    }
    get date() {
      return this[date$];
    }
    set date(value) {
      super.date = value;
    }
    get content() {
      return this[content$];
    }
    set content(value) {
      super.content = value;
    }
    get organization() {
      return this[organization$];
    }
    set organization(value) {
      super.organization = value;
    }
    get importance() {
      return this[importance$];
    }
    set importance(value) {
      super.importance = value;
    }
    toString() {
      return dart.str(this.title);
    }
  };
  (src__experience__achievement.Achievement.new = function(title, date, organization, content, importance) {
    this[title$] = title;
    this[date$] = date;
    this[organization$] = organization;
    this[content$] = content;
    this[importance$] = importance;
  }).prototype = src__experience__achievement.Achievement.prototype;
  dart.addTypeTests(src__experience__achievement.Achievement);
  const title$ = Symbol("Achievement.title");
  const date$ = Symbol("Achievement.date");
  const content$ = Symbol("Achievement.content");
  const organization$ = Symbol("Achievement.organization");
  const importance$ = Symbol("Achievement.importance");
  dart.setFieldSignature(src__experience__achievement.Achievement, () => ({
    __proto__: dart.getFields(src__experience__achievement.Achievement.__proto__),
    title: dart.finalFieldType(core.String),
    date: dart.finalFieldType(core.String),
    content: dart.finalFieldType(core.String),
    organization: dart.finalFieldType(core.String),
    importance: dart.finalFieldType(core.int)
  }));
  dart.defineExtensionMethods(src__experience__achievement.Achievement, ['toString']);
  dart.defineLazy(src__experience__cs, {
    /*src__experience__cs.cs*/get cs() {
      return JSArrayOfAchievement().of([new src__experience__achievement.Achievement.new("IOI 2019 Participant", "Aug 2019", "South Africa", "      <p>Member of the South African team at the 2019 International Olympiad in Informatics.</p>\n      ", 5), new src__experience__achievement.Achievement.new("Google Code-In 2018 Grand-prize Winner", "Dec 2018", "Apertium", "      <p>One of 54 Grand-prize winners in the Google Code-In - An annual international\n      competition where high-schoolers get to contribute to various open-source\n      organizations by completing tasks.</p>\n      <p>My organization was Apertium - a rule-based machine translation platform\n      that specialises in under-documented languages.</p>\n      ", 5), new src__experience__achievement.Achievement.new("USACO Platinum Division Competitor", "Mar 2019 - Present", "USACO", "      <p>Platinum division competitor in the USA Computing Olympiad.</p>\n      ", 4)]);
    }
  });
  dart.defineLazy(src__experience__maths, {
    /*src__experience__maths.maths*/get maths() {
      return JSArrayOfAchievement().of([new src__experience__achievement.Achievement.new("IMO 2019 Participant", "July 2019", "South Africa", "      <p>Member of the South African team at the 2019 International Mathematics Olympiad</p>\n      ", 5), new src__experience__achievement.Achievement.new("PAMO 2019 Silver Medalist", "April 2019", "South Africa", "      <p>Silver medal (6th place overall) at the 2019 Pan African Mathematics Olympiad.</p>\n      ", 4), new src__experience__achievement.Achievement.new("SAMO 2017 Junior Winner", "Sept 2017", "South Africa", "      <p>South African Maths Olympiad 2017 Junior Section Winner.</p>\n      ", 4), new src__experience__achievement.Achievement.new("SAMO 2016 Junior Runner-up", "Sept 2016", "South Africa", "      <p>South African Maths Olympiad 2016 Junior Section Runner-up.</p>\n      ", 4), new src__experience__achievement.Achievement.new("Wits Maths Competition 2018 Senior 2nd Place", "June 2018", "Wits University", "      <p>2nd place at the Wits University Maths Competition, senior division.</p>\n      ", 3)]);
    }
  });
  dart.defineLazy(src__experience__music, {
    /*src__experience__music.music*/get music() {
      return JSArrayOfAchievement().of([new src__experience__achievement.Achievement.new("Atterbury National Piano Competition 2017 U16 Semifinalist", "Sept 2017", "Atterbury National Piano Competition", "      <p>Stuff about Atterbury idk</p>\n      ", 3), new src__experience__achievement.Achievement.new("ABRSM Piano Grade 8 with Distinction", "June 2018", "The Associated Board of the Royal Schools of Music", "      <p>Grade 8 level in Piano - the highest level before the Diploma, Licentiate, and Fellowship.</p>\n      ", 4), new src__experience__achievement.Achievement.new("ABRSM Flute Grade 8 with Distinction", "Oct 2018", "The Associated Board of the Royal Schools of Music", "      <p>Grade 8 level in Flute - the highest level before the Diploma, Licentiate, and Fellowship.</p>\n      ", 4), new src__experience__achievement.Achievement.new("Page-turned for a professional pianist once", "Sept 2018", "Linder Auditorium", "      <p>I page-turned for Luis Magalhães when he was playing a duet\n      with his wife.</p>\n      <p>It was a great experience. Fortunately I didn't mess up any turns</p>\n      <p>(They played Liszt's Piano sonata in B minor and Bach's Goldberg Variations)</p>\n      ", 1)]);
    }
  });
  dart.defineLazy(src__experience__misc, {
    /*src__experience__misc.misc*/get misc() {
      return JSArrayOfAchievement().of([new src__experience__achievement.Achievement.new("Caught Pigeons with my Bare Hands", "Jan 2018 - Present", "At Home", "      <p>I have caught a few pigeons with my bare hands before.\n      This is a truly remarkable skill, which unfortunately is often overlooked\n      by recruiters, which is why I am proud to list it here.</p>\n      <p>(Don't worry - I released them immediately afterwards.\n      No pigeons were harmed in the making of this website.)</p>\n      ", 1), new src__experience__achievement.Achievement.new("Got an A+ on my blood test", "Apr 2015", "At the Hospital", "      <p>I got an A+ on my blood test, which I can only assume to be the best\n      possible score on the blood test.</p>\n      ", 1)]);
    }
  });
  src__experience__experience.ExperienceComponent = class ExperienceComponent extends core.Object {
    get value() {
      return this[value$];
    }
    set value(value) {
      this[value$] = value;
    }
    get details() {
      return this[details];
    }
    set details(value) {
      super.details = value;
    }
    get current_detail() {
      return this.details[$_get](this.value);
    }
    get cs_achievements() {
      return this[cs_achievements];
    }
    set cs_achievements(value) {
      super.cs_achievements = value;
    }
    get maths_achievements() {
      return this[maths_achievements];
    }
    set maths_achievements(value) {
      super.maths_achievements = value;
    }
    get music_achievements() {
      return this[music_achievements];
    }
    set music_achievements(value) {
      super.music_achievements = value;
    }
    get misc_achievements() {
      return this[misc_achievements];
    }
    set misc_achievements(value) {
      super.misc_achievements = value;
    }
  };
  (src__experience__experience.ExperienceComponent.new = function() {
    this[value$] = 2;
    this[details] = JSArrayOfString().of(["Most important stuff", "More important stuff", "Default", "More detailed", "Unnecessarily detailed"]);
    this[cs_achievements] = src__experience__cs.cs;
    this[maths_achievements] = src__experience__maths.maths;
    this[music_achievements] = src__experience__music.music;
    this[misc_achievements] = src__experience__misc.misc;
  }).prototype = src__experience__experience.ExperienceComponent.prototype;
  dart.addTypeTests(src__experience__experience.ExperienceComponent);
  const value$ = Symbol("ExperienceComponent.value");
  const details = Symbol("ExperienceComponent.details");
  const cs_achievements = Symbol("ExperienceComponent.cs_achievements");
  const maths_achievements = Symbol("ExperienceComponent.maths_achievements");
  const music_achievements = Symbol("ExperienceComponent.music_achievements");
  const misc_achievements = Symbol("ExperienceComponent.misc_achievements");
  dart.setGetterSignature(src__experience__experience.ExperienceComponent, () => ({
    __proto__: dart.getGetters(src__experience__experience.ExperienceComponent.__proto__),
    current_detail: core.String
  }));
  dart.setFieldSignature(src__experience__experience.ExperienceComponent, () => ({
    __proto__: dart.getFields(src__experience__experience.ExperienceComponent.__proto__),
    value: dart.fieldType(core.int),
    details: dart.finalFieldType(ListOfString()),
    cs_achievements: dart.finalFieldType(ListOfAchievement()),
    maths_achievements: dart.finalFieldType(ListOfAchievement()),
    music_achievements: dart.finalFieldType(ListOfAchievement()),
    misc_achievements: dart.finalFieldType(ListOfAchievement())
  }));
  src__about__about.AboutComponent = class AboutComponent extends core.Object {};
  (src__about__about.AboutComponent.new = function() {
  }).prototype = src__about__about.AboutComponent.prototype;
  dart.addTypeTests(src__about__about.AboutComponent);
  src__home__home.HomeComponent = class HomeComponent extends core.Object {};
  (src__home__home.HomeComponent.new = function() {
  }).prototype = src__home__home.HomeComponent.prototype;
  dart.addTypeTests(src__home__home.HomeComponent);
  dart.defineLazy(src__signature__signature, {
    /*src__signature__signature._pulse*/get _pulse() {
      return dart.const(new core.Duration.new({milliseconds: 40}));
    },
    /*src__signature__signature._pause*/get _pause() {
      return dart.const(new core.Duration.new({milliseconds: 250}));
    }
  });
  const _typist = Symbol('_typist');
  const _list_index = Symbol('_list_index');
  const _string_index = Symbol('_string_index');
  const _deleting = Symbol('_deleting');
  src__signature__signature.SignatureComponent = class SignatureComponent extends core.Object {
    get active() {
      return this[active];
    }
    set active(value) {
      this[active] = value;
    }
    get signatures() {
      return this[signatures];
    }
    set signatures(value) {
      this[signatures] = value;
    }
    sleep() {
      return async.Future.delayed(src__signature__signature._pause, dart.fn(() => "1", VoidToString()));
    }
    type() {
      return async.async(dart.dynamic, (function* type() {
        if (this[_list_index] == this.signatures[$length]) {
          this[_list_index] = 0;
        } else if (dart.test(this[_deleting]) && this[_string_index] === 0) {
          this[_list_index] = dart.notNull(this[_list_index]) + 1;
          this[_deleting] = false;
        } else if (dart.test(this[_deleting])) {
          dart.dput(this.active, 'text', dart.dsend(dart.dload(this.active, 'text'), 'substring', [0, dart.dsend(dart.dload(dart.dload(this.active, 'text'), 'length'), '-', [1])]));
          this[_string_index] = dart.notNull(this[_string_index]) - 1;
        } else if (this[_string_index] === this.signatures[$_get](this[_list_index]).length) {
          this[_deleting] = true;
          this[_typist].cancel();
          yield this.sleep();
          this[_typist] = async.Timer.periodic(src__signature__signature._pulse, dart.fn(_ => this.type(), TimerTovoid()));
        } else {
          dart.dsend(this.active, 'appendText', [this.signatures[$_get](this[_list_index])[$_get](this[_string_index])]);
          this[_string_index] = dart.notNull(this[_string_index]) + 1;
        }
      }).bind(this));
    }
    updateSticky() {
      let introduction = html.querySelector("#introduction"), signature = html.querySelector("signature-component");
      signature.style[$top] = dart.str(math.min(core.int, 0, dart.notNull(introduction.clientHeight) - dart.notNull(signature.clientHeight) - dart.notNull(html.window[$pageYOffset]))) + "px";
    }
    ngOnInit() {
      return this.reset();
    }
    reset() {
      this[_deleting] = false;
      this[_list_index] = 0;
      this[_string_index] = 0;
      this.active = html.querySelector(".typing");
      this[_typist] = async.Timer.periodic(src__signature__signature._pulse, dart.fn(_ => this.type(), TimerTovoid()));
      html.window[$onScroll].listen(dart.fn(event => this.updateSticky(), EventTovoid()));
    }
  };
  (src__signature__signature.SignatureComponent.new = function() {
    this[_typist] = null;
    this[_list_index] = null;
    this[_string_index] = null;
    this[_deleting] = null;
    this[active] = null;
    this[signatures] = JSArrayOfString().of(["Andi Qu", "Pianist", "I kinda like maths sometimes", "Competitive Programmer", "Problem Solver", "Level 42 Pigeon Enthusiast", "Cool Kid™"]);
  }).prototype = src__signature__signature.SignatureComponent.prototype;
  dart.addTypeTests(src__signature__signature.SignatureComponent);
  const active = Symbol("SignatureComponent.active");
  const signatures = Symbol("SignatureComponent.signatures");
  src__signature__signature.SignatureComponent[dart.implements] = () => [src__core__metadata__lifecycle_hooks.OnInit];
  dart.setMethodSignature(src__signature__signature.SignatureComponent, () => ({
    __proto__: dart.getMethods(src__signature__signature.SignatureComponent.__proto__),
    sleep: dart.fnType(async.Future, []),
    type: dart.fnType(dart.void, []),
    updateSticky: dart.fnType(dart.void, []),
    ngOnInit: dart.fnType(dart.void, []),
    reset: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__signature__signature.SignatureComponent, () => ({
    __proto__: dart.getFields(src__signature__signature.SignatureComponent.__proto__),
    [_typist]: dart.fieldType(async.Timer),
    [_list_index]: dart.fieldType(core.int),
    [_string_index]: dart.fieldType(core.int),
    [_deleting]: dart.fieldType(core.bool),
    active: dart.fieldType(dart.dynamic),
    signatures: dart.fieldType(ListOfString())
  }));
  dart.trackLibraries("packages/andiqu/src/about/about.ddc", {
    "package:andiqu/src/experience/achievement.dart": src__experience__achievement,
    "package:andiqu/src/experience/cs.dart": src__experience__cs,
    "package:andiqu/src/experience/maths.dart": src__experience__maths,
    "package:andiqu/src/experience/music.dart": src__experience__music,
    "package:andiqu/src/experience/misc.dart": src__experience__misc,
    "package:andiqu/src/experience/experience.dart": src__experience__experience,
    "package:andiqu/src/about/about.dart": src__about__about,
    "package:andiqu/src/home/home.dart": src__home__home,
    "package:andiqu/src/signature/signature.dart": src__signature__signature
  }, '{"version":3,"sourceRoot":"","sources":["../experience/achievement.dart","../experience/cs.dart","../experience/maths.dart","../experience/music.dart","../experience/misc.dart","../experience/experience.dart","about.dart","../home/home.dart","../signature/signature.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IACe;;;;;;IAAO;;;;;;IAAM;;;;;;IAAS;;;;;;IACzB;;;;;;;YAKW,UAAE,UAAK;IAAC;;2DAHjB,KAAU,EAAE,IAAS,EAAE,YAAiB,EAAE,OAAY,EAAE,UAAe;IAAlE,YAAK,GAAL,KAAK;IAAO,WAAI,GAAJ,IAAI;IAAO,mBAAY,GAAZ,YAAY;IAAO,cAAO,GAAP,OAAO;IAAO,iBAAU,GAAV,UAAU;EAAC;;;;;;;;;;;;;;;;;MCF9D,sBAAE;YAAG,gCAC3B,4CAAW,CACP,wBACA,YACA,gBACA,4GAGA,QACJ,4CAAW,CACP,0CACA,YACA,YACA,+WAOA,QACJ,4CAAW,CACP,sCACA,sBACA,SACA,oFAGA;;;;MC5BkB,4BAAK;YAAG,gCAC9B,4CAAW,CACP,wBACA,aACA,gBACA,wGAGA,QACJ,4CAAW,CACP,6BACA,cACA,gBACA,uGAGA,QACJ,4CAAW,CACP,2BACA,aACA,gBACA,iFAGA,QACJ,4CAAW,CACP,8BACA,aACA,gBACA,oFAGA,QACJ,4CAAW,CACP,gDACA,aACA,mBACA,6FAGA;;;;MCxCkB,4BAAK;YAAG,gCAC9B,4CAAW,CACP,8DACA,aACA,wCACA,kDAGA,QACJ,4CAAW,CACP,wCACA,aACA,sDACA,mHAGA,QACJ,4CAAW,CACP,wCACA,YACA,sDACA,mHAGA,QACJ,4CAAW,CACP,+CACA,aACA,qBACA,qRAMA;;;;MCnCkB,0BAAI;YAAG,gCAC7B,4CAAW,CACP,qCACA,sBACA,WACA,kWAOA,QACJ,4CAAW,CACP,8BACA,YACA,mBACA,sIAIA;;;;ICJA;;;;;;IACe;;;;;;;YAOU,aAAO,QAAC,UAAK;IAAC;IAEnB;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;;;IAbpB,YAAK,GAAG;IACO,aAAO,GAAG,sBAC3B,wBACA,wBACA,WACA,iBACA;IAIsB,qBAAe,GAAG,sBAAE;IACpB,wBAAkB,GAAG,4BAAK;IAC1B,wBAAkB,GAAG,4BAAK;IAC1B,uBAAiB,GAAG,0BAAI;EAClD;;;;;;;;;;;;;;;;;;;;;;;ECzBA;;;;ECAA;;;MCFM,gCAAM;YAAG,gBAAM,iBAAQ,gBAAe;;MACtC,gCAAM;YAAG,gBAAM,iBAAQ,gBAAe;;;;;;;;IAWtC;;;;;;IAES;;;;;;;AAWX,YAAO,AAAI,qBAAc,CAAC,gCAAM,EAAE,cAAM;IAC1C;;AAEY;AACV,YAAI,iBAAW,IAAI,eAAU,SAAO,EAAE;AACpC,2BAAW,GAAG;cACT,eAAI,eAAS,KAAI,mBAAa,KAAI,GAAG;AAC1C,2BAAW,gBAAX,iBAAW,IAtCjB;AAuCM,yBAAS,GAAG;cACP,eAAI,eAAS,GAAE;AACpB,+BAAM,gCAAQ,WAAM,yBAAgB,GAAsB,iCAAnB,WAAM,4BAAe;AAC5D,6BAAa,gBAAb,mBAAa,IA1CnB;cA2CW,KAAI,mBAAa,KAAI,eAAU,QAAC,iBAAW,QAAQ,EAAE;AAC1D,yBAAS,GAAG;AACZ,uBAAO,OAAO;AACd,gBAAM,UAAK;AACX,uBAAO,GAAG,oBAAc,CAAC,gCAAM,EAAE,QAAC,CAAC,IAAK,SAAI;eACvC;AACL,gCAAM,iBAAY,eAAU,QAAC,iBAAW,SAAE,mBAAa;AACvD,6BAAa,gBAAb,mBAAa,IAlDnB;;MAoDE;;;AAGE,UAAQ,eAAe,kBAAa,CAAC,kBAAkB,YAAY,kBAAa,CAAC;AACjF,eAAS,MAAM,MAAI,GAAG,SAAG,QAAG,WAAC,GAA6B,AAAyB,aAAnD,YAAY,aAAa,iBAAG,SAAS,aAAa,iBAAG,WAAM,cAAY;IACzG;;YAGmB,WAAK;IAAE;;AAGxB,qBAAS,GAAG;AACZ,uBAAW,GAAG;AACd,yBAAa,GAAG;AAChB,iBAAM,GAAG,kBAAa,CAAC;AAEvB,mBAAO,GAAG,oBAAc,CAAC,gCAAM,EAAE,QAAC,CAAC,IAAK,SAAI;AAC5C,iBAAM,WAAS,OAAO,CAAC,QAAC,KAAW,IAAK,iBAAY;IACtD;;;IAvDM,aAAO;IACT,iBAAW;IAAE,mBAAa;IACzB,eAAS;IACV,YAAM;IAEG,gBAAU,GAAG,sBACxB,WACA,WACA,gCACA,0BACA,kBACA,8BACA;EA4CJ","file":"about.ddc.js"}');
  // Exports:
  return {
    src__experience__achievement: src__experience__achievement,
    src__experience__cs: src__experience__cs,
    src__experience__maths: src__experience__maths,
    src__experience__music: src__experience__music,
    src__experience__misc: src__experience__misc,
    src__experience__experience: src__experience__experience,
    src__about__about: src__about__about,
    src__home__home: src__home__home,
    src__signature__signature: src__signature__signature
  };
});

//# sourceMappingURL=about.ddc.js.map
