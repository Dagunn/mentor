const btnTariff = document.querySelectorAll('.btn');

btnTariff.forEach(btn => {
  btn.addEventListener('click', () => {
    const card = btn.closest('.tariff__card');
    const tariffTitle = card.querySelector('.tariff__card-header-title');
    console.log(tariffTitle.textContent);
  });
})