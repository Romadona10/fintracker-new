"use strict";(self.webpackChunkFintracker=self.webpackChunkFintracker||[]).push([[208],{6208:(J,b,d)=>{d.r(b),d.d(b,{SettingsModule:()=>Q});var h=d(177),m=d(8498),e=d(7705),p=d(5596),u=d(6850);let T=(()=>{class c{constructor(t){this.router=t}ngOnInit(){this.router.navigate(["/settings/preferences"])}onTabChange(t){0===t&&this.router.navigate(["/settings/preferences"])}static{this.\u0275fac=function(s){return new(s||c)(e.rXU(m.Ix))}}static{this.\u0275cmp=e.VBU({type:c,selectors:[["app-settings"]],decls:6,vars:0,consts:[[3,"selectedIndexChange"],["label","Preferences"]],template:function(s,i){1&s&&(e.j41(0,"mat-card")(1,"mat-card-title"),e.EFF(2,"Settings"),e.k0s(),e.j41(3,"mat-tab-group",0),e.bIt("selectedIndexChange",function(o){return i.onTabChange(o)}),e.nrm(4,"mat-tab",1),e.k0s(),e.nrm(5,"router-outlet"),e.k0s())},dependencies:[m.n3,p.RN,p.dh,u.mq,u.T8]})}}return c})();var a=d(9417),x=d(7892),F=d(5416),f=d(882),_=d(9631),v=d(5911),y=d(2798),n=d(6600),k=d(7575),R=d(8617),w=d(4085);const P=["switch"];function D(c,l){1&c&&(e.j41(0,"div",12),e.qSk(),e.j41(1,"svg",13),e.nrm(2,"path",14),e.k0s(),e.j41(3,"svg",15),e.nrm(4,"path",16),e.k0s()())}const E=["*"],O=new e.nKC("mat-slide-toggle-default-options",{providedIn:"root",factory:()=>({disableToggleValue:!1,hideIcon:!1})}),z={provide:a.kq,useExisting:(0,e.Rfq)(()=>M),multi:!0};class C{constructor(l,t){this.source=l,this.checked=t}}let G=0;const j=(0,n.BF)((0,n.Zc)((0,n.GG)((0,n.Ob)(class{constructor(c){this._elementRef=c}}))));let B=(()=>{class c extends j{get required(){return this._required}set required(t){this._required=(0,w.he)(t)}get checked(){return this._checked}set checked(t){this._checked=(0,w.he)(t),this._changeDetectorRef.markForCheck()}get hideIcon(){return this._hideIcon}set hideIcon(t){this._hideIcon=(0,w.he)(t)}get inputId(){return`${this.id||this._uniqueId}-input`}constructor(t,s,i,r,o,g,H){super(t),this._focusMonitor=s,this._changeDetectorRef=i,this.defaults=o,this._onChange=Z=>{},this._onTouched=()=>{},this._required=!1,this._checked=!1,this.name=null,this.labelPosition="after",this.ariaLabel=null,this.ariaLabelledby=null,this._hideIcon=!1,this.change=new e.bkB,this.toggleChange=new e.bkB,this.tabIndex=parseInt(r)||0,this.color=this.defaultColor=o.color||"accent",this._noopAnimations="NoopAnimations"===g,this.id=this._uniqueId=`${H}${++G}`,this._hideIcon=o.hideIcon??!1}ngAfterContentInit(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(t=>{"keyboard"===t||"program"===t?(this._focused=!0,this._changeDetectorRef.markForCheck()):t||Promise.resolve().then(()=>{this._focused=!1,this._onTouched(),this._changeDetectorRef.markForCheck()})})}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef)}writeValue(t){this.checked=!!t}registerOnChange(t){this._onChange=t}registerOnTouched(t){this._onTouched=t}setDisabledState(t){this.disabled=t,this._changeDetectorRef.markForCheck()}toggle(){this.checked=!this.checked,this._onChange(this.checked)}_emitChangeEvent(){this._onChange(this.checked),this.change.emit(this._createChangeEvent(this.checked))}static{this.\u0275fac=function(s){e.QTQ()}}static{this.\u0275dir=e.FsC({type:c,inputs:{name:"name",id:"id",labelPosition:"labelPosition",ariaLabel:["aria-label","ariaLabel"],ariaLabelledby:["aria-labelledby","ariaLabelledby"],ariaDescribedby:["aria-describedby","ariaDescribedby"],required:"required",checked:"checked",hideIcon:"hideIcon"},outputs:{change:"change",toggleChange:"toggleChange"},features:[e.Vt3]})}}return c})(),M=(()=>{class c extends B{get buttonId(){return`${this.id||this._uniqueId}-button`}constructor(t,s,i,r,o,g){super(t,s,i,r,o,g,"mat-mdc-slide-toggle-"),this._labelId=this._uniqueId+"-label"}_handleClick(){this.toggleChange.emit(),this.defaults.disableToggleValue||(this.checked=!this.checked,this._onChange(this.checked),this.change.emit(new C(this,this.checked)))}focus(){this._switchElement.nativeElement.focus()}_createChangeEvent(t){return new C(this,t)}_getAriaLabelledBy(){return this.ariaLabelledby?this.ariaLabelledby:this.ariaLabel?null:this._labelId}static{this.\u0275fac=function(s){return new(s||c)(e.rXU(e.aKT),e.rXU(R.FN),e.rXU(e.gRc),e.kS0("tabindex"),e.rXU(O),e.rXU(e.bc$,8))}}static{this.\u0275cmp=e.VBU({type:c,selectors:[["mat-slide-toggle"]],viewQuery:function(s,i){if(1&s&&e.GBs(P,5),2&s){let r;e.mGM(r=e.lsd())&&(i._switchElement=r.first)}},hostAttrs:[1,"mat-mdc-slide-toggle"],hostVars:11,hostBindings:function(s,i){2&s&&(e.Mr5("id",i.id),e.BMQ("tabindex",null)("aria-label",null)("name",null)("aria-labelledby",null),e.AVh("mat-mdc-slide-toggle-focused",i._focused)("mat-mdc-slide-toggle-checked",i.checked)("_mat-animation-noopable",i._noopAnimations))},inputs:{disabled:"disabled",disableRipple:"disableRipple",color:"color",tabIndex:"tabIndex"},exportAs:["matSlideToggle"],features:[e.Jv_([z]),e.Vt3],ngContentSelectors:E,decls:13,vars:25,consts:[[1,"mdc-form-field"],["role","switch","type","button",1,"mdc-switch",3,"tabIndex","disabled","click"],["switch",""],[1,"mdc-switch__track"],[1,"mdc-switch__handle-track"],[1,"mdc-switch__handle"],[1,"mdc-switch__shadow"],[1,"mdc-elevation-overlay"],[1,"mdc-switch__ripple"],["mat-ripple","",1,"mat-mdc-slide-toggle-ripple","mat-mdc-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],["class","mdc-switch__icons",4,"ngIf"],[1,"mdc-label",3,"for","click"],[1,"mdc-switch__icons"],["viewBox","0 0 24 24","aria-hidden","true",1,"mdc-switch__icon","mdc-switch__icon--on"],["d","M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z"],["viewBox","0 0 24 24","aria-hidden","true",1,"mdc-switch__icon","mdc-switch__icon--off"],["d","M20 13H4v-2h16v2z"]],template:function(s,i){if(1&s&&(e.NAR(),e.j41(0,"div",0)(1,"button",1,2),e.bIt("click",function(){return i._handleClick()}),e.nrm(3,"div",3),e.j41(4,"div",4)(5,"div",5)(6,"div",6),e.nrm(7,"div",7),e.k0s(),e.j41(8,"div",8),e.nrm(9,"div",9),e.k0s(),e.DNE(10,D,5,0,"div",10),e.k0s()()(),e.j41(11,"label",11),e.bIt("click",function(o){return o.stopPropagation()}),e.SdG(12),e.k0s()()),2&s){const r=e.sdS(2);e.AVh("mdc-form-field--align-end","before"==i.labelPosition),e.R7$(1),e.AVh("mdc-switch--selected",i.checked)("mdc-switch--unselected",!i.checked)("mdc-switch--checked",i.checked)("mdc-switch--disabled",i.disabled),e.Y8G("tabIndex",i.tabIndex)("disabled",i.disabled),e.BMQ("id",i.buttonId)("name",i.name)("aria-label",i.ariaLabel)("aria-labelledby",i._getAriaLabelledBy())("aria-describedby",i.ariaDescribedby)("aria-required",i.required||null)("aria-checked",i.checked),e.R7$(8),e.Y8G("matRippleTrigger",r)("matRippleDisabled",i.disableRipple||i.disabled)("matRippleCentered",!0),e.R7$(1),e.Y8G("ngIf",!i.hideIcon),e.R7$(1),e.Y8G("for",i.buttonId),e.BMQ("id",i._labelId)}},dependencies:[n.r6,h.bT],styles:['.mdc-form-field{display:inline-flex;align-items:center;vertical-align:middle}.mdc-form-field[hidden]{display:none}.mdc-form-field>label{margin-left:0;margin-right:auto;padding-left:4px;padding-right:0;order:0}[dir=rtl] .mdc-form-field>label,.mdc-form-field>label[dir=rtl]{margin-left:auto;margin-right:0}[dir=rtl] .mdc-form-field>label,.mdc-form-field>label[dir=rtl]{padding-left:0;padding-right:4px}.mdc-form-field--nowrap>label{text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.mdc-form-field--align-end>label{margin-left:auto;margin-right:0;padding-left:0;padding-right:4px;order:-1}[dir=rtl] .mdc-form-field--align-end>label,.mdc-form-field--align-end>label[dir=rtl]{margin-left:0;margin-right:auto}[dir=rtl] .mdc-form-field--align-end>label,.mdc-form-field--align-end>label[dir=rtl]{padding-left:4px;padding-right:0}.mdc-form-field--space-between{justify-content:space-between}.mdc-form-field--space-between>label{margin:0}[dir=rtl] .mdc-form-field--space-between>label,.mdc-form-field--space-between>label[dir=rtl]{margin:0}.mdc-elevation-overlay{position:absolute;border-radius:inherit;pointer-events:none;opacity:var(--mdc-elevation-overlay-opacity);transition:opacity 280ms cubic-bezier(0.4, 0, 0.2, 1);background-color:var(--mdc-elevation-overlay-color)}.mdc-switch{align-items:center;background:none;border:none;cursor:pointer;display:inline-flex;flex-shrink:0;margin:0;outline:none;overflow:visible;padding:0;position:relative}.mdc-switch[hidden]{display:none}.mdc-switch:disabled{cursor:default;pointer-events:none}.mdc-switch__track{overflow:hidden;position:relative;width:100%}.mdc-switch__track::before,.mdc-switch__track::after{border:1px solid rgba(0,0,0,0);border-radius:inherit;box-sizing:border-box;content:"";height:100%;left:0;position:absolute;width:100%}@media screen and (forced-colors: active){.mdc-switch__track::before,.mdc-switch__track::after{border-color:currentColor}}.mdc-switch__track::before{transition:transform 75ms 0ms cubic-bezier(0, 0, 0.2, 1);transform:translateX(0)}.mdc-switch__track::after{transition:transform 75ms 0ms cubic-bezier(0.4, 0, 0.6, 1);transform:translateX(-100%)}[dir=rtl] .mdc-switch__track::after,.mdc-switch__track[dir=rtl]::after{transform:translateX(100%)}.mdc-switch--selected .mdc-switch__track::before{transition:transform 75ms 0ms cubic-bezier(0.4, 0, 0.6, 1);transform:translateX(100%)}[dir=rtl] .mdc-switch--selected .mdc-switch__track::before,.mdc-switch--selected .mdc-switch__track[dir=rtl]::before{transform:translateX(-100%)}.mdc-switch--selected .mdc-switch__track::after{transition:transform 75ms 0ms cubic-bezier(0, 0, 0.2, 1);transform:translateX(0)}.mdc-switch__handle-track{height:100%;pointer-events:none;position:absolute;top:0;transition:transform 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);left:0;right:auto;transform:translateX(0)}[dir=rtl] .mdc-switch__handle-track,.mdc-switch__handle-track[dir=rtl]{left:auto;right:0}.mdc-switch--selected .mdc-switch__handle-track{transform:translateX(100%)}[dir=rtl] .mdc-switch--selected .mdc-switch__handle-track,.mdc-switch--selected .mdc-switch__handle-track[dir=rtl]{transform:translateX(-100%)}.mdc-switch__handle{display:flex;pointer-events:auto;position:absolute;top:50%;transform:translateY(-50%);left:0;right:auto}[dir=rtl] .mdc-switch__handle,.mdc-switch__handle[dir=rtl]{left:auto;right:0}.mdc-switch__handle::before,.mdc-switch__handle::after{border:1px solid rgba(0,0,0,0);border-radius:inherit;box-sizing:border-box;content:"";width:100%;height:100%;left:0;position:absolute;top:0;transition:background-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1),border-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);z-index:-1}@media screen and (forced-colors: active){.mdc-switch__handle::before,.mdc-switch__handle::after{border-color:currentColor}}.mdc-switch__shadow{border-radius:inherit;bottom:0;left:0;position:absolute;right:0;top:0}.mdc-elevation-overlay{bottom:0;left:0;right:0;top:0}.mdc-switch__ripple{left:50%;position:absolute;top:50%;transform:translate(-50%, -50%);z-index:-1}.mdc-switch:disabled .mdc-switch__ripple{display:none}.mdc-switch__icons{height:100%;position:relative;width:100%;z-index:1}.mdc-switch__icon{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0;opacity:0;transition:opacity 30ms 0ms cubic-bezier(0.4, 0, 1, 1)}.mdc-switch--selected .mdc-switch__icon--on,.mdc-switch--unselected .mdc-switch__icon--off{opacity:1;transition:opacity 45ms 30ms cubic-bezier(0, 0, 0.2, 1)}.mdc-switch{width:var(--mdc-switch-track-width);--mdc-switch-disabled-handle-opacity:0.38;--mdc-switch-disabled-selected-icon-opacity:0.38;--mdc-switch-disabled-track-opacity:0.12;--mdc-switch-disabled-unselected-icon-opacity:0.38;--mdc-switch-handle-height:20px;--mdc-switch-handle-shape:10px;--mdc-switch-handle-width:20px;--mdc-switch-selected-icon-size:18px;--mdc-switch-track-height:14px;--mdc-switch-track-shape:7px;--mdc-switch-track-width:36px;--mdc-switch-unselected-icon-size:18px;--mdc-switch-state-layer-size:40px;--mdc-switch-selected-focus-state-layer-opacity:0.12;--mdc-switch-selected-hover-state-layer-opacity:0.04;--mdc-switch-selected-pressed-state-layer-opacity:0.1;--mdc-switch-unselected-focus-state-layer-opacity:0.12;--mdc-switch-unselected-hover-state-layer-opacity:0.04;--mdc-switch-unselected-pressed-state-layer-opacity:0.1}.mdc-switch.mdc-switch--selected:enabled .mdc-switch__handle::after{background:var(--mdc-switch-selected-handle-color)}.mdc-switch.mdc-switch--selected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after{background:var(--mdc-switch-selected-hover-handle-color)}.mdc-switch.mdc-switch--selected:enabled:focus:not(:active) .mdc-switch__handle::after{background:var(--mdc-switch-selected-focus-handle-color)}.mdc-switch.mdc-switch--selected:enabled:active .mdc-switch__handle::after{background:var(--mdc-switch-selected-pressed-handle-color)}.mdc-switch.mdc-switch--selected:disabled .mdc-switch__handle::after{background:var(--mdc-switch-disabled-selected-handle-color)}.mdc-switch.mdc-switch--unselected:enabled .mdc-switch__handle::after{background:var(--mdc-switch-unselected-handle-color)}.mdc-switch.mdc-switch--unselected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after{background:var(--mdc-switch-unselected-hover-handle-color)}.mdc-switch.mdc-switch--unselected:enabled:focus:not(:active) .mdc-switch__handle::after{background:var(--mdc-switch-unselected-focus-handle-color)}.mdc-switch.mdc-switch--unselected:enabled:active .mdc-switch__handle::after{background:var(--mdc-switch-unselected-pressed-handle-color)}.mdc-switch.mdc-switch--unselected:disabled .mdc-switch__handle::after{background:var(--mdc-switch-disabled-unselected-handle-color)}.mdc-switch .mdc-switch__handle::before{background:var(--mdc-switch-handle-surface-color)}.mdc-switch:enabled .mdc-switch__shadow{box-shadow:var(--mdc-switch-handle-elevation)}.mdc-switch:disabled .mdc-switch__shadow{box-shadow:var(--mdc-switch-disabled-handle-elevation)}.mdc-switch .mdc-switch__focus-ring-wrapper,.mdc-switch .mdc-switch__handle{height:var(--mdc-switch-handle-height)}.mdc-switch:disabled .mdc-switch__handle::after{opacity:var(--mdc-switch-disabled-handle-opacity)}.mdc-switch .mdc-switch__handle{border-radius:var(--mdc-switch-handle-shape)}.mdc-switch .mdc-switch__handle{width:var(--mdc-switch-handle-width)}.mdc-switch .mdc-switch__handle-track{width:calc(100% - var(--mdc-switch-handle-width))}.mdc-switch.mdc-switch--selected:enabled .mdc-switch__icon{fill:var(--mdc-switch-selected-icon-color)}.mdc-switch.mdc-switch--selected:disabled .mdc-switch__icon{fill:var(--mdc-switch-disabled-selected-icon-color)}.mdc-switch.mdc-switch--unselected:enabled .mdc-switch__icon{fill:var(--mdc-switch-unselected-icon-color)}.mdc-switch.mdc-switch--unselected:disabled .mdc-switch__icon{fill:var(--mdc-switch-disabled-unselected-icon-color)}.mdc-switch.mdc-switch--selected:disabled .mdc-switch__icons{opacity:var(--mdc-switch-disabled-selected-icon-opacity)}.mdc-switch.mdc-switch--unselected:disabled .mdc-switch__icons{opacity:var(--mdc-switch-disabled-unselected-icon-opacity)}.mdc-switch.mdc-switch--selected .mdc-switch__icon{width:var(--mdc-switch-selected-icon-size);height:var(--mdc-switch-selected-icon-size)}.mdc-switch.mdc-switch--unselected .mdc-switch__icon{width:var(--mdc-switch-unselected-icon-size);height:var(--mdc-switch-unselected-icon-size)}.mdc-switch.mdc-switch--selected:enabled:hover:not(:focus) .mdc-switch__ripple::before,.mdc-switch.mdc-switch--selected:enabled:hover:not(:focus) .mdc-switch__ripple::after{background-color:var(--mdc-switch-selected-hover-state-layer-color)}.mdc-switch.mdc-switch--selected:enabled:focus .mdc-switch__ripple::before,.mdc-switch.mdc-switch--selected:enabled:focus .mdc-switch__ripple::after{background-color:var(--mdc-switch-selected-focus-state-layer-color)}.mdc-switch.mdc-switch--selected:enabled:active .mdc-switch__ripple::before,.mdc-switch.mdc-switch--selected:enabled:active .mdc-switch__ripple::after{background-color:var(--mdc-switch-selected-pressed-state-layer-color)}.mdc-switch.mdc-switch--unselected:enabled:hover:not(:focus) .mdc-switch__ripple::before,.mdc-switch.mdc-switch--unselected:enabled:hover:not(:focus) .mdc-switch__ripple::after{background-color:var(--mdc-switch-unselected-hover-state-layer-color)}.mdc-switch.mdc-switch--unselected:enabled:focus .mdc-switch__ripple::before,.mdc-switch.mdc-switch--unselected:enabled:focus .mdc-switch__ripple::after{background-color:var(--mdc-switch-unselected-focus-state-layer-color)}.mdc-switch.mdc-switch--unselected:enabled:active .mdc-switch__ripple::before,.mdc-switch.mdc-switch--unselected:enabled:active .mdc-switch__ripple::after{background-color:var(--mdc-switch-unselected-pressed-state-layer-color)}.mdc-switch.mdc-switch--selected:enabled:hover:not(:focus):hover .mdc-switch__ripple::before,.mdc-switch.mdc-switch--selected:enabled:hover:not(:focus).mdc-ripple-surface--hover .mdc-switch__ripple::before{opacity:var(--mdc-switch-selected-hover-state-layer-opacity)}.mdc-switch.mdc-switch--selected:enabled:focus.mdc-ripple-upgraded--background-focused .mdc-switch__ripple::before,.mdc-switch.mdc-switch--selected:enabled:focus:not(.mdc-ripple-upgraded):focus .mdc-switch__ripple::before{transition-duration:75ms;opacity:var(--mdc-switch-selected-focus-state-layer-opacity)}.mdc-switch.mdc-switch--selected:enabled:active:not(.mdc-ripple-upgraded) .mdc-switch__ripple::after{transition:opacity 150ms linear}.mdc-switch.mdc-switch--selected:enabled:active:not(.mdc-ripple-upgraded):active .mdc-switch__ripple::after{transition-duration:75ms;opacity:var(--mdc-switch-selected-pressed-state-layer-opacity)}.mdc-switch.mdc-switch--selected:enabled:active.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-switch-selected-pressed-state-layer-opacity)}.mdc-switch.mdc-switch--unselected:enabled:hover:not(:focus):hover .mdc-switch__ripple::before,.mdc-switch.mdc-switch--unselected:enabled:hover:not(:focus).mdc-ripple-surface--hover .mdc-switch__ripple::before{opacity:var(--mdc-switch-unselected-hover-state-layer-opacity)}.mdc-switch.mdc-switch--unselected:enabled:focus.mdc-ripple-upgraded--background-focused .mdc-switch__ripple::before,.mdc-switch.mdc-switch--unselected:enabled:focus:not(.mdc-ripple-upgraded):focus .mdc-switch__ripple::before{transition-duration:75ms;opacity:var(--mdc-switch-unselected-focus-state-layer-opacity)}.mdc-switch.mdc-switch--unselected:enabled:active:not(.mdc-ripple-upgraded) .mdc-switch__ripple::after{transition:opacity 150ms linear}.mdc-switch.mdc-switch--unselected:enabled:active:not(.mdc-ripple-upgraded):active .mdc-switch__ripple::after{transition-duration:75ms;opacity:var(--mdc-switch-unselected-pressed-state-layer-opacity)}.mdc-switch.mdc-switch--unselected:enabled:active.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-switch-unselected-pressed-state-layer-opacity)}.mdc-switch .mdc-switch__ripple{height:var(--mdc-switch-state-layer-size);width:var(--mdc-switch-state-layer-size)}.mdc-switch .mdc-switch__track{height:var(--mdc-switch-track-height)}.mdc-switch:disabled .mdc-switch__track{opacity:var(--mdc-switch-disabled-track-opacity)}.mdc-switch:enabled .mdc-switch__track::after{background:var(--mdc-switch-selected-track-color)}.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::after{background:var(--mdc-switch-selected-hover-track-color)}.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::after{background:var(--mdc-switch-selected-focus-track-color)}.mdc-switch:enabled:active .mdc-switch__track::after{background:var(--mdc-switch-selected-pressed-track-color)}.mdc-switch:disabled .mdc-switch__track::after{background:var(--mdc-switch-disabled-selected-track-color)}.mdc-switch:enabled .mdc-switch__track::before{background:var(--mdc-switch-unselected-track-color)}.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::before{background:var(--mdc-switch-unselected-hover-track-color)}.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::before{background:var(--mdc-switch-unselected-focus-track-color)}.mdc-switch:enabled:active .mdc-switch__track::before{background:var(--mdc-switch-unselected-pressed-track-color)}.mdc-switch:disabled .mdc-switch__track::before{background:var(--mdc-switch-disabled-unselected-track-color)}.mdc-switch .mdc-switch__track{border-radius:var(--mdc-switch-track-shape)}.mdc-switch:enabled .mdc-switch__shadow{box-shadow:var(--mdc-switch-handle-elevation-shadow)}.mdc-switch:disabled .mdc-switch__shadow{box-shadow:var(--mdc-switch-disabled-handle-elevation-shadow)}.mat-mdc-slide-toggle .mdc-label{font-family:var(--mat-slide-toggle-label-text-font);font-size:var(--mat-slide-toggle-label-text-size);letter-spacing:var(--mat-slide-toggle-label-text-tracking);line-height:var(--mat-slide-toggle-label-text-line-height);font-weight:var(--mat-slide-toggle-label-text-weight)}.mat-mdc-slide-toggle{display:inline-block;-webkit-tap-highlight-color:rgba(0,0,0,0);outline:0}.mat-mdc-slide-toggle .mat-mdc-slide-toggle-ripple,.mat-mdc-slide-toggle .mdc-switch__ripple::after{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:50%;pointer-events:none}.mat-mdc-slide-toggle .mat-mdc-slide-toggle-ripple:not(:empty),.mat-mdc-slide-toggle .mdc-switch__ripple::after:not(:empty){transform:translateZ(0)}.mat-mdc-slide-toggle .mdc-switch__ripple::after{content:"";opacity:0}.mat-mdc-slide-toggle .mdc-switch:hover .mdc-switch__ripple::after{opacity:.04;transition:opacity 75ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-slide-toggle.mat-mdc-slide-toggle-focused .mdc-switch .mdc-switch__ripple::after{opacity:.12}.mat-mdc-slide-toggle.mat-mdc-slide-toggle-focused .mat-mdc-focus-indicator::before{content:""}.mat-mdc-slide-toggle .mat-ripple-element{opacity:.12}.mat-mdc-slide-toggle .mat-mdc-focus-indicator::before{border-radius:50%}.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle-track,.mat-mdc-slide-toggle._mat-animation-noopable .mdc-elevation-overlay,.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__icon,.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle::before,.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle::after,.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__track::before,.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__track::after{transition:none}.mat-mdc-slide-toggle .mdc-switch:enabled+.mdc-label{cursor:pointer}'],encapsulation:2,changeDetection:0})}}return c})(),I=(()=>{class c{static{this.\u0275fac=function(s){return new(s||c)}}static{this.\u0275mod=e.$C({type:c})}static{this.\u0275inj=e.G2t({})}}return c})(),$=(()=>{class c{static{this.\u0275fac=function(s){return new(s||c)}}static{this.\u0275mod=e.$C({type:c})}static{this.\u0275inj=e.G2t({imports:[I,n.yE,n.pZ,h.MD,I,n.yE]})}}return c})();var S=d(8834);function U(c,l){1&c&&e.nrm(0,"mat-progress-bar",11)}function A(c,l){if(1&c&&(e.j41(0,"mat-option",12),e.EFF(1),e.k0s()),2&c){const t=l.$implicit;e.Y8G("value",t),e.R7$(1),e.SpI(" ",t," ")}}function X(c,l){if(1&c&&(e.j41(0,"mat-option",12),e.EFF(1),e.k0s()),2&c){const t=l.$implicit;e.Y8G("value",t.value),e.R7$(1),e.SpI(" ",t.viewValue," ")}}const N=[{path:"",component:T,children:[{path:"",redirectTo:"settings",pathMatch:"full"},{path:"preferences",component:(()=>{class c{constructor(t,s,i){this.fb=t,this.userSettingsService=s,this.snackBar=i,this.userId="user_id_here",this.currencies=["$","\u20ac","\xa3","\xa5","\u20a6"],this.reminderOptions=[{value:"daily",viewValue:"Daily"},{value:"weekly",viewValue:"Weekly"},{value:"monthly",viewValue:"Monthly"}],this.saving=!1,this.preferencesForm=this.fb.group({currency:[""],notifications:[!1],reminderFrequency:[""],userBudget:[0]})}ngOnInit(){this.userId=localStorage.getItem("userId")||"",this.loadUserSettings()}loadUserSettings(){this.userSettingsService.getUserSettings(this.userId).subscribe(t=>{t&&this.preferencesForm.patchValue(t)})}onSavePreferences(){this.saving=!0;const t=this.preferencesForm.value;setTimeout(()=>{this.userSettingsService.updateUserSettings(this.userId,t).subscribe({next:()=>{this.saving=!1,this.snackBar.open("Preferences saved successfully!","Close",{duration:3e3}),this.userSettingsService.notifySettingsUpdated(t)},error:()=>{this.saving=!1,this.snackBar.open("Failed to save preferences.","Close",{duration:3e3})}})},4e3)}static{this.\u0275fac=function(s){return new(s||c)(e.rXU(a.ok),e.rXU(x.A),e.rXU(F.UG))}}static{this.\u0275cmp=e.VBU({type:c,selectors:[["app-preferences"]],decls:24,vars:4,consts:[[1,"preferences-container","mat-elevation-z8"],["mode","indeterminate",4,"ngIf"],["color","primary"],[3,"formGroup","ngSubmit"],["appearance","outline"],["formControlName","currency"],[3,"value",4,"ngFor","ngForOf"],["matInput","","type","number","formControlName","userBudget","placeholder","Enter your budget"],["formControlName","notifications","color","primary"],["formControlName","reminderFrequency"],["mat-raised-button","","color","primary","type","submit"],["mode","indeterminate"],[3,"value"]],template:function(s,i){1&s&&(e.j41(0,"div",0),e.DNE(1,U,1,0,"mat-progress-bar",1),e.j41(2,"mat-toolbar",2)(3,"span"),e.EFF(4,"Preferences"),e.k0s()(),e.j41(5,"form",3),e.bIt("ngSubmit",function(){return i.onSavePreferences()}),e.j41(6,"mat-form-field",4)(7,"mat-label"),e.EFF(8,"Currency"),e.k0s(),e.j41(9,"mat-select",5),e.DNE(10,A,2,2,"mat-option",6),e.k0s()(),e.j41(11,"mat-form-field",4)(12,"mat-label"),e.EFF(13,"Budget"),e.k0s(),e.nrm(14,"input",7),e.k0s(),e.j41(15,"mat-slide-toggle",8),e.EFF(16,"Enable Notifications"),e.k0s(),e.j41(17,"mat-form-field",4)(18,"mat-label"),e.EFF(19,"Reminder Frequency"),e.k0s(),e.j41(20,"mat-select",9),e.DNE(21,X,2,2,"mat-option",6),e.k0s()(),e.j41(22,"button",10),e.EFF(23,"Save Preferences"),e.k0s()()()),2&s&&(e.R7$(1),e.Y8G("ngIf",i.saving),e.R7$(4),e.Y8G("formGroup",i.preferencesForm),e.R7$(5),e.Y8G("ngForOf",i.currencies),e.R7$(11),e.Y8G("ngForOf",i.reminderOptions))},dependencies:[h.Sq,h.bT,f.rl,f.nJ,_.fg,v.KQ,y.VO,n.wT,a.qT,a.me,a.Q0,a.BC,a.cb,a.j4,a.JD,k.HM,M,S.$z],styles:[".preferences-container[_ngcontent-%COMP%]{width:100%;max-width:400px;margin:auto;padding:1.5rem}.preferences-container[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%], .preferences-container[_ngcontent-%COMP%]   mat-slide-toggle[_ngcontent-%COMP%]{display:block;margin:1rem 0}.preferences-container[_ngcontent-%COMP%]   mat-progress-bar[_ngcontent-%COMP%]{margin-bottom:5px;margin-top:5px}.preferences-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%;padding:10px;font-size:16px}@media (min-width: 768px){.preferences-container[_ngcontent-%COMP%]{max-width:600px;padding:2rem}button[_ngcontent-%COMP%]{width:auto;padding:12px 24px}mat-form-field[_ngcontent-%COMP%], mat-slide-toggle[_ngcontent-%COMP%]{margin:1.5rem 0}}@media (max-width: 768px){.preferences-container[_ngcontent-%COMP%]{max-width:100%;padding:1.5rem}mat-form-field[_ngcontent-%COMP%], mat-slide-toggle[_ngcontent-%COMP%]{margin:1rem 0;width:100%}button[_ngcontent-%COMP%]{width:100%;font-size:14px;padding:12px}}"]})}}return c})()}]}];let Y=(()=>{class c{static{this.\u0275fac=function(s){return new(s||c)}}static{this.\u0275mod=e.$C({type:c})}static{this.\u0275inj=e.G2t({imports:[m.iI.forChild(N),m.iI]})}}return c})();var q=d(1997);let Q=(()=>{class c{static{this.\u0275fac=function(s){return new(s||c)}}static{this.\u0275mod=e.$C({type:c})}static{this.\u0275inj=e.G2t({imports:[h.MD,Y,f.RG,_.fS,v.s5,y.Ve,q.w,a.X1,k.PO,a.YN,$,p.Hu,u.RI,S.Hl]})}}return c})()}}]);