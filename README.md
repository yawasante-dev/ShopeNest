# ShopNest

A simple eCommerce mobile app built with React Native (Expo) for DCIT 324 Assignment 3, based on a Figma reference design.

## Features

- Product grid on the Home screen (reusable ProductCard component)
- Bottom tab navigation: Home, Cart, Profile
- Tapping a product opens a Product Details screen with its data passed via route params
- Quantity selector (+/-) on Product Details, using state
- Add to Cart button that adds items to a shared cart
- Cart screen showing added items, quantities, and total price

## Tech Stack

- React Native (Expo)
- React Navigation (bottom tabs + stack)
- React Context (cart state)

## Getting Started

```bash
npm install
npx expo start
```

Scan the QR code with Expo Go (Android) or the Camera app (iOS) to run it on your phone.

## Project Structure

```
components/    → ProductCard
context/       → CartContext
data/          → products.js (sample product data)
navigation/    → MainTabs, HomeStack
screens/       → HomeScreen, ProductDetailsScreen, CartScreen, ProfileScreen
```
