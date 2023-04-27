const data = {
    labels: ['Vendas', 'Não vendido'],
    datasets: [{
      label: 'Porcentagem vendida',
      data: [80, 20],
      backgroundColor: [
        'rgba(54, 162, 235, 0.6)',
        'rgba(255, 99, 132, 0.6)'
      ]
    }]
  };

  const pieChart = new Chart(document.getElementById('pie-chart'), {
    type: 'pie',
    data: data
  });