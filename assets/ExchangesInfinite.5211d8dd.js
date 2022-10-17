import{j as r,F as o,a as s,r as u,b as f}from"./index.f862bf89.js";import{u as N}from"./useInfiniteQuery.esm.778e2bca.js";const b=({exchangeData:e})=>r(o,{children:s("article",{className:"flex flex-col bg-slate-900 p-8 rounded-xl text-slate-200 shadow-xl shadow-slate-800",children:[s("div",{className:"flex justify-between items-center pb-4 border-b-2 border-slate-400",children:[s("h2",{className:"text-xl font-semibold",children:[e.trust_score_rank,". ",e.name]}),r("img",{src:e.image,alt:e.name,className:"w-8 h-8 aspect-3/2 object-cover"})]}),s("ul",{className:"pt-4",children:[s("li",{className:"pt-4",children:["URL:"," ",r("a",{href:e.url,className:"hover:text-slate-300",target:"_blank",children:e.url})]}),s("li",{className:"pt-4",children:["Trust Score Rank: ",e.trust_score_rank]}),s("li",{className:"pt-4",children:["Year Established: ",e.year_established]}),s("li",{className:"pt-4",children:["Country: ",e.country]})]})]})}),P=()=>{const[e,d]=u.exports.useState(1),m=async({pageParam:a=1})=>(await f.get(`https://api.coingecko.com/api/v3/exchanges?per_page=21&page=${a}`)).data,{data:t,error:h,status:c,isFetching:p,hasNextPage:n,fetchNextPage:g,isFetchingNextPage:l}=N(["infinite"],m,{getNextPageParam:a=>a,refetchOnWindowFocus:!1});return c==="loading"?r("p",{children:"Loading..."}):c==="error"?s("p",{children:["Error: ",h.message]}):s(o,{children:[r("div",{className:"grid grid-cols-auto-fill gap-5",children:t==null?void 0:t.pages.map(a=>a.map(i=>r(b,{exchangeData:i},i.id)))}),r("div",{children:r("button",{onClick:()=>{g({pageParam:e+1}),d(e+1)},disabled:!n||l,children:l?"Loading more...":n?"Load More":"Nothing more to load"})}),r("div",{children:p&&!l?"Fetching...":null})]})};export{P as default};
