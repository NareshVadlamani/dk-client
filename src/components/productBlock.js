import React from "react";
import { Box, Img } from "./utils";

export default function ProductBlock(props) {
  const { image, title, price, currency } = props;

  return (
    <Box width={200} px={3} py={2}>
      <Box
        flex={1}
        px={2}
        my={1}
        style={{
          display: "flex",
          alignItems: "center",
          width: "150px",
          margin: "auto",
          height: "150px",
        }}
      >
        <Img alt={title} src={image} width="100%" height="150px" />
      </Box>
      <Box
        flex={2}
        pt={3}
        px={3}
        color="#6e6f6e"
        textAlign="center"
        className="text-ellipsis"
      >
        {title}
      </Box>
      <Box flex={2} px={3} py={1} color="#6e6f6e" textAlign="center">
        {price} {currency}
      </Box>
    </Box>
  );
}
