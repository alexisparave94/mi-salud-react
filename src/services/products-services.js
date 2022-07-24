import apiClient from "./mi-salud-api-fetch";

export async function getProducts(){
  const products = await apiClient("products");
  return products;
}

export async function createProduct(newProduct){
  const product = await apiClient("products", { body: newProduct });
  return product;
}

export async function lastProduct(){
  const product = await apiClient("last");
  return product;
}