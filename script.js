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
    
    // Bắt đầu hiệu ứng chuyển động vòng quanh
    noButton.classList.add('moving');
    
    // Thay đổi nội dung của nút "No" sau mỗi lần nhấn
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;

    // Sau khi hiệu ứng vòng quanh hoàn tất, có thể loại bỏ lớp 'moving' để dừng chuyển động
    setTimeout(() => {
        noButton.classList.remove('moving');
    }, 3000);  // Thời gian hiệu ứng vòng quanh (3s)
}

// Khi nhấn nút "Yes"
function handleYesClick() {
    // Hiển thị hình ảnh sau khi nhấn "Yes"
    const imageContainer = document.createElement('div');
    imageContainer.id = 'image-container';
    const img = document.createElement('img');
    img.src = "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExMmo3c3l5ODh3ZGN6NHhhaDE2Mjg1ZjkwOXczdDFxbWM3dTBtaW9zaiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/9XY4f3FgFTT4QlaYqa/giphy.gif";
    img.alt = "Cute GIF";
    imageContainer.appendChild(img);
    document.body.appendChild(imageContainer);

    // Thực hiện hành động chuyển hướng (có thể tùy chỉnh lại URL)
    window.location.href = "yes_page.html";
}
