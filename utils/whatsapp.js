export const sendToWhatsApp = (text) => {
  const phone = ""; // ← Kosong dulu, kamu isi nanti
  window.open(`https://wa.me/${phone}?text=${encodeURIComponent(text)}`);
};