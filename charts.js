/* ── Charts Module ── */

function initCharts() {

  const BLUE   = '#185FA5';
  const TEAL   = '#1D9E75';
  const BLUE_L = '#B5D4F4';
  const TEAL_L = '#9FE1CB';
  const AMBER  = '#EF9F27';
  const PURPLE = '#7F77DD';
  const CORAL  = '#D85A30';
  const GRAY   = '#B4B2A9';

  const gridColor  = 'rgba(0,0,0,0.06)';
  const tickColor  = '#888780';
  const tickFont   = { family: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif", size: 11 };

  const baseScales = {
    x: { grid: { color: gridColor }, ticks: { color: tickColor, font: tickFont } },
    y: { grid: { color: gridColor }, ticks: { color: tickColor, font: tickFont } }
  };

  /* ── Market size chart ── */
  const mktCtx = document.getElementById('mktChart');
  if (mktCtx) {
    new Chart(mktCtx, {
      type: 'line',
      data: {
        labels: DATA.marketSize.labels,
        datasets: [
          {
            label: 'Actual ($B)',
            data: DATA.marketSize.actual,
            borderColor: BLUE,
            backgroundColor: 'rgba(24,95,165,0.08)',
            borderWidth: 2,
            pointBackgroundColor: BLUE,
            pointRadius: 4,
            spanGaps: false,
            fill: true,
            tension: 0.35
          },
          {
            label: 'Projected ($B)',
            data: DATA.marketSize.projected,
            borderColor: TEAL,
            backgroundColor: 'rgba(29,158,117,0.06)',
            borderWidth: 2,
            borderDash: [5, 4],
            pointBackgroundColor: TEAL,
            pointRadius: 4,
            spanGaps: false,
            fill: false,
            tension: 0.35
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              label: ctx => ` $${ctx.parsed.y}B`
            }
          }
        },
        scales: {
          ...baseScales,
          y: {
            ...baseScales.y,
            ticks: {
              ...baseScales.y.ticks,
              callback: v => `$${v}B`
            }
          }
        }
      }
    });
  }

  /* ── Segment revenue grouped bar ── */
  const segCtx = document.getElementById('segChart');
  if (segCtx) {
    new Chart(segCtx, {
      type: 'bar',
      data: {
        labels: DATA.segmentRevenue.labels,
        datasets: [
          {
            label: '2025 ($B)',
            data: DATA.segmentRevenue.rev2025,
            backgroundColor: BLUE,
            borderRadius: 4,
            borderSkipped: false
          },
          {
            label: '2030 projected ($B)',
            data: DATA.segmentRevenue.rev2030,
            backgroundColor: TEAL,
            borderRadius: 4,
            borderSkipped: false
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              label: ctx => ` $${ctx.parsed.y}B`
            }
          }
        },
        scales: {
          ...baseScales,
          x: { ...baseScales.x, ticks: { ...baseScales.x.ticks, autoSkip: false } },
          y: {
            ...baseScales.y,
            ticks: { ...baseScales.y.ticks, callback: v => `$${v}B` }
          }
        }
      }
    });
  }

  /* ── Deal share grouped bar ── */
  const dealCtx = document.getElementById('dealChart');
  if (dealCtx) {
    new Chart(dealCtx, {
      type: 'bar',
      data: {
        labels: DATA.dealShare.labels,
        datasets: [
          {
            label: '2015–2020 (%)',
            data: DATA.dealShare.period1,
            backgroundColor: GRAY,
            borderRadius: 4,
            borderSkipped: false
          },
          {
            label: '2021–H1 2025 (%)',
            data: DATA.dealShare.period2,
            backgroundColor: BLUE,
            borderRadius: 4,
            borderSkipped: false
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              label: ctx => ` ${ctx.parsed.y}% of deals`
            }
          }
        },
        scales: {
          ...baseScales,
          x: { ...baseScales.x, ticks: { ...baseScales.x.ticks, autoSkip: false } },
          y: {
            ...baseScales.y,
            ticks: { ...baseScales.y.ticks, callback: v => `${v}%` }
          }
        }
      }
    });
  }

  /* ── Annual funding line ── */
  const fundCtx = document.getElementById('fundChart');
  if (fundCtx) {
    new Chart(fundCtx, {
      type: 'bar',
      data: {
        labels: DATA.funding.labels,
        datasets: [
          {
            label: 'Total funding ($B)',
            data: DATA.funding.total,
            backgroundColor: BLUE,
            borderRadius: 4,
            borderSkipped: false,
            order: 2
          },
          {
            label: 'Early-stage ($B)',
            data: DATA.funding.earlyStage,
            backgroundColor: TEAL,
            borderRadius: 4,
            borderSkipped: false,
            order: 1
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              label: ctx => ` $${ctx.parsed.y.toFixed(1)}B`
            }
          }
        },
        scales: {
          ...baseScales,
          x: { ...baseScales.x, ticks: { ...baseScales.x.ticks, autoSkip: false } },
          y: {
            ...baseScales.y,
            ticks: { ...baseScales.y.ticks, callback: v => `$${v}B` }
          }
        }
      }
    });
  }
}
