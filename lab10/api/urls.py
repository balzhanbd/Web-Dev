from django.urls import path
from . import views

urlpatterns = [
    path('companies/', views.company_list),
    path('companies/<int:pk>/', views.company_detail),
    path('companies/<int:pk>/vacancies/', views.company_vacancies),
    path('vacancies/', views.VacancyList.as_view()),
    path('vacancies/<int:pk>/', views.VacancyDetail.as_view()),
    path('vacancies/top_ten/', views.TopTenVacancies.as_view()),
]