(this.webpackJsonpw=this.webpackJsonpw||[]).push([[0],{19:function(e,a,t){e.exports=t(44)},42:function(e,a,t){},43:function(e,a,t){},44:function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),r=t(12),s=t.n(r),c=t(2),m=t.n(c),l=t(13),o=t(14),u=t(15),g=t(18),v=t(17),d=t(16),_=t.n(d);t(42);var p=function(e){e.id;var a=e.title,t=(e.title_english,e.year),n=(e.rating,e.runtime,e.summary),r=e.genre,s=(e.language,e.image);return i.a.createElement("div",{className:"movies__movie"},i.a.createElement("img",{src:s,alt:a,title:a}),i.a.createElement("div",{className:"movie__data"},i.a.createElement("h3",{className:"movie__title"},a),i.a.createElement("h5",{className:"movie__year"},t),i.a.createElement("p",{className:"movie__summary"},n.slice(0,260),"..."),i.a.createElement("ul",{className:"genre"},r.map((function(e,a){return i.a.createElement("li",{key:a,className:"genre__genre"},e)})))))},h=(t(43),function(e){Object(g.a)(t,e);var a=Object(v.a)(t);function t(){var e;Object(o.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(e=a.call.apply(a,[this].concat(i))).state={isLoading:!0,movies:[]},e.gatherMovies=Object(l.a)(m.a.mark((function a(){var t,n;return m.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,_.a.get("https://yts.mx/api/v2/list_movies.json?sort_by=download_count");case 2:t=a.sent,n=t.data.data.movies,e.setState({movies:n,isLoading:!1});case 5:case"end":return a.stop()}}),a)}))),e}return Object(u.a)(t,[{key:"componentDidMount",value:function(){this.gatherMovies()}},{key:"render",value:function(){var e=this.state,a=e.isLoading,t=e.movies;return i.a.createElement("section",{className:"container"}," ",a?i.a.createElement("div",{className:"loading"},i.a.createElement("span",{className:"loadingText"},"Loading...")):i.a.createElement("div",{className:"movies"},t.map((function(e){return i.a.createElement(p,{key:e.id,id:e.id,title:e.title,title_english:e.title_english,year:e.year,rating:e.rating,runtime:e.runtime,summary:e.summary,genre:e.genres,language:e.language,image:e.medium_cover_image})}))))}}]),t}(i.a.Component));s.a.render(i.a.createElement(h,null),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.c48a05df.chunk.js.map