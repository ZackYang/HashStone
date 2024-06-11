function CSRFToken() {
  const splitCookies = document.cookie.split('; ');
  return splitCookies.find(cookie => cookie.startsWith("CSRF-TOKEN=")).split('=')[1];
}
export default CSRFToken;