// ============================================================
// RJD INKS & PRINTS
// APP.JSX
// ============================================================

import { useEffect, useState } from "react";
import "./App.css";

import Header from "./components/Header";
import ProductCard from "./components/ProductCard";

// ============================================================
// PRODUCT DATA
// ============================================================

const products = [
  // ==========================================================
  // PRINTING SERVICES
  // ==========================================================

  {
    id: 1,
    name: "Invitation Cards",
    category: "Printing Services",
    description:
      "Customized invitation cards for birthdays, weddings, christenings, and special events.",
    price: 0,
    unit: "per order",
  },

  {
    id: 2,
    name: "Photo Printing",
    category: "Printing Services",
    description:
      "High-quality photo printing in various sizes and finishes.",
    price: 0,
    unit: "per print",
  },

  {
    id: 3,
    name: "Certificates",
    category: "Printing Services",
    description:
      "Professional certificate printing for schools, organizations, businesses, and events.",
    price: 0,
    unit: "per piece",
  },

  // ==========================================================
  // BUSINESS ESSENTIALS
  // ==========================================================

  {
    id: 4,
    name: "Sintra Board (QR Code & Menu Display)",
    category: "Business Essentials",
    description:
      "Custom Sintra board displays for QR codes, menus, and business information.",
    price: 0,
    unit: "per piece",
  },

  {
    id: 5,
    name: "Care Cards",
    category: "Business Essentials",
    description:
      "Custom care instruction cards for products, businesses, and online shops.",
    price: 0,
    unit: "per order",
  },

  {
    id: 6,
    name: "Business / Calling Cards",
    category: "Business Essentials",
    description:
      "Professional business and calling cards customized for your brand.",
    price: 0,
    unit: "per order",
  },

  {
    id: 7,
    name: "Order Forms",
    category: "Business Essentials",
    description:
      "Customized order forms for businesses and online sellers.",
    price: 0,
    unit: "per order",
  },

  {
    id: 8,
    name: "Commercial Calendars",
    category: "Business Essentials",
    description:
      "Customized commercial calendars for businesses, promotions, and giveaways.",
    price: 0,
    unit: "per order",
  },

  {
    id: 9,
    name: "Prescription Pads (RX Pads)",
    category: "Business Essentials",
    description:
      "Custom prescription pads for doctors, clinics, and medical professionals.",
    price: 0,
    unit: "per order",
  },

  {
    id: 10,
    name: "Stickers & Labels",
    category: "Business Essentials",
    description:
      "Custom stickers and product labels for businesses, packaging, and events.",
    price: 0,
    unit: "per order",
  },

  {
    id: 11,
    name: "Medical Certificates",
    category: "Business Essentials",
    description:
      "Professional medical certificate printing for clinics and healthcare professionals.",
    price: 0,
    unit: "per order",
  },

  {
    id: 12,
    name: "Thank You Cards",
    category: "Business Essentials",
    description:
      "Personalized thank you cards for customers, orders, and businesses.",
    price: 0,
    unit: "per order",
  },

  {
    id: 13,
    name: "PVC Company IDs",
    category: "Business Essentials",
    description:
      "Durable PVC company identification cards customized for employees.",
    price: 0,
    unit: "per piece",
  },

  {
    id: 14,
    name: "Loyalty Cards",
    category: "Business Essentials",
    description:
      "Custom loyalty cards designed to help businesses reward returning customers.",
    price: 0,
    unit: "per order",
  },

  {
    id: 15,
    name: "Flyers",
    category: "Business Essentials",
    description:
      "Custom flyers for business promotions, announcements, events, and marketing.",
    price: 0,
    unit: "per order",
  },

  // ==========================================================
  // PERSONALIZED SOUVENIRS & EVENT ESSENTIALS
  // ==========================================================

  {
    id: 16,
    name: "Mini Sintra Board Display",
    category: "Personalized Souvenirs & Event Essentials",
    description:
      "Personalized mini Sintra board displays for souvenirs, events, and special occasions.",
    price: 0,
    unit: "per piece",
  },

  {
    id: 17,
    name: "Personalized Mugs",
    category: "Personalized Souvenirs & Event Essentials",
    description:
      "Customized mugs for gifts, souvenirs, giveaways, and special occasions.",
    price: 0,
    unit: "per piece",
  },

  {
    id: 18,
    name: "Acrylic Keychains",
    category: "Personalized Souvenirs & Event Essentials",
    description:
      "Customized acrylic keychains for souvenirs, giveaways, and events.",
    price: 0,
    unit: "per piece",
  },

  {
    id: 19,
    name: "PVC Bag Tags",
    category: "Personalized Souvenirs & Event Essentials",
    description:
      "Personalized PVC bag tags for gifts, events, and everyday use.",
    price: 0,
    unit: "per piece",
  },

  {
    id: 20,
    name: "Pocket Mirrors",
    category: "Personalized Souvenirs & Event Essentials",
    description:
      "Customized pocket mirrors perfect for souvenirs and personalized gifts.",
    price: 0,
    unit: "per piece",
  },

  {
    id: 21,
    name: "Ref Magnets",
    category: "Personalized Souvenirs & Event Essentials",
    description:
      "Customized refrigerator magnets for souvenirs, events, and business giveaways.",
    price: 0,
    unit: "per piece",
  },

  {
    id: 22,
    name: "Badge Pins",
    category: "Personalized Souvenirs & Event Essentials",
    description:
      "Customized badge pins for events, organizations, businesses, and giveaways.",
    price: 0,
    unit: "per piece",
  },

  {
    id: 23,
    name: "Card Holders",
    category: "Personalized Souvenirs & Event Essentials",
    description:
      "Customized card holders for IDs, business cards, and everyday use.",
    price: 0,
    unit: "per piece",
  },

  {
    id: 24,
    name: "Mini Combs",
    category: "Personalized Souvenirs & Event Essentials",
    description:
      "Personalized mini combs for souvenirs, giveaways, and events.",
    price: 0,
    unit: "per piece",
  },

  {
    id: 25,
    name: "Notepads",
    category: "Personalized Souvenirs & Event Essentials",
    description:
      "Customized notepads for businesses, events, gifts, and giveaways.",
    price: 0,
    unit: "per piece",
  },

  {
    id: 26,
    name: "Mini Alcohol Bottles",
    category: "Personalized Souvenirs & Event Essentials",
    description:
      "Personalized mini alcohol bottles for special events and giveaways.",
    price: 0,
    unit: "per piece",
  },

  {
    id: 27,
    name: "Transparent Candle Stickers",
    category: "Personalized Souvenirs & Event Essentials",
    description:
      "Customized transparent stickers for candles, souvenirs, and event giveaways.",
    price: 0,
    unit: "per order",
  },

  {
    id: 28,
    name: "Chip Bags (Custom Design)",
    category: "Personalized Souvenirs & Event Essentials",
    description:
      "Custom-designed chip bags for birthdays, parties, events, and giveaways.",
    price: 0,
    unit: "per order",
  },

  {
    id: 29,
    name: "Thank You Stickers",
    category: "Personalized Souvenirs & Event Essentials",
    description:
      "Personalized thank you stickers for product packaging, orders, and events.",
    price: 0,
    unit: "per order",
  },

  {
    id: 30,
    name: "Hang Tags",
    category: "Personalized Souvenirs & Event Essentials",
    description:
      "Custom hang tags for products, packaging, events, and businesses.",
    price: 0,
    unit: "per order",
  },

  {
    id: 31,
    name: "Customized Angpao",
    category: "Personalized Souvenirs & Event Essentials",
    description:
      "Personalized angpao designs for birthdays, weddings, holidays, and special occasions.",
    price: 0,
    unit: "per order",
  },

  {
    id: 32,
    name: "MemoRiBox Gift Set",
    category: "Personalized Souvenirs & Event Essentials",
    description:
      "Personalized MemoRiBox gift sets made for meaningful occasions and special celebrations.",
    price: 0,
    unit: "per set",
  },
];

