(() => {
  const KEY = "jung_auth_ok";
  const PASSWORD = "jung!2026"; // pakeisk

  // jau patvirtinta šioje sesijoje
  if (sessionStorage.getItem(KEY) === "1") return;

  const entered = prompt("Enter password to access the signatures:");
  if (entered === PASSWORD) {
    sessionStorage.setItem(KEY, "1");
    return;
  }

  document.documentElement.innerHTML = `
    <head><meta charset="utf-8"><title>Access denied</title><script src="/Jung-parasai/auth.js"></script>
</head>
    <body style="font-family:Arial;padding:24px">
      <h2>Access denied</h2>
    </body>`;
  throw new Error("Wrong password");
})();