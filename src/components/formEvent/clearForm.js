function clearForm() {
  const inputs = document.querySelectorAll('form input');
  inputs.forEach((item) => item.value = '');
}

export default clearForm;
