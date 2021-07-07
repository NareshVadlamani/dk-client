import styled from "@emotion/styled";
import shouldForwardProp from "@styled-system/should-forward-prop";
import React from "react";
import {
  background,
  border,
  color,
  flexbox,
  layout,
  position,
  shadow,
  space,
  system,
  typography,
} from "styled-system";

const ccProps = ["showFor", "asCard"];

const forwardProp = (propName) =>
  shouldForwardProp(propName) && !ccProps.includes(propName);

const fontFamily = `'Roboto', sans-serif`;
const fontSize = "14px";

const Base = styled("div", { shouldForwardProp: forwardProp })(
  {
    fontFamily,
    fontSize,
  },
  space,
  layout,
  flexbox,
  color,
  typography,
  background,
  border,
  position,
  shadow
);

export const Select = styled("select", { shouldForwardProp: forwardProp })({
  fontFamily,
  fontSize,
});

export const Img = styled("img", { shouldForwardProp: forwardProp })(
  space,
  layout,
  background,
  border,
  position,
  shadow
);

// usage <Box showFor={[1, 0]}/>
const showForProp = (dflt) =>
  system({
    showFor: {
      property: "display",
      transform: (val) => (val ? dflt : "none"),
    },
  });

// usage <Box asCard />
const asCard = (props) => {
  return props.asCard
    ? {
        borderRadius: 10,
        boxShadow: "0 3px 10px 0 rgba(0, 0, 0, 0.08)",
        backgroundColor: "#ffffff",
      }
    : {};
};

export const Box = styled(Base)(asCard, showForProp("block"));
export const Flex = styled(Base)(
  { display: "flex" },
  asCard,
  showForProp("flex")
);
export const FlexWrap = styled(Base)(
  { display: "flex", flexWrap: "wrap" },
  asCard,
  showForProp("flex")
);
export const Spacer = styled("div", { shouldForwardProp: forwardProp })(space);

export function Grid(props) {
  // https://stackoverflow.com/a/39862756/73630
  const { gutter, itemWidth, children } = props;
  return (
    <FlexWrap justifyContent="flex-start" width={1}>
      {children}
    </FlexWrap>
  );
}
