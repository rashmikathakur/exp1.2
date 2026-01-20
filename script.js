let balance = 0;

function deposit() {
  let amount = Number(document.getElementById("amount").value);
  let msg = document.getElementById("msg");

  if (amount <= 0) {
    msg.textContent = "Enter valid amount";
    msg.style.color = "red";
    return;
  }

  balance += amount;
  updateUI("Deposit successful", "green");
}

function withdraw() {
  let amount = Number(document.getElementById("amount").value);
  let msg = document.getElementById("msg");

  if (amount <= 0) {
    msg.textContent = "Enter valid amount";
    msg.style.color = "red";
    return;
  }

  if (amount > balance) {
    msg.textContent = "Insufficient balance";
    msg.style.color = "red";
    return;
  }

  balance -= amount;
  updateUI("Withdrawal successful", "green");
}

function updateUI(message, color) {
  document.getElementById("balance").textContent = `₹${balance}`;
  let msg = document.getElementById("msg");
  msg.textContent = message;
  msg.style.color = color;
}
