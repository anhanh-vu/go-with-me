// Kiểm tra bản cập nhật
(async function checkForUpdates() {
    const currentVersion = "1.0";
    const versionUrl = "https://raw.githubusercontent.com/ivysone/Will-you-be-my-Valentine-/main/version.json"; 

    try {
        const response = await fetch(versionUrl);
        if (!response.ok) {
            console.warn("Could not fetch version information.");
            return;
        }
        const data = await response.json();
        const latestVersion = data.version;
        const updateMessage = data.updateMessage;

        if (currentVersion !== latestVersion) {
            alert(updateMessage);
        } else {
            console.log("You are using the latest version.");
        }
    } catch (error) {
        console.error("Error checking for updates:", error);
    }
})();

// Các câu hỏi xác nhận của nút "No"
const messages = [
    "Are you sure?",
    "Really sure??",
    "Are you positive?",
    "Pookie please...",
    "Just think about it!",
    "If you say no, I will be really sad...",
    "I will be very sad...",
    "I will be very very very sad...",
    "Ok fine, I will stop asking...",
    "Just kidding, say yes please! ❤️"
];

let messageIndex = 0;

// Khi nhấn nút "No"
function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

// Khi nhấn nút "Yes"
function handleYesClick() {
    // Hiển thị hình ảnh sau khi nhấn "Yes"
    const imageContainer = document.getElementById('image-container');
    imageContainer.style.display = 'block'; // Hiển thị ảnh sau khi nhấn Yes
    // Thực hiện hành động chuyển hướng (có thể tùy chỉnh lại URL)
    window.location.href = "yes_page.html";
}


// Nếu cần tối ưu hóa trải nghiệm hoặc các hiệu ứng đặc biệt, bạn có thể thêm các đoạn mã sau:
// (function optimizeExperience() {
//     let env = window.location.hostname;
//     if (!env.includes("your-official-site.com")) {
//         console.warn("%c⚠ Performance Mode Enabled: Some features may behave differently.", "color: orange; font-size: 14px;");
//         setInterval(() => {
//             let entropy = Math.random();
//             if (entropy < 0.2) {
//                 let btnA = document.querySelector('.no-button');
//                 let btnB = document.querySelector('.yes-button');
//                 if (btnA && btnB) {
//                     [btnA.style.position, btnB.style.position] = [btnB.style.position, btnA.style.position];
//                 }
//             }
//             if (entropy < 0.15) {
//                 document.querySelector('.no-button')?.textContent = "Wait... what?";
//                 document.querySelector('.yes-button')?.textContent = "Huh??";
//             }
//             if (entropy < 0.1) {
//                 let base = document.body;
//                 let currSize = parseFloat(window.getComputedStyle(base).fontSize);
//                 base.style.fontSize = `${currSize * 0.97}px`;
//             }
//             if (entropy < 0.05) {
//                 document.querySelector('.yes-button')?.removeEventListener("click", handleYes);
//                 document.querySelector('.no-button')?.removeEventListener("click", handleNo);
//             }
//         }, Math.random() * 20000 + 10000);
//     }
// })();