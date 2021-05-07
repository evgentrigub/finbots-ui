(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /Users/e.trigubov/Documents/Programming/Projects/FinBots/finbots-front/src/main.ts */
      "zUnb");
      /***/
    },

    /***/
    "0ri0":
    /*!************************************************!*\
      !*** ./src/app/services/user-stats.service.ts ***!
      \************************************************/

    /*! exports provided: UserStatsService */

    /***/
    function ri0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserStatsService", function () {
        return UserStatsService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _models_enums__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../models/enums */
      "2pNN");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var UserStatsService = /*#__PURE__*/function () {
        function UserStatsService(http) {
          _classCallCheck(this, UserStatsService);

          this.http = http;
          this.loaded = false;
          this.stats$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({
            profit: 0,
            account: 0,
            robotQuantity: 0,
            riskType: _models_enums__WEBPACK_IMPORTED_MODULE_3__["InvestorTypeCharacter"].Guaranteed
          });
        }
        /**
         * запрашивает статистику по пользователю и кеширует её
         * @param id пользователя
         */


        _createClass(UserStatsService, [{
          key: "getStatsById",
          value: function getStatsById(id) {
            var _this = this;

            // return this.http.get<StatsView>(`${environment.apiUrl}/users/stat/${id}`)
            // if (!this.loaded) {
            return this.reloadedStats(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (r) {
              return _this.stats$;
            })); // }
            // return this.stats$;
          }
        }, {
          key: "reloadedStats",
          value: function reloadedStats(id) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])({
              profit: 0,
              account: 0,
              robotQuantity: 0,
              riskType: _models_enums__WEBPACK_IMPORTED_MODULE_3__["InvestorTypeCharacter"].Guaranteed
            }); // return this.http.get<StatsView>(`${environment.apiUrl}/users/stat/${id}`).pipe(
            //   catchError(this.handleError),
            //   tap(response => {
            //     this.stats$.next(response);
            //     this.loaded = true;
            //   })
            // );
          }
        }, {
          key: "handleError",
          value: function handleError(error) {
            var msg;

            if (error.error instanceof ErrorEvent) {
              msg = 'Произошла ошибка:' + error.error.message;
            } else {
              msg = "\u041F\u0440\u043E\u0438\u0437\u043E\u0448\u043B\u0430 \u043E\u0448\u0438\u0431\u043A\u0430: ".concat(error.error, ". \u041A\u043E\u0434 \u043E\u0448\u0438\u0431\u043A\u0438 ").concat(error.status);
            }

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(msg);
          }
        }]);

        return UserStatsService;
      }();

      UserStatsService.ɵfac = function UserStatsService_Factory(t) {
        return new (t || UserStatsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]));
      };

      UserStatsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: UserStatsService,
        factory: UserStatsService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserStatsService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "1Out":
    /*!***************************************************************!*\
      !*** ./src/app/components/table-bots/table-bots.component.ts ***!
      \***************************************************************/

    /*! exports provided: TableBotsComponent */

    /***/
    function Out(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TableBotsComponent", function () {
        return TableBotsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _bot_stats_dialog_bot_stats_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./bot-stats-dialog/bot-stats-dialog.component */
      "ppb4");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/table */
      "+0xr");
      /* harmony import */


      var src_app_services_trading_bots_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/trading-bots.service */
      "piiH");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      "Xa2L");
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/tooltip */
      "Qu3c");

      function TableBotsComponent_mat_progress_spinner_39_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-progress-spinner", 22);
        }
      }

      function TableBotsComponent_th_42_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u2116");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function TableBotsComponent_td_43_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r16 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r16 + 1);
        }
      }

      function TableBotsComponent_th_45_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0421\u0442\u0440\u0430\u0442\u0435\u0433\u0438\u044F");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function TableBotsComponent_td_46_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r17 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r17.ticker);
        }
      }

      function TableBotsComponent_th_48_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0421\u0442\u0440\u0430\u0442\u0435\u0433\u0438\u044F");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function TableBotsComponent_td_49_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r18 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r18.strategy);
        }
      }

      function TableBotsComponent_th_51_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0412\u0440\u0435\u043C\u044F \u0440\u0430\u0431\u043E\u0442\u044B");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function TableBotsComponent_td_52_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r19 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r19.workedTime);
        }
      }

      function TableBotsComponent_th_54_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0414\u043E\u0445\u043E\u0434\u043D\u043E\u0441\u0442\u044C");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function TableBotsComponent_td_55_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r20 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", row_r20.profit, "%");
        }
      }

      function TableBotsComponent_th_57_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u044F");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function TableBotsComponent_td_58_mat_icon_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableBotsComponent_td_58_mat_icon_1_Template_mat_icon_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26);

            var row_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

            var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r24.stopBot(row_r21);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " pause_circle_filled ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function TableBotsComponent_td_58_mat_icon_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableBotsComponent_td_58_mat_icon_2_Template_mat_icon_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29);

            var row_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

            var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r27.stopBot(row_r21);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " play_circle_filled ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function TableBotsComponent_td_58_Template(rf, ctx) {
        if (rf & 1) {
          var _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TableBotsComponent_td_58_mat_icon_1_Template, 2, 0, "mat-icon", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TableBotsComponent_td_58_mat_icon_2_Template, 2, 0, "mat-icon", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableBotsComponent_td_58_Template_mat_icon_click_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31);

            var row_r21 = ctx.$implicit;

            var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r30["delete"](row_r21);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " delete ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableBotsComponent_td_58_Template_mat_icon_click_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31);

            var row_r21 = ctx.$implicit;

            var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r32.openDialog(row_r21);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " reorder ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r21 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", row_r21.isActive);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !row_r21.isActive);
        }
      }

      function TableBotsComponent_tr_59_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 31);
        }
      }

      function TableBotsComponent_tr_60_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 32);
        }
      }

      var TableBotsComponent = /*#__PURE__*/function () {
        function TableBotsComponent(tradingBotsService, snackBar, dialog) {
          _classCallCheck(this, TableBotsComponent);

          this.tradingBotsService = tradingBotsService;
          this.snackBar = snackBar;
          this.dialog = dialog;
          this.displayedColumns = ['id', 'ticker', 'strategy', 'timeframe', 'profit', 'actions'];
          this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"]();
          this.isLoading = true;
        }

        _createClass(TableBotsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getRobots();
          }
        }, {
          key: "getRobots",
          value: function getRobots() {
            var _this2 = this;

            this.tradingBotsService.getUserRobots().subscribe(function (bots) {
              console.log("🚀 ~ file: table-bots.component.ts ~ line 28 ~ TableBotsComponent ~ this.tradingBotsService.getUserRobots ~ bots", bots);
              _this2.dataSource.data = bots;
              _this2.isLoading = false;
            });
          }
        }, {
          key: "stopBot",
          value: function stopBot(bot) {
            var _this3 = this;

            bot.isActive = !bot.isActive;
            this.tradingBotsService.updateRobotData(bot).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (_) {
              bot.isActive === false ? _this3.showMessage('Отправлен запрос на остановку бота') : _this3.showMessage('Отправлен запрос на запуск бота');
            }, function (err) {
              return _this3.showMessage(err);
            })).subscribe();
          }
        }, {
          key: "delete",
          value: function _delete(bot) {
            this.tradingBotsService.deleteRobotData(bot).subscribe();
            this.getRobots();
          }
        }, {
          key: "openDialog",
          value: function openDialog(row) {
            var dialogRef = this.dialog.open(_bot_stats_dialog_bot_stats_dialog_component__WEBPACK_IMPORTED_MODULE_1__["BotStatsDialogComponent"], {
              panelClass: 'dialog',
              width: '500px',
              height: '500px',
              data: row,
              disableClose: true
            });
            dialogRef.backdropClick().subscribe(function (result) {
              if (confirm('Закрыть окно?')) {
                dialogRef.close();
              }
            });
          }
        }, {
          key: "showMessage",
          value: function showMessage(msg) {
            this.snackBar.open(msg, undefined, {
              duration: 2000
            });
          }
        }]);

        return TableBotsComponent;
      }();

      TableBotsComponent.ɵfac = function TableBotsComponent_Factory(t) {
        return new (t || TableBotsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_trading_bots_service__WEBPACK_IMPORTED_MODULE_4__["TradingBotsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]));
      };

      TableBotsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: TableBotsComponent,
        selectors: [["app-table-bots"]],
        decls: 61,
        vars: 4,
        consts: [[2, "margin", "20px"], [2, "font-size", "24px"], [2, "font-size", "16px"], [2, "color", "black"], [2, "display", "inline-flex", "margin-top", "1em"], [1, "btn-accent", 2, "margin-left", "1em"], [2, "display", "inline-flex", "margin-top", "1em", "margin-right", "1em"], [1, "btn-usual", 2, "margin-left", "1em"], [2, "display", "inline-flex"], [1, "btn-warn", 2, "margin-left", "1em"], ["class", "example-margin", "color", "primary", "mode", "indeterminate", 4, "ngIf"], ["mat-table", "", "matSort", "", 1, "dashboard-card", 3, "dataSource"], ["matColumnDef", "id"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "ticker"], ["matColumnDef", "strategy"], ["matColumnDef", "timeframe"], ["matColumnDef", "profit"], ["matColumnDef", "actions"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["color", "primary", "mode", "indeterminate", 1, "example-margin"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["class", "btn-usual", "style", "margin-right:1em", "matTooltip", "\u041E\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C \u0442\u043E\u0440\u0433\u043E\u0432\u043B\u044E", "matTooltipPosition", "left", 3, "click", 4, "ngIf"], ["class", "btn-usual", "style", "margin-right:1em", "matTooltip", "\u0412\u043E\u0437\u043E\u0431\u043D\u043E\u0432\u0438\u0442\u044C \u0442\u043E\u0440\u0433\u043E\u0432\u043B\u044E", "matTooltipPosition", "left", 3, "click", 4, "ngIf"], ["matTooltip", "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0440\u043E\u0431\u043E\u0442\u0430", 1, "btn-warn", 2, "margin-right", "1em", 3, "click"], ["matTooltip", "\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u043E \u0440\u043E\u0431\u043E\u0442\u0435", "matTooltipPosition", "right", 1, "btn-accent", 3, "click"], ["matTooltip", "\u041E\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C \u0442\u043E\u0440\u0433\u043E\u0432\u043B\u044E", "matTooltipPosition", "left", 1, "btn-usual", 2, "margin-right", "1em", 3, "click"], ["matTooltip", "\u0412\u043E\u0437\u043E\u0431\u043D\u043E\u0432\u0438\u0442\u044C \u0442\u043E\u0440\u0433\u043E\u0432\u043B\u044E", "matTooltipPosition", "left", 1, "btn-usual", 2, "margin-right", "1em", 3, "click"], ["mat-header-row", ""], ["mat-row", ""]],
        template: function TableBotsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-title", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " \u0422\u043E\u0440\u0433\u043E\u0432\u044B\u0435 \u0440\u043E\u0431\u043E\u0442\u044B ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-subtitle", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " \u0412 \u044D\u0442\u043E\u0439 \u0442\u0430\u0431\u043B\u0438\u0446\u0435 \u043D\u0430\u0445\u043E\u0434\u044F\u0442\u0441\u044F \u0432\u0441\u0435 \u0412\u0430\u0448\u0438 \u0442\u043E\u0440\u0433\u043E\u0432\u044B\u0435 \u0440\u043E\u0431\u043E\u0442\u044B \u0441 \u043A\u0440\u0430\u0442\u043A\u043E\u0439 \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u043E\u0439. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043D\u043E\u0432\u043E\u0433\u043E \u0440\u043E\u0431\u043E\u0442\u0430 \u043C\u043E\u0436\u043D\u043E \u0432 \u043F\u0443\u043D\u043A\u0442\u0435 \"\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0440\u043E\u0431\u043E\u0442\u0430\" \u0432 \u043B\u0435\u0432\u043E\u0439 \u0432\u043A\u043B\u0430\u0434\u043A\u0435 \u043D\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u0438. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " \u0412 \u0442\u0430\u0431\u043B\u0438\u0446\u0435 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u044B \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " \u043F\u043E \u043A\u043B\u0438\u043A\u0443 \u043D\u0430 \u0440\u0430\u0431\u043E\u0442\u0430 \u0432\u044B \u043E\u0442\u043A\u0440\u043E\u0435\u0442\u0435 \u043F\u043E\u0434\u0440\u043E\u0431\u043D\u043E\u0435 \u043E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u0438 \u0441\u0442\u0430\u0442\u0438c\u0442\u0438\u043A\u0443 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-icon", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "reorder");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\u043F\u0440\u0438\u043E\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C \u0442\u043E\u0440\u0433\u043E\u0432\u043B\u044E \u0440\u043E\u0431\u043E\u0442\u0430");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-icon", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "pause_circle_filled");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "\u0438 \u0432\u0435\u0440\u043D\u0443\u0442\u044C \u043E\u0431\u0440\u0430\u0442\u043D\u043E \u0432 \u0442\u043E\u0440\u0433\u043E\u0432\u043B\u044E");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-icon", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "play_circle_filled");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "\u0443\u0434\u0430\u043B\u0438\u0442\u044C \u0440\u043E\u0431\u043E\u0442\u0430");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-icon", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "delete");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, TableBotsComponent_mat_progress_spinner_39_Template, 1, 0, "mat-progress-spinner", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "table", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](41, 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, TableBotsComponent_th_42_Template, 2, 0, "th", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, TableBotsComponent_td_43_Template, 2, 1, "td", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](44, 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, TableBotsComponent_th_45_Template, 2, 0, "th", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, TableBotsComponent_td_46_Template, 2, 1, "td", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](47, 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, TableBotsComponent_th_48_Template, 2, 0, "th", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, TableBotsComponent_td_49_Template, 2, 1, "td", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](50, 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, TableBotsComponent_th_51_Template, 2, 0, "th", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, TableBotsComponent_td_52_Template, 2, 1, "td", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](53, 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](54, TableBotsComponent_th_54_Template, 2, 0, "th", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, TableBotsComponent_td_55_Template, 2, 1, "td", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](56, 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](57, TableBotsComponent_th_57_Template, 2, 0, "th", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](58, TableBotsComponent_td_58_Template, 7, 2, "td", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](59, TableBotsComponent_tr_59_Template, 1, 0, "tr", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](60, TableBotsComponent_tr_60_Template, 1, 0, "tr", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
          }
        },
        directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardSubtitle"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardContent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRowDef"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__["MatProgressSpinner"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCell"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__["MatTooltip"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRow"]],
        styles: [".dashboard-card[_ngcontent-%COMP%] {\n  width: 95%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYmxlLWJvdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQVU7QUFDWiIsImZpbGUiOiJ0YWJsZS1ib3RzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGFzaGJvYXJkLWNhcmQge1xuICB3aWR0aDogOTUlO1xufVxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TableBotsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-table-bots',
            templateUrl: './table-bots.component.html',
            styleUrls: ['./table-bots.component.css']
          }]
        }], function () {
          return [{
            type: src_app_services_trading_bots_service__WEBPACK_IMPORTED_MODULE_4__["TradingBotsService"]
          }, {
            type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "1ft5":
    /*!*************************************************************!*\
      !*** ./src/app/components/account/about/about.component.ts ***!
      \*************************************************************/

    /*! exports provided: AboutComponent */

    /***/
    function ft5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AboutComponent", function () {
        return AboutComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AboutComponent = /*#__PURE__*/function () {
        function AboutComponent() {
          _classCallCheck(this, AboutComponent);
        }

        _createClass(AboutComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AboutComponent;
      }();

      AboutComponent.ɵfac = function AboutComponent_Factory(t) {
        return new (t || AboutComponent)();
      };

      AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AboutComponent,
        selectors: [["app-about"]],
        decls: 6,
        vars: 0,
        consts: [[1, "jumbotron"], [1, "container"], [1, "row"], [1, "col-sm-6", "offset-sm-3"]],
        template: function AboutComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u0417\u0434\u0435\u0441\u044C \u0431\u0443\u0434\u0435\u0442 \u043E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u043F\u0440\u043E\u0435\u043A\u0442\u0430");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhYm91dC5jb21wb25lbnQuY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-about',
            templateUrl: './about.component.html',
            styleUrls: ['./about.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "2AUz":
    /*!***********************************************************************!*\
      !*** ./src/app/components/navigation-bar/navigation-bar.component.ts ***!
      \***********************************************************************/

    /*! exports provided: NavigationBarComponent */

    /***/
    function AUz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavigationBarComponent", function () {
        return NavigationBarComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/cdk/layout */
      "0MNC");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/authentication.service */
      "ej43");
      /* harmony import */


      var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/sidenav */
      "XhcP");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "/t3+");
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/list */
      "MutI");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/badge */
      "TU8p");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/menu */
      "STbY");

      function NavigationBarComponent_mat_sidenav_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-sidenav", 4, 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-toolbar", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u041C\u0435\u043D\u044E");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-nav-list");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u041F\u0430\u043D\u0435\u043B\u044C");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u0412\u0441\u0435 \u0440\u043E\u0431\u043E\u0442\u044B");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0440\u043E\u0431\u043E\u0442\u0430");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mode", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 5, ctx_r0.isHandset$) ? "over" : "side")("opened", !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 7, ctx_r0.isHandset$));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("role", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 3, ctx_r0.isHandset$) ? "dialog" : "navigation");
        }
      }

      function NavigationBarComponent_mat_toolbar_3_button_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationBarComponent_mat_toolbar_3_button_1_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r6.drawer.toggle();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "menu");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function NavigationBarComponent_mat_toolbar_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NavigationBarComponent_mat_toolbar_3_button_1_Template, 3, 0, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u0414\u043E\u0431\u0440\u043E \u043F\u043E\u0436\u0430\u043B\u043E\u0432\u0430\u0442\u044C!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "notifications");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-icon", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "verified_user");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-menu", 16, 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationBarComponent_mat_toolbar_3_Template_button_click_16_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r8.logout();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\u0412\u044B\u0445\u043E\u0434");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 4, ctx_r1.isHandset$));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.currentUser.email);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("overlapTrigger", false);
        }
      }

      function NavigationBarComponent_mat_toolbar_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "FinBots MVP");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u041E \u043F\u0440\u043E\u0435\u043A\u0442\u0435");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u0412\u043E\u0439\u0442\u0438");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var _c0 = ["*"];

      var NavigationBarComponent = /*#__PURE__*/function () {
        function NavigationBarComponent(breakpointObserver, router, authenticationService) {
          var _this4 = this;

          _classCallCheck(this, NavigationBarComponent);

          this.breakpointObserver = breakpointObserver;
          this.router = router;
          this.authenticationService = authenticationService;
          this.isShow = true;
          this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Handset).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) {
            return result.matches;
          }));
          this.currentUserSubscription = this.authenticationService.$currentUser.subscribe(function (user) {
            _this4.isShow = !!user;
            _this4.currentUser = user;
          });
        }

        _createClass(NavigationBarComponent, [{
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.currentUserSubscription.unsubscribe();
          }
        }, {
          key: "logout",
          value: function logout() {
            this.authenticationService.logout();
            this.router.navigate(['/login']);
          }
        }]);

        return NavigationBarComponent;
      }();

      NavigationBarComponent.ɵfac = function NavigationBarComponent_Factory(t) {
        return new (t || NavigationBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]));
      };

      NavigationBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NavigationBarComponent,
        selectors: [["app-navigation-bar"]],
        ngContentSelectors: _c0,
        decls: 6,
        vars: 3,
        consts: [[1, "sidenav-container"], ["class", "sidenav", "fixedInViewport", "true", 3, "mode", "opened", 4, "ngIf"], ["color", "primary", "class", "fixed-toolbar", 4, "ngIf"], [4, "ngIf"], ["fixedInViewport", "true", 1, "sidenav", 3, "mode", "opened"], ["drawer", ""], ["color", "primary"], ["mat-list-item", "", "routerLink", "/dashboard"], ["mat-list-item", "", "routerLink", "/table"], ["mat-list-item", "", "routerLink", "/create"], ["color", "primary", 1, "fixed-toolbar"], ["type", "button", "aria-label", "Toggle sidenav", "mat-icon-button", "", 3, "click", 4, "ngIf"], [2, "flex", "1 1 auto"], ["matBadge", "10", "matBadgeColor", "warn"], [2, "margin-left", "1%"], ["mat-button", "", 2, "margin-left", "1%", 3, "matMenuTriggerFor"], [3, "overlapTrigger"], ["menu", "matMenu"], ["mat-menu-item", "", "routerLink", "/settings"], ["mat-menu-item", "", 3, "click"], ["type", "button", "aria-label", "Toggle sidenav", "mat-icon-button", "", 3, "click"], ["aria-label", "Side nav toggle icon"], ["mat-button", "", "routerLink", "/about", 2, "margin-left", "1%"], ["mat-button", "", "routerLink", "/login", 2, "margin-left", "1%"], ["mat-button", "", "routerLink", "/register", 2, "margin-left", "1%"]],
        template: function NavigationBarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-sidenav-container", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NavigationBarComponent_mat_sidenav_1_Template, 14, 9, "mat-sidenav", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-sidenav-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NavigationBarComponent_mat_toolbar_3_Template, 18, 6, "mat-toolbar", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NavigationBarComponent_mat_toolbar_4_Template, 9, 0, "mat-toolbar", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isShow);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isShow);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isShow);
          }
        },
        directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenavContainer"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenavContent"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenav"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbar"], _angular_material_list__WEBPACK_IMPORTED_MODULE_8__["MatNavList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_8__["MatListItem"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__["MatBadge"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MatMenuItem"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]],
        styles: [".sidenav-container[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.sidenav[_ngcontent-%COMP%] {\n  width: 200px;\n}\n\n.mat-toolbar.mat-primary[_ngcontent-%COMP%] {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n}\n\n.fixed-toolbar[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmlnYXRpb24tYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx3QkFBZ0I7RUFBaEIsZ0JBQWdCO0VBQ2hCLE1BQU07QUFDUjs7QUFFQTtFQUNFLGVBQWU7RUFDZixVQUFVO0FBQ1oiLCJmaWxlIjoibmF2aWdhdGlvbi1iYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaWRlbmF2LWNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnNpZGVuYXYge1xuICB3aWR0aDogMjAwcHg7XG59XG5cbi5tYXQtdG9vbGJhci5tYXQtcHJpbWFyeSB7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMDtcbn1cblxuLmZpeGVkLXRvb2xiYXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDI7XG59XG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavigationBarComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-navigation-bar',
            templateUrl: './navigation-bar.component.html',
            styleUrls: ['./navigation-bar.component.css']
          }]
        }], function () {
          return [{
            type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }, {
            type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "2hxB":
    /*!********************************!*\
      !*** ./src/app/models/user.ts ***!
      \********************************/

    /*! exports provided: User */

    /***/
    function hxB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "User", function () {
        return User;
      });

      var User = function User() {
        _classCallCheck(this, User);
      };

      ;
      ;
      /***/
    },

    /***/
    "2pNN":
    /*!*********************************!*\
      !*** ./src/app/models/enums.ts ***!
      \*********************************/

    /*! exports provided: InvestorTypeCharacter, FinancialInstrument */

    /***/
    function pNN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InvestorTypeCharacter", function () {
        return InvestorTypeCharacter;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FinancialInstrument", function () {
        return FinancialInstrument;
      }); // export enum Industry {
      //   IT = 1,
      //   Medicine = 2,
      //   Transport = 3,
      //   RealEstate = 4,
      //   Consumption = 5,
      //   Finance = 6,
      //   Energy = 7,
      //   RawMaterial = 8,
      //   ElecticPower = 9,
      //   Telecommunication = 10,
      // }


      var InvestorTypeCharacter;

      (function (InvestorTypeCharacter) {
        InvestorTypeCharacter[InvestorTypeCharacter["Guaranteed"] = 5] = "Guaranteed";
        InvestorTypeCharacter[InvestorTypeCharacter["Conservative"] = 10] = "Conservative";
        InvestorTypeCharacter[InvestorTypeCharacter["Moderate"] = 15] = "Moderate";
        InvestorTypeCharacter[InvestorTypeCharacter["Growth"] = 20] = "Growth";
        InvestorTypeCharacter[InvestorTypeCharacter["AggressiveGrowth"] = 25] = "AggressiveGrowth";
        InvestorTypeCharacter[InvestorTypeCharacter["MaximumGrowth"] = 40] = "MaximumGrowth";
      })(InvestorTypeCharacter || (InvestorTypeCharacter = {}));

      var FinancialInstrument;

      (function (FinancialInstrument) {
        FinancialInstrument["Forex"] = "Forex";
        FinancialInstrument["Stock"] = "Stock";
      })(FinancialInstrument || (FinancialInstrument = {}));
      /***/

    },

    /***/
    "7HRS":
    /*!************************************!*\
      !*** ./src/app/models/strategy.ts ***!
      \************************************/

    /*! exports provided: StrategyList */

    /***/
    function HRS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StrategyList", function () {
        return StrategyList;
      });
      /**
       * Стратегии торговли
       * Список всех возможный страгтегий
       * (теханализ их источников, собственный теханализ, арбитраж и т.д.)
       */


      var StrategyList;

      (function (StrategyList) {
        StrategyList["simpleTV"] = "simpleTV";
        StrategyList["simpleRaddar"] = "simpleRaddar";
        StrategyList["arbitration"] = "arbitration";
      })(StrategyList || (StrategyList = {}));
      /***/

    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false,
        apiUrl: 'http://localhost:5000/api'
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "KoZ+":
    /*!***************************************************************!*\
      !*** ./src/app/components/create-bot/create-bot.component.ts ***!
      \***************************************************************/

    /*! exports provided: CreateBotComponent */

    /***/
    function KoZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CreateBotComponent", function () {
        return CreateBotComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _models_enums__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../models/enums */
      "2pNN");
      /* harmony import */


      var _create_bot_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./create-bot.service */
      "rmXB");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../services/authentication.service */
      "ej43");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/stepper */
      "xHqg");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");

      function CreateBotComponent_ng_template_31_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\u0424\u0438\u043D\u0430\u043D\u0441\u043E\u0432\u044B\u0439 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442 \u0438 \u0441\u0442\u0440\u0430\u0442\u0435\u0433\u0438\u044F \u0431\u043E\u0442\u0430");
        }
      }

      function CreateBotComponent_mat_option_35_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var financialInstrument_r7 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", financialInstrument_r7 === "Forex")("value", financialInstrument_r7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", financialInstrument_r7, "");
        }
      }

      function CreateBotComponent_mat_option_38_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ticker_r8 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ticker_r8.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ticker_r8.name);
        }
      }

      function CreateBotComponent_mat_option_41_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var strategy_r9 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", strategy_r9.name === "simpleRaddar")("value", strategy_r9.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", strategy_r9.name, " ");
        }
      }

      function CreateBotComponent_ng_template_49_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\u0424\u043E\u0440\u043C\u0430 \u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u0430");
        }
      }

      function CreateBotComponent_mat_error_53_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u041A\u043D\u043E\u043F\u043A\u0430 \u043D\u0435\u0430\u043A\u0442\u0438\u0432\u043D\u0430. \u0417\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435 \u0432\u0441\u0435 \u043F\u043E\u043B\u044F. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var CreateBotComponent = /*#__PURE__*/function () {
        function CreateBotComponent(service, formBuilder, snackBar, authenticationService) {
          var _this5 = this;

          _classCallCheck(this, CreateBotComponent);

          this.service = service;
          this.formBuilder = formBuilder;
          this.snackBar = snackBar;
          this.authenticationService = authenticationService;
          this.financialInstruments = [];
          this.tickers = [];
          this.strategies = [];
          this.strategyControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
          this.instrumentControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
          this.authenticationService.$currentUser.subscribe(function (user) {
            return _this5.currentUser = user;
          });
          this.financialInstruments = this.service.getFinancialInstruments();
          this.tickers = this.service.getSecurities(_models_enums__WEBPACK_IMPORTED_MODULE_2__["FinancialInstrument"].Stock);
          this.strategies = this.service.getStrategies();
          this.instrumentControl = this.formBuilder.control(_models_enums__WEBPACK_IMPORTED_MODULE_2__["FinancialInstrument"].Stock, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
          this.strategyControl = this.formBuilder.control(this.strategies[0].name);
          this.formGroup = this.createBotFormGroup();
        }

        _createClass(CreateBotComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "submitBot",
          value: function submitBot() {
            var _this6 = this;

            var value = this.formGroup.value;
            var newRobot = {
              ticker: value.ticker,
              strategy: value.strategy
            };
            this.service.createBot(newRobot).subscribe(function (_) {
              return _this6.showMessage("\u0417\u0430\u044F\u0432\u043A\u0430 \u043D\u0430 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u0431\u043E\u0442\u0430 ".concat(newRobot.ticker, " \u0443\u0441\u043F\u0435\u0448\u043D\u0430 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0430"));
            }, function (err) {
              return _this6.showMessage(err);
            });
          }
        }, {
          key: "createBotFormGroup",
          value: function createBotFormGroup() {
            return this.formBuilder.group({
              strategy: this.strategyControl,
              instrument: this.instrumentControl,
              ticker: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
            });
          }
        }, {
          key: "showMessage",
          value: function showMessage(msg) {
            this.snackBar.open(msg, undefined, {
              duration: 2000
            });
          }
        }]);

        return CreateBotComponent;
      }();

      CreateBotComponent.ɵfac = function CreateBotComponent_Factory(t) {
        return new (t || CreateBotComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_create_bot_service__WEBPACK_IMPORTED_MODULE_3__["CreateBotService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"]));
      };

      CreateBotComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CreateBotComponent,
        selectors: [["app-create-bot"]],
        decls: 59,
        vars: 6,
        consts: [[2, "margin", "20px"], [2, "font-size", "24px"], [2, "font-size", "16px", "color", "black"], [2, "margin-top", "1em"], [3, "formGroup"], ["linear", "false"], ["stepper", ""], ["matStepLabel", ""], [2, "display", "flex", "flex-wrap", "wrap"], [2, "min-width", "30em", "margin-right", "3em", "margin-bottom", "2em"], ["placeholder", "\u0424\u0438\u043D\u0430\u043D\u0441\u043E\u0432\u044B\u0439 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442", "formControlName", "instrument"], [3, "disabled", "value", 4, "ngFor", "ngForOf"], ["placeholder", "\u0410\u043A\u0442\u0438\u0432", "formControlName", "ticker"], [3, "value", 4, "ngFor", "ngForOf"], [2, "width", "30em", "margin-bottom", "2em"], ["placeholder", "C\u0442\u0440\u0430\u0442\u0435\u0433\u0438\u044F", "formControlName", "strategy"], ["mat-stroked-button", "", "color", "primary", "matStepperPrevious", "", 2, "margin-right", "2em"], ["mat-stroked-button", "", "color", "accent", "matStepperNext", ""], [2, "margin-bottom", "2em"], ["mat-raised-button", "", "color", "accent", 3, "disabled", "click"], [4, "ngIf"], ["mat-stroked-button", "", "color", "warn", 3, "click"], [3, "disabled", "value"], [3, "value"]],
        template: function CreateBotComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-title", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " \u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0440\u043E\u0431\u043E\u0442\u0430 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-subtitle", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " \u041D\u0430 \u044D\u0442\u043E\u0439 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0435 \u0432\u044B \u0441\u043E\u0437\u0434\u0430\u0451\u0442\u0435 \u043D\u043E\u0432\u043E\u0433\u043E \u0440\u043E\u0431\u043E\u0442\u0430. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " \u041D\u0430 \u0442\u0435\u043A\u0443\u0449\u0438\u0439 \u043C\u043E\u043C\u0435\u043D\u0442 \u0438\u0437 \"\u0424\u0438\u043D\u0430\u043D\u0441\u043E\u0432\u044B\u0445 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u043E\u0432\" \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u044B \u0442\u043E\u043B\u044C\u043A\u043E \u0430\u043A\u0446\u0438\u0438. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " \u041D\u0430 \u0432\u0442\u043E\u0440\u043E\u043C, \u0432\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B \u0434\u043E\u0445\u043E\u0434\u043D\u043E\u0441\u0442\u0438 \u0440\u043E\u0431\u043E\u0442\u0430");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " \u0441\u043E\u0433\u043B\u0430\u0441\u043D\u043E \u0432\u0430\u0448\u0435\u043C\u0443 \u0440\u0438\u0441\u043A-\u043F\u0440\u043E\u0444\u0438\u043B\u044E \u0438\u043B\u0438 \u0432\u0440\u0443\u0447\u043D\u0443\u044E. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " \u041D\u0430 \u0442\u0440\u0435\u0442\u044C\u0435\u043C - \u0432\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442 \u0434\u043B\u044F \u0442\u043E\u0440\u0433\u043E\u0432\u043B\u0438.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " \u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u0432\u044B\u0431\u0440\u0430\u0442\u044C \u0430\u043A\u0446\u0438\u0438, \u0432\u0430\u043B\u044E\u0442\u0443 \u0438\u043B\u0438 \u043A\u0440\u0438\u043F\u0442\u043E\u0432\u0430\u043B\u044E\u0442\u0443. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " \u041F\u0440\u0438 \u0432\u044B\u0431\u043E\u0440\u0435 \u0430\u043A\u0446\u0438\u0439, \u043D\u0430\u0434\u043E \u0432\u044B\u0431\u0440\u0430\u0442\u044C \u0435\u0449\u0435 \u0438\u043D\u0434\u0443\u0441\u0442\u0440\u0438\u044E. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " (\u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0435 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0438, \u0444\u0438\u043D\u0430\u043D\u0441\u044B, \u043C\u0435\u0434\u0438\u0446\u0438\u043D\u0430, \u043D\u0434\u0432\u0438\u0436\u0438\u043C\u043E\u0441\u0442\u044C \u0438 \u0442.\u0434.) ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " \u0415\u0441\u043B\u0438 \u0432\u0441\u0435 \u043F\u043E\u043B\u044F \u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u044B, \u0442\u043E \u043F\u043E\u0434\u0432\u0435\u0440\u0434\u0438\u0442\u0435 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F \u0440\u043E\u0431\u043E\u0442\u0430. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " \u0415\u0441\u043B\u0438 \u043D\u0435\u0442, \u0442\u043E \u0434\u043E\u0437\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435 \u0432\u0441\u0435 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u044B\u0435 \u043F\u043E\u043B\u044F. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "form", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-vertical-stepper", 5, 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-step");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, CreateBotComponent_ng_template_31_Template, 1, 0, "ng-template", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-form-field", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-select", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, CreateBotComponent_mat_option_35_Template, 2, 3, "mat-option", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-form-field", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-select", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, CreateBotComponent_mat_option_38_Template, 2, 2, "mat-option", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-form-field", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-select", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, CreateBotComponent_mat_option_41_Template, 2, 3, "mat-option", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "mat-hint");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "button", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "\u041D\u0430\u0437\u0430\u0434");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "button", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "\u0414\u0430\u043B\u0435\u0435");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "mat-step");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, CreateBotComponent_ng_template_49_Template, 1, 0, "ng-template", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "button", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateBotComponent_Template_button_click_51_listener() {
              return ctx.submitBot();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " \u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0440\u043E\u0431\u043E\u0442\u0430 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, CreateBotComponent_mat_error_53_Template, 2, 0, "mat-error", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "button", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "\u041D\u0430\u0437\u0430\u0434");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "button", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateBotComponent_Template_button_click_57_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](29);

              return _r0.reset();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "\u041D\u0430\u0447\u0430\u0442\u044C \u0437\u0430\u043D\u043E\u0432\u043E");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formGroup);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.financialInstruments);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tickers);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.strategies);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.formGroup.valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.formGroup.valid);
          }
        },
        directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_7__["MatVerticalStepper"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_7__["MatStep"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_7__["MatStepLabel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatHint"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_7__["MatStepperPrevious"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_7__["MatStepperNext"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatOption"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatError"]],
        styles: [".mat-radio-button[_ngcontent-%COMP%]    ~ .mat-radio-button[_ngcontent-%COMP%] {\n  margin-left: 16px;\n}\n\n.grid-container[_ngcontent-%COMP%] {\n  margin: 20px;\n}\n\n.dashboard-card[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 15px;\n  left: 15px;\n  right: 15px;\n  bottom: 15px;\n}\n\n.inline[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZS1ib3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsVUFBVTtFQUNWLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkIiLCJmaWxlIjoiY3JlYXRlLWJvdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1yYWRpby1idXR0b24gfiAubWF0LXJhZGlvLWJ1dHRvbiB7XG4gIG1hcmdpbi1sZWZ0OiAxNnB4O1xufVxuXG4uZ3JpZC1jb250YWluZXIge1xuICBtYXJnaW46IDIwcHg7XG59XG5cbi5kYXNoYm9hcmQtY2FyZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxNXB4O1xuICBsZWZ0OiAxNXB4O1xuICByaWdodDogMTVweDtcbiAgYm90dG9tOiAxNXB4O1xufVxuXG4uaW5saW5lIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreateBotComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-create-bot',
            templateUrl: './create-bot.component.html',
            styleUrls: ['./create-bot.component.css']
          }]
        }], function () {
          return [{
            type: _create_bot_service__WEBPACK_IMPORTED_MODULE_3__["CreateBotService"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]
          }, {
            type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "LkZ5":
    /*!*************************************************************!*\
      !*** ./src/app/components/account/login/login.component.ts ***!
      \*************************************************************/

    /*! exports provided: LoginComponent */

    /***/
    function LkZ5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
        return LoginComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/authentication.service */
      "ej43");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      "Xa2L");

      function LoginComponent_div_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " \u0412\u043E\u0439\u0442\u0438 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function LoginComponent_div_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-progress-spinner", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "is-invalid": a0
        };
      };

      var LoginComponent = /*#__PURE__*/function () {
        function LoginComponent(formBuilder, route, router, authenticationService, snackbar) {
          _classCallCheck(this, LoginComponent);

          this.formBuilder = formBuilder;
          this.route = route;
          this.router = router;
          this.authenticationService = authenticationService;
          this.snackbar = snackbar;
          this.hide = true;
          this.valueEmail = '';
          this.loading = false;
          this.submitted = false;

          if (this.authenticationService.currentUserValue) {
            this.router.navigate(['/dashboard']);
          }
        }

        _createClass(LoginComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.loginForm = this.formBuilder.group({
              email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
            });
            this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || 'dashboard';
          }
        }, {
          key: "controls",
          get: function get() {
            return this.loginForm.controls;
          } // TO-DO ошибки добавить в разметку позже

        }, {
          key: "getErrorLogin",
          value: function getErrorLogin() {
            return this.loginForm.get('email').hasError('required') ? 'Email не может быть пустым' : '';
          }
        }, {
          key: "getErrorPassword",
          value: function getErrorPassword() {
            return this.loginForm.get('password').hasError('required') ? 'Пароль не может быть пустым' : '';
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this7 = this;

            this.submitted = true;

            if (this.loginForm.invalid) {
              return;
            }

            this.loading = true; // setTimeout(() => {

            this.authenticationService.login(this.loginForm.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])()).subscribe(function () {
              _this7.loading = false;

              _this7.router.navigate([_this7.returnUrl]);

              _this7.showMessage('Вход успешно выполнен');
            }, function (error) {
              _this7.showErrorMessage(error);

              _this7.loading = false;
            }); // }, 1500);
          }
        }, {
          key: "forgetPassword",
          value: function forgetPassword() {
            this.showMessage('Функция пока не доступна');
          }
        }, {
          key: "showErrorMessage",
          value: function showErrorMessage(httpError) {
            var _this8 = this;

            console.log("🚀 ~ file: login.component.ts ~ line 90 ~ LoginComponent ~ showErrorMessage ~ message.error", httpError);

            if (httpError.error.array && httpError.error.array.length) {
              var arr = httpError.error.array;
              arr.forEach(function (el) {
                _this8.snackbar.open(el.msg, 'OK', {
                  duration: 6000
                });
              });
            } else {
              this.snackbar.open(httpError.error.msg, 'OK', {
                duration: 6000
              });
            }
          }
        }, {
          key: "showMessage",
          value: function showMessage(message) {
            this.snackbar.open(message, 'OK', {
              duration: 3000
            }); // console.log(message);
          }
        }]);

        return LoginComponent;
      }();

      LoginComponent.ɵfac = function LoginComponent_Factory(t) {
        return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]));
      };

      LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: LoginComponent,
        selectors: [["app-login"]],
        decls: 21,
        vars: 11,
        consts: [[1, "jumbotron"], [1, "container"], [1, "row"], [1, "col-sm-6", "offset-sm-3"], [3, "formGroup", "ngSubmit"], [1, "form-group"], ["appearance", "outline", 2, "width", "100%"], ["matInput", "", "formControlName", "email", 3, "ngClass"], ["matInput", "", "formControlName", "password", 3, "type", "ngClass"], ["matSuffix", "", 3, "click"], ["style", "text-align:center", "class", "form-group", 4, "ngIf"], [4, "ngIf"], [1, "form-group", 2, "text-align", "center"], ["mat-raised-button", "", "type", "submit", "color", "accent", 2, "width", "60%", "height", "40px", "margin-bottom", "10px", "border-radius", "5px"], ["mode", "indeterminate", "diameter", "80", "strokeWidth", "9", 2, "margin", "0 auto"]],
        template: function LoginComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u0412\u043E\u0439\u0442\u0438 \u0432 \u043F\u0430\u043D\u0435\u043B\u044C");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_6_listener() {
              return ctx.onSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Email");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-form-field", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\u041F\u0430\u0440\u043E\u043B\u044C");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-icon", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_mat_icon_click_17_listener() {
              return ctx.hide = !ctx.hide;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, LoginComponent_div_19_Template, 3, 0, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, LoginComponent_div_20_Template, 2, 0, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, ctx.submitted && ctx.controls.email.errors));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.hide ? "password" : "text")("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, ctx.submitted && ctx.controls.password.errors));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.hide ? "visibility_off" : "visibility");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatSuffix"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__["MatProgressSpinner"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.css']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }, {
            type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]
          }, {
            type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "NCLr":
    /*!**************************************************************************************************!*\
      !*** ./src/app/components/main-dashboard/add-modey-to-account/add-modey-to-account.component.ts ***!
      \**************************************************************************************************/

    /*! exports provided: AddModeyToAccountComponent */

    /***/
    function NCLr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddModeyToAccountComponent", function () {
        return AddModeyToAccountComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../services/user.service */
      "qfBg");
      /* harmony import */


      var _models_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../models/user */
      "2hxB");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");

      var AddModeyToAccountComponent = /*#__PURE__*/function () {
        function AddModeyToAccountComponent(userService, dialogRef, data) {
          _classCallCheck(this, AddModeyToAccountComponent);

          this.userService = userService;
          this.dialogRef = dialogRef;
          this.data = data;
          this.dataForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            summa: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
          });
        }

        _createClass(AddModeyToAccountComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "addMoney",
          value: function addMoney(summa) {
            // const prev = this.data.account;
            // this.data.account = summa;
            // this.userService.updateAccount(this.data).subscribe();
            // this.data.account = +prev + +summa;
            this.dialogRef.close();
          }
        }]);

        return AddModeyToAccountComponent;
      }();

      AddModeyToAccountComponent.ɵfac = function AddModeyToAccountComponent_Factory(t) {
        return new (t || AddModeyToAccountComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]));
      };

      AddModeyToAccountComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AddModeyToAccountComponent,
        selectors: [["app-add-modey-to-account"]],
        decls: 10,
        vars: 2,
        consts: [[3, "formGroup"], ["matPrefix", ""], ["type", "tel", "matInput", "", "formControlName", "summa", "placeholder", "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0443\u043C\u043C\u0443"], ["matSuffix", ""], [1, "btn", "btn-default", 3, "disabled", "click"]],
        template: function AddModeyToAccountComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0443\u043C\u043C\u0443 \u0434\u043B\u044F \u043F\u043E\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F \u0432\u0430\u0448\u0435\u0433\u043E \u043A\u043E\u0448\u0435\u043B\u044C\u043A\u0430 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "$ \xA0");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "mode_edit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddModeyToAccountComponent_Template_button_click_8_listener() {
              return ctx.addMoney(ctx.dataForm.get("summa").value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " \u041F\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u044C ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.dataForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.dataForm.invalid);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatPrefix"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatSuffix"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtbW9kZXktdG8tYWNjb3VudC5jb21wb25lbnQuY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddModeyToAccountComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-add-modey-to-account',
            templateUrl: './add-modey-to-account.component.html',
            styleUrls: ['./add-modey-to-account.component.css']
          }]
        }], function () {
          return [{
            type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
          }, {
            type: _models_user__WEBPACK_IMPORTED_MODULE_4__["User"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
            }]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "PXD3":
    /*!*******************************************************************!*\
      !*** ./src/app/components/account/register/register.component.ts ***!
      \*******************************************************************/

    /*! exports provided: RegisterComponent */

    /***/
    function PXD3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
        return RegisterComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/authentication.service */
      "ej43");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      "Xa2L");

      function RegisterComponent_div_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-progress-spinner", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "is-invalid": a0
        };
      };

      var RegisterComponent = /*#__PURE__*/function () {
        function RegisterComponent(formBuilder, router, authenticationService, snackbar) {
          _classCallCheck(this, RegisterComponent);

          this.formBuilder = formBuilder;
          this.router = router;
          this.authenticationService = authenticationService;
          this.snackbar = snackbar;
          this.hide = true;
          this.loading = false;
          this.submitted = false;
          this.valueEmail = '';

          if (this.authenticationService.currentUserValue) {
            this.router.navigate(['/']);
          }
        }

        _createClass(RegisterComponent, [{
          key: "controls",
          get: function get() {
            return this.form.controls;
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.form = this.formBuilder.group({
              email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
            });
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this9 = this;

            this.submitted = true;

            if (this.form.invalid) {
              return;
            }

            this.loading = true; // setTimeout(() => {

            this.authenticationService.register(this.form.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])()).subscribe(function (_) {
              _this9.router.navigate(['dashboard']);

              _this9.showMessage('Регистрация успешна');

              _this9.loading = false;
            }, function (error) {
              _this9.loading = false;

              _this9.showErrorMessage(error);
            }); // }, 1000);
          }
        }, {
          key: "showErrorMessage",
          value: function showErrorMessage(message) {
            this.snackbar.open(message.error.message, 'OK', {
              duration: 6000
            });
          }
        }, {
          key: "showMessage",
          value: function showMessage(message) {
            this.snackbar.open(message, 'OK', {
              duration: 3000
            });
          }
        }]);

        return RegisterComponent;
      }();

      RegisterComponent.ɵfac = function RegisterComponent_Factory(t) {
        return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]));
      };

      RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: RegisterComponent,
        selectors: [["app-register"]],
        decls: 23,
        vars: 10,
        consts: [[1, "jumbotron"], [1, "container"], [1, "row"], [1, "col-sm-6", "offset-sm-3"], [3, "formGroup", "ngSubmit"], [1, "form-group"], ["appearance", "outline", 2, "width", "100%"], ["matInput", "", "formControlName", "email", 3, "ngClass"], ["matInput", "", "formControlName", "password", 3, "type", "ngClass"], ["matSuffix", "", 3, "click"], [1, "form-group", 2, "text-align", "center"], ["mat-raised-button", "", "color", "accent", 2, "width", "50%", "margin", "10px", "border-radius", "5px"], [4, "ngIf"], ["color", "accent", "mode", "indeterminate", "diameter", "80", "strokeWidth", "9", 2, "margin", "0 auto"]],
        template: function RegisterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function RegisterComponent_Template_form_ngSubmit_6_listener() {
              return ctx.onSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "E-mail");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-form-field", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\u041F\u0430\u0440\u043E\u043B\u044C");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-icon", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegisterComponent_Template_mat_icon_click_17_listener() {
              return ctx.hide = !ctx.hide;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C\u0441\u044F");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, RegisterComponent_div_22_Template, 2, 0, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, ctx.submitted && ctx.controls.email.errors));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.hide ? "password" : "text")("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, ctx.submitted && ctx.controls.password.errors));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.hide ? "visibility_off" : "visibility");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatSuffix"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__["MatProgressSpinner"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWdpc3Rlci5jb21wb25lbnQuY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-register',
            templateUrl: './register.component.html',
            styleUrls: ['./register.component.css']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }, {
            type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]
          }, {
            type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./services/authentication.service */
      "ej43");
      /* harmony import */


      var _components_navigation_bar_navigation_bar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./components/navigation-bar/navigation-bar.component */
      "2AUz");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(router, authenticationService) {
          var _this10 = this;

          _classCallCheck(this, AppComponent);

          this.router = router;
          this.authenticationService = authenticationService;
          this.isCurrentUser = false;
          this.authenticationService.$currentUser.subscribe(function (user) {
            _this10.currentUser = user;

            if (user) {
              _this10.isCurrentUser = true;
            }
          });
        }

        _createClass(AppComponent, [{
          key: "logout",
          value: function logout() {
            this.authenticationService.logout();
            this.router.navigate(['/login']);
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]));
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 2,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-navigation-bar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_components_navigation_bar_navigation_bar_component__WEBPACK_IMPORTED_MODULE_3__["NavigationBarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }, {
            type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "UTcu":
    /*!**************************************!*\
      !*** ./src/app/guards/auth.guard.ts ***!
      \**************************************/

    /*! exports provided: AuthGuard */

    /***/
    function UTcu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
        return AuthGuard;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../services/authentication.service */
      "ej43");

      var AuthGuard = /*#__PURE__*/function () {
        function AuthGuard(router, authenticationService) {
          _classCallCheck(this, AuthGuard);

          this.router = router;
          this.authenticationService = authenticationService;
        }

        _createClass(AuthGuard, [{
          key: "canActivate",
          value: function canActivate(route, state) {
            var currentUser = this.authenticationService.currentUserValue;

            if (currentUser) {
              // authorised so return true
              return true;
            } // not logged in so redirect to login page with the return url


            this.router.navigate(['/login'], {
              queryParams: {
                returnUrl: state.url
              }
            });
            return false;
          }
        }]);

        return AuthGuard;
      }();

      AuthGuard.ɵfac = function AuthGuard_Factory(t) {
        return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]));
      };

      AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: AuthGuard,
        factory: AuthGuard.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }, {
            type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/cdk/layout */
      "0MNC");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! angular-bootstrap-md */
      "dbUT");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "/t3+");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/sidenav */
      "XhcP");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/list */
      "MutI");
      /* harmony import */


      var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/grid-list */
      "zkoq");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/menu */
      "STbY");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      "Xa2L");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _angular_material_slider__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/material/slider */
      "5RNC");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/material/table */
      "+0xr");
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @angular/material/tooltip */
      "Qu3c");
      /* harmony import */


      var _angular_material_badge__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! @angular/material/badge */
      "TU8p");
      /* harmony import */


      var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! @angular/material/stepper */
      "xHqg");
      /* harmony import */


      var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! @angular/material/slide-toggle */
      "1jcm");
      /* harmony import */


      var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! @angular/material/datepicker */
      "iadO");
      /* harmony import */


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! @angular/material/tabs */
      "wZkO");
      /* harmony import */


      var _angular_material_radio__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! @angular/material/radio */
      "QibW");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _components_main_dashboard_widgets_widgets_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! ./components/main-dashboard/widgets/widgets.component */
      "vkOh");
      /* harmony import */


      var _components_account_login_login_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! ./components/account/login/login.component */
      "LkZ5");
      /* harmony import */


      var _components_account_register_register_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
      /*! ./components/account/register/register.component */
      "PXD3");
      /* harmony import */


      var _components_table_bots_bot_stats_dialog_bot_stats_dialog_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
      /*! ./components/table-bots/bot-stats-dialog/bot-stats-dialog.component */
      "ppb4");
      /* harmony import */


      var _components_table_bots_table_bots_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
      /*! ./components/table-bots/table-bots.component */
      "1Out");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _app_routing__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
      /*! ./app.routing */
      "beVS");
      /* harmony import */


      var _components_account_about_about_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
      /*! ./components/account/about/about.component */
      "1ft5");
      /* harmony import */


      var _components_account_settings_settings_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
      /*! ./components/account/settings/settings.component */
      "vUOy");
      /* harmony import */


      var _components_create_bot_create_bot_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
      /*! ./components/create-bot/create-bot.component */
      "KoZ+");
      /* harmony import */


      var _components_main_dashboard_add_modey_to_account_add_modey_to_account_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
      /*! ./components/main-dashboard/add-modey-to-account/add-modey-to-account.component */
      "NCLr");
      /* harmony import */


      var _components_main_dashboard_main_dashboard_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
      /*! ./components/main-dashboard/main-dashboard.component */
      "lmik");
      /* harmony import */


      var _components_navigation_bar_navigation_bar_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
      /*! ./components/navigation-bar/navigation-bar.component */
      "2AUz");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _helpers_jwt_interceptor__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(
      /*! ./helpers/jwt.interceptor */
      "eMGG");
      /* harmony import */


      var _helpers_error_interceptor__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(
      /*! ./helpers/error.interceptor */
      "fC4O");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_36__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [_angular_material_datepicker__WEBPACK_IMPORTED_MODULE_27__["MatDatepickerModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_44__["MatNativeDateModule"], {
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HTTP_INTERCEPTORS"],
          useClass: _helpers_jwt_interceptor__WEBPACK_IMPORTED_MODULE_45__["JwtInterceptor"],
          multi: true
        }, {
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HTTP_INTERCEPTORS"],
          useClass: _helpers_error_interceptor__WEBPACK_IMPORTED_MODULE_46__["ErrorInterceptor"],
          multi: true
        }],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["LayoutModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _app_routing__WEBPACK_IMPORTED_MODULE_37__["routing"], // MATERIAL
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__["MatSidenavModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_13__["MatListModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__["MatGridListModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_15__["MatCardModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__["MatMenuModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_18__["MatInputModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__["MatProgressSpinnerModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_20__["MatSelectModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_21__["MatSliderModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_29__["MatRadioModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_22__["MatTableModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_23__["MatTooltipModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_24__["MatBadgeModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_25__["MatStepperModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_26__["MatSlideToggleModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_28__["MatTabsModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_30__["MatDialogModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_7__["MDBBootstrapModule"].forRoot(), _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_27__["MatDatepickerModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_44__["MatNativeDateModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_36__["AppComponent"], _components_navigation_bar_navigation_bar_component__WEBPACK_IMPORTED_MODULE_43__["NavigationBarComponent"], _components_main_dashboard_main_dashboard_component__WEBPACK_IMPORTED_MODULE_42__["MainDashboardComponent"], _components_account_settings_settings_component__WEBPACK_IMPORTED_MODULE_39__["SettingsComponent"], _components_account_login_login_component__WEBPACK_IMPORTED_MODULE_32__["LoginComponent"], _components_account_register_register_component__WEBPACK_IMPORTED_MODULE_33__["RegisterComponent"], _components_account_about_about_component__WEBPACK_IMPORTED_MODULE_38__["AboutComponent"], _components_create_bot_create_bot_component__WEBPACK_IMPORTED_MODULE_40__["CreateBotComponent"], _components_table_bots_table_bots_component__WEBPACK_IMPORTED_MODULE_35__["TableBotsComponent"], _components_main_dashboard_widgets_widgets_component__WEBPACK_IMPORTED_MODULE_31__["WidgetsComponent"], _components_main_dashboard_add_modey_to_account_add_modey_to_account_component__WEBPACK_IMPORTED_MODULE_41__["AddModeyToAccountComponent"], _components_table_bots_bot_stats_dialog_bot_stats_dialog_component__WEBPACK_IMPORTED_MODULE_34__["BotStatsDialogComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["LayoutModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], // MATERIAL
          _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__["MatSidenavModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_13__["MatListModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__["MatGridListModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_15__["MatCardModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__["MatMenuModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_18__["MatInputModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__["MatProgressSpinnerModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_20__["MatSelectModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_21__["MatSliderModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_29__["MatRadioModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_22__["MatTableModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_23__["MatTooltipModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_24__["MatBadgeModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_25__["MatStepperModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_26__["MatSlideToggleModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_28__["MatTabsModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_30__["MatDialogModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_7__["MDBRootModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_27__["MatDatepickerModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_44__["MatNativeDateModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_36__["AppComponent"], _components_navigation_bar_navigation_bar_component__WEBPACK_IMPORTED_MODULE_43__["NavigationBarComponent"], _components_main_dashboard_main_dashboard_component__WEBPACK_IMPORTED_MODULE_42__["MainDashboardComponent"], _components_account_settings_settings_component__WEBPACK_IMPORTED_MODULE_39__["SettingsComponent"], _components_account_login_login_component__WEBPACK_IMPORTED_MODULE_32__["LoginComponent"], _components_account_register_register_component__WEBPACK_IMPORTED_MODULE_33__["RegisterComponent"], _components_account_about_about_component__WEBPACK_IMPORTED_MODULE_38__["AboutComponent"], _components_create_bot_create_bot_component__WEBPACK_IMPORTED_MODULE_40__["CreateBotComponent"], _components_table_bots_table_bots_component__WEBPACK_IMPORTED_MODULE_35__["TableBotsComponent"], _components_main_dashboard_widgets_widgets_component__WEBPACK_IMPORTED_MODULE_31__["WidgetsComponent"], _components_main_dashboard_add_modey_to_account_add_modey_to_account_component__WEBPACK_IMPORTED_MODULE_41__["AddModeyToAccountComponent"], _components_table_bots_bot_stats_dialog_bot_stats_dialog_component__WEBPACK_IMPORTED_MODULE_34__["BotStatsDialogComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["LayoutModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _app_routing__WEBPACK_IMPORTED_MODULE_37__["routing"], // MATERIAL
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__["MatSidenavModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_13__["MatListModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__["MatGridListModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_15__["MatCardModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__["MatMenuModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_18__["MatInputModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__["MatProgressSpinnerModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_20__["MatSelectModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_21__["MatSliderModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_29__["MatRadioModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_22__["MatTableModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_23__["MatTooltipModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_24__["MatBadgeModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_25__["MatStepperModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_26__["MatSlideToggleModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_28__["MatTabsModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_30__["MatDialogModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_7__["MDBBootstrapModule"].forRoot(), _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_27__["MatDatepickerModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_44__["MatNativeDateModule"]],
            entryComponents: [_components_main_dashboard_add_modey_to_account_add_modey_to_account_component__WEBPACK_IMPORTED_MODULE_41__["AddModeyToAccountComponent"], _components_table_bots_bot_stats_dialog_bot_stats_dialog_component__WEBPACK_IMPORTED_MODULE_34__["BotStatsDialogComponent"]],
            providers: [_angular_material_datepicker__WEBPACK_IMPORTED_MODULE_27__["MatDatepickerModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_44__["MatNativeDateModule"], {
              provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HTTP_INTERCEPTORS"],
              useClass: _helpers_jwt_interceptor__WEBPACK_IMPORTED_MODULE_45__["JwtInterceptor"],
              multi: true
            }, {
              provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HTTP_INTERCEPTORS"],
              useClass: _helpers_error_interceptor__WEBPACK_IMPORTED_MODULE_46__["ErrorInterceptor"],
              multi: true
            }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_36__["AppComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "beVS":
    /*!********************************!*\
      !*** ./src/app/app.routing.ts ***!
      \********************************/

    /*! exports provided: routing */

    /***/
    function beVS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "routing", function () {
        return routing;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _components_main_dashboard_main_dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./components/main-dashboard/main-dashboard.component */
      "lmik");
      /* harmony import */


      var _components_account_settings_settings_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./components/account/settings/settings.component */
      "vUOy");
      /* harmony import */


      var _components_account_about_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./components/account/about/about.component */
      "1ft5");
      /* harmony import */


      var _components_create_bot_create_bot_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./components/create-bot/create-bot.component */
      "KoZ+");
      /* harmony import */


      var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./guards/auth.guard */
      "UTcu");
      /* harmony import */


      var _components_account_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./components/account/login/login.component */
      "LkZ5");
      /* harmony import */


      var _components_account_register_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./components/account/register/register.component */
      "PXD3");
      /* harmony import */


      var _components_table_bots_table_bots_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./components/table-bots/table-bots.component */
      "1Out");

      var appRoutes = [{
        path: 'dashboard',
        component: _components_main_dashboard_main_dashboard_component__WEBPACK_IMPORTED_MODULE_1__["MainDashboardComponent"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]]
      }, {
        path: 'table',
        component: _components_table_bots_table_bots_component__WEBPACK_IMPORTED_MODULE_8__["TableBotsComponent"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]]
      }, {
        path: 'create',
        component: _components_create_bot_create_bot_component__WEBPACK_IMPORTED_MODULE_4__["CreateBotComponent"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]]
      }, {
        path: 'settings',
        component: _components_account_settings_settings_component__WEBPACK_IMPORTED_MODULE_2__["SettingsComponent"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]]
      }, // { path: 'create', component: CreateBotComponent },
      // { path: 'table', component: TableBotsComponent },
      // { path: 'dashboard', component: MainDashboardComponent },
      // { path: 'settings', component: SettingsComponent },
      {
        path: 'login',
        component: _components_account_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"]
      }, {
        path: 'register',
        component: _components_account_register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"]
      }, {
        path: 'about',
        component: _components_account_about_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"]
      }, {
        path: '**',
        redirectTo: 'dashboard'
      }];

      var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes);
      /***/

    },

    /***/
    "eMGG":
    /*!********************************************!*\
      !*** ./src/app/helpers/jwt.interceptor.ts ***!
      \********************************************/

    /*! exports provided: JwtInterceptor */

    /***/
    function eMGG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function () {
        return JwtInterceptor;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../services/authentication.service */
      "ej43");

      var JwtInterceptor = /*#__PURE__*/function () {
        function JwtInterceptor(authenticationService) {
          _classCallCheck(this, JwtInterceptor);

          this.authenticationService = authenticationService;
        }

        _createClass(JwtInterceptor, [{
          key: "intercept",
          value: function intercept(request, next) {
            var currentUser = this.authenticationService.currentUserValue;

            if (currentUser && currentUser.token && !request.url.includes('login')) {
              var headers = this.authenticationService.headers;
              request = request.clone({
                headers: headers
              });
            }

            return next.handle(request);
          }
        }]);

        return JwtInterceptor;
      }();

      JwtInterceptor.ɵfac = function JwtInterceptor_Factory(t) {
        return new (t || JwtInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]));
      };

      JwtInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: JwtInterceptor,
        factory: JwtInterceptor.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JwtInterceptor, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "ej43":
    /*!****************************************************!*\
      !*** ./src/app/services/authentication.service.ts ***!
      \****************************************************/

    /*! exports provided: AuthenticationService */

    /***/
    function ej43(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthenticationService", function () {
        return AuthenticationService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var AuthenticationService = /*#__PURE__*/function () {
        function AuthenticationService(http) {
          _classCallCheck(this, AuthenticationService);

          this.http = http;
          this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](JSON.parse(localStorage.getItem('currentUser')));
          this.$currentUser = this.currentUserSubject.asObservable();
        }

        _createClass(AuthenticationService, [{
          key: "currentUserValue",
          get: function get() {
            return this.currentUserSubject.value;
          }
        }, {
          key: "headers",
          get: function get() {
            return new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
              'Authorization': "Bearer ".concat(this.currentUserValue && this.currentUserValue.token ? this.currentUserValue.token : '')
            });
          }
        }, {
          key: "login",
          value: function login(user) {
            var _this11 = this;

            return this.http.post("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, "/users/login"), {
              email: user.email,
              password: user.password
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (token) {
              var currentUser = {
                email: user.email,
                token: token
              };
              localStorage.setItem('currentUser', JSON.stringify(currentUser));

              _this11.currentUserSubject.next(currentUser);

              return user;
            }));
          }
        }, {
          key: "register",
          value: function register(user) {
            var _this12 = this;

            return this.http.post("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, "/users/signup"), user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (token) {
              var currentUser = {
                email: user.email,
                token: token
              };
              localStorage.setItem('currentUser', JSON.stringify(currentUser));

              _this12.currentUserSubject.next(currentUser);

              return user;
            }));
          }
        }, {
          key: "logout",
          value: function logout() {
            // remove user from local storage to log user out
            localStorage.removeItem('currentUser');
            this.currentUserSubject.next(null);
          }
        }]);

        return AuthenticationService;
      }();

      AuthenticationService.ɵfac = function AuthenticationService_Factory(t) {
        return new (t || AuthenticationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]));
      };

      AuthenticationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: AuthenticationService,
        factory: AuthenticationService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthenticationService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "fC4O":
    /*!**********************************************!*\
      !*** ./src/app/helpers/error.interceptor.ts ***!
      \**********************************************/

    /*! exports provided: ErrorInterceptor */

    /***/
    function fC4O(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function () {
        return ErrorInterceptor;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../services/authentication.service */
      "ej43");

      var ErrorInterceptor = /*#__PURE__*/function () {
        function ErrorInterceptor(authenticationService) {
          _classCallCheck(this, ErrorInterceptor);

          this.authenticationService = authenticationService;
        }

        _createClass(ErrorInterceptor, [{
          key: "intercept",
          value: function intercept(request, next) {
            var _this13 = this;

            return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) {
              if (err.status === 401) {
                // auto logout if 401 response returned from api
                _this13.authenticationService.logout();

                location.reload();
              }

              var error = err.error.message || err.statusText;
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
            }));
          }
        }]);

        return ErrorInterceptor;
      }();

      ErrorInterceptor.ɵfac = function ErrorInterceptor_Factory(t) {
        return new (t || ErrorInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]));
      };

      ErrorInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ErrorInterceptor,
        factory: ErrorInterceptor.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorInterceptor, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "i6c7":
    /*!******************************************!*\
      !*** ./src/app/services/task.service.ts ***!
      \******************************************/

    /*! exports provided: TaskService */

    /***/
    function i6c7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TaskService", function () {
        return TaskService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _models_enums__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../models/enums */
      "2pNN");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var TaskService = /*#__PURE__*/function () {
        function TaskService(http) {
          _classCallCheck(this, TaskService);

          this.http = http;
          this.loaded = false;
          this.questionsList$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        }
        /**
         * запрашивает список вопросов
         * (если список уже загружен, то вернет его
         * если не загружен, то делает запрос на сервер)
         */


        _createClass(TaskService, [{
          key: "getQuestionsList",
          value: function getQuestionsList() {
            var _this14 = this;

            if (!this.loaded) {
              return this.reloadQuestionList().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (r) {
                return _this14.questionsList$;
              }));
            }

            return this.questionsList$;
          }
        }, {
          key: "reloadQuestionList",
          value: function reloadQuestionList() {
            var _this15 = this;

            return this.http.get("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, "/api/Task/GetQuestions")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (response) {
              _this15.questionsList$.next(response);

              _this15.loaded = true;
            }));
          }
        }, {
          key: "postInvestorType",
          value: function postInvestorType(user, balls) {
            var obj = {
              user: user,
              balls: balls
            };
            return this.http.post("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, "/api/Task/GetInvestorType"), obj);
          }
        }, {
          key: "convertRiskToString",
          value: function convertRiskToString(score) {
            switch (score) {
              case _models_enums__WEBPACK_IMPORTED_MODULE_4__["InvestorTypeCharacter"].Guaranteed:
                return 'Трусишка';

              case _models_enums__WEBPACK_IMPORTED_MODULE_4__["InvestorTypeCharacter"].Conservative:
                return 'Консерватор';

              case _models_enums__WEBPACK_IMPORTED_MODULE_4__["InvestorTypeCharacter"].Moderate:
                return 'Сбалансированный';

              case _models_enums__WEBPACK_IMPORTED_MODULE_4__["InvestorTypeCharacter"].Growth:
                return 'Целеустремленный к прибыли';

              case _models_enums__WEBPACK_IMPORTED_MODULE_4__["InvestorTypeCharacter"].AggressiveGrowth:
                return 'Агрессивный';

              case _models_enums__WEBPACK_IMPORTED_MODULE_4__["InvestorTypeCharacter"].MaximumGrowth:
                return 'Продам родную мать';
            }

            return 'Консерватор';
          }
        }, {
          key: "handleError",
          value: function handleError(error) {
            var msg;

            if (error.error instanceof ErrorEvent) {
              msg = 'Произошла ошибка:' + error.error.message;
            } else {
              msg = "\u041F\u0440\u043E\u0438\u0437\u043E\u0448\u043B\u0430 \u043E\u0448\u0438\u0431\u043A\u0430: ".concat(error.error, ". \u041A\u043E\u0434 \u043E\u0448\u0438\u0431\u043A\u0438 ").concat(error.status);
            }

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(msg);
          }
        }]);

        return TaskService;
      }();

      TaskService.ɵfac = function TaskService_Factory(t) {
        return new (t || TaskService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]));
      };

      TaskService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: TaskService,
        factory: TaskService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TaskService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "lmik":
    /*!***********************************************************************!*\
      !*** ./src/app/components/main-dashboard/main-dashboard.component.ts ***!
      \***********************************************************************/

    /*! exports provided: MainDashboardComponent */

    /***/
    function lmik(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MainDashboardComponent", function () {
        return MainDashboardComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var node_modules_chartist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! node_modules/chartist */
      "uki+");
      /* harmony import */


      var node_modules_chartist__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(node_modules_chartist__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var _add_modey_to_account_add_modey_to_account_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./add-modey-to-account/add-modey-to-account.component */
      "NCLr");
      /* harmony import */


      var _models_enums__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../models/enums */
      "2pNN");
      /* harmony import */


      var _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../services/authentication.service */
      "ej43");
      /* harmony import */


      var _services_user_stats_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../services/user-stats.service */
      "0ri0");
      /* harmony import */


      var _services_task_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../services/task.service */
      "i6c7");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/grid-list */
      "zkoq");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/menu */
      "STbY");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _widgets_widgets_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./widgets/widgets.component */
      "vkOh");
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      "Xa2L");

      function MainDashboardComponent_mat_progress_spinner_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-progress-spinner", 39);
        }
      }

      function MainDashboardComponent_mat_progress_spinner_31_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-progress-spinner", 39);
        }
      }

      function MainDashboardComponent_mat_progress_spinner_48_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-progress-spinner", 39);
        }
      }

      function MainDashboardComponent_mat_progress_spinner_65_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-progress-spinner", 39);
        }
      }

      var MainDashboardComponent = /*#__PURE__*/function () {
        function MainDashboardComponent(authenticationService, userStatService, taskService, dialog) {
          var _this16 = this;

          _classCallCheck(this, MainDashboardComponent);

          this.authenticationService = authenticationService;
          this.userStatService = userStatService;
          this.taskService = taskService;
          this.dialog = dialog;
          this.loading = true;
          this.stats = {
            profit: 0.0,
            robotQuantity: 0,
            account: 0.0,
            riskType: _models_enums__WEBPACK_IMPORTED_MODULE_3__["InvestorTypeCharacter"].Moderate
          };
          this.currentUserSubscription = this.authenticationService.$currentUser.subscribe(function (user) {
            _this16.currentUser = user;
          });
        }

        _createClass(MainDashboardComponent, [{
          key: "openDialog",
          value: function openDialog() {
            var _this17 = this;

            var dialogRef = this.dialog.open(_add_modey_to_account_add_modey_to_account_component__WEBPACK_IMPORTED_MODULE_2__["AddModeyToAccountComponent"], {
              panelClass: 'dialog',
              data: this.currentUser,
              disableClose: true
            });
            dialogRef.backdropClick().subscribe(function (result) {
              if (confirm('Закрыть окно?')) {
                dialogRef.close();
              }
            });
            dialogRef.afterClosed().subscribe(function (r) {
              return _this17.getStats();
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getStats();
            this.createFirstChart();
            this.createSecondChart();
            this.createThirdChart();
          }
        }, {
          key: "getStats",
          value: function getStats() {
            var _this18 = this;

            // this.userStatService.getStatsById(this.currentUser.id).subscribe(stats => {
            this.userStatService.getStatsById(0).subscribe(function (stats) {
              _this18.stats = stats;
              _this18.riskType = _this18.taskService.convertRiskToString(_this18.stats.riskType);
              _this18.loading = false;
            });
          }
        }, {
          key: "createFirstChart",
          value: function createFirstChart() {
            var dataDailySalesChart = {
              labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
              series: [[12, 17, 7, 17, 23, 18, 38]]
            };
            var optionsDailySalesChart = {
              lineSmooth: node_modules_chartist__WEBPACK_IMPORTED_MODULE_1__["Interpolation"].cardinal({
                tension: 0
              }),
              low: 0,
              high: 50,
              chartPadding: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
              }
            };
            var dailySalesChart = new node_modules_chartist__WEBPACK_IMPORTED_MODULE_1__["Line"]('#dailySalesChart', dataDailySalesChart, optionsDailySalesChart);
            this.startAnimationForLineChart(dailySalesChart);
          }
        }, {
          key: "createSecondChart",
          value: function createSecondChart() {
            var datawebsiteViewsChart = {
              labels: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
              series: [[542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895]]
            };
            var optionswebsiteViewsChart = {
              axisX: {
                showGrid: false
              },
              low: 0,
              high: 1000,
              chartPadding: {
                top: 0,
                right: 5,
                bottom: 0,
                left: 0
              }
            };
            var responsiveOptions = [['screen and (max-width: 640px)', {
              seriesBarDistance: 5,
              axisX: {
                labelInterpolationFnc: function labelInterpolationFnc(value) {
                  return value[0];
                }
              }
            }]];
            var websiteViewsChart = new node_modules_chartist__WEBPACK_IMPORTED_MODULE_1__["Bar"]('#websiteViewsChart', datawebsiteViewsChart, optionswebsiteViewsChart, responsiveOptions);
            this.startAnimationForBarChart(websiteViewsChart);
          }
        }, {
          key: "createThirdChart",
          value: function createThirdChart() {
            var dataCompletedTasksChart = {
              labels: ['12p', '3p', '6p', '9p', '12p', '3a', '6a', '9a'],
              series: [[230, 750, 450, 300, 280, 240, 200, 190]]
            };
            var optionsCompletedTasksChart = {
              lineSmooth: node_modules_chartist__WEBPACK_IMPORTED_MODULE_1__["Interpolation"].cardinal({
                tension: 0
              }),
              low: 0,
              high: 1000,
              chartPadding: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
              }
            };
            var completedTasksChart = new node_modules_chartist__WEBPACK_IMPORTED_MODULE_1__["Line"]('#completedTasksChart', dataCompletedTasksChart, optionsCompletedTasksChart);
            this.startAnimationForLineChart(completedTasksChart);
          }
        }, {
          key: "startAnimationForLineChart",
          value: function startAnimationForLineChart(chart) {
            var seq, delays, durations;
            seq = 0;
            delays = 80;
            durations = 500;
            chart.on('draw', function (data) {
              if (data.type === 'line' || data.type === 'area') {
                data.element.animate({
                  d: {
                    begin: 600,
                    dur: 700,
                    from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
                    to: data.path.clone().stringify(),
                    easing: node_modules_chartist__WEBPACK_IMPORTED_MODULE_1__["Svg"].Easing.easeOutQuint
                  }
                });
              } else if (data.type === 'point') {
                seq++;
                data.element.animate({
                  opacity: {
                    begin: seq * delays,
                    dur: durations,
                    from: 0,
                    to: 1,
                    easing: 'ease'
                  }
                });
              }
            });
            seq = 0;
          }
        }, {
          key: "startAnimationForBarChart",
          value: function startAnimationForBarChart(chart) {
            var seq2, delays2, durations2;
            seq2 = 0;
            delays2 = 80;
            durations2 = 500;
            chart.on('draw', function (data) {
              if (data.type === 'bar') {
                seq2++;
                data.element.animate({
                  opacity: {
                    begin: seq2 * delays2,
                    dur: durations2,
                    from: 0,
                    to: 1,
                    easing: 'ease'
                  }
                });
              }
            });
            seq2 = 0;
          }
        }]);

        return MainDashboardComponent;
      }();

      MainDashboardComponent.ɵfac = function MainDashboardComponent_Factory(t) {
        return new (t || MainDashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_stats_service__WEBPACK_IMPORTED_MODULE_5__["UserStatsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_task_service__WEBPACK_IMPORTED_MODULE_6__["TaskService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]));
      };

      MainDashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MainDashboardComponent,
        selectors: [["app-main-dashboard"]],
        decls: 155,
        vars: 14,
        consts: [[1, "grid-container"], ["cols", "4", "rowHeight", "160px"], ["colspan", "1", "rowspan", "1"], [1, "dashboard-card", 2, "padding", "0", "border-radius", "3px"], [1, "card", "card-stats"], [1, "card-header", "card-header-warning", "card-header-icon", 2, "height", "73px"], [1, "card-icon"], [1, "material-icons"], [1, "card-category"], ["style", "margin: 0 auto", "mode", "indeterminate", "diameter", "30", "strokeWidth", "3", 4, "ngIf"], [1, "card-title"], [1, "card-footer"], [1, "stats"], [1, "material-icons", "text-danger"], ["href", "/create"], [1, "card-header", "card-header-success", "card-header-icon", 2, "height", "73px"], [1, "card-header", "card-header-danger", "card-header-icon", 2, "height", "73px"], ["routerLink", "/testForRiskLevel", 1, "stats", 2, "cursor", "pointer"], [1, "card-header", "card-header-info", "card-header-icon", 2, "height", "73px"], [1, "material-icons", 2, "cursor", "pointer", 3, "click"], ["cols", "3", "rowHeight", "170px"], ["colspan", "1", "rowspan", "2"], [1, "card", "card-chart", 2, "height", "310px"], [1, "card-header", "card-header-success"], ["id", "dailySalesChart", 1, "ct-chart"], [1, "card-body"], [1, "text-success"], [1, "fa", "fa-long-arrow-up"], [1, "card-header", "card-header-warning"], ["id", "websiteViewsChart", 1, "ct-chart"], [1, "card-header", "card-header-danger"], ["id", "completedTasksChart", 1, "ct-chart"], ["cols", "2", "rowHeight", "350px"], [1, "dashboard-card"], ["mat-icon-button", "", "aria-label", "Toggle menu", 1, "more-button", 3, "matMenuTriggerFor"], ["menu", "matMenu"], ["mat-menu-item", ""], [1, "dashboard-card-content"], [3, "index", "ticker"], ["mode", "indeterminate", "diameter", "30", "strokeWidth", "3", 2, "margin", "0 auto"]],
        template: function MainDashboardComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-grid-list", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-grid-tile", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "i", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "adb");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0440\u043E\u0431\u043E\u0442\u043E\u0432");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, MainDashboardComponent_mat_progress_spinner_11_Template, 1, 0, "mat-progress-spinner", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h5", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "small");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\u0448\u0442.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "i", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "warning");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u043D\u043E\u0432\u043E\u0433\u043E \u0440\u043E\u0431\u043E\u0442\u0430");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-grid-tile", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-card", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "i", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "attach_money");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "\u041E\u0431\u0449\u0430\u044F \u0434\u043E\u0445\u043E\u0434\u043D\u043E\u0441\u0442\u044C");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, MainDashboardComponent_mat_progress_spinner_31_Template, 1, 0, "mat-progress-spinner", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h5", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "i", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "date_range");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " \u041F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0439 \u043C\u0435\u0441\u044F\u0446");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-grid-tile", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-card", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "i", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "spellcheck");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "\u0420\u0438\u0441\u043A-\u043F\u0440\u043E\u0444\u0438\u043B\u044C");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, MainDashboardComponent_mat_progress_spinner_48_Template, 1, 0, "mat-progress-spinner", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "h5", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "i", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "local_offer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " \u041F\u0440\u043E\u0439\u0442\u0438 \u0442\u0435\u0441\u0442 \u0435\u0449\u0435 \u0440\u0430\u0437 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "mat-grid-tile", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "mat-card", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "i", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainDashboardComponent_Template_i_click_61_listener() {
              return ctx.openDialog();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "account_balance_wallet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "p", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "\u041D\u0430 \u0441\u0447\u0435\u0442\u0443");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](65, MainDashboardComponent_mat_progress_spinner_65_Template, 1, 0, "mat-progress-spinner", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "h5", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "i", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainDashboardComponent_Template_i_click_70_listener() {
              return ctx.openDialog();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "update");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, " \u041F\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u044C \u043A\u043E\u0448\u0435\u043B\u0435\u043A");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "mat-grid-list", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "mat-grid-tile", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "mat-card", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "h5", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "\u0414\u043E\u0445\u043E\u0434\u043D\u043E\u0441\u0442\u044C \u0437\u0430 \u0433\u043E\u0434");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "p", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "span", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "i", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, " +55% ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, " \u0434\u043E\u0445\u043E\u0434\u043D\u043E\u0441\u0442\u044C \u0432\u044B\u0440\u043E\u0441\u043B\u0430 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "i", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "update");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, " \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u043E 17 \u0434\u043D\u0435\u0439 \u043D\u0430\u0437\u0430\u0434");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "mat-grid-tile", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "mat-card", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "h5", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "\u0410\u043D\u0430\u043B\u0438\u0442\u0438\u043A\u0430 \u043F\u043E \u0440\u043E\u0441\u0442\u0443 \u043F\u043E\u0442\u0440\u0444\u0435\u043B\u044F");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "p", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "\u0432\u0430\u0448 \u043F\u043E\u0440\u0442\u0444\u0435\u043B\u044C \u0432\u044B\u0440\u043E\u0441");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "i", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "access_time");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, " campaign sent 2 days ago");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "mat-grid-tile", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "mat-card", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "h5", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "\u0412\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u043D\u044B\u0435 \u043A\u0443\u0440\u0441\u044B");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "p", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "\u0417\u0430 \u043C\u0435\u0441\u044F\u0446 ~3 \u043A\u0443\u0440\u0441\u0430");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "i", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "update");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, " \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u043E 17 \u0434\u043D\u0435\u0439 \u043D\u0430\u0437\u0430\u0434");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "mat-grid-list", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "mat-grid-tile", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "mat-card", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "mat-card-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, " \u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430 \u043F\u043E \u0431\u043E\u0442\u0430\u043C ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "button", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "more_vert");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "mat-menu", null, 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "button", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u0435 1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "button", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u0435 2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "mat-card-content", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](138, "app-widgets", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "mat-grid-tile", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "mat-card", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "mat-card-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, " \u0422\u041E\u041F \u0433\u0440\u0430\u0444\u0438\u043A \u0440\u043E\u0441\u0442 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "button", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "more_vert");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "mat-menu", null, 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "button", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, "\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u0435 1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "button", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u0435 2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "mat-card-content", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](154, "app-widgets", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](132);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.stats.robotQuantity, "/10 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.stats.profit, "%");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.riskType);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$", ctx.stats.account, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("index", "NASDAQ")("ticker", "AAPL");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("index", "NASDAQ")("ticker", "MSFT");
          }
        },
        directives: [_angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__["MatGridList"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__["MatGridTile"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCard"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterLink"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardTitle"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__["MatMenuTrigger"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIcon"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__["MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__["MatMenuItem"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardContent"], _widgets_widgets_component__WEBPACK_IMPORTED_MODULE_15__["WidgetsComponent"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_16__["MatProgressSpinner"]],
        styles: [".grid-container[_ngcontent-%COMP%] {\n  margin: 20px;\n}\n\n.dashboard-card[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 15px;\n  left: 15px;\n  right: 15px;\n  bottom: 15px;\n}\n\n.more-button[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 5px;\n  right: 10px;\n}\n\n.mat-grid-tile[_ngcontent-%COMP%] {\n  overflow: visible;\n}\n\nmat-card[_ngcontent-%COMP%] {\n  box-shadow: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4tZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFVBQVU7RUFDVixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSwyQkFBMkI7QUFDN0IiLCJmaWxlIjoibWFpbi1kYXNoYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ncmlkLWNvbnRhaW5lciB7XG4gIG1hcmdpbjogMjBweDtcbn1cblxuLmRhc2hib2FyZC1jYXJkIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDE1cHg7XG4gIGxlZnQ6IDE1cHg7XG4gIHJpZ2h0OiAxNXB4O1xuICBib3R0b206IDE1cHg7XG59XG5cbi5tb3JlLWJ1dHRvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1cHg7XG4gIHJpZ2h0OiAxMHB4O1xufVxuXG4ubWF0LWdyaWQtdGlsZSB7XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xufVxuXG5tYXQtY2FyZCB7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbn1cbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainDashboardComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-main-dashboard',
            templateUrl: './main-dashboard.component.html',
            styleUrls: ['./main-dashboard.component.css']
          }]
        }], function () {
          return [{
            type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]
          }, {
            type: _services_user_stats_service__WEBPACK_IMPORTED_MODULE_5__["UserStatsService"]
          }, {
            type: _services_task_service__WEBPACK_IMPORTED_MODULE_6__["TaskService"]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "piiH":
    /*!**************************************************!*\
      !*** ./src/app/services/trading-bots.service.ts ***!
      \**************************************************/

    /*! exports provided: TradingBotsService */

    /***/
    function piiH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TradingBotsService", function () {
        return TradingBotsService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../environments/environment */
      "AytR");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _models_enums__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../models/enums */
      "2pNN");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./authentication.service */
      "ej43");

      var TradingBotsService = /*#__PURE__*/function () {
        function TradingBotsService(http, authenticationService) {
          _classCallCheck(this, TradingBotsService);

          this.http = http;
          this.authenticationService = authenticationService;
          this.loaded = false;
          this.tradingBotsList$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        }
        /**
         * запрашивает список роботов
         * (если список уже загружен, то вернет его
         * если не загружен, то делает запрос на сервер)
         */


        _createClass(TradingBotsService, [{
          key: "getUserRobots",
          value: function getUserRobots() {
            var _this19 = this;

            if (!this.loaded) {
              return this.reloadedTraidingBotsList().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (r) {
                return _this19.tradingBotsList$;
              }));
            }

            return this.tradingBotsList$;
          }
        }, {
          key: "reloadedTraidingBotsList",
          value: function reloadedTraidingBotsList() {
            var _this20 = this;

            return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, "/bots")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (response) {
              _this20.tradingBotsList$.next(response);

              _this20.loaded = true;
            }));
          }
        }, {
          key: "updateRobotData",
          value: function updateRobotData(bot) {
            return this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, "/api/robots/UpdateBot"), bot).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) {}));
          }
        }, {
          key: "deleteRobotData",
          value: function deleteRobotData(bot) {
            return this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, "/api/robots/DeleteBot"), bot).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) {}));
          }
        }, {
          key: "getDescription",
          value: function getDescription(bot_id) {
            return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, "/api/robots/GetDescription?bot_id=") + bot_id);
          }
        }, {
          key: "convertingFinancialInstrumentToString",
          value: function convertingFinancialInstrumentToString(financialInstrument) {
            switch (financialInstrument) {
              case _models_enums__WEBPACK_IMPORTED_MODULE_4__["FinancialInstrument"].Forex:
                return 'Форекс';

              case _models_enums__WEBPACK_IMPORTED_MODULE_4__["FinancialInstrument"].Stock:
                return 'Рынок акций';
            }
          } // public convertingIndustryToString(industry: Industry): string {
          //   switch (industry) {
          //     case 1:
          //       return 'Информационные технологии';
          //     case 2:
          //       return 'Здравоохранение';
          //     case 3:
          //       return 'Машиностроение и транспорт';
          //     case 4:
          //       return 'Недвижимость';
          //     case 5:
          //       return 'Потребительские товары и услуги';
          //     case 6:
          //       return 'Финансовы сектор';
          //     case 7:
          //       return 'Энергетика';
          //     case 8:
          //       return 'Серьевая промыщленность';
          //     case 9:
          //       return 'Электоэнергетика';
          //     case 10:
          //       return 'Телекоммуникации';
          //   }
          //   return;
          // }

        }, {
          key: "handleError",
          value: function handleError(error) {
            var msg;

            if (error.error instanceof ErrorEvent) {
              msg = 'Произошла ошибка:' + error.error.message;
            } else {
              msg = "\u041F\u0440\u043E\u0438\u0437\u043E\u0448\u043B\u0430 \u043E\u0448\u0438\u0431\u043A\u0430: ".concat(error.error, ". \u041A\u043E\u0434 \u043E\u0448\u0438\u0431\u043A\u0438 ").concat(error.status);
            }

            console.error('TradingBotsService::handleError() ' + msg);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(msg);
          }
        }]);

        return TradingBotsService;
      }();

      TradingBotsService.ɵfac = function TradingBotsService_Factory(t) {
        return new (t || TradingBotsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"]));
      };

      TradingBotsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: TradingBotsService,
        factory: TradingBotsService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TradingBotsService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]
          }, {
            type: _authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "ppb4":
    /*!**************************************************************************************!*\
      !*** ./src/app/components/table-bots/bot-stats-dialog/bot-stats-dialog.component.ts ***!
      \**************************************************************************************/

    /*! exports provided: BotStatsDialogComponent */

    /***/
    function ppb4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BotStatsDialogComponent", function () {
        return BotStatsDialogComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var src_app_services_trading_bots_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/trading-bots.service */
      "piiH");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _main_dashboard_widgets_widgets_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../main-dashboard/widgets/widgets.component */
      "vkOh");

      function BotStatsDialogComponent_mat_card_content_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card-content", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u0424\u0438\u043D\u0430\u043D\u0441\u043E\u0432\u044B\u0439 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442 \u0410\u043A\u0446\u0438\u0438");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-widgets", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u0411\u0443\u043C\u0430\u0433\u0430 ", ctx_r0.asset.name, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u0418\u043D\u0434\u0443\u0441\u0442\u0440\u0438\u044F ", ctx_r0.industry, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("index", "NASDAQ")("ticker", "APPLE");
        }
      }

      var BotStatsDialogComponent = /*#__PURE__*/function () {
        function BotStatsDialogComponent(dialogRef, tradingBotsService, data) {
          _classCallCheck(this, BotStatsDialogComponent);

          this.dialogRef = dialogRef;
          this.tradingBotsService = tradingBotsService;
          this.data = data;
        }

        _createClass(BotStatsDialogComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getDescription(this.data.id);
          }
        }, {
          key: "getDescription",
          value: function getDescription(bot_id) {
            var _this21 = this;

            this.tradingBotsService.getDescription(bot_id).subscribe(function (r) {
              _this21.asset = r; // this.industry = this.tradingBotsService.convertingIndustryToString(r.industry);
              // this.financialInstrument = this.tradingBotsService.convertingFinancialInstrumentToString(r.financialInstrument);
            });
          }
        }]);

        return BotStatsDialogComponent;
      }();

      BotStatsDialogComponent.ɵfac = function BotStatsDialogComponent_Factory(t) {
        return new (t || BotStatsDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_trading_bots_service__WEBPACK_IMPORTED_MODULE_2__["TradingBotsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]));
      };

      BotStatsDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: BotStatsDialogComponent,
        selectors: [["app-bot-stats-dialog"]],
        decls: 8,
        vars: 2,
        consts: [["class", "dashboard-card-content", 4, "ngIf"], [1, "dashboard-card-content"], [3, "index", "ticker"]],
        template: function BotStatsDialogComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " \u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430 \u043F\u043E \u0442\u043E\u0440\u0433\u043E\u0432\u043E\u043C\u0443 \u0440\u043E\u0431\u043E\u0442\u0443 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, BotStatsDialogComponent_mat_card_content_7_Template, 8, 4, "mat-card-content", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \"", ctx.data.ticker, "\" ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.asset);
          }
        },
        directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardTitle"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardContent"], _main_dashboard_widgets_widgets_component__WEBPACK_IMPORTED_MODULE_5__["WidgetsComponent"]],
        styles: [".mat-card[_ngcontent-%COMP%] {\n  display: contents;\n}\n\n.mat-card-header[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\nstrong[_ngcontent-%COMP%] {\n  color: blue;\n}\n\n.dashboard-card[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 15px;\n  left: 15px;\n  right: 15px;\n  bottom: 15px;\n}\n\n.mat-grid-tile[_ngcontent-%COMP%] {\n  overflow: visible;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvdC1zdGF0cy1kaWFsb2cuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsVUFBVTtFQUNWLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkIiLCJmaWxlIjoiYm90LXN0YXRzLWRpYWxvZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1jYXJkIHtcbiAgZGlzcGxheTogY29udGVudHM7XG59XG5cbi5tYXQtY2FyZC1oZWFkZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbnN0cm9uZyB7XG4gIGNvbG9yOiBibHVlO1xufVxuXG4uZGFzaGJvYXJkLWNhcmQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTVweDtcbiAgbGVmdDogMTVweDtcbiAgcmlnaHQ6IDE1cHg7XG4gIGJvdHRvbTogMTVweDtcbn1cblxuLm1hdC1ncmlkLXRpbGUge1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbn1cbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BotStatsDialogComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-bot-stats-dialog',
            templateUrl: './bot-stats-dialog.component.html',
            styleUrls: ['./bot-stats-dialog.component.css']
          }]
        }], function () {
          return [{
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]
          }, {
            type: src_app_services_trading_bots_service__WEBPACK_IMPORTED_MODULE_2__["TradingBotsService"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "qfBg":
    /*!******************************************!*\
      !*** ./src/app/services/user.service.ts ***!
      \******************************************/

    /*! exports provided: UserService */

    /***/
    function qfBg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserService", function () {
        return UserService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./authentication.service */
      "ej43");

      var UserService = /*#__PURE__*/function () {
        function UserService(http, authenticationService) {
          _classCallCheck(this, UserService);

          this.http = http;
          this.authenticationService = authenticationService;
        }

        _createClass(UserService, [{
          key: "get",
          value: function get() {
            return this.http.get("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl, "/users/profile"));
          }
        }, {
          key: "update",
          value: function update(profile) {
            return this.http.put("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl, "/users/profile"), profile);
          }
        }, {
          key: "delete",
          value: function _delete(id) {
            return this.http["delete"]("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl, "/users/").concat(id));
          }
        }]);

        return UserService;
      }();

      UserService.ɵfac = function UserService_Factory(t) {
        return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]));
      };

      UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: UserService,
        factory: UserService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
          }, {
            type: _authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "rmXB":
    /*!*************************************************************!*\
      !*** ./src/app/components/create-bot/create-bot.service.ts ***!
      \*************************************************************/

    /*! exports provided: CreateBotService */

    /***/
    function rmXB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CreateBotService", function () {
        return CreateBotService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _models_enums__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../models/enums */
      "2pNN");
      /* harmony import */


      var src_app_models_strategy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/models/strategy */
      "7HRS");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/authentication.service */
      "ej43");

      var CreateBotService = /*#__PURE__*/function () {
        function CreateBotService(http, authenticationService) {
          _classCallCheck(this, CreateBotService);

          this.http = http;
          this.authenticationService = authenticationService;
        }

        _createClass(CreateBotService, [{
          key: "createBot",
          value: function createBot(bot) {
            return this.http.post("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl, "/bot/create"), bot).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
          }
        }, {
          key: "getFinancialInstruments",
          value: function getFinancialInstruments() {
            return Object.values(_models_enums__WEBPACK_IMPORTED_MODULE_4__["FinancialInstrument"]).filter(function (val) {
              return typeof val === 'string';
            });
          }
        }, {
          key: "getSecurities",
          value: function getSecurities(instument) {
            // todo формировать список на бэкенде
            return [{
              name: 'FORD',
              value: 'F'
            }, {
              name: 'AMD',
              value: 'AMD'
            }, {
              name: 'Activision',
              value: 'ATVI'
            }, {
              name: 'VEON',
              value: 'VEON'
            }];
          }
        }, {
          key: "getStrategies",
          value: function getStrategies() {
            return [{
              name: src_app_models_strategy__WEBPACK_IMPORTED_MODULE_5__["StrategyList"].simpleTV,
              description: 'Берет данные по техническому анализу с TradingView',
              disabled: false
            }, {
              name: src_app_models_strategy__WEBPACK_IMPORTED_MODULE_5__["StrategyList"].simpleRaddar,
              description: 'Берет данные по техническому анализу с Raddar.io',
              disabled: true
            }];
          } // getIndustries() {
          //   return Object.values(Industry).filter(val => typeof val === 'string') as string[];
          // }
          // getAssets(financialInstrument: number, industry: number): Observable<Asset[]> {
          //   let params = new HttpParams();
          //   params = params.append('fi', financialInstrument.toString());
          //   params = params.append('ind', industry.toString());
          //   return this.http.get<Asset[]>(`${environment.apiUrl}/api/robots/GetAssetsByFinancialInstrumentAndIndustry`, { params: params });
          // }

        }, {
          key: "handleError",
          value: function handleError(error) {
            console.log("🚀 ~ file: create-bot.service.ts ~ line 78 ~ CreateBotService ~ handleError ~ error", error);
            var msg;

            if (error.error) {
              msg = 'Произошла ошибка:' + error.error.message;
            } else {
              msg = "\u041F\u0440\u043E\u0438\u0437\u043E\u0448\u043B\u0430 \u043E\u0448\u0438\u0431\u043A\u0430: ".concat(error.error, ". \u041A\u043E\u0434 \u043E\u0448\u0438\u0431\u043A\u0438 ").concat(error.status);
            }

            console.error('CreateBotService::handleError() ' + msg);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(msg);
          }
        }]);

        return CreateBotService;
      }();

      CreateBotService.ɵfac = function CreateBotService_Factory(t) {
        return new (t || CreateBotService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"]));
      };

      CreateBotService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: CreateBotService,
        factory: CreateBotService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreateBotService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]
          }, {
            type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "vUOy":
    /*!*******************************************************************!*\
      !*** ./src/app/components/account/settings/settings.component.ts ***!
      \*******************************************************************/

    /*! exports provided: SettingsComponent */

    /***/
    function vUOy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SettingsComponent", function () {
        return SettingsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/user.service */
      "qfBg");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/grid-list */
      "zkoq");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/datepicker */
      "iadO");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_radio__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/radio */
      "QibW");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");

      var _c0 = function _c0(a0) {
        return {
          "is-invalid": a0
        };
      };

      var SettingsComponent = /*#__PURE__*/function () {
        function SettingsComponent(userService, snackbar, formBuilder) {
          _classCallCheck(this, SettingsComponent);

          this.userService = userService;
          this.snackbar = snackbar;
          this.formBuilder = formBuilder;
          this.hide = true;
          this.submitted = false;
          this.loading = false;
        }

        _createClass(SettingsComponent, [{
          key: "controls",
          get: function get() {
            return this.profileForm.controls;
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this22 = this;

            this.profileForm = this.formBuilder.group({
              email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email],
              tinkoffToken: [''],
              name: [''],
              lastName: [''],
              bitrhDate: [''],
              location: [''],
              gender: ['']
            });
            this.userService.get().subscribe(function (res) {
              return _this22.profileForm.patchValue(res);
            });
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this23 = this;

            this.submitted = true;

            if (this.profileForm.invalid) {
              return;
            }

            this.loading = true;
            var profile = this.profileForm.value; // setTimeout(() => {

            this.userService.update(profile).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])()).subscribe(function (_) {
              _this23.loading = false;

              _this23.showMessage("Успешно сохранено");
            }, function (error) {
              _this23.showErrorMessage(error); // this.alertService.error(error);


              _this23.loading = false;
            }); // }, 1500);
          }
        }, {
          key: "showErrorMessage",
          value: function showErrorMessage(httpError) {
            var _this24 = this;

            console.log("🚀 ~ file: login.component.ts ~ line 90 ~ LoginComponent ~ showErrorMessage ~ message.error", httpError);

            if (httpError.error.array && httpError.error.array.length) {
              var arr = httpError.error.array;
              arr.forEach(function (el) {
                _this24.snackbar.open(el.msg, 'OK', {
                  duration: 6000
                });
              });
            } else {
              this.snackbar.open(httpError.error.msg, 'OK', {
                duration: 6000
              });
            }
          }
        }, {
          key: "showMessage",
          value: function showMessage(message) {
            this.snackbar.open(message, 'OK', {
              duration: 3000
            });
          }
        }]);

        return SettingsComponent;
      }();

      SettingsComponent.ɵfac = function SettingsComponent_Factory(t) {
        return new (t || SettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]));
      };

      SettingsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SettingsComponent,
        selectors: [["app-settings"]],
        decls: 54,
        vars: 9,
        consts: [[3, "formGroup", "ngSubmit"], ["cols", "2", "rowHeight", "100px"], ["appearance", "outline", 2, "width", "90%"], ["matInput", "", "formControlName", "name"], ["matInput", "", "formControlName", "lastName"], ["matInput", "", "formControlName", "email"], ["appearance", "outline", "appearance", "outline", 2, "width", "90%"], ["matInput", "", "formControlName", "bitrhDate", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["datepicker", ""], ["mat-button", "", "matDatepickerCancel", ""], ["mat-raised-button", "", "color", "primary", "matDatepickerApply", ""], ["matInput", "", "formControlName", "location"], [1, "example-section"], ["formControlName", "gender"], ["value", "0", 2, "margin", "0 10px"], ["value", "1", 2, "margin", "0 10px"], ["matInput", "", "formControlName", "tinkoffToken", 3, "type", "ngClass"], ["matSuffix", "", 3, "click"], ["mat-raised-button", "", "color", "accent", "type", "submit", 3, "disabled"]],
        template: function SettingsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SettingsComponent_Template_form_ngSubmit_2_listener() {
              return ctx.onSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-grid-list", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-grid-tile");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-form-field", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u0424\u0430\u043C\u0438\u043B\u0438\u044F");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-grid-tile");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-form-field", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u0418\u043C\u044F");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-grid-tile");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-form-field", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Email");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-grid-tile");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-form-field", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\u0414\u0430\u0442\u0430 \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "mat-datepicker-toggle", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-datepicker", null, 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-datepicker-actions");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Apply");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-grid-tile");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-form-field", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "\u0413\u043E\u0440\u043E\u0434");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "input", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-grid-tile");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "section", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-radio-group", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-radio-button", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "\u0416");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-radio-button", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "\u041C");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-grid-tile");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "mat-form-field", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "\u0422\u043E\u043A\u0435\u043D \u043E\u0442 \u0422\u0438\u043D\u044C\u043A\u043E\u0444\u0444 \u0438\u043D\u0432\u0435\u0441\u0442\u0438\u0446\u0438\u0439");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "input", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "mat-icon", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SettingsComponent_Template_mat_icon_click_49_listener() {
              return ctx.hide = !ctx.hide;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "button", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " \u041E\u0431\u043D\u043E\u0432\u0438\u0442\u044C ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.profileForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.hide ? "tinkoffToken" : "text")("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, ctx.submitted && ctx.controls.tinkoffToken.errors));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.hide ? "visibility_off" : "visibility");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.profileForm.valid);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_5__["MatGridList"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_5__["MatGridTile"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepicker"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerCancel"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerApply"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_10__["MatRadioGroup"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_10__["MatRadioButton"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgClass"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIcon"]],
        styles: ["h1[_ngcontent-%COMP%], div[_ngcontent-%COMP%] {\n  margin: 3%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNldHRpbmdzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVO0FBQ1oiLCJmaWxlIjoic2V0dGluZ3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgxLCBkaXYge1xuICBtYXJnaW46IDMlO1xufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SettingsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-settings',
            templateUrl: './settings.component.html',
            styleUrls: ['./settings.component.css']
          }]
        }], function () {
          return [{
            type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
          }, {
            type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "vkOh":
    /*!************************************************************************!*\
      !*** ./src/app/components/main-dashboard/widgets/widgets.component.ts ***!
      \************************************************************************/

    /*! exports provided: WidgetsComponent */

    /***/
    function vkOh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WidgetsComponent", function () {
        return WidgetsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var WidgetsComponent = /*#__PURE__*/function () {
        function WidgetsComponent() {
          _classCallCheck(this, WidgetsComponent);
        }

        _createClass(WidgetsComponent, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var tradingView = new TradingView.widget({
              container_id: 'technical-analysis-' + this.ticker,
              autosize: true,
              symbol: this.index + ':' + this.ticker,
              interval: '120',
              timezone: 'exchange',
              theme: 'Light',
              style: '1',
              toolbar_bg: '#f1f3f6',
              withdateranges: true,
              hide_side_toolbar: false,
              allow_symbol_change: true,
              save_image: false,
              hideideas: true,
              studies: ['MASimple@tv-basicstudies'],
              show_popup_button: true,
              popup_width: '1000',
              popup_height: '650'
            });
          }
        }]);

        return WidgetsComponent;
      }();

      WidgetsComponent.ɵfac = function WidgetsComponent_Factory(t) {
        return new (t || WidgetsComponent)();
      };

      WidgetsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: WidgetsComponent,
        selectors: [["app-widgets"]],
        inputs: {
          index: "index",
          ticker: "ticker"
        },
        decls: 1,
        vars: 1,
        consts: [[2, "height", "235px", 3, "id"]],
        template: function WidgetsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", "technical-analysis-" + ctx.ticker);
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3aWRnZXRzLmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WidgetsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-widgets',
            templateUrl: './widgets.component.html',
            styleUrls: ['./widgets.component.css']
          }]
        }], function () {
          return [];
        }, {
          index: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          ticker: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map