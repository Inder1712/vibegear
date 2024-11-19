// src/app/order/page.tsx
"use client"; // Mark this file as a Client Component if you are using client-side hooks.

export default function Order() {
  return (
    <div className="h-screen flex justify-center items-center">
      <h1 className="text-4xl">Order Page</h1>
      <p className="text-lg mt-4">This is the order page. Here you can add order details and process payment.</p>
    </div>
  );
}
