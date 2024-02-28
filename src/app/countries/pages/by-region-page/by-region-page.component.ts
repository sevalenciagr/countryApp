import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

type Region = 'Africa'| 'Europe'| 'Americas'| 'Asia'| 'Oceania';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styleUrl: './by-region-page.component.css'
})
export class ByRegionPageComponent {

  public countries: Country[] = [];
  public isLoading: boolean = false;
  public regions: Region[] = ['Africa', 'Europe', 'Americas', 'Asia', 'Oceania'];
  public selectedRegion?: Region;

  constructor(
    private countriesService: CountriesService
  ) {}

  searchByRegion( region: Region ): void {

    this.selectedRegion = region;

    this.isLoading = true;
    this.countriesService.searchRegion( region )
      .subscribe( countries => {
        this.countries = countries;
        this.isLoading = false;
      })
  }

}
