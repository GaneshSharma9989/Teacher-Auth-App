import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { ChartData, ChartOptions, ChartType } from 'chart.js';
import { NgChartsModule } from 'ng2-charts';
import { ChartConfiguration } from 'chart.js';
@Component({
  selector: 'app-dashboard',
  imports: [HeaderComponent, NgChartsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
lineChartType: 'line' = 'line';
  public lineChartData: ChartData<'line'> = {
    labels: ['Student A', 'Student B', 'Student C', 'Student D', 'Student E', 'Student F', 'Student G'],
    datasets: [
      {
        data: [45, 55, 65, 75,85, 95,100 ],
        label: 'Marks Obtained',
        borderColor: '#007bff',
        backgroundColor: 'rgba(0,123,255,0.3)',
        tension: 0.4,
        fill: true
      }
    ]
  };

  public lineChartOptions: ChartOptions<'line'> = {
    responsive: true,
    plugins: {
      legend: { display: true },
      title: {
        display: true,
        text: 'Student Performance Chart'
      }
    }
  };
}
