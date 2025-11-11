// src/pages/ShopPage.jsx
import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

/* ────────────────────────────────────── TOAST ────────────────────────────────────── */
const Toast = ({ msg, type = "success", onClose }) => {
  useEffect(() => {
    const t = setTimeout(onClose, 3000);
    return () => clearTimeout(t);
  }, [onClose]);

  return (
    <div
      className="fixed bottom-5 right-5 px-6 py-3 rounded-full shadow-xl text-white font-medium animate-fade-in z-50"
      style={{
        backgroundColor: type === "success" ? "#185a82" : "#e74c3c",
      }}
    >
      {msg}
    </div>
  );
};

/* ────────────────────────────────────── CART SUMMARY (inline) ────────────────────────────────────── */
const CartSummary = ({
  cart,
  total,
  openCartModal,
  removeItem,
  updateQty,
}) => {
  const itemCount = cart.reduce((s, i) => s + i.quantity, 0);

  if (itemCount === 0) return null;

  return (
    <div className="mt-8 p-6 rounded-2xl shadow-lg bg-white/80 backdrop-blur-sm" style={{ border: "1px solid #185a82" }}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-bold text-xl" style={{ color: "#3c3333" }}>
          Your Cart ({itemCount})
        </h3>
        <button
          onClick={openCartModal}
          className="text-sm underline"
          style={{ color: "#185a82" }}
        >
          Edit
        </button>
      </div>

      <div className="space-y-3 max-h-64 overflow-y-auto">
        {cart.map((it) => (
          <div
            key={it.id}
            className="flex items-center gap-3 py-2 border-b last:border-0"
            style={{ borderColor: "#e5e7eb" }}
          >
            <img src={it.image} alt={it.title} className="w-12 h-12 object-cover rounded-lg" />
            <div className="flex-1">
              <p className="font-medium text-sm line-clamp-1" style={{ color: "#3c3333" }}>
                {it.title}
              </p>
              <p className="text-xs" style={{ color: "#4b5563" }}>
                {it.quantity} × ${it.price.toFixed(2)}
              </p>
            </div>
            <button
              onClick={() => removeItem(it.id)}
              className="text-red-600 hover:text-red-800"
            >
              ×
            </button>
          </div>
        ))}
      </div>

      <div className="mt-4 pt-4 border-t flex justify-between font-bold text-lg" style={{ borderColor: "#185a82" }}>
        <span style={{ color: "#3c3333" }}>Total</span>
        <span style={{ color: "#185a82" }}>${total}</span>
      </div>

      <button
        onClick={openCartModal}
        className="mt-4 w-full py-3 rounded-full font-semibold text-white transition-all hover:shadow-lg"
        style={{ backgroundColor: "#185a82" }}
        onMouseEnter={(e) => (e.target.style.backgroundColor = "#134a6b")}
        onMouseLeave={(e) => (e.target.style.backgroundColor = "#185a82")}
      >
        Review & Checkout
      </button>
    </div>
  );
};

