import { useState, useCallback, useEffect } from "react";
/*
 * Grid overlay for use during development.
 * Press `control + option g` to toggle.
 */

export default function DevGrid(/*props*/) {
  let [showMe, setShowMe] = useState(false);

  const toggle = useCallback((evt) => {
    if (evt.code === 'KeyG' && evt.altKey && evt.ctrlKey) {  //ctrl + opt + G
      showMe = !showMe
      setShowMe(showMe);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keyup", toggle, false);
    return function cleanup() {
      document.removeEventListener("keyup", toggle);
    };
  }, [showMe]);

  return (
    <>
      <div
        className="not-hidden absolute top-0 left-0 w-full h-full"
        style={{
          opacity: 0.25,
          color: 'red',
          zIndex: 999,
          pointerEvents: 'none',
          display: showMe ? "block" : "none"
        }}
        id="Grid-overlay"
      >
        <div className=" h-full">

          <svg className="w-full h-full">
            <pattern
              id="Grid-fine-pattern"
              width="80"
              height="80"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeDasharray="2 4"
              patternUnits="userSpaceOnUse"
            >
              <line x1="0" x2="0" y1="0" y2="80" strokeDasharray="0" />
              <line x1="16" x2="16" y1="0" y2="80" />
              <line x1="32" x2="32" y1="0" y2="80" />
              <line x1="48" x2="48" y1="0" y2="80" />
              <line x1="64" x2="64" y1="0" y2="80" />
              <line x1="80" x2="80" y1="0" y2="80" strokeDasharray="0" />

              <line y1="0" y2="0" x1="0" x2="80" strokeDasharray="0" />
              <line y1="16" y2="16" x1="0" x2="80" />
              <line y1="32" y2="32" x1="0" x2="80" />
              <line y1="48" y2="48" x1="0" x2="80" />
              <line y1="64" y2="64" x1="0" x2="80" />
              <line y1="80" y2="80" x1="0" x2="80" strokeDasharray="0" />
            </pattern>
            <pattern
              id="Grid-coarse-pattern"
              width="320"
              height="320"
              strokeWidth="2"
              patternUnits="userSpaceOnUse"
            >
              <rect width="320" height="320" fill="url(#Grid-fine-pattern)" />
              <line x1="0" x2="0" y1="0" y2="320" stroke="currentColor" />
              <line x1="320" x2="320" y1="0" y2="320" stroke="currentColor" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#Grid-coarse-pattern)" />
          </svg>
        </div>
      </div>
      {/* <script id="Grid-script">
          {`
          function showGrid() {
            let gridElm = document.getElementById('Grid-overlay');
            if (gridElm) {
              let isOn = window.getComputedStyle(gridElm).getPropertyValue('display') !== 'none';
              document.body.style.position = isOn ? 'relative' : '';
              document.addEventListener('keyup', function onKeyUp(evt) {
                if(evt.code === 'KeyG' && evt.altKey && evt.ctrlKey) {
                  isOn = window.getComputedStyle(gridElm).getPropertyValue('display') !== 'none';
                  document.body.style.position = isOn ? '' : 'relative';
                  gridElm.style.display = isOn ? 'none' : 'block';
                }
              });
            }
          }
          if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', showGrid);
          else showGrid();
          `}
        </script> */}

    </>
  );
}