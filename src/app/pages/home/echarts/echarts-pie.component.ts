import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { DataCountryService } from '../../../auth/_services/dataCountry.service';
import { CountriesByContinent } from '../../../model/countries-by-continent';


@Component({
  selector: 'ngx-echarts-pie',
  template: `
    <div echarts [options]="options" class="echart"></div>
  `,
})
export class EchartsPieComponent implements AfterViewInit, OnDestroy {
  options: any = {};
  themeSubscription: any;

  constructor(private theme: NbThemeService,
    public dataCountryService: DataCountryService) {
  }

  ngAfterViewInit() {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {
 
      const colors = config.variables;
      const echarts: any = config.variables.echarts;

      this.options = {
        backgroundColor: echarts.bg,
        color: [colors.warningLight, colors.infoLight, colors.dangerLight, colors.successLight, colors.primaryLight],
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)',
        },
        legend: {
          orient: 'vertical',
          left: 'left',
          data: ['Asia', 'Europe', 'Oceania', 'North America', 'South America','Africa'],
          textStyle: {
            color: echarts.textColor,
          },
        },
        series: [
          {
            name: 'Countries',
            type: 'pie',
            radius: '80%',
            center: ['50%', '50%'],
            data: [
              { value: 500, name: 'Africa' },
              { value: 336, name: 'South America' },
              { value: 311, name: 'North America' },
              { value: 234, name: 'Oceania' },
              { value: 135, name: 'Europe' },
              { value: 1048, name: 'Asia' },
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: echarts.itemHoverShadowColor,
              },
            },
            label: {
              normal: {
                textStyle: {
                  color: echarts.textColor,
                },
              },
            },
            labelLine: {
              normal: {
                lineStyle: {
                  color: echarts.axisLineColor,
                },
              },
            },
          },
        ],
      };
    });
  }

  getCountriesByContinent() {
    this.dataCountryService.getCountriesByContinent().subscribe(
      data => {
        console.log("getCountriesByContinent",data)
        this.dataCountryService.countriesByContinent = data as CountriesByContinent[];
      },
      err => {
        console.log(err)
      }
    );
  }



  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
}
