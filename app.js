// Browser-only host identification and clock; never fabricates telemetry.
function refreshBrowserStatus() {
  document.getElementById('host').textContent = window.location.hostname || 'local file';
  document.getElementById('clock').textContent = new Date().toISOString();
}
function initializeDashboard() {
  refreshBrowserStatus();
  document.getElementById('refresh').addEventListener('click', function () {
    refreshBrowserStatus();
    document.getElementById('message').textContent = 'Browser time refreshed. Demo metrics are unchanged.';
  });
  document.getElementById('message').textContent = 'Browser script loaded successfully. Clock updates every second.';
  window.setInterval(refreshBrowserStatus, 1000);
}
initializeDashboard();
