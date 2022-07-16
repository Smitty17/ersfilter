"use strict";
exports.id = 357;
exports.ids = [357];
exports.modules = {

/***/ 6357:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: ./src/components/DevGrid.js


/*
 * Grid overlay for use during development.
 * Press `control + option g` to toggle.
 */ function DevGrid() {
    let { 0: showMe , 1: setShowMe  } = (0,external_react_.useState)(false);
    const toggle = (0,external_react_.useCallback)((evt)=>{
        if (evt.code === "KeyG" && evt.altKey && evt.ctrlKey) {
            showMe = !showMe;
            setShowMe(showMe);
        }
    }, []);
    (0,external_react_.useEffect)(()=>{
        document.addEventListener("keyup", toggle, false);
        return function cleanup() {
            document.removeEventListener("keyup", toggle);
        };
    }, [
        showMe
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "not-hidden absolute top-0 left-0 w-full h-full",
            style: {
                opacity: 0.25,
                color: "red",
                zIndex: 999,
                pointerEvents: "none",
                display: showMe ? "block" : "none"
            },
            id: "Grid-overlay",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: " h-full",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                    className: "w-full h-full",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("pattern", {
                            id: "Grid-fine-pattern",
                            width: "80",
                            height: "80",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "1",
                            strokeDasharray: "2 4",
                            patternUnits: "userSpaceOnUse",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("line", {
                                    x1: "0",
                                    x2: "0",
                                    y1: "0",
                                    y2: "80",
                                    strokeDasharray: "0"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("line", {
                                    x1: "16",
                                    x2: "16",
                                    y1: "0",
                                    y2: "80"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("line", {
                                    x1: "32",
                                    x2: "32",
                                    y1: "0",
                                    y2: "80"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("line", {
                                    x1: "48",
                                    x2: "48",
                                    y1: "0",
                                    y2: "80"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("line", {
                                    x1: "64",
                                    x2: "64",
                                    y1: "0",
                                    y2: "80"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("line", {
                                    x1: "80",
                                    x2: "80",
                                    y1: "0",
                                    y2: "80",
                                    strokeDasharray: "0"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("line", {
                                    y1: "0",
                                    y2: "0",
                                    x1: "0",
                                    x2: "80",
                                    strokeDasharray: "0"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("line", {
                                    y1: "16",
                                    y2: "16",
                                    x1: "0",
                                    x2: "80"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("line", {
                                    y1: "32",
                                    y2: "32",
                                    x1: "0",
                                    x2: "80"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("line", {
                                    y1: "48",
                                    y2: "48",
                                    x1: "0",
                                    x2: "80"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("line", {
                                    y1: "64",
                                    y2: "64",
                                    x1: "0",
                                    x2: "80"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("line", {
                                    y1: "80",
                                    y2: "80",
                                    x1: "0",
                                    x2: "80",
                                    strokeDasharray: "0"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("pattern", {
                            id: "Grid-coarse-pattern",
                            width: "320",
                            height: "320",
                            strokeWidth: "2",
                            patternUnits: "userSpaceOnUse",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                                    width: "320",
                                    height: "320",
                                    fill: "url(#Grid-fine-pattern)"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("line", {
                                    x1: "0",
                                    x2: "0",
                                    y1: "0",
                                    y2: "320",
                                    stroke: "currentColor"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("line", {
                                    x1: "320",
                                    x2: "320",
                                    y1: "0",
                                    y2: "320",
                                    stroke: "currentColor"
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                            width: "100%",
                            height: "100%",
                            fill: "url(#Grid-coarse-pattern)"
                        })
                    ]
                })
            })
        })
    });
};

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./src/components/Button.tsx



const NavButton = (props)=>{
    return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
        href: props.path,
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "w-full py-4 cursor-pointer px-gut",
            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: "Label",
                children: props.label
            })
        })
    });
};
/* harmony default export */ const Button = ((0,router_.withRouter)(NavButton));

;// CONCATENATED MODULE: ./src/components/Toggle.tsx


const Toggle = ({ checked , onChange  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
        className: "toggle-control",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                className: "dmcheck",
                type: "checkbox",
                checked: checked,
                onChange: onChange,
                id: "dmcheck"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                htmlFor: "dmcheck"
            })
        ]
    });
};
/* harmony default export */ const components_Toggle = (Toggle);

;// CONCATENATED MODULE: ./src/components/DarkMode.tsx



const DarkModeToggle = ()=>{
    let isDarkMode = false;
    if (false) {}
    let { 0: darkMode , 1: setDarkMode  } = (0,external_react_.useState)(isDarkMode);
    (0,external_react_.useEffect)(()=>{
        let isMounted = true;
        setDarkMode(localStorage.getItem("theme") === "dark");
        return ()=>{
            isMounted = false;
        };
    }, [
        darkMode
    ]);
    const setDMode = (value)=>{
        setDarkMode(value);
        if (false) {}
        value ? document.documentElement.classList.add("dark") : document.documentElement.classList.remove("dark");
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex justify-center sm:justify-start",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                type: "button",
                className: "h-2gut w-2gut focus:outline-none",
                onClick: ()=>setDMode(false),
                children: "\u2600"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(components_Toggle, {
                checked: darkMode,
                onChange: ()=>setDMode(!darkMode)
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                type: "button",
                className: "h-2gut w-2gut focus:outline-none",
                onClick: ()=>setDMode(true),
                children: "\u263E"
            })
        ]
    });
};
/* harmony default export */ const DarkMode = (DarkModeToggle);

;// CONCATENATED MODULE: ./src/components/Navigation.tsx



const Navigation = (props)=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("nav", {
        className: `${props.className} h-full overflow-y-scroll`,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "flex flex-col h-full ",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(NavButton, {
                    path: "/",
                    label: "Home"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(NavButton, {
                    path: "/organizations",
                    label: "Organizations"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(NavButton, {
                    path: "/tenants",
                    label: "Tenants"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(NavButton, {
                    path: "/",
                    label: "Orders"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "flex-grow"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(NavButton, {
                    path: "/sign-in",
                    label: "Sign In"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(NavButton, {
                    path: "/logout",
                    label: "Sign Out"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "p-gut",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(DarkMode, {})
                })
            ]
        })
    });
};
/* harmony default export */ const components_Navigation = (Navigation);

;// CONCATENATED MODULE: ./src/components/UserProfile.tsx


const UserProfile = (props)=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "/profile",
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    children: "Gravity Zero"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "/profile",
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    className: "text-sm"
                })
            })
        ]
    });
};
/* harmony default export */ const components_UserProfile = (UserProfile);

;// CONCATENATED MODULE: ./src/layouts/Split.tsx



const Split = (props)=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: "flex flex-row h-screen",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                id: "sidebar",
                className: "w-12gut bg-white dark:bg-gray-800 border-r-1 border-gray-200 dark:border-gray-600 h-screen flex flex-col fixed",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "w-full h-4gut border-b-1 flex flex-col justify-center border-gray-200 dark:border-gray-900 px-gut mb-gut flex-none",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            id: "account-name",
                            className: "cursor-pointer ",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(components_UserProfile, {
                                ...props
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(components_Navigation, {
                        className: "flex-grow"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
                className: "flex flex-col flex-grow ml-12gut",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("header", {
                        className: "h-4gut border-b-1 border-gray-200 dark:border-black p-gut flex-none"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("section", {
                        className: "flex-grow p-2gut",
                        children: props.children
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
                        children: [
                            "Footer ",
                            process.env.ENVIRONMENT
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const layouts_Split = (Split);

;// CONCATENATED MODULE: ./src/components/Icons.tsx

const LogoERSFilter = (props)=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        id: "logo-ers-filter",
        xmlns: "http://www.w3.org/2000/svg",
        xmlnsXlink: "http://www.w3.org/1999/xlink",
        x: 0,
        y: 0,
        viewBox: "0 0 200 163.3",
        xmlSpace: "preserve",
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("style", {
                children: ".logo-ers-st0{fill:#CCCCCC;} .logo-ers-st1{fill:#CC3300;} .logo-ers-st2{fill:#FF5A00;}  .logo-ers-st3{fill:#A0A0A0;} .logo-ers-st4{fill:#FFFFFF;} .logo-ers-st5{fill:#F7F7F7;} .logo-ers-st6{fill:#FFFEFD;}"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                className: "logo-ers-st0",
                d: "M178.5,99.7h-25.7c0,0-11.4-36.7-52.6-36.7S49.4,99.7,49.4,99.7H21.2c-8.8,0-16,7.2-16,16s7.2,16,16,16h4.2 c1.7,6.6,7.7,11.5,14.8,11.5h6c1.9,6.2,7.7,10.8,14.6,10.8H139c6.8,0,12.7-4.6,14.6-10.8h6c7.1,0,13.1-4.9,14.8-11.5h4.2 c8.8,0,16-7.2,16-16S187.3,99.7,178.5,99.7z"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        className: "logo-ers-st1",
                        d: "M71.9,116.6v5.9h11.4v6.1H71.9v6.3h13.2v6H65.3v-30.3h19.8v6H71.9z"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        className: "logo-ers-st1",
                        d: "M107.1,140.9l-10.5-14.3v14.3H90l0-30.3h10.7c6.1,0,11.2,4.4,11.2,9.8c0,3.9-2.6,7.3-6.1,8.4l9.4,12H107.1z M96.6,124.2l4.2,0c2.2,0,4.2-1.7,4.2-3.8s-2-3.8-4.2-3.8h-4.2V124.2z"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        className: "logo-ers-st1",
                        d: "M116.7,135.7l5.3-3.4c1.5,2.1,3.6,3.1,6.4,3.1c3.1,0,5.2-1.2,5.2-2.8c0-2.2-3.9-4-7.4-5.5 c-3.7-1.7-7.8-3.5-7.8-8.4c0-5.2,4.8-8.7,10.9-8.7c4.5,0,8.2,1.7,9.7,5.4l-4.9,3.1c-1-1.8-2.9-2.5-4.7-2.5c-2.5,0-4.3,1.3-4.3,2.9 c0,1.8,2.5,2.4,6.3,4.1c5.5,2.4,8.9,4.9,8.9,9.6c0,5.5-4.9,9-11.9,9C122.8,141.5,118.9,139.4,116.7,135.7z"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        className: "logo-ers-st2",
                        d: "M70.5,115.1v5.9h11.4v6.1H70.5v6.3h13.2v6H63.9v-30.3h19.8v6H70.5z"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        className: "logo-ers-st2",
                        d: "M105.7,139.4l-10.5-14.3v14.3h-6.6l0-30.3h10.7c6.1,0,11.2,4.4,11.2,9.8c0,3.9-2.6,7.3-6.1,8.4l9.4,12H105.7z M95.2,122.8l4.2,0c2.2,0,4.2-1.7,4.2-3.8s-2-3.8-4.2-3.8h-4.2V122.8z"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        className: "logo-ers-st2",
                        d: "M115.2,134.2l5.3-3.4c1.5,2.1,3.6,3.1,6.4,3.1c3.1,0,5.2-1.2,5.2-2.8c0-2.2-3.9-4-7.4-5.5 c-3.7-1.7-7.8-3.5-7.8-8.4c0-5.2,4.8-8.7,10.9-8.7c4.5,0,8.2,1.7,9.7,5.4l-4.9,3.1c-1-1.8-2.9-2.5-4.7-2.5c-2.5,0-4.3,1.3-4.3,2.9 c0,1.8,2.5,2.4,6.3,4.1c5.5,2.4,8.9,4.9,8.9,9.6c0,5.5-4.9,9-11.9,9C121.4,140,117.4,138,115.2,134.2z"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("polygon", {
                        className: "logo-ers-st3",
                        points: "173.9,131.7 149.4,131 173.2,134 "
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("polygon", {
                        className: "logo-ers-st3",
                        points: "152.3,99.8 134.2,99.7 151.4,97.3 "
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("polygon", {
                        className: "logo-ers-st3",
                        points: "49,99.8 67.1,99.7 49.9,97.2 "
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("polygon", {
                        className: "logo-ers-st3",
                        points: "153.1,143.2 140.8,143.3 152.5,144.9 "
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("polygon", {
                        className: "logo-ers-st3",
                        points: "24.9,131.6 49.4,130.9 25.7,133.9 "
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("polygon", {
                        className: "logo-ers-st3",
                        points: "45.7,143.1 58,143.2 46.3,144.8 "
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        className: "logo-ers-st4",
                        d: "M105.1,70c0,0-1.7-14.9-7-14.9s-19,7.5-20.1,11.8c-1.9,7.3-1.5,9.4-0.6,11c1,1.8,3.9-0.2,3.9-0.2 s-2.1-2.6,0.4-3.7c2.2-1,3,3.2,3,3.2s2.4-4.5,4.6-4.6C93,71.7,105.1,70,105.1,70z"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                className: "logo-ers-st5",
                                d: "M95.6,100.5c-0.2,1.5-1.3,2.1-3.4,1.9c0.6-0.3,1.2-0.6,1.6-0.9c0.4-0.3,0.6-1-0.1-1c-1-0.1-1.6-1.1-2.3-1.3 c-1.4-0.3-2.7-0.9-4.1-1.3c-1.6-0.5-2.7-0.4-1.6,1.9c-1.4-0.3-1.5-1.4-2-2.2c-1.6,0.9-1.5,1.9-0.2,3.1c-1.6-0.3-2.4-1.3-2.6-2.7 c-0.2-1.6,0.8-2.3,2.1-2.9c1.7-0.8,3.2-1.6,4.7,0.4c0.6,0.7,1.6,0.6,2.4,0.2c3.5-1.3,5.6-3,6.4-5.6c-0.2,0.7-0.3,2.1,1.1,1.3 c1-0.3-1,1.9,0.5,1.1c1.5-0.8-0.7,2.1,1.7,1.3c0.5-0.1-0.4,1,0.9,0.8c-2.2,1.5-5.3,0.6-7.4,2.2c-0.3,0.2-1,0.1-0.9,0.8 c0.1,0.6,0.7,0.5,1.1,0.6C95.1,98.1,95.9,98.9,95.6,100.5z"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                d: "M136.6,79.2c5.4-0.1,10.3-0.4,15.1-3.4c-2.5-0.4-4.5,0.3-6.7-0.3c2.3-1.4,4.6-2.4,6.2-4.8c-1.6,0.3-3,0.5-5,0.8 c2.2-2.2,4-3.8,5.1-6.7c-1.8,0.9-3,1.6-4.3,2.2c-0.8,0.3-1.7,1.2-2.3,0.8c-0.8-0.5,0.2-1.5,0.1-2.4c0-0.1-0.2-0.2-0.3-0.4 c-4,2.3-9.5,3.6-14,4.9c0.9-2.4,0.3-4,0.3-4s-4.9,4.7-14.6,2.9c5.8-0.9,8.6-0.7,13.5-3.3c-1-0.8-2.3-0.2-3.2-1.3 c4.4-1.7,8.7-3.4,12.2-6.8c-1.6-0.8-3.2,0-4.9-0.6c2.4-1.6,5-2.5,7.1-5.1c-2.4,0.2-4.3,0.4-6.8,0.6c2.5-1.9,4.5-3.2,6.2-5.4 c-3.2-0.3-5.8,1.1-8.6,1.4c3.1-2.1,6.2-4,9.2-5.9c2.2-1.5,3.7-3.5,4-6.3c0.1-0.8,0.4-2.1-0.2-2.4c-0.9-0.4-1.3,0.8-1.8,1.4 c-3.7,4-8.2,6.7-13.2,8.8c1.4-1.3,3-2.3,4.5-3.5c3.5-2.6,6.9-5.4,9.2-9.2c1.7-2.8,2.2-5.7,0.6-9.1c-3.7,8.5-10.4,14-17.6,19.7 c0.4-1.3,1.1-1.7,1.6-2.2c3.2-3.1,6.3-6.2,8.9-9.9c2.2-3.2,4-6.5,4.2-10.5c0.2-2.5-0.6-4.8-2.1-6.2c-2.9,8.9-10,20.4-14.4,23.4 c0.7-1,1.4-1.9,2-2.8c3.2-4.7,5.9-9.5,6.4-15.3c0.4-4.1-0.6-7.7-4.4-10.7c0.3,10.5-3.9,19.1-8.7,27.5c1-3.3,2.5-6.4,3.4-9.7 c1.1-3.7,1.8-7.6,1.5-11.5c-0.3-3.4-1.7-6.3-5.2-7.7c-0.4-0.2-0.9-0.5-1.3-0.1c-0.3,0.3,0.1,0.7,0.2,1c1.5,3.6,1.4,7.2,0.7,11 c-1.7,8.3-6.6,15.4-9.1,23.5c-0.3-0.8-0.4-1.6-0.5-2.3c-0.1-0.4,0.3-1-0.3-1.2c-0.5-0.1-0.7,0.5-1,0.8c-1.4,1.7-2.5,3.6-3.3,5.6 c-1,2.8-2.4,5.5-4.1,7.8c-1.2,1.7-2.7,3.3-4.3,4.8c-0.3,0.2-0.5,0.6-0.9,1c1.9,0.5,3.8,0.1,5.3,1.5c-1.3,0.5-2.5,0.1-3.6,0.9 c1.2,0.9,2.9,0.9,4,2.3c-1.3,0.4-2.5-0.2-3.8,0.4c1.4,0.8,2.8,1.2,4,2.3c-1.3,0.3-2.4-0.5-3.6,0c1,1.6,2.3,1.2,3.1,3.3 c-2.4-1.3-4-1.5-6.6-2c0.4,1,2.5,1,2.5,2.1c-1-0.2-2.9-0.3-3.9-0.5c-0.3-0.1-1.5,1.2-1.8,1.1c-1.3-0.7-2.1-1-3.4-0.7 c-1.6,0.4-1.6,0.7-1.5-0.6c0.2-1.5,7.1-3.6,5.2-3.8s-6.4,1.1-4.7,0.1c1.6-1,4.4-1.4,5-2.4c-1.2-0.5-3.5,0.3-4.4,0.7 c-2.1,0.8-3,1.1-4.4,2.8c-0.5,0.6-1.3,0.4-2.4,2.5c-0.9-1.4,3.9-5.1,4.2-5.4c-0.3,0.2-4.6,2.1-6.2,6.1c0.3-3.3,2.4-5.3,4.9-7.1 c2.6-1.8,5.6-2.7,8.3-4.2c3.7-2.2,10.9-2.4,10.4-2.6c-1.7-0.7-4.1-1.5-3.5-2c0.7-0.5,1.4-1.2,1.3-2.1c-0.2-1.1-1.4-0.8-2.2-0.9 c-2.2-0.2-4.3,0.6-7,1.1c1.3-1.2,2.3-2,3.3-2.9c0.7-0.7,2-1.4,1.5-2.2c-0.4-0.7-1.9-0.1-2.9,0c-1.9,0.3-3.6,1.5-5.6,1.7 c2-1.5,4.2-2.7,5.6-4.9c0.3-0.5,1.1-1,0.7-1.6c-0.4-0.7-1.3-0.4-1.9-0.3c-1.7,0.1-3.2,0.7-4.7,1.3c-1.4,0.7-2.8,1.4-4.2,2.1 c0.1-0.5,0.3-0.7,0.5-0.9c2.2-1.8,4.2-3.7,5.5-6.2c0.7-1.3,0.5-2.3-0.8-2.3c-2,0-4,1.5-5.5,2.8c-1,0.9-2,1.8-3.1,2.7 c1.1-2,2.7-4.6,3-6.1c0.3-1.5,1-4.1-0.3-5.6c-0.6-0.7-2.1-1.9-2.1-0.6c-0.2,5.1-5.6,10.4-8.4,15c-0.1-1.2,0.5-2.2,1.1-3.2 c1.4-2.3,2.8-4.5,4.2-6.7c2.5-3.9,1.7-9.5-2.2-11.7c0.8,6.7-5,11.9-7.1,17.3c-0.3-1.1,0.2-2,0.6-2.9c1.2-2.4,2.5-4.8,3.7-7.2 c2-4,1.4-10.5-3-12.4c1.4,4.3-0.8,10.2-3,13.7c-0.5,0.7-1.1,2.9-2,3c-0.8,0.2-0.1-2.5-1.2-2.6c-0.5,2-1.4,3.7-2.4,5.4 c-1.4,2.4-1.2,4.7,0.3,7c1.5,2.3,3.5,4.1,5.8,5.7c0.3,0.2,0.8,0.3,0.7,0.8c-0.1,0.5-0.6,0.6-0.9,0.5c-2.1-0.8-0.8,0.6-0.4,1.2 c0.7,0.8,1.7,1.4,2.7,1.8c1.8,0.9,3.7,1.6,5.5,2.5c2.3,1.2,4.1,2.8,4.9,5.4c0.9,2.8-1,4.1-1.5,7c-0.1,0.5-0.2,1.1-0.2,1.6v0 c-0.1,2.7,0.2,2.9,2.8,1.8c1.2-0.5,5.6-0.3,5.9,0.3c0.7,1.6-1.3,4.6-1.4,4.6c-0.6-2.3,0.2-3.3,0.2-3.3s-2.9-0.5-4.1,0.4 c-1.1,0.8-1,2.1-0.7,2.8c0.3,0.7,0.6,1.3,0.6,1.3c-2.3,1.9-3.1-0.7-3.9-3.8c0,0,0-0.1,0-0.1c-0.3,1.9-0.2,4.3,1.3,5.1 c1.5,0.9,3.3,0,4.6-1.2c-0.3-0.2-0.5-0.3-0.7-0.4c-0.7-0.4-1.5-2.2-0.2-2.7c1.3-0.6,1.7,0.5,1.9,1.2c0.3,1,0.6,2.8,0.6,2.8 s3.7-5.4,5-5.3c1.3,0.1,2.1,0.5,3,1.4c2.9,2.9,5.4,6.3,9,8.8c-1.4,0.4-2.2-0.7-3.3-0.4c0.5,1.4,2.1,1.6,3,2.8 c-0.6-0.1-0.8,0-1-0.1c-2.4-0.8-2.5-0.8-2.7,1.9c-0.1,0.7-0.2,1.3-0.3,1.9c0,0-0.1,0.2-0.1,0.4c-0.2,0.7-0.3,2.1,1.1,1.3 c1-0.3-1,1.9,0.5,1.1c1.5-0.8-0.7,2.1,1.7,1.3c0.5-0.1-0.4,1,0.9,0.8c0,0,0,0,0,0c0.3-0.2,0.5-0.4,0.7-0.7c0,0,0.2-0.1,0.2-0.1 c1.7,1.7,1.6-0.7,2.4-1.1c0.5-0.3,0.8-1.5,1-1.3c1.6,1.2,1.5-0.5,1.8-1.1c0.6-1,1-2.1,1.5-3.1c0.2-0.4,0.3-0.9,0.9-0.9 c0.6,0,0.9,0.4,1.1,1c0.7,2.2,0.3,4.1-0.5,5.9c-0.1,0.3-0.3,0.6-0.5,0.9c0,0.6,0.3,1,1.2,0.5c1-0.3-1,1.9,0.5,1.1 c1.1-0.6,0.3,0.7,0.6,1.2c0.3-0.2,0.6-0.3,0.9-0.5c0,0,0,0,0,0c0.8-0.5,1.5-1.7,2.3-1.4c0.8,0.4-0.1,1.7,0.1,2.6 c0,0.1,0.2,0.1,0.3,0.2c1-0.9,1.5-2.1,2.4-3.1c0.2-0.3-0.1-3.2,1.7-0.8c0.2,0.3,0.6-0.3,0.7-0.7c0.7-1.5,0.8-3.1,0.8-4.8 c0-0.3,0.1-0.6,0.2-0.9c0.7,0.3,0.4,1.3,1.3,1.4c0.3-0.8,0.1-1.6,0-2.3c-0.3-1.6,0.2-1.6,1.6-1.2c3.2,1,6.3,0.5,9.6-0.5 c-0.8-0.9-2-0.5-2.8-1.5c4.1-0.1,8-0.5,11.5-2.4C140.6,80.3,138.7,80.4,136.6,79.2z M83.5,70c-0.3,0.1-2.2,0.6-1.9,0.2 c1.7-1.9,0.9-2.5,2.1-3c0.5-0.2,0.7,0.1,0.8,0.3C84.9,68.4,84.7,69.5,83.5,70z"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                className: "logo-ers-st6",
                                d: "M109.7,104c1.4-0.9,1.9-1.3,0-2.1c-2-0.8-4-0.8-6-1.2c-0.8-0.2-1.1,0.4-0.9,1.2c0.1,0.6,0.7,1,0.4,1.7 c-1,0.1-1.3-0.7-1.8-1.3c-0.3-0.3-0.1-1.5-1.1-0.9c-0.6,0.4-1,1-0.5,1.8c0.2,0.2,0.3,0.5,0.4,0.8c-1.6-0.5-2.3-1.6-2-3.3 c0.3-1.5,2-2.8,3.7-2.7c0.2,0,0.3,0,0.5,0.1c2.2,0.9,4,1.1,5.6-1.3c0.6-1,1.3-1.9,1.8-2.9c0,0.6,0.3,1,1.2,0.5 c1-0.3-1,1.9,0.5,1.1c1.1-0.6,0.3,0.7,0.6,1.2c-1.1,0.7-2.2,1.4-3.3,2.1c-0.3,0.2-0.7,0.5-0.6,0.9c0.1,0.4,0.6,0.4,1,0.3 c0.2-0.1,0.4-0.2,0.7-0.2c1.3-0.3,2.6-0.3,2.9,1.4C113,102.6,112,103.8,109.7,104z"
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
const SvgGzLogoSquare = (props)=>{
    return /*#__PURE__*/ _jsxs("svg", {
        id: "gz-logo-square_svg__Layer_1",
        xmlns: "http://www.w3.org/2000/svg",
        xmlnsXlink: "http://www.w3.org/1999/xlink",
        x: 0,
        y: 0,
        viewBox: "0 0 200 200",
        xmlSpace: "preserve",
        ...props,
        children: [
            /*#__PURE__*/ _jsx("style", {
                children: ".gz-logo-square_svg__st2{opacity:.27}.gz-logo-square_svg__st3{fill:#fff}.gz-logo-square_svg__st4{fill:#841424}"
            }),
            /*#__PURE__*/ _jsx("path", {
                fill: "#ba494f",
                d: "M.1.6h199.3v198.8H.1z"
            }),
            /*#__PURE__*/ _jsx("path", {
                opacity: 0.3,
                fill: "#231f20",
                d: "M199.4 92.1l-38.2-38.3h-55.8v9.6l24.8 24.8-5.5 7.1L91 61.7l-33.9-8.4-31.6 28.8 6.6 38.7 78.5 78.6h88.8z"
            }),
            /*#__PURE__*/ _jsx("g", {
                className: "gz-logo-square_svg__st2",
                children: /*#__PURE__*/ _jsx("path", {
                    className: "gz-logo-square_svg__st3",
                    d: "M56.9 171l15.5-14.2v-.1H58.2v-1.9H77v1.4l-15.4 14.2v.1h15.6v1.9H56.9V171zM97.7 164.1H86.9v6.3H99v1.9H83.3v-17.5h15.1v1.9H86.9v5.5h10.8v1.9zM105.3 155.1c1.8-.2 4.4-.4 6.9-.4 3.8 0 6.3.4 8.1 1.4 1.4.8 2.2 2 2.2 3.3 0 2.3-2.3 3.8-5.3 4.5v.1c2.2.5 3.4 1.7 4.1 3.5.9 2.4 1.6 4.1 2.2 4.8h-3.7c-.5-.5-1.1-2-1.9-4.2-.8-2.4-2.3-3.3-5.6-3.4h-3.4v7.6h-3.6v-17.2zm3.6 7.9h3.7c3.8 0 6.3-1.3 6.3-3.3 0-2.3-2.6-3.2-6.4-3.3-1.7 0-3 .1-3.6.2v6.4zM153.1 163.4c0 6-5.8 9.2-12.9 9.2-7.4 0-12.5-3.6-12.5-8.9 0-5.6 5.5-9.2 12.9-9.2 7.6 0 12.5 3.7 12.5 8.9zm-21.6.3c0 3.7 3.2 7.1 8.9 7.1s8.9-3.3 8.9-7.3c0-3.5-2.9-7.1-8.9-7.1-5.9 0-8.9 3.4-8.9 7.3z"
                })
            }),
            /*#__PURE__*/ _jsx("path", {
                className: "gz-logo-square_svg__st4",
                d: "M55.6 169.7l15.5-14.2v-.1H56.9v-1.9h18.8v1.4l-15.4 14.2v.1h15.6v1.9H55.6v-1.4zM96.5 162.9H85.6v6.3h12.1v1.9H82v-17.5h15.1v1.9H85.6v5.5h10.8v1.9zM104 153.8c1.8-.2 4.4-.4 6.9-.4 3.8 0 6.3.4 8.1 1.4 1.4.8 2.2 2 2.2 3.3 0 2.3-2.3 3.8-5.3 4.5v.1c2.2.5 3.4 1.7 4.1 3.5.9 2.4 1.6 4.1 2.2 4.8h-3.7c-.5-.5-1.1-2-1.9-4.2-.8-2.4-2.3-3.3-5.6-3.4h-3.4v7.6H104v-17.2zm3.6 8h3.7c3.8 0 6.3-1.3 6.3-3.3 0-2.3-2.6-3.2-6.4-3.3-1.7 0-3 .1-3.6.2v6.4zM151.9 162.1c0 6-5.8 9.2-12.9 9.2-7.4 0-12.5-3.6-12.5-8.9 0-5.6 5.5-9.2 12.9-9.2 7.5.1 12.5 3.7 12.5 8.9zm-21.7.3c0 3.7 3.2 7.1 8.9 7.1s8.9-3.3 8.9-7.3c0-3.5-2.9-7.1-8.9-7.1-5.9 0-8.9 3.5-8.9 7.3z"
            }),
            /*#__PURE__*/ _jsxs("g", {
                children: [
                    /*#__PURE__*/ _jsx("g", {
                        className: "gz-logo-square_svg__st2",
                        children: /*#__PURE__*/ _jsx("path", {
                            className: "gz-logo-square_svg__st3",
                            d: "M48.8 40.9c-1.6.4-4.8 1-8.6 1-4.2 0-7.7-.7-10.4-2.3-2.3-1.5-3.8-3.9-3.8-6.6 0-5.2 5.7-9 15.1-9 3.2 0 5.7.4 6.9.8l-.9 1.8c-1.5-.4-3.3-.8-6.2-.8-6.8 0-11.2 2.6-11.2 7s4.3 7.1 10.8 7.1c2.4 0 4-.2 4.8-.5v-5.2h-5.7v-1.8h9.2v8.5zM56 24.4c1.8-.2 4.4-.4 6.9-.4 3.8 0 6.3.4 8.1 1.4 1.4.8 2.2 2 2.2 3.3 0 2.3-2.3 3.8-5.3 4.5v.1c2.2.5 3.4 1.7 4.1 3.5.9 2.4 1.6 4.1 2.2 4.8h-3.7c-.5-.5-1.1-2-1.9-4.2-.8-2.4-2.3-3.3-5.6-3.4h-3.4v7.6H56V24.4zm3.6 8h3.7c3.8 0 6.3-1.3 6.3-3.3 0-2.3-2.6-3.2-6.4-3.3-1.7 0-3 .1-3.6.2v6.4zM84.6 36.1l-2.9 5.5H78l9.5-17.5h4.3l9.5 17.5h-3.8l-3-5.5h-9.9zm9.1-1.7l-2.7-5c-.6-1.1-1-2.2-1.4-3.2h-.1c-.4 1-.9 2.1-1.4 3.2l-2.7 5.1h8.3zM111 41.7l-9.1-17.5h3.9l4.3 8.6c1.2 2.4 2.2 4.5 3 6.5h.1c.8-2 1.9-4.2 3.2-6.5l4.7-8.6h3.8l-10 17.5H111zM133.2 24.2v17.5h-3.6V24.2h3.6zM146.4 26.1h-8.5v-1.9h20.6v1.9H150v15.6h-3.6V26.1zM170.7 41.7v-7.4l-8.8-10.1h4.1l3.9 4.8c1.1 1.3 1.9 2.4 2.8 3.6h.1c.8-1.1 1.7-2.3 2.8-3.6l4-4.8h4.1l-9.3 10.1v7.5h-3.7z"
                        })
                    }),
                    /*#__PURE__*/ _jsx("path", {
                        className: "gz-logo-square_svg__st4",
                        d: "M47.6 39.6c-1.6.4-4.8 1-8.6 1-4.2 0-7.7-.7-10.4-2.3-2.4-1.5-3.9-3.8-3.9-6.5 0-5.2 5.7-9 15.1-9 3.2 0 5.7.4 6.9.8l-.9 1.8c-1.5-.4-3.3-.8-6.2-.8-6.8 0-11.2 2.6-11.2 7s4.3 7.1 10.8 7.1c2.4 0 4-.2 4.8-.5V33h-5.7v-1.8h9.2v8.4zM54.7 23.1c1.8-.2 4.4-.4 6.9-.4 3.8 0 6.3.4 8.1 1.4 1.4.8 2.2 2 2.2 3.3 0 2.3-2.3 3.8-5.3 4.5v.1c2.2.5 3.4 1.7 4.1 3.5.9 2.4 1.6 4.1 2.2 4.8h-3.7c-.5-.5-1.1-2-1.9-4.2-.8-2.4-2.3-3.3-5.6-3.4h-3.4v7.6h-3.6V23.1zm3.6 8H62c3.8 0 6.3-1.3 6.3-3.3 0-2.3-2.6-3.2-6.4-3.3-1.7 0-3 .1-3.6.2v6.4zM83.3 34.9l-2.9 5.5h-3.7l9.5-17.5h4.3l9.5 17.5h-3.8l-3-5.5h-9.9zm9.2-1.8l-2.7-5c-.6-1.1-1-2.2-1.4-3.2h-.1c-.4 1-.9 2.1-1.4 3.2l-2.7 5.1h8.3zM109.7 40.4l-9.1-17.5h3.9l4.3 8.6c1.2 2.4 2.2 4.5 3 6.5h.1c.8-2 1.9-4.2 3.2-6.5l4.7-8.6h3.8l-10 17.5h-3.9zM131.9 22.9v17.5h-3.6V22.9h3.6zM145.2 24.8h-8.5v-1.9h20.6v1.9h-8.5v15.6h-3.6V24.8zM169.4 40.4V33l-8.8-10.1h4.1l3.9 4.8c1.1 1.3 1.9 2.4 2.8 3.6h.1c.8-1.1 1.7-2.3 2.8-3.6l4-4.8h4.1L173.1 33v7.5h-3.7z"
                    })
                ]
            }),
            /*#__PURE__*/ _jsxs("g", {
                children: [
                    /*#__PURE__*/ _jsx("defs", {
                        children: /*#__PURE__*/ _jsx("path", {
                            id: "gz-logo-square_svg__SVGID_1_",
                            d: "M55.6 171.1h20.3v-1.9H60.4v-.1l15.4-14.2v-1.4H56.9v1.9H71v.1l-15.5 14.2v1.4zM96.5 161H85.6v-5.5h11.5v-1.9H82v17.5h15.7v-1.9H85.6v-6.3h10.8V161zm7.5 10.1h3.6v-7.6h3.4c3.3.1 4.8 1 5.6 3.4.8 2.2 1.4 3.7 1.9 4.2h3.7c-.6-.7-1.2-2.4-2.2-4.8-.7-1.8-1.9-3.1-4.1-3.5v-.1c2.9-.6 5.3-2.2 5.3-4.5 0-1.3-.8-2.5-2.2-3.3-1.7-1-4.2-1.4-8.1-1.4-2.5 0-5.1.1-6.9.4v17.2zm3.6-15.7c.6-.1 1.8-.2 3.6-.2 3.8 0 6.4 1 6.4 3.3 0 2-2.4 3.3-6.3 3.3h-3.7v-6.4zm31.7-2.1c-7.4 0-12.9 3.6-12.9 9.2 0 5.3 5.2 8.9 12.5 8.9 7.1 0 12.9-3.2 12.9-9.2.1-5.3-4.9-8.9-12.5-8.9zm-.1 1.8c6 0 8.9 3.6 8.9 7.1 0 4-3.2 7.3-8.9 7.3s-8.9-3.3-8.9-7.1c-.1-3.8 2.9-7.3 8.9-7.3zM47.6 31.2h-9.2V33h5.7v5.2c-.8.3-2.4.5-4.8.5-6.5 0-10.8-2.6-10.8-7.1 0-4.4 4.4-7 11.2-7 2.8 0 4.7.3 6.2.8l.9-1.8c-1.2-.4-3.7-.8-6.9-.8-9.3 0-15.1 3.8-15.1 9 0 2.7 1.5 5.1 3.9 6.5 2.7 1.6 6.2 2.3 10.4 2.3 3.8 0 6.9-.6 8.6-1v-8.4zm7.1 9.2h3.6v-7.6h3.4c3.3.1 4.8 1 5.6 3.4.8 2.2 1.4 3.7 1.9 4.2h3.7c-.6-.7-1.2-2.4-2.2-4.8-.7-1.8-1.9-3.1-4.1-3.5V32c2.9-.6 5.3-2.2 5.3-4.5 0-1.4-.8-2.5-2.2-3.3-1.7-1-4.2-1.4-8.1-1.4-2.5 0-5.1.1-6.9.4v17.2zm3.6-15.7c.6-.1 1.8-.2 3.6-.2 3.8 0 6.4 1 6.4 3.3 0 2-2.4 3.3-6.3 3.3h-3.7v-6.4zm34.9 10.2l3 5.5h3.8l-9.5-17.5h-4.3l-9.5 17.5h3.7l2.9-5.5h9.9zm-9.1-1.8l2.7-5.1c.5-1.1 1-2.1 1.4-3.2h.1c.4 1 .8 2.1 1.4 3.2l2.7 5h-8.3zm29.6 7.3l10-17.5h-3.8l-4.7 8.6c-1.2 2.3-2.4 4.5-3.2 6.5h-.1c-.7-2.1-1.8-4.2-3-6.5l-4.3-8.6h-3.9l9.1 17.5h3.9zm14.6-17.5v17.5h3.6V22.9h-3.6zm16.9 17.5h3.6V24.8h8.5v-1.9h-20.6v1.9h8.5v15.6zm27.9 0v-7.5l9.3-10.1h-4.1l-4 4.8c-1.1 1.3-2 2.5-2.8 3.6h-.1c-.9-1.2-1.7-2.3-2.8-3.6l-3.9-4.8h-4.1l8.8 10.1v7.4h3.7z"
                        })
                    }),
                    /*#__PURE__*/ _jsx("clipPath", {
                        id: "gz-logo-square_svg__SVGID_2_",
                        children: /*#__PURE__*/ _jsx("use", {
                            xlinkHref: "#gz-logo-square_svg__SVGID_1_",
                            overflow: "visible"
                        })
                    }),
                    /*#__PURE__*/ _jsxs("g", {
                        clipPath: "url(#gz-logo-square_svg__SVGID_2_)",
                        children: [
                            /*#__PURE__*/ _jsx("image", {
                                width: 1213,
                                height: 1362,
                                xlinkHref: "B775D463C7D40AFB.png",
                                transform: "matrix(.24 0 0 .24 -48.7 -86.3)",
                                overflow: "visible",
                                opacity: 0.49
                            }),
                            /*#__PURE__*/ _jsx("path", {
                                className: "gz-logo-square_svg__st3",
                                d: "M139.2 155.1c-6 0-8.9 3.5-8.9 7.3 0 3.7 3.2 7.1 8.9 7.1s8.9-3.3 8.9-7.3c0-3.4-2.9-7.1-8.9-7.1zM88.3 24.8c-.5 1.1-1 2-1.5 3.1l-2.7 5h8.4l-2.7-5c-.7-1.2-1.1-2.1-1.5-3.1zM117.6 158.7c0-2.3-2.4-3.4-6.2-3.4-1.7 0-2.8 0-3.3.1v6.9h3.2c3.8 0 6.3-1.6 6.3-3.6zM68.3 27.8c0-2.3-2.4-3.3-6.2-3.3-1.7 0-2.9.1-3.4.2v6.5H62c3.9 0 6.3-1.4 6.3-3.4z"
                            }),
                            /*#__PURE__*/ _jsx("path", {
                                className: "gz-logo-square_svg__st3",
                                d: "M-46.1-83.8v319.1H237V-83.8H-46.1zM128 22.6h4.3v17.7H128V22.6zm-80.6 17c-1.1.4-4.7 1-8.5 1-4.2 0-7.6-.7-10.4-2.3-2.4-1.5-3.9-3.8-3.9-6.5 0-5.2 5.8-9 15.1-9 3.2 0 5.8.4 7 .8l-.9 1.8c-1.5-.4-3.3-.8-6.2-.8-6.8 0-11.2 2.6-11.2 7s4.3 7.1 10.8 7.1c2.4 0 4.3-.2 4.8-.5v-5.4h-5.9v-1.6h9.1v8.4zm7.5-16.5c1.6-.2 4.3-.4 6.8-.4 3.8 0 6.3.4 8 1.4 1.4.8 2.2 2 2.2 3.3 0 2.3-2.5 3.8-5.2 4.5v.1c1.6.5 3.4 1.7 4.1 3.5.9 2.4 1.5 4.2 2.1 4.8h-3.7c-.5 0-1.1-2-1.9-4.2-.8-2.4-2.3-3.4-5.6-3.4h-3.1v7.5h-3.8V23.1zm21 147.8H56v-1.2l15.6-14.2v-.2H57v-2.1h18.8v1.8l-15.6 14.2v-.3h15.6v2zm22 0H82.3v-17.7h14.5v2.1H85.5v5.4h10.7v2.1H85.5v5.9h12.4v2.2zM96.2 40.3l-3-5.4h-9.9l-2.9 5.4h-3.7l9.5-17.7h4.3l9.5 17.7h-3.8zm22.3 130.6c-.5 0-1.1-2-1.9-4.2-.8-2.4-2.3-3.4-5.6-3.4h-2.9v7.5h-4.3v-17.1c2.1-.2 4.5-.4 7-.4 3.8 0 6.4.4 8.1 1.4 1.4.8 2.3 2 2.3 3.3 0 2.3-2.4 3.8-5.1 4.5v.1c1.6.5 3.3 1.6 4 3.4.9 2.4 1.5 4.2 2 4.7h-3.6zm-4.8-130.6h-4l-9.1-17.7h3.9l4.3 8.8c1.2 2.4 2.2 4.6 3 6.8h.1c.8-2.1 1.9-4.4 3.2-6.7l4.7-8.9h3.8l-9.9 17.7zm25.2 131.1c-7.4 0-12.5-3.6-12.5-8.9 0-5.6 5.5-9.2 12.9-9.2 7.6 0 12.5 3.7 12.5 8.9.1 6-5.8 9.2-12.9 9.2zm18.6-146.6h-9.1v15.6h-3.2V24.8h-8.1v-2.1h20.4v2.1zm15.6 8.1v7.4h-3.8V33l-8.7-10.4h4.1l3.9 4.9c1.1 1.3 1.9 2.6 2.8 3.7h.1c.8-1.1 1.7-2.4 2.8-3.7l4-4.9h4.1l-9.3 10.3z"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ _jsx("g", {
                children: /*#__PURE__*/ _jsx("path", {
                    className: "gz-logo-square_svg__st3",
                    d: "M40.8 70.2c2.6-2.8 5.7-5.1 9.3-6.7 3.6-1.6 7.7-2.5 12.3-2.5 4.5 0 8.5.8 12.1 2.3 3.6 1.5 6.6 3.6 8.9 6.1l7.6-7.9c-3.2-3.1-7.2-5.5-12.1-7.3-4.9-1.8-10.4-2.7-16.6-2.7-5.9 0-11.4 1-16.4 3-5 2-9.4 4.7-13.1 8.3-3.7 3.5-6.6 7.8-8.7 12.8-2.1 5-3.1 10.5-3.1 16.6 0 6 1 11.5 3.1 16.5 2 5 4.9 9.3 8.5 12.9 3.6 3.6 8 6.4 13 8.4 5.1 2 10.6 3 16.6 3 5.7 0 10.8-.6 15.6-1.8 4.8-1.2 9.8-2.8 13-5v-37H64v8.6h16.7v21.6c-2.7 1.2-4.9 2.2-7.9 2.8-3.1.7-6.4 1-10 1-4.6 0-8.8-.8-12.5-2.4-3.7-1.6-6.9-3.8-9.4-6.6-2.6-2.8-4.5-6.1-5.9-9.9-1.4-3.8-2.1-7.8-2.1-12.2 0-4.2.7-8.2 2.1-12 1.3-3.7 3.3-7 5.8-9.9zM161.3 63v-9.2h-55.9v9.6H148l-43.7 58.1v9.6h57.5v-10.2h-44.3z"
                })
            })
        ]
    });
};
const SvgRockets = (props)=>{
    return /*#__PURE__*/ _jsxs("svg", {
        "data-name": "Layer 1",
        xmlns: "http://www.w3.org/2000/svg",
        xmlnsXlink: "http://www.w3.org/1999/xlink",
        ...props,
        children: [
            /*#__PURE__*/ _jsxs("defs", {
                children: [
                    /*#__PURE__*/ _jsxs("linearGradient", {
                        id: "rockets_svg__a",
                        x1: 277.46,
                        y1: 697.11,
                        x2: 277.46,
                        y2: 669.52,
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ _jsx("stop", {
                                offset: 0,
                                stopColor: "gray",
                                stopOpacity: 0.25
                            }),
                            /*#__PURE__*/ _jsx("stop", {
                                offset: 0.54,
                                stopColor: "gray",
                                stopOpacity: 0.12
                            }),
                            /*#__PURE__*/ _jsx("stop", {
                                offset: 1,
                                stopColor: "gray",
                                stopOpacity: 0.1
                            })
                        ]
                    }),
                    /*#__PURE__*/ _jsx("linearGradient", {
                        id: "rockets_svg__c",
                        x1: 748.15,
                        y1: 567.16,
                        x2: 748.15,
                        y2: 544.13,
                        xlinkHref: "#rockets_svg__a"
                    }),
                    /*#__PURE__*/ _jsx("linearGradient", {
                        id: "rockets_svg__d",
                        x1: 556.93,
                        y1: 707.16,
                        x2: 556.93,
                        y2: 42.89,
                        xlinkHref: "#rockets_svg__a"
                    }),
                    /*#__PURE__*/ _jsxs("linearGradient", {
                        id: "rockets_svg__b",
                        x1: 456.95,
                        y1: 628.14,
                        x2: 456.95,
                        y2: 692.54,
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ _jsx("stop", {
                                offset: 0,
                                stopColor: "#e0e0e0"
                            }),
                            /*#__PURE__*/ _jsx("stop", {
                                offset: 0.31,
                                stopColor: "#fccc63"
                            }),
                            /*#__PURE__*/ _jsx("stop", {
                                offset: 0.77,
                                stopColor: "#f55f44"
                            })
                        ]
                    }),
                    /*#__PURE__*/ _jsx("linearGradient", {
                        id: "rockets_svg__e",
                        x1: 534.05,
                        y1: 628.14,
                        x2: 534.05,
                        y2: 692.54,
                        xlinkHref: "#rockets_svg__b"
                    }),
                    /*#__PURE__*/ _jsx("linearGradient", {
                        id: "rockets_svg__f",
                        x1: 582.35,
                        y1: 628.14,
                        x2: 582.35,
                        y2: 692.54,
                        xlinkHref: "#rockets_svg__b"
                    }),
                    /*#__PURE__*/ _jsx("linearGradient", {
                        id: "rockets_svg__g",
                        x1: 660.3,
                        y1: 628.14,
                        x2: 660.3,
                        y2: 692.54,
                        xlinkHref: "#rockets_svg__b"
                    }),
                    /*#__PURE__*/ _jsx("linearGradient", {
                        id: "rockets_svg__h",
                        x1: 766.05,
                        y1: 409.23,
                        x2: 766.05,
                        y2: 340.57,
                        xlinkHref: "#rockets_svg__a"
                    }),
                    /*#__PURE__*/ _jsx("linearGradient", {
                        id: "rockets_svg__i",
                        x1: 331.05,
                        y1: 577.85,
                        x2: 331.05,
                        y2: 529.94,
                        xlinkHref: "#rockets_svg__a"
                    })
                ]
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M991 708.36a139.92 139.92 0 01-27.7-.37c-101.12-11.18-238.82-8-351.07 61.55-155.24 96.17-398.53 13.84-505.85-30.95-82-34.21-124.57-118-99-196.65.36-1.11.73-2.22 1.12-3.33 16.09-46.74 47.85-83.32 87.18-102.71 34.28-16.9 84.33-52.19 106.6-120 9.2-28 21.82-54.34 38.21-77.3 43.89-61.49 135.77-153.06 293.79-152.49a254.66 254.66 0 0181.41 13.78c57.73 19.67 109.87 59.66 149.63 115.1 25.37 35.36 63.39 68.23 117.82 70.91 75.54 3.74 147.63 38.91 201.71 101.5 1.56 1.8 3.1 3.61 4.64 5.44 96.29 114.71 29.41 304.34-98.49 315.52z",
                fill: "#ba494f"
            }),
            /*#__PURE__*/ _jsx("circle", {
                cx: 277.46,
                cy: 683.31,
                r: 13.8,
                fill: "url(#rockets_svg__a)",
                opacity: 0.7
            }),
            /*#__PURE__*/ _jsx("circle", {
                cx: 277.46,
                cy: 683.31,
                r: 13.18,
                opacity: 0.2
            }),
            /*#__PURE__*/ _jsx("circle", {
                cx: 203.11,
                cy: 414.14,
                r: 5.1,
                fill: "#fff"
            }),
            /*#__PURE__*/ _jsx("circle", {
                cx: 567.11,
                cy: 710.14,
                r: 5.1,
                fill: "#fff"
            }),
            /*#__PURE__*/ _jsx("circle", {
                cx: 352.11,
                cy: 736.14,
                r: 2.85,
                fill: "#fff"
            }),
            /*#__PURE__*/ _jsx("circle", {
                cx: 983.11,
                cy: 598.14,
                r: 2.85,
                fill: "#fff"
            }),
            /*#__PURE__*/ _jsx("circle", {
                cx: 820.11,
                cy: 342.14,
                r: 2.85,
                fill: "#fff"
            }),
            /*#__PURE__*/ _jsx("circle", {
                cx: 1051.11,
                cy: 467.14,
                r: 2.85,
                fill: "#fff"
            }),
            /*#__PURE__*/ _jsx("circle", {
                cx: 293.11,
                cy: 247.14,
                r: 5.1,
                fill: "#fff"
            }),
            /*#__PURE__*/ _jsx("path", {
                fill: "#fff",
                d: "M152.94 592.21h-4.54v-4.54h-1.85v4.54h-4.54v1.85h4.54v4.53h1.85v-4.53h4.54v-1.85zM266.94 590.21h-4.54v-4.54h-1.85v4.54h-4.54v1.85h4.54v4.53h1.85v-4.53h4.54v-1.85zM429.94 682.21h-4.54v-4.54h-1.85v4.54h-4.54v1.85h4.54v4.53h1.85v-4.53h4.54v-1.85zM656.97 130.71h-2.07v-2.07h-.84v2.07h-2.07v.84h2.07v2.07h.84v-2.07h2.07v-.84zM951.97 320.71h-2.07v-2.07h-.84v2.07h-2.07v.84h2.07v2.07h.84v-2.07h2.07v-.84zM777.97 444.71h-2.07v-2.07h-.84v2.07h-2.07v.84h2.07v2.07h.84v-2.07h2.07v-.84zM69.97 522.71H67.9v-2.07h-.84v2.07h-2.07v.84h2.07v2.07h.84v-2.07h2.07v-.84zM154.97 692.71h-2.07v-2.07h-.84v2.07h-2.07v.84h2.07v2.07h.84v-2.07h2.07v-.84zM421.97 155.71h-2.07v-2.07h-.84v2.07h-2.07v.84h2.07v2.07h.84v-2.07h2.07v-.84zM295.97 454.71h-2.07v-2.07h-.84v2.07h-2.07v.84h2.07v2.07h.84v-2.07h2.07v-.84zM322.97 368.71h-2.07v-2.07h-.84v2.07h-2.07v.84h2.07v2.07h.84v-2.07h2.07v-.84z"
            }),
            /*#__PURE__*/ _jsx("circle", {
                cx: 748.15,
                cy: 555.65,
                r: 11.52,
                fill: "url(#rockets_svg__c)",
                opacity: 0.7
            }),
            /*#__PURE__*/ _jsx("circle", {
                cx: 748.15,
                cy: 555.65,
                r: 10.67,
                opacity: 0.2
            }),
            /*#__PURE__*/ _jsx("circle", {
                cx: 776.88,
                cy: 630.76,
                r: 11.93,
                opacity: 0.2
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M702.38 349.92a154.77 154.77 0 00-17.5-72c-5.49-10.44-10.5-16.92-14.36-20.91a10.25 10.25 0 00-11.74-2.26 10.64 10.64 0 00-4.11 2.65c-5.21 5.4-9.92 12.54-14 20.13a155.43 155.43 0 00-18.37 74v15.48h-9.93V187c0-37.72-8.44-74.93-25-107.93-7.84-15.64-15-25.36-20.49-31.33a14.2 14.2 0 00-21.35 0c-7.44 8.09-14.16 18.79-20 30.16-17.39 33.72-26.22 72-26.22 110.82v178.22h-8.58v-16.23a155.39 155.39 0 00-18.37-73.95c-4.11-7.59-8.82-14.73-14-20.13a10.27 10.27 0 00-12-2.18l.36.19a10.76 10.76 0 00-3.35 2.34c-3.85 4-8.86 10.47-14.35 20.91a154.77 154.77 0 00-17.5 72v269h30.64L438.78 641v66.13h25.06V641l-3.35-22.12h30.2v-245h8.58v243.94h24.47L520.23 641v66.13h25.06V641l-3.51-23.21h33L571.25 641v66.13h25.06V641l-3.51-23.21h19.54V373.91h9.93v245.37h8.05v-.37h26.62L653.6 641v66.13h25.06V641l-3.35-22.12h27.07z",
                transform: "translate(-32.41 -42.89)",
                fill: "url(#rockets_svg__d)",
                opacity: 0.7
            }),
            /*#__PURE__*/ _jsx("path", {
                fill: "#535461",
                d: "M436.4 585.25h-23.73l4.24-28.81h15.25l4.24 28.81z"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M415.73 567.88h17.61l-1.18-8.05h-15.25l-1.18 8.05z",
                opacity: 0.1
            }),
            /*#__PURE__*/ _jsx("path", {
                fill: "#535461",
                d: "M639.75 585.25h-23.72l4.23-28.81h15.26l4.23 28.81z"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M619.08 567.88h17.62l-1.18-8.05h-15.26l-1.18 8.05z",
                opacity: 0.1
            }),
            /*#__PURE__*/ _jsx("path", {
                fill: "#535461",
                d: "M513.5 585.25h-23.72l4.23-28.81h15.26l4.23 28.81z"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M492.83 567.88h17.62l-1.18-8.05h-15.26l-1.18 8.05z",
                opacity: 0.1
            }),
            /*#__PURE__*/ _jsx("path", {
                fill: "#535461",
                d: "M561.8 585.25h-23.72l4.23-28.81h15.25l4.24 28.81z"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M541.13 567.88h17.62l-1.19-8.05h-15.25l-1.18 8.05z",
                opacity: 0.1
            }),
            /*#__PURE__*/ _jsx("path", {
                fill: "#535461",
                d: "M436.4 318.35h169.46v6.78H436.4z"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M632.05 211.27a9.55 9.55 0 00-14.16 0c-4.93 5.26-9.39 12.21-13.28 19.6a154.77 154.77 0 00-17.39 72v260.84h75V301.77a154.22 154.22 0 00-16.57-70.14c-5.21-10.16-9.95-16.52-13.6-20.36zM416.98 211.27a9.55 9.55 0 0114.16 0c4.94 5.26 9.39 12.21 13.29 19.6a154.89 154.89 0 0117.39 72v260.84h-75V301.77a154.22 154.22 0 0116.57-70.14c5.2-10.16 9.94-16.52 13.59-20.36z",
                fill: "#e0e0e0"
            }),
            /*#__PURE__*/ _jsx("path", {
                fill: "#535461",
                d: "M387.25 307.33l17.8.09v21.94h-17.8v-22.03zM444.02 307.33l17.8.09v21.94h-17.8v-22.03zM587.22 307.33l17.79.09v21.94h-17.79v-22.03zM643.99 307.33l17.79.09v21.94h-17.79v-22.03z"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M444.43 230.53c-3.9-7.39-8.35-14.34-13.29-19.6a9.51 9.51 0 00-11.33-2.13 10.11 10.11 0 012.86 2.13c4.93 5.26 9.39 12.21 13.28 19.6a154.75 154.75 0 0117.39 72v260.82h8.48V302.54a154.88 154.88 0 00-17.39-72.01zM611.39 231.25c3.89-7.39 8.35-14.34 13.28-19.6a9.92 9.92 0 013.28-2.34 9.54 9.54 0 00-10.9 2.34c-4.94 5.26-9.4 12.21-13.29 19.6a154.89 154.89 0 00-17.39 72v260.86H594V303.27a154.77 154.77 0 0117.39-72.02z",
                opacity: 0.1
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M457.27 692.54h-.65A11.54 11.54 0 01445.08 681v-52.86h23.73V681a11.54 11.54 0 01-11.54 11.54z",
                transform: "translate(-32.41 -42.89)",
                fill: "url(#rockets_svg__b)"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M534.38 692.54h-.66A11.54 11.54 0 01522.19 681v-52.86h23.72V681a11.54 11.54 0 01-11.53 11.54z",
                transform: "translate(-32.41 -42.89)",
                fill: "url(#rockets_svg__e)"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M582.67 692.54H582A11.54 11.54 0 01570.49 681v-52.86h23.72V681a11.54 11.54 0 01-11.54 11.54z",
                transform: "translate(-32.41 -42.89)",
                fill: "url(#rockets_svg__f)"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M660.63 692.54H660A11.54 11.54 0 01648.44 681v-52.86h23.72V681a11.54 11.54 0 01-11.53 11.54z",
                transform: "translate(-32.41 -42.89)",
                fill: "url(#rockets_svg__g)"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M533.93 6.75a13.2 13.2 0 00-20.21 0c-7 7.88-13.4 18.29-19 29.37-16.46 32.84-24.82 70.12-24.82 107.92v418.61h107V142.36c0-36.73-8-73-23.64-105.1-7.35-15.23-14.12-24.7-19.33-30.51z",
                fill: "#eee"
            }),
            /*#__PURE__*/ _jsx("rect", {
                x: 494.79,
                y: 53.25,
                width: 55.84,
                height: 25.59,
                rx: 11,
                fill: "#535461"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M470.48 158.35h105.91v4.11H470.48z",
                opacity: 0.1
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M793.45 354.22a34.62 34.62 0 00-10.22-9 34.33 34.33 0 10-17.17 64.07c.73 0 1.46 0 2.17-.08a34.32 34.32 0 0025.23-54.93z",
                transform: "translate(-32.41 -42.89)",
                fill: "url(#rockets_svg__h)"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M766.09 332.01a32.45 32.45 0 01-30.4 32.38c-.67 0-1.36.07-2.05.07a32.46 32.46 0 1116.23-60.56 32.59 32.59 0 019.66 8.56 32.3 32.3 0 016.56 19.55z",
                opacity: 0.2
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M725.65 311.42a34.88 34.88 0 00-4.84 2.55 7.61 7.61 0 00-2.59 2.32 3 3 0 00-.06 3.31c.79 1.08 2.31 1.24 3.65 1.32a9.34 9.34 0 004.18-.42 9 9 0 002.44-1.77l2.79-2.53c1-.88 2-2.09 1.61-3.33a3 3 0 00-2.37-1.6 9.92 9.92 0 00-7 1.23",
                opacity: 0.1
            }),
            /*#__PURE__*/ _jsx("circle", {
                cx: 714,
                cy: 344.82,
                r: 1.71,
                opacity: 0.1
            }),
            /*#__PURE__*/ _jsx("circle", {
                cx: 748.72,
                cy: 334,
                r: 6.26,
                opacity: 0.1
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M759.59 312.46a8.54 8.54 0 11-9.67-8.56 32.59 32.59 0 019.67 8.56zM760.17 350.69a32.37 32.37 0 01-24.48 13.7c0-.45-.06-.9-.06-1.36a15.38 15.38 0 0124.54-12.34z",
                opacity: 0.1
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M350.17 539.47a24.15 24.15 0 00-7.14-6.32 24 24 0 10-12 44.7c.51 0 1 0 1.52-.05a24 24 0 0017.6-38.33z",
                transform: "translate(-32.41 -42.89)",
                fill: "url(#rockets_svg__i)"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M321.28 511.01a22.64 22.64 0 01-21.21 22.59h-1.43a22.64 22.64 0 1111.32-42.25 22.67 22.67 0 016.74 6 22.52 22.52 0 014.58 13.66z",
                opacity: 0.2
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M293.06 496.65a23.5 23.5 0 00-3.37 1.77 5.54 5.54 0 00-1.81 1.62 2.13 2.13 0 000 2.31 3.23 3.23 0 002.54.92 6.51 6.51 0 002.92-.29 6.29 6.29 0 001.71-1.24l1.94-1.76c.68-.62 1.42-1.46 1.12-2.32a2 2 0 00-1.65-1.12 6.87 6.87 0 00-4.87.86",
                opacity: 0.1
            }),
            /*#__PURE__*/ _jsx("circle", {
                cx: 284.93,
                cy: 519.94,
                r: 1.19,
                opacity: 0.1
            }),
            /*#__PURE__*/ _jsx("circle", {
                cx: 309.16,
                cy: 512.4,
                r: 4.37,
                opacity: 0.1
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M316.71 497.37a6 6 0 11-6.75-6 22.67 22.67 0 016.75 6zM317.15 524.04a22.59 22.59 0 01-17.08 9.56v-1a10.73 10.73 0 0117.12-8.61z",
                opacity: 0.1
            }),
            /*#__PURE__*/ _jsx("path", {
                fill: "none",
                d: "M837.69 539.42l21.8 11.6-17.02 19.04"
            }),
            /*#__PURE__*/ _jsx("circle", {
                cx: 954.9,
                cy: 428.23,
                r: 1.84,
                fill: "#fff"
            })
        ]
    });
};

// EXTERNAL MODULE: external "@fortawesome/react-fontawesome"
var react_fontawesome_ = __webpack_require__(7197);
// EXTERNAL MODULE: external "@fortawesome/free-solid-svg-icons"
var free_solid_svg_icons_ = __webpack_require__(6466);
;// CONCATENATED MODULE: ./src/layouts/Full.tsx





function MyImage() {
    return /*#__PURE__*/ _jsx("img", {
        src: "/images/gz-logo-square.svg",
        width: "80",
        alt: "my image"
    });
}
const Full = (props)=>{
    const toggleNav = (e)=>{
        const nav = document.getElementById("navigation");
        const btnOpen = document.getElementById("btn-open");
        const btnClose = document.getElementById("btn-close");
        nav.classList.toggle("hidden");
        btnOpen.classList.toggle("hidden");
        btnClose.classList.toggle("hidden");
    };
    const liClass = "h-full";
    const navClass = "h-full w-full px-3gut uppercase tracking-loose font-bold flex flex-col justify-center";
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: "flex flex-col h-screen",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                id: "navigation",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                    className: "z-modal relative w-full h-6gut flex justify-center items-center bg-gray-200 dark:bg-gray-900",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: liClass,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: navClass,
                                href: "/",
                                children: "Home"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: liClass,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: navClass,
                                href: "/services",
                                children: "Services"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: "h-full",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: "/",
                                id: "gz-logo",
                                className: "w-10gut h-full inline-block py-gut",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(LogoERSFilter, {})
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: liClass,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: navClass,
                                href: "/about",
                                children: "About"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: liClass,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: navClass,
                                href: "/contact",
                                children: "Contact"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: liClass,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                onClick: toggleNav,
                                className: "md:hidden h-full w-5gut relative right-0 top-0 flex items-center justify-center text-xl text-black hover:text-gray-800 dark:text-white dark:hover:text-gray-200",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(react_fontawesome_.FontAwesomeIcon, {
                                        id: "btn-open",
                                        className: "z-modal-close ",
                                        icon: free_solid_svg_icons_.faBars
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(react_fontawesome_.FontAwesomeIcon, {
                                        id: "btn-close",
                                        className: "hidden z-modal-close fixed ",
                                        icon: free_solid_svg_icons_.faTimes
                                    })
                                ]
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("main", {
                className: "flex-grow",
                children: props.children
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("footer", {
                className: "w-full py-4gut bg-gray-200 text-black dark:bg-gray-900 dark:text-white",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container mx-auto px-gut",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "grid grid-cols-1 sm:grid-cols-4 text-center sm:text-left",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "start-row-1",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "w-8gut mx-auto mb-gut",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(LogoERSFilter, {})
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "start-row-1",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: "/",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            className: "text-lg mb-gut",
                                            children: "Gravity Zero"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "mx-auto mb-2gut",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(DarkMode, {})
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "start-row-1 mb-2gut",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: "/services",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            className: "text-lg mb-gut",
                                            children: "Services"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: "/services#hosting",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            children: "Hosting"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: "/services#design",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            children: "Design"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: "/services#develop",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            children: "Development"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "start-row-1",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: "/about",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            className: "text-lg mb-gut",
                                            children: "Company"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: "/contact",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            children: "Contact"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: "/pricing",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            children: "Pricing"
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const layouts_Full = (Full);

;// CONCATENATED MODULE: ./src/layouts/Minimal.tsx

const Minimal = (props)=>/*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "flex flex-row h-screen",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
            className: "flex flex-col flex-grow ",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("section", {
                    className: "flex-grow bg-one p-gut",
                    children: props.children
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
                    children: [
                        "Footer ",
                        process.env.ENVIRONMENT
                    ]
                })
            ]
        })
    });
/* harmony default export */ const layouts_Minimal = (Minimal);

;// CONCATENATED MODULE: ./src/components/Layout.tsx







const Layouts = {
    split: layouts_Split,
    full: layouts_Full,
    minimal: layouts_Minimal
};
function getLayout(name, props) {
    if (typeof Layouts[name] !== "undefined") {
        return /*#__PURE__*/ external_react_default().createElement(Layouts[name], props);
    }
}
const Layout = (props)=>{
    const { user , loading  } = props;
    if (loading) {
        return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
            children: "Loading..."
        });
    }
    const layout = getLayout(props.layout, props);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: `layout-${props.layout}`,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        title: "title",
                        children: "ERS Filter"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "apple-touch-icon",
                        sizes: "180x180",
                        href: "/favicon/apple-touch-icon.png"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        type: "image/png",
                        sizes: "32x32",
                        href: "/favicon/favicon-32x32.png"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        type: "image/png",
                        sizes: "16x16",
                        href: "/favicon/favicon-16x16.png"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "manifest",
                        href: "/site.webmanifest.json"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        href: "css/output.css",
                        rel: "stylesheet"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        charSet: "utf-8"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "viewport",
                        content: "initial-scale=1.0, width=device-width"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "robots",
                        content: process.env.ENVIRONMENT === "production" ? "index, follow" : "noindex, nofollow",
                        title: "robots"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "googlebot",
                        content: process.env.ENVIRONMENT === "production" ? "index, follow, archive" : "noindex, nofollow, noarchive",
                        title: "googlebots"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "env",
                        content: process.env.ENVIRONMENT
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "color-scheme",
                        content: "dark light"
                    })
                ]
            }),
            layout,
            process.env.ENVIRONMENT === "dev" ? /*#__PURE__*/ jsx_runtime_.jsx(DevGrid, {}) : null
        ]
    });
};
/* harmony default export */ const components_Layout = (Layout);


/***/ })

};
;