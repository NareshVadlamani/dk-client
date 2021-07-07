import React, { useEffect, useState } from "react";
import { Box, Grid } from "./utils";
import ProductBlock from "./productBlock";
import ProductFilter from "./productFilter";

const ACCESS_KEY = "8eb4507bd156ce3dae97f444d7333c7e";

const currencyList = ["EUR", "INR"];

const BASE_CURRENCY = "EUR";

export default function Product(props) {
  const [products, setProducts] = useState([]);
  const [currency, setCurrecncy] = useState("EUR");
  const [currencyRates, setCurrencyRates] = useState({});

  useEffect(() => {
    getCurrencyList();
  }, []);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        const prods = data.map((p) => {
          return { ...p, currency: "EUR" };
        });
        setProducts(prods);
      });
  }, []);

  useEffect(() => {
    updateCurrency();
  }, [currency]);

  const updateCurrency = () => {
    const priceChange = currencyRates["INR"];

    console.log("priceChange", { priceChange, currency, currencyRates });
    const newProducts = products.map((prod) => {
      const newPrice =
        currency === BASE_CURRENCY
          ? prod.price / priceChange
          : prod.price * priceChange;
      return { ...prod, price: newPrice.toFixed(2), currency: currency };
    });
    setProducts(newProducts);
  };

  const getCurrencyList = () => {
    const url = `http://api.exchangeratesapi.io/v1/latest?access_key=${ACCESS_KEY}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setCurrencyRates(data.rates);
      });
  };

  return (
    <Box>
      <Box textAlign="right" my={3}>
        <ProductFilter
          currencyList={currencyList}
          updateCurrency={(val) => setCurrecncy(val)}
        />
      </Box>
      <Box asCard={true} p={3}>
        <Grid gutter={[0]} itemWidth={[100]}>
          {products.map((prod) => {
            return <ProductBlock {...prod} />;
          })}
        </Grid>
      </Box>
    </Box>
  );
}
