from django.shortcuts import render
from django.http.response import JsonResponse
from django.utils.decorators import method_decorator
from django.views import View
from django.views.decorators.csrf import csrf_exempt
from .models import Beca
import json
# Create your views here.

class BecaView(View):

    @method_decorator(csrf_exempt)
    def dispatch(self, request, *args, **kwargs):
        return super().dispatch(request, *args, **kwargs)


    def get(self,request, id=0):
        if (id>0):
            becas = list(Beca.objects.filter(id=id).values())
            if len(becas)>0:
                becaunica=becas[0]
                datos={'message':"Success",'becas':becas}
            else:    
                datos={'message':"Beca no encontrada"}
            return JsonResponse(datos)
        else:
            becas = list(Beca.objects.values())
            if len(becas)>0:
                datos={'message':"Success",'becas':becas}
            else:
                datos={'message':"Beca no encontrada"}
            return JsonResponse(datos)


    def post(self,request):
        # print(request.body)
        jd = json.loads(request.body)
        # print(jd)
        Beca.objects.create(nombre=jd['nombre'], porcentaje=jd['porcentaje'], pais=jd['pais'], universidad=jd['universidad'], requerimientos=jd['requerimientos'] )
        datos={'message':"Success"}
        return JsonResponse(datos)

    def put(self,request, id):
        jd = json.loads(request.body)
        becas = list(Beca.objects.filter(id=id).values())
        if len(becas)>0:
            beca=Beca.objects.get(id=id)
            beca.nombre=jd['nombre']
            beca.porcentaje=jd['porcentaje']
            beca.pais=jd['pais']
            beca.universidad=jd['universidad']
            beca.requerimientos=jd['requerimientos']
            beca.save()
            datos={'message':"Success"}
        else:    
            datos={'message':"Beca no encontrada"}
        return JsonResponse(datos)

    def delete(self,request,id):
        becas = list(Beca.objects.filter(id=id).values())
        if len(becas)>0:
            Beca.objects.filter(id=id).delete()
            datos={'message':"Success"}
        else:    
            datos={'message':"Beca no encontrada"}
        return JsonResponse(datos)