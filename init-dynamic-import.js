const button = document.querySelector('.js-import');

button.addEventListener('click', async () => {
  const { MY_CONSTANT } = await import('./dynamic-import.js');
  console.log('MY_CONSTANT', MY_CONSTANT);
});
