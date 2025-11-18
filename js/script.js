// js/script.js
document.addEventListener('DOMContentLoaded', () => {
  const lb = document.getElementById('lightbox');
  const lbImg = document.getElementById('lb-img');
  const lbCap = document.getElementById('lb-cap');
  const btnClose = lb?.querySelector('.lb-close');

  if (!lb || !lbImg || !lbCap || !btnClose) return; // 安全兜底

  // 显示大图
  function openLightbox(src, title = '') {
    lbImg.src = src;
    lbImg.alt = title;
    lbCap.textContent = title;
    lb.classList.add('show');
    lb.setAttribute('aria-hidden', 'false');
  }

  // 关闭大图
  function closeLightbox() {
    lb.classList.remove('show');
    lb.setAttribute('aria-hidden', 'true');
    lbImg.src = '';
    lbImg.alt = '';
    lbCap.textContent = '';
  }

  // 绑定缩略图点击
  document.querySelectorAll('.thumb').forEach(img => {
    img.addEventListener('click', () => {
      const full = img.getAttribute('data-full') || img.src;
      const title = img.getAttribute('data-title') || img.alt || '';
      openLightbox(full, title);
    });
  });

  // 关闭交互：按钮、点空白、Esc
  btnClose.addEventListener('click', closeLightbox);
  lb.addEventListener('click', (e) => {
    if (e.target === lb) closeLightbox(); // 只点到遮罩空白处才关
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lb.classList.contains('show')) closeLightbox();
  });
});
