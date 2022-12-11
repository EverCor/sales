"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 2352:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@thirdweb-dev/react"
var react_ = __webpack_require__(7607);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
;// CONCATENATED MODULE: ./components/ThirdwebGuideFooter.tsx


function ThirdwebGuideFooter() {
    const url = "https://staking.crazyjokersweepfestival.com/candybotzmint";
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                style: {
                    position: "fixed",
                    bottom: -80,
                    right: -100,
                    height: 400,
                    width: 150,
                    border: "1px solid #eaeaea",
                    transform: "rotate(45deg)",
                    backgroundColor: " #262935",
                    cursor: "pointer"
                },
                role: "button",
                onClick: ()=>window.open(url, "_blank")
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                style: {
                    position: "fixed",
                    bottom: 6,
                    right: 18
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    src: "/cjsf.png",
                    alt: "github url",
                    width: 80,
                    height: 80,
                    role: "button",
                    style: {
                        cursor: "pointer"
                    },
                    onClick: ()=>window.open(url, "_blank")
                })
            })
        ]
    });
}

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./styles/Home.module.css
var Home_module = __webpack_require__(1288);
var Home_module_default = /*#__PURE__*/__webpack_require__.n(Home_module);
;// CONCATENATED MODULE: ./components/Header.tsx





function Header() {
    // Helpful thirdweb hooks to connect and manage the wallet from metamask.
    const address = (0,react_.useAddress)();
    const connectWithMetamask = (0,react_.useMetamask)();
    const disconnectWallet = (0,react_.useDisconnect)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Home_module_default()).header,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (Home_module_default()).left,
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/",
                        passHref: true,
                        role: "button",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            src: `/logo.png`,
                            alt: "CJSF Logo",
                            width: 135,
                            style: {
                                cursor: "pointer"
                            }
                        })
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (Home_module_default()).right,
                children: address ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            className: (Home_module_default()).secondaryButton,
                            onClick: ()=>disconnectWallet(),
                            children: "Disconnect Wallet"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            style: {
                                marginLeft: 8,
                                marginRight: 8,
                                color: "grey"
                            },
                            children: "|"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: address.slice(0, 6).concat("...").concat(address.slice(-4))
                        })
                    ]
                }) : /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    className: (Home_module_default()).mainButton,
                    onClick: ()=>connectWithMetamask(),
                    children: "Connect Wallet"
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./pages/_app.tsx







// This is the chainId your dApp will work on.
const activeChainId = react_.ChainId.BinanceSmartChainMainnet;
function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.ThirdwebProvider, {
        desiredChainId: activeChainId,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "thirdweb Marketplace with Next.JS"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1.0"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "Learn How To Use Thirdweb's Marketplace with Next.JS To List Your NFTs For Sale, Accept Bids, and Buy NFTs"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "keywords",
                        content: "Thirdweb, Marketplace, NFT Marketplace Tutorial, NFT Auction Tutorial, How To Make OpenSea"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Header, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(ThirdwebGuideFooter, {})
        ]
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 7607:
/***/ ((module) => {

module.exports = require("@thirdweb-dev/react");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,664,288], () => (__webpack_exec__(2352)));
module.exports = __webpack_exports__;

})();