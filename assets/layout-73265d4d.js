import{a4 as Ue,a5 as Oe,a6 as Y,a7 as Re,a8 as He,a9 as q,p as S,aa as Je,ab as re,ac as Ke,ad as L,n as Ze,ae as k,af as Qe,ag as en,ah as Ie,ai as nn,aj as G,ak as rn,al as Q,am as tn,an,ao as on,ap as sn,aq as un,ar as dn,as as I,at as ce,au as w,av as fn,aw as A,ax as g,ay as le,a3 as j,az as hn,aA as ee}from"./app-d2093efc.js";import{A as ve}from"./mermaid.core-0bd5c39c.js";var pe=1/0,cn=17976931348623157e292;function B(e){if(!e)return e===0?e:0;if(e=Ue(e),e===pe||e===-pe){var n=e<0?-1:1;return n*cn}return e===e?e:0}function ln(e){var n=B(e),r=n%1;return n===n?r?n-r:n:0}function vn(e,n,r,t){var i=-1,a=e==null?0:e.length;for(t&&a&&(r=e[++i]);++i<a;)r=n(r,e[i],i,e);return r}var Pe=Object.prototype,pn=Pe.hasOwnProperty,mn=Oe(function(e,n){e=Object(e);var r=-1,t=n.length,i=t>2?n[2]:void 0;for(i&&Y(n[0],n[1],i)&&(t=1);++r<t;)for(var a=n[r],o=Re(a),s=-1,u=o.length;++s<u;){var d=o[s],h=e[d];(h===void 0||He(h,Pe[d])&&!pn.call(e,d))&&(e[d]=a[d])}return e});const gn=mn;function $(e){var n=e==null?0:e.length;return n?e[n-1]:void 0}function te(e){return typeof e=="function"?e:q}function f(e,n){var r=S(e)?Je:re;return r(e,te(n))}function bn(e,n){var r=[];return re(e,function(t,i,a){n(t,i,a)&&r.push(t)}),r}function E(e,n){var r=S(e)?Ke:bn;return r(e,L(n))}function wn(e){return function(n,r,t){var i=Object(n);if(!Ze(n)){var a=L(r);n=k(n),r=function(s){return a(i[s],s,i)}}var o=e(n,r,t);return o>-1?i[a?n[o]:o]:void 0}}var _n=Math.max;function En(e,n,r){var t=e==null?0:e.length;if(!t)return-1;var i=r==null?0:ln(r);return i<0&&(i=_n(t+i,0)),Qe(e,L(n),i)}var xn=wn(En);const ie=xn;function kn(e,n){return e==null?e:en(e,te(n),Re)}function Nn(e,n){return e&&Ie(e,te(n))}function yn(e,n){return e>n}var Ln=Object.prototype,Cn=Ln.hasOwnProperty;function Mn(e,n){return e!=null&&Cn.call(e,n)}function m(e,n){return e!=null&&nn(e,n,Mn)}function On(e,n){return G(n,function(r){return e[r]})}function x(e){return e==null?[]:On(e,k(e))}function Te(e,n){return e<n}function W(e,n){var r={};return n=L(n),Ie(e,function(t,i,a){rn(r,i,n(t,i,a))}),r}function ae(e,n,r){for(var t=-1,i=e.length;++t<i;){var a=e[t],o=n(a);if(o!=null&&(s===void 0?o===o&&!Q(o):r(o,s)))var s=o,u=a}return u}function y(e){return e&&e.length?ae(e,q,yn):void 0}function T(e){return e&&e.length?ae(e,q,Te):void 0}function oe(e,n){return e&&e.length?ae(e,L(n),Te):void 0}function Rn(e,n){var r=e.length;for(e.sort(n);r--;)e[r]=e[r].value;return e}function In(e,n){if(e!==n){var r=e!==void 0,t=e===null,i=e===e,a=Q(e),o=n!==void 0,s=n===null,u=n===n,d=Q(n);if(!s&&!d&&!a&&e>n||a&&o&&u&&!s&&!d||t&&o&&u||!r&&u||!i)return 1;if(!t&&!a&&!d&&e<n||d&&r&&i&&!t&&!a||s&&r&&i||!o&&i||!u)return-1}return 0}function Pn(e,n,r){for(var t=-1,i=e.criteria,a=n.criteria,o=i.length,s=r.length;++t<o;){var u=In(i[t],a[t]);if(u){if(t>=s)return u;var d=r[t];return u*(d=="desc"?-1:1)}}return e.index-n.index}function Tn(e,n,r){n.length?n=G(n,function(a){return S(a)?function(o){return tn(o,a.length===1?a[0]:a)}:a}):n=[q];var t=-1;n=G(n,an(L));var i=on(e,function(a,o,s){var u=G(n,function(d){return d(a)});return{criteria:u,index:++t,value:a}});return Rn(i,function(a,o){return Pn(a,o,r)})}var Fn=Math.ceil,Sn=Math.max;function An(e,n,r,t){for(var i=-1,a=Sn(Fn((n-e)/(r||1)),0),o=Array(a);a--;)o[t?a:++i]=e,e+=r;return o}function Vn(e){return function(n,r,t){return t&&typeof t!="number"&&Y(n,r,t)&&(r=t=void 0),n=B(n),r===void 0?(r=n,n=0):r=B(r),t=t===void 0?n<r?1:-1:B(t),An(n,r,t,e)}}var Dn=Vn();const M=Dn;function Gn(e,n,r,t,i){return i(e,function(a,o,s){r=t?(t=!1,a):n(r,a,o,s)}),r}function V(e,n,r){var t=S(e)?vn:Gn,i=arguments.length<3;return t(e,L(n),r,i,re)}var Bn=Oe(function(e,n){if(e==null)return[];var r=n.length;return r>1&&Y(e,n[0],n[1])?n=[]:r>2&&Y(n[0],n[1],n[2])&&(n=[n[0]]),Tn(e,sn(n,1),[])});const D=Bn;var Yn=0;function se(e){var n=++Yn;return un(e)+n}function jn(e,n,r){for(var t=-1,i=e.length,a=n.length,o={};++t<i;){var s=t<a?n[t]:void 0;r(o,e[t],s)}return o}function $n(e,n){return jn(e||[],n||[],dn)}var qn="\0",N="\0",me="";class _{constructor(n={}){this._isDirected=m(n,"directed")?n.directed:!0,this._isMultigraph=m(n,"multigraph")?n.multigraph:!1,this._isCompound=m(n,"compound")?n.compound:!1,this._label=void 0,this._defaultNodeLabelFn=I(void 0),this._defaultEdgeLabelFn=I(void 0),this._nodes={},this._isCompound&&(this._parent={},this._children={},this._children[N]={}),this._in={},this._preds={},this._out={},this._sucs={},this._edgeObjs={},this._edgeLabels={}}isDirected(){return this._isDirected}isMultigraph(){return this._isMultigraph}isCompound(){return this._isCompound}setGraph(n){return this._label=n,this}graph(){return this._label}setDefaultNodeLabel(n){return ce(n)||(n=I(n)),this._defaultNodeLabelFn=n,this}nodeCount(){return this._nodeCount}nodes(){return k(this._nodes)}sources(){var n=this;return E(this.nodes(),function(r){return ve(n._in[r])})}sinks(){var n=this;return E(this.nodes(),function(r){return ve(n._out[r])})}setNodes(n,r){var t=arguments,i=this;return f(n,function(a){t.length>1?i.setNode(a,r):i.setNode(a)}),this}setNode(n,r){return m(this._nodes,n)?(arguments.length>1&&(this._nodes[n]=r),this):(this._nodes[n]=arguments.length>1?r:this._defaultNodeLabelFn(n),this._isCompound&&(this._parent[n]=N,this._children[n]={},this._children[N][n]=!0),this._in[n]={},this._preds[n]={},this._out[n]={},this._sucs[n]={},++this._nodeCount,this)}node(n){return this._nodes[n]}hasNode(n){return m(this._nodes,n)}removeNode(n){var r=this;if(m(this._nodes,n)){var t=function(i){r.removeEdge(r._edgeObjs[i])};delete this._nodes[n],this._isCompound&&(this._removeFromParentsChildList(n),delete this._parent[n],f(this.children(n),function(i){r.setParent(i)}),delete this._children[n]),f(k(this._in[n]),t),delete this._in[n],delete this._preds[n],f(k(this._out[n]),t),delete this._out[n],delete this._sucs[n],--this._nodeCount}return this}setParent(n,r){if(!this._isCompound)throw new Error("Cannot set parent in a non-compound graph");if(w(r))r=N;else{r+="";for(var t=r;!w(t);t=this.parent(t))if(t===n)throw new Error("Setting "+r+" as parent of "+n+" would create a cycle");this.setNode(r)}return this.setNode(n),this._removeFromParentsChildList(n),this._parent[n]=r,this._children[r][n]=!0,this}_removeFromParentsChildList(n){delete this._children[this._parent[n]][n]}parent(n){if(this._isCompound){var r=this._parent[n];if(r!==N)return r}}children(n){if(w(n)&&(n=N),this._isCompound){var r=this._children[n];if(r)return k(r)}else{if(n===N)return this.nodes();if(this.hasNode(n))return[]}}predecessors(n){var r=this._preds[n];if(r)return k(r)}successors(n){var r=this._sucs[n];if(r)return k(r)}neighbors(n){var r=this.predecessors(n);if(r)return fn(r,this.successors(n))}isLeaf(n){var r;return this.isDirected()?r=this.successors(n):r=this.neighbors(n),r.length===0}filterNodes(n){var r=new this.constructor({directed:this._isDirected,multigraph:this._isMultigraph,compound:this._isCompound});r.setGraph(this.graph());var t=this;f(this._nodes,function(o,s){n(s)&&r.setNode(s,o)}),f(this._edgeObjs,function(o){r.hasNode(o.v)&&r.hasNode(o.w)&&r.setEdge(o,t.edge(o))});var i={};function a(o){var s=t.parent(o);return s===void 0||r.hasNode(s)?(i[o]=s,s):s in i?i[s]:a(s)}return this._isCompound&&f(r.nodes(),function(o){r.setParent(o,a(o))}),r}setDefaultEdgeLabel(n){return ce(n)||(n=I(n)),this._defaultEdgeLabelFn=n,this}edgeCount(){return this._edgeCount}edges(){return x(this._edgeObjs)}setPath(n,r){var t=this,i=arguments;return V(n,function(a,o){return i.length>1?t.setEdge(a,o,r):t.setEdge(a,o),o}),this}setEdge(){var n,r,t,i,a=!1,o=arguments[0];typeof o=="object"&&o!==null&&"v"in o?(n=o.v,r=o.w,t=o.name,arguments.length===2&&(i=arguments[1],a=!0)):(n=o,r=arguments[1],t=arguments[3],arguments.length>2&&(i=arguments[2],a=!0)),n=""+n,r=""+r,w(t)||(t=""+t);var s=P(this._isDirected,n,r,t);if(m(this._edgeLabels,s))return a&&(this._edgeLabels[s]=i),this;if(!w(t)&&!this._isMultigraph)throw new Error("Cannot set a named edge when isMultigraph = false");this.setNode(n),this.setNode(r),this._edgeLabels[s]=a?i:this._defaultEdgeLabelFn(n,r,t);var u=Wn(this._isDirected,n,r,t);return n=u.v,r=u.w,Object.freeze(u),this._edgeObjs[s]=u,ge(this._preds[r],n),ge(this._sucs[n],r),this._in[r][s]=u,this._out[n][s]=u,this._edgeCount++,this}edge(n,r,t){var i=arguments.length===1?X(this._isDirected,arguments[0]):P(this._isDirected,n,r,t);return this._edgeLabels[i]}hasEdge(n,r,t){var i=arguments.length===1?X(this._isDirected,arguments[0]):P(this._isDirected,n,r,t);return m(this._edgeLabels,i)}removeEdge(n,r,t){var i=arguments.length===1?X(this._isDirected,arguments[0]):P(this._isDirected,n,r,t),a=this._edgeObjs[i];return a&&(n=a.v,r=a.w,delete this._edgeLabels[i],delete this._edgeObjs[i],be(this._preds[r],n),be(this._sucs[n],r),delete this._in[r][i],delete this._out[n][i],this._edgeCount--),this}inEdges(n,r){var t=this._in[n];if(t){var i=x(t);return r?E(i,function(a){return a.v===r}):i}}outEdges(n,r){var t=this._out[n];if(t){var i=x(t);return r?E(i,function(a){return a.w===r}):i}}nodeEdges(n,r){var t=this.inEdges(n,r);if(t)return t.concat(this.outEdges(n,r))}}_.prototype._nodeCount=0;_.prototype._edgeCount=0;function ge(e,n){e[n]?e[n]++:e[n]=1}function be(e,n){--e[n]||delete e[n]}function P(e,n,r,t){var i=""+n,a=""+r;if(!e&&i>a){var o=i;i=a,a=o}return i+me+a+me+(w(t)?qn:t)}function Wn(e,n,r,t){var i=""+n,a=""+r;if(!e&&i>a){var o=i;i=a,a=o}var s={v:i,w:a};return t&&(s.name=t),s}function X(e,n){return P(e,n.v,n.w,n.name)}class zn{constructor(){var n={};n._next=n._prev=n,this._sentinel=n}dequeue(){var n=this._sentinel,r=n._prev;if(r!==n)return we(r),r}enqueue(n){var r=this._sentinel;n._prev&&n._next&&we(n),n._next=r._next,r._next._prev=n,r._next=n,n._prev=r}toString(){for(var n=[],r=this._sentinel,t=r._prev;t!==r;)n.push(JSON.stringify(t,Xn)),t=t._prev;return"["+n.join(", ")+"]"}}function we(e){e._prev._next=e._next,e._next._prev=e._prev,delete e._next,delete e._prev}function Xn(e,n){if(e!=="_next"&&e!=="_prev")return n}var Un=I(1);function Hn(e,n){if(e.nodeCount()<=1)return[];var r=Kn(e,n||Un),t=Jn(r.graph,r.buckets,r.zeroIdx);return A(g(t,function(i){return e.outEdges(i.v,i.w)}))}function Jn(e,n,r){for(var t=[],i=n[n.length-1],a=n[0],o;e.nodeCount();){for(;o=a.dequeue();)U(e,n,r,o);for(;o=i.dequeue();)U(e,n,r,o);if(e.nodeCount()){for(var s=n.length-2;s>0;--s)if(o=n[s].dequeue(),o){t=t.concat(U(e,n,r,o,!0));break}}}return t}function U(e,n,r,t,i){var a=i?[]:void 0;return f(e.inEdges(t.v),function(o){var s=e.edge(o),u=e.node(o.v);i&&a.push({v:o.v,w:o.w}),u.out-=s,ne(n,r,u)}),f(e.outEdges(t.v),function(o){var s=e.edge(o),u=o.w,d=e.node(u);d.in-=s,ne(n,r,d)}),e.removeNode(t.v),a}function Kn(e,n){var r=new _,t=0,i=0;f(e.nodes(),function(s){r.setNode(s,{v:s,in:0,out:0})}),f(e.edges(),function(s){var u=r.edge(s.v,s.w)||0,d=n(s),h=u+d;r.setEdge(s.v,s.w,h),i=Math.max(i,r.node(s.v).out+=d),t=Math.max(t,r.node(s.w).in+=d)});var a=M(i+t+3).map(function(){return new zn}),o=t+1;return f(r.nodes(),function(s){ne(a,o,r.node(s))}),{graph:r,buckets:a,zeroIdx:o}}function ne(e,n,r){r.out?r.in?e[r.out-r.in+n].enqueue(r):e[e.length-1].enqueue(r):e[0].enqueue(r)}function Zn(e){var n=e.graph().acyclicer==="greedy"?Hn(e,r(e)):Qn(e);f(n,function(t){var i=e.edge(t);e.removeEdge(t),i.forwardName=t.name,i.reversed=!0,e.setEdge(t.w,t.v,i,se("rev"))});function r(t){return function(i){return t.edge(i).weight}}}function Qn(e){var n=[],r={},t={};function i(a){m(t,a)||(t[a]=!0,r[a]=!0,f(e.outEdges(a),function(o){m(r,o.w)?n.push(o):i(o.w)}),delete r[a])}return f(e.nodes(),i),n}function er(e){f(e.edges(),function(n){var r=e.edge(n);if(r.reversed){e.removeEdge(n);var t=r.forwardName;delete r.reversed,delete r.forwardName,e.setEdge(n.w,n.v,r,t)}})}function O(e,n,r,t){var i;do i=se(t);while(e.hasNode(i));return r.dummy=n,e.setNode(i,r),i}function nr(e){var n=new _().setGraph(e.graph());return f(e.nodes(),function(r){n.setNode(r,e.node(r))}),f(e.edges(),function(r){var t=n.edge(r.v,r.w)||{weight:0,minlen:1},i=e.edge(r);n.setEdge(r.v,r.w,{weight:t.weight+i.weight,minlen:Math.max(t.minlen,i.minlen)})}),n}function Fe(e){var n=new _({multigraph:e.isMultigraph()}).setGraph(e.graph());return f(e.nodes(),function(r){e.children(r).length||n.setNode(r,e.node(r))}),f(e.edges(),function(r){n.setEdge(r,e.edge(r))}),n}function _e(e,n){var r=e.x,t=e.y,i=n.x-r,a=n.y-t,o=e.width/2,s=e.height/2;if(!i&&!a)throw new Error("Not possible to find intersection inside of the rectangle");var u,d;return Math.abs(a)*o>Math.abs(i)*s?(a<0&&(s=-s),u=s*i/a,d=s):(i<0&&(o=-o),u=o,d=o*a/i),{x:r+u,y:t+d}}function z(e){var n=g(M(Se(e)+1),function(){return[]});return f(e.nodes(),function(r){var t=e.node(r),i=t.rank;w(i)||(n[i][t.order]=r)}),n}function rr(e){var n=T(g(e.nodes(),function(r){return e.node(r).rank}));f(e.nodes(),function(r){var t=e.node(r);m(t,"rank")&&(t.rank-=n)})}function tr(e){var n=T(g(e.nodes(),function(a){return e.node(a).rank})),r=[];f(e.nodes(),function(a){var o=e.node(a).rank-n;r[o]||(r[o]=[]),r[o].push(a)});var t=0,i=e.graph().nodeRankFactor;f(r,function(a,o){w(a)&&o%i!==0?--t:t&&f(a,function(s){e.node(s).rank+=t})})}function Ee(e,n,r,t){var i={width:0,height:0};return arguments.length>=4&&(i.rank=r,i.order=t),O(e,"border",i,n)}function Se(e){return y(g(e.nodes(),function(n){var r=e.node(n).rank;if(!w(r))return r}))}function ir(e,n){var r={lhs:[],rhs:[]};return f(e,function(t){n(t)?r.lhs.push(t):r.rhs.push(t)}),r}function ar(e,n){var r=le();try{return n()}finally{console.log(e+" time: "+(le()-r)+"ms")}}function or(e,n){return n()}function sr(e){function n(r){var t=e.children(r),i=e.node(r);if(t.length&&f(t,n),m(i,"minRank")){i.borderLeft=[],i.borderRight=[];for(var a=i.minRank,o=i.maxRank+1;a<o;++a)xe(e,"borderLeft","_bl",r,i,a),xe(e,"borderRight","_br",r,i,a)}}f(e.children(),n)}function xe(e,n,r,t,i,a){var o={width:0,height:0,rank:a,borderType:n},s=i[n][a-1],u=O(e,"border",o,r);i[n][a]=u,e.setParent(u,t),s&&e.setEdge(s,u,{weight:1})}function ur(e){var n=e.graph().rankdir.toLowerCase();(n==="lr"||n==="rl")&&Ae(e)}function dr(e){var n=e.graph().rankdir.toLowerCase();(n==="bt"||n==="rl")&&fr(e),(n==="lr"||n==="rl")&&(hr(e),Ae(e))}function Ae(e){f(e.nodes(),function(n){ke(e.node(n))}),f(e.edges(),function(n){ke(e.edge(n))})}function ke(e){var n=e.width;e.width=e.height,e.height=n}function fr(e){f(e.nodes(),function(n){H(e.node(n))}),f(e.edges(),function(n){var r=e.edge(n);f(r.points,H),m(r,"y")&&H(r)})}function H(e){e.y=-e.y}function hr(e){f(e.nodes(),function(n){J(e.node(n))}),f(e.edges(),function(n){var r=e.edge(n);f(r.points,J),m(r,"x")&&J(r)})}function J(e){var n=e.x;e.x=e.y,e.y=n}function cr(e){e.graph().dummyChains=[],f(e.edges(),function(n){lr(e,n)})}function lr(e,n){var r=n.v,t=e.node(r).rank,i=n.w,a=e.node(i).rank,o=n.name,s=e.edge(n),u=s.labelRank;if(a!==t+1){e.removeEdge(n);var d,h,c;for(c=0,++t;t<a;++c,++t)s.points=[],h={width:0,height:0,edgeLabel:s,edgeObj:n,rank:t},d=O(e,"edge",h,"_d"),t===u&&(h.width=s.width,h.height=s.height,h.dummy="edge-label",h.labelpos=s.labelpos),e.setEdge(r,d,{weight:s.weight},o),c===0&&e.graph().dummyChains.push(d),r=d;e.setEdge(r,i,{weight:s.weight},o)}}function vr(e){f(e.graph().dummyChains,function(n){var r=e.node(n),t=r.edgeLabel,i;for(e.setEdge(r.edgeObj,t);r.dummy;)i=e.successors(n)[0],e.removeNode(n),t.points.push({x:r.x,y:r.y}),r.dummy==="edge-label"&&(t.x=r.x,t.y=r.y,t.width=r.width,t.height=r.height),n=i,r=e.node(n)})}function ue(e){var n={};function r(t){var i=e.node(t);if(m(n,t))return i.rank;n[t]=!0;var a=T(g(e.outEdges(t),function(o){return r(o.w)-e.edge(o).minlen}));return(a===Number.POSITIVE_INFINITY||a===void 0||a===null)&&(a=0),i.rank=a}f(e.sources(),r)}function F(e,n){return e.node(n.w).rank-e.node(n.v).rank-e.edge(n).minlen}function Ve(e){var n=new _({directed:!1}),r=e.nodes()[0],t=e.nodeCount();n.setNode(r,{});for(var i,a;pr(n,e)<t;)i=mr(n,e),a=n.hasNode(i.v)?F(e,i):-F(e,i),gr(n,e,a);return n}function pr(e,n){function r(t){f(n.nodeEdges(t),function(i){var a=i.v,o=t===a?i.w:a;!e.hasNode(o)&&!F(n,i)&&(e.setNode(o,{}),e.setEdge(t,o,{}),r(o))})}return f(e.nodes(),r),e.nodeCount()}function mr(e,n){return oe(n.edges(),function(r){if(e.hasNode(r.v)!==e.hasNode(r.w))return F(n,r)})}function gr(e,n,r){f(e.nodes(),function(t){n.node(t).rank+=r})}function br(){}br.prototype=new Error;function De(e,n,r){S(n)||(n=[n]);var t=(e.isDirected()?e.successors:e.neighbors).bind(e),i=[],a={};return f(n,function(o){if(!e.hasNode(o))throw new Error("Graph does not have node: "+o);Ge(e,o,r==="post",a,t,i)}),i}function Ge(e,n,r,t,i,a){m(t,n)||(t[n]=!0,r||a.push(n),f(i(n),function(o){Ge(e,o,r,t,i,a)}),r&&a.push(n))}function wr(e,n){return De(e,n,"post")}function _r(e,n){return De(e,n,"pre")}C.initLowLimValues=fe;C.initCutValues=de;C.calcCutValue=Be;C.leaveEdge=je;C.enterEdge=$e;C.exchangeEdges=qe;function C(e){e=nr(e),ue(e);var n=Ve(e);fe(n),de(n,e);for(var r,t;r=je(n);)t=$e(n,e,r),qe(n,e,r,t)}function de(e,n){var r=wr(e,e.nodes());r=r.slice(0,r.length-1),f(r,function(t){Er(e,n,t)})}function Er(e,n,r){var t=e.node(r),i=t.parent;e.edge(r,i).cutvalue=Be(e,n,r)}function Be(e,n,r){var t=e.node(r),i=t.parent,a=!0,o=n.edge(r,i),s=0;return o||(a=!1,o=n.edge(i,r)),s=o.weight,f(n.nodeEdges(r),function(u){var d=u.v===r,h=d?u.w:u.v;if(h!==i){var c=d===a,l=n.edge(u).weight;if(s+=c?l:-l,kr(e,r,h)){var v=e.edge(r,h).cutvalue;s+=c?-v:v}}}),s}function fe(e,n){arguments.length<2&&(n=e.nodes()[0]),Ye(e,{},1,n)}function Ye(e,n,r,t,i){var a=r,o=e.node(t);return n[t]=!0,f(e.neighbors(t),function(s){m(n,s)||(r=Ye(e,n,r,s,t))}),o.low=a,o.lim=r++,i?o.parent=i:delete o.parent,r}function je(e){return ie(e.edges(),function(n){return e.edge(n).cutvalue<0})}function $e(e,n,r){var t=r.v,i=r.w;n.hasEdge(t,i)||(t=r.w,i=r.v);var a=e.node(t),o=e.node(i),s=a,u=!1;a.lim>o.lim&&(s=o,u=!0);var d=E(n.edges(),function(h){return u===Ne(e,e.node(h.v),s)&&u!==Ne(e,e.node(h.w),s)});return oe(d,function(h){return F(n,h)})}function qe(e,n,r,t){var i=r.v,a=r.w;e.removeEdge(i,a),e.setEdge(t.v,t.w,{}),fe(e),de(e,n),xr(e,n)}function xr(e,n){var r=ie(e.nodes(),function(i){return!n.node(i).parent}),t=_r(e,r);t=t.slice(1),f(t,function(i){var a=e.node(i).parent,o=n.edge(i,a),s=!1;o||(o=n.edge(a,i),s=!0),n.node(i).rank=n.node(a).rank+(s?o.minlen:-o.minlen)})}function kr(e,n,r){return e.hasEdge(n,r)}function Ne(e,n,r){return r.low<=n.lim&&n.lim<=r.lim}function Nr(e){switch(e.graph().ranker){case"network-simplex":ye(e);break;case"tight-tree":Lr(e);break;case"longest-path":yr(e);break;default:ye(e)}}var yr=ue;function Lr(e){ue(e),Ve(e)}function ye(e){C(e)}function Cr(e){var n=O(e,"root",{},"_root"),r=Mr(e),t=y(x(r))-1,i=2*t+1;e.graph().nestingRoot=n,f(e.edges(),function(o){e.edge(o).minlen*=i});var a=Or(e)+1;f(e.children(),function(o){We(e,n,i,a,t,r,o)}),e.graph().nodeRankFactor=i}function We(e,n,r,t,i,a,o){var s=e.children(o);if(!s.length){o!==n&&e.setEdge(n,o,{weight:0,minlen:r});return}var u=Ee(e,"_bt"),d=Ee(e,"_bb"),h=e.node(o);e.setParent(u,o),h.borderTop=u,e.setParent(d,o),h.borderBottom=d,f(s,function(c){We(e,n,r,t,i,a,c);var l=e.node(c),v=l.borderTop?l.borderTop:c,p=l.borderBottom?l.borderBottom:c,b=l.borderTop?t:2*t,R=v!==p?1:i-a[o]+1;e.setEdge(u,v,{weight:b,minlen:R,nestingEdge:!0}),e.setEdge(p,d,{weight:b,minlen:R,nestingEdge:!0})}),e.parent(o)||e.setEdge(n,u,{weight:0,minlen:i+a[o]})}function Mr(e){var n={};function r(t,i){var a=e.children(t);a&&a.length&&f(a,function(o){r(o,i+1)}),n[t]=i}return f(e.children(),function(t){r(t,1)}),n}function Or(e){return V(e.edges(),function(n,r){return n+e.edge(r).weight},0)}function Rr(e){var n=e.graph();e.removeNode(n.nestingRoot),delete n.nestingRoot,f(e.edges(),function(r){var t=e.edge(r);t.nestingEdge&&e.removeEdge(r)})}function Ir(e,n,r){var t={},i;f(r,function(a){for(var o=e.parent(a),s,u;o;){if(s=e.parent(o),s?(u=t[s],t[s]=o):(u=i,i=o),u&&u!==o){n.setEdge(u,o);return}o=s}})}function Pr(e,n,r){var t=Tr(e),i=new _({compound:!0}).setGraph({root:t}).setDefaultNodeLabel(function(a){return e.node(a)});return f(e.nodes(),function(a){var o=e.node(a),s=e.parent(a);(o.rank===n||o.minRank<=n&&n<=o.maxRank)&&(i.setNode(a),i.setParent(a,s||t),f(e[r](a),function(u){var d=u.v===a?u.w:u.v,h=i.edge(d,a),c=w(h)?0:h.weight;i.setEdge(d,a,{weight:e.edge(u).weight+c})}),m(o,"minRank")&&i.setNode(a,{borderLeft:o.borderLeft[n],borderRight:o.borderRight[n]}))}),i}function Tr(e){for(var n;e.hasNode(n=se("_root")););return n}function Fr(e,n){for(var r=0,t=1;t<n.length;++t)r+=Sr(e,n[t-1],n[t]);return r}function Sr(e,n,r){for(var t=$n(r,g(r,function(d,h){return h})),i=A(g(n,function(d){return D(g(e.outEdges(d),function(h){return{pos:t[h.w],weight:e.edge(h).weight}}),"pos")})),a=1;a<r.length;)a<<=1;var o=2*a-1;a-=1;var s=g(new Array(o),function(){return 0}),u=0;return f(i.forEach(function(d){var h=d.pos+a;s[h]+=d.weight;for(var c=0;h>0;)h%2&&(c+=s[h+1]),h=h-1>>1,s[h]+=d.weight;u+=d.weight*c})),u}function Ar(e){var n={},r=E(e.nodes(),function(s){return!e.children(s).length}),t=y(g(r,function(s){return e.node(s).rank})),i=g(M(t+1),function(){return[]});function a(s){if(!m(n,s)){n[s]=!0;var u=e.node(s);i[u.rank].push(s),f(e.successors(s),a)}}var o=D(r,function(s){return e.node(s).rank});return f(o,a),i}function Vr(e,n){return g(n,function(r){var t=e.inEdges(r);if(t.length){var i=V(t,function(a,o){var s=e.edge(o),u=e.node(o.v);return{sum:a.sum+s.weight*u.order,weight:a.weight+s.weight}},{sum:0,weight:0});return{v:r,barycenter:i.sum/i.weight,weight:i.weight}}else return{v:r}})}function Dr(e,n){var r={};f(e,function(i,a){var o=r[i.v]={indegree:0,in:[],out:[],vs:[i.v],i:a};w(i.barycenter)||(o.barycenter=i.barycenter,o.weight=i.weight)}),f(n.edges(),function(i){var a=r[i.v],o=r[i.w];!w(a)&&!w(o)&&(o.indegree++,a.out.push(r[i.w]))});var t=E(r,function(i){return!i.indegree});return Gr(t)}function Gr(e){var n=[];function r(a){return function(o){o.merged||(w(o.barycenter)||w(a.barycenter)||o.barycenter>=a.barycenter)&&Br(a,o)}}function t(a){return function(o){o.in.push(a),--o.indegree===0&&e.push(o)}}for(;e.length;){var i=e.pop();n.push(i),f(i.in.reverse(),r(i)),f(i.out,t(i))}return g(E(n,function(a){return!a.merged}),function(a){return j(a,["vs","i","barycenter","weight"])})}function Br(e,n){var r=0,t=0;e.weight&&(r+=e.barycenter*e.weight,t+=e.weight),n.weight&&(r+=n.barycenter*n.weight,t+=n.weight),e.vs=n.vs.concat(e.vs),e.barycenter=r/t,e.weight=t,e.i=Math.min(n.i,e.i),n.merged=!0}function Yr(e,n){var r=ir(e,function(h){return m(h,"barycenter")}),t=r.lhs,i=D(r.rhs,function(h){return-h.i}),a=[],o=0,s=0,u=0;t.sort(jr(!!n)),u=Le(a,i,u),f(t,function(h){u+=h.vs.length,a.push(h.vs),o+=h.barycenter*h.weight,s+=h.weight,u=Le(a,i,u)});var d={vs:A(a)};return s&&(d.barycenter=o/s,d.weight=s),d}function Le(e,n,r){for(var t;n.length&&(t=$(n)).i<=r;)n.pop(),e.push(t.vs),r++;return r}function jr(e){return function(n,r){return n.barycenter<r.barycenter?-1:n.barycenter>r.barycenter?1:e?r.i-n.i:n.i-r.i}}function ze(e,n,r,t){var i=e.children(n),a=e.node(n),o=a?a.borderLeft:void 0,s=a?a.borderRight:void 0,u={};o&&(i=E(i,function(p){return p!==o&&p!==s}));var d=Vr(e,i);f(d,function(p){if(e.children(p.v).length){var b=ze(e,p.v,r,t);u[p.v]=b,m(b,"barycenter")&&qr(p,b)}});var h=Dr(d,r);$r(h,u);var c=Yr(h,t);if(o&&(c.vs=A([o,c.vs,s]),e.predecessors(o).length)){var l=e.node(e.predecessors(o)[0]),v=e.node(e.predecessors(s)[0]);m(c,"barycenter")||(c.barycenter=0,c.weight=0),c.barycenter=(c.barycenter*c.weight+l.order+v.order)/(c.weight+2),c.weight+=2}return c}function $r(e,n){f(e,function(r){r.vs=A(r.vs.map(function(t){return n[t]?n[t].vs:t}))})}function qr(e,n){w(e.barycenter)?(e.barycenter=n.barycenter,e.weight=n.weight):(e.barycenter=(e.barycenter*e.weight+n.barycenter*n.weight)/(e.weight+n.weight),e.weight+=n.weight)}function Wr(e){var n=Se(e),r=Ce(e,M(1,n+1),"inEdges"),t=Ce(e,M(n-1,-1,-1),"outEdges"),i=Ar(e);Me(e,i);for(var a=Number.POSITIVE_INFINITY,o,s=0,u=0;u<4;++s,++u){zr(s%2?r:t,s%4>=2),i=z(e);var d=Fr(e,i);d<a&&(u=0,o=hn(i),a=d)}Me(e,o)}function Ce(e,n,r){return g(n,function(t){return Pr(e,t,r)})}function zr(e,n){var r=new _;f(e,function(t){var i=t.graph().root,a=ze(t,i,r,n);f(a.vs,function(o,s){t.node(o).order=s}),Ir(t,r,a.vs)})}function Me(e,n){f(n,function(r){f(r,function(t,i){e.node(t).order=i})})}function Xr(e){var n=Hr(e);f(e.graph().dummyChains,function(r){for(var t=e.node(r),i=t.edgeObj,a=Ur(e,n,i.v,i.w),o=a.path,s=a.lca,u=0,d=o[u],h=!0;r!==i.w;){if(t=e.node(r),h){for(;(d=o[u])!==s&&e.node(d).maxRank<t.rank;)u++;d===s&&(h=!1)}if(!h){for(;u<o.length-1&&e.node(d=o[u+1]).minRank<=t.rank;)u++;d=o[u]}e.setParent(r,d),r=e.successors(r)[0]}})}function Ur(e,n,r,t){var i=[],a=[],o=Math.min(n[r].low,n[t].low),s=Math.max(n[r].lim,n[t].lim),u,d;u=r;do u=e.parent(u),i.push(u);while(u&&(n[u].low>o||s>n[u].lim));for(d=u,u=t;(u=e.parent(u))!==d;)a.push(u);return{path:i.concat(a.reverse()),lca:d}}function Hr(e){var n={},r=0;function t(i){var a=r;f(e.children(i),t),n[i]={low:a,lim:r++}}return f(e.children(),t),n}function Jr(e,n){var r={};function t(i,a){var o=0,s=0,u=i.length,d=$(a);return f(a,function(h,c){var l=Zr(e,h),v=l?e.node(l).order:u;(l||h===d)&&(f(a.slice(s,c+1),function(p){f(e.predecessors(p),function(b){var R=e.node(b),he=R.order;(he<o||v<he)&&!(R.dummy&&e.node(p).dummy)&&Xe(r,b,p)})}),s=c+1,o=v)}),a}return V(n,t),r}function Kr(e,n){var r={};function t(a,o,s,u,d){var h;f(M(o,s),function(c){h=a[c],e.node(h).dummy&&f(e.predecessors(h),function(l){var v=e.node(l);v.dummy&&(v.order<u||v.order>d)&&Xe(r,l,h)})})}function i(a,o){var s=-1,u,d=0;return f(o,function(h,c){if(e.node(h).dummy==="border"){var l=e.predecessors(h);l.length&&(u=e.node(l[0]).order,t(o,d,c,s,u),d=c,s=u)}t(o,d,o.length,u,a.length)}),o}return V(n,i),r}function Zr(e,n){if(e.node(n).dummy)return ie(e.predecessors(n),function(r){return e.node(r).dummy})}function Xe(e,n,r){if(n>r){var t=n;n=r,r=t}var i=e[n];i||(e[n]=i={}),i[r]=!0}function Qr(e,n,r){if(n>r){var t=n;n=r,r=t}return m(e[n],r)}function et(e,n,r,t){var i={},a={},o={};return f(n,function(s){f(s,function(u,d){i[u]=u,a[u]=u,o[u]=d})}),f(n,function(s){var u=-1;f(s,function(d){var h=t(d);if(h.length){h=D(h,function(b){return o[b]});for(var c=(h.length-1)/2,l=Math.floor(c),v=Math.ceil(c);l<=v;++l){var p=h[l];a[d]===d&&u<o[p]&&!Qr(r,d,p)&&(a[p]=d,a[d]=i[d]=i[p],u=o[p])}}})}),{root:i,align:a}}function nt(e,n,r,t,i){var a={},o=rt(e,n,r,i),s=i?"borderLeft":"borderRight";function u(c,l){for(var v=o.nodes(),p=v.pop(),b={};p;)b[p]?c(p):(b[p]=!0,v.push(p),v=v.concat(l(p))),p=v.pop()}function d(c){a[c]=o.inEdges(c).reduce(function(l,v){return Math.max(l,a[v.v]+o.edge(v))},0)}function h(c){var l=o.outEdges(c).reduce(function(p,b){return Math.min(p,a[b.w]-o.edge(b))},Number.POSITIVE_INFINITY),v=e.node(c);l!==Number.POSITIVE_INFINITY&&v.borderType!==s&&(a[c]=Math.max(a[c],l))}return u(d,o.predecessors.bind(o)),u(h,o.successors.bind(o)),f(t,function(c){a[c]=a[r[c]]}),a}function rt(e,n,r,t){var i=new _,a=e.graph(),o=st(a.nodesep,a.edgesep,t);return f(n,function(s){var u;f(s,function(d){var h=r[d];if(i.setNode(h),u){var c=r[u],l=i.edge(c,h);i.setEdge(c,h,Math.max(o(e,d,u),l||0))}u=d})}),i}function tt(e,n){return oe(x(n),function(r){var t=Number.NEGATIVE_INFINITY,i=Number.POSITIVE_INFINITY;return kn(r,function(a,o){var s=ut(e,o)/2;t=Math.max(a+s,t),i=Math.min(a-s,i)}),t-i})}function it(e,n){var r=x(n),t=T(r),i=y(r);f(["u","d"],function(a){f(["l","r"],function(o){var s=a+o,u=e[s],d;if(u!==n){var h=x(u);d=o==="l"?t-T(h):i-y(h),d&&(e[s]=W(u,function(c){return c+d}))}})})}function at(e,n){return W(e.ul,function(r,t){if(n)return e[n.toLowerCase()][t];var i=D(g(e,t));return(i[1]+i[2])/2})}function ot(e){var n=z(e),r=ee(Jr(e,n),Kr(e,n)),t={},i;f(["u","d"],function(o){i=o==="u"?n:x(n).reverse(),f(["l","r"],function(s){s==="r"&&(i=g(i,function(c){return x(c).reverse()}));var u=(o==="u"?e.predecessors:e.successors).bind(e),d=et(e,i,r,u),h=nt(e,i,d.root,d.align,s==="r");s==="r"&&(h=W(h,function(c){return-c})),t[o+s]=h})});var a=tt(e,t);return it(t,a),at(t,e.graph().align)}function st(e,n,r){return function(t,i,a){var o=t.node(i),s=t.node(a),u=0,d;if(u+=o.width/2,m(o,"labelpos"))switch(o.labelpos.toLowerCase()){case"l":d=-o.width/2;break;case"r":d=o.width/2;break}if(d&&(u+=r?d:-d),d=0,u+=(o.dummy?n:e)/2,u+=(s.dummy?n:e)/2,u+=s.width/2,m(s,"labelpos"))switch(s.labelpos.toLowerCase()){case"l":d=s.width/2;break;case"r":d=-s.width/2;break}return d&&(u+=r?d:-d),d=0,u}}function ut(e,n){return e.node(n).width}function dt(e){e=Fe(e),ft(e),Nn(ot(e),function(n,r){e.node(r).x=n})}function ft(e){var n=z(e),r=e.graph().ranksep,t=0;f(n,function(i){var a=y(g(i,function(o){return e.node(o).height}));f(i,function(o){e.node(o).y=t+a/2}),t+=a+r})}function At(e,n){var r=n&&n.debugTiming?ar:or;r("layout",function(){var t=r("  buildLayoutGraph",function(){return Et(e)});r("  runLayout",function(){ht(t,r)}),r("  updateInputGraph",function(){ct(e,t)})})}function ht(e,n){n("    makeSpaceForEdgeLabels",function(){xt(e)}),n("    removeSelfEdges",function(){It(e)}),n("    acyclic",function(){Zn(e)}),n("    nestingGraph.run",function(){Cr(e)}),n("    rank",function(){Nr(Fe(e))}),n("    injectEdgeLabelProxies",function(){kt(e)}),n("    removeEmptyRanks",function(){tr(e)}),n("    nestingGraph.cleanup",function(){Rr(e)}),n("    normalizeRanks",function(){rr(e)}),n("    assignRankMinMax",function(){Nt(e)}),n("    removeEdgeLabelProxies",function(){yt(e)}),n("    normalize.run",function(){cr(e)}),n("    parentDummyChains",function(){Xr(e)}),n("    addBorderSegments",function(){sr(e)}),n("    order",function(){Wr(e)}),n("    insertSelfEdges",function(){Pt(e)}),n("    adjustCoordinateSystem",function(){ur(e)}),n("    position",function(){dt(e)}),n("    positionSelfEdges",function(){Tt(e)}),n("    removeBorderNodes",function(){Rt(e)}),n("    normalize.undo",function(){vr(e)}),n("    fixupEdgeLabelCoords",function(){Mt(e)}),n("    undoCoordinateSystem",function(){dr(e)}),n("    translateGraph",function(){Lt(e)}),n("    assignNodeIntersects",function(){Ct(e)}),n("    reversePoints",function(){Ot(e)}),n("    acyclic.undo",function(){er(e)})}function ct(e,n){f(e.nodes(),function(r){var t=e.node(r),i=n.node(r);t&&(t.x=i.x,t.y=i.y,n.children(r).length&&(t.width=i.width,t.height=i.height))}),f(e.edges(),function(r){var t=e.edge(r),i=n.edge(r);t.points=i.points,m(i,"x")&&(t.x=i.x,t.y=i.y)}),e.graph().width=n.graph().width,e.graph().height=n.graph().height}var lt=["nodesep","edgesep","ranksep","marginx","marginy"],vt={ranksep:50,edgesep:20,nodesep:50,rankdir:"tb"},pt=["acyclicer","ranker","rankdir","align"],mt=["width","height"],gt={width:0,height:0},bt=["minlen","weight","width","height","labeloffset"],wt={minlen:1,weight:1,width:0,height:0,labeloffset:10,labelpos:"r"},_t=["labelpos"];function Et(e){var n=new _({multigraph:!0,compound:!0}),r=Z(e.graph());return n.setGraph(ee({},vt,K(r,lt),j(r,pt))),f(e.nodes(),function(t){var i=Z(e.node(t));n.setNode(t,gn(K(i,mt),gt)),n.setParent(t,e.parent(t))}),f(e.edges(),function(t){var i=Z(e.edge(t));n.setEdge(t,ee({},wt,K(i,bt),j(i,_t)))}),n}function xt(e){var n=e.graph();n.ranksep/=2,f(e.edges(),function(r){var t=e.edge(r);t.minlen*=2,t.labelpos.toLowerCase()!=="c"&&(n.rankdir==="TB"||n.rankdir==="BT"?t.width+=t.labeloffset:t.height+=t.labeloffset)})}function kt(e){f(e.edges(),function(n){var r=e.edge(n);if(r.width&&r.height){var t=e.node(n.v),i=e.node(n.w),a={rank:(i.rank-t.rank)/2+t.rank,e:n};O(e,"edge-proxy",a,"_ep")}})}function Nt(e){var n=0;f(e.nodes(),function(r){var t=e.node(r);t.borderTop&&(t.minRank=e.node(t.borderTop).rank,t.maxRank=e.node(t.borderBottom).rank,n=y(n,t.maxRank))}),e.graph().maxRank=n}function yt(e){f(e.nodes(),function(n){var r=e.node(n);r.dummy==="edge-proxy"&&(e.edge(r.e).labelRank=r.rank,e.removeNode(n))})}function Lt(e){var n=Number.POSITIVE_INFINITY,r=0,t=Number.POSITIVE_INFINITY,i=0,a=e.graph(),o=a.marginx||0,s=a.marginy||0;function u(d){var h=d.x,c=d.y,l=d.width,v=d.height;n=Math.min(n,h-l/2),r=Math.max(r,h+l/2),t=Math.min(t,c-v/2),i=Math.max(i,c+v/2)}f(e.nodes(),function(d){u(e.node(d))}),f(e.edges(),function(d){var h=e.edge(d);m(h,"x")&&u(h)}),n-=o,t-=s,f(e.nodes(),function(d){var h=e.node(d);h.x-=n,h.y-=t}),f(e.edges(),function(d){var h=e.edge(d);f(h.points,function(c){c.x-=n,c.y-=t}),m(h,"x")&&(h.x-=n),m(h,"y")&&(h.y-=t)}),a.width=r-n+o,a.height=i-t+s}function Ct(e){f(e.edges(),function(n){var r=e.edge(n),t=e.node(n.v),i=e.node(n.w),a,o;r.points?(a=r.points[0],o=r.points[r.points.length-1]):(r.points=[],a=i,o=t),r.points.unshift(_e(t,a)),r.points.push(_e(i,o))})}function Mt(e){f(e.edges(),function(n){var r=e.edge(n);if(m(r,"x"))switch((r.labelpos==="l"||r.labelpos==="r")&&(r.width-=r.labeloffset),r.labelpos){case"l":r.x-=r.width/2+r.labeloffset;break;case"r":r.x+=r.width/2+r.labeloffset;break}})}function Ot(e){f(e.edges(),function(n){var r=e.edge(n);r.reversed&&r.points.reverse()})}function Rt(e){f(e.nodes(),function(n){if(e.children(n).length){var r=e.node(n),t=e.node(r.borderTop),i=e.node(r.borderBottom),a=e.node($(r.borderLeft)),o=e.node($(r.borderRight));r.width=Math.abs(o.x-a.x),r.height=Math.abs(i.y-t.y),r.x=a.x+r.width/2,r.y=t.y+r.height/2}}),f(e.nodes(),function(n){e.node(n).dummy==="border"&&e.removeNode(n)})}function It(e){f(e.edges(),function(n){if(n.v===n.w){var r=e.node(n.v);r.selfEdges||(r.selfEdges=[]),r.selfEdges.push({e:n,label:e.edge(n)}),e.removeEdge(n)}})}function Pt(e){var n=z(e);f(n,function(r){var t=0;f(r,function(i,a){var o=e.node(i);o.order=a+t,f(o.selfEdges,function(s){O(e,"selfedge",{width:s.label.width,height:s.label.height,rank:o.rank,order:a+ ++t,e:s.e,label:s.label},"_se")}),delete o.selfEdges})})}function Tt(e){f(e.nodes(),function(n){var r=e.node(n);if(r.dummy==="selfedge"){var t=e.node(r.e.v),i=t.x+t.width/2,a=t.y,o=r.x-i,s=t.height/2;e.setEdge(r.e,r.label),e.removeNode(n),r.label.points=[{x:i+2*o/3,y:a-s},{x:i+5*o/6,y:a-s},{x:i+o,y:a},{x:i+5*o/6,y:a+s},{x:i+2*o/3,y:a+s}],r.label.x=r.x,r.label.y=r.y}})}function K(e,n){return W(j(e,n),Number)}function Z(e){var n={};return f(e,function(r,t){n[t.toLowerCase()]=r}),n}export{_ as G,gn as d,f,m as h,At as l,M as r,se as u};
