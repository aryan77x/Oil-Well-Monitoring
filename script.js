const form = document.getElementById('wellForm');
const tableBody = document.querySelector('#dataTable tbody');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const formData = new FormData(form);
  const entry = {
    wellId: formData.get('wellId'),
    pressure: formData.get('pressure'),
    temperature: formData.get('temperature'),
    flowRate: formData.get('flowRate'),
    status: formData.get('status'),
    comments: formData.get('comments'),
    time: new Date().toLocaleString()
  };
  addEntryToTable(entry);
  form.reset();
});

function addEntryToTable(entry) {
  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${entry.wellId}</td>
    <td>${entry.pressure}</td>
    <td>${entry.temperature}</td>
    <td>${entry.flowRate}</td>
    <td>${entry.status}</td>
    <td>${entry.comments}</td>
    <td>${entry.time}</td>
  `;
  tableBody.prepend(row);
}
