import React from "react";
import { Box, Select } from "./utils";

export default function ProductFilter(props) {
  const { currencyList, updateCurrency } = props;
  return (
    <Box>
      <Select
        name="currency"
        style={{
          outline: "none",
          border: "1px solid #eee",
          borderRadius: "2px",
          fontSize: "14px",
          padding: "6px 0px 6px 7px",
          background: "none",
        }}
        onChange={(e) => updateCurrency(e.target.value)}
      >
        {currencyList &&
          currencyList.map((currency, i) => {
            return (
              <option key={i} value={currency}>
                {currency}
              </option>
            );
          })}
      </Select>
    </Box>
  );
}
