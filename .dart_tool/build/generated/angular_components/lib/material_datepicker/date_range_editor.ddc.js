define(['dart_sdk', 'packages/angular_components/material_datepicker/preset', 'packages/angular_components/model/date/date', 'packages/angular_components/material_datepicker/calendar', 'packages/angular_components/material_datepicker/range', 'packages/angular_components/model/date/date_formatter', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular_components/focus/focus_interface', 'packages/angular_components/src/material_datepicker/comparison_range_editor', 'packages/angular_components/src/laminate/popup/popup_hierarchy', 'packages/angular_components/utils/browser/dom_service/dom_service', 'packages/angular_components/src/utils/angular/managed_zone/managed_zone', 'packages/angular_components/material_datepicker/material_calendar_picker', 'packages/angular_components/material_datepicker/material_month_picker', 'packages/quiver/time', 'packages/intl/intl', 'packages/angular_components/model/observable/observable', 'packages/angular_components/src/material_datepicker/sequential'], function(dart_sdk, preset, date, calendar, range, date_formatter, change_detection, focus_interface, comparison_range_editor, popup_hierarchy, dom_service, managed_zone, material_calendar_picker, material_month_picker, time, intl, observable, sequential) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const collection = dart_sdk.collection;
  const html = dart_sdk.html;
  const async = dart_sdk.async;
  const math = dart_sdk.math;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const material_datepicker__preset = preset.material_datepicker__preset;
  const model__date__date = date.model__date__date;
  const material_datepicker__calendar = calendar.material_datepicker__calendar;
  const material_datepicker__range = range.material_datepicker__range;
  const model__date__date_formatter = date_formatter.model__date__date_formatter;
  const src__core__metadata__lifecycle_hooks = change_detection.src__core__metadata__lifecycle_hooks;
  const focus__focus_interface = focus_interface.focus__focus_interface;
  const src__material_datepicker__date_range_editor_model = comparison_range_editor.src__material_datepicker__date_range_editor_model;
  const src__laminate__popup__popup_ref = popup_hierarchy.src__laminate__popup__popup_ref;
  const utils__browser__dom_service__dom_service = dom_service.utils__browser__dom_service__dom_service;
  const src__utils__angular__managed_zone__managed_zone = managed_zone.src__utils__angular__managed_zone__managed_zone;
  const material_datepicker__material_calendar_picker = material_calendar_picker.material_datepicker__material_calendar_picker;
  const material_datepicker__material_month_picker = material_month_picker.material_datepicker__material_month_picker;
  const time$ = time.time;
  const intl$ = intl.intl;
  const model__observable__observable = observable.model__observable__observable;
  const src__material_datepicker__sequential = sequential.src__material_datepicker__sequential;
  const _root = Object.create(null);
  const material_datepicker__date_range_editor = Object.create(_root);
  const $toList = dartx.toList;
  const $map = dartx.map;
  const $length = dartx.length;
  const $_get = dartx._get;
  const $_set = dartx._set;
  const $contains = dartx.contains;
  let JSArrayOfDatepickerPreset = () => (JSArrayOfDatepickerPreset = dart.constFn(_interceptors.JSArray$(material_datepicker__preset.DatepickerPreset)))();
  let _HashSetOfDatepickerPreset = () => (_HashSetOfDatepickerPreset = dart.constFn(collection._HashSet$(material_datepicker__preset.DatepickerPreset)))();
  let StreamControllerOfUIEvent = () => (StreamControllerOfUIEvent = dart.constFn(async.StreamController$(html.UIEvent)))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let DatepickerDateRangeToDatepickerPreset = () => (DatepickerDateRangeToDatepickerPreset = dart.constFn(dart.fnType(material_datepicker__preset.DatepickerPreset, [material_datepicker__range.DatepickerDateRange])))();
  let IterableOfDatepickerPreset = () => (IterableOfDatepickerPreset = dart.constFn(core.Iterable$(material_datepicker__preset.DatepickerPreset)))();
  let numToNull = () => (numToNull = dart.constFn(dart.fnType(core.Null, [core.num])))();
  let FutureOfNull = () => (FutureOfNull = dart.constFn(async.Future$(core.Null)))();
  let ListOfDatepickerPreset = () => (ListOfDatepickerPreset = dart.constFn(core.List$(material_datepicker__preset.DatepickerPreset)))();
  let SetOfDatepickerPreset = () => (SetOfDatepickerPreset = dart.constFn(core.Set$(material_datepicker__preset.DatepickerPreset)))();
  let ObservableReferenceOfbool = () => (ObservableReferenceOfbool = dart.constFn(model__observable__observable.ObservableReference$(core.bool)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  const _elementRef = Symbol('_elementRef');
  const _domService = Symbol('_domService');
  const _managedZone = Symbol('_managedZone');
  const _allowHighlightUpdates = Symbol('_allowHighlightUpdates');
  const _supportsComparison = Symbol('_supportsComparison');
  const _compact = Symbol('_compact');
  const _supportsDaysInputs = Symbol('_supportsDaysInputs');
  const _presets = Symbol('_presets');
  const _validPresets = Symbol('_validPresets');
  const _minDate = Symbol('_minDate');
  const _maxDate = Symbol('_maxDate');
  const _isCalendarCreated = Symbol('_isCalendarCreated');
  const _daysToToday = Symbol('_daysToToday');
  const _daysToYesterday = Symbol('_daysToYesterday');
  const _clock = Symbol('_clock');
  const _today = Symbol('_today');
  const _controller = Symbol('_controller');
  const _monthSelectorState = Symbol('_monthSelectorState');
  const _visibleMonth = Symbol('_visibleMonth');
  const _visibleMonthName = Symbol('_visibleMonthName');
  const _updateValidPresets = Symbol('_updateValidPresets');
  const _parseDaysInput = Symbol('_parseDaysInput');
  const _createDaysToTodayRange = Symbol('_createDaysToTodayRange');
  const _createDaysToYesterdayRange = Symbol('_createDaysToYesterdayRange');
  material_datepicker__date_range_editor.DateRangeEditorComponent = class DateRangeEditorComponent extends core.Object {
    get model() {
      return this[model];
    }
    set model(value) {
      this[model] = value;
    }
    set allowHighlightUpdates(value) {
      this[_allowHighlightUpdates] = value;
    }
    get allowHighlightUpdates() {
      return this[_allowHighlightUpdates];
    }
    set supportsComparison(value) {
      this[_supportsComparison] = value;
    }
    get supportsComparison() {
      return this[_supportsComparison];
    }
    get isCustomComparisonValid() {
      return this.model.isCustomComparisonValid;
    }
    set compact(value) {
      this[_compact] = value;
    }
    get compact() {
      return this[_compact];
    }
    get movingStartMaintainsLength() {
      return this[movingStartMaintainsLength];
    }
    set movingStartMaintainsLength(value) {
      this[movingStartMaintainsLength] = value;
    }
    set supportsDaysInputs(value) {
      this[_supportsDaysInputs] = value;
    }
    get supportsDaysInputs() {
      return this[_supportsDaysInputs];
    }
    set ranges(ranges) {
      this.presets = IterableOfDatepickerPreset()._check(ranges[$map](material_datepicker__preset.DatepickerPreset, dart.fn(range => material_datepicker__preset.DatepickerPreset.fromRange(range), DatepickerDateRangeToDatepickerPreset())))[$toList]();
    }
    get presets() {
      return this[_presets];
    }
    set presets(presets) {
      this[_presets] = presets;
      this[_updateValidPresets]();
    }
    get popupHandle() {
      return this[popupHandle];
    }
    set popupHandle(value) {
      this[popupHandle] = value;
    }
    set minDate(d) {
      this[_minDate] = d;
      this[_updateValidPresets]();
      this.nextPrevModel.update(this[_visibleMonth], this.minDate, this.maxDate);
    }
    get minDate() {
      return this[_minDate];
    }
    set maxDate(d) {
      this[_maxDate] = d;
      this[_updateValidPresets]();
      this.nextPrevModel.update(this[_visibleMonth], this.minDate, this.maxDate);
    }
    get maxDate() {
      return this[_maxDate];
    }
    get isCalendarCreated() {
      let l = this[_isCalendarCreated];
      return l != null ? l : false;
    }
    set isCalendarCreated(value) {
      this[_isCalendarCreated] = value;
    }
    get supportsClearRange() {
      return this[supportsClearRange];
    }
    set supportsClearRange(value) {
      this[supportsClearRange] = value;
    }
    get calendarPicker() {
      return this[calendarPicker];
    }
    set calendarPicker(value) {
      this[calendarPicker] = value;
    }
    get monthSelector() {
      return this[monthSelector];
    }
    set monthSelector(value) {
      this[monthSelector] = value;
    }
    get supportsCustomRange() {
      return this[supportsCustomRange];
    }
    set supportsCustomRange(value) {
      this[supportsCustomRange] = value;
    }
    get supportsMonthSelector() {
      return this[supportsMonthSelector];
    }
    set supportsMonthSelector(value) {
      this[supportsMonthSelector] = value;
    }
    get relativeDaysToToday() {
      return this[relativeDaysToToday];
    }
    set relativeDaysToToday(value) {
      this[relativeDaysToToday] = value;
    }
    set daysToToday(value) {
      let numDays = this[_parseDaysInput](value);
      if (numDays == null) return;
      this[_daysToToday] = value;
      this.daysToTodayRange = this[_createDaysToTodayRange](numDays);
      this.model.selectRange(this.daysToTodayRange.clamp({min: this.minDate, max: this.maxDate}));
    }
    get daysToToday() {
      return this[_daysToToday];
    }
    get daysToTodayRange() {
      return this[daysToTodayRange];
    }
    set daysToTodayRange(value) {
      this[daysToTodayRange] = value;
    }
    [_createDaysToTodayRange](numDays) {
      return dart.test(this.relativeDaysToToday) ? new material_datepicker__range.LastNDaysToTodayRange.beforeToday(this[_clock], numDays) : material_datepicker__range.DatepickerDateRange.new(dart.str(numDays) + " " + dart.str(material_datepicker__date_range_editor.DateRangeEditorComponent.daysToTodayMsg), this[_today].add({days: -(dart.notNull(numDays) - 1)}), this[_today], {isPredefined: true});
    }
    set daysToYesterday(value) {
      let numDays = this[_parseDaysInput](value);
      if (numDays == null) return;
      this[_daysToYesterday] = value;
      this.daysToYesterdayRange = this[_createDaysToYesterdayRange](numDays);
      this.model.selectRange(this.daysToYesterdayRange.clamp({min: this.minDate, max: this.maxDate}));
    }
    get daysToYesterday() {
      return this[_daysToYesterday];
    }
    get shouldShowCustomDateRangeColumn() {
      return this.model.shouldShowCustomDateRangeColumn;
    }
    get shouldShowPredefinedList() {
      return this.model.shouldShowPredefinedList;
    }
    get isBasic() {
      return this.model.basic;
    }
    get daysToYesterdayRange() {
      return this[daysToYesterdayRange];
    }
    set daysToYesterdayRange(value) {
      this[daysToYesterdayRange] = value;
    }
    [_createDaysToYesterdayRange](numDays) {
      return new material_datepicker__range.LastNDaysRange.beforeToday(this[_clock], numDays);
    }
    get maxDaysInputLength() {
      return 4;
    }
    [_parseDaysInput](value) {
      let numDays = null;
      try {
        numDays = core.int.parse(value);
      } catch (e) {
        let ex = dart.getThrown(e);
        if (core.FormatException.is(ex)) {
          return null;
        } else
          throw e;
      }
      if (dart.notNull(numDays) < 1 || dart.notNull(numDays) > dart.notNull(material_datepicker__date_range_editor.DateRangeEditorComponent._maxDays)) return null;
      return numDays;
    }
    ngOnInit() {
      this.daysToTodayRange = this[_createDaysToTodayRange](30);
      this.daysToYesterdayRange = this[_createDaysToYesterdayRange](30);
      if (dart.test(this.model.basic)) {
        this.model.shouldShowPredefinedList = true;
        this.model.shouldShowCustomDateRangeColumn = false;
      }
    }
    ngAfterViewInit() {
      if (this[_isCalendarCreated] != null) return;
      FutureOfNull()._check(this[_domService].nextFrame.then(core.Null, dart.fn(_ => {
        this[_managedZone].runInside(core.Null, dart.fn(() => {
          if (this[_isCalendarCreated] != null) return;
          this[_isCalendarCreated] = true;
        }, VoidToNull()));
      }, numToNull())));
    }
    focus() {
      if (this[_elementRef].querySelector(".preset-list") != null) {
        let t = this[_elementRef].querySelector(".preset-list material-select-item.selected");
        t == null ? null : t.focus();
      } else {
        let t$ = this[_elementRef].querySelector("material-input.active input");
        t$ == null ? null : t$.focus();
      }
    }
    get presetRangeSelected() {
      return this[_controller].stream;
    }
    [_updateValidPresets]() {
      this[_validPresets] = new (_HashSetOfDatepickerPreset()).new();
      for (let preset of this[_presets]) {
        if (preset.range.clamp({min: this.minDate, max: this.maxDate}) != null) {
          this[_validPresets].add(preset);
        }
        if (preset.alternatives != null) {
          for (let alternative of preset.alternatives) {
            if (alternative.range.clamp({min: this.minDate, max: this.maxDate}) != null) {
              this[_validPresets].add(alternative);
            }
          }
        }
      }
    }
    onRangeClicked(event, range) {
      this.model.selectRange(range.clamp({min: this.minDate, max: this.maxDate}));
      this[_controller].add(event);
    }
    onAlternativePresetClicked(event, parent, alternative) {
      for (let i = 0; i < dart.notNull(this[_presets][$length]); i++) {
        if (dart.equals(this[_presets][$_get](i), parent)) {
          this[_presets][$_set](i, alternative);
          break;
        }
      }
      this.onRangeClicked(event, alternative.range);
    }
    onClearRangeClicked(event) {
      this.model.selectRange(null);
      this[_controller].add(event);
    }
    get isClearRangeSelected() {
      return dart.test(this.supportsClearRange) && this.model.value != null && this.model.value.range == null && this.model.value.comparison == null;
    }
    onCustomClicked() {
      let t = this.model.value;
      let oldRange = t == null ? null : t.range;
      if (oldRange != null) {
        this.model.selectRange(material_datepicker__range.DatepickerDateRange.custom(oldRange.start, oldRange.end).clamp({min: this.minDate, max: this.maxDate}));
      }
      if (dart.test(this.model.basic)) {
        this.model.shouldShowPredefinedList = false;
        this.model.shouldShowCustomDateRangeColumn = true;
      }
    }
    disableCustomMode() {
      if (dart.test(this.model.basic)) {
        this.model.shouldShowPredefinedList = true;
        this.model.shouldShowCustomDateRangeColumn = false;
      }
    }
    onMonthSelectorDropdownClicked() {
      this.showMonthSelector = !dart.test(this.showMonthSelector);
      if (dart.test(this.showMonthSelector)) {
        this[_domService].scheduleWrite(dart.fn(() => {
          this.monthSelector.scrollToYear(this[_visibleMonth].year);
        }, VoidToNull()));
      }
    }
    set monthSelectorState(state) {
      this[_monthSelectorState] = state;
      if (dart.test(state.has(state.currentSelection))) {
        this.showMonthSelector = false;
        this[_monthSelectorState] = new material_datepicker__calendar.CalendarState.empty({resolution: material_datepicker__calendar.CalendarResolution.months});
        let selectedMonth = state.selection(state.currentSelection);
        this[_domService].scheduleWrite(dart.fn(() => {
          this.calendarPicker.scrollToDate(selectedMonth.start);
        }, VoidToNull()));
      }
    }
    get monthSelectorState() {
      return this[_monthSelectorState];
    }
    get visibleMonthName() {
      return this[_visibleMonthName];
    }
    onVisibleMonthChange(month) {
      this[_visibleMonth] = month;
      this[_visibleMonthName] = material_datepicker__date_range_editor.DateRangeEditorComponent._monthFormatter.format(month.asUtcTime());
      this.nextPrevModel.update(this[_visibleMonth], this.minDate, this.maxDate);
    }
    get nextPrevModel() {
      return this[nextPrevModel];
    }
    set nextPrevModel(value) {
      this[nextPrevModel] = value;
    }
    get showMonthSelector() {
      return this[showMonthSelector];
    }
    set showMonthSelector(value) {
      this[showMonthSelector] = value;
    }
    isSelected(range) {
      return dart.equals((() => {
        let t = this.model.value;
        let t$ = t == null ? null : t.range;
        return t$ == null ? null : t$.unclamped();
      })(), range);
    }
    isValid(preset) {
      return this[_validPresets].contains(preset);
    }
    isAlternativePresetSelected(alternative) {
      return this[_presets][$contains](alternative);
    }
    get isPredefinedRangeSelected() {
      let t = this.model.value;
      let t$ = t == null ? null : t.range;
      let l = t$ == null ? null : t$.isPredefined;
      return l != null ? l : false;
    }
    get isCustomRangeSelected() {
      return !dart.test(this.isClearRangeSelected) && !dart.test(this.isPredefinedRangeSelected);
    }
    get rangeTitle() {
      let t = this.model.value;
      let t$ = t == null ? null : t.range;
      let l = t$ == null ? null : t$.title;
      return l != null ? l : "";
    }
    get customRangeDescription() {
      return model__date__date_formatter.formatRange(this.model.range.value);
    }
  };
  (material_datepicker__date_range_editor.DateRangeEditorComponent.new = function(elementRef, domService, managedZone, editorHost, clock, legacyClock) {
    this[model] = null;
    this[_allowHighlightUpdates] = true;
    this[_supportsComparison] = true;
    this[_compact] = false;
    this[movingStartMaintainsLength] = true;
    this[_supportsDaysInputs] = true;
    this[_presets] = JSArrayOfDatepickerPreset().of([]);
    this[_validPresets] = new (_HashSetOfDatepickerPreset()).new();
    this[popupHandle] = null;
    this[_minDate] = new model__date__date.Date.new(1000, core.DateTime.january, 1);
    this[_maxDate] = new model__date__date.Date.new(9999, core.DateTime.december, 31);
    this[_isCalendarCreated] = null;
    this[supportsClearRange] = false;
    this[calendarPicker] = null;
    this[monthSelector] = null;
    this[supportsCustomRange] = true;
    this[supportsMonthSelector] = true;
    this[relativeDaysToToday] = false;
    this[_daysToToday] = dart.str(30);
    this[daysToTodayRange] = null;
    this[_daysToYesterday] = dart.str(30);
    this[daysToYesterdayRange] = null;
    this[_clock] = null;
    this[_today] = null;
    this[_controller] = StreamControllerOfUIEvent().broadcast({sync: true});
    this[_monthSelectorState] = new material_datepicker__calendar.CalendarState.empty({resolution: material_datepicker__calendar.CalendarResolution.months});
    this[_visibleMonth] = null;
    this[_visibleMonthName] = "";
    this[nextPrevModel] = null;
    this[showMonthSelector] = false;
    this[_elementRef] = elementRef;
    this[_domService] = domService;
    this[_managedZone] = managedZone;
    let t = this[_clock];
    t == null ? this[_clock] = legacyClock : t;
    this[_today] = model__date__date.Date.today(this[_clock]);
    editorHost == null ? null : editorHost.dateRangeEditorCreated(this);
    this.nextPrevModel = new material_datepicker__date_range_editor.DateRangeEditorNextPrevModel.new({onNext: dart.fn(() => {
        this.calendarPicker.scrollToDate(this[_visibleMonth].add({months: 1}));
      }, VoidToNull()), onPrev: dart.fn(() => {
        this.calendarPicker.scrollToDate(this[_visibleMonth].add({months: -1}));
      }, VoidToNull())});
  }).prototype = material_datepicker__date_range_editor.DateRangeEditorComponent.prototype;
  dart.addTypeTests(material_datepicker__date_range_editor.DateRangeEditorComponent);
  const model = Symbol("DateRangeEditorComponent.model");
  const movingStartMaintainsLength = Symbol("DateRangeEditorComponent.movingStartMaintainsLength");
  const popupHandle = Symbol("DateRangeEditorComponent.popupHandle");
  const supportsClearRange = Symbol("DateRangeEditorComponent.supportsClearRange");
  const calendarPicker = Symbol("DateRangeEditorComponent.calendarPicker");
  const monthSelector = Symbol("DateRangeEditorComponent.monthSelector");
  const supportsCustomRange = Symbol("DateRangeEditorComponent.supportsCustomRange");
  const supportsMonthSelector = Symbol("DateRangeEditorComponent.supportsMonthSelector");
  const relativeDaysToToday = Symbol("DateRangeEditorComponent.relativeDaysToToday");
  const daysToTodayRange = Symbol("DateRangeEditorComponent.daysToTodayRange");
  const daysToYesterdayRange = Symbol("DateRangeEditorComponent.daysToYesterdayRange");
  const nextPrevModel = Symbol("DateRangeEditorComponent.nextPrevModel");
  const showMonthSelector = Symbol("DateRangeEditorComponent.showMonthSelector");
  material_datepicker__date_range_editor.DateRangeEditorComponent[dart.implements] = () => [src__core__metadata__lifecycle_hooks.OnInit, src__core__metadata__lifecycle_hooks.AfterViewInit, focus__focus_interface.Focusable];
  dart.setMethodSignature(material_datepicker__date_range_editor.DateRangeEditorComponent, () => ({
    __proto__: dart.getMethods(material_datepicker__date_range_editor.DateRangeEditorComponent.__proto__),
    [_createDaysToTodayRange]: dart.fnType(material_datepicker__range.DatepickerDateRange, [core.int]),
    [_createDaysToYesterdayRange]: dart.fnType(material_datepicker__range.DatepickerDateRange, [core.int]),
    [_parseDaysInput]: dart.fnType(core.int, [core.String]),
    ngOnInit: dart.fnType(dart.void, []),
    ngAfterViewInit: dart.fnType(dart.void, []),
    focus: dart.fnType(dart.void, []),
    [_updateValidPresets]: dart.fnType(dart.void, []),
    onRangeClicked: dart.fnType(dart.void, [html.UIEvent, material_datepicker__range.DatepickerDateRange]),
    onAlternativePresetClicked: dart.fnType(dart.void, [html.UIEvent, material_datepicker__preset.DatepickerPreset, material_datepicker__preset.DatepickerPreset]),
    onClearRangeClicked: dart.fnType(dart.void, [html.UIEvent]),
    onCustomClicked: dart.fnType(dart.void, []),
    disableCustomMode: dart.fnType(dart.void, []),
    onMonthSelectorDropdownClicked: dart.fnType(dart.void, []),
    onVisibleMonthChange: dart.fnType(dart.void, [model__date__date.Date]),
    isSelected: dart.fnType(core.bool, [dart.dynamic]),
    isValid: dart.fnType(core.bool, [material_datepicker__preset.DatepickerPreset]),
    isAlternativePresetSelected: dart.fnType(core.bool, [material_datepicker__preset.DatepickerPreset])
  }));
  dart.setGetterSignature(material_datepicker__date_range_editor.DateRangeEditorComponent, () => ({
    __proto__: dart.getGetters(material_datepicker__date_range_editor.DateRangeEditorComponent.__proto__),
    allowHighlightUpdates: core.bool,
    supportsComparison: core.bool,
    isCustomComparisonValid: core.bool,
    compact: core.bool,
    supportsDaysInputs: core.bool,
    presets: core.List$(material_datepicker__preset.DatepickerPreset),
    minDate: model__date__date.Date,
    maxDate: model__date__date.Date,
    isCalendarCreated: core.bool,
    daysToToday: core.String,
    daysToYesterday: core.String,
    shouldShowCustomDateRangeColumn: core.bool,
    shouldShowPredefinedList: core.bool,
    isBasic: core.bool,
    maxDaysInputLength: core.int,
    presetRangeSelected: async.Stream$(html.UIEvent),
    isClearRangeSelected: core.bool,
    monthSelectorState: material_datepicker__calendar.CalendarState,
    visibleMonthName: core.String,
    isPredefinedRangeSelected: core.bool,
    isCustomRangeSelected: core.bool,
    rangeTitle: core.String,
    customRangeDescription: core.String
  }));
  dart.setSetterSignature(material_datepicker__date_range_editor.DateRangeEditorComponent, () => ({
    __proto__: dart.getSetters(material_datepicker__date_range_editor.DateRangeEditorComponent.__proto__),
    allowHighlightUpdates: core.bool,
    supportsComparison: core.bool,
    compact: core.bool,
    supportsDaysInputs: core.bool,
    ranges: core.List$(material_datepicker__range.DatepickerDateRange),
    presets: core.List$(material_datepicker__preset.DatepickerPreset),
    minDate: model__date__date.Date,
    maxDate: model__date__date.Date,
    isCalendarCreated: core.bool,
    daysToToday: core.String,
    daysToYesterday: core.String,
    monthSelectorState: material_datepicker__calendar.CalendarState
  }));
  dart.setFieldSignature(material_datepicker__date_range_editor.DateRangeEditorComponent, () => ({
    __proto__: dart.getFields(material_datepicker__date_range_editor.DateRangeEditorComponent.__proto__),
    model: dart.fieldType(src__material_datepicker__date_range_editor_model.DateRangeEditorModel),
    [_allowHighlightUpdates]: dart.fieldType(core.bool),
    [_supportsComparison]: dart.fieldType(core.bool),
    [_compact]: dart.fieldType(core.bool),
    movingStartMaintainsLength: dart.fieldType(core.bool),
    [_supportsDaysInputs]: dart.fieldType(core.bool),
    [_presets]: dart.fieldType(ListOfDatepickerPreset()),
    [_validPresets]: dart.fieldType(SetOfDatepickerPreset()),
    popupHandle: dart.fieldType(src__laminate__popup__popup_ref.PopupRef),
    [_minDate]: dart.fieldType(model__date__date.Date),
    [_maxDate]: dart.fieldType(model__date__date.Date),
    [_elementRef]: dart.finalFieldType(html.Element),
    [_domService]: dart.finalFieldType(utils__browser__dom_service__dom_service.DomService),
    [_managedZone]: dart.finalFieldType(src__utils__angular__managed_zone__managed_zone.ManagedZone),
    [_isCalendarCreated]: dart.fieldType(core.bool),
    supportsClearRange: dart.fieldType(core.bool),
    calendarPicker: dart.fieldType(material_datepicker__material_calendar_picker.MaterialCalendarPickerComponent),
    monthSelector: dart.fieldType(material_datepicker__material_month_picker.MaterialMonthPickerComponent),
    supportsCustomRange: dart.fieldType(core.bool),
    supportsMonthSelector: dart.fieldType(core.bool),
    relativeDaysToToday: dart.fieldType(core.bool),
    [_daysToToday]: dart.fieldType(core.String),
    daysToTodayRange: dart.fieldType(material_datepicker__range.DatepickerDateRange),
    [_daysToYesterday]: dart.fieldType(core.String),
    daysToYesterdayRange: dart.fieldType(material_datepicker__range.DatepickerDateRange),
    [_clock]: dart.fieldType(time$.Clock),
    [_today]: dart.fieldType(model__date__date.Date),
    [_controller]: dart.finalFieldType(StreamControllerOfUIEvent()),
    [_monthSelectorState]: dart.fieldType(material_datepicker__calendar.CalendarState),
    [_visibleMonth]: dart.fieldType(model__date__date.Date),
    [_visibleMonthName]: dart.fieldType(core.String),
    nextPrevModel: dart.fieldType(material_datepicker__date_range_editor.DateRangeEditorNextPrevModel),
    showMonthSelector: dart.fieldType(core.bool)
  }));
  dart.defineLazy(material_datepicker__date_range_editor.DateRangeEditorComponent, {
    /*material_datepicker__date_range_editor.DateRangeEditorComponent.comparisonHeaderMsg*/get comparisonHeaderMsg() {
      return intl$.Intl.message("Compare", {name: "comparisonHeaderMsg", desc: "Label for a toggle that turns time comparison on/off."});
    },
    /*material_datepicker__date_range_editor.DateRangeEditorComponent._defaultNumDays*/get _defaultNumDays() {
      return 30;
    },
    /*material_datepicker__date_range_editor.DateRangeEditorComponent._maxDaysInputLength*/get _maxDaysInputLength() {
      return 4;
    },
    /*material_datepicker__date_range_editor.DateRangeEditorComponent._maxDays*/get _maxDays() {
      return dart.asInt(math.pow(10, 4) - 1);
    },
    /*material_datepicker__date_range_editor.DateRangeEditorComponent._monthFormatter*/get _monthFormatter() {
      return new intl$.DateFormat.yMMM();
    },
    /*material_datepicker__date_range_editor.DateRangeEditorComponent.navigateBeforeMsg*/get navigateBeforeMsg() {
      return intl$.Intl.message("Previous date range", {name: "navigateBeforeMsg", meaning: "Update the calendar display to show the previous time period.", desc: "Label for control button which changes the range of dates shown in" + "the calendar to the previous range of dates."});
    },
    /*material_datepicker__date_range_editor.DateRangeEditorComponent.navigateNextMsg*/get navigateNextMsg() {
      return intl$.Intl.message("Next date range", {name: "navigateNextMsg", meaning: "Update the calendar display to show the next time period", desc: "Label for control button which changes the range of dates shown in" + "the calendar to the next range of dates."});
    },
    /*material_datepicker__date_range_editor.DateRangeEditorComponent.clearRangeMsg*/get clearRangeMsg() {
      return intl$.Intl.message("Clear date range", {name: "DateRangeEditorComponent_clearRangeMsg", meaning: "Clear the current range.", desc: "Label for an option in the preset list at the left which " + "clears the current selection."});
    },
    /*material_datepicker__date_range_editor.DateRangeEditorComponent.customRangeMsg*/get customRangeMsg() {
      return intl$.Intl.message("Custom", {name: "DateRangeEditorComponent_customRangeMsg", meaning: "Replace the current range with a Custom range that has the " + "same endpoints.", desc: "Label for an option in the preset list at the left which " + "replaces the current selection with a \"Custom\" range."});
    },
    /*material_datepicker__date_range_editor.DateRangeEditorComponent.daysToTodayMsg*/get daysToTodayMsg() {
      return intl$.Intl.message("days up to today", {name: "daysToTodayMsg", desc: "Label for number input which changes the range of dates shown in" + " the calendar to [today - number, today]."});
    },
    /*material_datepicker__date_range_editor.DateRangeEditorComponent.daysToYesterdayMsg*/get daysToYesterdayMsg() {
      return intl$.Intl.message("days up to yesterday", {name: "daysToYesterdayMsg", desc: "Label for number input which changes the range of dates shown in" + " the calendar to [yesterday - number, yesterday]."});
    },
    /*material_datepicker__date_range_editor.DateRangeEditorComponent.rangeDisabledTooltip*/get rangeDisabledTooltip() {
      return intl$.Intl.message("No days available", {name: "DateRangeEditorComponent_rangeDisabledTooltip", desc: "Message that explains why a date range is invalid."});
    }
  });
  material_datepicker__date_range_editor.DateRangeEditorHost = class DateRangeEditorHost extends core.Object {};
  (material_datepicker__date_range_editor.DateRangeEditorHost.new = function() {
  }).prototype = material_datepicker__date_range_editor.DateRangeEditorHost.prototype;
  dart.addTypeTests(material_datepicker__date_range_editor.DateRangeEditorHost);
  material_datepicker__date_range_editor.DateRangeEditorNextPrevModel = class DateRangeEditorNextPrevModel extends core.Object {
    get onNext() {
      return this[onNext$];
    }
    set onNext(value) {
      super.onNext = value;
    }
    get onPrev() {
      return this[onPrev$];
    }
    set onPrev(value) {
      super.onPrev = value;
    }
    get hasNext() {
      return this[hasNext];
    }
    set hasNext(value) {
      this[hasNext] = value;
    }
    get hasPrev() {
      return this[hasPrev];
    }
    set hasPrev(value) {
      this[hasPrev] = value;
    }
    next() {
      return this.onNext();
    }
    prev() {
      return this.onPrev();
    }
    update(visibleMonth, minDate, maxDate) {
      if (visibleMonth == null) return;
      this.hasPrev.value = dart.notNull(material_datepicker__calendar.compareDatesAtResolution(visibleMonth, minDate, material_datepicker__calendar.CalendarResolution.months)) > 0;
      this.hasNext.value = dart.notNull(material_datepicker__calendar.compareDatesAtResolution(visibleMonth, maxDate, material_datepicker__calendar.CalendarResolution.months)) < 0;
    }
  };
  (material_datepicker__date_range_editor.DateRangeEditorNextPrevModel.new = function(opts) {
    let onNext = opts && 'onNext' in opts ? opts.onNext : null;
    let onPrev = opts && 'onPrev' in opts ? opts.onPrev : null;
    this[hasNext] = new (ObservableReferenceOfbool()).new(false);
    this[hasPrev] = new (ObservableReferenceOfbool()).new(false);
    this[onNext$] = onNext;
    this[onPrev$] = onPrev;
  }).prototype = material_datepicker__date_range_editor.DateRangeEditorNextPrevModel.prototype;
  dart.addTypeTests(material_datepicker__date_range_editor.DateRangeEditorNextPrevModel);
  const onNext$ = Symbol("DateRangeEditorNextPrevModel.onNext");
  const onPrev$ = Symbol("DateRangeEditorNextPrevModel.onPrev");
  const hasNext = Symbol("DateRangeEditorNextPrevModel.hasNext");
  const hasPrev = Symbol("DateRangeEditorNextPrevModel.hasPrev");
  material_datepicker__date_range_editor.DateRangeEditorNextPrevModel[dart.implements] = () => [src__material_datepicker__sequential.Sequential];
  dart.setMethodSignature(material_datepicker__date_range_editor.DateRangeEditorNextPrevModel, () => ({
    __proto__: dart.getMethods(material_datepicker__date_range_editor.DateRangeEditorNextPrevModel.__proto__),
    next: dart.fnType(dart.void, []),
    prev: dart.fnType(dart.void, []),
    update: dart.fnType(dart.void, [model__date__date.Date, model__date__date.Date, model__date__date.Date])
  }));
  dart.setFieldSignature(material_datepicker__date_range_editor.DateRangeEditorNextPrevModel, () => ({
    __proto__: dart.getFields(material_datepicker__date_range_editor.DateRangeEditorNextPrevModel.__proto__),
    onNext: dart.finalFieldType(VoidTovoid()),
    onPrev: dart.finalFieldType(VoidTovoid()),
    hasNext: dart.fieldType(ObservableReferenceOfbool()),
    hasPrev: dart.fieldType(ObservableReferenceOfbool())
  }));
  dart.trackLibraries("packages/angular_components/material_datepicker/date_range_editor.ddc", {
    "package:angular_components/material_datepicker/date_range_editor.dart": material_datepicker__date_range_editor
  }, '{"version":3,"sourceRoot":"","sources":["date_range_editor.dart"],"names":[],"mappings":"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","file":"date_range_editor.ddc.js"}');
  // Exports:
  return {
    material_datepicker__date_range_editor: material_datepicker__date_range_editor
  };
});

//# sourceMappingURL=date_range_editor.ddc.js.map
