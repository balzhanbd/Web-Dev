from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Company, Vacancy
from .serializers import CompanySerializer, VacancySerializer
from rest_framework.views import APIView
from django.shortcuts import get_object_or_404

@api_view(['GET', 'POST'])
def company_list(request):
    if request.method == 'GET':
        companies = Company.objects.all()
        serializer = CompanySerializer(companies, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = CompanySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)
    
@api_view(['GET', 'PUT'])
def company_detail(request, pk):
    company = Company.objects.get(pk=pk)

    if request.method == 'GET':
        serializer = CompanySerializer(company)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = CompanySerializer(company, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=400)
    
    
@api_view(['GET'])
def company_vacancies(request, pk):
    company = Company.objects.get(pk=pk)
    vacancies = company.vacancies.all()
    serializer = VacancySerializer(vacancies, many=True)
    return Response(serializer.data)



class VacancyList(APIView):
    def get(self, request):
        vacancies = Vacancy.objects.all()
        serializer = VacancySerializer(vacancies, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = VacancySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)

class VacancyDetail(APIView):
    def get_object(self, pk):
        return get_object_or_404(Vacancy, pk=pk)

    def get(self, request, pk):
        vacancy = self.get_object(pk)
        serializer = VacancySerializer(vacancy)
        return Response(serializer.data)

    def put(self, request, pk):
        vacancy = self.get_object(pk)
        serializer = VacancySerializer(vacancy, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=400)

class TopTenVacancies(APIView):
    def get(self, request):
        top = Vacancy.objects.order_by('-salary')[:10]
        serializer = VacancySerializer(top, many=True)
        return Response(serializer.data)
