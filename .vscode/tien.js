<script>
  const cartPopup = document.getElementById("cartPopup");
  const quantityInput = document.getElementById("quantityInput");
  const totalPrice = document.getElementById("totalPrice");
  let currentPrice = 0;

  // Hiện popup khi bấm nút
  document.querySelectorAll(".add").forEach((btn) => {
    btn.addEventListener("click", function () {
      const product = this.closest(".product");
      const priceText = product.querySelector("p").innerText;
      const price = parseInt(priceText.match(/\d+/g)[0]); // Lấy số tiền

      currentPrice = price;
      quantityInput.value = 1;
      totalPrice.innerText = price;

      cartPopup.style.display = "block";
    });
  });

  // Tính lại tổng tiền khi thay đổi số lượng
  quantityInput.addEventListener("input", function () {
    const qty = parseInt(this.value) || 1;
    totalPrice.innerText = qty * currentPrice;
  });

  function closePopup() {
    cartPopup.style.display = "none";
  }
</script>
