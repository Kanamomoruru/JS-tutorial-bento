'use strict';

const NAME = document.getElementById("name");
const PRICE = document.getElementById("price");
const IMAGE = document.getElementById("image");

//並
const NAMI = document.getElementById("nami");
NAMI.onclick = () => {
    NAME.textContent = "お弁当 -並-";
    PRICE.textContent = "1000";
    IMAGE.setAttribute("src", "img/nami.png");
}

NAMI.addEventListener("mouseenter", () => {
    NAMI.classList.add("btn-lg");
}, false);

NAMI.addEventListener("mouseleave", () => {
    NAMI.classList.remove("btn-lg");
}, false);

//上
const JOU = document.getElementById("jou");
JOU.onclick = () => {
    NAME.textContent = "お弁当 -上-";
    PRICE.textContent = "2000";
    IMAGE.setAttribute("src", "img/jou.png");
}

JOU.addEventListener("mouseenter", () => {
    JOU.classList.add("btn-lg");
}, false);

JOU.addEventListener("mouseleave", () => {
    JOU.classList.remove("btn-lg");
}, false);

//カートに商品を追加
const CART_CONFIRM = document.getElementById("cartConfirm");
const CART_LIST = document.getElementById("cartList");

CART_CONFIRM.onclick = () => {
    const LI = `<li>${NAME.textContent}</li>`;
    CART_LIST.insertAdjacentHTML("beforeend", LI);
}

//出力
const OPTION_ANSWER = document.getElementById("optionAnswer");

//ラジオボタン　-name属性あり
function riceButtonClick(){
    const RICE_INPUT = document.riceForm.rice;
    let rice_output;
    for (let i = 0; i < RICE_INPUT.length; i++) {
        if(RICE_INPUT[i].checked) {
            rice_output = RICE_INPUT[i].value;
        }
    }

    OPTION_ANSWER.textContent = `ご飯の量: ${rice_output}`;
};

function accessoryButtonClick(){
    const ACCESSORY_INPUT = document.accessoryForm.accessory;
    let accessory_output = '';
    for (let i = 0; i < ACCESSORY_INPUT.length; i++) {
        if(ACCESSORY_INPUT[i].checked) {
            accessory_output = accessory_output + ' ' + ACCESSORY_INPUT[i].value;
        }
    }

    OPTION_ANSWER.textContent = `付属品: ${accessory_output}`;
};

function mediaButtonClick(){
    const MEDIA_INPUT = document.mediaForm.media;
    const NUM = MEDIA_INPUT.selectedIndex;
    OPTION_ANSWER.textContent = `当店を知ったきっかけ: ${MEDIA_INPUT.options[NUM].value}`;
}

function addressButtonClick(){
    const ADDRESS = document.addressForm.address.value;
    OPTION_ANSWER.textContent = `お届け先住所: ${ADDRESS}`;
}

function requestButtonClick(){
    const REQUEST = document.requestForm.request.value;
    OPTION_ANSWER.textContent = `その他ご要望: ${REQUEST}`;
}