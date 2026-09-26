(() => {
  const rates = {
    residence: { name: 'Custom residence', low: 28, high: 42 },
    commercial: { name: 'Commercial interior', low: 18, high: 30 },
    reuse: { name: 'Adaptive reuse', low: 25, high: 38 }
  };
  const addOns = { permit: { name: 'Permit handling', rate: 0.08 }, landscape: { name: 'Landscape architecture', rate: 0.12 }, interiors: { name: 'Full interior design', rate: 0.25 } };
  const formatMoney = amount => {
    const rounded = Math.round(amount / 1000) * 1000;
    if (rounded >= 1000000) return `$${(rounded / 1000000).toFixed(rounded % 1000000 === 0 ? 0 : 1)}m`;
    return `$${Math.round(rounded / 1000)}k`;
  };

  window.initEstimator = function initEstimator() {
    const areaInput = document.getElementById('area-range');
    const areaOutput = document.getElementById('area-output');
    if (!areaInput || areaInput.dataset.bound === 'true') return;
    areaInput.dataset.bound = 'true';
    let selectedType = 'residence';
    const update = () => {
      const area = Number(areaInput.value);
      const type = rates[selectedType];
      const selected = Array.from(document.querySelectorAll('.addon-check:checked')).map(input => addOns[input.value]).filter(Boolean);
      const addOnRate = selected.reduce((total, addon) => total + addon.rate, 0);
      const lowRate = type.low * (1 + addOnRate);
      const highRate = type.high * (1 + addOnRate);
      const low = area * lowRate;
      const high = area * highRate;
      areaOutput.textContent = area.toLocaleString('en-US');
      document.getElementById('summary-range').textContent = `${formatMoney(low)}–${formatMoney(high)}`;
      document.getElementById('summary-unit').textContent = `$${lowRate.toFixed(0)}–$${highRate.toFixed(0)} per sq ft · ${area.toLocaleString('en-US')} sq ft`;
      document.getElementById('summary-type').textContent = type.name;
      document.getElementById('summary-base').textContent = `${formatMoney(area * type.low)}–${formatMoney(area * type.high)}`;
      document.getElementById('summary-addons').textContent = selected.length ? selected.map(addon => addon.name).join(', ') : 'None';
      const form = document.getElementById('inquiry-form');
      form.dataset.estimate = `${formatMoney(low)}–${formatMoney(high)}`;
      form.dataset.type = type.name;
      form.dataset.area = area.toLocaleString('en-US');
      form.dataset.addons = selected.length ? selected.map(addon => addon.name).join(', ') : 'None';
    };

    document.querySelectorAll('.type-option').forEach(button => button.addEventListener('click', () => {
      selectedType = button.dataset.type;
      document.querySelectorAll('.type-option').forEach(option => option.classList.toggle('selected', option === button));
      update();
    }));
    areaInput.addEventListener('input', update);
    document.querySelectorAll('.addon-check').forEach(input => input.addEventListener('change', update));
    const form = document.getElementById('inquiry-form');
    document.getElementById('continue-inquiry').addEventListener('click', () => {
      form.classList.add('visible');
      document.getElementById('estimate-progress').textContent = 'Inquiry / Tell us about it';
      document.getElementById('continue-inquiry').textContent = 'Inquiry form open';
      document.getElementById('continue-inquiry').disabled = true;
      form.scrollIntoView({ behavior: 'smooth', block: 'start' });
      document.getElementById('contact-name').focus({ preventScroll: true });
    });
    form.addEventListener('submit', event => {
      event.preventDefault();
      if (!form.reportValidity()) return;
      const name = document.getElementById('contact-name').value.trim();
      const confirmation = document.getElementById('form-confirmation');
      confirmation.innerHTML = `<strong>Thank you, ${name}.</strong> Your project outline is ready with a preliminary design range of ${form.dataset.estimate}. Studio Forma will follow up using the email address you provided.`;
      confirmation.classList.add('visible');
      form.querySelector('.submit-inquiry').textContent = 'Inquiry prepared';
      form.querySelector('.submit-inquiry').disabled = true;
    });
    update();
  };
})();
