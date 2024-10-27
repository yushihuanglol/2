function inputWord() {
    const word = prompt("Введите слово(норма слов):");
    const monitorImage = document.getElementById("monitorImage");

    if (word === '06.09.2024') {
        monitorImage.src = 'new_image.png'; // Замените на Ваше изображение
        setTimeout(() => {
            monitorImage.src = 'new_image1.png'; // Возврат к исходному изображению через 3 секунды
        }, 3000);
    } else {
        monitorImage.src = 'not_correct.png'; // Картинка с фразой "не то"
        setTimeout(function(){
            location.reload();
        }, 2000);
    }
}
