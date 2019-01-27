(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,t,a){e.exports=a(48)},29:function(e,t,a){},42:function(e,t,a){},46:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(4),o=a.n(c),i=(a(29),a(8)),r=a(9),h=a(12),s=a(10),d=a(13),m=a(3),u=a(22),b=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(h.a)(this,Object(s.a)(t).call(this,e))).handleChange=a.handleChange.bind(Object(m.a)(Object(m.a)(a))),a}return Object(d.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props.value;return l.a.createElement("form",{className:"k-form"},l.a.createElement(u.a,{name:"symbol",label:"Company's symbol",pattern:"[A-Za-z-]+",minLength:1,required:!0,value:e,onChange:this.handleChange}))}},{key:"handleChange",value:function(e){(0,this.props.onChange)(e.target.value)}}]),t}(n.Component),k=a(6),g=(a(41),"https://stock-chart-proxy.herokuapp.com/");function p(e){return{Date:"/Date(".concat(new Date(e.date).getTime(),")/"),Close:e.close,Volume:e.volume,Open:e.open,High:e.high,Low:e.low}}var C=function(e){var t=e.data,a=t.map(p),n=new Date(t[0].date),c=new Date(t[t.length-1].date);return l.a.createElement(k.h,null,l.a.createElement(k.g,{text:"".concat(e.company," - ").concat(e.symbol)}),l.a.createElement(k.e,null,l.a.createElement(k.f,{data:a,type:"candlestick",openField:"Open",closeField:"Close",lowField:"Low",highField:"High",categoryField:"Date"})),l.a.createElement(k.a,null,l.a.createElement(k.b,{from:n,to:c}),l.a.createElement(k.c,null,l.a.createElement(k.d,{data:a,type:"area",field:"Close",categoryField:"Date"}))))},y=a(7),O=(a(42),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(h.a)(this,Object(s.a)(t).call(this,e))).handleClickOneMonth=a.handleClick.bind(Object(m.a)(Object(m.a)(a)),"1m"),a.handleClickThreeMonths=a.handleClick.bind(Object(m.a)(Object(m.a)(a)),"3m"),a.handleClickSixMonths=a.handleClick.bind(Object(m.a)(Object(m.a)(a)),"6m"),a.handleClickOneYear=a.handleClick.bind(Object(m.a)(Object(m.a)(a)),"1y"),a.handleClickTwoYears=a.handleClick.bind(Object(m.a)(Object(m.a)(a)),"2y"),a.handleClickFiveYears=a.handleClick.bind(Object(m.a)(Object(m.a)(a)),"5y"),a}return Object(d.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props.value;return l.a.createElement("div",{className:"RangeButtons"},l.a.createElement(y.b,null,l.a.createElement(y.a,{title:"1 month",togglable:!0,selected:"1m"===e,onClick:this.handleClickOneMonth},"1M"),l.a.createElement(y.a,{title:"3 months",togglable:!0,selected:"3m"===e,onClick:this.handleClickThreeMonths},"3M"),l.a.createElement(y.a,{title:"6 months",togglable:!0,selected:"6m"===e,onClick:this.handleClickSixMonths},"6M"),l.a.createElement(y.a,{title:"1 year",togglable:!0,selected:"1y"===e,onClick:this.handleClickOneYear},"1Y"),l.a.createElement(y.a,{title:"2 years",togglable:!0,selected:"2y"===e,onClick:this.handleClickTwoYears},"2Y"),l.a.createElement(y.a,{title:"5 years",togglable:!0,selected:"5y"===e,onClick:this.handleClickFiveYears},"5Y")))}},{key:"handleClick",value:function(e){(0,this.props.onClick)(e)}}]),t}(n.Component)),v=(a(44),a(46),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(h.a)(this,Object(s.a)(t).call(this,e))).state={symbol:"",range:"1m",stockData:{}},a.handleChangeSymbol=a.handleChangeSymbol.bind(Object(m.a)(Object(m.a)(a))),a.handleClickRange=a.handleClickRange.bind(Object(m.a)(Object(m.a)(a))),a.updateStockData=a.updateStockData.bind(Object(m.a)(Object(m.a)(a))),a}return Object(d.a)(t,e),Object(r.a)(t,[{key:"handleChangeSymbol",value:function(e){this.setState({symbol:e},this.updateStockData)}},{key:"handleClickRange",value:function(e){this.setState({range:e},this.updateStockData)}},{key:"render",value:function(){var e=this.state,t=e.symbol,a=e.range,n=e.stockData,c=n[t]?n[t].quote.companyName:void 0,o=n[t]?n[t].chart:void 0;return l.a.createElement("div",{className:"App"},l.a.createElement("header",{className:"App-header"},l.a.createElement(b,{value:t,onChange:this.handleChangeSymbol,onSubmit:this.handleSubmitSymbol}),l.a.createElement(O,{value:a,onClick:this.handleClickRange})),t&&c&&o&&l.a.createElement("div",{className:"App-chart"},l.a.createElement(C,{symbol:t,company:c,data:o}),l.a.createElement("p",null,"Data provided for free by"," ",l.a.createElement("a",{href:"https://iextrading.com/developer/"},"IEX"),". View"," ",l.a.createElement("a",{href:"https://iextrading.com/api-exhibit-a/"},"IEX\u2019s Terms of Use"),".")))}},{key:"updateStockData",value:function(){var e=this,t=this.state,a=t.symbol,n=t.range;a&&n&&function(e,t){var a="".concat(g,"?symbol=").concat(e,"&range=").concat(t);return fetch(a).then(function(e){return e.json()})}(a,n).then(function(t){e.setState({stockData:t})}).catch(function(e){console.error("Could not fetch stock data:",e)})}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[23,2,1]]]);
//# sourceMappingURL=main.cd11e01b.chunk.js.map