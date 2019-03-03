import React, { useState } from "react";
import { Spring, animated } from "react-spring/renderprops";
import { interpolate } from "flubber";
function MultiPathInterpolator({
  svgProps,
  gProps,
  interpolateConfig,
  pathGroups,
  springProps
}) {
  const [interpolatorsArray] = useState(
    pathGroups.map(pathGroup =>
      pathGroup.map((path, i, paths) =>
        interpolate(path, paths[i + 1] || paths[0], interpolateConfig)
      )
    )
  );
  const [index, updateIndex] = useState(0);
  return (
    <svg {...svgProps}>
      <g {...gProps}>
        <Spring
          reset
          native
          from={{ t: 0 }}
          to={{ t: 1 }}
          delay={1000}
          onRest={() => updateIndex(index + 1)}
          {...springProps}
        >
          {({ t }) => (
            <React.Fragment>
              {interpolatorsArray.map(interpolators => (
                <animated.path
                  key={Math.random()}
                  d={t.interpolate(interpolators[index % interpolators.length])}
                />
              ))}
            </React.Fragment>
          )}
        </Spring>
      </g>
    </svg>
  );
}
//<animated.path d={t.interpolate(interpolator)} />
export default MultiPathInterpolator;
