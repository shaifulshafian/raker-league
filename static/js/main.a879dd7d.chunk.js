(this["webpackJsonpraker-league"]=this["webpackJsonpraker-league"]||[]).push([[0],[,,function(e,a,t){e.exports=t.p+"static/media/RakerLeague.b6c447a5.jpg"},,,,,,function(e,a,t){e.exports=t.p+"static/media/Bundesliga.3e055fb4.png"},function(e,a,t){e.exports=t.p+"static/media/Eredivisie.07239886.png"},function(e,a,t){e.exports=t.p+"static/media/LaLiga.2be24290.png"},function(e,a,t){e.exports=t.p+"static/media/Ligue1.4b2af31f.png"},function(e,a,t){e.exports=t.p+"static/media/PremierLeague.2ea36f1c.png"},function(e,a,t){e.exports=t.p+"static/media/SerieA.3ee74dc2.png"},,,function(e,a,t){e.exports=t(23)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),s=t(4),r=t.n(s),o=(t(21),t(5)),l=t(6),c=t(14),u=t(7),m=t(1),d=t(15),p=(t(22),function(e){return i.a.createElement("header",null,e.children)}),g=function(e){return i.a.createElement("button",{onClick:e.handleClick,"data-leagueid":e.leagueId},e.text)},h=function(e){return i.a.createElement("tr",null,i.a.createElement("td",{className:"team-position"},e.position),i.a.createElement("td",{className:"team-name"},i.a.createElement("div",{className:"crest"},i.a.createElement("img",{src:e.crestURI,alt:""})),i.a.createElement("span",null,e.teamName)),i.a.createElement("td",null,e.playedGames),i.a.createElement("td",null,e.wins),i.a.createElement("td",null,e.draws),i.a.createElement("td",null,e.losses),i.a.createElement("td",{className:"team-points"},e.points))},f=function(e){return i.a.createElement("table",{className:"standings"},i.a.createElement("tbody",null,i.a.createElement("tr",{className:"table-head"},i.a.createElement("td",{className:"team-position"},"#"),i.a.createElement("td",{className:"team-name"},"Team"),i.a.createElement("td",{title:"Matches played"},"MatchPlayed"),i.a.createElement("td",{title:"Wins"},"Wins"),i.a.createElement("td",{title:"Draws"},"Draws"),i.a.createElement("td",{title:"Losses"},"Losses"),i.a.createElement("td",{title:"Team points"},"Points")),e.children))},w=t(8),k=t.n(w),E=t(9),v=t.n(E),b=t(10),L=t.n(b),y=t(11),N=t.n(y),R=t(12),S=t.n(R),C=t(13),D=t.n(C),x=t(2),j=t.n(x),G=function(e){var a;switch(e.leagueCaption){case"RakerLeague":a=j.a;break;case"Bundesliga":a=k.a;break;case"Eredivisie":a=v.a;break;case"Primera Division":a=L.a;break;case"Ligue 1":a=N.a;break;case"Premier League":a=S.a;break;case"Serie A":a=D.a;break;default:a=j.a}return i.a.createElement("div",{className:"league-info"},i.a.createElement("img",{src:a,alt:"League Logo"}))},I=[{id:1,position:1,teamName:"Raker A",playedGames:3,wins:3,draws:0,losses:0,points:99},{id:2,position:2,teamName:"Raker B",playedGames:3,wins:3,draws:0,losses:0,points:90},{id:3,position:3,teamName:"Raker C",playedGames:3,wins:3,draws:0,losses:0,points:80},{id:4,position:4,teamName:"Raker D",playedGames:3,wins:2,draws:1,losses:0,points:70},{id:5,position:5,teamName:"Raker E",playedGames:3,wins:2,draws:0,losses:1,points:60},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Shaiful Shafian",username:"shy",email:"starwars@gmail.com"}],A=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(c.a)(this,Object(u.a)(a).call(this,e))).state={leagueName:"Raker Liga",rows:[],leagueId:"RL",leagues:{RakerLeague:"RL","La Liga":"PD","Premier League":"PL",Eredivisie:"DED","Ligue 1":"FL1",Bundesliga:"BL1","Serie A":"SA"},buttons:[]},t.handleLeagueClick=t.handleLeagueClick.bind(Object(m.a)(t)),t}return Object(d.a)(a,e),Object(l.a)(a,[{key:"handleLeagueClick",value:function(e){var a=this,t=e.target.getAttribute("data-leagueid");this.setState({leagueId:t},(function(){"RL"===a.state.leagueId?a.fetchSiput():a.fetchData()}))}},{key:"fetchSiput",value:function(){var e=[];I.map((function(a,t){return e.push(i.a.createElement(h,{key:t,position:I[t].position,teamName:I[t].teamName,playedGames:I[t].playedGames,wins:I[t].wins,draws:I[t].draws,losses:I[t].losses,points:I[t].points}))})),this.setState({leagueName:"Raker Liga",rows:e})}},{key:"fetchData",value:function(){var e=this,a=this.state.leagueId;fetch("https://api.football-data.org/v2/competitions/"+a+"/standings",{headers:{"X-Auth-Token":"b7d52e61c66f4a0194be725042ad4359"}}).then((function(e){return e.json()})).then((function(a){var t=[];a.standings[0].table.map((function(e,a){var n=e.position,s=e.playedGames,r=e.won,o=e.draw,l=e.lost,c=e.points,u=e.team,m=u.crestUrl,d=u.name;return t.push(i.a.createElement(h,{key:a,position:n,crestURI:m,teamName:d,playedGames:s,wins:r,draws:o,losses:l,points:c}))})),e.setState({leagueName:a.competition.name,rows:t})})).catch((function(e){console.error(e)}))}},{key:"componentDidMount",value:function(){for(var e in this.fetchSiput(),this.state.leagues)this.state.buttons.push(i.a.createElement(g,{handleClick:this.handleLeagueClick,key:this.state.leagues[e],leagueId:this.state.leagues[e],text:e}))}},{key:"render",value:function(){return i.a.createElement("div",{className:"app"},i.a.createElement(p,null,this.state.buttons),i.a.createElement("div",{className:"container"},i.a.createElement(G,{leagueCaption:this.state.leagueName}),i.a.createElement(f,null,this.state.rows)))}}]),a}(n.Component),P=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function B(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}r.a.render(i.a.createElement(A,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/raker-league",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/raker-league","/service-worker.js");P?function(e){fetch(e).then((function(a){404===a.status||-1===a.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):B(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):B(e)}))}}()}],[[16,1,2]]]);
//# sourceMappingURL=main.a879dd7d.chunk.js.map