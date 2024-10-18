export function openFullscreen() {
    if (!document) {
        return;
    }
    if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
    }
}

export function closeFullscreen() {
    if (!document) {
        return;
    }
    // ตรวจสอบว่าเอกสารอยู่ใน fullscreen ก่อนที่จะเรียก exitFullscreen
    if (document.fullscreenElement) {
        document.exitFullscreen();
    }
}