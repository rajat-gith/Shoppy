import imp
from itertools import product
from operator import imod
from django.shortcuts import render
from django.http import JsonResponse
from base.products import products
from django.contrib.auth.models import User
from rest_framework.decorators import api_view
from rest_framework.response import Response
from base.models import Product
from rest_framework.decorators import api_view

from base.serializer import ProductSerializer

def getProducts(request):
    products=Product.objects.all()
    serializer=ProductSerializer(products,many=True)
    return Response(serializer.data)



@api_view(['GET'])
def getProduct(request,pk):
    product=Product.objects.get(_id=pk)
    serializer=ProductSerializer(product,many=False)
    return Response(serializer.data)