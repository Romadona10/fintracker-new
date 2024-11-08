"use strict";(self.webpackChunkFintracker=self.webpackChunkFintracker||[]).push([[854],{3854:(J,v,s)=>{s.r(v),s.d(v,{ExpensesModule:()=>K});var x=s(177),g=s(8498),e=s(7705),b=s(6850),d=s(5596);let M=(()=>{class n{constructor(t){this.router=t}ngOnInit(){this.router.navigate(["/expenses/expenses-list"])}onTabChange(t){switch(t){case 0:this.router.navigate(["expenses/expenses-list"]);break;case 1:this.router.navigate(["expenses/add-expenses"]);break;case 2:this.router.navigate(["expenses/edit-expenses"])}}static{this.\u0275fac=function(i){return new(i||n)(e.rXU(g.Ix))}}static{this.\u0275cmp=e.VBU({type:n,selectors:[["app-expenses"]],decls:8,vars:0,consts:[[3,"selectedIndexChange"],["label","Expenses List"],["label","Add Expenses"],["label","Edit Expenses"]],template:function(i,a){1&i&&(e.j41(0,"mat-card")(1,"mat-card-title"),e.EFF(2,"Expenses"),e.k0s(),e.j41(3,"mat-tab-group",0),e.bIt("selectedIndexChange",function(p){return a.onTabChange(p)}),e.nrm(4,"mat-tab",1)(5,"mat-tab",2)(6,"mat-tab",3),e.k0s(),e.nrm(7,"router-outlet"),e.k0s())},dependencies:[g.n3,b.mq,b.T8,d.RN,d.dh],styles:["mat-card-title[_ngcontent-%COMP%]{text-align:center}"]})}}return n})();var S=s(9183);let P=(()=>{class n{static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275cmp=e.VBU({type:n,selectors:[["app-loadingmodal"]],decls:5,vars:0,consts:[[1,"custom-spinner"],["diameter","50"]],template:function(i,a){1&i&&(e.j41(0,"mat-card",0)(1,"mat-card-content"),e.nrm(2,"mat-spinner",1),e.j41(3,"p"),e.EFF(4,"Loading..."),e.k0s()()())},dependencies:[S.LG,d.RN,d.m2],styles:["mat-card[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;padding:20px}mat-spinner[_ngcontent-%COMP%]{margin-bottom:10px;width:20px;height:20px}"]})}}return n})();var A=s(7738),k=s(5351),_=s(9213),u=s(8834);let y=(()=>{class n{constructor(t,i){this.expenseService=t,this.dialog=i,this.expensesByMonth=[],this.loading=!1,this.userId=""}ngOnInit(){this.fetchExpenses()}fetchExpenses(){this.loading=!0,this.userId=localStorage.getItem("userId")||"",this.expenseService.getExpensesByMonth(this.userId).subscribe({next:t=>{this.expensesByMonth=Array.isArray(t)?t:[],this.loading=!1},error:t=>{console.error("Error fetching monthly expenses:",t),this.loading=!1}})}refresh(){const t=this.dialog.open(P);this.fetchExpenses(),t.afterOpened().subscribe(()=>{setTimeout(()=>{t.close()},4e3)})}static{this.\u0275fac=function(i){return new(i||n)(e.rXU(A.k),e.rXU(k.bZ))}}static{this.\u0275cmp=e.VBU({type:n,selectors:[["app-expenses-list"]],decls:20,vars:0,consts:[[1,"message-container"],["color","warn",2,"font-size","48px"],["align","end"],["mat-raised-button","","color","primary",3,"click"]],template:function(i,a){1&i&&(e.j41(0,"mat-card")(1,"mat-card-header")(2,"mat-card-title"),e.EFF(3,"Expenses List Unavailable"),e.k0s()(),e.j41(4,"mat-card-content")(5,"div",0)(6,"mat-icon",1),e.EFF(7,"warning"),e.k0s(),e.j41(8,"p"),e.EFF(9,"We apologize for the inconvenience."),e.k0s(),e.j41(10,"p"),e.EFF(11,"The expenses list is not available at the moment, but our team at "),e.j41(12,"strong"),e.EFF(13,"RomadonaTeam"),e.k0s(),e.EFF(14," is working hard to serve you better."),e.k0s(),e.j41(15,"p"),e.EFF(16,"Please check back soon!"),e.k0s()()(),e.j41(17,"mat-card-actions",2)(18,"button",3),e.bIt("click",function(){return a.refresh()}),e.EFF(19,"Try Again"),e.k0s()()())},dependencies:[_.An,u.$z,d.RN,d.YY,d.m2,d.MM,d.dh],styles:[".message-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;text-align:center;gap:10px;font-size:1.1em;color:#666}mat-icon[_ngcontent-%COMP%]{height:50px;width:50px;font-size:48px;color:#f44336}mat-card-header[_ngcontent-%COMP%]{display:flex;justify-content:center}"]})}}return n})();var o=s(9417),j=s(5416),m=s(882),C=s(2798),f=s(6600),E=s(9631),h=s(5084);function N(n,c){if(1&n&&(e.j41(0,"mat-option",19),e.EFF(1),e.k0s()),2&n){const t=c.$implicit;e.Y8G("value",t),e.R7$(1),e.SpI(" ",t," ")}}function R(n,c){if(1&n&&(e.j41(0,"mat-form-field",3)(1,"mat-label",16),e.EFF(2,"Category"),e.k0s(),e.j41(3,"mat-select",17),e.DNE(4,N,2,2,"mat-option",18),e.k0s()()),2&n){const t=e.XpG();e.R7$(4),e.Y8G("ngForOf",t.categories)}}function H(n,c){1&n&&(e.j41(0,"mat-form-field",3)(1,"mat-label",20),e.EFF(2,"Custom Category"),e.k0s(),e.nrm(3,"input",21),e.k0s())}let I=(()=>{class n{constructor(t,i,a,r){this.fb=t,this.expenseService=i,this.dialog=a,this.snackBar=r,this.isCustomCategory=!1,this.categories=["Groceries","Rent","Religious-giving","Utilities","Transportation","Entertainment","Food","Electronics","Clothing","Health","Insurance","Wardrobe","Baby","Subscription","Beauty","Bills","Sports"]}ngOnInit(){this.initializeForm()}initializeForm(){this.expenseForm=this.fb.group({date:[new Date,o.k0.required],category:["",o.k0.required],customCategory:[""],description:["",o.k0.required],amount:["",[o.k0.required,o.k0.min(1)]]})}onSubmit(){if(this.expenseForm.valid){const t=this.dialog.open(P),i={...this.expenseForm.value,userId:localStorage.getItem("userId")};setTimeout(()=>{this.expenseService.addExpense(i).subscribe({next:a=>{console.log("Expense added successfully:",a),t.close(),this.snackBar.open("Expense added successfully!","Close",{duration:3e3}),this.resetForm()},error:a=>{t.close(),console.error("Error adding expense:",a)}})},5e3)}}resetForm(){this.expenseForm.reset({date:new Date,category:"",customCategory:"",description:"",amount:""}),this.isCustomCategory=!1}toggleCustomCategory(){this.isCustomCategory=!this.isCustomCategory,this.isCustomCategory?this.expenseForm.get("category")?.clearValidators():(this.expenseForm.get("customCategory")?.setValue(""),this.expenseForm.get("category")?.setValidators(o.k0.required)),this.expenseForm.get("category")?.updateValueAndValidity(),this.expenseForm.get("customCategory")?.updateValueAndValidity()}static{this.\u0275fac=function(i){return new(i||n)(e.rXU(o.ok),e.rXU(A.k),e.rXU(k.bZ),e.rXU(j.UG))}}static{this.\u0275cmp=e.VBU({type:n,selectors:[["app-add-expense"]],decls:32,vars:7,consts:[[1,"expense-card"],[1,"title"],[3,"formGroup","ngSubmit"],["appearance","fill",1,"full-width"],["matInput","","formControlName","date",3,"matDatepicker"],["matSuffix","",3,"for"],["picker",""],[1,"category-container"],["class","full-width","appearance","fill",4,"ngIf"],["mat-stroked-button","","color","primary","type","button",1,"toggle-btn",3,"click"],["for","description"],["matInput","","formControlName","description","placeholder","Describe your expense","id","description"],["for","amount"],["matInput","","type","number","formControlName","amount","placeholder","Enter amount","id","amount"],[1,"btn-container"],["mat-raised-button","","color","primary","type","submit",1,"submit-btn"],["for","category"],["formControlName","category","id","category"],[3,"value",4,"ngFor","ngForOf"],[3,"value"],["for","custom Category"],["matInput","","formControlName","customCategory","placeholder","Enter custom category","id","custom Category"]],template:function(i,a){if(1&i&&(e.j41(0,"mat-card",0)(1,"mat-card-title",1),e.EFF(2,"Add New Expense"),e.k0s(),e.j41(3,"mat-card-content")(4,"form",2),e.bIt("ngSubmit",function(){return a.onSubmit()}),e.j41(5,"mat-form-field",3)(6,"mat-label"),e.EFF(7,"Date"),e.k0s(),e.nrm(8,"input",4)(9,"mat-datepicker-toggle",5)(10,"mat-datepicker",null,6),e.k0s(),e.j41(12,"div",7),e.DNE(13,R,5,1,"mat-form-field",8),e.DNE(14,H,4,0,"mat-form-field",8),e.j41(15,"button",9),e.bIt("click",function(){return a.toggleCustomCategory()}),e.j41(16,"mat-icon"),e.EFF(17),e.k0s(),e.EFF(18),e.k0s()(),e.j41(19,"mat-form-field",3)(20,"mat-label",10),e.EFF(21,"Description"),e.k0s(),e.nrm(22,"input",11),e.k0s(),e.j41(23,"mat-form-field",3)(24,"mat-label",12),e.EFF(25,"Amount"),e.k0s(),e.nrm(26,"input",13),e.k0s(),e.j41(27,"div",14)(28,"button",15)(29,"mat-icon"),e.EFF(30,"add_circle"),e.k0s(),e.EFF(31," Add Expense "),e.k0s()()()()()),2&i){const r=e.sdS(11);e.R7$(4),e.Y8G("formGroup",a.expenseForm),e.R7$(4),e.Y8G("matDatepicker",r),e.R7$(1),e.Y8G("for",r),e.R7$(4),e.Y8G("ngIf",!a.isCustomCategory),e.R7$(1),e.Y8G("ngIf",a.isCustomCategory),e.R7$(3),e.JRh(a.isCustomCategory?"list":"add"),e.R7$(1),e.SpI(" ",a.isCustomCategory?"Choose from List":"Add Category"," ")}},dependencies:[x.Sq,x.bT,o.qT,o.me,o.Q0,o.BC,o.cb,o.j4,o.JD,m.rl,m.nJ,m.yw,C.VO,f.wT,E.fg,h.Vh,h.bZ,h.bU,_.An,u.$z,d.RN,d.m2,d.dh],styles:[".expense-card[_ngcontent-%COMP%]{max-width:400px;margin:auto;padding:20px;background-color:#fafafa;box-shadow:0 2px 10px #0000001a;border-radius:8px;overflow-y:auto}.expense-card[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:1.5rem;color:#1976d2;text-align:center;margin-bottom:20px}.full-width[_ngcontent-%COMP%]{width:100%}.category-container[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;margin-top:10px}.category-container[_ngcontent-%COMP%]   .toggle-btn[_ngcontent-%COMP%]{white-space:nowrap;height:36px;display:flex;align-items:center;gap:5px;font-size:.9rem;background-color:#e57373;color:#fff}.category-container[_ngcontent-%COMP%]   .toggle-btn[_ngcontent-%COMP%]:hover{background-color:#dd4848}.category-container[_ngcontent-%COMP%]   .toggle-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:18px}.btn-container[_ngcontent-%COMP%]{display:flex;justify-content:center;margin-top:10px}.btn-container[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%]{background-color:#1976d2;color:#fff;display:flex;align-items:center;gap:5px}.btn-container[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:20px}.btn-container[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%]:hover{background-color:#145ca4}@media (max-width: 600px){.expense-card[_ngcontent-%COMP%]{padding:15px}.title[_ngcontent-%COMP%]{font-size:1.3rem}.toggle-btn[_ngcontent-%COMP%], .submit-btn[_ngcontent-%COMP%]{font-size:.85rem}}"]})}}return n})();function z(n,c){if(1&n&&(e.j41(0,"mat-option",12),e.EFF(1),e.k0s()),2&n){const t=c.$implicit;e.Y8G("value",t),e.R7$(1),e.SpI(" ",t," ")}}let F=(()=>{class n{constructor(t,i){this.fb=t,this.route=i,this.categories=["Groceries","Rent","Utilities","Transportation","Entertainment"],this.expenseId=null}ngOnInit(){this.expenseId=this.route.snapshot.paramMap.get("id"),this.initializeForm(),this.loadExpense()}initializeForm(){this.editForm=this.fb.group({date:[new Date,o.k0.required],category:["",o.k0.required],description:["",o.k0.required],amount:["",[o.k0.required,o.k0.min(1)]]})}loadExpense(){this.expenseId&&this.editForm.patchValue({date:new Date("2024-10-15"),category:"Groceries",description:"Weekly groceries",amount:150})}onSubmit(){this.editForm.valid&&console.log("Expense updated:",this.editForm.value)}static{this.\u0275fac=function(i){return new(i||n)(e.rXU(o.ok),e.rXU(g.nX))}}static{this.\u0275cmp=e.VBU({type:n,selectors:[["app-edit-expense"]],decls:28,vars:4,consts:[[1,"edit-card"],[3,"formGroup","ngSubmit"],["appearance","fill",1,"full-width"],["matInput","","formControlName","date",3,"matDatepicker"],["matSuffix","",3,"for"],["picker",""],["formControlName","category"],[3,"value",4,"ngFor","ngForOf"],["matInput","","formControlName","description"],["matInput","","type","number","formControlName","amount"],[1,"btn-container"],["mat-raised-button","","color","primary","type","submit"],[3,"value"]],template:function(i,a){if(1&i&&(e.j41(0,"mat-card",0)(1,"mat-card-title"),e.EFF(2,"Edit Expense"),e.k0s(),e.j41(3,"mat-card-content")(4,"form",1),e.bIt("ngSubmit",function(){return a.onSubmit()}),e.j41(5,"mat-form-field",2)(6,"mat-label"),e.EFF(7,"Date"),e.k0s(),e.nrm(8,"input",3)(9,"mat-datepicker-toggle",4)(10,"mat-datepicker",null,5),e.k0s(),e.j41(12,"mat-form-field",2)(13,"mat-label"),e.EFF(14,"Category"),e.k0s(),e.j41(15,"mat-select",6),e.DNE(16,z,2,2,"mat-option",7),e.k0s()(),e.j41(17,"mat-form-field",2)(18,"mat-label"),e.EFF(19,"Description"),e.k0s(),e.nrm(20,"input",8),e.k0s(),e.j41(21,"mat-form-field",2)(22,"mat-label"),e.EFF(23,"Amount"),e.k0s(),e.nrm(24,"input",9),e.k0s(),e.j41(25,"div",10)(26,"button",11),e.EFF(27,"Save Changes"),e.k0s()()()()()),2&i){const r=e.sdS(11);e.R7$(4),e.Y8G("formGroup",a.editForm),e.R7$(4),e.Y8G("matDatepicker",r),e.R7$(1),e.Y8G("for",r),e.R7$(7),e.Y8G("ngForOf",a.categories)}},dependencies:[x.Sq,o.qT,o.me,o.Q0,o.BC,o.cb,o.j4,o.JD,m.rl,m.nJ,m.yw,C.VO,f.wT,E.fg,h.Vh,h.bZ,h.bU,u.$z,d.RN,d.m2,d.dh],styles:[".edit-card[_ngcontent-%COMP%]{max-width:500px;margin:auto;padding:20px;background-color:#fafafa;box-shadow:0 2px 10px #0000001a;border-radius:8px}.edit-card[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:1.5rem;color:#1976d2;text-align:center;margin-bottom:20px}.full-width[_ngcontent-%COMP%]{width:100%}.category-container[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;margin-top:10px}.category-container[_ngcontent-%COMP%]   .toggle-btn[_ngcontent-%COMP%]{white-space:nowrap;height:36px;display:flex;align-items:center;gap:5px;font-size:.9rem;background-color:#e57373;color:#fff}.category-container[_ngcontent-%COMP%]   .toggle-btn[_ngcontent-%COMP%]:hover{background-color:#dd4848}.category-container[_ngcontent-%COMP%]   .toggle-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:18px}.btn-container[_ngcontent-%COMP%]{display:flex;justify-content:center;margin-top:20px}.btn-container[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%]{background-color:#1976d2;color:#fff;display:flex;align-items:center;gap:5px}.btn-container[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:20px}.btn-container[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%]:hover{background-color:#145ca4}@media (max-width: 600px){.expense-card[_ngcontent-%COMP%]{padding:15px}.title[_ngcontent-%COMP%]{font-size:1.3rem}.toggle-btn[_ngcontent-%COMP%], .submit-btn[_ngcontent-%COMP%]{font-size:.85rem}}"]})}}return n})();const B=[{path:"",component:M,children:[{path:"",redirectTo:"expenses",pathMatch:"full"},{path:"expenses-list",component:y},{path:"add-expenses",component:I},{path:"edit-expenses",component:F}]}];let U=(()=>{class n{static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275mod=e.$C({type:n})}static{this.\u0275inj=e.G2t({imports:[g.iI.forChild(B),g.iI]})}}return n})();var $=s(9159);let L=(()=>{class n{static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275mod=e.$C({type:n})}static{this.\u0275inj=e.G2t({})}}return n})();var G=s(6939);s(9969);let V=(()=>{class n{static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275mod=e.$C({type:n})}static{this.\u0275inj=e.G2t({imports:[x.MD,f.yE,L,G.jc]})}}return n})();var X=s(3902),Y=s(1997),D=s(7575);const Q=[{path:"",component:M,children:[{path:"",component:y},{path:"Expenses-list",component:y},{path:"add-expenses",component:I},{path:"edit-expenses",component:F}]}];let K=(()=>{class n{static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275mod=e.$C({type:n})}static{this.\u0275inj=e.G2t({imports:[x.MD,U,o.X1,o.YN,C.Ve,f.WX,E.fS,$.tP,h.X6,V,b.RI,m.RG,X.Fg,D.PO,_.m_,u.Hl,Y.w,D.PO,d.Hu,g.iI.forChild(Q)]})}}return n})()}}]);