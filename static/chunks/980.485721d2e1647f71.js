"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[980],{88980:function(t,e,r){r.r(e),r.d(e,{EditionDrop:function(){return n}});var a=r(94871),i=r(55451),s=r(9279);r(13550),r(25025),r(70332),r(8455),r(59189),r(71770),r(54098),r(62555),r(23565),r(26219),r(68834),r(61303),r(71497),r(49242),r(70565),r(13670),r(79120),r(42328),r(97604),r(8187),r(19362),r(54730),r(36250),r(85725),r(38730),r(48507),r(38398),r(2090),r(52876),r(86841),r(49561),r(80580),r(54253),r(91559),r(40553),r(26),r(69392),r(62822),r(82037),r(2162),r(64063),r(34161),r(50266),r(98839),r(51375),r(43320),r(65815),r(40721),r(29526),r(24601),r(46878),r(20583),r(92355),r(84194),r(51121),r(32484),r(78435);class n extends i.aP{constructor(t,e,r){let s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},c=arguments.length>4?arguments[4]:void 0,o=arguments.length>5?arguments[5]:void 0;super(arguments.length>6&&void 0!==arguments[6]?arguments[6]:new i.cB(t,e,c,s),r,o),(0,a._)(this,"abi",void 0),(0,a._)(this,"sales",void 0),(0,a._)(this,"platformFees",void 0),(0,a._)(this,"encoder",void 0),(0,a._)(this,"estimator",void 0),(0,a._)(this,"events",void 0),(0,a._)(this,"metadata",void 0),(0,a._)(this,"roles",void 0),(0,a._)(this,"royalties",void 0),(0,a._)(this,"claimConditions",void 0),(0,a._)(this,"checkout",void 0),(0,a._)(this,"history",void 0),(0,a._)(this,"interceptor",void 0),(0,a._)(this,"erc1155",void 0),(0,a._)(this,"owner",void 0),this.abi=c,this.metadata=new i.aj(this.contractWrapper,i.cC,this.storage),this.roles=new i.ak(this.contractWrapper,n.contractRoles),this.royalties=new i.al(this.contractWrapper,this.metadata),this.sales=new i.am(this.contractWrapper),this.claimConditions=new i.ap(this.contractWrapper,this.metadata,this.storage),this.events=new i.aU(this.contractWrapper),this.history=new i.aq(this.events),this.encoder=new i.ai(this.contractWrapper),this.estimator=new i.aT(this.contractWrapper),this.platformFees=new i.aW(this.contractWrapper),this.interceptor=new i.aV(this.contractWrapper),this.erc1155=new i.aI(this.contractWrapper,this.storage,o),this.checkout=new i.cA(this.contractWrapper),this.owner=new i.aY(this.contractWrapper)}onNetworkUpdated(t){this.contractWrapper.updateSignerOrProvider(t)}getAddress(){return this.contractWrapper.readContract.address}async getAll(t){return this.erc1155.getAll(t)}async getOwned(t){return this.erc1155.getOwned(t)}async getTotalCount(){return this.erc1155.totalCount()}async isTransferRestricted(){return!(await this.contractWrapper.readContract.hasRole((0,i.bx)("transfer"),s.d))}async createBatch(t,e){return this.erc1155.lazyMint(t,e)}async getClaimTransaction(t,e,r){let a=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];return this.erc1155.getClaimTransaction(t,e,r,{checkERC20Allowance:a})}async claimTo(t,e,r){let a=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];return this.erc1155.claimTo(t,e,r,{checkERC20Allowance:a})}async claim(t,e){let r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];const a=await this.contractWrapper.getSignerAddress();return this.claimTo(a,t,e,r)}async burnTokens(t,e){return this.erc1155.burn(t,e)}async call(t){for(var e=arguments.length,r=new Array(e>1?e-1:0),a=1;a<e;a++)r[a-1]=arguments[a];return this.contractWrapper.call(t,...r)}}(0,a._)(n,"contractRoles",["admin","minter","transfer"])}}]);