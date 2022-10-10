import{L as f,r as p,N as v,af as $,o as _,c as b,a as t,b as r,w as g,d as n,e as k,f as w,_ as x,ap as T,aq as S,ar as I,as as C,at as K,au as R,av as D,aw as z,ax as M,ay as V,W as l,az as m,X as h,aA as E,aB as A,aC as O,aD as U,aE as B,aj as P,ak as L,aF as N,aG as W,aH as G,aI as y}from"./index.cdd92662.js";const H={key:0,class:"bg-gray-100 dark:bg-darkest text-center xl:text-left shadow rounded p-4 md:p-2"},Y={class:"flex flex-col lg:flex-row items-center justify-between gap-4"},F=w('<strong class="inline-flex items-center lg:ml-2"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z"></path></svg><span class="whitespace-nowrap ml-2">Octo Pro</span></strong><div class="lg:ml-2 xl:ml-4">Share your docs, attach files, and get early access to new features.</div>',2),j={class:"flex items-center justify-end"},X=f({__name:"Banner",setup(o){const e=()=>{window.fathom.trackGoal("92SS7KST",0)};return(c,d)=>{const u=p("router-link");return v($).pro?k("",!0):(_(),b("section",H,[t("div",Y,[F,t("div",j,[r(u,{onClick:e,to:{path:"/account"},class:"button-flat button-color-surface button-size-medium w-full whitespace-nowrap lg:ml-2 text-blue-400"},{default:g(()=>[n("Learn More")]),_:1})])])]))}}}),q={computed:{imagesEnabled:{get(){return this.$store.state.settings.editor.images.enabled},set(o){this.$store.dispatch(T,o)}},ligatures:{get(){return this.$store.state.settings.editor.ligatures},set(o){this.$store.commit(S,o)}},readabilityEnabled:{get(){return this.$store.state.settings.editor.readability.enabled},set(o){this.$store.commit(I,o)}},readabilityMaxWidth:{get(){return this.$store.state.settings.editor.readability.maxWidthInChars},set(o){this.$store.commit(C,o)}},readabilityWordsPerMinute:{get(){return this.$store.state.settings.editor.readability.wordsPerMinute},set(o){this.$store.commit(K,o)}},showCaptions:{get(){return this.$store.state.settings.editor.images.showCaptions},set(o){this.$store.dispatch(R,o)}},spellcheck:{get(){return this.$store.state.settings.editor.spellcheck},set(o){this.$store.commit(D,o)}},tabSize:{get(){return this.$store.state.settings.editor.tabSize},set(o){this.$store.dispatch(z,parseInt(o)||2)}},toolbar:{get(){return this.$store.state.settings.editor.toolbar},set(o){this.$store.commit(M,o)}},vim:{get(){return this.$store.state.settings.editor.keyMap==="vim"},set(o){this.$store.dispatch(V,o?"vim":"default")}}}},J=t("h3",{class:"text-3xl"},"Editor",-1),Z=t("hr",{class:"mt-2 mb-4"},null,-1),Q=t("p",{class:"mb-6"},"Configure settings for Ink - the Markdown editor that powers Octo.",-1),tt={class:"mb-4"},et={class:"button button-size-medium button-color-gray items-center"},st=t("span",{class:"ml-3"},"Spellcheck",-1),ot=t("small",{class:"text-gray-700"},"Note: This will not disable Grammarly if you have the extension enabled.",-1),at={class:"mb-4"},lt={class:"button button-size-medium button-color-gray items-center"},nt=t("span",{class:"ml-3"},"Vim Mode",-1),it=t("small",{class:"text-gray-700"},"Use Vim keybindings to edit your docs.",-1),rt={class:"mb-4"},ct=t("label",{for:"config-tab-size"},"Tab length",-1),dt=t("small",{class:"text-gray-700"},"Set the number of spaces to use for each tab (minimum: 2).",-1),ut={class:"mb-4"},mt=t("h4",{class:"text-2xl mb-2"},"Readability Information",-1),_t=t("p",{class:"mb-2"},"The Readability Bar shows useful information such as word count and read time at the bottom of the editor.",-1),bt={class:"mb-4"},ht={class:"button button-size-medium button-color-gray items-center"},pt=t("span",{class:"ml-3"},"Toggle Readability Bar",-1),gt={class:"mb-4"},yt=t("label",{for:"config-tab-size"},"Reading Speed (words per minute)",-1),xt=t("small",{class:"text-gray-700"},"Reading speed is used to estimate document read time.",-1),ft={class:"mb-4"},Et=t("label",{for:"config-max-width"},"Max Width of Editor (in number of characters)",-1),vt=t("small",{class:"text-gray-700"},"Values between 60 and 100 are common.",-1),kt={class:"mb-4"},wt=t("h4",{class:"text-2xl mb-2"},"Formatting Toolbar",-1),$t=t("p",{class:"mb-2"},"Display the formatting toolbar in the editor.",-1),Tt={class:"mb-4"},St={class:"button button-size-medium button-color-gray items-center"},It=t("span",{class:"ml-3"},"Enable Toolbar",-1),Ct={class:"mb-4"},Kt=t("h4",{class:"text-2xl mb-2"},"Font Ligatures",-1),Rt=t("p",{class:"mb-2"},[n("Render "),t("a",{href:"https://github.com/tonsky/FiraCode#whats-in-the-box",target:"_blank",rel:"noopener noreferrer"},"font ligatures"),n(" (e.g. "),t("code",{class:"monospace ligatures-normal"},"=>"),n(").")],-1),Dt={class:"mb-4"},zt={class:"button button-size-medium button-color-gray items-center"},Mt=t("span",{class:"ml-3"},"Enable Ligatures",-1),Vt={class:"mb-4"},At=t("h4",{class:"text-2xl mb-2"},"Images",-1),Ot=t("p",{class:"mb-2"},[n("This setting determines whether or not image tags (e.g. "),t("code",{class:"bg-gray-100 dark:bg-darkest p-0.5 rounded"},"![alt text](/path/to/image)"),n(") will render images in your docs.")],-1),Ut={class:"mb-4"},Bt={class:"button button-size-medium button-color-gray items-center"},Pt=t("span",{class:"ml-3"},"Enable Images",-1);function Lt(o,e,c,d,u,s){const i=p("Extendable");return _(),b("section",null,[J,Z,Q,r(i,{scope:"app.settings.editor"},{default:g(()=>[t("div",tt,[t("div",null,[t("label",et,[l(t("input",{"onUpdate:modelValue":e[0]||(e[0]=a=>s.spellcheck=a),type:"checkbox",class:"checkbox"},null,512),[[m,s.spellcheck]]),st])]),ot]),t("div",at,[t("div",null,[t("label",lt,[l(t("input",{"onUpdate:modelValue":e[1]||(e[1]=a=>s.vim=a),type:"checkbox",class:"checkbox"},null,512),[[m,s.vim]]),nt])]),it]),t("div",rt,[ct,l(t("input",{"onUpdate:modelValue":e[2]||(e[2]=a=>s.tabSize=a),type:"number",min:"2",id:"config-tab-size",class:"form-text w-full"},null,512),[[h,s.tabSize]]),dt]),t("div",ut,[mt,_t,t("div",bt,[t("div",null,[t("label",ht,[l(t("input",{"onUpdate:modelValue":e[3]||(e[3]=a=>s.readabilityEnabled=a),type:"checkbox",class:"checkbox"},null,512),[[m,s.readabilityEnabled]]),pt])])]),t("div",gt,[yt,l(t("input",{"onUpdate:modelValue":e[4]||(e[4]=a=>s.readabilityWordsPerMinute=a),type:"number",min:"2",id:"config-tab-size",class:"form-text w-full"},null,512),[[h,s.readabilityWordsPerMinute]]),xt]),t("div",ft,[Et,l(t("input",{"onUpdate:modelValue":e[5]||(e[5]=a=>s.readabilityMaxWidth=a),type:"number",min:"40",id:"config-max-width",class:"form-text w-full"},null,512),[[h,s.readabilityMaxWidth]]),vt])]),t("div",kt,[wt,$t,t("div",Tt,[t("label",St,[l(t("input",{"onUpdate:modelValue":e[6]||(e[6]=a=>s.toolbar=a),type:"checkbox",class:"checkbox"},null,512),[[m,s.toolbar]]),It])])]),t("div",Ct,[Kt,Rt,t("div",Dt,[t("label",zt,[l(t("input",{"onUpdate:modelValue":e[7]||(e[7]=a=>s.ligatures=a),type:"checkbox",class:"checkbox"},null,512),[[m,s.ligatures]]),Mt])])]),t("div",Vt,[At,Ot,t("div",Ut,[t("div",null,[t("label",Bt,[l(t("input",{"onUpdate:modelValue":e[8]||(e[8]=a=>s.imagesEnabled=a),type:"checkbox",class:"checkbox"},null,512),[[m,s.imagesEnabled]]),Pt])])])])]),_:1})])}var Nt=x(q,[["render",Lt]]);const Wt={data(){return{togglingCrypto:!1}},computed:{allowCrypto(){return this.privateKey&&this.publicKey},privateKey:{get(){return this.$store.state.settings.crypto.privateKey},set(o){this.$store.dispatch(E,{privateKey:o})}},publicKey:{get(){return this.$store.state.settings.crypto.publicKey},set(o){this.$store.dispatch(E,{publicKey:o})}},toggleCrypto:{get(){return this.$store.state.settings.crypto.enabled},async set(o){this.togglingCrypto=!0,await this.$store.dispatch(A,o),await Promise.all(this.$store.getters.decrypted.map(e=>this.$store.dispatch(O,e))),this.togglingCrypto=!1}}},methods:{async generateKeys(){const o=await U(),{privateKey:e,publicKey:c}=await B(o);this.privateKey=e,this.publicKey=c}}},Gt=w('<h3 class="text-3xl">Client-side Encryption</h3><hr class="mt-2 mb-4"><div class="mb-4"><label for="tags-search">Documents are encrypted using a <a href="https://en.wikipedia.org/wiki/Hybrid_cryptosystem" target="_blank" rel="noopener noreferrer">hybrid cryptosystem</a>. You may provide your own keys or generate a new set here. If you choose to generate a new set, be sure to <strong>make a secure backup of your keys</strong>. If you lose your private key, you will not be able to recover any data that is encrypted.</label></div>',3),Ht={class:"mb-4"},Yt={class:"button button-size-medium button-color-gray"},Ft=["disabled"],jt=t("span",{class:"ml-3"},"Enable Encryption",-1),Xt={class:"text-gray-700"},qt={key:0},Jt=t("strong",null,"requires",-1),Zt={class:"mb-4"},Qt=t("label",{for:"tags-search"},"Private Key",-1),te=t("small",{class:"text-gray-700"},[n("This key is used to "),t("em",null,"decrypt"),n(" documents. It "),t("strong",null,"will not"),n(" be synced across devices when signed in.")],-1),ee={class:"mb-4"},se=t("label",{for:"tags-search"},"Public Key",-1),oe=t("small",{class:"text-gray-700"},[n("This key is used to "),t("em",null,"encrypt"),n(" documents. It "),t("strong",null,"will"),n(" be synced across devices when signed in.")],-1),ae={class:"mb-4"};function le(o,e,c,d,u,s){return _(),b("section",null,[Gt,t("div",Ht,[t("div",null,[t("label",Yt,[l(t("input",{"onUpdate:modelValue":e[0]||(e[0]=i=>s.toggleCrypto=i),disabled:!s.allowCrypto||u.togglingCrypto,type:"checkbox",class:"checkbox"},null,8,Ft),[[m,s.toggleCrypto]]),jt])]),t("small",Xt,[n("Note: Toggling encryption will encrypt/decrypt all existing documents. "),s.allowCrypto?k("",!0):(_(),b("span",qt,[n("Enabling encryption "),Jt,n(" private/public keys. Generate or supply them below to enable.")]))])]),t("div",Zt,[Qt,l(t("textarea",{"onUpdate:modelValue":e[1]||(e[1]=i=>s.privateKey=i),class:"form-text w-full",rows:"5",placeholder:"Private key",autocomplete:"off"},null,512),[[h,s.privateKey]]),te]),t("div",ee,[se,l(t("textarea",{"onUpdate:modelValue":e[2]||(e[2]=i=>s.publicKey=i),class:"form-text w-full",rows:"5",placeholder:"Public key",autocomplete:"off"},null,512),[[h,s.publicKey]]),oe]),t("div",ae,[t("button",{onClick:e[3]||(e[3]=(...i)=>s.generateKeys&&s.generateKeys(...i)),class:"button button-size-medium button-color-gray"},"Generate Keys")])])}var ne=x(Wt,[["render",le]]);const ie=t("h3",{class:"text-3xl"},"Experimental Features",-1),re=t("hr",{class:"mt-2 mb-4"},null,-1),ce=t("div",{class:"mb-4"},[t("p",null,"These features may be changed or removed at any time.")],-1),de={class:"button button-size-medium button-color-gray items-center"},ue=t("span",{class:"ml-3"},"Enable Experimental Features",-1),me=f({__name:"Experimental",setup(o){const{commit:e,state:c}=P(),d=L({get(){return c.settings.experimental},set(u){e(N,u)}});return(u,s)=>(_(),b("section",null,[ie,re,ce,t("div",null,[t("label",de,[l(t("input",{"onUpdate:modelValue":s[0]||(s[0]=i=>W(d)?d.value=i:null),type:"checkbox",class:"checkbox"},null,512),[[m,v(d)]]),ue])])]))}}),_e={},be=t("h3",{class:"text-3xl"},"Export Documents",-1),he=t("hr",{class:"mt-2 mb-4"},null,-1),pe=t("div",{class:"mb-4"},[t("label",null,"Bundle all documents as JSON. Documents will be decrypted if the necessary keys are available.")],-1),ge={class:"mb-4"};function ye(o,e){const c=p("router-link");return _(),b("section",null,[be,he,pe,t("div",ge,[r(c,{to:{path:"/docs/export"},class:"button button-size-medium button-color-gray"},{default:g(()=>[n("Export Documents")]),_:1})])])}var xe=x(_e,[["render",ye]]);const fe={computed:{theme:{get(){return this.$store.state.settings.theme},set(o){this.$store.dispatch(G,o)}}}},Ee=t("h3",{class:"text-3xl"},"Appearance",-1),ve=t("hr",{class:"mt-2 mb-4"},null,-1),ke={class:"mb-4"},we={class:"button button-size-medium button-color-gray"},$e=t("span",{class:"ml-3"},"Auto",-1),Te={class:"button button-size-medium button-color-gray ml-2"},Se=t("span",{class:"ml-3"},"Dark",-1),Ie={class:"button button-size-medium button-color-gray ml-2"},Ce=t("span",{class:"ml-3"},"Light",-1),Ke={class:"button button-size-medium button-color-gray ml-2"},Re=t("span",{class:"ml-3"},"Halloween",-1);function De(o,e,c,d,u,s){const i=p("Extendable");return _(),b("section",null,[Ee,ve,r(i,{scope:"app.settings.theme"},{default:g(()=>[t("div",ke,[t("div",null,[t("label",we,[l(t("input",{"onUpdate:modelValue":e[0]||(e[0]=a=>s.theme=a),type:"radio",value:"auto",class:"radio"},null,512),[[y,s.theme]]),$e]),t("label",Te,[l(t("input",{"onUpdate:modelValue":e[1]||(e[1]=a=>s.theme=a),type:"radio",value:"dark",class:"radio"},null,512),[[y,s.theme]]),Se]),t("label",Ie,[l(t("input",{"onUpdate:modelValue":e[2]||(e[2]=a=>s.theme=a),type:"radio",value:"light",class:"radio"},null,512),[[y,s.theme]]),Ce]),t("label",Ke,[l(t("input",{"onUpdate:modelValue":e[3]||(e[3]=a=>s.theme=a),type:"radio",value:"october",class:"radio"},null,512),[[y,s.theme]]),Re])])])]),_:1})])}var ze=x(fe,[["render",De]]);const Me={class:"container flex flex-col mx-auto p-4 md:px-16 md:py-8"},Ve=t("h2",{class:"text-4xl"},"App Settings",-1),Ae=t("p",{class:"mt-1 mb-8 text-gray-500"},"Make yourself comfortable",-1),Ue=f({__name:"settings",setup(o){return(e,c)=>{const d=p("Extendable");return _(),b("div",Me,[t("div",null,[Ve,Ae,r(X,{class:"mb-8"}),r(d,{scope:"app.settings"},{default:g(()=>[r(ze,{class:"mb-8"}),r(Nt,{class:"mb-8"}),r(ne,{class:"mb-8"}),r(xe,{class:"mb-8"}),r(me,{class:"mb-8"})]),_:1})])])}}});export{Ue as default};
