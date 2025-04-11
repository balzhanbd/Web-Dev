import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyService } from './services/company.service';
import { Company } from './interfaces/company.interface';
import { Vacancy } from './interfaces/vacancy.interface';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  companies: Company[] = [];
  selectedCompany: Company | null = null;
  vacancies: Vacancy[] = [];

  constructor(private companyService: CompanyService) {}

  ngOnInit(): void {
    this.companyService.getCompanies().subscribe(
      (data) => {
        this.companies = data;
        console.log('Companies loaded:', data);
      },
      (error) => {
        console.error('Error fetching companies', error);
      }
    );
  }

  onCompanySelect(company: Company): void {
    this.selectedCompany = company;
    this.companyService.getVacanciesByCompany(company.id).subscribe((data) => {
      this.vacancies = data;
      console.log('Vacancies loaded:', data);
    });
  }
}
