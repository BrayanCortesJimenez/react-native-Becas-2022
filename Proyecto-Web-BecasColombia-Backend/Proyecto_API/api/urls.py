from  django.urls import path   
from .views import BecaView

urlpatterns=[
    path('beca/', BecaView.as_view(), name='beca_list'),
    path('beca/<int:id>', BecaView.as_view(), name='beca_process')
]