// ============================================================
// CATEGORY DATA
// ============================================================

const categories = [
  {
    id: 1,
    icon: "🖨️",
    name: "Printing Services",
    description:
      "Invitation cards, photo printing, and professional certificate printing.",
  },

  {
    id: 2,
    icon: "💼",
    name: "Business Essentials",
    description:
      "Business cards, labels, forms, calendars, IDs, marketing materials, and other business needs.",
  },

  {
    id: 3,
    icon: "🎁",
    name: "Personalized Souvenirs & Event Essentials",
    description:
      "Personalized souvenirs, gifts, giveaways, and event essentials for special occasions.",
  },
];

// ============================================================
// MAIN APP
// ============================================================

function App() {
  // ==========================================================
  // CART
  // ==========================================================

  const [cart, setCart] = useState([]);

  // ==========================================================
  // CUSTOMER
  // ==========================================================

  const [customer, setCustomer] = useState({
    name: "",
    contact: "",
    email: "",
  });

  // ==========================================================
  // ORDER INFORMATION
  // ==========================================================

  const [orderInfo, setOrderInfo] = useState({
    orderType: "Pickup",
    dueDate: "",
    notes: "",
  });

  // ==========================================================
  // PAYMENT
  // ==========================================================

  const [discount, setDiscount] = useState(0);
  const [deliveryFee, setDeliveryFee] = useState(0);
  const [downpayment, setDownpayment] = useState(0);

  // ==========================================================
  // MODALS
  // ==========================================================

  const [showCheckout, setShowCheckout] = useState(false);
  const [completedOrder, setCompletedOrder] = useState(null);
  const [selectedOrder, setSelectedOrder] = useState(null);

  // ==========================================================
  // ORDER HISTORY
  // ==========================================================

  const [orders, setOrders] = useState(() => {
    try {
      const savedOrders = localStorage.getItem("rjdOrders");

      return savedOrders ? JSON.parse(savedOrders) : [];
    } catch {
      return [];
    }
  });

  const [orderSearch, setOrderSearch] = useState("");

  // ==========================================================
  // SAVE ORDERS
  // ==========================================================

  useEffect(() => {
    localStorage.setItem("rjdOrders", JSON.stringify(orders));
  }, [orders]);

  // ==========================================================
  // CUSTOMER CHANGE
  // ==========================================================

  const handleCustomerChange = (event) => {
    const { name, value } = event.target;

    setCustomer((current) => ({
      ...current,
      [name]: value,
    }));
  };

  // ==========================================================
  // ORDER CHANGE
  // ==========================================================

  const handleOrderInfoChange = (event) => {
    const { name, value } = event.target;

    setOrderInfo((current) => ({
      ...current,
      [name]: value,
    }));

    if (name === "orderType" && value === "Pickup") {
      setDeliveryFee(0);
    }
  };

  // ==========================================================
  // ADD TO CART
  // ==========================================================

  const addToCart = (product) => {
    setCart((currentCart) => {
      const existing = currentCart.find(
        (item) => item.id === product.id
      );

      if (existing) {
        return currentCart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        );
      }

      return [
        ...currentCart,
        {
          ...product,
          quantity: 1,
        },
      ];
    });
  };

  // ==========================================================
  // QUANTITY
  // ==========================================================

  const increaseQuantity = (id) => {
    setCart((currentCart) =>
      currentCart.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCart((currentCart) =>
      currentCart
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (id) => {
    setCart((currentCart) =>
      currentCart.filter((item) => item.id !== id)
    );
  };

  // ==========================================================
  // CLEAR ORDER
  // ==========================================================

  const clearOrder = () => {
    setCart([]);

    setCustomer({
      name: "",
      contact: "",
      email: "",
    });

    setOrderInfo({
      orderType: "Pickup",
      dueDate: "",
      notes: "",
    });

    setDiscount(0);
    setDeliveryFee(0);
    setDownpayment(0);
  };

  // ==========================================================
  // TOTALS
  // ==========================================================

  const cartItemCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const cartSubtotal = cart.reduce(
    (total, item) =>
      total + Number(item.price || 0) * item.quantity,
    0
  );

  const safeDiscount = Math.max(
    0,
    Number(discount) || 0
  );

  const safeDeliveryFee =
    orderInfo.orderType === "Delivery"
      ? Math.max(0, Number(deliveryFee) || 0)
      : 0;

  const grandTotal = Math.max(
    0,
    cartSubtotal - safeDiscount + safeDeliveryFee
  );

  const safeDownpayment = Math.min(
    grandTotal,
    Math.max(0, Number(downpayment) || 0)
  );

  const balance = Math.max(
    0,
    grandTotal - safeDownpayment
  );

  let paymentStatus = "UNPAID";

  if (
    safeDownpayment > 0 &&
    safeDownpayment < grandTotal
  ) {
    paymentStatus = "PARTIAL";
  }

  if (
    grandTotal > 0 &&
    safeDownpayment === grandTotal
  ) {
    paymentStatus = "PAID";
  }

  // ==========================================================
  // ORDER NUMBER
  // ==========================================================

  const generateOrderNumber = () => {
    const date = new Date();

    const year = date.getFullYear();

    const month = String(
      date.getMonth() + 1
    ).padStart(2, "0");

    const day = String(
      date.getDate()
    ).padStart(2, "0");

    const random = Math.floor(
      100 + Math.random() * 900
    );

    return `RJD-${year}${month}${day}-${random}`;
  };

  // ==========================================================
  // CHECKOUT
  // ==========================================================

  const openCheckout = () => {
    if (cart.length === 0) {
      alert("Please add at least one product.");
      return;
    }

    if (customer.name.trim() === "") {
      alert("Please enter the customer name.");
      return;
    }

    setShowCheckout(true);
  };

  // ==========================================================
  // CONFIRM ORDER
  // ==========================================================

  const confirmOrder = () => {
    const order = {
      id: Date.now(),

      orderNumber: generateOrderNumber(),

      date: new Date().toLocaleString(),

      customer: {
        ...customer,
      },

      orderInfo: {
        ...orderInfo,
      },

      items: cart.map((item) => ({
        ...item,
      })),

      subtotal: cartSubtotal,

      discount: safeDiscount,

      deliveryFee: safeDeliveryFee,

      grandTotal: grandTotal,

      downpayment: safeDownpayment,

      balance: balance,

      paymentStatus: paymentStatus,
    };

    setOrders((currentOrders) => [
      order,
      ...currentOrders,
    ]);

    setCompletedOrder(order);

    setShowCheckout(false);

    clearOrder();
  };

  // ==========================================================
  // DELETE ORDER
  // ==========================================================

  const deleteOrder = (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this order?"
    );

    if (!confirmed) {
      return;
    }

    setOrders((currentOrders) =>
      currentOrders.filter(
        (order) => order.id !== id
      )
    );

    if (
      selectedOrder &&
      selectedOrder.id === id
    ) {
      setSelectedOrder(null);
    }
  };

  // ==========================================================
  // SEARCH
  // ==========================================================

  const filteredOrders = orders.filter(
    (order) => {
      const search = orderSearch
        .toLowerCase()
        .trim();

      if (!search) {
        return true;
      }

      return (
        order.orderNumber
          .toLowerCase()
          .includes(search) ||
        order.customer.name
          .toLowerCase()
          .includes(search) ||
        order.customer.contact
          .toLowerCase()
          .includes(search)
      );
    }
  );

  // ==========================================================
  // PRINT RECEIPT
  // ==========================================================

  const printReceipt = () => {
    const receipt = document.querySelector(
      ".receipt-modal"
    );

    if (!receipt) {
      alert("Receipt is not available.");
      return;
    }

    window.print();
  };

  // ==========================================================
  // RETURN
  // ==========================================================

  return (
    <div className="app">
      <Header />

      <main>
        {/* ==================================================
            HERO
        ================================================== */}

        <section
          id="home"
          className="hero"
        >
          <div className="container hero-content">
            <div className="hero-text">
              <span className="eyebrow">
                RJD INKS & PRINTS
              </span>

              <h1>
                Print your ideas.
                <br />
                <span>
                  Make them memorable.
                </span>
              </h1>

              <p>
                Quality printing, business essentials,
                and personalized products made especially
                for your business and special occasions.
              </p>

              <div className="hero-buttons">
                <a
                  href="#products"
                  className="primary-button"
                >
                  Browse Products
                </a>

                <a
                  href="#contact"
                  className="secondary-button"
                >
                  Request a Quote
                </a>
              </div>

              <div className="hero-info">
                <span>
                  ✓ Custom Designs
                </span>

                <span>
                  ✓ Bulk Orders
                </span>

                <span>
                  ✓ Nationwide Shipping
                </span>
              </div>
            </div>

            <div className="hero-card">
              <div className="hero-card-inner">
                <div className="sparkle">
                  ✦
                </div>

                <div className="hero-card-logo">
                  RJD
                </div>

                <h2>
                  Inks & Prints
                </h2>

                <p>
                  Printing • Crafts • Personalized Products
                </p>

                <div className="hero-card-line" />

                <small>
                  Made with care for your business.
                </small>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================
            CATEGORIES
        ================================================== */}

        <section
          id="categories"
          className="section"
        >
          <div className="container">
            <div className="section-heading">
              <span className="section-label">
                WHAT WE OFFER
              </span>

              <h2>
                Explore Our Categories
              </h2>

              <p>
                Find the printing and personalized products
                you need for your business, events, and
                special occasions.
              </p>
            </div>

            <div className="category-grid">
              {categories.map(
                (category) => (
                  <div
                    className="category-card"
                    key={category.id}
                  >
                    <div className="category-icon">
                      {category.icon}
                    </div>

                    <h3>
                      {category.name}
                    </h3>

                    <p>
                      {category.description}
                    </p>

                    <a href="#products">
                      View Products →
                    </a>
                  </div>
                )
              )}
            </div>
          </div>
        </section>

        {/* ==================================================
            PRODUCTS
        ================================================== */}

        <section
          id="products"
          className="section products-section"
        >
          <div className="container">
            <div className="section-heading product-heading">
              <div>
                <span className="section-label">
                  FEATURED PRODUCTS
                </span>

                <h2>
                  Popular Products
                </h2>
              </div>

              <a
                href="#products"
                className="view-all"
              >
                View All Products →
              </a>
            </div>

            <div className="product-grid">
              {products.map(
                (product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    addToCart={addToCart}
                  />
                )
              )}
            </div>
          </div>
        </section>

        {/* ==================================================
            ORDER
        ================================================== */}

        <section
          id="order"
          className="order-section"
        >
          <div className="container">
            <div className="section-heading">
              <span className="section-label">
                CURRENT ORDER
              </span>

              <h2>
                Your Order
              </h2>

              <p>
                {cartItemCount} item
                {cartItemCount !== 1
                  ? "s"
                  : ""}
              </p>
            </div>

            {/* CUSTOMER */}

            <div className="pos-card">
              <div className="pos-card-header">
                <span className="section-label">
                  CUSTOMER INFORMATION
                </span>

                <h3>
                  Customer Details
                </h3>
              </div>

              <div className="form-grid">
                <div className="form-group">
                  <label>
                    Customer Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={customer.name}
                    onChange={
                      handleCustomerChange
                    }
                    placeholder="Enter customer name"
                  />
                </div>

                <div className="form-group">
                  <label>
                    Contact Number
                  </label>

                  <input
                    type="tel"
                    name="contact"
                    value={customer.contact}
                    onChange={
                      handleCustomerChange
                    }
                    placeholder="09XXXXXXXXX"
                  />
                </div>

                <div className="form-group">
                  <label>
                    Email
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={customer.email}
                    onChange={
                      handleCustomerChange
                    }
                    placeholder="customer@email.com"
                  />
                </div>
              </div>
            </div>

            {/* ORDER INFORMATION */}

            <div className="pos-card">
              <div className="pos-card-header">
                <span className="section-label">
                  ORDER INFORMATION
                </span>

                <h3>
                  Order Details
                </h3>
              </div>

              <div className="form-grid">
                <div className="form-group">
                  <label>
                    Order Type
                  </label>

                  <select
                    name="orderType"
                    value={
                      orderInfo.orderType
                    }
                    onChange={
                      handleOrderInfoChange
                    }
                  >
                    <option value="Pickup">
                      Pickup
                    </option>

                    <option value="Delivery">
                      Delivery
                    </option>
                  </select>
                </div>

                <div className="form-group">
                  <label>
                    Due Date
                  </label>

                  <input
                    type="date"
                    name="dueDate"
                    value={
                      orderInfo.dueDate
                    }
                    onChange={
                      handleOrderInfoChange
                    }
                  />
                </div>

                {orderInfo.orderType ===
                  "Delivery" && (
                    <div className="form-group">
                      <label>
                        Delivery Fee
                      </label>

                      <input
                        type="number"
                        min="0"
                        value={deliveryFee}
                        onChange={(event) =>
                          setDeliveryFee(
                            event.target.value
                          )
                        }
                      />
                    </div>
                  )}
              </div>

              <div className="form-group">
                <label>
                  Customer Notes / Order Notes
                </label>

                <textarea
                  name="notes"
                  value={
                    orderInfo.notes
                  }
                  onChange={
                    handleOrderInfoChange
                  }
                  placeholder="Enter special instructions..."
                  rows="4"
                />
              </div>
            </div>

            {/* ITEMS */}

            <div className="pos-card">
              <div className="pos-card-header">
                <span className="section-label">
                  ORDER ITEMS
                </span>

                <h3>
                  Products
                </h3>
              </div>

              <div className="order-list">
                {cart.length === 0 ? (
                  <div className="empty-cart">
                    <p>
                      🛒 Your order is currently empty.
                    </p>

                    <a
                      href="#products"
                      className="primary-button"
                    >
                      Browse Products
                    </a>
                  </div>
                ) : (
                  cart.map(
                    (item) => (
                      <div
                        className="order-item"
                        key={item.id}
                      >
                        <div className="order-item-info">
                          <strong>
                            {item.name}
                          </strong>

                          <p>
                            ₱{item.price} /{" "}
                            {item.unit}
                          </p>

                          <p>
                            Subtotal: ₱
                            {item.price *
                              item.quantity}
                          </p>
                        </div>

                        <div className="order-item-controls">
                          <button
                            type="button"
                            onClick={() =>
                              decreaseQuantity(
                                item.id
                              )
                            }
                          >
                            −
                          </button>

                          <span>
                            {item.quantity}
                          </span>

                          <button
                            type="button"
                            onClick={() =>
                              increaseQuantity(
                                item.id
                              )
                            }
                          >
                            +
                          </button>
                        </div>

                        <strong>
                          ₱
                          {item.price *
                            item.quantity}
                        </strong>

                        <button
                          type="button"
                          className="remove-item"
                          onClick={() =>
                            removeFromCart(
                              item.id
                            )
                          }
                        >
                          Remove
                        </button>
                      </div>
                    )
                  )
                )}
              </div>
            </div>

            {/* PAYMENT */}

            <div className="pos-card">
              <div className="pos-card-header">
                <span className="section-label">
                  PAYMENT
                </span>

                <h3>
                  Order Summary
                </h3>
              </div>

              <div className="payment-grid">
                <div className="summary-row">
                  <span>
                    Subtotal
                  </span>

                  <strong>
                    ₱{cartSubtotal}
                  </strong>
                </div>

                <div className="form-group">
                  <label>
                    Discount
                  </label>

                  <input
                    type="number"
                    min="0"
                    value={discount}
                    onChange={(event) =>
                      setDiscount(
                        event.target.value
                      )
                    }
                  />
                </div>

                <div className="summary-row">
                  <span>
                    Delivery Fee
                  </span>

                  <strong>
                    ₱{safeDeliveryFee}
                  </strong>
                </div>

                <div className="summary-row grand-total">
                  <span>
                    Grand Total
                  </span>

                  <strong>
                    ₱{grandTotal}
                  </strong>
                </div>

                <div className="form-group">
                  <label>
                    Downpayment
                  </label>

                  <input
                    type="number"
                    min="0"
                    max={grandTotal}
                    value={downpayment}
                    onChange={(event) =>
                      setDownpayment(
                        event.target.value
                      )
                    }
                  />
                </div>

                <div className="summary-row balance-row">
                  <span>
                    Remaining Balance
                  </span>

                  <strong>
                    ₱{balance}
                  </strong>
                </div>

                <div className="summary-row">
                  <span>
                    Payment Status
                  </span>

                  <strong>
                    {paymentStatus}
                  </strong>
                </div>
              </div>
            </div>

            {cart.length > 0 && (
              <div className="order-actions">
                <button
                  type="button"
                  className="secondary-button"
                  onClick={
                    clearOrder
                  }
                >
                  Clear Order
                </button>

                <button
                  type="button"
                  className="primary-button"
                  onClick={
                    openCheckout
                  }
                >
                  Checkout
                </button>
              </div>
            )}
          </div>
        </section>

        {/* ==================================================
            ORDER HISTORY
        ================================================== */}

        <section
          id="orders"
          className="section order-history-section"
        >
          <div className="container">
            <div className="section-heading">
              <span className="section-label">
                POS RECORDS
              </span>

              <h2>
                Order History
              </h2>

              <p>
                View and manage your completed orders.
              </p>
            </div>

            <div className="order-history-toolbar">
              <input
                type="search"
                value={
                  orderSearch
                }
                onChange={(event) =>
                  setOrderSearch(
                    event.target.value
                  )
                }
                placeholder="Search order number, customer name, or contact..."
              />

              <strong>
                {orders.length}{" "}
                {orders.length === 1
                  ? "Order"
                  : "Orders"}
              </strong>
            </div>

            {filteredOrders.length === 0 ? (
              <div className="no-orders">
                <div className="no-orders-icon">
                  📋
                </div>

                <h3>
                  No Orders Found
                </h3>

                <p>
                  Completed orders will appear here.
                </p>
              </div>
            ) : (
              <div className="order-history-list">
                {filteredOrders.map(
                  (order) => (
                    <div
                      className="history-card"
                      key={order.id}
                    >
                      <div className="history-card-header">
                        <div>
                          <span className="history-order-number">
                            {order.orderNumber}
                          </span>

                          <small>
                            {order.date}
                          </small>
                        </div>

                        <span
                          className={`payment-status ${order.paymentStatus.toLowerCase()}`}
                        >
                          {order.paymentStatus}
                        </span>
                      </div>

                      <div className="history-card-body">
                        <div>
                          <span>
                            Customer
                          </span>

                          <strong>
                            {order.customer.name}
                          </strong>
                        </div>

                        <div>
                          <span>
                            Items
                          </span>

                          <strong>
                            {order.items.reduce(
                              (total, item) =>
                                total +
                                item.quantity,
                              0
                            )}
                          </strong>
                        </div>

                        <div>
                          <span>
                            Total
                          </span>

                          <strong>
                            ₱
                            {order.grandTotal}
                          </strong>
                        </div>

                        <div>
                          <span>
                            Balance
                          </span>

                          <strong>
                            ₱
                            {order.balance}
                          </strong>
                        </div>
                      </div>

                      <div className="history-card-actions">
                        <button
                          type="button"
                          className="secondary-button"
                          onClick={() =>
                            setSelectedOrder(
                              order
                            )
                          }
                        >
                          View Order
                        </button>

                        <button
                          type="button"
                          className="delete-order-button"
                          onClick={() =>
                            deleteOrder(
                              order.id
                            )
                          }
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  )
                )}
              </div>
            )}
          </div>
        </section>

        {/* ==================================================
            ABOUT
        ================================================== */}

        <section
          id="about"
          className="about-section"
        >
          <div className="container about-content">
            <div>
              <span className="section-label">
                ABOUT RJD
              </span>

              <h2>
                Made with care for your business.
              </h2>
            </div>

            <div>
              <p>
                RJD Inks & Prints provides printing,
                business essentials, crafts, and
                personalized products for businesses,
                events, and special occasions.
              </p>

              <p>
                We offer customized products, bulk orders,
                and nationwide shipping.
              </p>
            </div>
          </div>
        </section>

        {/* ==================================================
            CONTACT
        ================================================== */}

        <section
          id="contact"
          className="contact-section"
        >
          <div className="container contact-content">
            <div>
              <span className="section-label">
                LET'S WORK TOGETHER
              </span>

              <h2>
                Need a custom order?
              </h2>

              <p>
                Send us your requirements and we'll
                help you create the perfect order.
              </p>
            </div>

            <div className="contact-buttons">
              <a
                href="mailto:rjd.inksandprints@gmail.com"
                className="primary-button"
              >
                Request a Quote
              </a>

              <a
                href="https://www.facebook.com/RJDInksAndPrints/"
                className="secondary-button"
                target="_blank"
                rel="noreferrer"
              >
                Facebook
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* ====================================================
          FOOTER
      ==================================================== */}

      <footer className="footer">
        <div className="container footer-grid">
          <div>
            <div className="footer-logo">
              RJD Inks & Prints
            </div>

            <p>
              Printing • Crafts • Personalized Products
            </p>

            <p>
              Made with care for your business.
            </p>
          </div>

          <div>
            <h4>
              Quick Links
            </h4>

            <a href="#home">
              Home
            </a>

            <a href="#categories">
              Categories
            </a>

            <a href="#products">
              Products
            </a>

            <a href="#order">
              New Order
            </a>

            <a href="#orders">
              Order History
            </a>

            <a href="#about">
              About Us
            </a>
          </div>

          <div>
            <h4>
              Contact
            </h4>

            <p>
              Marilao, Bulacan
            </p>

            <p>
              Nationwide Shipping
            </p>

            <p>
              rjd.inksandprints@gmail.com
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="container">
            ©{" "}
            {new Date().getFullYear()}{" "}
            RJD Inks & Prints.
            All rights reserved.
          </div>
        </div>
      </footer>

      {/* ====================================================
          CHECKOUT MODAL
      ==================================================== */}

      {showCheckout && (
        <div className="checkout-overlay">
          <div className="checkout-modal">
            <div className="checkout-header">
              <div>
                <span className="section-label">
                  REVIEW ORDER
                </span>

                <h2>
                  Confirm Your Order
                </h2>
              </div>

              <button
                type="button"
                className="checkout-close"
                onClick={() =>
                  setShowCheckout(false)
                }
              >
                ×
              </button>
            </div>

            <div className="checkout-section">
              <h3>
                Customer
              </h3>

              <p>
                <strong>Name:</strong>{" "}
                {customer.name}
              </p>

              <p>
                <strong>Contact:</strong>{" "}
                {customer.contact ||
                  "Not provided"}
              </p>

              {customer.email && (
                <p>
                  <strong>Email:</strong>{" "}
                  {customer.email}
                </p>
              )}
            </div>

            <div className="checkout-section">
              <h3>
                Order Details
              </h3>

              <p>
                <strong>Order Type:</strong>{" "}
                {orderInfo.orderType}
              </p>

              <p>
                <strong>Due Date:</strong>{" "}
                {orderInfo.dueDate ||
                  "Not specified"}
              </p>
            </div>

            <div className="checkout-section">
              <h3>
                Products
              </h3>

              <div className="checkout-items">
                {cart.map(
                  (item) => (
                    <div
                      className="checkout-item"
                      key={item.id}
                    >
                      <div>
                        <strong>
                          {item.name}
                        </strong>

                        <span>
                          {item.quantity} × ₱
                          {item.price}
                        </span>
                      </div>

                      <strong>
                        ₱
                        {item.price *
                          item.quantity}
                      </strong>
                    </div>
                  )
                )}
              </div>
            </div>

            <div className="checkout-total">
              <div>
                <span>
                  Subtotal
                </span>

                <strong>
                  ₱{cartSubtotal}
                </strong>
              </div>

              <div>
                <span>
                  Discount
                </span>

                <strong>
                  − ₱{safeDiscount}
                </strong>
              </div>

              <div>
                <span>
                  Delivery Fee
                </span>

                <strong>
                  ₱{safeDeliveryFee}
                </strong>
              </div>

              <div className="checkout-grand-total">
                <span>
                  Grand Total
                </span>

                <strong>
                  ₱{grandTotal}
                </strong>
              </div>

              <div>
                <span>
                  Downpayment
                </span>

                <strong>
                  ₱{safeDownpayment}
                </strong>
              </div>

              <div>
                <span>
                  Balance
                </span>

                <strong>
                  ₱{balance}
                </strong>
              </div>

              <div>
                <span>
                  Status
                </span>

                <strong>
                  {paymentStatus}
                </strong>
              </div>
            </div>

            {orderInfo.notes && (
              <div className="checkout-section">
                <h3>
                  Notes
                </h3>

                <p>
                  {orderInfo.notes}
                </p>
              </div>
            )}

            <div className="checkout-actions">
              <button
                type="button"
                className="secondary-button"
                onClick={() =>
                  setShowCheckout(false)
                }
              >
                Back
              </button>

              <button
                type="button"
                className="primary-button"
                onClick={
                  confirmOrder
                }
              >
                Confirm Order
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ====================================================
          ORDER CREATED
      ==================================================== */}

      {completedOrder && (
        <div className="checkout-overlay">
          <div className="checkout-modal success-modal">
            <div className="success-icon">
              ✓
            </div>

            <span className="section-label">
              ORDER CREATED
            </span>

            <h2>
              Order Confirmed!
            </h2>

            <p>
              Your order has been successfully created.
            </p>

            <div className="order-number">
              <span>
                Order Number
              </span>

              <strong>
                {completedOrder.orderNumber}
              </strong>
            </div>

            <div className="success-summary">
              <div>
                <span>
                  Customer
                </span>

                <strong>
                  {completedOrder.customer.name}
                </strong>
              </div>

              <div>
                <span>
                  Total
                </span>

                <strong>
                  ₱{completedOrder.grandTotal}
                </strong>
              </div>

              <div>
                <span>
                  Downpayment
                </span>

                <strong>
                  ₱{completedOrder.downpayment}
                </strong>
              </div>

              <div>
                <span>
                  Balance
                </span>

                <strong>
                  ₱{completedOrder.balance}
                </strong>
              </div>
            </div>

            <div className="checkout-actions">
              <button
                type="button"
                className="primary-button"
                onClick={() =>
                  setCompletedOrder(null)
                }
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ====================================================
          80MM RECEIPT / VIEW ORDER
      ==================================================== */}

      {selectedOrder && (
        <div className="checkout-overlay receipt-overlay">
          <div className="receipt-modal">
            {/* RECEIPT HEADER */}

            <div className="receipt-header">
              <div className="receipt-business-name">
                RJD INKS & PRINTS
              </div>

              <div className="receipt-business-subtitle">
                Printing • Crafts • Personalized Products
              </div>

              <div className="receipt-business-location">
                Marilao, Bulacan
              </div>

              <div className="receipt-business-contact">
                rjd.inksandprints@gmail.com
              </div>
            </div>

            <div className="receipt-divider">
              --------------------------------
            </div>

            {/* ORDER INFORMATION */}

            <div className="receipt-info">
              <div>
                <span>
                  Order No.
                </span>

                <strong>
                  {selectedOrder.orderNumber}
                </strong>
              </div>

              <div>
                <span>
                  Date
                </span>

                <strong>
                  {selectedOrder.date}
                </strong>
              </div>

              <div>
                <span>
                  Customer
                </span>

                <strong>
                  {selectedOrder.customer.name}
                </strong>
              </div>

              {selectedOrder.customer.contact && (
                <div>
                  <span>
                    Contact
                  </span>

                  <strong>
                    {selectedOrder.customer.contact}
                  </strong>
                </div>
              )}

              <div>
                <span>
                  Order Type
                </span>

                <strong>
                  {selectedOrder.orderInfo.orderType}
                </strong>
              </div>

              {selectedOrder.orderInfo.dueDate && (
                <div>
                  <span>
                    Due Date
                  </span>

                  <strong>
                    {selectedOrder.orderInfo.dueDate}
                  </strong>
                </div>
              )}
            </div>

            <div className="receipt-divider">
              --------------------------------
            </div>

            {/* ITEMS */}

            <div className="receipt-items">
              <div className="receipt-items-heading">
                <span>
                  ITEM
                </span>

                <span>
                  QTY
                </span>

                <span>
                  AMOUNT
                </span>
              </div>

              {selectedOrder.items.map(
                (item) => (
                  <div
                    className="receipt-item"
                    key={item.id}
                  >
                    <div className="receipt-item-name">
                      {item.name}
                    </div>

                    <div className="receipt-item-qty">
                      {item.quantity}
                    </div>

                    <div className="receipt-item-amount">
                      ₱
                      {Number(
                        item.price *
                          item.quantity
                      ).toLocaleString()}
                    </div>
                  </div>
                )
              )}
            </div>

            <div className="receipt-divider">
              --------------------------------
            </div>

            {/* TOTALS */}

            <div className="receipt-totals">
              <div>
                <span>
                  Subtotal
                </span>

                <strong>
                  ₱
                  {Number(
                    selectedOrder.subtotal
                  ).toLocaleString()}
                </strong>
              </div>

              <div>
                <span>
                  Discount
                </span>

                <strong>
                  -₱
                  {Number(
                    selectedOrder.discount
                  ).toLocaleString()}
                </strong>
              </div>

              <div>
                <span>
                  Delivery
                </span>

                <strong>
                  ₱
                  {Number(
                    selectedOrder.deliveryFee
                  ).toLocaleString()}
                </strong>
              </div>

              <div className="receipt-total-main">
                <span>
                  TOTAL
                </span>

                <strong>
                  ₱
                  {Number(
                    selectedOrder.grandTotal
                  ).toLocaleString()}
                </strong>
              </div>

              <div>
                <span>
                  Downpayment
                </span>

                <strong>
                  ₱
                  {Number(
                    selectedOrder.downpayment
                  ).toLocaleString()}
                </strong>
              </div>

              <div className="receipt-balance">
                <span>
                  BALANCE
                </span>

                <strong>
                  ₱
                  {Number(
                    selectedOrder.balance
                  ).toLocaleString()}
                </strong>
              </div>
            </div>

            {/* PAYMENT STATUS */}

            <div className="receipt-payment-status">
              PAYMENT STATUS:{" "}
              {selectedOrder.paymentStatus}
            </div>

            {/* NOTES */}

            {selectedOrder.orderInfo.notes && (
              <>
                <div className="receipt-divider">
                  --------------------------------
                </div>

                <div className="receipt-notes">
                  <strong>
                    NOTES
                  </strong>

                  <p>
                    {selectedOrder.orderInfo.notes}
                  </p>
                </div>
              </>
            )}

            {/* FOOTER */}

            <div className="receipt-footer">
              <div>
                Thank you for your order!
              </div>

              <div>
                We appreciate your support.
              </div>

              <div className="receipt-footer-brand">
                RJD Inks & Prints
              </div>
            </div>

            {/* BUTTONS */}

            <div className="receipt-actions">
              <button
                type="button"
                className="secondary-button"
                onClick={() =>
                  setSelectedOrder(null)
                }
              >
                Close
              </button>

              <button
                type="button"
                className="primary-button"
                onClick={
                  printReceipt
                }
              >
                🖨️ Print Receipt
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ============================================================
// EXPORT
// ============================================================

export default App;