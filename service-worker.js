if(!self.define){let e,s={};const a=(a,c)=>(a=new URL(a+".js",c).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,d)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let f={};const b=e=>a(e,i),r={module:{uri:i},exports:f,require:b};s[i]=Promise.all(c.map((e=>r[e]||b(e)))).then((e=>(d(...e),f)))}}define(["./workbox-e709151d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/_...tag_-a7b0b3ee.js",revision:"13364ce4936b2f5cba9344c6643346de"},{url:"assets/_commonjs-dynamic-modules-58f2b0ec.js",revision:"116ce511956180a0f88be39f0182bef8"},{url:"assets/_commonjsHelpers-dd024a83.js",revision:"3f728d1c093654269a2602d2ba19428f"},{url:"assets/_doc_-f01e0519.js",revision:"45cd94bfd16a3f95a65d9ffc8c3dd6d1"},{url:"assets/_file_-0333c31f.js",revision:"91b5583c88fa2dc81e7d9a891ada660c"},{url:"assets/_filter_-b9926738.js",revision:"33d911b293170875071e65465ac22db4"},{url:"assets/_plugin-vue_export-helper-cc2b3d55.js",revision:"615a8e7d0efe33390a4c5d5ac43697f5"},{url:"assets/_routes-f08255af.js",revision:"5d5d30fd27a04a47d493d27c3a9b2c01"},{url:"assets/account-054135aa.js",revision:"ed64e644d04bf5e10693b46e57f86e2f"},{url:"assets/account-d76573e6.js",revision:"67dd72e81660c6aea979f9e1a74714f2"},{url:"assets/actions-a6a34f3c.js",revision:"e15ef903bd1c8d358d9d23649f09daa9"},{url:"assets/apl-3cb328ac.js",revision:"fe90866751d4f971b214e0188adef717"},{url:"assets/asciiarmor-407be8bc.js",revision:"d27875e32cbcc08666eac3dd840092c6"},{url:"assets/asn1-7bdd5c77.js",revision:"3f1a2e7123ee3c95d68d42d80f37da82"},{url:"assets/asterisk-f4ca4fb7.js",revision:"7a4857d408f19f2b8e277485a42a88e1"},{url:"assets/AuthTiers-9903d4f9.js",revision:"0f80897bf5ff66f926f5c8bf1f18c5b7"},{url:"assets/autocomplete.a9b833c4-dd7830ef.js",revision:"9ef0f2e31c1c009a96a4cfd06e1dd1b7"},{url:"assets/brainfuck-10a7e5b6.js",revision:"17ff5fd6efbf8199007f718775695036"},{url:"assets/ChangeLog-07735e61.js",revision:"0aaa502f1c50a968da05221225055644"},{url:"assets/client-2de13258.js",revision:"169f1de64679b8274bb18e90f08efce9"},{url:"assets/clike-dafd557d.js",revision:"814262972bfb5e90b73e6b5b5456f0e7"},{url:"assets/clojure-81322c54.js",revision:"14f911dc071e60599e0b759fb93f9b3e"},{url:"assets/cmake-9e205782.js",revision:"aa3b77fecbd0aea67f231d4e6aec19cc"},{url:"assets/cobol-36f97c08.js",revision:"876a0fe24ad9737a4e964bc871b3b876"},{url:"assets/coffeescript-22e0856e.js",revision:"0485face6e2a9fd7f34052956c98cca0"},{url:"assets/commonlisp-f1c60345.js",revision:"f8d279066c72f8a40e2c78c95ee20e51"},{url:"assets/contexts-e80363e8.js",revision:"bcca709c4eb881468524155d379f4c4f"},{url:"assets/CoreButton-345de535.js",revision:"91835524e23464a81fbb6033273a15c2"},{url:"assets/CoreDivider-38ff7a5c.js",revision:"ed0efc4fa62b3ec51f6e47ca06fd3c96"},{url:"assets/CoreScrollable-aeda2e1b.js",revision:"27ef9fba75704b7328359545b885b2f9"},{url:"assets/crystal-ae022883.js",revision:"342361ed1102b7aee36594c90f274bdc"},{url:"assets/css-fdb129cf.js",revision:"d9e48d8ad870b732d06487bcd6d8f457"},{url:"assets/cypher-0f5a99e3.js",revision:"18b4838c6684351dc23f1ac5893fbeb0"},{url:"assets/d-f340bd50.js",revision:"88245a41320eee75f376644f35537825"},{url:"assets/darken-fdc59d89.js",revision:"f9359a02db8a2b967b80d1e44b6cc067"},{url:"assets/dashboard-9da5e2a8.css",revision:"8f88f342dd7c3edb345f9264f5f70db3"},{url:"assets/dashboard-b22f874e.js",revision:"f3cfe573da5f6986e5f472df88e38bb5"},{url:"assets/debouncer-2293cf40.js",revision:"35ad7ccd497fd0e2a91bc346623065a4"},{url:"assets/diagram-definition.e1071f13-9c6cc299.js",revision:"2cdb92c0cb88c8c7efd1e1ab56a4f494"},{url:"assets/diff-0dc5c268.js",revision:"c1fe4e26b8eb042a9c0f0745bfeeee72"},{url:"assets/doc-aa27f392.js",revision:"61d296c5bbad961fb0b2f02692b77d76"},{url:"assets/dockerfile-47b5a2d9.js",revision:"f696656b9c1dff40eeb382a58bc45eea"},{url:"assets/DocList-8475a39d.js",revision:"f96cb596da518bade49cbe78b1df3911"},{url:"assets/docs-98689482.js",revision:"1e28dfadb52e7dc02fbb1d961075d4a1"},{url:"assets/dtd-3382af3d.js",revision:"94240871990768a65ce1b5086de8df27"},{url:"assets/dylan-86c0f8f8.js",revision:"d3fce22cf6dd1fa645b308d20605bcae"},{url:"assets/ebnf-e0be449c.js",revision:"eabd7b25d5ff725526263ecfbf5a46c8"},{url:"assets/ecl-bbb57072.js",revision:"1c6fa7e0fc636348aed1b1d4241bbd4f"},{url:"assets/Editor-26a7a932.js",revision:"5a8f824464113f7785d93d1a2605f1b6"},{url:"assets/Editor-d169a25b.css",revision:"25b76c822f1b4b243bdef602ae8bd3c8"},{url:"assets/eiffel-8031bbeb.js",revision:"8040acc3695ab89da078ff05123fbf18"},{url:"assets/elm-40e1816d.js",revision:"098e00dfd93a06b91c0b600182cd36ab"},{url:"assets/erlang-010a04d2.js",revision:"2755c546d33bf0d98753e344679e04d2"},{url:"assets/example-631af82e.js",revision:"ff93ad86e300988bbe1217ec9b0051af"},{url:"assets/export-1db45560.js",revision:"92fc7bed2fe5039fb57e266ba4ec21b7"},{url:"assets/Extendable-4e957354.js",revision:"13bbf03daa9452660c97a5b4e4d6ccd1"},{url:"assets/factor-3c94cc40.js",revision:"cefab9a3fe1da1abda8e191ad1a4b92c"},{url:"assets/fcl-6025aacf.js",revision:"674ee91ed27fbb67a8ce630ebaef5fe0"},{url:"assets/firestore-20470781.js",revision:"a1cfbed58faeef98973b8657400386a1"},{url:"assets/force-graph-cf784e25.js",revision:"8ef846ba03a9217798ec175523390d05"},{url:"assets/force-graph-fe9bf3f4.css",revision:"d915a142aff138570a1c73c69c4426a9"},{url:"assets/forth-22ed4d55.js",revision:"f86ae865cb2e2501c0f035e0ed282c71"},{url:"assets/fortran-8283d393.js",revision:"247825b405cdcfa890063a5ea177eb7a"},{url:"assets/gas-c06ef0b5.js",revision:"d91887e5ad91605a6c884e80f61bfbd1"},{url:"assets/gherkin-57b7bbda.js",revision:"13c9f559fcbf27db3e8acbe9cf822a3d"},{url:"assets/global-6817a2cb.js",revision:"2d4f23bd2c538fa5555bf0af1d1c8f1d"},{url:"assets/go-3ff3000c.js",revision:"819bed8e573dcd8b5cd175f3ae2623d3"},{url:"assets/groovy-1ffcee50.js",revision:"fc77ddf690091fa4fd75863b7b9cc42d"},{url:"assets/haskell-34ab4a17.js",revision:"7fe6abd0b98d6fc47cd193fdc3a59e92"},{url:"assets/haxe-f941adf4.js",revision:"a55fba7363798571ad00260b56ced173"},{url:"assets/home-4593beda.js",revision:"0a17a49882396531b86d67f4e08fa51b"},{url:"assets/home-7104337a.css",revision:"e1d0353dd6a29d9e4c7c52c159052d04"},{url:"assets/http-d824cce3.js",revision:"008de1e62e846a786413c96e5c90f42c"},{url:"assets/idl-cad6bb72.js",revision:"9456445758a36142639d2da0ff0755f1"},{url:"assets/images.0bde9a43-743b7270.js",revision:"4c78174822328fd82226fce47b5e666c"},{url:"assets/import-1b61b9dc.js",revision:"c62baa576922c7eb9c9d8902dbd859c1"},{url:"assets/index-02f56940.js",revision:"a2b97d50feded358177be9217a65e96c"},{url:"assets/index-08d7a392.js",revision:"ba286c2a8bd04576ced8e647d2439878"},{url:"assets/index-0ad9c5ab.js",revision:"c89d2f9ea2711e8c19244ce4c9157ef0"},{url:"assets/index-1047b5f6.js",revision:"0c87d9bd1c623c143708372ea232ec76"},{url:"assets/index-2b3125df.js",revision:"d75762840eb7da4f43f126930ae94b6b"},{url:"assets/index-5dd22dba.js",revision:"51df4a5d10e2ccc28708eb10cbf0e980"},{url:"assets/index-661fa6c3.css",revision:"15ea23f7e1380e487f7910e6ca7659f0"},{url:"assets/index-6f86136e.js",revision:"f9ed456779800d0ade8c3473b173fb9e"},{url:"assets/index-73136136.js",revision:"6b2fda9806ed89f463e710e2ac7b7222"},{url:"assets/index-7d350bb1.js",revision:"2c58e6477c3a6ce739e79cf5e3b1ab75"},{url:"assets/index-8fa9bed1.js",revision:"e0f632448110b072d86284f2e61637c2"},{url:"assets/index-90ebcfae-3aa38dd7.js",revision:"1fae21bb51aab9ff945c6a9a950602ad"},{url:"assets/index-92728829.js",revision:"faa9653d5939a8eddd18faeaed5112c7"},{url:"assets/index-9d34c1ff.js",revision:"d1d8bf560afdca99655c8ce99cb590f9"},{url:"assets/index-9e94dbc0.js",revision:"235f6e54cee20c85f7a35e4df684cddb"},{url:"assets/index-a4bbc573.js",revision:"5a2f5d9d2a0ca53428ce213ed9aed6c0"},{url:"assets/index-b680242d.js",revision:"3542e48e91e1819d0f575f47c1c42eda"},{url:"assets/index-c244ca17.js",revision:"0a041534c72d68a006c9aec00f044495"},{url:"assets/index-e0cb18f7.js",revision:"1ea26ec2c2f8da7d1ea2a3a5d1e5e30a"},{url:"assets/index-e3892453.js",revision:"4403087478a3fe0ea4fe5b95c979b1fd"},{url:"assets/index-ecc5f801.js",revision:"f4a871e85cd675df90508bfe2456ea0f"},{url:"assets/index-ed439bce.js",revision:"be509f40cf56d79c65b0a4bae90aaa82"},{url:"assets/index-f4eaee3d.js",revision:"44f2742b8bfc63ba02089a2061fad648"},{url:"assets/index.browser-0a05c6e5.js",revision:"63bdf5099b16b11ec16e41a199e6f50f"},{url:"assets/index.esm2017-1fab45ee.js",revision:"fd32d949961d3356b51a323b1a3c9b52"},{url:"assets/invert-f9d6c8a5.js",revision:"31f4118d5d7d24109ffb7e5d753c7a35"},{url:"assets/javascript-fd18be0e.js",revision:"a243c6fc64f3beff8fcb00b93dda1387"},{url:"assets/jinja2-ae08fe31.js",revision:"f361508cd97d8319c6aef2eea56e2a19"},{url:"assets/julia-5ef111bb.js",revision:"872b11f9f6606c7ac7c61e7ba1662724"},{url:"assets/lists.b465ff74-8447110e.js",revision:"8543fa7d4ddc9717354454e121bc22c0"},{url:"assets/livescript-786915bc.js",revision:"df5143b91f04a0a77bba98c88061f4a7"},{url:"assets/lua-9352e5bf.js",revision:"1e1978f47905a68b31e4d57b69cb7a1c"},{url:"assets/luminance-d8ea28d2.js",revision:"009b75eeb10365e38ef96b8b59509c09"},{url:"assets/mathematica-b5a46e0a.js",revision:"f8fa55e4b56e04465508742a88e0aaa8"},{url:"assets/mbox-b8d1f9dd.js",revision:"14fec185bfb63cbd45989adfd533e974"},{url:"assets/menu-3d5eddb0.js",revision:"859e8b3b641db1d23bae4d48bf6e300a"},{url:"assets/mermaid-mindmap.core-215c9eb9.js",revision:"4fdd44ee8eadceff9f272c5ffe4b7b27"},{url:"assets/mermaid.core-00eaf26b.js",revision:"a4b5484cfa343cc26e8386ca9aabbfbe"},{url:"assets/meta-62f7411b.js",revision:"f53ae34048ee5583ba13be8ef403f35f"},{url:"assets/mirc-ef563ca3.js",revision:"e44c21ad54f51f9dec9e8fa3da408e52"},{url:"assets/mllike-d8783c14.js",revision:"7de6b4c97e87c1c4b5cb279185c45964"},{url:"assets/Modal-6bfb23d9.js",revision:"085d6fd77c0ebb9bf9180055a4dc9c28"},{url:"assets/modelica-07e1cb15.js",revision:"93f7c975a6ad37ffbec56ee8797827a6"},{url:"assets/moment-f63e338d.js",revision:"c3502790546f2e9ea9cc4bd0dd3cfb25"},{url:"assets/mscgen-e572024b.js",revision:"11e05495a0bd4f1966f18b5d9dc50017"},{url:"assets/mumps-1681e5cd.js",revision:"99a90f5e7c8fb2513a640e26d27131b4"},{url:"assets/nginx-0e4f9b7d.js",revision:"1fd532843ff4c8acbaf4c1778596e04d"},{url:"assets/notepad-c0cbb2eb.js",revision:"71db8349d70403e1daec761d7fb1dc2e"},{url:"assets/nsis-8f4ad78e.js",revision:"68e094c8332a6f28b590396fdb956962"},{url:"assets/ntriples-86b864fb.js",revision:"d8c73635303ec5661b06c17a1a4de78e"},{url:"assets/octave-77550907.js",revision:"b2256a100ec737b64140cb26a33ec42a"},{url:"assets/ordinal-af0bbe35.js",revision:"f62897d09fe9171f253d53713a8d0a90"},{url:"assets/overlayscrollbars.esm-084eb65b.js",revision:"188b4e6012eafc145281ab1e38e37cbb"},{url:"assets/oz-48f301ca.js",revision:"7b2387e84b58b7a1e6afedf642c80770"},{url:"assets/page-a51d2c25.js",revision:"75ef99edd48bf3ef364346583d9fb3ac"},{url:"assets/pascal-7a27ac5a.js",revision:"65216b630df6161c2c77463df90fd29a"},{url:"assets/perl-8b1184b7.js",revision:"5a23e8f6148a94a91e9d6a0e7c66146e"},{url:"assets/pig-83241e3c.js",revision:"65039cc1790737e58ffc8e5928839bcf"},{url:"assets/pinia.esm-browser-4714cee3.js",revision:"2b025ad562afb394579a44aca48f5c86"},{url:"assets/powershell-a0a35c11.js",revision:"5d74c7a01744ad2622978605600e32fc"},{url:"assets/preload-helper-5f15640e.js",revision:"fac0baccc1f40d0793274a527e8173ec"},{url:"assets/privacy-policy-a0ec92dc.js",revision:"c3190cb282b34177174ec2d0f9ba19d2"},{url:"assets/properties-18d257b8.js",revision:"5b0fdb69003581790c2213eb5488daaf"},{url:"assets/protobuf-8dbe6fdc.js",revision:"498802556ca445776c7bb2cd3e318290"},{url:"assets/puppet-69a1dac1.js",revision:"8ffc0bb4990e70a8d1504fedac0ed0ca"},{url:"assets/python-487468d2.js",revision:"d06481c301e84bddceaf49247e47ebec"},{url:"assets/q-417ed85f.js",revision:"0b3560dc96bb8db5b05b62099a81d08a"},{url:"assets/quick-action-f0220128.js",revision:"631b489ad5670e9c172a45c1317d0e03"},{url:"assets/quotes-514a97f3.js",revision:"f9ca0d3c65e76d5e48656781e5a1f7e8"},{url:"assets/r-663284fc.js",revision:"54e44943b6e79e78e07104e15796debc"},{url:"assets/readonly.90b28a57-51c231b9.js",revision:"7a0eb05c9510c58488f288925f49553e"},{url:"assets/router-874b08b6.js",revision:"29597b2ae367cb7e6e821d9193c87cdc"},{url:"assets/rpm-92bc972e.js",revision:"7faeadb58e048012cb95dcf4cb874b9a"},{url:"assets/ruby-748d56f4.js",revision:"d0de904a6c688c71ea9daaee095b9c6e"},{url:"assets/runtime-core.esm-bundler-9a0ba37c.js",revision:"6b506f41272b7c370b88a251f850c5e4"},{url:"assets/runtime-dom.esm-bundler-32f2d5b0.js",revision:"76afbd983272f6606dd171df8bab4fb6"},{url:"assets/sas-c7a63092.js",revision:"81909a1cc86dbbde09274262033e8b0a"},{url:"assets/sass-2879fc1a.js",revision:"db28b55c8c2105a245254ae587bfcd8c"},{url:"assets/scheme-18c68b24.js",revision:"7db4d956d9f6f5088b726b49f2959e63"},{url:"assets/settings-d968b5f4.js",revision:"f707f457d9d0b1c882a5504c7dcc4e7e"},{url:"assets/settings-f2786260.js",revision:"05141328b5048eac9c3ac0540b552f16"},{url:"assets/shell-8d038f9e.js",revision:"2c825b5eb205ca0bc4692f162be2b3b6"},{url:"assets/sieve-7eccb0a0.js",revision:"3e382ffe143e8dc13e865d87f252e845"},{url:"assets/simple-mode-d85693a0.js",revision:"2940b360c4de1b454d4c8b991b237d6d"},{url:"assets/smalltalk-de2f31cf.js",revision:"e99729461b9854a6a1dff70c76be499a"},{url:"assets/solr-9a12943b.js",revision:"d78e215726f4dc76e2cd00d33d5866fe"},{url:"assets/sparql-167707c4.js",revision:"4bb3caad9799d7ea8469325cd97e3cbd"},{url:"assets/spellcheck.7e0765c7-79e53350.js",revision:"9aec51f79f9f941306b2607f12cf1689"},{url:"assets/spreadsheet-175e1574.js",revision:"6de82c9a8e06dcfa208cfbc37797d844"},{url:"assets/sql-2a617f8f.js",revision:"94c80cddf6116a304290a47b0deb4a40"},{url:"assets/stex-4d582884.js",revision:"28ae752a2fb661ccc06430e06dabe92f"},{url:"assets/stylus-338b2057.js",revision:"ad35ee4e0a0a055c5be9e29007c7beea"},{url:"assets/swift-63c945b3.js",revision:"8e944f7e15ed3912a69ff6a6caa87e8d"},{url:"assets/Tag.vue_vue_type_script_setup_true_lang-7d59ccc4.js",revision:"1d469b9cc22d04cf016bcbc74a4cdc05"},{url:"assets/TagLink-223948b7.js",revision:"310943753a4b514d7c455ccee8c70eff"},{url:"assets/tags-868e1eb1.js",revision:"3f20283820ef75123d5ce79943c862e5"},{url:"assets/tags-fd4d4d28.css",revision:"5132f2eb0983509a92018975994c6766"},{url:"assets/tcl-7233b909.js",revision:"5130c952b189266dd3f085a26b044743"},{url:"assets/terms-and-conditions-6bdcfb82.js",revision:"46d4efd26a78bd159bad75072f21cf41"},{url:"assets/textile-03e05df0.js",revision:"8aaa3e2f238702ae5b2668655474a37d"},{url:"assets/TheLogo-05e604ed.js",revision:"107e90581758fb77f05c74c2ed8148c2"},{url:"assets/tiddlywiki-d2edbbfa.js",revision:"8887150267ba2999bc2ee33fb039eff9"},{url:"assets/tiki-45ef1338.js",revision:"c0cb13c3695efc72845152610be95d59"},{url:"assets/title-37a9cdab.js",revision:"895dc24824f5c613815c733a2d36de68"},{url:"assets/toml-5960b4ad.js",revision:"f0e9061603e192761d53ab3c6275b11f"},{url:"assets/transform-92e5ec77.js",revision:"27e17029ee7bc87d4b0196fd3ab97394"},{url:"assets/TrashIcon-db8293e5.js",revision:"c8c453d80203a0a70b2bb98c558331fb"},{url:"assets/troff-4ecb8a58.js",revision:"18a0e47d6d12c851b72f9256e238debe"},{url:"assets/ttcn-c131d7bb.js",revision:"2e9c5ae30269bbc4d3530548035f226e"},{url:"assets/ttcn-cfg-c089e651.js",revision:"8cc4c1f9432411acc07faf76bffb1ffc"},{url:"assets/turtle-580ebf3e.js",revision:"22946311052baedcc0953f8cdc23508c"},{url:"assets/useFiles-9179dff0.js",revision:"9fbfad95abf257440b2eb1231dd5b766"},{url:"assets/useRecentDocs-5169304a.js",revision:"0bbe1fdccb8e0250b10dd6ff4abab880"},{url:"assets/useRouteQuery-ec2ea82c.js",revision:"c51d8e010657870cff4906cba0fbdac4"},{url:"assets/vb-94b66268.js",revision:"a3559e1f42b280b4b3115f476856187b"},{url:"assets/vbscript-5658ca0e.js",revision:"1adec5f7270e75ec1aecd366cbf3b5be"},{url:"assets/velocity-0265a9c5.js",revision:"ecfae34b3b46c027a25bc1d01337f886"},{url:"assets/verilog-fa511a84.js",revision:"f77aba4e09acc6ebcdcaad41199b74f0"},{url:"assets/vhdl-9a2c950e.js",revision:"dc183089ffb49404665c865c24af2a9c"},{url:"assets/vim.e0ec79d3-79394410.js",revision:"b9b72d0da0247f5deda0f52ac8de9d93"},{url:"assets/vue-router-944476c0.js",revision:"7f7fd2090c8586f31a022e4c9c45122d"},{url:"assets/vue3-mq.es-5da68cb5.js",revision:"e80db37f82609c435ffc8c08c93ef4de"},{url:"assets/vuex.esm-bundler-4cb42885.js",revision:"df057fd36de6f5a4b0acedb616074ba3"},{url:"assets/webidl-9c9c3564.js",revision:"27679830660ed23b83c486cab502d4b6"},{url:"assets/workbox-window.prod.es5-6a9d82f3.js",revision:"9e400dc68f70707eaff981a8f6561bcf"},{url:"assets/workspaces-118b605f.css",revision:"58019b54c0fa305cfcd99954e93aac56"},{url:"assets/workspaces-84e951d5.js",revision:"1d23c7ae5fb82b6d7a51537ca531e553"},{url:"assets/xquery-67a251f9.js",revision:"826e2efacd372958f6d7f347e220372b"},{url:"assets/yacas-0b33cef8.js",revision:"f112c52aaee3ee8e06c9056a33284448"},{url:"assets/yaml-55f98ce7.js",revision:"1445e59b08a1c812bc3bf56dbc8ad5b3"},{url:"assets/z80-98a52984.js",revision:"36d68e745d962b76b6311f223340790c"},{url:"index.html",revision:"c445dda05ea2cba549e4da2c2f792dba"},{url:"https://fonts.googleapis.com/css2?family=Fira+Code&family=Inter:wght@300;400;700&display=swap",revision:"v1"},{url:"img/icons/favicon.ico",revision:"91a8322df02546c9441a2fee0c3b5d63"},{url:"./img/icons/icon-16x16.png",revision:"0b813ea1d116f7c6c62f6a7115336a3f"},{url:"./img/icons/icon-32x32.png",revision:"057a28b02eb69ca4874177fc9c4606d0"},{url:"./img/icons/icon-60x60.png",revision:"45b9704f6261eca6ad8b97ec6e2be210"},{url:"./img/icons/icon-76x76.png",revision:"95d5df0e2c05ec867ca66ff16f661066"},{url:"./img/icons/icon-120x120.png",revision:"f4bc01c12ba3cfebf4de5682b16744d5"},{url:"./img/icons/icon-144x144.png",revision:"32cbe178ebefc5c16d21c24ff4a23954"},{url:"./img/icons/icon-150x150.png",revision:"f028bf542ec30d62f54d2a9f8b249b76"},{url:"./img/icons/icon-152x152.png",revision:"a704e0c2af80c3a98dccf2bf95336b26"},{url:"./img/icons/icon-180x180.png",revision:"d646cbacd31132bfbdd4050395d6c1ed"},{url:"./img/icons/icon-192x192.png",revision:"e5f964fe82d0d2f9104f25d4d20d553a"},{url:"./img/icons/icon-512x512.png",revision:"719f72baab4b5e4b83b41e1f2d95dd0c"},{url:"./img/icons/icon-maskable-192x192.png",revision:"d728dda0437faf95dd905150f60257c9"},{url:"./img/icons/icon-maskable-512x512.png",revision:"44f4dfad6a728b8b4d9505ca06d38da8"},{url:"manifest.webmanifest",revision:"1a45b44a2bf8ddeaaa5d96af7424e044"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/index.html"),{denylist:[/\/manifest.json$/]})),e.registerRoute(/^https:\/\/cdnjs.cloudflare.com\/.*/,new e.StaleWhileRevalidate({cacheName:"cloudflare-cache",plugins:[]}),"GET"),e.registerRoute(/^https:\/\/fonts.gstatic.com\/s\/.*/,new e.StaleWhileRevalidate({cacheName:"font-cache",plugins:[]}),"GET")}));
//# sourceMappingURL=sw.js.map
