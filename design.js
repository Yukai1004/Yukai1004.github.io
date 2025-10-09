console.log("design.js 読み込まれたよ！");

document.addEventListener("DOMContentLoaded", function () {
  // --- 要素取得 ---
  const phoneOption = document.querySelector('.contact-method-specific input[name="contact_method"][value="phone"]');
  const formOption = document.querySelector('.contact-method-specific input[name="contact_method"][value="form"]');
  const phoneSection = document.querySelector('.contact-phone');
  const formSection = document.querySelector('.contact-form');

  const phonePref = document.querySelector('input[name="ご希望の連絡方法"][value="電話"]');
  const mailPref = document.querySelector('input[name="ご希望の連絡方法"][value="メール"]');
  const phoneNote = document.querySelector('.note');

  // --- 共通: 表示/非表示ユーティリティ ---
  function setVisible(element, visible) {
    if (!element) return;
    element.style.display = visible ? 'block' : 'none';
    element.classList.toggle('hidden', !visible);
  }

  // --- フォーム切り替え ---
  function toggleContactMethod() {
    if (!phoneOption || !formOption || !phoneSection || !formSection) return;
    const showPhone = phoneOption.checked;
    setVisible(phoneSection, showPhone);
    setVisible(formSection, !showPhone);
  }

  if (phoneOption) phoneOption.addEventListener('change', toggleContactMethod);
  if (formOption) formOption.addEventListener('change', toggleContactMethod);
  toggleContactMethod(); // 初期表示

  // --- 注意文（電話を選んだ時だけ表示） ---
  function toggleNote() {
    if (!phoneNote || !phonePref) return;
    setVisible(phoneNote, !!phonePref.checked);
  }

  if (phonePref) phonePref.addEventListener('change', toggleNote);
  if (mailPref) mailPref.addEventListener('change', toggleNote);
  toggleNote(); // 初期表示

  // --- 電話番号入力制御（数字のみ） ---
  const telInput = document.getElementById('user_tel');
  if (telInput) {
    telInput.addEventListener('input', function () {
      telInput.value = telInput.value.replace(/[^0-9]/g, '');
    });
  }
});


  // --- メールアドレス入力制御 ---
function checkForm(){
  const mailInput = document.getElementById('user_mail');
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const adress = mailInput.value;
      if (emailPattern.test(adress)) {
        console.log("有効なメールアドレスです");
      } else {
       window.alert("無効なメールアドレスです");
       return false;
      }

};
