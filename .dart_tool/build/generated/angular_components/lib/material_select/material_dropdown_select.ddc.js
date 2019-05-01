define(['dart_sdk', 'packages/angular_components/model/a11y/active_item', 'packages/angular_components/utils/angular/css/css', 'packages/angular_components/utils/id_generator/id_generator', 'packages/angular_components/model/ui/template_support', 'packages/angular_components/laminate/enums/alignment', 'packages/angular_components/model/selection/selection_options', 'packages/angular_components/model/selection/selection_model', 'packages/angular_components/src/model/selection/interfaces/selectable', 'packages/angular_components/material_select/material_select_base', 'packages/angular_components/mixins/material_dropdown_base', 'packages/angular_components/mixins/button_wrapper', 'packages/angular_components/mixins/track_layout_changes', 'packages/angular_components/model/a11y/keyboard_handler_mixin', 'packages/angular_components/material_select/shift_click_selection', 'packages/angular_components/src/laminate/popup/popup_hierarchy', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular/src/bootstrap/modules', 'packages/angular_components/material_select/dropdown_button'], function(dart_sdk, active_item, css, id_generator, template_support, alignment, selection_options, selection_model, selectable, material_select_base, material_dropdown_base, button_wrapper, track_layout_changes, keyboard_handler_mixin, shift_click_selection, popup_hierarchy, change_detection, modules, dropdown_button) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const async = dart_sdk.async;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const model__a11y__active_item = active_item.model__a11y__active_item;
  const utils__angular__css__css = css.utils__angular__css__css;
  const utils__id_generator__id_generator = id_generator.utils__id_generator__id_generator;
  const model__ui__template_support = template_support.model__ui__template_support;
  const laminate__enums__alignment = alignment.laminate__enums__alignment;
  const model__selection__selection_options = selection_options.model__selection__selection_options;
  const model__selection__selection_model = selection_model.model__selection__selection_model;
  const src__model__selection__interfaces__selectable = selectable.src__model__selection__interfaces__selectable;
  const material_select__material_select_base = material_select_base.material_select__material_select_base;
  const mixins__material_dropdown_base = material_dropdown_base.mixins__material_dropdown_base;
  const mixins__button_wrapper = button_wrapper.mixins__button_wrapper;
  const mixins__track_layout_changes = track_layout_changes.mixins__track_layout_changes;
  const model__a11y__keyboard_handler_mixin = keyboard_handler_mixin.model__a11y__keyboard_handler_mixin;
  const material_select__shift_click_selection = shift_click_selection.material_select__shift_click_selection;
  const src__laminate__popup__popup_size_provider = popup_hierarchy.src__laminate__popup__popup_size_provider;
  const src__core__metadata__lifecycle_hooks = change_detection.src__core__metadata__lifecycle_hooks;
  const src__core__change_detection__change_detection_util = change_detection.src__core__change_detection__change_detection_util;
  const src__core__linker__component_factory = modules.src__core__linker__component_factory;
  const material_select__dropdown_button = dropdown_button.material_select__dropdown_button;
  const _root = Object.create(null);
  const material_select__material_dropdown_select = Object.create(_root);
  const $classes = dartx.classes;
  const $isNotEmpty = dartx.isNotEmpty;
  const $last = dartx.last;
  const $first = dartx.first;
  const $insert = dartx.insert;
  const $isEmpty = dartx.isEmpty;
  const $containsKey = dartx.containsKey;
  const $single = dartx.single;
  const $_get = dartx._get;
  const $toLowerCase = dartx.toLowerCase;
  const $_set = dartx._set;
  const $startsWith = dartx.startsWith;
  let StreamControllerOfFocusEvent = () => (StreamControllerOfFocusEvent = dart.constFn(async.StreamController$(html.FocusEvent)))();
  let dynamicToString = () => (dynamicToString = dart.constFn(dart.fnType(core.String, [dart.dynamic])))();
  let ListOfOptionGroup = () => (ListOfOptionGroup = dart.constFn(core.List$(model__selection__selection_options.OptionGroup)))();
  let ListOfOptionGroupToNull = () => (ListOfOptionGroupToNull = dart.constFn(dart.fnType(core.Null, [ListOfOptionGroup()])))();
  let ListOfSelectionChangeRecord = () => (ListOfSelectionChangeRecord = dart.constFn(core.List$(model__selection__selection_model.SelectionChangeRecord)))();
  let ListOfSelectionChangeRecordToNull = () => (ListOfSelectionChangeRecordToNull = dart.constFn(dart.fnType(core.Null, [ListOfSelectionChangeRecord()])))();
  let LinkedMapOfdynamic$String = () => (LinkedMapOfdynamic$String = dart.constFn(_js_helper.LinkedMap$(dart.dynamic, core.String)))();
  let dynamicAndStringTobool = () => (dynamicAndStringTobool = dart.constFn(dart.fnType(core.bool, [dart.dynamic, core.String])))();
  let IdentityMapOfint$String = () => (IdentityMapOfint$String = dart.constFn(_js_helper.IdentityMap$(core.int, core.String)))();
  let dynamicToType = () => (dynamicToType = dart.constFn(dart.fnType(core.Type, [dart.dynamic])))();
  let dynamicToComponentFactory = () => (dynamicToComponentFactory = dart.constFn(dart.fnType(src__core__linker__component_factory.ComponentFactory, [dart.dynamic])))();
  const _popupSizeDelegate = Symbol('_popupSizeDelegate');
  const _optionsListener = Symbol('_optionsListener');
  const _selectionListener = Symbol('_selectionListener');
  const _deselectOnActivate = Symbol('_deselectOnActivate');
  const _ariaActiveDescendant = Symbol('_ariaActiveDescendant');
  const _focus = Symbol('_focus');
  const _blur = Symbol('_blur');
  const _updateActiveModel = Symbol('_updateActiveModel');
  const _setInitialActiveItem = Symbol('_setInitialActiveItem');
  const _handleNavigationKey = Symbol('_handleNavigationKey');
  const _handleKeyboardTrigger = Symbol('_handleKeyboardTrigger');
  const _enteredKeys = Symbol('_enteredKeys');
  const _charCodeToString = Symbol('_charCodeToString');
  material_select__material_dropdown_select.ActivateItemOnKeyPressMixin = class ActivateItemOnKeyPressMixin extends core.Object {
    activateOnKeyPress(activeModel, charCode, options, itemRenderer, selection) {
      if (itemRenderer == null || options == null) return;
      let key = this[_charCodeToString](charCode);
      let optionsList = options.optionsList;
      let searchMap = new (LinkedMapOfdynamic$String()).new();
      let startsWith = (option, keys) => {
        if (option == null) return false;
        let searchString = searchMap[$_get](option);
        if (searchString == null) {
          searchString = itemRenderer(option)[$toLowerCase]();
          searchMap[$_set](option, searchString);
        }
        return searchString[$startsWith](keys);
      };
      dart.fn(startsWith, dynamicAndStringTobool());
      let maybeSelectOption = (option, keys) => {
        if (dart.test(startsWith(option, keys))) {
          activeModel.activate(option);
          selection == null ? null : selection.select(option);
          this[_enteredKeys] = keys;
          return true;
        }
        return false;
      };
      dart.fn(maybeSelectOption, dynamicAndStringTobool());
      if (this[_enteredKeys][$isNotEmpty]) {
        let keys = dart.notNull(this[_enteredKeys]) + dart.notNull(key);
        for (let option of optionsList) {
          if (dart.test(maybeSelectOption(option, keys))) return;
        }
      }
      if (dart.test(startsWith(activeModel.activeItem, key))) {
        if (dart.test(maybeSelectOption(activeModel.peekNext, key))) return;
      }
      for (let option of optionsList) {
        if (dart.test(maybeSelectOption(option, key))) return;
      }
      this.resetEnteredKeys();
    }
    resetEnteredKeys() {
      this[_enteredKeys] = "";
    }
    [_charCodeToString](charCode) {
      let key = material_select__material_dropdown_select.ActivateItemOnKeyPressMixin._charCodeMap[$_get](charCode);
      if (key == null) {
        key = core.String.fromCharCode(charCode)[$toLowerCase]();
        material_select__material_dropdown_select.ActivateItemOnKeyPressMixin._charCodeMap[$_set](charCode, key);
      }
      return key;
    }
  };
  (material_select__material_dropdown_select.ActivateItemOnKeyPressMixin.new = function() {
    this[_enteredKeys] = "";
  }).prototype = material_select__material_dropdown_select.ActivateItemOnKeyPressMixin.prototype;
  dart.addTypeTests(material_select__material_dropdown_select.ActivateItemOnKeyPressMixin);
  dart.setMethodSignature(material_select__material_dropdown_select.ActivateItemOnKeyPressMixin, () => ({
    __proto__: dart.getMethods(material_select__material_dropdown_select.ActivateItemOnKeyPressMixin.__proto__),
    activateOnKeyPress: dart.fnType(dart.void, [model__a11y__active_item.ActiveItemModel, core.int, model__selection__selection_options.SelectionOptions, dart.fnType(core.String, [dart.dynamic]), model__selection__selection_model.SelectionModel]),
    resetEnteredKeys: dart.fnType(dart.void, []),
    [_charCodeToString]: dart.fnType(core.String, [core.int])
  }));
  dart.setFieldSignature(material_select__material_dropdown_select.ActivateItemOnKeyPressMixin, () => ({
    __proto__: dart.getFields(material_select__material_dropdown_select.ActivateItemOnKeyPressMixin.__proto__),
    [_enteredKeys]: dart.fieldType(core.String)
  }));
  dart.defineLazy(material_select__material_dropdown_select.ActivateItemOnKeyPressMixin, {
    /*material_select__material_dropdown_select.ActivateItemOnKeyPressMixin._charCodeMap*/get _charCodeMap() {
      return new (IdentityMapOfint$String()).new();
    },
    set _charCodeMap(_) {}
  });
  const MaterialSelectBase_MaterialDropdownBase$ = class MaterialSelectBase_MaterialDropdownBase extends material_select__material_select_base.MaterialSelectBase {};
  (MaterialSelectBase_MaterialDropdownBase$.new = function() {
    mixins__material_dropdown_base.MaterialDropdownBase.new.call(this);
    MaterialSelectBase_MaterialDropdownBase$.__proto__.new.call(this);
  }).prototype = MaterialSelectBase_MaterialDropdownBase$.prototype;
  dart.applyMixin(MaterialSelectBase_MaterialDropdownBase$, mixins__material_dropdown_base.MaterialDropdownBase);
  const MaterialSelectBase_MaterialButtonWrapper$ = class MaterialSelectBase_MaterialButtonWrapper extends MaterialSelectBase_MaterialDropdownBase$ {};
  (MaterialSelectBase_MaterialButtonWrapper$.new = function() {
    mixins__button_wrapper.MaterialButtonWrapper.new.call(this);
    MaterialSelectBase_MaterialButtonWrapper$.__proto__.new.call(this);
  }).prototype = MaterialSelectBase_MaterialButtonWrapper$.prototype;
  dart.applyMixin(MaterialSelectBase_MaterialButtonWrapper$, mixins__button_wrapper.MaterialButtonWrapper);
  const MaterialSelectBase_TrackLayoutChangesMixin$ = class MaterialSelectBase_TrackLayoutChangesMixin extends MaterialSelectBase_MaterialButtonWrapper$ {};
  (MaterialSelectBase_TrackLayoutChangesMixin$.new = function() {
    mixins__track_layout_changes.TrackLayoutChangesMixin.new.call(this);
    MaterialSelectBase_TrackLayoutChangesMixin$.__proto__.new.call(this);
  }).prototype = MaterialSelectBase_TrackLayoutChangesMixin$.prototype;
  dart.applyMixin(MaterialSelectBase_TrackLayoutChangesMixin$, mixins__track_layout_changes.TrackLayoutChangesMixin);
  const MaterialSelectBase_KeyboardHandlerMixin$ = class MaterialSelectBase_KeyboardHandlerMixin extends MaterialSelectBase_TrackLayoutChangesMixin$ {};
  (MaterialSelectBase_KeyboardHandlerMixin$.new = function() {
    model__a11y__keyboard_handler_mixin.KeyboardHandlerMixin.new.call(this);
    MaterialSelectBase_KeyboardHandlerMixin$.__proto__.new.call(this);
  }).prototype = MaterialSelectBase_KeyboardHandlerMixin$.prototype;
  dart.applyMixin(MaterialSelectBase_KeyboardHandlerMixin$, model__a11y__keyboard_handler_mixin.KeyboardHandlerMixin);
  const MaterialSelectBase_ActivateItemOnKeyPressMixin$ = class MaterialSelectBase_ActivateItemOnKeyPressMixin extends MaterialSelectBase_KeyboardHandlerMixin$ {};
  (MaterialSelectBase_ActivateItemOnKeyPressMixin$.new = function() {
    material_select__material_dropdown_select.ActivateItemOnKeyPressMixin.new.call(this);
    MaterialSelectBase_ActivateItemOnKeyPressMixin$.__proto__.new.call(this);
  }).prototype = MaterialSelectBase_ActivateItemOnKeyPressMixin$.prototype;
  dart.applyMixin(MaterialSelectBase_ActivateItemOnKeyPressMixin$, material_select__material_dropdown_select.ActivateItemOnKeyPressMixin);
  const MaterialSelectBase_ShiftClickSelectionMixin$ = class MaterialSelectBase_ShiftClickSelectionMixin extends MaterialSelectBase_ActivateItemOnKeyPressMixin$ {};
  (MaterialSelectBase_ShiftClickSelectionMixin$.new = function() {
    material_select__shift_click_selection.ShiftClickSelectionMixin.new.call(this);
    MaterialSelectBase_ShiftClickSelectionMixin$.__proto__.new.call(this);
  }).prototype = MaterialSelectBase_ShiftClickSelectionMixin$.prototype;
  dart.applyMixin(MaterialSelectBase_ShiftClickSelectionMixin$, material_select__shift_click_selection.ShiftClickSelectionMixin);
  material_select__material_dropdown_select.MaterialDropdownSelectComponent = class MaterialDropdownSelectComponent extends MaterialSelectBase_ShiftClickSelectionMixin$ {
    get trackByIndexFn() {
      return this[trackByIndexFn];
    }
    set trackByIndexFn(value) {
      super.trackByIndexFn = value;
    }
    get activeModel() {
      return this[activeModel];
    }
    set activeModel(value) {
      super.activeModel = value;
    }
    get listId() {
      return this[listId];
    }
    set listId(value) {
      super.listId = value;
    }
    get buttonAriaRole() {
      return this[buttonAriaRole$];
    }
    set buttonAriaRole(value) {
      super.buttonAriaRole = value;
    }
    get buttonAriaLabelledBy() {
      return this[buttonAriaLabelledBy];
    }
    set buttonAriaLabelledBy(value) {
      this[buttonAriaLabelledBy] = value;
    }
    get deselectLabel() {
      return this[deselectLabel];
    }
    set deselectLabel(value) {
      this[deselectLabel] = value;
    }
    get error() {
      return this[error];
    }
    set error(value) {
      this[error] = value;
    }
    get showButtonBorder() {
      return this[showButtonBorder];
    }
    set showButtonBorder(value) {
      this[showButtonBorder] = value;
    }
    set deselectOnActivate(value) {
      this[_deselectOnActivate] = value;
    }
    get deselectOnActivate() {
      return dart.test(this.isMultiSelect) || dart.test(this[_deselectOnActivate]);
    }
    get labelRenderer() {
      return this[labelRenderer];
    }
    set labelRenderer(value) {
      this[labelRenderer] = value;
    }
    get labelFactory() {
      return this[labelFactory];
    }
    set labelFactory(value) {
      this[labelFactory] = value;
    }
    get hasCustomLabelRenderer() {
      return this.labelRenderer != null || this.labelFactory != null;
    }
    get popupClassName() {
      return this[popupClassName];
    }
    set popupClassName(value) {
      super.popupClassName = value;
    }
    get dropdownButton() {
      return this[dropdownButton];
    }
    set dropdownButton(value) {
      this[dropdownButton] = value;
    }
    get ariaActiveDescendant() {
      if (!dart.test(this.visible)) return "";
      if (this[_ariaActiveDescendant] != null) return this[_ariaActiveDescendant];
      if (this.options != null) {
        return this.activeModel.activeId;
      }
      return "";
    }
    set ariaActiveDescendant(id) {
      this[_ariaActiveDescendant] = id;
    }
    get listAutoFocus() {
      return this[listAutoFocus];
    }
    set listAutoFocus(value) {
      this[listAutoFocus] = value;
    }
    set componentRenderer(value) {
      super.componentRenderer = value;
    }
    get componentRenderer() {
      return super.componentRenderer;
    }
    set factoryRenderer(value) {
      super.factoryRenderer = value;
    }
    get factoryRenderer() {
      return super.factoryRenderer;
    }
    set itemRenderer(value) {
      super.itemRenderer = dart.fn(item => core.String._check(dart.dcall(value, [item])), dynamicToString());
    }
    get itemRenderer() {
      return super.itemRenderer;
    }
    set width(value) {
      super.width = value;
    }
    get width() {
      return super.width;
    }
    set visible(value) {
      super.visible = value;
      this.resetEnteredKeys();
    }
    get visible() {
      return super.visible;
    }
    set options(newOptions) {
      super.options = newOptions;
      this[_updateActiveModel]();
      this[_setInitialActiveItem]();
      let t = this[_optionsListener];
      t == null ? null : t.cancel();
      let t$ = this.options;
      let t$0 = t$ == null ? null : t$.stream;
      this[_optionsListener] = t$0 == null ? null : t$0.listen(dart.fn(_ => {
        this[_updateActiveModel]();
        this[_setInitialActiveItem]();
      }, ListOfOptionGroupToNull()));
    }
    get options() {
      return super.options;
    }
    get focus() {
      return this[_focus].stream;
    }
    get blur() {
      return this[_blur].stream;
    }
    onFocus(event) {
      this[_focus].add(event);
    }
    onBlur(event) {
      this[_blur].add(event);
    }
    set selection(newSelection) {
      super.selection = newSelection;
      this[_setInitialActiveItem]();
      let t = this[_selectionListener];
      t == null ? null : t.cancel();
      let t$ = this.selection;
      let t$0 = t$ == null ? null : t$.selectionChanges;
      this[_selectionListener] = t$0 == null ? null : t$0.listen(dart.fn(changes => {
        let added = dart.test(changes[$last].added[$isNotEmpty]) ? changes[$last].added[$first] : null;
        if (added != null && !dart.test(this.activeModel.isActive(added))) {
          this.activeModel.activate(added);
        }
      }, ListOfSelectionChangeRecordToNull()));
    }
    get selection() {
      return super.selection;
    }
    [_updateActiveModel]() {
      let items = core.List.from((() => {
        let t = this.options;
        let l = t == null ? null : t.optionsList;
        return l != null ? l : [];
      })());
      if (dart.test(this.showDeselectItem)) {
        items[$insert](0, this.deselectLabel);
      }
      this.activeModel.items = items;
    }
    [_setInitialActiveItem]() {
      if (this.selection == null || dart.test(this.selection.selectedValues[$isEmpty])) {
        this.activeModel.activate(null);
      } else if (this.activeModel.activeItem == null || dart.test(this.showDeselectItem) && dart.equals(this.activeModel.activeItem, this.deselectLabel) || !dart.test(this.selection.isSelected(this.activeModel.activeItem))) {
        this.activeModel.activate(this.selection.selectedValues[$first]);
      }
    }
    [_handleNavigationKey](event, activateFunction) {
      if (dart.test(this.disabled)) return;
      event.preventDefault();
      dart.dcall(activateFunction, []);
      if (!dart.test(this.visible) && this.selection != null && dart.test(this.isSingleSelect) && this.activeModel.activeItem != null) {
        this.selection.select(this.activeModel.activeItem);
      }
    }
    handleUpKey(event) {
      this[_handleNavigationKey](event, dart.bind(this.activeModel, 'activatePrevious'));
    }
    handleDownKey(event) {
      this[_handleNavigationKey](event, dart.bind(this.activeModel, 'activateNext'));
    }
    handleLeftKey(event) {
      this[_handleNavigationKey](event, dart.bind(this.activeModel, 'activatePrevious'));
    }
    handleRightKey(event) {
      this[_handleNavigationKey](event, dart.bind(this.activeModel, 'activateNext'));
    }
    handlePageUp(event) {
      this[_handleNavigationKey](event, dart.bind(this.activeModel, 'activateFirst'));
    }
    handlePageDown(event) {
      this[_handleNavigationKey](event, dart.bind(this.activeModel, 'activateLast'));
    }
    [_handleKeyboardTrigger]() {
      if (dart.test(this.disabled)) return;
      if (!dart.test(this.visible)) {
        this.open();
      } else {
        let item = this.activeModel.activeItem;
        if (item != null && this.selection != null) {
          if (dart.equals(item, this.deselectLabel)) {
            this.deselectCurrentSelection();
          } else if (!dart.test(this.selection.isSelected(item))) {
            this.selection.select(item);
          } else if (dart.test(this.deselectOnActivate)) {
            this.selection.deselect(item);
          }
        }
        if (dart.test(this.isSingleSelect)) {
          this.close();
          this.dropdownButton.focus();
        }
      }
    }
    handleEnterKey(event) {
      this[_handleKeyboardTrigger]();
    }
    handleSpaceKey(event) {
      event == null ? null : event.preventDefault();
      this[_handleKeyboardTrigger]();
    }
    handleClick(event) {
      if (!html.MouseEvent.is(event)) return;
      if (!dart.test(this.disabled)) this.toggle();
    }
    handleEscapeKey(event) {
      if (dart.test(this.visible)) {
        this.close();
        event.stopPropagation();
        this.dropdownButton.focus();
      }
    }
    handleCharCodeKey(event) {
      if (this.itemRenderer != null && this.options != null && !dart.test(this.disabled)) {
        this.activateOnKeyPress(this.activeModel, event.charCode, this.options, this.itemRenderer, !dart.test(this.visible) && dart.test(this.isSingleSelect) ? this.selection : null);
      }
    }
    ngOnChanges(changes) {
      if (dart.test(changes[$containsKey]("disabled")) && dart.test(this.disabled)) {
        this.close();
      }
    }
    ngOnDestroy() {
      let t = this[_optionsListener];
      t == null ? null : t.cancel();
      let t$ = this[_selectionListener];
      t$ == null ? null : t$.cancel();
    }
    getMinHeight(positionY, viewportHeight) {
      return this[_popupSizeDelegate] == null ? null : this[_popupSizeDelegate].getMinHeight(positionY, viewportHeight);
    }
    getMinWidth(positionX, viewportWidth) {
      return this[_popupSizeDelegate] == null ? null : this[_popupSizeDelegate].getMinWidth(positionX, viewportWidth);
    }
    getMaxHeight(positionY, viewportHeight) {
      if (this[_popupSizeDelegate] != null) {
        return this[_popupSizeDelegate].getMaxHeight(positionY, viewportHeight);
      } else {
        return 400;
      }
    }
    getMaxWidth(positionX, viewportWidth) {
      if (this[_popupSizeDelegate] != null) {
        return this[_popupSizeDelegate].getMaxWidth(positionX, viewportWidth);
      } else {
        return 448;
      }
    }
    isOptionDisabled(item) {
      return !dart.test(src__model__selection__interfaces__selectable.Selectable.isSelectableIn(core.Object, this.options, item, true));
    }
    isOptionHidden(item) {
      return src__model__selection__interfaces__selectable.Selectable.isHiddenIn(core.Object, this.options, item, false);
    }
    get showDeselectItem() {
      return !dart.test(this.isMultiSelect) && (() => {
        let t = this.deselectLabel;
        return t == null ? null : t[$isNotEmpty];
      })() === true;
    }
    get isDeselectItemSelected() {
      return this.selection.isEmpty;
    }
    deselectCurrentSelection() {
      if (dart.test(this.selection.isNotEmpty)) {
        this.selection.deselect(this.selection.selectedValues[$single]);
      }
    }
  };
  (material_select__material_dropdown_select.MaterialDropdownSelectComponent.new = function(idGenerator, popupSizeDelegate, rtl, popupClass, buttonAriaRole, element) {
    this[trackByIndexFn] = model__ui__template_support.indexIdentityFn;
    this[buttonAriaLabelledBy] = null;
    this[_optionsListener] = null;
    this[_selectionListener] = null;
    this[deselectLabel] = null;
    this[error] = null;
    this[showButtonBorder] = null;
    this[_deselectOnActivate] = true;
    this[labelRenderer] = null;
    this[labelFactory] = null;
    this[_ariaActiveDescendant] = null;
    this[dropdownButton] = null;
    this[listAutoFocus] = true;
    this[_focus] = StreamControllerOfFocusEvent().broadcast({sync: true});
    this[_blur] = StreamControllerOfFocusEvent().broadcast({sync: true});
    this[_popupSizeDelegate] = popupSizeDelegate;
    this[buttonAriaRole$] = buttonAriaRole;
    this[activeModel] = new model__a11y__active_item.ActiveItemModel.new(idGenerator);
    this[popupClassName] = utils__angular__css__css.constructEncapsulatedCss(popupClass, element[$classes]);
    this[listId] = (idGenerator != null ? idGenerator : new utils__id_generator__id_generator.SequentialIdGenerator.fromUUID()).nextId();
    material_select__material_dropdown_select.MaterialDropdownSelectComponent.__proto__.new.call(this);
    this.isRtl = rtl;
    this.preferredPositions = laminate__enums__alignment.RelativePosition.overlapAlignments;
    this.iconName = "arrow_drop_down";
  }).prototype = material_select__material_dropdown_select.MaterialDropdownSelectComponent.prototype;
  dart.addTypeTests(material_select__material_dropdown_select.MaterialDropdownSelectComponent);
  const trackByIndexFn = Symbol("MaterialDropdownSelectComponent.trackByIndexFn");
  const activeModel = Symbol("MaterialDropdownSelectComponent.activeModel");
  const listId = Symbol("MaterialDropdownSelectComponent.listId");
  const buttonAriaRole$ = Symbol("MaterialDropdownSelectComponent.buttonAriaRole");
  const buttonAriaLabelledBy = Symbol("MaterialDropdownSelectComponent.buttonAriaLabelledBy");
  const deselectLabel = Symbol("MaterialDropdownSelectComponent.deselectLabel");
  const error = Symbol("MaterialDropdownSelectComponent.error");
  const showButtonBorder = Symbol("MaterialDropdownSelectComponent.showButtonBorder");
  const labelRenderer = Symbol("MaterialDropdownSelectComponent.labelRenderer");
  const labelFactory = Symbol("MaterialDropdownSelectComponent.labelFactory");
  const popupClassName = Symbol("MaterialDropdownSelectComponent.popupClassName");
  const dropdownButton = Symbol("MaterialDropdownSelectComponent.dropdownButton");
  const listAutoFocus = Symbol("MaterialDropdownSelectComponent.listAutoFocus");
  material_select__material_dropdown_select.MaterialDropdownSelectComponent[dart.implements] = () => [src__laminate__popup__popup_size_provider.PopupSizeProvider, src__core__metadata__lifecycle_hooks.OnChanges, src__core__metadata__lifecycle_hooks.OnDestroy];
  dart.setMethodSignature(material_select__material_dropdown_select.MaterialDropdownSelectComponent, () => ({
    __proto__: dart.getMethods(material_select__material_dropdown_select.MaterialDropdownSelectComponent.__proto__),
    onFocus: dart.fnType(dart.void, [html.FocusEvent]),
    onBlur: dart.fnType(dart.void, [html.FocusEvent]),
    [_updateActiveModel]: dart.fnType(dart.void, []),
    [_setInitialActiveItem]: dart.fnType(dart.void, []),
    [_handleNavigationKey]: dart.fnType(dart.void, [html.KeyboardEvent, core.Function]),
    [_handleKeyboardTrigger]: dart.fnType(dart.void, []),
    handleClick: dart.fnType(dart.void, [html.UIEvent]),
    ngOnChanges: dart.fnType(dart.void, [core.Map$(core.String, src__core__change_detection__change_detection_util.SimpleChange)]),
    ngOnDestroy: dart.fnType(dart.void, []),
    getMinHeight: dart.fnType(core.num, [core.num, core.num]),
    getMinWidth: dart.fnType(core.num, [core.num, core.num]),
    getMaxHeight: dart.fnType(core.num, [core.num, core.num]),
    getMaxWidth: dart.fnType(core.num, [core.num, core.num]),
    isOptionDisabled: dart.fnType(core.bool, [core.Object]),
    isOptionHidden: dart.fnType(core.bool, [core.Object]),
    deselectCurrentSelection: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(material_select__material_dropdown_select.MaterialDropdownSelectComponent, () => ({
    __proto__: dart.getGetters(material_select__material_dropdown_select.MaterialDropdownSelectComponent.__proto__),
    deselectOnActivate: core.bool,
    hasCustomLabelRenderer: core.bool,
    ariaActiveDescendant: core.String,
    focus: async.Stream$(html.FocusEvent),
    blur: async.Stream$(html.FocusEvent),
    showDeselectItem: core.bool,
    isDeselectItemSelected: core.bool
  }));
  dart.setSetterSignature(material_select__material_dropdown_select.MaterialDropdownSelectComponent, () => ({
    __proto__: dart.getSetters(material_select__material_dropdown_select.MaterialDropdownSelectComponent.__proto__),
    deselectOnActivate: core.bool,
    ariaActiveDescendant: core.String,
    componentRenderer: dart.fnType(core.Type, [dart.dynamic]),
    factoryRenderer: dart.fnType(src__core__linker__component_factory.ComponentFactory, [dart.dynamic]),
    itemRenderer: core.Function,
    options: model__selection__selection_options.SelectionOptions,
    selection: model__selection__selection_model.SelectionModel
  }));
  dart.setFieldSignature(material_select__material_dropdown_select.MaterialDropdownSelectComponent, () => ({
    __proto__: dart.getFields(material_select__material_dropdown_select.MaterialDropdownSelectComponent.__proto__),
    trackByIndexFn: dart.finalFieldType(core.Function),
    activeModel: dart.finalFieldType(model__a11y__active_item.ActiveItemModel),
    listId: dart.finalFieldType(core.String),
    buttonAriaRole: dart.finalFieldType(core.String),
    buttonAriaLabelledBy: dart.fieldType(core.String),
    [_optionsListener]: dart.fieldType(async.StreamSubscription),
    [_selectionListener]: dart.fieldType(async.StreamSubscription),
    [_popupSizeDelegate]: dart.finalFieldType(src__laminate__popup__popup_size_provider.PopupSizeProvider),
    deselectLabel: dart.fieldType(core.String),
    error: dart.fieldType(core.String),
    showButtonBorder: dart.fieldType(core.bool),
    [_deselectOnActivate]: dart.fieldType(core.bool),
    labelRenderer: dart.fieldType(dynamicToType()),
    labelFactory: dart.fieldType(dynamicToComponentFactory()),
    popupClassName: dart.finalFieldType(core.String),
    [_ariaActiveDescendant]: dart.fieldType(core.String),
    dropdownButton: dart.fieldType(material_select__dropdown_button.DropdownButtonComponent),
    listAutoFocus: dart.fieldType(core.bool),
    [_focus]: dart.fieldType(StreamControllerOfFocusEvent()),
    [_blur]: dart.fieldType(StreamControllerOfFocusEvent())
  }));
  dart.trackLibraries("packages/angular_components/material_select/material_dropdown_select.ddc", {
    "package:angular_components/material_select/material_dropdown_select.dart": material_select__material_dropdown_select
  }, '{"version":3,"sourceRoot":"","sources":["material_dropdown_select.dart"],"names":[],"mappings":"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","file":"material_dropdown_select.ddc.js"}');
  // Exports:
  return {
    material_select__material_dropdown_select: material_select__material_dropdown_select
  };
});

//# sourceMappingURL=material_dropdown_select.ddc.js.map
