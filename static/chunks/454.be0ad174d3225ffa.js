"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[454],{11454:function(t,r,e){e.r(r),e.d(r,{NFTDrop:function(){return c}});var a=e(94871),n=e(3214),i=e(55451),s=e(2593),o=e(9279);e(13550),e(25025),e(70332),e(8455),e(59189),e(71770),e(54098),e(62555),e(23565),e(26219),e(68834),e(61303),e(71497),e(49242),e(70565),e(13670),e(79120),e(42328),e(97604),e(8187),e(19362),e(54730),e(36250),e(85725),e(38730),e(48507),e(38398),e(2090),e(52876),e(86841),e(49561),e(80580),e(54253),e(91559),e(40553),e(26),e(69392),e(62822),e(82037),e(2162),e(64063),e(34161),e(50266),e(98839),e(51375),e(43320),e(65815),e(40721),e(29526),e(24601),e(46878),e(20583),e(92355),e(84194),e(51121),e(32484),e(78435);class c extends i.aH{constructor(t,r,e){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},s=arguments.length>4?arguments[4]:void 0,o=arguments.length>5?arguments[5]:void 0;super(arguments.length>6&&void 0!==arguments[6]?arguments[6]:new i.cB(t,r,s,n),e,o),(0,a._)(this,"abi",void 0),(0,a._)(this,"encoder",void 0),(0,a._)(this,"estimator",void 0),(0,a._)(this,"metadata",void 0),(0,a._)(this,"sales",void 0),(0,a._)(this,"platformFees",void 0),(0,a._)(this,"events",void 0),(0,a._)(this,"roles",void 0),(0,a._)(this,"interceptor",void 0),(0,a._)(this,"royalties",void 0),(0,a._)(this,"claimConditions",void 0),(0,a._)(this,"revealer",void 0),(0,a._)(this,"checkout",void 0),(0,a._)(this,"erc721",void 0),(0,a._)(this,"owner",void 0),this.abi=s,this.metadata=new i.aj(this.contractWrapper,i.cM,this.storage),this.roles=new i.ak(this.contractWrapper,c.contractRoles),this.royalties=new i.al(this.contractWrapper,this.metadata),this.sales=new i.am(this.contractWrapper),this.claimConditions=new i.ao(this.contractWrapper,this.metadata,this.storage),this.encoder=new i.ai(this.contractWrapper),this.estimator=new i.aT(this.contractWrapper),this.events=new i.aU(this.contractWrapper),this.platformFees=new i.aW(this.contractWrapper),this.erc721=new i.ay(this.contractWrapper,this.storage,o),this.revealer=new i.an(this.contractWrapper,this.storage,i.cN.name,(()=>this.erc721.nextTokenIdToMint())),this.interceptor=new i.aV(this.contractWrapper),this.owner=new i.aY(this.contractWrapper),this.checkout=new i.cA(this.contractWrapper)}onNetworkUpdated(t){this.contractWrapper.updateSignerOrProvider(t)}getAddress(){return this.contractWrapper.readContract.address}async totalSupply(){const t=await this.totalClaimedSupply(),r=await this.totalUnclaimedSupply();return t.add(r)}async getAllClaimed(t){const r=s.O$.from(t?.start||0).toNumber(),e=s.O$.from(t?.count||n.D).toNumber(),a=Math.min((await this.contractWrapper.readContract.nextTokenIdToClaim()).toNumber(),r+e);return await Promise.all(Array.from(Array(a).keys()).map((t=>this.get(t.toString()))))}async getAllUnclaimed(t){const r=s.O$.from(t?.start||0).toNumber(),e=s.O$.from(t?.count||n.D).toNumber(),a=s.O$.from(Math.max((await this.contractWrapper.readContract.nextTokenIdToClaim()).toNumber(),r)),i=s.O$.from(Math.min((await this.contractWrapper.readContract.nextTokenIdToMint()).toNumber(),a.toNumber()+e));return await Promise.all(Array.from(Array(i.sub(a).toNumber()).keys()).map((t=>this.erc721.getTokenMetadata(a.add(t).toString()))))}async totalClaimedSupply(){return this.erc721.totalClaimedSupply()}async totalUnclaimedSupply(){return this.erc721.totalUnclaimedSupply()}async isTransferRestricted(){return!(await this.contractWrapper.readContract.hasRole((0,i.bx)("transfer"),o.d))}async createBatch(t,r){return this.erc721.lazyMint(t,r)}async getClaimTransaction(t,r){let e=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return this.erc721.getClaimTransaction(t,r,{checkERC20Allowance:e})}async claimTo(t,r){let e=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return this.erc721.claimTo(t,r,{checkERC20Allowance:e})}async claim(t){let r=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return this.claimTo(await this.contractWrapper.getSignerAddress(),t,r)}async burn(t){return this.erc721.burn(t)}async get(t){return this.erc721.get(t)}async ownerOf(t){return this.erc721.ownerOf(t)}async balanceOf(t){return this.erc721.balanceOf(t)}async balance(){return this.erc721.balance()}async isApproved(t,r){return this.erc721.isApproved(t,r)}async transfer(t,r){return this.erc721.transfer(t,r)}async setApprovalForAll(t,r){return this.erc721.setApprovalForAll(t,r)}async setApprovalForToken(t,r){return{receipt:await this.contractWrapper.sendTransaction("approve",[t,r])}}async call(t){for(var r=arguments.length,e=new Array(r>1?r-1:0),a=1;a<r;a++)e[a-1]=arguments[a];return this.contractWrapper.call(t,...e)}}(0,a._)(c,"contractRoles",["admin","minter","transfer"])}}]);