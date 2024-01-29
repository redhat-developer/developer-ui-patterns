import{_ as v,n as d,o as ce,p as de,B as oe,A as ue,C as pe,b as Y,a as Z,m as ee,c as ae}from"./data-bInZInU_.js";import{j as D,a as c,F as me}from"./jsx-runtime-KzWSGvcx.js";import{r as a}from"./index-DogsOklH.js";import{C as te,s as b,a as ge,b as be,F as he,c as H,d as Ce,i as fe,g as Ne,e as Re}from"./StatusFilter-pEYA_ko8.js";import{g as ve,a as ye,A as Se}from"./AdvancedClusterSecurity-zp29O099.js";import{g as Oe,E as Ee}from"./EnterpriseContract-03rQc-WK.js";import{R as Ae}from"./ResultsList-al6Jki00.js";import"./identity-Xy4vYLsw.js";import"./keysIn-_M2ZZcP0.js";import"./isPlainObject-zyht5OkD.js";import"./index-MroJ3egt.js";const se=s=>{var{children:n,className:r}=s,t=v(s,["children","className"]);return a.createElement(te.Consumer,null,({isExpanded:e})=>e?a.createElement("div",Object.assign({className:d(b.cardExpandableContent,r)},t),n):null)};se.displayName="CardExpandableContent";const ne=s=>{var{children:n,className:r}=s,t=v(s,["children","className"]);return a.createElement("div",Object.assign({className:d(b.cardHeaderMain,r)},t),n)};ne.displayName="CardHeaderMain";const re=s=>{var{children:n,className:r,hasNoOffset:t=!1}=s,e=v(s,["children","className","hasNoOffset"]);return a.createElement("div",Object.assign({className:d(b.cardActions,t&&b.modifiers.noOffset,r)},e),n)};re.displayName="CardActions";const le=s=>{var{children:n,className:r}=s,t=v(s,["children","className"]);return a.createElement("div",Object.assign({className:d(b.cardSelectableActions,r)},t),n)};le.displayName="CardSelectableActions";const m={modifiers:{standalone:"pf-m-standalone",disabled:"pf-m-disabled"},radio:"pf-v5-c-radio",radioBody:"pf-v5-c-radio__body",radioDescription:"pf-v5-c-radio__description",radioInput:"pf-v5-c-radio__input",radioLabel:"pf-v5-c-radio__label"};class R extends a.Component{constructor(n){super(n),this.handleChange=r=>{this.props.onChange(r,r.currentTarget.checked)},!n.label&&!n["aria-label"]&&console.error("Radio:","Radio requires an aria-label to be specified"),this.state={ouiaStateId:ce(R.displayName)}}render(){const n=this.props,{"aria-label":r,checked:t,className:e,inputClassName:C,defaultChecked:o,isLabelWrapped:g,isLabelBeforeButton:p,isChecked:f,isDisabled:h,isValid:i,label:l,onChange:V,description:O,body:y,ouiaId:E,ouiaSafe:_=!0}=n,N=v(n,["aria-label","checked","className","inputClassName","defaultChecked","isLabelWrapped","isLabelBeforeButton","isChecked","isDisabled","isValid","label","onChange","description","body","ouiaId","ouiaSafe"]);N.id||console.error("Radio:","id is required to make input accessible");const S=a.createElement("input",Object.assign({},N,{className:d(m.radioInput,C),type:"radio",onChange:this.handleChange,"aria-invalid":!i,disabled:h,checked:t||f},t===void 0&&{defaultChecked:o},!l&&{"aria-label":r},de(R.displayName,E!==void 0?E:this.state.ouiaStateId,_)));let u=null;l&&g?u=a.createElement("span",{className:d(m.radioLabel,h&&m.modifiers.disabled)},l):l&&(u=a.createElement("label",{className:d(m.radioLabel,h&&m.modifiers.disabled),htmlFor:N.id},l));const q=O?a.createElement("span",{className:d(m.radioDescription)},O):null,B=y?a.createElement("span",{className:d(m.radioBody)},y):null,F=p?a.createElement(a.Fragment,null,u,S,q,B):a.createElement(a.Fragment,null,S,u,q,B);return g?a.createElement("label",{className:d(m.radio,e),htmlFor:N.id},F):a.createElement("div",{className:d(m.radio,!l&&m.modifiers.standalone,e)},F)}}R.displayName="Radio";R.defaultProps={className:"",isDisabled:!1,isValid:!0,onChange:()=>{}};const ie=s=>{var{children:n,className:r,actions:t,selectableActions:e,id:C,onExpand:o,toggleButtonProps:g,isToggleRightAligned:p}=s,f=v(s,["children","className","actions","selectableActions","id","onExpand","toggleButtonProps","isToggleRightAligned"]);return a.createElement(te.Consumer,null,({cardId:h,isClickable:i,isSelectable:l,isDisabled:V,hasSelectableInput:O})=>{const y=a.createElement("div",{className:d(b.cardHeaderToggle)},a.createElement(oe,Object.assign({variant:"plain",type:"button",onClick:u=>{o(u,h)}},g),a.createElement("span",{className:d(b.cardHeaderToggleIcon)},a.createElement(ue,{"aria-hidden":"true"})))),E=i&&!l||l&&!i,_=O;t!=null&&t.actions&&E&&!_&&console.warn(`${i?"Clickable":"Selectable"} only cards should not contain any other actions. If you wish to include additional actions, use a clickable and selectable card.`);const N=u=>{i&&(e!=null&&e.onClickAction?e.onClickAction(u):e!=null&&e.to&&window.open(e.to,e.isExternalLink?"_blank":"_self"))},S=()=>{const u={className:"pf-m-standalone",inputClassName:i&&!l&&"pf-v5-screen-reader",label:a.createElement(a.Fragment,null),"aria-label":e.selectableActionAriaLabel,"aria-labelledby":e.selectableActionAriaLabelledby,id:e.selectableActionId,name:e.name,isDisabled:V};return i&&!l?Object.assign(Object.assign({},u),{onClick:N}):l?Object.assign(Object.assign({},u),{onChange:e.onChange,isChecked:e.isChecked}):u};return a.createElement("div",Object.assign({className:d(b.cardHeader,p&&b.modifiers.toggleRight,r),id:C},f),o&&!p&&y,(t||e&&(i||l))&&a.createElement(re,{className:t==null?void 0:t.className,hasNoOffset:(t==null?void 0:t.hasNoOffset)||(e==null?void 0:e.hasNoOffset)},t==null?void 0:t.actions,e&&(i||l)&&a.createElement(le,{className:e==null?void 0:e.className},(e==null?void 0:e.variant)==="single"||i&&!l?a.createElement(R,Object.assign({},S())):a.createElement(pe,Object.assign({},S())))),n&&a.createElement(ne,null,n),o&&p&&y)})};ie.displayName="CardHeader";const j=({title:s,badge:n,isOpen:r,children:t})=>{var g;const[e,C]=a.useState(r??!1),o=(g=s==null?void 0:s.replace(/\//g,"-"))==null?void 0:g.toLowerCase();return D(ge,{id:o,isExpanded:e,children:[c(ie,{onExpand:()=>C(p=>!p),isToggleRightAligned:!1,toggleButtonProps:{id:`${o}-toggle-button`,"aria-label":s,"aria-labelledby":`${o}-toggle-button`,"aria-expanded":e},children:c(be,{id:`{${o}-title}`,children:D(he,{gap:{default:"gapSm"},children:[c(H,{"data-testid":"card-title",children:s}),c(H,{"data-testid":"card-badge",children:n})]})})}),c(se,{children:c(Ce,{children:t})})]})},x=j;try{j.displayName="OutputTabCard",j.__docgenInfo={description:"",displayName:"OutputTabCard",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},isOpen:{defaultValue:null,description:"",name:"isOpen",required:!1,type:{name:"boolean"}},badge:{defaultValue:null,description:"",name:"badge",required:!1,type:{name:"ReactNode"}}}}}catch{}const L=({enterpriseContractPolicies:s=[],acsImageCheckResults:n={},acsImageScanResult:r={},acsDeploymentCheckResults:t={},results:e,pipelineRunName:C,pipelineRunStatus:o})=>{const g=ve(r)||ye(n,t),p=(s==null?void 0:s.length)>0,f=[r,n,t].filter(l=>!fe(l)).length>0,h=!p&&!f,i=()=>c(Ae,{results:e,pipelineRunName:C,pipelineRunStatus:o});return D(me,{children:[p&&c(x,{title:"Enterprise Contract",badge:Ne(Oe(s)),isOpen:!0,children:c(Ee,{enterpriseContractPolicies:s})}),f&&c(x,{title:"Advanced Cluster Security",badge:Re(g),isOpen:!p,children:c(Se,{acsImageScanResult:r,acsImageCheckResults:n,acsDeploymentCheckResults:t})}),e.length>0&&h?c(i,{"data-testid":"ec"}):e.length>0?c(x,{"data-testid":"results-card",title:"Others",isOpen:h,children:c(i,{})}):null]})},ke=L;try{L.displayName="OutputTab",L.__docgenInfo={description:"",displayName:"OutputTab",props:{enterpriseContractPolicies:{defaultValue:{value:"[]"},description:"",name:"enterpriseContractPolicies",required:!1,type:{name:"EnterpriseContractPolicy[]"}},acsImageScanResult:{defaultValue:{value:"{} as ACSImageScanResult"},description:"",name:"acsImageScanResult",required:!1,type:{name:"ACSImageScanResult"}},acsImageCheckResults:{defaultValue:{value:"{} as ACSCheckResults"},description:"",name:"acsImageCheckResults",required:!1,type:{name:"ACSCheckResults"}},acsDeploymentCheckResults:{defaultValue:{value:"{} as ACSCheckResults"},description:"",name:"acsDeploymentCheckResults",required:!1,type:{name:"ACSCheckResults"}},results:{defaultValue:null,description:"",name:"results",required:!0,type:{name:"{ name: string; value: string; }[]"}},pipelineRunName:{defaultValue:null,description:"",name:"pipelineRunName",required:!0,type:{name:"string"}},pipelineRunStatus:{defaultValue:null,description:"",name:"pipelineRunStatus",required:!0,type:{name:"string"}}}}}catch{}const He={title:"Pipelines/Output",component:ke,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{pipelineRunStatus:{control:"select",options:["Failed","Succeeded"]}}},A={args:{acsImageScanResult:Y,acsImageCheckResults:Z,enterpriseContractPolicies:ee,acsDeploymentCheckResults:ae,results:[{name:"result-1",value:"value"}],pipelineRunName:"pipelineRunName",pipelineRunStatus:"Succeeded"},parameters:{}},k={args:{enterpriseContractPolicies:ee,results:[{name:"result-1",value:"value"}],pipelineRunName:"pipelineRunName",pipelineRunStatus:"Succeeded"},parameters:{}},I={args:{acsImageScanResult:Y,acsImageCheckResults:Z,acsDeploymentCheckResults:ae,results:[{name:"result-1",value:"value"}],pipelineRunName:"pipelineRunName",pipelineRunStatus:"Succeeded"},parameters:{}},T={args:{results:[{name:"result-1",value:"value"}],pipelineRunName:"pipelineRunName",pipelineRunStatus:"Succeeded"},parameters:{}};var P,w,$;A.parameters={...A.parameters,docs:{...(P=A.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    acsImageScanResult,
    acsImageCheckResults,
    enterpriseContractPolicies: mockEnterpriseContractUIData,
    acsDeploymentCheckResults: acsDeploymentCheck,
    results: [{
      name: 'result-1',
      value: 'value'
    }],
    pipelineRunName: 'pipelineRunName',
    pipelineRunStatus: 'Succeeded'
  },
  parameters: {}
}`,...($=(w=A.parameters)==null?void 0:w.docs)==null?void 0:$.source}}};var U,M,W;k.parameters={...k.parameters,docs:{...(U=k.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    enterpriseContractPolicies: mockEnterpriseContractUIData,
    results: [{
      name: 'result-1',
      value: 'value'
    }],
    pipelineRunName: 'pipelineRunName',
    pipelineRunStatus: 'Succeeded'
  },
  parameters: {}
}`,...(W=(M=k.parameters)==null?void 0:M.docs)==null?void 0:W.source}}};var z,G,J;I.parameters={...I.parameters,docs:{...(z=I.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    acsImageScanResult,
    acsImageCheckResults,
    acsDeploymentCheckResults: acsDeploymentCheck,
    results: [{
      name: 'result-1',
      value: 'value'
    }],
    pipelineRunName: 'pipelineRunName',
    pipelineRunStatus: 'Succeeded'
  },
  parameters: {}
}`,...(J=(G=I.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,Q,X;T.parameters={...T.parameters,docs:{...(K=T.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    results: [{
      name: 'result-1',
      value: 'value'
    }],
    pipelineRunName: 'pipelineRunName',
    pipelineRunStatus: 'Succeeded'
  },
  parameters: {}
}`,...(X=(Q=T.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};const Pe=["OutputTab","OutputTabEC","OutputTabACS","OutputTabResults"];export{A as OutputTab,I as OutputTabACS,k as OutputTabEC,T as OutputTabResults,Pe as __namedExportsOrder,He as default};