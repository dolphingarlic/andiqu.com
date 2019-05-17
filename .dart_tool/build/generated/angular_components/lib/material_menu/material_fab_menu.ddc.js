define(['dart_sdk', 'packages/angular_components/laminate/enums/alignment', 'packages/angular_components/model/observable/observable', 'packages/angular_components/material_popup/material_popup', 'packages/angular_components/mixins/track_layout_changes', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular_components/model/menu/menu'], function(dart_sdk, alignment, observable, material_popup, track_layout_changes, change_detection, menu) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const laminate__enums__alignment = alignment.laminate__enums__alignment;
  const model__observable__observable = observable.model__observable__observable;
  const material_popup__material_popup = material_popup.material_popup__material_popup;
  const mixins__track_layout_changes = track_layout_changes.mixins__track_layout_changes;
  const src__core__metadata__lifecycle_hooks = change_detection.src__core__metadata__lifecycle_hooks;
  const src__core__change_detection__change_detector_ref = change_detection.src__core__change_detection__change_detector_ref;
  const model__menu__menu = menu.model__menu__menu;
  const _root = Object.create(null);
  const material_menu__material_fab_menu = Object.create(_root);
  const $isNotEmpty = dartx.isNotEmpty;
  const $any = dartx.any;
  let StreamControllerOfvoid = () => (StreamControllerOfvoid = dart.constFn(async.StreamController$(dart.void)))();
  let ChangeOfbool = () => (ChangeOfbool = dart.constFn(model__observable__observable.Change$(core.bool)))();
  let ChangeOfboolToNull = () => (ChangeOfboolToNull = dart.constFn(dart.fnType(core.Null, [ChangeOfbool()])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let FutureOfNull = () => (FutureOfNull = dart.constFn(async.Future$(core.Null)))();
  let ListOfRelativePosition = () => (ListOfRelativePosition = dart.constFn(core.List$(laminate__enums__alignment.RelativePosition)))();
  let ObservableReferenceOfbool = () => (ObservableReferenceOfbool = dart.constFn(model__observable__observable.ObservableReference$(core.bool)))();
  let dynamicTobool = () => (dynamicTobool = dart.constFn(dart.fnType(core.bool, [dart.dynamic])))();
  let MenuItemGroupTobool = () => (MenuItemGroupTobool = dart.constFn(dart.fnType(core.bool, [model__menu__menu.MenuItemGroup])))();
  const _changeDetector = Symbol('_changeDetector');
  const _viewModelStreamSub = Symbol('_viewModelStreamSub');
  const _viewModel = Symbol('_viewModel');
  const _onShow = Symbol('_onShow');
  const _menuVisible = Symbol('_menuVisible');
  let const$;
  const _hideMenuContent = Symbol('_hideMenuContent');
  const Object_TrackLayoutChangesMixin$ = class Object_TrackLayoutChangesMixin extends core.Object {};
  (Object_TrackLayoutChangesMixin$.new = function() {
    mixins__track_layout_changes.TrackLayoutChangesMixin.new.call(this);
  }).prototype = Object_TrackLayoutChangesMixin$.prototype;
  dart.applyMixin(Object_TrackLayoutChangesMixin$, mixins__track_layout_changes.TrackLayoutChangesMixin);
  material_menu__material_fab_menu.MaterialFabMenuComponent = class MaterialFabMenuComponent extends Object_TrackLayoutChangesMixin$ {
    get preferredPopupPositions() {
      return this[preferredPopupPositions];
    }
    set preferredPopupPositions(value) {
      this[preferredPopupPositions] = value;
    }
    get onShow() {
      return this[_onShow].stream;
    }
    set menuItem(menuItem) {
      if (menuItem == null) return;
      this.viewModel = new material_menu__material_fab_menu.MaterialFabMenuModel.new(menuItem, {showPopup: this.showPopup});
    }
    set viewModel(value) {
      if (value == null) return;
      this[_viewModel] = value;
      let t = this[_viewModelStreamSub];
      t == null ? null : t.cancel();
      this[_viewModelStreamSub] = this[_viewModel].onShowPopupChange.listen(dart.fn(_ => {
        this[_changeDetector].markForCheck();
      }, ChangeOfboolToNull()));
    }
    get naviId() {
      return this[naviId];
    }
    set naviId(value) {
      this[naviId] = value;
    }
    get menuItem() {
      let t = this[_viewModel];
      return t == null ? null : t.menuItem;
    }
    get isFabEnabled() {
      let t = this[_viewModel];
      let l = t == null ? null : t.isFabEnabled;
      return l != null ? l : false;
    }
    get glyph() {
      let t = this[_viewModel];
      return t == null ? null : t.glyph;
    }
    get ariaLabel() {
      let t = this[_viewModel];
      return t == null ? null : t.ariaLabel;
    }
    get tooltip() {
      let t = this[_viewModel];
      return t == null ? null : t.tooltip;
    }
    get hasTooltip() {
      let t = this.tooltip;
      let l = t == null ? null : t[$isNotEmpty];
      return l != null ? l : false;
    }
    get hasMenu() {
      let t = this[_viewModel];
      let l = t == null ? null : t.hasMenu;
      return l != null ? l : false;
    }
    get isFabHidden() {
      let t = this[_viewModel];
      let l = t == null ? null : t.isFabHidden;
      return l != null ? l : false;
    }
    get showPopup() {
      let t = this[_viewModel];
      let l = t == null ? null : t.showPopup;
      return l != null ? l : false;
    }
    get closing() {
      return dart.test(this.showPopup) && !dart.test(this.menuVisible);
    }
    get menuVisible() {
      return this[_menuVisible];
    }
    get hasIcons() {
      return this[_viewModel].hasIcons;
    }
    ngOnDestroy() {
      let t = this[_viewModelStreamSub];
      t == null ? null : t.cancel();
      this[_viewModelStreamSub] = null;
      this[_onShow].close();
    }
    onPopupOpened() {
      if (dart.test(this[_menuVisible])) return;
      this[_menuVisible] = true;
      this[_onShow].add(null);
    }
    onPopupClosed() {
      this[_viewModel].closePopup();
      this[_hideMenuContent]();
    }
    trigger() {
      this[_viewModel].trigger();
    }
    hideMenu() {
      this[_hideMenuContent]();
      FutureOfNull().delayed(material_popup__material_popup.MaterialPopupComponent.SLIDE_DELAY, dart.fn(() => {
        this[_viewModel].closePopup();
      }, VoidToNull()));
    }
    [_hideMenuContent]() {
      if (!dart.test(this[_menuVisible])) return;
      this[_menuVisible] = false;
    }
    get tooltipPositions() {
      return this[tooltipPositions];
    }
    set tooltipPositions(value) {
      super.tooltipPositions = value;
    }
  };
  (material_menu__material_fab_menu.MaterialFabMenuComponent.new = function(changeDetector) {
    this[preferredPopupPositions] = null;
    this[_viewModelStreamSub] = null;
    this[_viewModel] = null;
    this[_onShow] = StreamControllerOfvoid().broadcast();
    this[naviId] = null;
    this[_menuVisible] = false;
    this[tooltipPositions] = const$ || (const$ = dart.constList([laminate__enums__alignment.RelativePosition.AdjacentRight, laminate__enums__alignment.RelativePosition.AdjacentLeft], laminate__enums__alignment.RelativePosition));
    this[_changeDetector] = changeDetector;
    material_menu__material_fab_menu.MaterialFabMenuComponent.__proto__.new.call(this);
  }).prototype = material_menu__material_fab_menu.MaterialFabMenuComponent.prototype;
  dart.addTypeTests(material_menu__material_fab_menu.MaterialFabMenuComponent);
  const preferredPopupPositions = Symbol("MaterialFabMenuComponent.preferredPopupPositions");
  const naviId = Symbol("MaterialFabMenuComponent.naviId");
  const tooltipPositions = Symbol("MaterialFabMenuComponent.tooltipPositions");
  material_menu__material_fab_menu.MaterialFabMenuComponent[dart.implements] = () => [src__core__metadata__lifecycle_hooks.OnDestroy];
  dart.setMethodSignature(material_menu__material_fab_menu.MaterialFabMenuComponent, () => ({
    __proto__: dart.getMethods(material_menu__material_fab_menu.MaterialFabMenuComponent.__proto__),
    ngOnDestroy: dart.fnType(dart.void, []),
    onPopupOpened: dart.fnType(dart.void, []),
    onPopupClosed: dart.fnType(dart.void, []),
    trigger: dart.fnType(dart.void, []),
    hideMenu: dart.fnType(dart.void, []),
    [_hideMenuContent]: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(material_menu__material_fab_menu.MaterialFabMenuComponent, () => ({
    __proto__: dart.getGetters(material_menu__material_fab_menu.MaterialFabMenuComponent.__proto__),
    onShow: async.Stream$(dart.void),
    menuItem: model__menu__menu.MenuItem,
    isFabEnabled: core.bool,
    glyph: core.String,
    ariaLabel: core.String,
    tooltip: core.String,
    hasTooltip: core.bool,
    hasMenu: core.bool,
    isFabHidden: core.bool,
    showPopup: core.bool,
    closing: core.bool,
    menuVisible: core.bool,
    hasIcons: core.bool
  }));
  dart.setSetterSignature(material_menu__material_fab_menu.MaterialFabMenuComponent, () => ({
    __proto__: dart.getSetters(material_menu__material_fab_menu.MaterialFabMenuComponent.__proto__),
    menuItem: model__menu__menu.MenuItem,
    viewModel: material_menu__material_fab_menu.MaterialFabMenuModel
  }));
  dart.setFieldSignature(material_menu__material_fab_menu.MaterialFabMenuComponent, () => ({
    __proto__: dart.getFields(material_menu__material_fab_menu.MaterialFabMenuComponent.__proto__),
    [_changeDetector]: dart.finalFieldType(src__core__change_detection__change_detector_ref.ChangeDetectorRef),
    preferredPopupPositions: dart.fieldType(ListOfRelativePosition()),
    [_viewModelStreamSub]: dart.fieldType(async.StreamSubscription),
    [_viewModel]: dart.fieldType(material_menu__material_fab_menu.MaterialFabMenuModel),
    [_onShow]: dart.finalFieldType(StreamControllerOfvoid()),
    naviId: dart.fieldType(core.String),
    [_menuVisible]: dart.fieldType(core.bool),
    tooltipPositions: dart.finalFieldType(ListOfRelativePosition())
  }));
  const _showPopup = Symbol('_showPopup');
  material_menu__material_fab_menu.MaterialFabMenuModel = class MaterialFabMenuModel extends core.Object {
    get menuItem() {
      return this[menuItem$];
    }
    set menuItem(value) {
      super.menuItem = value;
    }
    get onShowPopupChange() {
      return this[_showPopup].changes;
    }
    get hasMenu() {
      let t = this.menuItem.subMenu == null ? null : this.menuItem.subMenu.itemGroups;
      let l = t == null ? null : t[$isNotEmpty];
      return l != null ? l : false;
    }
    get hasIcons() {
      return dart.test(this.hasMenu) && dart.test(this.menuItem.subMenu.itemGroups[$any](dart.fn(itemGroup => itemGroup.any(dart.fn(item => core.bool._check(dart.dload(item, 'hasIcon')), dynamicTobool())), MenuItemGroupTobool())));
    }
    get showPopup() {
      return this[_showPopup].value;
    }
    get isFabEnabled() {
      let l = this.menuItem.enabled;
      return l != null ? l : false;
    }
    get glyph() {
      return this.menuItem.icon == null ? null : this.menuItem.icon.name;
    }
    get ariaLabel() {
      return this.menuItem.label;
    }
    get tooltip() {
      return this.menuItem.tooltip != null ? this.menuItem.tooltip : this.menuItem.label;
    }
    get isFabHidden() {
      return dart.test(this.hasMenu) ? this[_showPopup].value : false;
    }
    trigger() {
      if (dart.test(this.hasMenu)) {
        this[_showPopup].value = true;
      } else if (this.menuItem.action != null) {
        dart.dsend(this.menuItem, 'action', []);
      }
    }
    closePopup() {
      this[_showPopup].value = false;
    }
  };
  (material_menu__material_fab_menu.MaterialFabMenuModel.new = function(menuItem, opts) {
    let showPopup = opts && 'showPopup' in opts ? opts.showPopup : false;
    this[menuItem$] = menuItem;
    this[_showPopup] = new (ObservableReferenceOfbool()).new(showPopup);
  }).prototype = material_menu__material_fab_menu.MaterialFabMenuModel.prototype;
  dart.addTypeTests(material_menu__material_fab_menu.MaterialFabMenuModel);
  const menuItem$ = Symbol("MaterialFabMenuModel.menuItem");
  dart.setMethodSignature(material_menu__material_fab_menu.MaterialFabMenuModel, () => ({
    __proto__: dart.getMethods(material_menu__material_fab_menu.MaterialFabMenuModel.__proto__),
    trigger: dart.fnType(dart.void, []),
    closePopup: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(material_menu__material_fab_menu.MaterialFabMenuModel, () => ({
    __proto__: dart.getGetters(material_menu__material_fab_menu.MaterialFabMenuModel.__proto__),
    onShowPopupChange: async.Stream$(model__observable__observable.Change$(core.bool)),
    hasMenu: core.bool,
    hasIcons: core.bool,
    showPopup: core.bool,
    isFabEnabled: core.bool,
    glyph: core.String,
    ariaLabel: core.String,
    tooltip: core.String,
    isFabHidden: core.bool
  }));
  dart.setFieldSignature(material_menu__material_fab_menu.MaterialFabMenuModel, () => ({
    __proto__: dart.getFields(material_menu__material_fab_menu.MaterialFabMenuModel.__proto__),
    menuItem: dart.finalFieldType(model__menu__menu.MenuItem),
    [_showPopup]: dart.finalFieldType(ObservableReferenceOfbool())
  }));
  dart.trackLibraries("packages/angular_components/material_menu/material_fab_menu.ddc", {
    "package:angular_components/material_menu/material_fab_menu.dart": material_menu__material_fab_menu
  }, '{"version":3,"sourceRoot":"","sources":["material_fab_menu.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAqDyB;;;;;;;YAUI,cAAO,OAAO;;iBAQ5B,QAAiB;AAC5B,UAAI,QAAQ,IAAI,MAAM;AAEtB,oBAAS,OAAG,yDAAoB,CAAC,QAAQ,cAAa,cAAS;IACjE;kBAIc,KAA0B;AACtC,UAAI,KAAK,IAAI,MAAM;AAEnB,sBAAU,GAAG,KAAK;AAClB,uCAAmB;;AACnB,+BAAmB,GAAG,gBAAU,kBAAkB,OAAO,CAAC,QAAC,CAAC;AAC1D,6BAAe,aAAa;;IAEhC;IAMO;;;;;;;cAEkB,gBAAU;;IAAU;;cAEpB,gBAAU;;6BAAkB;IAAK;;cAEtC,gBAAU;;IAAO;;cAEb,gBAAU;;IAAW;;cAEvB,gBAAU;;IAAS;;cAElB,YAAO;;6BAAgB;IAAK;;cAE/B,gBAAU;;6BAAa;IAAK;;cAExB,gBAAU;;6BAAiB;IAAK;;cAElC,gBAAU;;6BAAe;IAAK;;YAEtB,WAAV,cAAS,gBAAK,gBAAW;;;YAIrB,mBAAY;;;YAEf,iBAAU,SAAS;;;AAItC,uCAAmB;;AACnB,+BAAmB,GAAG;AACtB,mBAAO,MAAM;IACf;;AAGE,oBAAI,kBAAY,GAAE;AAClB,wBAAY,GAAG;AACf,mBAAO,IAAI,CAAC;IACd;;AAGE,sBAAU,WAAW;AACrB,4BAAgB;IAClB;;AAGE,sBAAU,QAAQ;IACpB;;AAGE,4BAAgB;AAChB,4BAAc,CAAC,qDAAsB,YAAY,EAAE;AACjD,wBAAU,WAAW;;IAEzB;;AAGE,qBAAK,kBAAY,GAAE;AACnB,wBAAY,GAAG;IACjB;IAEM;;;;;;;;IAtGiB,6BAAuB;IAE3B,yBAAmB;IAEjB,gBAAU;IAOzB,aAAO,GAAG,kCAAgC;IA6BzC,YAAM;IAsBR,kBAAY,GAAG;IAwCd,sBAAgB,GAAG,oCACvB,2CAAgB,cAAc,EAC9B,2CAAgB,aAAa;IAlGD,qBAAe;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IA8G/B;;;;;;;YAO+B,iBAAU,QAAQ;;;cAG5C,aAAQ,QAAQ,kBAAhB,aAAQ,QAAQ,WAAY;;6BAAgB;IAAK;;YAIzD,WAAR,YAAO,eACP,aAAQ,QAAQ,WAAW,MACnB,CAAC,QAAC,SAAS,IAAK,SAAS,IAAI,CAAC,QAAC,IAAI,gCAAK,IAAI;IAAU;;YAG5C,iBAAU,MAAM;;;cAGb,aAAQ,QAAQ;6BAAI;IAAK;;YAG9B,cAAQ,KAAK,kBAAb,aAAQ,KAAK,KAAM;;;YAEf,cAAQ,MAAM;;;YAEhB,cAAQ,QAAQ,WAAhB,aAAQ,QAAQ,GAAI,aAAQ,MAAM;;;uBAEhC,YAAO,IAAG,gBAAU,MAAM,GAAG;IAAK;;AAKxD,oBAAI,YAAO,GAAE;AACX,wBAAU,MAAM,GAAG;YACd,KAAI,aAAQ,OAAO,IAAI,MAAM;AAClC,gCAAQ;;IAEZ;;AAIE,sBAAU,MAAM,GAAG;IACrB;;wEA1CqB,QAAa;QAAQ,2DAAY;IAA5B,eAAQ,GAAR,QAAQ;IAC5B,gBAAU,OAAG,iCAAyB,CAAC,SAAS;EAAC","file":"material_fab_menu.ddc.js"}');
  // Exports:
  return {
    material_menu__material_fab_menu: material_menu__material_fab_menu
  };
});

//# sourceMappingURL=material_fab_menu.ddc.js.map