/* ────────────────────────────────────── CART MODAL (full edit) ────────────────────────────────────── */
const CartModal = ({
  open,
  onClose,
  cart,
  updateQty,
  removeItem,
  total,
  openComingSoon,
}) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
      <div
        className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl w-full max-w-2xl max-h-[85vh] overflow-y-auto"
        style={{ border: "1px solid #185a82" }}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b" style={{ borderColor: "#185a82" }}>
          <h2 className="text-2xl font-bold" style={{ color: "#3c3333" }}>
            Your Cart ({cart.reduce((s, i) => s + i.quantity, 0)})
          </h2>
          <button onClick={onClose} className="text-3xl text-gray-600 hover:text-gray-900">
            ×
          </button>
        </div>

        {/* Body */}
        <div className="p-6">
          {cart.length === 0 ? (
            <p className="text-center py-12 text-lg" style={{ color: "#3c3333" }}>
              Your cart is empty.
            </p>
          ) : (
            <>
              {cart.map((it) => (
                <div
                  key={it.id}
                  className="flex gap-4 py-4 border-b last:border-0"
                  style={{ borderColor: "#e5e7eb" }}
                >
                  <img
                    src={it.image}
                    alt={it.title}
                    className="w-20 h-20 object-cover rounded-xl"
                  />
                  <div className="flex-1">
                    <h4 className="font-semibold text-base" style={{ color: "#3c3333" }}>
                      {it.title}
                    </h4>
                    <p className="text-sm" style={{ color: "#4b5563" }}>
                      {it.format}
                    </p>
                    <p className="font-bold mt-1" style={{ color: "#185a82" }}>
                      ${it.price.toFixed(2)}
                    </p>
                  </div>

                  {/* Qty */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => updateQty(it.id, it.quantity - 1)}
                      disabled={it.quantity <= 1}
                      className="w-9 h-9 rounded-full border flex items-center justify-center disabled:opacity-40"
                      style={{ borderColor: "#185a82", color: "#185a82" }}
                    >
                      −
                    </button>
                    <span className="w-9 text-center font-medium">{it.quantity}</span>
                    <button
                      onClick={() => updateQty(it.id, it.quantity + 1)}
                      className="w-9 h-9 rounded-full border flex items-center justify-center"
                      style={{ borderColor: "#185a82", color: "#185a82" }}
                    >
                      +
                    </button>
                  </div>

                  <button
                    onClick={() => removeItem(it.id)}
                    className="text-red-600 hover:text-red-800 ml-2"
                  >
                    ×
                  </button>
                </div>
              ))}

              {/* Total + CTA */}
              <div className="mt-6 pt-4 border-t" style={{ borderColor: "#185a82" }}>
                <div className="flex justify-between text-xl font-bold mb-4">
                  <span style={{ color: "#3c3333" }}>Total</span>
                  <span style={{ color: "#185a82" }}>${total}</span>
                </div>
                <button
                  onClick={openComingSoon}
                  className="w-full py-3 rounded-full font-semibold text-white transition-all hover:shadow-lg"
                  style={{ backgroundColor: "#185a82" }}
                  onMouseEnter={(e) => (e.target.style.backgroundColor = "#134a6b")}
                  onMouseLeave={(e) => (e.target.style.backgroundColor = "#185a82")}
                >
                  Proceed to Checkout
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

/* ────────────────────────────────────── PRODUCT MODAL ────────────────────────────────────── */
const ProductModal = ({ product, open, onClose, addToCart }) => {
  if (!open || !product) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
      <div
        className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto"
        style={{ border: "1px solid #185a82" }}
      >
        <div className="flex items-center justify-between p-6 border-b" style={{ borderColor: "#185a82" }}>
          <h2 className="text-2xl font-bold" style={{ color: "#3c3333" }}>
            {product.title}
          </h2>
          <button onClick={onClose} className="text-3xl text-gray-600 hover:text-gray-900">
            ×
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-6 p-6">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-80 object-cover rounded-xl"
          />
          <div className="flex flex-col justify-between">
            <div>
              <p className="text-lg mb-3" style={{ color: "#3c3333" }}>
                <strong>Format:</strong> {product.format}
              </p>
              <p className="text-lg mb-3" style={{ color: "#3c3333" }}>
                <strong>Category:</strong> {product.category}
              </p>
              <p className="text-3xl font-bold mb-6" style={{ color: "#185a82" }}>
                ${product.price.toFixed(2)}
              </p>
            </div>
            <button
              onClick={() => {
                addToCart(product);
                onClose();
              }}
              className="w-full py-3 rounded-full font-semibold text-white transition-all hover:shadow-lg"
              style={{ backgroundColor: "#185a82" }}
              onMouseEnter={(e) => (e.target.style.backgroundColor = "#134a6b")}
              onMouseLeave={(e) => (e.target.style.backgroundColor = "#185a82")}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ────────────────────────────────────── COMING SOON MODAL ────────────────────────────────────── */
const ComingSoonModal = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
      <div
        className="bg-gradient-to-br from-white to-[#f1f8fb] rounded-2xl shadow-2xl max-w-md w-full p-8 text-center"
        style={{ border: "1px solid #185a82" }}
      >
        <div className="mb-6">
          <div className="mx-auto w-20 h-20 bg-[#185a82]/10 rounded-full flex items-center justify-center">
            <svg className="w-12 h-12 text-[#185a82]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>
        <h3 className="text-2xl font-bold mb-3" style={{ color: "#3c3333" }}>
          Checkout Under Development
        </h3>
        <p className="mb-6 text-base" style={{ color: "#4b5563" }}>
          This feature is being built. You can still browse, add items to cart, and view products.
        </p>
        <button
          onClick={onClose}
          className="px-8 py-3 rounded-full font-semibold text-white transition-all hover:shadow-lg"
          style={{ backgroundColor: "#185a82" }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#134a6b")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "#185a82")}
        >
          Got it
        </button>
      </div>
    </div>
  );
};

/* ────────────────────────────────────── UNDER CONSTRUCTION BANNER ────────────────────────────────────── */
const UnderConstructionBanner = () => (
  <div className="bg-gradient-to-r from-[#185a82] to-[#134a6b] text-white py-3 px-6 text-center font-medium">
    <span role="img" aria-label="construction" className="mr-2">Under Construction</span>
    Shop is live for browsing – checkout coming soon!
  </div>
);

/* ────────────────────────────────────── MAIN PAGE ────────────────────────────────────── */
export default function ShopPage() {
  const c = {
    bg: "#f8fafa",
    navbar: "#A8DADC",
    hero: "#5DA8A3",
    card: "#ffffff",
    text: "#1A3A5A",
    muted: "#4b5563",
    accent: "#5DA8A3",
    primary: "#185a82",
  };

  const products = [
    { id: 1, title: "Faith & Resilience Workbook", price: 24.99, category: "Workbooks", format: "Print + PDF", image: "https://images.unsplash.com/photo-1519682337058-a94d519337bc?auto=format&fit=crop&w=600&q=80" },
    { id: 2, title: "Biblical Mindfulness Journal", price: 18.99, category: "Journals", format: "PDF", image: "https://images.unsplash.com/photo-1497633763998-0966c12b2d84?auto=format&fit=crop&w=600&q=80" },
    { id: 3, title: "Christ-Centered Therapy Toolkit", price: 49.99, category: "Courses", format: "Online Course", image: "https://images.unsplash.com/photo-1581093458791-9d6f7a5f8b6b?auto=format&fit=crop&w=600&q=80" },
    { id: 4, title: "Healing Through Scripture Cards", price: 14.99, category: "Cards", format: "Physical", image: "https://images.unsplash.com/photo-1586953208448-0b3c4e87b5b2?auto=format&fit=crop&w=600&q=80" },
    { id: 5, title: "LMP Annual Membership", price: 99.0, category: "Membership", format: "Digital", image: "https://images.unsplash.com/photo-1516321310766-93d96d8f0e9e?auto=format&fit=crop&w=600&q=80" },
    { id: 6, title: "Group Therapy Guidebook", price: 34.99, category: "Workbooks", format: "Print", image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80" },
  ];

  /* ────── STATE ────── */
  const [filtered, setFiltered] = useState(products);
  const [cat, setCat] = useState("All");
  const [range, setRange] = useState([0, 100]);

  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [prodOpen, setProdOpen] = useState(false);
  const [selectedProd, setSelectedProd] = useState(null);
  const [comingSoonOpen, setComingSoonOpen] = useState(false);
  const [toast, setToast] = useState(null);

  /* ────── PERSISTENCE ────── */
  useEffect(() => {
    const saved = localStorage.getItem("cart");
    if (saved) setCart(JSON.parse(saved));
  }, []);

  useEffect(() => localStorage.setItem("cart", JSON.stringify(cart)), [cart]);

  /* ────── FILTERING ────── */
  useEffect(() => {
    let list = products;
    if (cat !== "All") list = list.filter((p) => p.category === cat);
    list = list.filter((p) => p.price >= range[0] && p.price <= range[1]);
    setFiltered(list);
  }, [cat, range]);

  /* ────── CART LOGIC ────── */
  const addToCart = (p) => {
    setCart((prev) => {
      const ex = prev.find((i) => i.id === p.id);
      if (ex) return prev.map((i) => (i.id === p.id ? { ...i, quantity: i.quantity + 1 } : i));
      return [...prev, { ...p, quantity: 1 }];
    });
    showToast(`${p.title} added to cart!`);
  };

  const updateQty = (id, q) => {
    if (q === 0) { removeItem(id); return; }
    setCart((prev) => prev.map((i) => (i.id === id ? { ...i, quantity: q } : i)));
  };

  const removeItem = (id) => {
    const it = cart.find((i) => i.id === id);
    setCart((prev) => prev.filter((i) => i.id !== id));
    showToast(`${it?.title} removed.`, "error");
  };

  const total = cart.reduce((s, i) => s + i.price * i.quantity, 0).toFixed(2);

  const showToast = (msg, type = "success") => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 3000);
  };

  const openProd = (p) => {
    setSelectedProd(p);
    setProdOpen(true);
  };

  const openComingSoon = () => {
    setCartOpen(false);
    setComingSoonOpen(true);
  };

  return (
    <div
      className="min-h-screen font-sans"
      style={{
        backgroundColor: c.bg,
        color: c.text,
        fontFamily: "'Alegreya Sans', sans-serif",
      }}
    >
      <UnderConstructionBanner />
      <Navbar colors={c} />

      {/* HERO */}
      <section
        className="pt-32 pb-20 text-center bg-gradient-to-b from-[#9dd5d6] to-[#f9fafa]"
      >
        <div className="absolute inset-0 opacity-5">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h1
            className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-lg"
            style={{
              fontFamily: "'Alegreya Sans SC', sans-serif",
              color: "#3c3333",
              textShadow: `0 2px 10px ${c.navbar}40`,
            }}
          >
            SHOP RESOURCES
          </h1>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "#000000" }}>
            Equip your practice with Christ-centered tools, workbooks, and courses.
          </p>
        </div>
      </section>

      {/* FILTERS + CART + GRID */}
      <section className="py-12 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* LEFT COLUMN: FILTERS + CART SUMMARY */}
          <aside className="lg:w-80 space-y-8">
            {/* FILTERS */}
            <div
              className="p-6 rounded-2xl shadow-lg bg-white/80 backdrop-blur-sm"
              style={{ border: "1px solid #185a82" }}
            >
              <h3 className="font-bold text-xl mb-6" style={{ color: "#3c3333" }}>
                Filters
              </h3>

              {/* Category */}
              <div className="mb-8">
                <h4 className="font-semibold mb-3" style={{ color: "#3c3333" }}>
                  Category
                </h4>
                {["All", "Workbooks", "Journals", "Courses", "Cards", "Membership"].map((ct) => (
                  <label
                    key={ct}
                    className="flex items-center mb-2 cursor-pointer text-base"
                    style={{ color: "#000000" }}
                  >
                    <input
                      type="radio"
                      name="cat"
                      value={ct}
                      checked={cat === ct}
                      onChange={() => setCat(ct)}
                      className="mr-2 accent-[#185a82]"
                    />
                    {ct}
                  </label>
                ))}
              </div>

              {/* Price */}
              <div>
                <h4 className="font-semibold mb-3" style={{ color: "#3c3333" }}>
                  Price Range
                </h4>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={range[1]}
                  onChange={(e) => setRange([range[0], +e.target.value])}
                  className="w-full h-2 rounded-lg appearance-none cursor-pointer"
                  style={{ accentColor: "#185a82" }}
                />
                <div className="flex justify-between text-sm mt-2" style={{ color: "#3c3333" }}>
                  <span>${range[0]}</span>
                  <span>${range[1]}</span>
                </div>
              </div>
            </div>

            {/* CART SUMMARY (appears only when items exist) */}
            <CartSummary
              cart={cart}
              total={total}
              openCartModal={() => setCartOpen(true)}
              removeItem={removeItem}
              updateQty={updateQty}
            />
          </aside>

          {/* PRODUCT GRID */}
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((p) => (
                <div
                  key={p.id}
                  className="group rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border"
                  style={{
                    backgroundColor: c.card,
                    borderColor: "#185a82",
                    borderWidth: "1px",
                  }}
                >
                  <div className="h-52 overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-semibold text-lg mb-1 line-clamp-2" style={{ color: "#3c3333" }}>
                      {p.title}
                    </h3>
                    <p className="text-sm mb-3" style={{ color: "#4b5563" }}>
                      {p.format} • {p.category}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold" style={{ color: "#185a82" }}>
                        ${p.price.toFixed(2)}
                      </span>
                      <div className="flex gap-2">
                        <button
                          onClick={() => addToCart(p)}
                          className="px-4 py-2 rounded-full text-sm font-semibold text-white transition-all hover:shadow-md"
                          style={{ backgroundColor: "#185a82" }}
                        >
                          Add
                        </button>
                        <button
                          onClick={() => openProd(p)}
                          className="px-4 py-2 rounded-full text-sm font-semibold border transition-all hover:bg-[#185a82] hover:text-white"
                          style={{ borderColor: "#185a82", color: "#3c3333" }}
                        >
                          View
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filtered.length === 0 && (
              <p className="text-center py-12 text-lg" style={{ color: c.muted }}>
                No products match your filters.
              </p>
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-center bg-gradient-to-b from-[#9dd5d6] to-[#f9fafa]">
        <div className="max-w-4xl mx-auto px-6">
          <h2
            className="text-3xl font-bold mb-4"
            style={{ fontFamily: "'Alegreya Sans SC', Alegreya Sans", color: "#3c3333" }}
          >
            Become a Member & Save 20%
          </h2>
          <p className="mb-6" style={{ color: "#000000" }}>
            Unlock exclusive resources, courses, and community access.
          </p>
          <button
            className="px-8 py-3 rounded-full font-semibold shadow-lg transition-all text-white hover:shadow-xl"
            style={{ backgroundColor: "#185a82" }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#134a6b")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "#185a82")}
          >
            Join LMP Membership
          </button>
        </div>
      </section>

      <Footer colors={c} />

      {/* ────── MODALS ────── */}
      <CartModal
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        cart={cart}
        updateQty={updateQty}
        removeItem={removeItem}
        total={total}
        openComingSoon={openComingSoon}
      />
      <ProductModal
        product={selectedProd}
        open={prodOpen}
        onClose={() => setProdOpen(false)}
        addToCart={addToCart}
      />
      <ComingSoonModal
        open={comingSoonOpen}
        onClose={() => setComingSoonOpen(false)}
      />

      {/* ────── TOAST ────── */}
      {toast && <Toast msg={toast.msg} type={toast.type} onClose={() => setToast(null)} />}

      {/* ────── ANIMATIONS ────── */}
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fade-in 0.4s ease-out; }
      `}</style>
    </div>
  );
}