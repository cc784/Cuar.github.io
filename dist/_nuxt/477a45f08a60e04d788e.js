(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{499:function(t,e,o){var content=o(586);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(12).default)("566c1bfa",content,!0,{sourceMap:!1})},585:function(t,e,o){"use strict";var l=o(499);o.n(l).a},586:function(t,e,o){(e=o(11)(!1)).push([t.i,".hotel-detail[data-v-0041eca6]{width:1000px;min-width:1000px;margin:0 auto}.name-info[data-v-0041eca6]{margin-bottom:20px;color:#666;font-size:14px}.name-info h4[data-v-0041eca6]{margin-right:15px;color:#333;font-weight:400;font-size:x-large}.name-info .iconfont[data-v-0041eca6]{font-family:iconfont!important;font-size:16px;font-style:normal;-webkit-font-smoothing:antialiased}.iconhuangguan[data-v-0041eca6]{color:#f90}.hotel-en-name[data-v-0041eca6]{margin-bottom:.5em}.pic-item img[data-v-0041eca6]{display:block;width:160px;height:110px;margin-bottom:15px}.pic-item .pic-item-left[data-v-0041eca6]{padding-right:10px}.pic-item .pic-item-right[data-v-0041eca6]{padding-left:10px}.hotel-table[data-v-0041eca6]{padding:40px 0;cursor:pointer}.hotel-table .height-light[data-v-0041eca6]{color:#f90}.hotel-table .larger[data-v-0041eca6]{font-size:larger}.info-row[data-v-0041eca6]{padding:40px 0}#container[data-v-0041eca6]{width:650px;height:360px}.info-row[data-v-0041eca6]{min-height:360px}.tab-content[data-v-0041eca6]{width:100%;height:300px;font-size:14px;color:#666;overflow-y:auto}.tab-content li[data-v-0041eca6]{display:flex;margin:0 20px 20px 10px;cursor:pointer}.tab-content li .name[data-v-0041eca6]{flex:1;padding-right:10px}.amap-marker-content img[data-v-0041eca6],[data-v-0041eca6] .amap-icon img{width:25px;height:34px}.assets-info[data-v-0041eca6]{border-bottom:1px solid #ddd;padding:20px 10px;font-size:14px}.scores-row[data-v-0041eca6]{color:#666;padding:20px 0}.recomment-score[data-v-0041eca6]{position:relative;display:flex;align-content:center}.recomment-score .comment-star[data-v-0041eca6]{margin-top:20px}.recomment-score .stamp[data-v-0041eca6]{position:absolute;left:20px;color:#f90;border:2px solid #f90;text-align:center;line-height:70px;width:70px;height:70px;border-radius:50%;opacity:.25;transform:rotate(-30deg)}.x-large[data-v-0041eca6]{font-size:x-large}.height-light[data-v-0041eca6]{color:#f90!important}.rate-box[data-v-0041eca6]{width:70px;color:#f90}.rate-box .circle-rate[data-v-0041eca6]{position:relative}.rate-box .text[data-v-0041eca6]{position:absolute;top:50%;left:50%;text-align:center;transform:translate(-50%,-50%)}.hotel-tag[data-v-0041eca6]{margin-right:15px}.hotel-link[data-v-0041eca6]{font-size:17px;text-shadow:2px 2px 2px #adff2f}.active[data-v-0041eca6]:hover{color:#f90;position:relative;left:5px;font-weight:700}",""]),t.exports=e},598:function(t,e,o){"use strict";o.r(e);o(88);var l={data:function(){return{hotelData:{scores:{},hotelbrand:{}},products:[],map:"",list:{"风景名胜":[],"交通设施服务":[]},activeName:"风景名胜",loading:!0,bindClick:{},commentData:[]}},mounted:function(){this.getHotelData(),this.getComment(),this.getAmapData()},methods:{getHotelData:function(){var t=this,e=this.$route.params.id;this.$axios({url:"/hotels?id=".concat(e)}).then((function(e){var data=e.data;t.hotelData=data.data[0],t.products=t.hotelData.products}))},getComment:function(){var t=this;this.$axios({url:"/hotels/comments"}).then((function(e){var data=e.data;t.commentData=data.data}))},getAmapData:function(){var t=this;window.onLoad=function(){t.map=new AMap.Map("container",{resizeEnable:!0,zoom:13}),t.locationLocal("风景名胜")};var e=document.createElement("script");e.charset="utf-8",e.src="https://webapi.amap.com/maps?v=1.4.15&key=0bc30017317f7c4cb9192fcc0b735c33&callback=onLoad",document.head.appendChild(e)},locationLocal:function(t){var e=this;AMap.service(["AMap.PlaceSearch"],(function(){var o=new AMap.PlaceSearch({pageSize:10,pageIndex:1,city:e.hotelData.city.code,citylimit:!0,map:e.map,autoFitView:!0}),l=[e.hotelData.location.longitude,e.hotelData.location.latitude];o.searchNearBy(t,l,2e3,(function(o,l){if("OK"==l.info){e.list[t]=l.poiList.pois,e.map.clearMap();for(var n=l.poiList.pois,i=0;i<n.length;i++){var c=n[i],marker=[];marker[i]=new AMap.Marker({icon:"https://webapi.amap.com/theme/v1.3/markers/n/mark_b"+(i+1)+".png",position:c.location}),e.bindClick[i]=function(t,i){e.setCenterContent(t)},marker[i].on("click",e.bindClick[i].bind(e,i)),e.map.add(marker[i])}e.map.setFitView(),e.loading=!1}}))}))},handleClick:function(){this.loading=!0,this.map.clearMap(),this.locationLocal(this.activeName)},setCenterContent:function(t){var e=this,o=this.list[this.activeName];this.map.setCenter(o[t].location),setTimeout((function(){var l=[o[t].name],n=new AMap.InfoWindow({content:l.join("<br/>"),offset:new AMap.Pixel(0,-30)});n.on("open"),n.on("close"),n.open(e.map,o[t].location)}),200)}},filters:{fixed:function(data){if(data)return(data/1e3).toFixed(2)}}},n=(o(585),o(13)),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"hotel-detail"},[o("el-breadcrumb",{staticStyle:{padding:"20px 0"},attrs:{"separator-class":"el-icon-arrow-right"}},[o("el-breadcrumb-item",{attrs:{to:{path:"/hotel"}}},[t._v("酒店")]),t._v(" "),o("el-breadcrumb-item",{attrs:{to:{path:"/hotel"}}},[t._v(t._s(t.hotelData.real_city)+t._s(t.hotelData.big_cate))]),t._v(" "),o("el-breadcrumb-item",[t._v(t._s(t.hotelData.name))])],1),t._v(" "),o("el-row",[o("div",{staticClass:"name-info"},[o("el-row",{attrs:{type:"flex",align:"middle"}},[o("h4",[t._v(t._s(t.hotelData.name))]),t._v(" "),o("span",t._l(t.hotelData.hotellevel&&t.hotelData.hotellevel.id,(function(t,e){return o("i",{key:e,staticClass:"iconfont iconhuangguan"})})),0)]),t._v(" "),o("div",{staticClass:"hotel-en-name"},[o("span",[t._v(t._s(t.hotelData.alias))])]),t._v(" "),o("div",[o("i",{staticClass:"iconfont iconlocation"},[t._v(t._s(t.hotelData.address))])])],1)]),t._v(" "),o("el-row",{staticClass:"pic-info"},[o("el-col",{attrs:{span:16}},[o("img",{staticStyle:{width:"640px",height:"360px"},attrs:{src:"http://157.122.54.189:9093/images/hotel-pics/1.jpeg",alt:""}}),t._v(" "),o("span")]),t._v(" "),o("el-col",{staticClass:"pic-item pic-item-left",attrs:{span:4}},[o("img",{attrs:{src:"http://157.122.54.189:9093/images/hotel-pics/1.jpeg",alt:""}}),t._v(" "),o("img",{attrs:{src:"http://157.122.54.189:9093/images/hotel-pics/3.jpeg",alt:""}}),t._v(" "),o("img",{attrs:{src:"http://157.122.54.189:9093/images/hotel-pics/5.jpeg",alt:""}})]),t._v(" "),o("el-col",{staticClass:"pic-item pic-item-right",attrs:{span:4}},[o("img",{attrs:{src:"http://157.122.54.189:9093/images/hotel-pics/2.jpeg",alt:""}}),t._v(" "),o("img",{attrs:{src:"http://157.122.54.189:9093/images/hotel-pics/4.jpeg",alt:""}}),t._v(" "),o("img",{attrs:{src:"http://157.122.54.189:9093/images/hotel-pics/6.jpeg",alt:""}})])],1),t._v(" "),o("div",{staticClass:"hotel-table"},[o("el-table",{staticStyle:{width:"100%"},attrs:{data:t.products}},[o("el-table-column",{attrs:{prop:"name",label:"价格来源",width:"420"}}),t._v(" "),o("el-table-column",{attrs:{prop:"bestType",label:"低价房型",width:"420"}}),t._v(" "),o("el-table-column",{attrs:{prop:"price",label:"最低价格/每晚"},scopedSlots:t._u([{key:"default",fn:function(e){return[o("span",{staticClass:"height-light larger"},[t._v(t._s(e.row.price))]),t._v("\n          起\n          "),o("i",{staticClass:"el-icon-arrow-right height-light"})]}}])})],1)],1),t._v(" "),o("div",{staticClass:"info-row"},[o("el-col",{attrs:{span:16}},[o("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],attrs:{id:"container"}})]),t._v(" "),o("el-col",{staticStyle:{"padding-left":"5px"},attrs:{span:8}},[o("el-tabs",{on:{"tab-click":t.handleClick},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[o("el-tab-pane",{attrs:{label:"风景",name:"风景名胜"}},[o("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"tab-content"},[o("ul",t._l(t.list[t.activeName],(function(e,l){return o("li",{key:e.id,staticClass:"active",on:{mouseenter:function(o){return t.setCenterContent(l,e)}}},[o("span",{staticClass:"name"},[t._v(t._s(e.name))]),t._v(" "),o("span",{staticClass:"distance"},[t._v(t._s(t._f("fixed")(e.distance))+"公里")])])})),0)])]),t._v(" "),o("el-tab-pane",{attrs:{label:"交通",name:"交通设施服务"}},[o("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"tab-content"},[o("ul",t._l(t.list[t.activeName],(function(e,l){return o("li",{key:e.id,staticClass:"active",on:{mouseenter:function(o){return t.setCenterContent(l,e)}}},[o("span",{staticClass:"name"},[t._v(t._s(e.name))]),t._v(" "),o("span",{staticClass:"distance"},[t._v(t._s(t._f("fixed")(e.distance))+"公里")])])})),0)])])],1)],1)],1),t._v(" "),o("div",{staticClass:"info-row"},[o("el-row",{staticClass:"assets-info"},[o("el-col",{attrs:{span:5}},[t._v("基本信息")]),t._v(" "),o("el-col",{attrs:{span:5}},[t._v("入住时间: 14:00之后")]),t._v(" "),o("el-col",{attrs:{span:5}},[t._v("离店时间: 12:00之前")]),t._v(" "),o("el-col",{attrs:{span:5}},[t._v(t._s(t.hotelData.creation_time)+" / "+t._s(t.hotelData.renovat_time))]),t._v(" "),o("el-col",{attrs:{span:4}},[t._v("酒店规模: "+t._s(t.hotelData.roomCount)+"间客房")])],1),t._v(" "),o("el-row",{staticClass:"assets-info"},[o("el-col",{attrs:{span:5}},[t._v("主要设施")]),t._v(" "),o("el-col",{attrs:{span:19}},t._l(t.hotelData.hotelassets,(function(e){return o("el-tag",{key:e.id,staticClass:"hotel-tag",attrs:{type:"success"}},[t._v(t._s(e.name))])})),1)],1),t._v(" "),o("el-row",{staticClass:"assets-info"},[o("el-col",{attrs:{span:5}},[t._v("停车服务")]),t._v(" "),o("el-col",{attrs:{span:19}},[t.hotelData.parking?o("el-tag",{staticClass:"hotel-tag",attrs:{type:"success"}},[t._v("免费停车")]):t._e()],1)],1),t._v(" "),o("el-row",{staticClass:"assets-info"},[o("el-col",{attrs:{span:5}},[t._v("品牌信息")]),t._v(" "),o("el-col",{attrs:{span:5}},[o("el-link",{staticClass:"hotel-link",attrs:{type:"primary",disabled:""}},[t._v(t._s(t.hotelData.hotelbrand&&t.hotelData.hotelbrand.name))])],1),t._v(" "),o("el-col",{attrs:{span:5}}),t._v(" "),o("el-col",{attrs:{span:5}}),t._v(" "),o("el-col",{attrs:{span:4}})],1)],1),t._v(" "),o("div",{staticClass:"comment-row"},[o("h4",[t._v(t._s(t.commentData.length)+"条真实用户评论")]),t._v(" "),o("div",{staticClass:"scores-row"},[o("el-row",[o("el-col",{attrs:{span:4}},[o("p",[t._v("总评数："+t._s(t.hotelData.all_remarks))]),t._v(" "),o("p",[t._v("好评数："+t._s(t.hotelData.good_remarks))]),t._v(" "),o("p",[t._v("差评数："+t._s(t.hotelData.bad_remarks))])]),t._v(" "),o("el-col",{attrs:{span:5}},[o("div",{staticClass:"recomment-score"},[o("div",{staticClass:"comment-star"},[o("el-rate",{attrs:{disabled:"","show-score":"","text-color":"#ff9900","score-template":t.hotelData.stars+"分"},model:{value:t.hotelData.stars,callback:function(e){t.$set(t.hotelData,"stars",e)},expression:"hotelData.stars"}})],1),t._v(" "),o("div",{staticClass:"stamp x-large"},[t._v("非常推荐")])])]),t._v(" "),o("el-col",{attrs:{span:3}},[o("div",{staticClass:"rate-box"},[o("div",{staticClass:"circle-rate"},[o("svg",{attrs:{viewBox:"0 0 74 74"}},[o("path",{attrs:{"data-v-52d03705":"",d:"M 35 2, A 35,35 0 1 1 6.081879558552508,19.10212875464338",fill:"none",stroke:"#f90","stroke-width":"2"}})]),t._v(" "),o("span",{staticClass:"text"},[o("span",[t._v("环境")]),t._v(" "),o("span",{staticClass:"value"},[t._v(t._s(t.hotelData.scores.environment))])])])])]),t._v(" "),o("el-col",{attrs:{span:3}},[o("div",{staticClass:"rate-box"},[o("div",{staticClass:"circle-rate"},[o("svg",{attrs:{viewBox:"0 0 74 74"}},[o("path",{attrs:{"data-v-52d03705":"",d:"M 35 2, A 35,35 0 1 1 6.081879558552508,19.10212875464338",fill:"none",stroke:"#f90","stroke-width":"2"}})]),t._v(" "),o("span",{staticClass:"text"},[o("span",[t._v("产品")]),t._v(" "),o("span",{staticClass:"value"},[t._v(t._s(t.hotelData.scores.product))])])])])]),t._v(" "),o("el-col",{attrs:{span:3}},[o("div",{staticClass:"rate-box"},[o("div",{staticClass:"circle-rate"},[o("svg",{attrs:{viewBox:"0 0 74 74"}},[o("path",{attrs:{"data-v-52d03705":"",d:"M 35 2, A 35,35 0 1 1 6.081879558552508,19.10212875464338",fill:"none",stroke:"#f90","stroke-width":"2"}})]),t._v(" "),o("span",{staticClass:"text"},[o("span",[t._v("服务")]),t._v(" "),o("span",{staticClass:"value"},[t._v(t._s(t.hotelData.scores.service))])])])])])],1)],1),t._v(" "),o("div",{staticClass:"comment-list"})])],1)}),[],!1,null,"0041eca6",null);e.default=component.exports}}]);