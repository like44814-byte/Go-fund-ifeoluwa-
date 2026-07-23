// =============================
// Copy Account Number
// =============================

const copyBtn = document.getElementById("copyBtn");

if (copyBtn) {
    copyBtn.addEventListener("click", () => {

        const accountNumber = document.getElementById("account-number").innerText;

        navigator.clipboard.writeText(accountNumber);

        copyBtn.innerText = "✅ Copied!";

        setTimeout(() => {
            copyBtn.innerText = "Copy Account Number";
        }, 2000);

    });
}


// =============================
// Animate Progress Bar
// =============================

window.addEventListener("load", () => {

    const progress = document.querySelector(".progress-fill");

    progress.style.width = "0%";

    setTimeout(() => {
        progress.style.transition = "2s";
        progress.style.width = "7.08%";
    }, 300);

});


// =============================
// Fade In Animation
// =============================

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

});

document.querySelectorAll(".card, .bank-card, .update-box").forEach((el) => {

    el.classList.add("hidden");

    observer.observe(el);

});


// =============================
// WhatsApp Share Button
// =============================

function shareWebsite() {

    if (navigator.share) {

        navigator.share({
            title: "Help Repair My Laptop",
            text: "Please support my fundraiser to repair my laptop motherboard.",
            url: window.location.href
        });

    } else {

        navigator.clipboard.writeText(window.location.href);

        alert("Website link copied!");

    }

}



// =============================
// Floating Donate Button
// =============================

const floatingButton = document.createElement("button");

floatingButton.innerHTML = "❤️ Donate";

floatingButton.className = "floatingDonate";

document.body.appendChild(floatingButton);

floatingButton.onclick = () => {

    document
        .getElementById("donate")
        .scrollIntoView({ behavior: "smooth" });

};


// =============================
// Add Share Button Automatically
// =============================

const shareButton = document.createElement("button");

shareButton.innerHTML = "📤 Share";

shareButton.className = "floatingShare";

document.body.appendChild(shareButton);

shareButton.onclick = shareWebsite;

// ---------------------------
// Donor Counter
// ---------------------------

// Update these with the real values.
let donors = 4;
let amountRaised = 12742;

document.getElementById("donorCount").textContent = donors;
document.getElementById("raisedAmount").textContent =
    "₦" + amountRaised.toLocaleString();