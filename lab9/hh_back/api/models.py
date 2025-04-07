from django.db import models
class Company(models.Model):
    name = models.CharField(max_length=255, unique=True)
    description = models.TextField(blank=True)
    city = models.CharField(max_length=100)
    address = models.TextField()

    def __str__(self):
        return self.name


class Vacancy(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField(blank=True)
    salary = models.FloatField()
    company = models.ForeignKey(Company, on_delete=models.CASCADE, related_name="vacancies")

    def __str__(self):
        return f"{self.name} - {self.salary} USD"
