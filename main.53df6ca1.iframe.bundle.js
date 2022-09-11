(self.webpackChunkreact_ts_select=self.webpackChunkreact_ts_select||[]).push([[179],{"./src/components/Select/Select.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:function(){return Default},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return Select_stories}});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react=__webpack_require__("./node_modules/react/index.js"),Select_module={"gg-search":"Select_gg-search__TjW-V",select:"Select_select__Ld2bw",inputWrapper:"Select_inputWrapper__VJLlb",icon:"Select_icon__-KH6u",label:"Select_label__RrArP",input:"Select_input__wno1-",dropdown:"Select_dropdown__sVNeu",item:"Select_item__ZSFd1",title:"Select_title__1CKUq",subtitle:"Select_subtitle__Rs91U"},jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Select=function Select(_ref){var label=_ref.label,id=_ref.id,options=_ref.options,primaryColor=_ref.primaryColor,style=_ref.style,value=_ref.value,placeholder=_ref.placeholder,_useState=(_ref.name,(0,react.useState)(value||"")),_useState2=(0,slicedToArray.Z)(_useState,2),searchText=_useState2[0],setSearchText=_useState2[1],_useState3=(0,react.useState)(options||[]),_useState4=(0,slicedToArray.Z)(_useState3,2),searchResults=_useState4[0],setSearchResults=_useState4[1],_useState5=(0,react.useState)(!1),_useState6=(0,slicedToArray.Z)(_useState5,2),isOpen=_useState6[0],setIsOpen=_useState6[1],_useState7=(0,react.useState)(!1),_useState8=(0,slicedToArray.Z)(_useState7,2),isHoveringOverDropdown=_useState8[0],setIsHoveringOverDropdown=_useState8[1],_id=(0,react.useId)();id||(id=_id);var _style=(0,objectSpread2.Z)({primaryColor:null!=primaryColor?primaryColor:Select_module.primaryColor},style);return(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsxs)("div",{className:Select_module.select,children:[(0,jsx_runtime.jsx)("label",{className:Select_module.label,children:label}),(0,jsx_runtime.jsxs)("div",{className:Select_module.inputWrapper,style:{borderColor:_style.primaryColor},children:[(0,jsx_runtime.jsx)("i",{className:Select_module.icon,style:{color:_style.primaryColor}}),(0,jsx_runtime.jsx)("input",{className:Select_module.input,value:searchText,placeholder:placeholder,onChange:function onChange(e){setSearchText(e.target.value),setSearchResults(options.filter((function(option){return option.title.toLowerCase().includes(e.target.value.toLowerCase())})))},onFocus:function onFocus(){setIsOpen(!0)},onBlur:function onBlur(){isHoveringOverDropdown||setIsOpen(!1)}})]}),(0,jsx_runtime.jsxs)("div",{className:Select_module.dropdown,onMouseEnter:function onMouseEnter(){setIsHoveringOverDropdown(!0)},onMouseLeave:function onMouseLeave(){setIsHoveringOverDropdown(!1)},children:[isOpen&&searchResults.length>0&&searchResults.map((function(option){return(0,jsx_runtime.jsxs)("div",{className:Select_module.item,onClick:function onClick(){!function handleOnClick(optionValue){var selectedOption=options.find((function(option){return option.value===optionValue}));selectedOption&&(setSearchText(selectedOption.title),setIsOpen(!1))}(option.value)},children:[(0,jsx_runtime.jsx)("p",{className:Select_module.title,children:option.title}),option.subtitle&&(0,jsx_runtime.jsx)("p",{className:Select_module.subtitle,children:option.subtitle})]},option.value)})),isOpen&&0===searchResults.length&&(0,jsx_runtime.jsx)("div",{className:Select_module.item,children:"No results found"})]})]})})};try{Select.displayName="Select",Select.__docgenInfo={description:"",displayName:"Select",props:{label:{defaultValue:null,description:"The label for the select",name:"label",required:!0,type:{name:"string"}},id:{defaultValue:null,description:"The id of the select",name:"id",required:!1,type:{name:"string"}},placeholder:{defaultValue:null,description:"The placeholder of the select",name:"placeholder",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"The name of the select",name:"name",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"The value of the select",name:"value",required:!1,type:{name:"string"}},options:{defaultValue:null,description:"Options for the select",name:"options",required:!0,type:{name:"{ value: string; title: string; subtitle?: string | undefined; }[]"}},primaryColor:{defaultValue:null,description:"The primary color of the select",name:"primaryColor",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"The onChange event handler",name:"onChange",required:!1,type:{name:"((event: ChangeEvent<HTMLSelectElement>) => void)"}},onBlur:{defaultValue:null,description:"The onBlur event handler",name:"onBlur",required:!1,type:{name:"((event: FocusEvent<HTMLSelectElement, Element>) => void)"}},onFocus:{defaultValue:null,description:"The onFocus event handler",name:"onFocus",required:!1,type:{name:"((event: FocusEvent<HTMLSelectElement, Element>) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Select/Select.tsx#Select"]={docgenInfo:Select.__docgenInfo,name:"Select",path:"src/components/Select/Select.tsx#Select"})}catch(__react_docgen_typescript_loader_error){}var Select_stories={component:Select,argTypes:{label:{control:"text"},options:{control:"array",defaultValue:[{value:"1",title:"Option 1",subtitle:"Option 1 subtitle"},{value:"2",title:"Option 2",subtitle:"Option 2 subtitle"}]},primaryColor:{control:"color",defaultValue:"#2823fb"}}},Default=function Template(args){return(0,jsx_runtime.jsx)(Select,(0,objectSpread2.Z)({},args))}.bind({});Default.args={label:"Default Select"},Default.parameters=(0,objectSpread2.Z)({storySource:{source:"(args) => <Select {...args} />"}},Default.parameters);var __namedExportsOrder=["Default"]},"./.storybook/preview.js-generated-config-entry.js":function(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__){"use strict";var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,{__namedExportsOrder:function(){return __namedExportsOrder},parameters:function(){return parameters}});var ClientApi=__webpack_require__("./node_modules/@storybook/client-api/dist/esm/ClientApi.js"),parameters=(__webpack_require__("./node_modules/@storybook/addon-console/dist/index.js"),{actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}}),__namedExportsOrder=["parameters"];function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":return(0,ClientApi.uc)(value);case"argTypes":return(0,ClientApi.v9)(value);case"decorators":return value.forEach((function(decorator){return(0,ClientApi.$9)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return(0,ClientApi.HZ)(loader,!1)}));case"parameters":return(0,ClientApi.h1)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return(0,ClientApi.My)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return(0,ClientApi._C)(enhancer)}));case"render":return(0,ClientApi.$P)(value);case"globals":case"globalTypes":var v={};return v[key]=value,(0,ClientApi.h1)(v,!1);case"__namedExportsOrder":case"decorateStory":case"renderToDOM":return null;default:return console.log(key+" was not supported :( !")}}))},"./src sync recursive ^\\.(?:(?:^%7C[\\\\/]%7C(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/])(?%21\\.)(?=.)[^\\\\/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$":function(module,__unused_webpack_exports,__webpack_require__){var map={"./components/Select/Select.stories.tsx":"./src/components/Select/Select.stories.tsx"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="./src sync recursive ^\\.(?:(?:^%7C[\\\\/]%7C(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/])(?%21\\.)(?=.)[^\\\\/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$"},"./src sync recursive ^\\.(?:(?:^%7C[\\\\/]%7C(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/])(?%21\\.)(?=.)[^\\\\/]*?\\.stories\\.mdx)$":function(module){function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./src sync recursive ^\\.(?:(?:^%7C[\\\\/]%7C(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/])(?%21\\.)(?=.)[^\\\\/]*?\\.stories\\.mdx)$",module.exports=webpackEmptyContext},"./storybook-init-framework-entry.js":function(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__){"use strict";__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js")},"?4f7e":function(){},"./generated-stories-entry.cjs":function(module,__unused_webpack_exports,__webpack_require__){"use strict";module=__webpack_require__.nmd(module),(0,__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js").configure)([__webpack_require__("./src sync recursive ^\\.(?:(?:^%7C[\\\\/]%7C(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/])(?%21\\.)(?=.)[^\\\\/]*?\\.stories\\.mdx)$"),__webpack_require__("./src sync recursive ^\\.(?:(?:^%7C[\\\\/]%7C(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/])(?%21\\.)(?=.)[^\\\\/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$")],module,!1)}},function(__webpack_require__){var __webpack_exec__=function(moduleId){return __webpack_require__(__webpack_require__.s=moduleId)};__webpack_require__.O(0,[485],(function(){return __webpack_exec__("./node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),__webpack_exec__("./node_modules/@storybook/core-client/dist/esm/globals/globals.js"),__webpack_exec__("./storybook-init-framework-entry.js"),__webpack_exec__("./node_modules/@storybook/react/dist/esm/client/docs/config-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-links/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-docs/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-actions/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-backgrounds/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-measure/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-outline/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-interactions/preview.js-generated-config-entry.js"),__webpack_exec__("./.storybook/preview.js-generated-config-entry.js"),__webpack_exec__("./generated-stories-entry.cjs")}));__webpack_require__.O()}]);