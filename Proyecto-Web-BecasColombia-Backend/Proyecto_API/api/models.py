from django.db import models

# Create your models here.

class Beca(models.Model):
    nombre=models.CharField(max_length=40)
    porcentaje=models.IntegerField(default=50)
    pais=models.CharField(max_length=30)
    universidad=models.CharField(max_length=40)
    requerimientos=models.CharField(max_length=100)