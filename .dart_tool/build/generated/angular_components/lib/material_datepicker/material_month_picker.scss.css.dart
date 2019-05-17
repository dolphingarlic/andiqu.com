library asset_angular_components_lib_material_datepicker_material_month_picker.scss.css.dart;


final List<dynamic> styles = [':host {\n  display: flex;\n  flex-direction: column;\n}\n:host ::ng-deep ::-webkit-scrollbar {\n  background-color: rgba(0, 0, 0, 0);\n  height: 4px;\n  width: 4px;\n}\n:host ::ng-deep ::-webkit-scrollbar:hover {\n  background-color: rgba(0, 0, 0, 0.12);\n}\n:host ::ng-deep ::-webkit-scrollbar-thumb {\n  background-color: rgba(0, 0, 0, 0.26);\n  min-height: 48px;\n  min-width: 48px;\n}\n:host ::ng-deep ::-webkit-scrollbar-thumb:hover {\n  background-color: #4285f4;\n}\n:host ::ng-deep ::-webkit-scrollbar-button {\n  width: 0;\n  height: 0;\n}\n\n.scroll-container {\n  flex-grow: 1;\n  position: relative;\n  overflow-x: hidden;\n  overflow-y: auto;\n  width: 260px;\n  will-change: transform;\n}\n\n.calendar-container {\n  user-select: none;\n  position: absolute;\n  top: 0;\n  /*! @noflip */\n  left: 0;\n  width: 252px;\n  line-height: 36px;\n  text-transform: uppercase;\n  font-size: 13px;\n}\n\n.calendar-container ::ng-deep .year {\n  width: 252px;\n  height: 144px;\n}\n.calendar-container ::ng-deep .year-title {\n  position: relative;\n  height: 36px;\n  padding-left: 16px;\n  font-size: 13px;\n  color: rgba(0, 0, 0, 0.54);\n  margin: 0;\n}\n.calendar-container ::ng-deep .year-title.highlight::before {\n  display: block;\n  position: absolute;\n  content: "";\n  top: 2px;\n  left: 0;\n  right: 0;\n  bottom: 2px;\n  z-index: -2;\n  background: #c6dafc;\n}\n.calendar-container ::ng-deep .month {\n  display: inline-block;\n  position: relative;\n  width: 63px;\n  height: 36px;\n  text-align: center;\n  cursor: pointer;\n  color: rgba(0, 0, 0, 0.87);\n}\n.calendar-container ::ng-deep .month::before, .calendar-container ::ng-deep .month::after {\n  display: block;\n  position: absolute;\n  overflow: hidden;\n  box-sizing: border-box;\n  contain: strict;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n.calendar-container ::ng-deep .month.disabled {\n  pointer-events: none;\n  color: rgba(0, 0, 0, 0.38);\n}\n.calendar-container ::ng-deep .month.boundary:not(.hover) {\n  color: #fff;\n}\n.calendar-container ::ng-deep .month.boundary.start::before {\n  left: 50%;\n}\n.calendar-container ::ng-deep .month.boundary.end::before {\n  right: 50%;\n}\n.calendar-container ::ng-deep .month.boundary.left::before {\n  left: 0;\n  border-left-style: solid;\n}\n.calendar-container ::ng-deep .month.boundary.right::before {\n  right: 0;\n  border-right-style: solid;\n}\n.calendar-container ::ng-deep .month.highlight::before {\n  content: "";\n  top: 2px;\n  left: 0;\n  right: 0;\n  bottom: 2px;\n  z-index: -2;\n  background: #c6dafc;\n}\n.calendar-container ::ng-deep .month.hover::after, .calendar-container ::ng-deep .month.today::after, .calendar-container ::ng-deep .month.boundary::after {\n  content: "";\n  top: 2px;\n  left: 2px;\n  right: 2px;\n  bottom: 2px;\n  border-radius: 18px;\n  z-index: -1;\n}\n.calendar-container ::ng-deep .month.boundary::after {\n  background: #3367d6;\n}\n.calendar-container ::ng-deep .month.hover::after {\n  background: #eeeeee;\n}\n'];
