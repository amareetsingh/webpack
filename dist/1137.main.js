"use strict";(self.webpackChunklogin_auth=self.webpackChunklogin_auth||[]).push([[1137],{8101:function(t,e,o){var r=o(7294),a=o(5697),n=o(4184);function s(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var l=s(r),i=s(a),c=s(n),u=function(){return u=Object.assign||function(t){for(var e,o=1,r=arguments.length;o<r;o++)for(var a in e=arguments[o])Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t},u.apply(this,arguments)};function d(t,e){var o={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(o[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(t);a<r.length;a++)e.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(t,r[a])&&(o[r[a]]=t[r[a]])}return o}var p=l.default.forwardRef((function(t,e){var o=t.classes,r=t.value,a=t.min,n=t.max,s=t.onChange,i=t.onMouseUpOrTouchEnd,c=t.onMouseUp,p=t.onTouchEnd,h=d(t,["classes","value","min","max","onChange","onMouseUpOrTouchEnd","onMouseUp","onTouchEnd"]);return l.default.createElement("input",u({ref:e,type:"range",value:r,min:a,max:n,onChange:function(t){return s(t,t.target.valueAsNumber)},onMouseUp:function(t){i(t),c&&c(t)},onTouchEnd:function(t){i(t),p&&p(t)},className:o,"aria-valuenow":Number(r),"aria-valuemin":Number(a),"aria-valuemax":Number(n)},h))})),h=l.default.memo(p),g=l.default.forwardRef((function(t,e){var o=t.value,a=t.onChange,n=void 0===a?function(){}:a,s=t.onAfterChange,i=void 0===s?function(){}:s,p=t.disabled,g=void 0!==p&&p,m=t.size,f=t.min,C=void 0===f?0:f,v=t.max,b=void 0===v?100:v,y=t.step,E=t.variant,w=void 0===E?"primary":E,T=t.inputProps,D=void 0===T?{}:T,P=t.tooltip,_=void 0===P?"auto":P,z=t.tooltipPlacement,W=void 0===z?"bottom":z,A=t.tooltipLabel,I=t.tooltipStyle,L=void 0===I?{}:I,O=t.tooltipProps,S=void 0===O?{}:O,x=t.bsPrefix,N=t.className,k=d(t,["value","onChange","onAfterChange","disabled","size","min","max","step","variant","inputProps","tooltip","tooltipPlacement","tooltipLabel","tooltipStyle","tooltipProps","bsPrefix","className"]),F=r.useState(),M=F[0],U=F[1],R=x||"range-slider",j="auto"===_||"on"===_,B=c.default(N,R,m&&R+"--"+m,g&&"disabled",w&&R+"--"+w),q=u(u({},D),k),Z=q.onMouseUp,K=q.onTouchEnd,G=d(q,["onMouseUp","onTouchEnd"]),Q=r.useCallback((function(t){M!==t.target.value&&i(t,t.target.valueAsNumber),U(t.target.value)}),[M,i]),V=l.default.createElement(h,u({},u({disabled:g,value:o,min:C,max:b,ref:e,step:y,classes:B,onMouseUpOrTouchEnd:Q,onTouchEnd:K,onMouseUp:Z,onChange:n},G))),H=c.default(R+"__wrap",m&&R+"__wrap--"+m),$=c.default(R+"__tooltip",j&&R+"__tooltip--"+_,W&&R+"__tooltip--"+W,g&&R+"__tooltip--disabled"),J="sm"===m?8:"lg"===m?12:10,X=(Number(o)-C)/(b-C),Y=100*X,tt=2*(X-.5)*-J;return l.default.createElement("span",{className:H},V,j&&l.default.createElement("div",u({className:$,style:u(u({},L||{}),{left:"calc("+Y+"% + "+tt+"px)"})},S),l.default.createElement("div",{className:R+"__tooltip__label"},A?A(Number(o)):o),l.default.createElement("div",{className:R+"__tooltip__caret"})))}));g.propTypes={value:i.default.oneOfType([i.default.number,i.default.string]).isRequired,onChange:i.default.func,onAfterChange:i.default.func,min:i.default.number,max:i.default.number,step:i.default.number,disabled:i.default.bool,size:i.default.oneOf(["sm","lg"]),variant:i.default.oneOf(["primary","secondary","success","danger","warning","info","dark","light"]),inputProps:i.default.object,tooltip:i.default.oneOf(["auto","on","off"]),tooltipPlacement:i.default.oneOf(["top","bottom"]),tooltipLabel:i.default.func,tooltipStyle:i.default.object,tooltipProps:i.default.object,className:i.default.string,bsPrefix:i.default.string};var m=l.default.memo(g);t.exports=m},7977:function(t,e,o){var r=o(4184),a=o.n(r),n=o(7294),s=o(6792),l=o(5893);const i=n.forwardRef((({bsPrefix:t,bg:e,pill:o,text:r,className:n,as:i="span",...c},u)=>{const d=(0,s.vE)(t,"badge");return(0,l.jsx)(i,{ref:u,...c,className:a()(n,d,o&&"rounded-pill",r&&`text-${r}`,e&&`bg-${e}`)})}));i.displayName="Badge",i.defaultProps={bg:"primary",pill:!1},e.Z=i},2982:function(t,e,o){o.d(e,{Z:function(){return n}});var r=o(907),a=o(181);function n(t){return function(t){if(Array.isArray(t))return(0,r.Z)(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||(0,a.Z)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},6887:function(t,e,o){o.d(e,{ZP:function(){return b}});var r=o(7294);function a(t){let{onLoad:e,onError:o,...a}=t;const[n,s]=function(t){let{chartVersion:e="current",chartPackages:o=["corechart","controls"],chartLanguage:a="en",mapsApiKey:n}=t;const[s,l]=(0,r.useState)(null),[i,c]=(0,r.useState)(!1);var u,d,p;return u="https://www.gstatic.com/charts/loader.js",d=()=>{const t=null===window||void 0===window?void 0:window.google;t&&(t.charts.load(e,{packages:o,language:a,mapsApiKey:n}),t.charts.setOnLoadCallback((()=>{l(t)})))},p=()=>{c(!0)},(0,r.useEffect)((()=>{if(!document)return;const t=document.querySelector('script[src="'.concat(u,'"]'));if(null==t?void 0:t.dataset.loaded)return void(null==d||d());const e=t||document.createElement("script");t||(e.src=u);const o=()=>{e.dataset.loaded="1",null==d||d()};return e.addEventListener("load",o),p&&e.addEventListener("error",p),t||document.head.append(e),()=>{e.removeEventListener("load",o),p&&e.removeEventListener("error",p)}}),[]),[s,i]}(a);return(0,r.useEffect)((()=>{n&&e&&e(n)}),[n]),(0,r.useEffect)((()=>{s&&o&&o()}),[s]),null}const n={legend_toggle:!1,options:{},legendToggle:!1,getChartWrapper:()=>{},spreadSheetQueryParameters:{headers:1,gid:1},rootProps:{},chartWrapperParams:{}};let s=0;const l=["#3366CC","#DC3912","#FF9900","#109618","#990099","#3B3EAC","#0099C6","#DD4477","#66AA00","#B82E2E","#316395","#994499","#22AA99","#AAAA11","#6633CC","#E67300","#8B0707","#329262","#5574A6","#3B3EAC"],{Provider:i,Consumer:c}=r.createContext(n),u=t=>{let{children:e,value:o}=t;return r.createElement(i,{value:o},e)},d=t=>{let{render:e}=t;return r.createElement(c,null,(t=>e(t)))};class p extends r.Component{componentDidMount(){this.draw(this.props),window.addEventListener("resize",this.onResize),(this.props.legend_toggle||this.props.legendToggle)&&this.listenToLegendToggle()}componentWillUnmount(){const{google:t,googleChartWrapper:e}=this.props;window.removeEventListener("resize",this.onResize),t.visualization.events.removeAllListeners(e),"Timeline"===e.getChartType()&&e.getChart()&&e.getChart().clearChart()}componentDidUpdate(){this.draw(this.props)}render(){return null}constructor(...t){super(...t),this.state={hiddenColumns:[]},this.listenToLegendToggle=()=>{const{google:t,googleChartWrapper:e}=this.props;t.visualization.events.addListener(e,"select",(()=>{const t=e.getChart().getSelection(),o=e.getDataTable();if(0===t.length||t[0].row||!o)return;const r=t[0].column,a=this.getColumnID(o,r);this.state.hiddenColumns.includes(a)?this.setState((t=>({...t,hiddenColumns:[...t.hiddenColumns.filter((t=>t!==a))]}))):this.setState((t=>({...t,hiddenColumns:[...t.hiddenColumns,a]})))}))},this.applyFormatters=(t,e)=>{const{google:o}=this.props;for(let r of e)switch(r.type){case"ArrowFormat":new o.visualization.ArrowFormat(r.options).format(t,r.column);break;case"BarFormat":new o.visualization.BarFormat(r.options).format(t,r.column);break;case"ColorFormat":{const e=new o.visualization.ColorFormat(r.options),{ranges:a}=r;for(let t of a)e.addRange(...t);e.format(t,r.column);break}case"DateFormat":new o.visualization.DateFormat(r.options).format(t,r.column);break;case"NumberFormat":new o.visualization.NumberFormat(r.options).format(t,r.column);break;case"PatternFormat":new o.visualization.PatternFormat(r.options).format(t,r.column)}},this.getColumnID=(t,e)=>t.getColumnId(e)||t.getColumnLabel(e),this.draw=async t=>{let{data:e,diffdata:o,rows:r,columns:a,options:n,legend_toggle:s,legendToggle:l,chartType:i,formatters:c,spreadSheetUrl:u,spreadSheetQueryParameters:d}=t;const{google:p,googleChartWrapper:h}=this.props;let g,m=null;if(o){const t=p.visualization.arrayToDataTable(o.old),e=p.visualization.arrayToDataTable(o.new);m=p.visualization[i].prototype.computeDiff(t,e)}g=null!==e?Array.isArray(e)?p.visualization.arrayToDataTable(e):new p.visualization.DataTable(e):r&&a?p.visualization.arrayToDataTable([a,...r]):u?await async function(t,e){let o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new Promise(((r,a)=>{const n="".concat(o.headers?"headers=".concat(o.headers):"headers=0"),s="".concat(o.query?"&tq=".concat(encodeURIComponent(o.query)):""),l="".concat(o.gid?"&gid=".concat(o.gid):""),i="".concat(o.sheet?"&sheet=".concat(o.sheet):""),c="".concat(o.access_token?"&access_token=".concat(o.access_token):""),u="".concat(n).concat(l).concat(i).concat(s).concat(c),d="".concat(e,"/gviz/tq?").concat(u);new t.visualization.Query(d).send((t=>{t.isError()?a("Error in query:  ".concat(t.getMessage()," ").concat(t.getDetailedMessage())):r(t.getDataTable())}))}))}(p,u,d):p.visualization.arrayToDataTable([]);const f=g.getNumberOfColumns();for(let t=0;t<f;t+=1){const e=this.getColumnID(g,t);if(this.state.hiddenColumns.includes(e)){const e=g.getColumnLabel(t),o=g.getColumnId(t),r=g.getColumnType(t);g.removeColumn(t),g.addColumn({label:e,id:o,type:r})}}const C=h.getChart();"Timeline"===h.getChartType()&&C&&C.clearChart(),h.setChartType(i),h.setOptions(n||{}),h.setDataTable(g),h.draw(),null!==this.props.googleChartDashboard&&this.props.googleChartDashboard.draw(g),m&&(h.setDataTable(m),h.draw()),c&&(this.applyFormatters(g,c),h.setDataTable(g),h.draw()),!0!==l&&!0!==s||this.grayOutHiddenColumns({options:n})},this.grayOutHiddenColumns=t=>{let{options:e}=t;const{googleChartWrapper:o}=this.props,r=o.getDataTable();if(!r)return;const a=r.getNumberOfColumns();if(!1==this.state.hiddenColumns.length>0)return;const n=Array.from({length:a-1}).map(((t,o)=>{const a=this.getColumnID(r,o+1);return this.state.hiddenColumns.includes(a)?"#CCCCCC":e&&e.colors?e.colors[o]:l[o]}));o.setOptions({...e,colors:n}),o.draw()},this.onResize=()=>{const{googleChartWrapper:t}=this.props;t.draw()}}}class h extends r.Component{componentDidMount(){}componentWillUnmount(){}shouldComponentUpdate(){return!1}render(){const{google:t,googleChartWrapper:e,googleChartDashboard:o}=this.props;return r.createElement(d,{render:a=>r.createElement(p,Object.assign({},a,{google:t,googleChartWrapper:e,googleChartDashboard:o}))})}}class g extends r.Component{shouldComponentUpdate(){return!1}listenToEvents(t){let{chartEvents:e,google:o,googleChartWrapper:r}=t;if(e){o.visualization.events.removeAllListeners(r);for(let t of e){var a=this;const{eventName:e,callback:n}=t;o.visualization.events.addListener(r,e,(function(){for(var t=arguments.length,e=new Array(t),s=0;s<t;s++)e[s]=arguments[s];n({chartWrapper:r,props:a.props,google:o,eventArgs:e})}))}}}render(){const{google:t,googleChartWrapper:e}=this.props;return r.createElement(d,{render:o=>(this.listenToEvents({chartEvents:o.chartEvents||null,google:t,googleChartWrapper:e}),null)})}}let m=0;class f extends r.Component{componentDidMount(){const{options:t,google:e,chartType:o,chartWrapperParams:r,toolbarItems:a,getChartEditor:n,getChartWrapper:s}=this.props,l={chartType:o,options:t,containerId:this.getGraphID(),...r},i=new e.visualization.ChartWrapper(l);i.setOptions(t||{}),s&&s(i,e);const c=new e.visualization.Dashboard(this.dashboard_ref),u=this.addControls(i,c);a&&e.visualization.drawToolbar(this.toolbar_ref.current,a);let d=null;n&&(d=new e.visualization.ChartEditor,n({chartEditor:d,chartWrapper:i,google:e})),this.setState({googleChartEditor:d,googleChartControls:u,googleChartDashboard:c,googleChartWrapper:i,isReady:!0})}componentDidUpdate(){if(!this.state.googleChartWrapper)return;if(!this.state.googleChartDashboard)return;if(!this.state.googleChartControls)return;const{controls:t}=this.props;if(t)for(let e=0;e<t.length;e+=1){const{controlType:o,options:r,controlWrapperParams:a}=t[e];a&&"state"in a&&this.state.googleChartControls[e].control.setState(a.state),this.state.googleChartControls[e].control.setOptions(r),this.state.googleChartControls[e].control.setControlType(o)}}shouldComponentUpdate(t,e){return this.state.isReady!==e.isReady||t.controls!==this.props.controls}render(){const{width:t,height:e,options:o,style:a}=this.props,n={height:e||o&&o.height,width:t||o&&o.width,...a};return this.props.render?r.createElement("div",{ref:this.dashboard_ref,style:n},r.createElement("div",{ref:this.toolbar_ref,id:"toolbar"}),this.props.render({renderChart:this.renderChart,renderControl:this.renderControl,renderToolbar:this.renderToolBar})):r.createElement("div",{ref:this.dashboard_ref,style:n},this.renderControl((t=>{let{controlProp:e}=t;return"bottom"!==e.controlPosition})),this.renderChart(),this.renderControl((t=>{let{controlProp:e}=t;return"bottom"===e.controlPosition})),this.renderToolBar())}constructor(...t){var e;super(),e=this,this.state={googleChartWrapper:null,googleChartDashboard:null,googleChartControls:null,googleChartEditor:null,isReady:!1},this.graphID=null,this.dashboard_ref=r.createRef(),this.toolbar_ref=r.createRef(),this.getGraphID=()=>{const{graphID:t,graph_id:e}=this.props;let o;return t||e?o=t&&!e?t:e&&!t?e:t:this.graphID?o=this.graphID:(s+=1,o="reactgooglegraph-".concat(s)),this.graphID=o,this.graphID},this.getControlID=(t,e)=>{let o;return m+=1,o=void 0===t?"googlechart-control-".concat(e,"-").concat(m):t,o},this.addControls=(t,e)=>{const{google:o,controls:r}=this.props,a=r?r.map(((t,e)=>{const{controlID:r,controlType:a,options:n,controlWrapperParams:s}=t,l=this.getControlID(r,e);return{controlProp:t,control:new o.visualization.ControlWrapper({containerId:l,controlType:a,options:n,...s})}})):null;if(!a)return null;e.bind(a.map((t=>{let{control:e}=t;return e})),t);for(let e of a){const{control:r,controlProp:a}=e,{controlEvents:s=[]}=a;for(let e of s){var n=this;const{callback:a,eventName:s}=e;o.visualization.events.removeListener(r,s,a),o.visualization.events.addListener(r,s,(function(){for(var e=arguments.length,s=new Array(e),l=0;l<e;l++)s[l]=arguments[l];a({chartWrapper:t,controlWrapper:r,props:n.props,google:o,eventArgs:s})}))}}return a},this.renderChart=()=>{const{width:t,height:e,options:o,style:a,className:n,rootProps:s,google:l}=this.props,i={height:e||o&&o.height,width:t||o&&o.width,...a};return r.createElement("div",Object.assign({id:this.getGraphID(),style:i,className:n},s),this.state.isReady&&null!==this.state.googleChartWrapper?r.createElement(r.Fragment,null,r.createElement(h,{googleChartWrapper:this.state.googleChartWrapper,google:l,googleChartDashboard:this.state.googleChartDashboard}),r.createElement(g,{googleChartWrapper:this.state.googleChartWrapper,google:l})):null)},this.renderControl=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t=>!0;return e.state.isReady&&null!==e.state.googleChartControls?r.createElement(r.Fragment,null,e.state.googleChartControls.filter((e=>{let{controlProp:o,control:r}=e;return t({control:r,controlProp:o})})).map((t=>{let{control:e,controlProp:o}=t;return r.createElement("div",{key:e.getContainerId(),id:e.getContainerId()})}))):null},this.renderToolBar=()=>this.props.toolbarItems?r.createElement("div",{ref:this.toolbar_ref}):null}}class C extends r.Component{render(){const{chartLanguage:t,chartPackages:e,chartVersion:o,mapsApiKey:n,loader:s,errorElement:l}=this.props;return r.createElement(u,{value:this.props},"ready"===this.state.loadingStatus&&null!==this.state.google?r.createElement(f,Object.assign({},this.props,{google:this.state.google})):"errored"===this.state.loadingStatus&&l?l:s,r.createElement(a,{chartLanguage:t,chartPackages:e,chartVersion:o,mapsApiKey:n,onLoad:this.onLoad,onError:this.onError}))}componentDidMount(){this._isMounted=!0}componentWillUnmount(){this._isMounted=!1}isFullyLoaded(t){const{controls:e,toolbarItems:o,getChartEditor:r}=this.props;return t&&t.visualization&&t.visualization.ChartWrapper&&t.visualization.Dashboard&&(!e||t.visualization.ChartWrapper)&&(!r||t.visualization.ChartEditor)&&(!o||t.visualization.drawToolbar)}constructor(...t){super(...t),this._isMounted=!1,this.state={loadingStatus:"loading",google:null},this.onLoad=t=>{if(this.props.onLoad&&this.props.onLoad(t),this.isFullyLoaded(t))this.onSuccess(t);else{const t=setInterval((()=>{const e=window.google;this._isMounted?e&&this.isFullyLoaded(e)&&(clearInterval(t),this.onSuccess(e)):clearInterval(t)}),1e3)}},this.onSuccess=t=>{this.setState({loadingStatus:"ready",google:t})},this.onError=()=>{this.setState({loadingStatus:"errored"})}}}var v;C.defaultProps=n,function(t){t.annotation="annotation",t.annotationText="annotationText",t.certainty="certainty",t.emphasis="emphasis",t.interval="interval",t.scope="scope",t.style="style",t.tooltip="tooltip",t.domain="domain"}(v||(v={}));var b=C}}]);