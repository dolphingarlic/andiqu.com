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
  const src__experience__experience = Object.create(_root);
  const src__about__about = Object.create(_root);
  const src__home__home = Object.create(_root);
  const src__signature__signature = Object.create(_root);
  const $length = dartx.length;
  const $_get = dartx._get;
  const $top = dartx.top;
  const $pageYOffset = dartx.pageYOffset;
  const $onScroll = dartx.onScroll;
  let JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  let VoidToString = () => (VoidToString = dart.constFn(dart.fnType(core.String, [])))();
  let TimerTovoid = () => (TimerTovoid = dart.constFn(dart.fnType(dart.void, [async.Timer])))();
  let EventTovoid = () => (EventTovoid = dart.constFn(dart.fnType(dart.void, [html.Event])))();
  let ListOfString = () => (ListOfString = dart.constFn(core.List$(core.String)))();
  src__experience__experience.ExperienceComponent = class ExperienceComponent extends core.Object {
    get value() {
      return this[value$];
    }
    set value(value) {
      this[value$] = value;
    }
  };
  (src__experience__experience.ExperienceComponent.new = function() {
    this[value$] = 2;
  }).prototype = src__experience__experience.ExperienceComponent.prototype;
  dart.addTypeTests(src__experience__experience.ExperienceComponent);
  const value$ = Symbol("ExperienceComponent.value");
  dart.setFieldSignature(src__experience__experience.ExperienceComponent, () => ({
    __proto__: dart.getFields(src__experience__experience.ExperienceComponent.__proto__),
    value: dart.fieldType(core.int)
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
      return dart.const(new core.Duration.new({milliseconds: 30}));
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
      this.active = html.querySelector(".text");
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
    this[signatures] = JSArrayOfString().of(["Hello world!", "Dart is very cool", "I try to program well", "Andi Qu"]);
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
    "package:andiqu/src/experience/experience.dart": src__experience__experience,
    "package:andiqu/src/about/about.dart": src__about__about,
    "package:andiqu/src/home/home.dart": src__home__home,
    "package:andiqu/src/signature/signature.dart": src__signature__signature
  }, '{"version":3,"sourceRoot":"","sources":["../experience/experience.dart","about.dart","../home/home.dart","../signature/signature.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;IAYM;;;;;;;;gBAAK,GAAG;EACd;;;;;;;;;ECLA;;;;ECAA;;;MCFM,gCAAM;YAAG,gBAAM,iBAAQ,gBAAe;;MACtC,gCAAM;YAAG,gBAAM,iBAAQ,gBAAe;;;;;;;;IAWtC;;;;;;IAES;;;;;;;AAQX,YAAO,AAAI,qBAAc,CAAC,gCAAM,EAAE,cAAM;IAC1C;;AAEY;AACV,YAAI,iBAAW,IAAI,eAAU,SAAO,EAAE;AACpC,2BAAW,GAAG;cACT,eAAI,eAAS,KAAI,mBAAa,KAAI,GAAG;AAC1C,2BAAW,gBAAX,iBAAW,IAnCjB;AAoCM,yBAAS,GAAG;cACP,eAAI,eAAS,GAAE;AACpB,+BAAM,gCAAQ,WAAM,yBAAgB,GAAsB,iCAAnB,WAAM,4BAAe;AAC5D,6BAAa,gBAAb,mBAAa,IAvCnB;cAwCW,KAAI,mBAAa,KAAI,eAAU,QAAC,iBAAW,QAAQ,EAAE;AAC1D,yBAAS,GAAG;AACZ,uBAAO,OAAO;AACd,gBAAM,UAAK;AACX,uBAAO,GAAG,oBAAc,CAAC,gCAAM,EAAE,QAAC,CAAC,IAAK,SAAI;eACvC;AACL,gCAAM,iBAAY,eAAU,QAAC,iBAAW,SAAE,mBAAa;AACvD,6BAAa,gBAAb,mBAAa,IA/CnB;;MAiDE;;;AAGE,UAAQ,eAAe,kBAAa,CAAC,kBAAkB,YAAY,kBAAa,CAAC;AACjF,eAAS,MAAM,MAAI,GAAG,SAAG,QAAG,WAAC,GAA6B,AAAyB,aAAnD,YAAY,aAAa,iBAAG,SAAS,aAAa,iBAAG,WAAM,cAAY;IACzG;;YAGmB,WAAK;IAAE;;AAGxB,qBAAS,GAAG;AACZ,uBAAW,GAAG;AACd,yBAAa,GAAG;AAChB,iBAAM,GAAG,kBAAa,CAAC;AAEvB,mBAAO,GAAG,oBAAc,CAAC,gCAAM,EAAE,QAAC,CAAC,IAAK,SAAI;AAC5C,iBAAM,WAAS,OAAO,CAAC,QAAC,KAAW,IAAK,iBAAY;IACtD;;;IApDM,aAAO;IACT,iBAAW;IAAE,mBAAa;IACzB,eAAS;IACV,YAAM;IAEG,gBAAU,GAAG,sBACxB,gBACA,qBACA,yBACA;EA4CJ","file":"about.ddc.js"}');
  // Exports:
  return {
    src__experience__experience: src__experience__experience,
    src__about__about: src__about__about,
    src__home__home: src__home__home,
    src__signature__signature: src__signature__signature
  };
});

//# sourceMappingURL=about.ddc.js.map
